---
name: Vitamin E
altName: Alpha-Tocopherol
symbol: E
category: vitamin
subcategory: fat-soluble
essentiality: essential
sortOrder: 3
description: A fat-soluble antioxidant that protects cell membranes from oxidative damage, supports immune function, and prevents blood clots.
functions:
  - Powerful lipid-soluble antioxidant protecting cell membranes
  - Supports immune function, especially in the elderly
  - Prevents LDL cholesterol oxidation (anti-atherosclerotic)
  - Helps widen blood vessels and inhibit platelet aggregation
  - Supports cell signaling and gene expression
rda:
  nih:
    - group: Adults
      amount: 15 mg (22.4 IU)
    - group: Lactating women
      amount: 19 mg
    - group: Children 1-3 years
      amount: 6 mg
  who:
    - group: Adults
      amount: 10 mg (men), 7.5 mg (women)
  efsa:
    - group: Adults
      amount: 13 mg (men), 11 mg (women)
  nin:
    - group: Adult males
      amount: 10 mg
    - group: Adult females
      amount: 8 mg
deficiency:
  symptoms:
    early:
      - "Mild fatigue"
      - "Poor concentration"
      - "Increased oxidative stress markers"
    moderate:
      - "Peripheral neuropathy (numbness, tingling in hands/feet)"
      - "Muscle weakness"
      - "Impaired immune response"
      - "Retinopathy"
    severe:
      - "Spinocerebellar ataxia (loss of coordination)"
      - "Skeletal myopathy"
      - "Hemolytic anemia (especially in premature infants)"
      - "Severe neuropathy"
    longTerm:
      - "Progressive neurodegeneration"
      - "Chronic hemolytic anemia"
      - "Retinal damage"
      - "Cognitive decline"
  conditions:
    - Spinocerebellar ataxia (from genetic vitamin E deficiency)
    - Hemolytic anemia in premature infants
  riskGroups:
    - People with fat malabsorption (Crohn's, cystic fibrosis)
    - Premature, very low birth weight infants
    - People with abetalipoproteinemia (rare genetic)
toxicity:
  symptoms:
    - Increased bleeding risk (anticoagulant effect)
    - Nausea, diarrhea, fatigue
    - Hemorrhagic stroke risk (high-dose supplements)
  upperLimit: 1000 mg/day (synthetic) for adults
  notes: The SELECT trial showed high-dose vitamin E supplements (400 IU/day) increased prostate cancer risk by 17%.
normalLevels:
  bloodRange: 5.5-17 mg/L (12-40 µmol/L)
  unit: mg/L
  notes: Levels should be interpreted relative to blood lipid levels (alpha-tocopherol/cholesterol ratio).
testing:
  methods:
    - Serum alpha-tocopherol level
    - Alpha-tocopherol to lipid ratio (more accurate)
  sampleType: Blood (serum)
sources:
  - name: Wheat germ oil (1 tbsp)
    amount: 20.3
    unit: mg
  - name: Sunflower seeds (1 oz)
    amount: 7.4
    unit: mg
  - name: Almonds (1 oz)
    amount: 6.8
    unit: mg
  - name: Hazelnuts (1 oz)
    amount: 4.3
    unit: mg
  - name: Spinach (½ cup, boiled)
    amount: 1.9
    unit: mg
  - name: Avocado (½)
    amount: 2.1
    unit: mg
  - name: "Almonds / Badam (1 oz)"
    amount: "7.3"
    unit: "mg"
  - name: "Sunflower seeds (1 oz)"
    amount: "7.4"
    unit: "mg"
  - name: "Peanut oil (1 tbsp)"
    amount: "2.1"
    unit: "mg"
myths:
  - myth: Vitamin E supplements prevent heart disease
    reality: Large clinical trials (HOPE, GISEE) found no cardiovascular benefit from vitamin E supplementation and potential harm at high doses.
  - myth: More vitamin E is better for skin health
    reality: Topical vitamin E may help wound healing, but oral mega-doses don't improve skin and may cause rashes in sensitive individuals.
precautions:
  - Stop high-dose supplements 2 weeks before surgery (bleeding risk)
  - Avoid doses >400 IU/day — associated with increased all-cause mortality
  - Only alpha-tocopherol form counts toward RDA — check supplement labels
interactions:
  - substance: Blood thinners (warfarin, aspirin)
    effect: Increased bleeding risk
  - substance: Chemotherapy/Radiation
    effect: Antioxidant effects may reduce treatment efficacy
  - substance: Statins + Niacin
    effect: May reduce HDL-raising benefit of statin-niacin combo
history: Discovered in 1922 by Herbert Evans and Katharine Bishop, who found a dietary factor essential for rat reproduction. Named "tocopherol" from Greek — "tokos" (birth) + "phero" (to carry) + "ol" (alcohol). Its antioxidant role wasn't understood until decades later.
funFacts:
  - Vitamin E exists in 8 forms but only alpha-tocopherol is maintained in human blood
  - Palm oil and wheat germ oil are among the richest natural sources
  - The recommended amount is expressed in "alpha-tocopherol equivalents" because synthetic forms are half as bioavailable
enzymeRoles:
  - "Inhibitor of protein kinase C (cell signaling)"
  - "Modulator of 5-lipoxygenase and cyclooxygenase"
  - "Substrate for alpha-tocopherol transfer protein (α-TTP)"
hormonalRoles:
  - "Modulates prostaglandin synthesis"
  - "Influences sex hormone metabolism"
  - "May affect thyroid hormone economy"
metabolicPathways:
  - "Lipid peroxidation chain-breaking"
  - "Vitamin E recycling via vitamin C and glutathione"
  - "Hepatic metabolism via CYP4F2 and CYP3A4"
organsAffected:
  - "Cell membranes (all tissues)"
  - "Brain and nervous system"
  - "Red blood cells"
  - "Liver"
  - "Reproductive organs"
cellularFunctions:
  - "Lipid-soluble chain-breaking antioxidant"
  - "Cell membrane integrity protection"
  - "Inhibition of platelet aggregation"
  - "Protection of polyunsaturated fatty acids (PUFAs) from oxidation"
supplementForms:
  - form: "d-alpha-tocopherol (natural)"
    bioavailability: "High"
    notes: "Natural form, ~2x biological activity vs synthetic"
  - form: "dl-alpha-tocopherol (synthetic)"
    bioavailability: "Moderate"
    notes: "Racemic mix, ~50% bioavailable vs natural form"
  - form: "d-alpha-tocopheryl succinate"
    bioavailability: "High"
    notes: "Ester form, stable, hydrolyzed in gut to active form"
  - form: "Mixed tocopherols"
    bioavailability: "High"
    notes: "Contains alpha, beta, gamma, delta — more complete"
  - form: "Tocotrienols"
    bioavailability: "Moderate"
    notes: "Different biological activities, emerging research"
synergy:
  - nutrient: "Vitamin C"
    effect: "Regenerates oxidized Vitamin E back to its active antioxidant state."
  - nutrient: "Selenium"
    effect: "Works synergistically as an antioxidant protecting lipid membranes."
antagonists:
  - nutrient: "Vitamin K"
    effect: "High doses of Vitamin E can block Vitamin K's coagulation effects."
  - nutrient: "Iron"
    effect: "Inorganic iron supplements can destroy Vitamin E in the digestive tract."
---
