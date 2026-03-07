---
name: Coenzyme Q10
altName: Ubiquinone / Ubiquinol
symbol: CoQ10
category: other
subcategory: non-essential
essentiality: non-essential
sortOrder: 30
description: A vitamin-like compound produced by every cell in the body. Critical for mitochondrial energy production and acts as a powerful lipid-soluble antioxidant. Production declines with age.
functions:
  - Electron carrier in mitochondrial electron transport chain (Complex I-III)
  - Acts as a powerful lipid-soluble antioxidant (ubiquinol form)
  - Regenerates vitamin E
  - Supports cardiovascular function
  - Stabilizes cell membranes
rda:
  nih:
    - group: No RDA established
      amount: Body produces it; typical supplementation is 100-200 mg/day
  who:
    - group: No recommendation
      amount: N/A
  efsa:
    - group: No recommendation
      amount: N/A
deficiency:
  symptoms:
    early:
      - "Fatigue"
      - "Exercise intolerance"
      - "Mild muscle weakness"
    moderate:
      - "Increasing fatigue"
      - "Statin-induced myalgia (muscle pain)"
      - "Reduced stamina"
    severe:
      - "Primary CoQ10 deficiency (genetic) — cerebellar ataxia, seizures, kidney failure"
      - "Encephalomyopathy"
      - "Severe myopathy"
    longTerm:
      - "Progressive neurodegeneration (in genetic deficiency)"
      - "Heart failure risk (in elderly with declining production)"
      - "Chronic fatigue"
  conditions:
    - Primary CoQ10 deficiency (rare genetic)
    - Statin-induced CoQ10 depletion (controversial)
    - Age-related decline
  riskGroups:
    - Elderly (production declines ~50% by age 80)
    - Statin users (statins block the mevalonate pathway used for CoQ10 synthesis)
    - People with heart failure
    - People with mitochondrial disorders
toxicity:
  symptoms:
    - Generally well tolerated
    - Mild GI upset, insomnia at high doses
  upperLimit: No established UL. Doses up to 1200 mg/day used in studies without serious adverse effects.
normalLevels:
  bloodRange: 0.5-1.5 µg/mL (plasma)
  unit: µg/mL
  notes: Levels decline with age. No consensus on "optimal" levels.
testing:
  methods:
    - Plasma CoQ10 (total or ubiquinol form)
    - Muscle biopsy CoQ10 (research only)
  sampleType: Blood (plasma)
sources:
  - name: Beef heart (3 oz)
    amount: 26.6
    unit: mg
  - name: Sardines (3 oz)
    amount: 6.4
    unit: mg
  - name: Pork (3 oz)
    amount: 3.3
    unit: mg
  - name: Spinach (½ cup)
    amount: 1.4
    unit: mg
  - name: Peanuts (1 oz)
    amount: 0.8
    unit: mg
  - name: Broccoli (½ cup)
    amount: 0.5
    unit: mg
myths:
  - myth: CoQ10 is a miracle anti-aging supplement
    reality: While CoQ10 declines with age and plays a role in energy production, no human studies have proven it extends lifespan. It may benefit heart failure patients, but broader anti-aging claims are unproven.
  - myth: Everyone on statins needs CoQ10
    reality: Statins do reduce CoQ10 production, but clinical significance is debated. Some people on statins experience muscle pain that CoQ10 may help, but the evidence is mixed.
precautions:
  - Ubiquinol form is better absorbed than ubiquinone, especially in older adults
  - Take with fatty food for better absorption (fat-soluble)
  - May reduce warfarin effectiveness
interactions:
  - substance: Statins (HMG-CoA reductase inhibitors)
    effect: Statins block the mevalonate pathway, reducing CoQ10 synthesis by up to 40%
  - substance: Warfarin
    effect: CoQ10 may reduce warfarin's anticoagulant effect (structurally similar to vitamin K)
  - substance: Beta-blockers
    effect: Some may inhibit CoQ10-dependent enzymes
history: CoQ10 was discovered in 1957 by Frederick Crane at the University of Wisconsin. Peter Mitchell won the 1978 Nobel Prize for explaining the chemiosmotic theory, in which CoQ10 plays a central role. Japanese researchers pioneered its therapeutic use for heart failure in the 1960s-70s.
funFacts:
  - 'Ubiquinone means "the ubiquitous quinone" — it is found in every cell of every living organism'
  - Your body produces about 500 mg of CoQ10 per day at peak, declining to ~250 mg by age 80
  - Organ meats (heart, liver, kidney) are the richest sources because mitochondria are densest there
  - Japan was the first country to approve CoQ10 for clinical use in heart failure (1974)
enzymeRoles:
  - "Electron carrier between Complex I → Complex III"
  - "Electron carrier between Complex II → Complex III"
  - "Cofactor for dihydroorotate dehydrogenase (pyrimidine synthesis)"
hormonalRoles:
  - "No direct hormonal roles"
  - "Supports cellular energy production underlying all hormonal processes"
metabolicPathways:
  - "Mitochondrial electron transport chain"
  - "Oxidative phosphorylation (ATP production)"
  - "Pyrimidine synthesis (de novo)"
  - "Mevalonate pathway (shared with cholesterol — blocked by statins)"
organsAffected:
  - "Heart (highest mitochondrial density)"
  - "Liver"
  - "Kidneys"
  - "Skeletal muscle"
  - "Brain"
cellularFunctions:
  - "Mitochondrial electron shuttling"
  - "ATP synthesis"
  - "Lipid-soluble antioxidant (ubiquinol form)"
  - "Vitamin E regeneration"
  - "Cell membrane protection"
---
