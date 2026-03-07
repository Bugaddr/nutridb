---
name: Vitamin D
altName: Cholecalciferol (D3) / Ergocalciferol (D2)
symbol: D
category: vitamin
subcategory: fat-soluble
essentiality: essential
sortOrder: 2
description: The "sunshine vitamin" — a unique fat-soluble vitamin that functions as a hormone. Essential for calcium absorption, bone health, and immune regulation.
functions:
  - Promotes calcium and phosphorus absorption from the gut
  - Critical for bone mineralization and preventing rickets/osteomalacia
  - Modulates innate and adaptive immune responses
  - Supports muscle function and reduces fall risk in elderly
  - Regulates cell growth, neuromuscular function, and inflammation
rda:
  nih:
    - group: Infants 0-12 months
      amount: 400 IU (10 mcg)
    - group: Children 1-18 years
      amount: 600 IU (15 mcg)
    - group: Adults 19-70 years
      amount: 600 IU (15 mcg)
    - group: Adults 71+ years
      amount: 800 IU (20 mcg)
    - group: Pregnant/Lactating
      amount: 600 IU (15 mcg)
  who:
    - group: Infants
      amount: 200 IU (5 mcg)
    - group: Adults
      amount: 200-600 IU (5-15 mcg) depending on age
  efsa:
    - group: Adults
      amount: 600 IU (15 mcg)
  nin:
    - group: Adults
      amount: 600 IU
deficiency:
  symptoms:
    early:
      - "Fatigue"
      - "Muscle weakness"
      - "General aches and pains"
      - "Frequent infections"
    moderate:
      - "Bone pain (especially lower back, hips)"
      - "Mood changes and depression"
      - "Impaired wound healing"
      - "Hair loss"
    severe:
      - "Rickets in children (bowed legs, soft skull, growth plate deformities)"
      - "Osteomalacia in adults (bone softening)"
      - "Severe muscle weakness (proximal myopathy)"
      - "Hypocalcemic tetany"
    longTerm:
      - "Osteoporosis and increased fracture risk"
      - "Increased risk of autoimmune diseases"
      - "Cardiovascular disease risk elevation"
      - "Increased cancer risk (colon, breast, prostate — epidemiological)"
  conditions:
    - Rickets (children) — soft, weak bones
    - Osteomalacia (adults) — bone softening
    - Osteoporosis — reduced bone density
    - Seasonal Affective Disorder (SAD) — linked to low vitamin D
  riskGroups:
    - People with dark skin (reduced UV synthesis)
    - Elderly (reduced skin synthesis capacity)
    - People in northern latitudes or who stay indoors
    - Obese individuals (vitamin D sequestered in fat)
    - Exclusively breastfed infants
    - People with fat malabsorption disorders
toxicity:
  symptoms:
    - Hypercalcemia — nausea, vomiting, confusion, kidney stones
    - Calcification of soft tissues (kidneys, heart, lungs)
    - Kidney damage and failure
    - Cardiac arrhythmias
  upperLimit: 4000 IU/day for adults (NIH), some experts argue up to 10,000 IU is safe
  notes: Toxicity does NOT occur from sun exposure (body self-regulates). Only from excessive supplementation.
normalLevels:
  bloodRange: 20-50 ng/mL (50-125 nmol/L)
  unit: ng/mL (25-hydroxyvitamin D)
  notes: "<12 ng/mL = deficient. 12-20 = insufficient. >50 ng/mL = potentially harmful. Many experts consider 30-50 ng/mL optimal."
testing:
  methods:
    - 25-hydroxyvitamin D blood test (gold standard)
    - 1,25-dihydroxyvitamin D (active form, rarely tested)
  sampleType: Blood (serum)
  notes: 25(OH)D reflects total vitamin D status from both sun and diet. Best tested in late winter for baseline.
sources:
  - name: Cod liver oil (1 tbsp)
    amount: 1360
    unit: IU
  - name: Salmon (3 oz, cooked)
    amount: 570
    unit: IU
  - name: Sardines (3.5 oz, canned)
    amount: 270
    unit: IU
  - name: Egg yolk (1 large)
    amount: 44
    unit: IU
  - name: Fortified milk (1 cup)
    amount: 120
    unit: IU
  - name: UV-exposed mushrooms (½ cup)
    amount: 366
    unit: IU
  - name: Sunlight (10-30 min midday)
    amount: 10000-25000
    unit: IU equivalent
myths:
  - myth: You get enough vitamin D from sunlight alone
    reality: At latitudes above 37°N (e.g., most of Europe, Canada, northern US), UVB is insufficient for synthesis during winter months. Sunscreen, dark skin, age, and indoor lifestyles further reduce production.
  - myth: Vitamin D2 and D3 are equally effective
    reality: Vitamin D3 (cholecalciferol) raises blood levels ~87% more effectively than D2 (ergocalciferol) and maintains them longer.
  - myth: Vitamin D is just for bones
    reality: Vitamin D receptors exist in virtually every tissue. It influences 200+ genes involved in immunity, cancer prevention, cardiovascular health, and neurological function.
precautions:
  - Always take with fat-containing food for absorption
  - Vitamin D toxicity builds gradually due to fat storage — monitor with blood tests if supplementing >2000 IU/day
  - Magnesium is required to convert vitamin D to its active form — ensure adequate magnesium intake
  - People with granulomatous diseases (sarcoidosis) may develop hypercalcemia even at normal doses
interactions:
  - substance: Steroids (corticosteroids)
    effect: Reduce calcium absorption and impair vitamin D metabolism
  - substance: Statins
    effect: Some statins may reduce vitamin D synthesis
  - substance: Thiazide diuretics
    effect: Combined with vitamin D may cause hypercalcemia
  - substance: Orlistat
    effect: Reduces absorption of fat-soluble vitamins
history: Rickets was endemic in industrialized 19th-century cities. In 1922, Edward Mellanby demonstrated cod liver oil could prevent rickets. McCollum identified the factor as a new vitamin, naming it D. In 1923, Harry Steenbock showed UV irradiation of food could produce vitamin D — his patent funded the Wisconsin Alumni Research Foundation (WARF).
funFacts:
  - Vitamin D is technically a prohormone, not a vitamin — your body synthesizes it from cholesterol using sunlight
  - About 1 billion people worldwide are vitamin D deficient — making it the most common nutritional deficiency
  - Glass blocks UVB rays, so sitting by a sunny window does NOT produce vitamin D
  - Some lizards have been shown to seek UV light specifically to produce vitamin D, suggesting its importance across evolution
enzymeRoles:
  - "Substrate for CYP2R1 (25-hydroxylase in liver)"
  - "Substrate for CYP27B1 (1-alpha-hydroxylase in kidney)"
  - "Degraded by CYP24A1 (24-hydroxylase)"
hormonalRoles:
  - "Functions as a steroid hormone (calcitriol)"
  - "Activates Vitamin D Receptor (VDR) — a nuclear transcription factor"
  - "Regulates parathyroid hormone (PTH) secretion"
  - "Modulates insulin secretion from beta cells"
metabolicPathways:
  - "Cholecalciferol → 25(OH)D (liver) → 1,25(OH)₂D (kidney)"
  - "Calcium-phosphorus homeostasis axis"
  - "PTH-vitamin D-FGF23 feedback loop"
organsAffected:
  - "Bones"
  - "Kidneys"
  - "Intestines (calcium absorption)"
  - "Parathyroid glands"
  - "Immune cells"
  - "Skin (synthesis site)"
cellularFunctions:
  - "Gene transcription regulation (200+ genes)"
  - "Calcium channel regulation"
  - "Immune modulation (antimicrobial peptide cathelicidin)"
  - "Cell proliferation and differentiation control"
supplementForms:
  - form: "Cholecalciferol (D3)"
    bioavailability: "High"
    notes: "Animal-derived, raises 25(OH)D more effectively than D2"
  - form: "Ergocalciferol (D2)"
    bioavailability: "Moderate"
    notes: "Plant/fungal-derived, shorter half-life than D3"
  - form: "Calcifediol (25-OH D3)"
    bioavailability: "High"
    notes: "Pre-hydroxylated, 2-3x more potent at raising blood levels"
synergy:
  - nutrient: "Calcium"
    effect: "Vitamin D is strictly required for calcium absorption from the gut."
  - nutrient: "Vitamin K2"
    effect: "While D3 absorbs calcium, K2 directs it into bones instead of arteries. They should be taken together."
  - nutrient: "Magnesium"
    effect: "Required to convert inactive Vitamin D into its active form (calcitriol)."
  - nutrient: "Dietary Fat"
    effect: "As a fat-soluble vitamin, D3 absorption is vastly improved when taken with a meal containing fats."
antagonists:
  - nutrient: "Vitamin A"
    effect: "High doses of Vitamin A can compete with Vitamin D for absorption and receptor binding."
---
