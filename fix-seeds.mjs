#!/usr/bin/env node
/**
 * Fix broken seed files by converting backtick template literals
 * in contentMd fields to regular double-quoted strings.
 *
 * The issue: contentMd: ``# Title\n\nContent`` uses double-backtick
 * template literals which break when content contains backticks (code fences).
 */
import fs from 'fs';
import path from 'path';

const SEEDS_DIR = 'prisma/seeds';

function fixFile(filepath) {
  let content = fs.readFileSync(filepath, 'utf8');
  const original = content;

  // Fix pattern: contentMd: ``...content...`,
  // The `` starts the content, and the closing is ` followed by , or newline+fieldname
  // We need to convert these to: contentMd: "...escaped content...",

  // Also fix summary: ``...``

  for (const field of ['contentMd', 'summary']) {
    let result = '';
    let i = 0;

    while (i < content.length) {
      // Look for field: `` pattern
      const pat1 = field + ': ``';
      const pat2 = field + ' : ``';
      const pat3 = field + ': `';

      let matchLen = 0;
      let isDoubleBt = false;

      if (content.substring(i, i + pat1.length) === pat1) {
        matchLen = pat1.length;
        isDoubleBt = true;
      } else if (content.substring(i, i + pat2.length) === pat2) {
        matchLen = pat2.length;
        isDoubleBt = true;
      } else if (content.substring(i, i + pat3.length) === pat3 &&
                 content[i + pat3.length] !== '`') {
        // Single backtick (not double)
        matchLen = pat3.length;
        isDoubleBt = false;
      }

      if (matchLen > 0) {
        // Found a template literal field
        result += content.substring(i, i + matchLen - (isDoubleBt ? 2 : 1));
        i += matchLen;

        // Collect content until closing backtick
        let inner = '';
        let foundClose = false;

        while (i < content.length) {
          const ch = content[i];

          if (ch === '`') {
            // Check if this is the closing backtick
            const rest = content.substring(i + 1, i + 200).trimStart();
            if (rest.startsWith(',') || rest.startsWith('}') || rest.startsWith(']') ||
                /^(mnemonics|keyPoints|textbookRefs|estimatedMinutes|layer|slug|title|diagramUrls|videoUrl|examTags|sortOrder|contentMd|summary)\s*:/.test(rest)) {
              foundClose = true;
              i++; // skip closing backtick
              break;
            }
            // Not closing - include as content
            inner += '`';
            i++;
          } else if (ch === '\\' && i + 1 < content.length && content[i + 1] === '`') {
            // Already escaped backtick
            inner += '`';
            i += 2;
          } else {
            inner += ch;
            i++;
          }
        }

        // Convert to double-quoted string
        // inner is the raw text content - escape for JS string
        let escaped = inner
          .replace(/\\/g, '\\\\')  // escape backslashes first
          .replace(/"/g, '\\"')     // escape double quotes
          .replace(/\n/g, '\\n')    // escape newlines
          .replace(/\r/g, '')       // remove carriage returns
          .replace(/\t/g, '\\t');   // escape tabs

        result += '"' + escaped + '"';
      } else {
        result += content[i];
        i++;
      }
    }

    content = result;
  }

  // Fix truncated files - close any unclosed brackets/braces
  let openBrackets = 0, openBraces = 0;
  let inStr = false;
  let strChar = '';
  for (let j = 0; j < content.length; j++) {
    const c = content[j];
    if (inStr) {
      if (c === '\\') { j++; continue; }
      if (c === strChar) inStr = false;
      continue;
    }
    if (c === '"' || c === "'") { inStr = true; strChar = c; continue; }
    if (c === '[') openBrackets++;
    if (c === ']') openBrackets--;
    if (c === '{') openBraces++;
    if (c === '}') openBraces--;
  }

  if (openBraces > 0 || openBrackets > 0) {
    content = content.trimEnd();
    for (let k = 0; k < openBraces; k++) content += '\n}';
    for (let k = 0; k < openBrackets; k++) content += '\n];';
    content += '\n';
  }

  if (content !== original) {
    fs.writeFileSync(filepath, content, 'utf8');
    return true;
  }
  return false;
}

// Main
const files = fs.readdirSync(SEEDS_DIR)
  .filter(f => (f.startsWith('lessons-') || f.startsWith('mcqs-') || f.startsWith('clinical-cases')) && f.endsWith('.ts'))
  .sort();

let fixed = 0, errors = 0;
for (const file of files) {
  const filepath = path.join(SEEDS_DIR, file);
  try {
    if (fixFile(filepath)) {
      fixed++;
    }
  } catch (e) {
    errors++;
    console.error(`  ⚠️  ${file}: ${e.message.substring(0, 80)}`);
  }
}

console.log(`\n📊 Fixed ${fixed} / ${files.length} files, ${errors} errors`);

// Now test how many load
let ok = 0, broken = 0;
const brokenList = [];
for (const file of files) {
  try {
    await import(`./prisma/seeds/${file}`);
    ok++;
  } catch (e) {
    broken++;
    if (broken <= 10) brokenList.push(`${file}: ${e.message.substring(0, 60)}`);
  }
}
console.log(`\n✅ Loadable: ${ok} / ${files.length}`);
console.log(`❌ Still broken: ${broken}`);
for (const b of brokenList) console.log(`  ${b}`);
if (broken > 10) console.log(`  ... and ${broken - 10} more`);
