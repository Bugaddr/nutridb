---
name: Choline
altName: Trimethylethanolamine
symbol: Ch
category: other
subcategory: conditionally-essential
essentiality: conditionally-essential
sortOrder: 28
description: An essential-like nutrient for cell membrane structure, neurotransmitter synthesis (acetylcholine), and methyl group metabolism. The body can make small amounts but not enough.
functions:
  - Structural component of cell membranes (phosphatidylcholine)
  - Precursor to neurotransmitter acetylcholine
  - Methyl group donor (via betaine) for homocysteine metabolism
  - Required for lipid transport (VLDL assembly in liver)
  - Fetal brain development
rda:
  nih:
    - group: Adult males
      amount: 550 mg (AI)
    - group: Adult females
      amount: 425 mg (AI)
    - group: Pregnant
      amount: 450 mg
    - group: Lactating
      amount: 550 mg
  who:
    - group: Adults
      amount: No specific recommendation
  efsa:
    - group: Adults
      amount: 400 mg (AI)
  nin:
    - group: Adults
      amount: 400 mg
deficiency:
  symptoms:
    early:
      - "Fatigue"
      - "Memory problems"
      - "Muscle aches"
    moderate:
      - "Fatty liver (hepatosteatosis)"
      - "Elevated liver enzymes (ALT)"
      - "Muscle damage"
      - "Cognitive decline"
    severe:
      - "Non-alcoholic fatty liver disease (NAFLD)"
      - "Liver damage/necrosis"
      - "Severe muscle breakdown (rhabdomyolysis in some cases)"
    longTerm:
      - "Liver fibrosis and cirrhosis"
      - "Increased cardiovascular risk (homocysteine elevation)"
      - "Neural tube defects in offspring"
      - "Cognitive decline and dementia risk"
  conditions:
    - Non-alcoholic fatty liver disease
    - Neural tube defects in offspring (supplements folate's role)
  riskGroups:
    - Pregnant women
    - Postmenopausal women (estrogen helps choline synthesis)
    - People with PEMT gene variants
    - Vegans (richest sources are animal-based)
toxicity:
  symptoms:
    - Fishy body odor (trimethylamine)
    - Excessive sweating, GI distress
    - Hypotension
  upperLimit: 3500 mg/day for adults
normalLevels:
  bloodRange: 7-20 µmol/L (plasma free choline)
  unit: µmol/L
testing:
  methods:
    - Plasma free choline
    - Plasma betaine
    - Phosphatidylcholine in RBC membranes
  sampleType: Blood
sources:
  - name: Beef liver (3 oz)
    amount: 356
    unit: mg
  - name: Egg (1 large)
    amount: 147
    unit: mg
  - name: Chicken breast (3 oz)
    amount: 73
    unit: mg
  - name: Soybeans (½ cup)
    amount: 107
    unit: mg
  - name: Salmon (3 oz)
    amount: 75
    unit: mg
  - name: Cauliflower (1 cup)
    amount: 47
    unit: mg
  - name: "Eggs (1 whole)"
    amount: "147"
    unit: "mg"
  - name: "Soybeans (1/2 cup, roasted)"
    amount: "107"
    unit: "mg"
  - name: "Kidney beans / Rajma (1/2 cup)"
    amount: "45"
    unit: "mg"
myths:
  - myth: Choline isn't important because the body can make it
    reality: The body's synthesis is far below requirements. Only ~10% of Americans meet the adequate intake. It was only recognized as essential by the IOM in 1998.
precautions:
  - Eggs are one of the best sources — the yolk contains almost all the choline
  - Pregnant women especially need adequate choline for fetal brain development
  - High doses may cause fishy body odor (trimethylaminuria)
interactions:
  - substance: Folate and B12
    effect: Choline, folate, and B12 are interchangeable methyl donors — deficiency in one increases need for others
  - substance: Methotrexate
    effect: Increases choline requirements by disrupting folate metabolism
history: Choline was discovered in 1862 by Adolph Strecker. It wasn't recognized as an essential nutrient until 1998 when the Institute of Medicine set adequate intake levels. It remains one of the most under-recognized essential nutrients.
funFacts:
  - Choline wasn't classified as essential until 1998 — relatively recently
  - 90% of Americans don't get enough choline
  - Eggs were demonized for cholesterol but they're one of the best choline sources
  - Phosphatidylcholine (lecithin) is used as an emulsifier in chocolate and many processed foods
enzymeRoles:
  - "Substrate for choline acetyltransferase (acetylcholine synthesis)"
  - "Substrate for choline kinase (phospholipid synthesis)"
  - "Oxidized by choline oxidase → betaine (methyl donor)"
hormonalRoles:
  - "Precursor to acetylcholine (neurotransmitter)"
  - "Methyl donor via betaine (epigenetic regulation)"
  - "Required for VLDL assembly (lipid transport hormone)"
metabolicPathways:
  - "Phosphatidylcholine synthesis (Kennedy pathway)"
  - "Acetylcholine synthesis and degradation"
  - "Betaine-homocysteine methyltransferase pathway (methyl donation)"
  - "VLDL lipid packaging in liver"
organsAffected:
  - "Brain (cholinergic neurons)"
  - "Liver (phospholipid and VLDL production)"
  - "Cell membranes (all tissues)"
  - "Developing fetus"
cellularFunctions:
  - "Cell membrane structure (phosphatidylcholine)"
  - "Neurotransmission (acetylcholine)"
  - "Methyl group metabolism"
  - "Lipid transport and metabolism"
  - "Fetal neural development"
supplementForms:
  - form: "Choline bitartrate"
    bioavailability: "Moderate"
    notes: "Cheap, well absorbed, but poor brain penetration"
  - form: "Alpha-GPC"
    bioavailability: "High"
    notes: "40% choline by weight, crosses blood-brain barrier, supports cognition"
  - form: "CDP-choline (citicoline)"
    bioavailability: "High"
    notes: "Provides choline + cytidine, neuroprotective, well studied"
  - form: "Phosphatidylcholine"
    bioavailability: "Moderate"
    notes: "Found in lecithin, 13% choline, food-derived"
---
