---
name: L-Carnitine
altName: Levocarnitine
symbol: LC
category: other
subcategory: conditionally-essential
essentiality: conditionally-essential
sortOrder: 29
description: A compound synthesized from lysine and methionine that transports long-chain fatty acids into mitochondria for energy production. Conditionally essential in certain populations.
functions:
  - Transports long-chain fatty acids across mitochondrial membrane for beta-oxidation
  - Removes toxic metabolites from mitochondria
  - Supports cellular energy production from fat
  - May improve exercise recovery
rda:
  nih:
    - group: No RDA established
      amount: Healthy adults synthesize sufficient amounts (~20 mg/day)
  who:
    - group: No recommendation
      amount: N/A
  efsa:
    - group: No recommendation
      amount: N/A
deficiency:
  symptoms:
    early:
      - "Fatigue, especially during exercise"
      - "Muscle weakness"
      - "Mild confusion"
    moderate:
      - "Exercise intolerance"
      - "Muscle cramps"
      - "Hypoglycemia (impaired fatty acid oxidation)"
    severe:
      - "Hypoketotic hypoglycemia (life-threatening in infants)"
      - "Cardiomyopathy"
      - "Encephalopathy"
      - "Primary carnitine deficiency (genetic — SLC22A5 mutations)"
    longTerm:
      - "Dilated cardiomyopathy"
      - "Chronic muscle weakness"
      - "Recurrent metabolic crises in children"
      - "Hepatic dysfunction"
  conditions:
    - Primary carnitine deficiency (genetic — OCTN2 transporter)
    - Secondary carnitine deficiency (from organic acidemias, dialysis)
  riskGroups:
    - Premature infants
    - Hemodialysis patients
    - People on valproic acid
    - People with certain genetic metabolic disorders
    - Strict vegans (dietary sources are almost exclusively animal-based)
toxicity:
  symptoms:
    - Fishy body odor (trimethylamine)
    - Nausea, diarrhea
    - Possible increased TMAO (linked to cardiovascular risk — controversial)
  upperLimit: No established UL. Doses of 2-6 g/day used in clinical studies.
normalLevels:
  bloodRange: 25-50 µmol/L (plasma free carnitine)
  unit: µmol/L
testing:
  methods:
    - Plasma free carnitine and acylcarnitine profile
    - Urine carnitine
  sampleType: Blood/Urine
sources:
  - name: Beef steak (4 oz)
    amount: 56-162
    unit: mg
  - name: Milk (1 cup)
    amount: 8
    unit: mg
  - name: Chicken breast (4 oz)
    amount: 3-5
    unit: mg
  - name: Cheese, cheddar (2 oz)
    amount: 2
    unit: mg
  - name: Whole wheat bread (2 slices)
    amount: 0.2
    unit: mg
  - name: Asparagus (½ cup)
    amount: 0.1
    unit: mg
myths:
  - myth: L-carnitine supplements help you burn more fat and lose weight
    reality: For healthy people who produce adequate carnitine, supplements do NOT increase fat burning or cause weight loss. Muscle carnitine levels are already saturated.
  - myth: All carnitine supplements are safe long-term
    reality: L-carnitine is metabolized by gut bacteria to TMAO (trimethylamine N-oxide), which some studies link to increased cardiovascular risk. Long-term high-dose supplementation may be harmful.
precautions:
  - D-carnitine (inactive form) can actually cause carnitine deficiency — only use L-carnitine
  - TMAO concerns are real but the clinical significance is still being studied
  - Vegans have lower carnitine levels but don't typically show deficiency symptoms
interactions:
  - substance: Valproic acid (seizure medication)
    effect: Depletes carnitine — supplementation recommended
  - substance: Warfarin
    effect: L-carnitine may enhance warfarin's effect
  - substance: Thyroid hormones
    effect: L-carnitine may inhibit thyroid hormone entry into cells
history: Carnitine was discovered in 1905 in muscle tissue (Latin "carnis" = flesh). Its role in fatty acid transport was elucidated in the 1960s by Fritz and Bremer. The first case of primary carnitine deficiency was described in 1973.
funFacts:
  - The name comes from Latin "carnis" (meat/flesh) — it was first isolated from meat extract
  - Red meat is by far the richest dietary source — hence the name
  - Vegans have 20-30% lower plasma carnitine but their bodies compensate with increased renal reabsorption
  - Your body makes only ~20 mg/day but recycles it very efficiently through kidney reabsorption (95-99%)
enzymeRoles:
  - "Substrate for carnitine palmitoyltransferase I and II (CPT I/II)"
  - "Substrate for carnitine-acylcarnitine translocase"
hormonalRoles:
  - "May modulate thyroid hormone cellular uptake"
  - "Influences fuel selection (fat vs carbohydrate oxidation)"
metabolicPathways:
  - "Long-chain fatty acid transport across inner mitochondrial membrane"
  - "Carnitine shuttle (acyl-CoA ↔ acylcarnitine)"
  - "Acyl-CoA/CoA ratio buffering in mitochondria"
  - "Branched-chain amino acid metabolism"
organsAffected:
  - "Heart (depends heavily on fatty acid oxidation)"
  - "Skeletal muscles"
  - "Liver"
  - "Kidneys (synthesis and reabsorption)"
cellularFunctions:
  - "Fatty acid transport into mitochondria for beta-oxidation"
  - "Toxic acyl group removal from mitochondria"
  - "CoA pool maintenance"
  - "Energy production from fat"
supplementForms:
  - form: "L-carnitine"
    bioavailability: "Moderate"
    notes: "Standard form, ~15-18% oral bioavailability"
  - form: "Acetyl-L-carnitine (ALCAR)"
    bioavailability: "High"
    notes: "Crosses blood-brain barrier, neuroprotective, supports cognition"
  - form: "L-carnitine L-tartrate"
    bioavailability: "High"
    notes: "Rapidly absorbed, studied for exercise recovery"
  - form: "Propionyl-L-carnitine"
    bioavailability: "Moderate"
    notes: "Studied for cardiovascular and peripheral circulation"
---
