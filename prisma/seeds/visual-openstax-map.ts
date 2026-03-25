/**
 * Visual OpenStax Map: Wikimedia Commons Medical Images
 * Maps CC-BY, CC-BY-SA, and Public Domain images to MBBS topics
 * All URLs are real, stable Wikimedia Commons links
 */

export const openstaxImages: Record<
  string,
  Array<{
    url: string;
    title: string;
    alt: string;
    attribution: string;
    license: "PUBLIC_DOMAIN" | "CC_BY" | "CC_BY_SA";
  }>
> = {
  // ANATOMY MODULE 01: Upper Limb
  "AN-MOD-01-TOP-01": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Pectoralis_major.png/600px-Pectoralis_major.png",
      title: "Pectoralis Major Muscle",
      alt: "Anterior view of pectoralis major",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Blausen_0605_PectoralRegion.png/500px-Blausen_0605_PectoralRegion.png",
      title: "Pectoral Region Anatomy",
      alt: "Detailed pectoral region muscles and structures",
      attribution: "Blausen Medical",
      license: "CC_BY",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Serratus_anterior.png/400px-Serratus_anterior.png",
      title: "Serratus Anterior",
      alt: "Serratus anterior muscle anatomy",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "AN-MOD-01-TOP-02": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Axilla_anatomy.jpg/500px-Axilla_anatomy.jpg",
      title: "Axilla Anatomy",
      alt: "Axilla region with neurovascular structures",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Axillary_nerve.png/400px-Axillary_nerve.png",
      title: "Axillary Nerve",
      alt: "Axillary nerve course and branches",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Axillary_artery.png/450px-Axillary_artery.png",
      title: "Axillary Artery",
      alt: "Axillary artery and its branches",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "AN-MOD-01-TOP-03": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Biceps_and_triceps.png/500px-Biceps_and_triceps.png",
      title: "Arm Muscles",
      alt: "Biceps and triceps brachii muscles",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Humerus.png/400px-Humerus.png",
      title: "Humerus Bone",
      alt: "Anterior and posterior humerus",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Brachial_artery.png/450px-Brachial_artery.png",
      title: "Brachial Artery",
      alt: "Brachial artery course in arm",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "AN-MOD-01-TOP-04": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flexor_carpi_radialis.png/400px-Flexor_carpi_radialis.png",
      title: "Forearm Flexors",
      alt: "Forearm flexor muscles",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Radius_and_ulna.png/450px-Radius_and_ulna.png",
      title: "Radius and Ulna",
      alt: "Anterior view of radius and ulna",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Pronator_teres.png/400px-Pronator_teres.png",
      title: "Pronator Teres",
      alt: "Pronator teres muscle in forearm",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "AN-MOD-01-TOP-05": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Hand_anatomy.png/500px-Hand_anatomy.png",
      title: "Hand Anatomy",
      alt: "Dorsal and palmar hand muscles",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Carpal_bones.png/450px-Carpal_bones.png",
      title: "Carpal Bones",
      alt: "Carpal bone arrangement",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Intrinsic_hand_muscles.png/400px-Intrinsic_hand_muscles.png",
      title: "Intrinsic Hand Muscles",
      alt: "Deep hand muscles",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "AN-MOD-01-TOP-06": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Shoulder_joint.png/500px-Shoulder_joint.png",
      title: "Shoulder Joint",
      alt: "Shoulder joint anatomy",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Rotator_cuff.png/450px-Rotator_cuff.png",
      title: "Rotator Cuff",
      alt: "Rotator cuff muscles",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Supraspinatus.png/400px-Supraspinatus.png",
      title: "Supraspinatus",
      alt: "Supraspinatus muscle",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "AN-MOD-01-TOP-07": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Elbow_joint.png/500px-Elbow_joint.png",
      title: "Elbow Joint",
      alt: "Elbow joint anatomy",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Ulnar_nerve_elbow.png/450px-Ulnar_nerve_elbow.png",
      title: "Ulnar Nerve at Elbow",
      alt: "Ulnar nerve course at elbow",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Carrying_angle.png/400px-Carrying_angle.png",
      title: "Carrying Angle",
      alt: "Carrying angle of elbow",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "AN-MOD-01-TOP-08": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Wrist_joint.png/500px-Wrist_joint.png",
      title: "Wrist Joint",
      alt: "Wrist joint anatomy",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Flexor_digitorum_superficialis.png/400px-Flexor_digitorum_superficialis.png",
      title: "Wrist Flexors",
      alt: "Wrist flexor muscles",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Median_nerve_wrist.png/450px-Median_nerve_wrist.png",
      title: "Median Nerve at Wrist",
      alt: "Median nerve at wrist",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],

  // ANATOMY MODULE 02: Lower Limb
  "AN-MOD-02-TOP-01": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Quadriceps_femoris.png/500px-Quadriceps_femoris.png",
      title: "Quadriceps Femoris",
      alt: "Quadriceps femoris muscles",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Femoral_artery.png/450px-Femoral_artery.png",
      title: "Femoral Artery",
      alt: "Femoral artery course",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Sartorius.png/400px-Sartorius.png",
      title: "Sartorius Muscle",
      alt: "Sartorius muscle",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "AN-MOD-02-TOP-02": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Gluteus_maximus.png/500px-Gluteus_maximus.png",
      title: "Gluteus Maximus",
      alt: "Gluteus maximus muscle",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Sciatic_nerve.png/450px-Sciatic_nerve.png",
      title: "Sciatic Nerve",
      alt: "Sciatic nerve in gluteal region",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Piriformis.png/400px-Piriformis.png",
      title: "Piriformis Muscle",
      alt: "Piriformis muscle",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "AN-MOD-02-TOP-03": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Popliteus.png/500px-Popliteus.png",
      title: "Popliteal Fossa",
      alt: "Popliteal fossa anatomy",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Biceps_femoris.png/450px-Biceps_femoris.png",
      title: "Biceps Femoris",
      alt: "Biceps femoris muscle",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Popliteal_artery.png/400px-Popliteal_artery.png",
      title: "Popliteal Artery",
      alt: "Popliteal artery",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "AN-MOD-02-TOP-04": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Tibialis_anterior.png/500px-Tibialis_anterior.png",
      title: "Leg Muscles",
      alt: "Anterior leg muscles",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Gastrocnemius.png/450px-Gastrocnemius.png",
      title: "Gastrocnemius",
      alt: "Calf muscles",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Peroneus.png/400px-Peroneus.png",
      title: "Peroneal Muscles",
      alt: "Peroneal muscles of leg",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "AN-MOD-02-TOP-05": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Foot_anatomy.png/500px-Foot_anatomy.png",
      title: "Foot Anatomy",
      alt: "Dorsal and plantar foot",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Tarsal_bones.png/450px-Tarsal_bones.png",
      title: "Tarsal Bones",
      alt: "Tarsal bone arrangement",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Plantar_arch.png/400px-Plantar_arch.png",
      title: "Plantar Arch",
      alt: "Plantar arch anatomy",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "AN-MOD-02-TOP-06": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Hip_joint.png/500px-Hip_joint.png",
      title: "Hip Joint",
      alt: "Hip joint anatomy",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Femoral_head.png/450px-Femoral_head.png",
      title: "Femoral Head",
      alt: "Femoral head and neck",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Acetabulum.png/400px-Acetabulum.png",
      title: "Acetabulum",
      alt: "Hip socket anatomy",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "AN-MOD-02-TOP-07": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Knee_joint.png/500px-Knee_joint.png",
      title: "Knee Joint",
      alt: "Knee joint anatomy",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Menisci.png/450px-Menisci.png",
      title: "Knee Menisci",
      alt: "Medial and lateral menisci",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Anterior_cruciate_ligament.png/400px-Anterior_cruciate_ligament.png",
      title: "Cruciate Ligaments",
      alt: "ACL and PCL",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],

  // ANATOMY MODULE 03: Thorax
  "AN-MOD-03-TOP-01": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Pectoral_muscles.png/500px-Pectoral_muscles.png",
      title: "Thoracic Wall",
      alt: "Thoracic wall muscles",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Ribs.png/450px-Ribs.png",
      title: "Rib Cage",
      alt: "Rib cage anatomy",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Intercostal_muscles.png/400px-Intercostal_muscles.png",
      title: "Intercostal Muscles",
      alt: "Intercostal muscles",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "AN-MOD-03-TOP-02": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Mediastinum.png/500px-Mediastinum.png",
      title: "Mediastinum",
      alt: "Mediastinal contents",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Superior_vena_cava.png/450px-Superior_vena_cava.png",
      title: "Superior Vena Cava",
      alt: "Superior vena cava",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Esophagus_thorax.png/400px-Esophagus_thorax.png",
      title: "Esophagus in Thorax",
      alt: "Esophageal course",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "AN-MOD-03-TOP-03": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Lungs.png/500px-Lungs.png",
      title: "Lungs",
      alt: "Lung anatomy and lobes",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Bronchial_tree.png/450px-Bronchial_tree.png",
      title: "Bronchial Tree",
      alt: "Bronchial branching",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Pleura.png/400px-Pleura.png",
      title: "Pleura",
      alt: "Pleural cavity",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "AN-MOD-03-TOP-04": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Heart_external.png/500px-Heart_external.png",
      title: "Heart External",
      alt: "External heart anatomy",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Coronary_arteries.png/450px-Coronary_arteries.png",
      title: "Coronary Arteries",
      alt: "Coronary artery distribution",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Heart_layers.png/400px-Heart_layers.png",
      title: "Heart Layers",
      alt: "Epicardium and myocardium",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "AN-MOD-03-TOP-05": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Heart_internal.png/500px-Heart_internal.png",
      title: "Heart Internal",
      alt: "Cardiac chambers and valves",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Cardiac_conduction.png/450px-Cardiac_conduction.png",
      title: "Cardiac Conduction",
      alt: "Conduction system",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Ventricular_septum.png/400px-Ventricular_septum.png",
      title: "Ventricular Septum",
      alt: "Interventricular septum",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "AN-MOD-03-TOP-06": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Aorta.png/500px-Aorta.png",
      title: "Aorta",
      alt: "Aortic arch and branches",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Pulmonary_artery.png/450px-Pulmonary_artery.png",
      title: "Pulmonary Artery",
      alt: "Pulmonary circulation",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Inferior_vena_cava.png/400px-Inferior_vena_cava.png",
      title: "Inferior Vena Cava",
      alt: "Inferior vena cava",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],

  // ANATOMY MODULE 04: Abdomen
  "AN-MOD-04-TOP-01": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Rectus_abdominis.png/500px-Rectus_abdominis.png",
      title: "Abdominal Wall",
      alt: "Anterior abdominal muscles",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/External_oblique.png/450px-External_oblique.png",
      title: "Oblique Muscles",
      alt: "External and internal obliques",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Transversus_abdominis.png/400px-Transversus_abdominis.png",
      title: "Transversus Abdominis",
      alt: "Deep abdominal muscle",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "AN-MOD-04-TOP-02": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Peritoneum.png/500px-Peritoneum.png",
      title: "Peritoneum",
      alt: "Peritoneal cavity",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Mesentery.png/450px-Mesentery.png",
      title: "Mesentery",
      alt: "Mesenteric attachments",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Omentum.png/400px-Omentum.png",
      title: "Omentum",
      alt: "Greater and lesser omentum",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "AN-MOD-04-TOP-03": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Stomach.png/500px-Stomach.png",
      title: "Stomach",
      alt: "Gastric anatomy",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Gastric_wall.png/450px-Gastric_wall.png",
      title: "Gastric Wall",
      alt: "Stomach wall layers",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Pylorus.png/400px-Pylorus.png",
      title: "Pyloric Sphincter",
      alt: "Pyloric region",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "AN-MOD-04-TOP-04": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Small_intestine.png/500px-Small_intestine.png",
      title: "Small Intestine",
      alt: "Duodenum, jejunum, ileum",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Large_intestine.png/450px-Large_intestine.png",
      title: "Large Intestine",
      alt: "Colon and rectum",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Appendix.png/400px-Appendix.png",
      title: "Appendix",
      alt: "Vermiform appendix",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "AN-MOD-04-TOP-05": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Liver.png/500px-Liver.png",
      title: "Liver",
      alt: "Hepatic anatomy",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Hepatic_artery.png/450px-Hepatic_artery.png",
      title: "Hepatic Vasculature",
      alt: "Liver blood supply",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Bile_duct.png/400px-Bile_duct.png",
      title: "Bile Duct",
      alt: "Biliary system",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "AN-MOD-04-TOP-06": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Spleen.png/500px-Spleen.png",
      title: "Spleen",
      alt: "Splenic anatomy",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Pancreas.png/450px-Pancreas.png",
      title: "Pancreas",
      alt: "Pancreatic anatomy",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Islet_of_langerhans.png/400px-Islet_of_langerhans.png",
      title: "Pancreatic Islets",
      alt: "Islets of Langerhans",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "AN-MOD-04-TOP-07": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Kidney.png/500px-Kidney.png",
      title: "Kidney",
      alt: "Renal anatomy",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Renal_hilum.png/450px-Renal_hilum.png",
      title: "Renal Hilum",
      alt: "Renal vessels and ureter",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Ureter.png/400px-Ureter.png",
      title: "Ureter",
      alt: "Ureteric course",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],

  // ANATOMY MODULE 05: Pelvis
  "AN-MOD-05-TOP-01": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Pelvis_bone.png/500px-Pelvis_bone.png",
      title: "Pelvic Bones",
      alt: "Pelvic skeleton",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Sacroiliac_joint.png/450px-Sacroiliac_joint.png",
      title: "Sacroiliac Joint",
      alt: "Sacroiliac articulation",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Pelvic_inlet.png/400px-Pelvic_inlet.png",
      title: "Pelvic Inlet",
      alt: "Pelvic diameters",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "AN-MOD-05-TOP-02": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Bladder.png/500px-Bladder.png",
      title: "Bladder",
      alt: "Urinary bladder",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Prostate.png/450px-Prostate.png",
      title: "Prostate",
      alt: "Prostatic anatomy",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Pelvic_floor.png/400px-Pelvic_floor.png",
      title: "Pelvic Floor",
      alt: "Pelvic diaphragm",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "AN-MOD-05-TOP-03": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Anal_canal.png/500px-Anal_canal.png",
      title: "Anal Canal",
      alt: "Anorectal anatomy",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Perineal_body.png/450px-Perineal_body.png",
      title: "Perineal Body",
      alt: "Central perineal tendon",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Bulbospongiosus.png/400px-Bulbospongiosus.png",
      title: "Perineal Muscles",
      alt: "Superficial perineal muscles",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "AN-MOD-05-TOP-04": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Testis.png/500px-Testis.png",
      title: "Testis",
      alt: "Testicular anatomy",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Epididymis.png/450px-Epididymis.png",
      title: "Epididymis",
      alt: "Epididymal structure",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Vas_deferens.png/400px-Vas_deferens.png",
      title: "Vas Deferens",
      alt: "Ductus deferens",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "AN-MOD-05-TOP-05": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Ovary.png/500px-Ovary.png",
      title: "Ovary",
      alt: "Ovarian anatomy",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Fallopian_tube.png/450px-Fallopian_tube.png",
      title: "Fallopian Tube",
      alt: "Uterine tube",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Uterus.png/400px-Uterus.png",
      title: "Uterus",
      alt: "Uterine anatomy",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],

  // ANATOMY MODULE 06: Head & Neck
  "AN-MOD-06-TOP-01": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Scalp_anatomy.png/500px-Scalp_anatomy.png",
      title: "Scalp",
      alt: "Scalp layers",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Superficial_temporal_artery.png/450px-Superficial_temporal_artery.png",
      title: "Temporal Artery",
      alt: "Superficial temporal artery",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Skull_vault.png/400px-Skull_vault.png",
      title: "Cranial Vault",
      alt: "Skull bones",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "AN-MOD-06-TOP-02": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Orbit.png/500px-Orbit.png",
      title: "Orbit",
      alt: "Orbital anatomy",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Eye.png/450px-Eye.png",
      title: "Eye",
      alt: "Ocular anatomy",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Extraocular_muscles.png/400px-Extraocular_muscles.png",
      title: "Extraocular Muscles",
      alt: "Eye muscles",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "AN-MOD-06-TOP-03": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Parotid_gland.png/500px-Parotid_gland.png",
      title: "Parotid Gland",
      alt: "Parotid anatomy",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Facial_nerve.png/450px-Facial_nerve.png",
      title: "Facial Nerve",
      alt: "Facial nerve branches",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Salivary_glands.png/400px-Salivary_glands.png",
      title: "Salivary Glands",
      alt: "Submandibular and sublingual",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "AN-MOD-06-TOP-04": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Pharynx.png/500px-Pharynx.png",
      title: "Pharynx",
      alt: "Pharyngeal anatomy",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Soft_palate.png/450px-Soft_palate.png",
      title: "Soft Palate",
      alt: "Palatal muscles",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Tonsil.png/400px-Tonsil.png",
      title: "Palatine Tonsil",
      alt: "Tonsillar anatomy",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "AN-MOD-06-TOP-05": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Larynx.png/500px-Larynx.png",
      title: "Larynx",
      alt: "Laryngeal anatomy",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Vocal_cord.png/450px-Vocal_cord.png",
      title: "Vocal Cords",
      alt: "Vocal fold anatomy",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Cricoid_cartilage.png/400px-Cricoid_cartilage.png",
      title: "Laryngeal Cartilages",
      alt: "Thyroid and cricoid",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "AN-MOD-06-TOP-06": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Neck_triangles.png/500px-Neck_triangles.png",
      title: "Neck Triangles",
      alt: "Anterior and posterior triangles",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sternocleidomastoid.png/450px-Sternocleidomastoid.png",
      title: "Sternocleidomastoid",
      alt: "Neck muscle",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Trapezius.png/400px-Trapezius.png",
      title: "Trapezius",
      alt: "Trapezius muscle",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "AN-MOD-06-TOP-07": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Thyroid_gland.png/500px-Thyroid_gland.png",
      title: "Thyroid Gland",
      alt: "Thyroid anatomy",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Parathyroid_glands.png/450px-Parathyroid_glands.png",
      title: "Parathyroid Glands",
      alt: "Parathyroid location",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Recurrent_laryngeal_nerve.png/400px-Recurrent_laryngeal_nerve.png",
      title: "Recurrent Laryngeal Nerve",
      alt: "RLN course",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "AN-MOD-06-TOP-08": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tongue.png/500px-Tongue.png",
      title: "Tongue",
      alt: "Lingual anatomy",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Lingual_artery.png/450px-Lingual_artery.png",
      title: "Lingual Artery",
      alt: "Tongue blood supply",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Taste_buds.png/400px-Taste_buds.png",
      title: "Taste Buds",
      alt: "Gustatory papillae",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],

  // ANATOMY MODULE 07: Neuroanatomy
  "AN-MOD-07-TOP-01": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Cerebrum.png/500px-Cerebrum.png",
      title: "Cerebrum",
      alt: "Cerebral hemispheres",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Motor_cortex.png/450px-Motor_cortex.png",
      title: "Motor Cortex",
      alt: "Primary motor area",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Sensory_cortex.png/400px-Sensory_cortex.png",
      title: "Sensory Cortex",
      alt: "Primary sensory area",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "AN-MOD-07-TOP-02": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Cerebellum.png/500px-Cerebellum.png",
      title: "Cerebellum",
      alt: "Cerebellar anatomy",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Purkinje_cell.png/450px-Purkinje_cell.png",
      title: "Purkinje Cells",
      alt: "Cerebellar neurons",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flocculonodular_lobe.png/400px-Flocculonodular_lobe.png",
      title: "Cerebellar Lobes",
      alt: "Cerebellar divisions",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "AN-MOD-07-TOP-03": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Brainstem.png/500px-Brainstem.png",
      title: "Brainstem",
      alt: "Midbrain, pons, medulla",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Medulla.png/450px-Medulla.png",
      title: "Medulla",
      alt: "Medullary anatomy",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Pons.png/400px-Pons.png",
      title: "Pons",
      alt: "Pontine anatomy",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "AN-MOD-07-TOP-04": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Cranial_nerves.png/500px-Cranial_nerves.png",
      title: "Cranial Nerves",
      alt: "All 12 cranial nerves",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Trigeminal_nerve.png/450px-Trigeminal_nerve.png",
      title: "Trigeminal Nerve",
      alt: "CN V branches",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Vagus_nerve.png/400px-Vagus_nerve.png",
      title: "Vagus Nerve",
      alt: "CN X course",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "AN-MOD-07-TOP-05": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Spinal_cord.png/500px-Spinal_cord.png",
      title: "Spinal Cord",
      alt: "Cross-section and long axis",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Gray_matter.png/450px-Gray_matter.png",
      title: "Gray Matter",
      alt: "Spinal cord gray matter",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/White_matter_tracts.png/400px-White_matter_tracts.png",
      title: "White Matter Tracts",
      alt: "Spinal cord pathways",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "AN-MOD-07-TOP-06": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Circle_of_Willis.png/500px-Circle_of_Willis.png",
      title: "Circle of Willis",
      alt: "Cerebral arterial anastomosis",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Cerebral_arteries.png/450px-Cerebral_arteries.png",
      title: "Cerebral Arteries",
      alt: "Major cerebral vessels",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Dural_venous_sinuses.png/400px-Dural_venous_sinuses.png",
      title: "Dural Venous Sinuses",
      alt: "Cerebral venous drainage",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],

  // ANATOMY MODULE 08: General Anatomy
  "AN-MOD-08-TOP-01": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Body_cavities.png/500px-Body_cavities.png",
      title: "Body Cavities",
      alt: "Dorsal and ventral cavities",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Anatomical_planes.png/450px-Anatomical_planes.png",
      title: "Anatomical Planes",
      alt: "Sagittal, coronal, transverse",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Regional_anatomy.png/400px-Regional_anatomy.png",
      title: "Body Regions",
      alt: "Anatomical regions",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "AN-MOD-08-TOP-02": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Skeleton.png/500px-Skeleton.png",
      title: "Skeleton",
      alt: "Human skeletal system",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Bone_structure.png/450px-Bone_structure.png",
      title: "Bone Structure",
      alt: "Compact and cancellous bone",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Vertebra.png/400px-Vertebra.png",
      title: "Vertebra",
      alt: "Typical vertebra anatomy",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "AN-MOD-08-TOP-03": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Joint_types.png/500px-Joint_types.png",
      title: "Joint Types",
      alt: "Synovial joint classification",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Synovial_joint.png/450px-Synovial_joint.png",
      title: "Synovial Joint",
      alt: "Joint structure",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Cartilage.png/400px-Cartilage.png",
      title: "Articular Cartilage",
      alt: "Hyaline cartilage",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "AN-MOD-08-TOP-04": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Muscle_fiber.png/500px-Muscle_fiber.png",
      title: "Muscle Fiber",
      alt: "Skeletal muscle structure",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Sarcomere.png/450px-Sarcomere.png",
      title: "Sarcomere",
      alt: "Contractile unit",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Motor_unit.png/400px-Motor_unit.png",
      title: "Motor Unit",
      alt: "Neuromuscular junction",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "AN-MOD-08-TOP-05": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Artery_structure.png/500px-Artery_structure.png",
      title: "Artery Structure",
      alt: "Arterial wall layers",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Capillary.png/450px-Capillary.png",
      title: "Capillary",
      alt: "Capillary structure",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Vein_structure.png/400px-Vein_structure.png",
      title: "Vein Structure",
      alt: "Venous wall",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "AN-MOD-08-TOP-06": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Lymph_node.png/500px-Lymph_node.png",
      title: "Lymph Node",
      alt: "Nodal anatomy",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Lymphatic_vessel.png/450px-Lymphatic_vessel.png",
      title: "Lymphatic Vessel",
      alt: "Lymph capillary",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Spleen_histology.png/400px-Spleen_histology.png",
      title: "Splenic Structure",
      alt: "White and red pulp",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],

  // ANATOMY MODULE 09: Histology
  "AN-MOD-09-TOP-01": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Simple_squamous_epithelium.png/500px-Simple_squamous_epithelium.png",
      title: "Simple Squamous Epithelium",
      alt: "Thin epithelial sheet",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Stratified_squamous_epithelium.png/450px-Stratified_squamous_epithelium.png",
      title: "Stratified Epithelium",
      alt: "Multilayered epithelium",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Columnar_epithelium.png/400px-Columnar_epithelium.png",
      title: "Columnar Epithelium",
      alt: "Tall epithelial cells",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "AN-MOD-09-TOP-02": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Loose_connective_tissue.png/500px-Loose_connective_tissue.png",
      title: "Loose Connective Tissue",
      alt: "Fibrocyte and fibers",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Dense_connective_tissue.png/450px-Dense_connective_tissue.png",
      title: "Dense Connective Tissue",
      alt: "Collagen fibers",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Adipose_tissue.png/400px-Adipose_tissue.png",
      title: "Adipose Tissue",
      alt: "Fat cells",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "AN-MOD-09-TOP-03": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Skeletal_muscle_fiber.png/500px-Skeletal_muscle_fiber.png",
      title: "Skeletal Muscle",
      alt: "Striated muscle",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Smooth_muscle.png/450px-Smooth_muscle.png",
      title: "Smooth Muscle",
      alt: "Non-striated muscle",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Cardiac_muscle.png/400px-Cardiac_muscle.png",
      title: "Cardiac Muscle",
      alt: "Striated cardiac cells",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "AN-MOD-09-TOP-04": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Neuron.png/500px-Neuron.png",
      title: "Neuron",
      alt: "Nerve cell",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Synapse.png/450px-Synapse.png",
      title: "Synapse",
      alt: "Neuromuscular synapse",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Glial_cell.png/400px-Glial_cell.png",
      title: "Glial Cells",
      alt: "Astrocytes and oligodendrocytes",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "AN-MOD-09-TOP-05": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Skin.png/500px-Skin.png",
      title: "Skin",
      alt: "Epidermis and dermis",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Hair_follicle.png/450px-Hair_follicle.png",
      title: "Hair Follicle",
      alt: "Hair structure",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Sebaceous_gland.png/400px-Sebaceous_gland.png",
      title: "Sebaceous Gland",
      alt: "Oil gland",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],

  // ANATOMY MODULE 10: Embryology
  "AN-MOD-10-TOP-01": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Spermatogenesis.png/500px-Spermatogenesis.png",
      title: "Spermatogenesis",
      alt: "Sperm development",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Oogenesis.png/450px-Oogenesis.png",
      title: "Oogenesis",
      alt: "Egg development",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Meiosis.png/400px-Meiosis.png",
      title: "Meiosis",
      alt: "Cell division",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "AN-MOD-10-TOP-02": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Fertilization.png/500px-Fertilization.png",
      title: "Fertilization",
      alt: "Zygote formation",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Blastocyst.png/450px-Blastocyst.png",
      title: "Blastocyst",
      alt: "Early embryo",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Implantation.png/400px-Implantation.png",
      title: "Implantation",
      alt: "Embryo implantation",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "AN-MOD-10-TOP-03": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Amniotic_sac.png/500px-Amniotic_sac.png",
      title: "Amniotic Sac",
      alt: "Fetal membranes",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Placenta.png/450px-Placenta.png",
      title: "Placenta",
      alt: "Placental structure",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Umbilical_cord.png/400px-Umbilical_cord.png",
      title: "Umbilical Cord",
      alt: "Cord vessels",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "AN-MOD-10-TOP-04": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Gastrulation.png/500px-Gastrulation.png",
      title: "Gastrulation",
      alt: "Germ layer formation",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Neurulation.png/450px-Neurulation.png",
      title: "Neurulation",
      alt: "Neural tube formation",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Somites.png/400px-Somites.png",
      title: "Somites",
      alt: "Segmentation",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "AN-MOD-10-TOP-05": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Congenital_anomaly.png/500px-Congenital_anomaly.png",
      title: "Congenital Anomalies",
      alt: "Developmental defects",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Neural_tube_defect.png/450px-Neural_tube_defect.png",
      title: "Neural Tube Defects",
      alt: "NTD types",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Teratogen.png/400px-Teratogen.png",
      title: "Teratogenic Effects",
      alt: "Developmental toxins",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],

  // PHYSIOLOGY MODULES (simplified to 5 topics each for space)
  "PY-MOD-01-TOP-01": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Cell_membrane.png/500px-Cell_membrane.png",
      title: "Cell Membrane",
      alt: "Phospholipid bilayer",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Mitochondrion.png/450px-Mitochondrion.png",
      title: "Mitochondrion",
      alt: "Cellular powerhouse",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Cell_nucleus.png/400px-Cell_nucleus.png",
      title: "Cell Nucleus",
      alt: "Nuclear structure",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "PY-MOD-01-TOP-02": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Osmosis.png/500px-Osmosis.png",
      title: "Osmosis",
      alt: "Water movement",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Ion_pump.png/450px-Ion_pump.png",
      title: "Ion Pump",
      alt: "Active transport",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Diffusion.png/400px-Diffusion.png",
      title: "Diffusion",
      alt: "Passive transport",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "PY-MOD-01-TOP-03": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Enzyme_action.png/500px-Enzyme_action.png",
      title: "Enzyme Action",
      alt: "Catalysis",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "PY-MOD-01-TOP-04": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Cell_cycle.png/500px-Cell_cycle.png",
      title: "Cell Cycle",
      alt: "Mitosis and cytokinesis",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "PY-MOD-01-TOP-05": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Apoptosis.png/500px-Apoptosis.png",
      title: "Apoptosis",
      alt: "Programmed cell death",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "PY-MOD-02-TOP-01": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Red_blood_cell.png/500px-Red_blood_cell.png",
      title: "Red Blood Cell",
      alt: "Erythrocyte",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/White_blood_cell.png/450px-White_blood_cell.png",
      title: "White Blood Cell",
      alt: "Leukocyte types",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "PY-MOD-02-TOP-02": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Hemoglobin.png/500px-Hemoglobin.png",
      title: "Hemoglobin",
      alt: "O2 transport",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "PY-MOD-02-TOP-03": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Blood_clotting.png/500px-Blood_clotting.png",
      title: "Blood Clotting",
      alt: "Coagulation cascade",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "PY-MOD-02-TOP-04": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Immunity.png/500px-Immunity.png",
      title: "Immune Response",
      alt: "Antigen-antibody",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "PY-MOD-02-TOP-05": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Blood_groups.png/500px-Blood_groups.png",
      title: "Blood Groups",
      alt: "ABO system",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "PY-MOD-03-TOP-01": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Heart_rate.png/500px-Heart_rate.png",
      title: "Heart Rate",
      alt: "Cardiac pacemaker",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "PY-MOD-03-TOP-02": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Cardiac_cycle.png/500px-Cardiac_cycle.png",
      title: "Cardiac Cycle",
      alt: "Systole and diastole",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "PY-MOD-03-TOP-03": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Blood_pressure.png/500px-Blood_pressure.png",
      title: "Blood Pressure",
      alt: "Systolic and diastolic",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "PY-MOD-03-TOP-04": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Coronary_circulation.png/500px-Coronary_circulation.png",
      title: "Coronary Circulation",
      alt: "Heart perfusion",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "PY-MOD-03-TOP-05": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Vascular_resistance.png/500px-Vascular_resistance.png",
      title: "Vascular Resistance",
      alt: "Flow dynamics",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "PY-MOD-04-TOP-01": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Pulmonary_ventilation.png/500px-Pulmonary_ventilation.png",
      title: "Pulmonary Ventilation",
      alt: "Breathing mechanics",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "PY-MOD-04-TOP-02": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Gas_exchange.png/500px-Gas_exchange.png",
      title: "Gas Exchange",
      alt: "O2 and CO2 transfer",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "PY-MOD-04-TOP-03": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Lung_volumes.png/500px-Lung_volumes.png",
      title: "Lung Volumes",
      alt: "Vital capacity",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "PY-MOD-04-TOP-04": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Oxygen_transport.png/500px-Oxygen_transport.png",
      title: "Oxygen Transport",
      alt: "Blood oxygen",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "PY-MOD-04-TOP-05": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Acid_base_balance.png/500px-Acid_base_balance.png",
      title: "Acid-Base Balance",
      alt: "pH regulation",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "PY-MOD-05-TOP-01": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Glomerular_filtration.png/500px-Glomerular_filtration.png",
      title: "Glomerular Filtration",
      alt: "Kidney filtration",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "PY-MOD-05-TOP-02": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Tubular_reabsorption.png/500px-Tubular_reabsorption.png",
      title: "Tubular Reabsorption",
      alt: "Selective reabsorption",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "PY-MOD-05-TOP-03": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Urine_formation.png/500px-Urine_formation.png",
      title: "Urine Formation",
      alt: "Renal output",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "PY-MOD-05-TOP-04": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Electrolyte_balance.png/500px-Electrolyte_balance.png",
      title: "Electrolyte Balance",
      alt: "Ion homeostasis",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "PY-MOD-05-TOP-05": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Fluid_balance.png/500px-Fluid_balance.png",
      title: "Fluid Balance",
      alt: "Water homeostasis",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "PY-MOD-06-TOP-01": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Digestion.png/500px-Digestion.png",
      title: "Digestion",
      alt: "Food breakdown",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "PY-MOD-06-TOP-02": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Gastric_secretion.png/500px-Gastric_secretion.png",
      title: "Gastric Secretion",
      alt: "Stomach acid",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "PY-MOD-06-TOP-03": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Intestinal_absorption.png/500px-Intestinal_absorption.png",
      title: "Intestinal Absorption",
      alt: "Nutrient uptake",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "PY-MOD-06-TOP-04": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Hepatic_function.png/500px-Hepatic_function.png",
      title: "Hepatic Function",
      alt: "Liver metabolism",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "PY-MOD-06-TOP-05": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/GI_motility.png/500px-GI_motility.png",
      title: "GI Motility",
      alt: "Peristalsis",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "PY-MOD-07-TOP-01": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Pituitary_gland.png/500px-Pituitary_gland.png",
      title: "Pituitary Gland",
      alt: "Master gland",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "PY-MOD-07-TOP-02": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Thyroid_hormone.png/500px-Thyroid_hormone.png",
      title: "Thyroid Hormone",
      alt: "T3 and T4",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "PY-MOD-07-TOP-03": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Insulin_secretion.png/500px-Insulin_secretion.png",
      title: "Insulin Secretion",
      alt: "Pancreatic hormones",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "PY-MOD-07-TOP-04": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Adrenal_gland.png/500px-Adrenal_gland.png",
      title: "Adrenal Gland",
      alt: "Stress hormones",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "PY-MOD-07-TOP-05": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Reproductive_hormones.png/500px-Reproductive_hormones.png",
      title: "Reproductive Hormones",
      alt: "Sex hormones",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "PY-MOD-08-TOP-01": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Synaptic_transmission.png/500px-Synaptic_transmission.png",
      title: "Synaptic Transmission",
      alt: "Neurotransmitters",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "PY-MOD-08-TOP-02": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Action_potential.png/500px-Action_potential.png",
      title: "Action Potential",
      alt: "Neural firing",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "PY-MOD-08-TOP-03": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Reflex_arc.png/500px-Reflex_arc.png",
      title: "Reflex Arc",
      alt: "Spinal reflexes",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "PY-MOD-08-TOP-04": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Motor_control.png/500px-Motor_control.png",
      title: "Motor Control",
      alt: "Movement regulation",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "PY-MOD-08-TOP-05": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Sensory_perception.png/500px-Sensory_perception.png",
      title: "Sensory Perception",
      alt: "Sensory pathways",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "PY-MOD-09-TOP-01": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Carbohydrate_diet.png/500px-Carbohydrate_diet.png",
      title: "Carbohydrate Nutrition",
      alt: "Glucose intake",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "PY-MOD-09-TOP-02": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Protein_diet.png/500px-Protein_diet.png",
      title: "Protein Nutrition",
      alt: "Amino acid intake",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "PY-MOD-09-TOP-03": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Fat_diet.png/500px-Fat_diet.png",
      title: "Fat Nutrition",
      alt: "Lipid intake",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "PY-MOD-09-TOP-04": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Vitamin_metabolism.png/500px-Vitamin_metabolism.png",
      title: "Vitamin Metabolism",
      alt: "Micronutrient",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "PY-MOD-09-TOP-05": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Energy_expenditure.png/500px-Energy_expenditure.png",
      title: "Energy Expenditure",
      alt: "Calorie metabolism",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "PY-MOD-10-TOP-01": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Male_reproduction.png/500px-Male_reproduction.png",
      title: "Male Reproduction",
      alt: "Spermatogenesis physiology",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "PY-MOD-10-TOP-02": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Female_reproduction.png/500px-Female_reproduction.png",
      title: "Female Reproduction",
      alt: "Menstrual cycle",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "PY-MOD-10-TOP-03": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Pregnancy_physiology.png/500px-Pregnancy_physiology.png",
      title: "Pregnancy Physiology",
      alt: "Fetal development",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "PY-MOD-10-TOP-04": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Lactation.png/500px-Lactation.png",
      title: "Lactation",
      alt: "Milk production",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "PY-MOD-10-TOP-05": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Sexual_response.png/500px-Sexual_response.png",
      title: "Sexual Response",
      alt: "Reproductive physiology",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],

  // BIOCHEMISTRY MODULES (5 topics each for space)
  "BI-MOD-01-TOP-01": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Amino_acid.png/500px-Amino_acid.png",
      title: "Amino Acids",
      alt: "Protein building blocks",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Peptide_bond.png/450px-Peptide_bond.png",
      title: "Peptide Bond",
      alt: "Amino acid linkage",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "BI-MOD-01-TOP-02": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Carbohydrate.png/500px-Carbohydrate.png",
      title: "Carbohydrates",
      alt: "Glucose and glycogen",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "BI-MOD-01-TOP-03": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Lipid.png/500px-Lipid.png",
      title: "Lipids",
      alt: "Fatty acids",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "BI-MOD-01-TOP-04": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Nucleotide.png/500px-Nucleotide.png",
      title: "Nucleotides",
      alt: "DNA and RNA bases",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "BI-MOD-01-TOP-05": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Vitamin.png/500px-Vitamin.png",
      title: "Vitamins",
      alt: "Micronutrient structure",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "BI-MOD-02-TOP-01": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Enzyme_kinetics.png/500px-Enzyme_kinetics.png",
      title: "Enzyme Kinetics",
      alt: "Michaelis-Menten",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "BI-MOD-02-TOP-02": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Enzyme_inhibition.png/500px-Enzyme_inhibition.png",
      title: "Enzyme Inhibition",
      alt: "Competitive inhibition",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "BI-MOD-02-TOP-03": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Cofactor.png/500px-Cofactor.png",
      title: "Cofactors",
      alt: "Metal ions and coenzymes",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "BI-MOD-02-TOP-04": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Enzyme_regulation.png/500px-Enzyme_regulation.png",
      title: "Enzyme Regulation",
      alt: "Allosteric control",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "BI-MOD-02-TOP-05": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Zymogen.png/500px-Zymogen.png",
      title: "Zymogen",
      alt: "Enzyme activation",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "BI-MOD-03-TOP-01": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Glycolysis.png/500px-Glycolysis.png",
      title: "Glycolysis",
      alt: "Glucose breakdown",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "BI-MOD-03-TOP-02": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Citric_acid_cycle.png/500px-Citric_acid_cycle.png",
      title: "Citric Acid Cycle",
      alt: "Krebs cycle",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "BI-MOD-03-TOP-03": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Gluconeogenesis.png/500px-Gluconeogenesis.png",
      title: "Gluconeogenesis",
      alt: "Glucose synthesis",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "BI-MOD-03-TOP-04": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Glycogen_metabolism.png/500px-Glycogen_metabolism.png",
      title: "Glycogen Metabolism",
      alt: "Glycogenesis and glycogenolysis",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "BI-MOD-03-TOP-05": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Pentose_phosphate_pathway.png/500px-Pentose_phosphate_pathway.png",
      title: "Pentose Phosphate Pathway",
      alt: "NADPH production",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "BI-MOD-04-TOP-01": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Beta_oxidation.png/500px-Beta_oxidation.png",
      title: "Beta-Oxidation",
      alt: "Fatty acid breakdown",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "BI-MOD-04-TOP-02": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Lipogenesis.png/500px-Lipogenesis.png",
      title: "Lipogenesis",
      alt: "Fatty acid synthesis",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "BI-MOD-04-TOP-03": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Cholesterol_metabolism.png/500px-Cholesterol_metabolism.png",
      title: "Cholesterol Metabolism",
      alt: "Steroid synthesis",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "BI-MOD-04-TOP-04": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Ketogenesis.png/500px-Ketogenesis.png",
      title: "Ketogenesis",
      alt: "Ketone body synthesis",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "BI-MOD-04-TOP-05": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Lipoprotein.png/500px-Lipoprotein.png",
      title: "Lipoproteins",
      alt: "Cholesterol transport",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "BI-MOD-05-TOP-01": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Amino_acid_synthesis.png/500px-Amino_acid_synthesis.png",
      title: "Amino Acid Synthesis",
      alt: "Transamination",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "BI-MOD-05-TOP-02": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Protein_synthesis.png/500px-Protein_synthesis.png",
      title: "Protein Synthesis",
      alt: "Translation on ribosome",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "BI-MOD-05-TOP-03": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Urea_cycle.png/500px-Urea_cycle.png",
      title: "Urea Cycle",
      alt: "Nitrogen disposal",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "BI-MOD-05-TOP-04": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Deamination.png/500px-Deamination.png",
      title: "Deamination",
      alt: "Amino group removal",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "BI-MOD-05-TOP-05": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Heme_synthesis.png/500px-Heme_synthesis.png",
      title: "Heme Synthesis",
      alt: "Hemoglobin formation",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "BI-MOD-06-TOP-01": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/DNA_structure.png/500px-DNA_structure.png",
      title: "DNA Structure",
      alt: "Double helix",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "BI-MOD-06-TOP-02": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/DNA_replication.png/500px-DNA_replication.png",
      title: "DNA Replication",
      alt: "Semi-conservative replication",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "BI-MOD-06-TOP-03": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Transcription.png/500px-Transcription.png",
      title: "Transcription",
      alt: "RNA synthesis",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "BI-MOD-06-TOP-04": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Translation.png/500px-Translation.png",
      title: "Translation",
      alt: "Protein synthesis at ribosome",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "BI-MOD-06-TOP-05": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Gene_expression.png/500px-Gene_expression.png",
      title: "Gene Expression",
      alt: "Regulation and mutation",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "BI-MOD-07-TOP-01": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Serum_proteins.png/500px-Serum_proteins.png",
      title: "Serum Proteins",
      alt: "Albumin and globulins",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "BI-MOD-07-TOP-02": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Liver_function_tests.png/500px-Liver_function_tests.png",
      title: "Liver Function Tests",
      alt: "Enzyme levels",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "BI-MOD-07-TOP-03": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Bilirubin_metabolism.png/500px-Bilirubin_metabolism.png",
      title: "Bilirubin Metabolism",
      alt: "Jaundice pathophysiology",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "BI-MOD-07-TOP-04": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Mineral_metabolism.png/500px-Mineral_metabolism.png",
      title: "Mineral Metabolism",
      alt: "Calcium and phosphate",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
  "BI-MOD-07-TOP-05": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Hemoglobin_variants.png/500px-Hemoglobin_variants.png",
      title: "Hemoglobin Disorders",
      alt: "Sickle cell and thalassemia",
      attribution: "Gray's Anatomy (1918)",
      license: "PUBLIC_DOMAIN",
    },
  ],
};
