import type { YTVideo } from "./yt-search";

export interface RankedVideo extends YTVideo {
  score: number;
  quality: "RECOMMENDED" | "SUPPLEMENTARY" | "ADVANCED";
  reason: string;
}

// Trusted MBBS YouTube channels — Indian + International
const TRUSTED_CHANNELS: Record<string, number> = {
  // Indian MBBS channels (highest weight)
  marrow: 1.6,
  prepladder: 1.6,
  dbmci: 1.5,
  dams: 1.4,
  "dr vivek jain": 1.3,
  bhatia: 1.2,
  "unacademy neet pg": 1.3,
  "e gurukul": 1.2,

  // International medical channels
  "dr. najeeb": 1.5,
  "ninja nerd": 1.5,
  osmosis: 1.4,
  "medicosis perfectionalis": 1.4,
  "armando hasudungan": 1.3,
  "khan academy": 1.3,
  lecturio: 1.3,
  physeo: 1.2,
  "sketchy medical": 1.3,
  pathoma: 1.5,
  "boards and beyond": 1.3,
  "dirty medicine": 1.2,
  "strong medicine": 1.2,
  "larry mellick": 1.1,
  "geeky medics": 1.3,
  "zero to finals": 1.3,
  "dr matt & dr mike": 1.2,
};

export function rankVideos(
  videos: YTVideo[],
  topicName: string,
  maxVideos: number = 5
): RankedVideo[] {
  const topicWords = topicName
    .toLowerCase()
    .split(/\s+/)
    .filter((w) => w.length > 3);

  const scored = videos.map((video) => {
    let score = 0;
    const reasons: string[] = [];
    const titleLower = video.title.toLowerCase();
    const channelLower = video.channelName.toLowerCase();

    // Factor 1: View count (30 points max)
    if (video.viewCount > 1_000_000) {
      score += 30;
      reasons.push("1M+ views");
    } else if (video.viewCount > 500_000) {
      score += 25;
    } else if (video.viewCount > 100_000) {
      score += 20;
      reasons.push("100K+ views");
    } else if (video.viewCount > 10_000) {
      score += 10;
    } else if (video.viewCount > 1_000) {
      score += 5;
    }

    // Factor 2: Trusted channel (multiplier)
    let channelMultiplier = 1.0;
    for (const [name, weight] of Object.entries(TRUSTED_CHANNELS)) {
      if (channelLower.includes(name)) {
        channelMultiplier = Math.max(channelMultiplier, weight);
        reasons.push(`Trusted: ${video.channelName}`);
        break;
      }
    }

    // Factor 3: Duration sweet spot (20 points max)
    const mins = video.durationSeconds / 60;
    if (mins >= 8 && mins <= 25) {
      score += 20;
      reasons.push("Ideal length");
    } else if (mins >= 5 && mins <= 45) {
      score += 10;
    } else if (mins < 5) {
      score -= 5;
    }

    // Factor 4: Title relevance (25 points max)
    const matchingWords = topicWords.filter((w) => titleLower.includes(w));
    const relevance =
      topicWords.length > 0 ? matchingWords.length / topicWords.length : 0;
    score += Math.round(relevance * 25);
    if (relevance > 0.5) reasons.push("Highly relevant title");

    // Factor 5: Recency (10 points max)
    try {
      const publishYear = parseInt(video.publishedAt.slice(0, 4));
      const currentYear = new Date().getFullYear();
      const age = currentYear - publishYear;
      if (age <= 2) {
        score += 10;
        reasons.push("Recent");
      } else if (age <= 4) {
        score += 5;
      } else if (age > 8) {
        score -= 5;
      }
    } catch {
      // ignore date parse failures
    }

    // Factor 6: Penalize non-English indicators
    if (/hindi|हिंदी|tamil|తెలుగు|বাংলা/i.test(video.title)) {
      score -= 20;
    }

    // Factor 7: Bonus for MBBS/medical keywords in title
    if (
      /mbbs|neet|next|usmle|medical|anatomy|physiology|pathology|pharmacology/i.test(
        titleLower
      )
    ) {
      score += 5;
    }

    // Apply channel multiplier
    score = Math.round(score * channelMultiplier);

    // Quality tier
    let quality: "RECOMMENDED" | "SUPPLEMENTARY" | "ADVANCED" = "SUPPLEMENTARY";
    if (score >= 45) quality = "RECOMMENDED";
    else if (relevance < 0.3 && video.viewCount < 10000) quality = "ADVANCED";

    return {
      ...video,
      score,
      quality,
      reason: reasons.join(", ") || "General match",
    };
  });

  // Deduplicate by videoId (keep highest scored)
  const deduped = new Map<string, RankedVideo>();
  for (const v of scored) {
    const existing = deduped.get(v.videoId);
    if (!existing || v.score > existing.score) {
      deduped.set(v.videoId, v);
    }
  }

  return Array.from(deduped.values())
    .sort((a, b) => b.score - a.score)
    .slice(0, maxVideos)
    .map((v, i) => ({
      ...v,
      quality: i === 0 ? ("RECOMMENDED" as const) : v.quality,
    }));
}
