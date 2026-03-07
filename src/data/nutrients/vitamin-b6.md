---
name: Vitamin B6
altName: Pyridoxine / Pyridoxal / Pyridoxamine
symbol: B6
category: vitamin
subcategory: water-soluble
essentiality: essential
sortOrder: 10
description: Involved in over 100 enzyme reactions, mostly related to protein metabolism. Essential for neurotransmitter synthesis and hemoglobin production.
functions:
  - Coenzyme in 100+ reactions, primarily amino acid metabolism
  - Required for neurotransmitter synthesis (serotonin, dopamine, GABA, norepinephrine)
  - Essential for hemoglobin production
  - Supports immune function (lymphocyte and interleukin-2 production)
  - Involved in gluconeogenesis and glycogenolysis
rda:
  nih:
    - group: Adults 19-50
      amount: 1.3 mg
    - group: Males 51+
      amount: 1.7 mg
    - group: Females 51+
      amount: 1.5 mg
    - group: Pregnant
      amount: 1.9 mg
  who:
    - group: Adults
      amount: 1.3-1.7 mg
  efsa:
    - group: Adults
      amount: 1.6 mg (men), 1.3 mg (women)
  nin:
    - group: Adult males
      amount: 2.4 mg
    - group: Adult females
      amount: 1.9 mg
deficiency:
  symptoms:
    early:
      - "Mood changes (irritability, depression)"
      - "Confusion"
      - "Mouth sores"
      - "Fatigue"
    moderate:
      - "Glossitis (swollen tongue)"
      - "Angular cheilitis"
      - "Seborrheic dermatitis"
      - "Weakened immune function"
      - "Microcytic anemia"
    severe:
      - "Peripheral neuropathy"
      - "Seizures (especially in infants — impaired GABA synthesis)"
      - "Severe anemia"
      - "EEG abnormalities"
    longTerm:
      - "Chronic peripheral neuropathy"
      - "Elevated homocysteine (cardiovascular risk)"
      - "Cognitive decline"
      - "Chronic microcytic anemia"
  conditions:
    - Sideroblastic anemia
    - Seizures in infants (B6-dependent epilepsy)
  riskGroups:
    - Alcoholics
    - Women on oral contraceptives
    - Elderly
    - People with autoimmune disorders
    - Patients on isoniazid (TB drug)
toxicity:
  symptoms:
    - Sensory peripheral neuropathy (numbness, pain in extremities)
    - Loss of coordination (ataxia)
    - Photosensitivity
  upperLimit: 100 mg/day for adults
  notes: Toxicity occurs primarily from long-term high-dose supplementation (>200 mg/day). The neuropathy is usually reversible upon cessation.
normalLevels:
  bloodRange: 20-125 nmol/L (plasma pyridoxal 5'-phosphate)
  unit: nmol/L
testing:
  methods:
    - Plasma PLP (pyridoxal 5'-phosphate) — most common
    - Urinary 4-pyridoxic acid
    - Tryptophan load test (xanthurenic acid excretion)
  sampleType: Blood (plasma)
sources:
  - name: Chickpeas (1 cup, canned)
    amount: 1.1
    unit: mg
  - name: Beef liver (3 oz)
    amount: 0.9
    unit: mg
  - name: Tuna (3 oz)
    amount: 0.9
    unit: mg
  - name: Chicken breast (3 oz)
    amount: 0.5
    unit: mg
  - name: Banana (1 medium)
    amount: 0.4
    unit: mg
  - name: Potato (1 medium, baked)
    amount: 0.4
    unit: mg
myths:
  - myth: B6 is only needed in tiny amounts
    reality: While the RDA is small, many people — especially women on hormonal contraceptives, elderly, and alcoholics — are mildly deficient. It's one of the most common B-vitamin deficiencies.
  - myth: B6 supplements are always safe
    reality: Unlike most water-soluble vitamins, B6 can cause nerve damage at chronic doses >200 mg/day. It's one of the few water-soluble vitamins with a defined toxicity syndrome.
precautions:
  - Do not exceed 100 mg/day long-term without medical supervision
  - Peripheral neuropathy from B6 toxicity can mimic B6 deficiency
  - Morning sickness treatment often uses B6 (under medical guidance)
interactions:
  - substance: Isoniazid (TB medication)
    effect: Depletes B6 — supplementation recommended
  - substance: Levodopa (Parkinson's)
    effect: B6 reduces levodopa efficacy (but not carbidopa-levodopa combo)
  - substance: Oral contraceptives
    effect: May lower B6 levels
history: Identified in the 1930s by Paul György, who distinguished it from B1 and B2. The three interconvertible forms (pyridoxine, pyridoxal, pyridoxamine) were identified by 1945. György proposed B6 supplementation during pregnancy for nausea — a practice still used today.
funFacts:
  - B6 is the only water-soluble vitamin that can cause toxicity at commonly available supplement doses
  - Your body stores only about 100 mg of B6, mostly in muscle tissue
  - B6-dependent seizures in newborns are a medical emergency treated with IV pyridoxine
  - Chickpeas are among the best plant sources — hummus is essentially a B6 superfood
enzymeRoles:
  - "Coenzyme (as PLP) for aminotransferases (transamination)"
  - "Coenzyme for glycogen phosphorylase"
  - "Coenzyme for serine hydroxymethyltransferase"
  - "Coenzyme for aromatic L-amino acid decarboxylase"
hormonalRoles:
  - "Required for serotonin synthesis (tryptophan → 5-HTP → serotonin)"
  - "Required for dopamine synthesis"
  - "Required for GABA synthesis (glutamate decarboxylase)"
  - "Modulates steroid hormone receptor activity"
metabolicPathways:
  - "Transamination reactions (amino acid interconversion)"
  - "Gluconeogenesis (glycogen breakdown)"
  - "One-carbon metabolism (with folate)"
  - "Heme synthesis (ALA synthase)"
  - "Tryptophan-niacin conversion"
organsAffected:
  - "Brain (neurotransmitter production)"
  - "Liver (amino acid metabolism)"
  - "Muscle (glycogen phosphorylase)"
  - "Bone marrow (heme synthesis)"
  - "Immune system"
cellularFunctions:
  - "Amino acid metabolism (100+ reactions)"
  - "Neurotransmitter biosynthesis"
  - "Hemoglobin synthesis"
  - "Sphingolipid synthesis (cell membranes)"
  - "Gene expression modulation"
supplementForms:
  - form: "Pyridoxine HCl"
    bioavailability: "Moderate"
    notes: "Common form, needs liver conversion to active PLP"
  - form: "Pyridoxal-5-phosphate (P5P)"
    bioavailability: "High"
    notes: "Active coenzyme form, no conversion needed"
  - form: "Pyridoxamine"
    bioavailability: "High"
    notes: "Another active form, may have anti-glycation properties"
synergy:
  - nutrient: "Magnesium"
    effect: "Enhances magnesium's cellular uptake and utilization."
  - nutrient: "Vitamin B2/B3"
    effect: "Required for the conversion of B6 to its active PLP form."
antagonists:
  []
---
