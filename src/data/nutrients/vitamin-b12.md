---
name: Vitamin B12
altName: Cobalamin / Methylcobalamin / Cyanocobalamin
symbol: B12
category: vitamin
subcategory: water-soluble
essentiality: essential
sortOrder: 13
description: 'The most structurally complex vitamin, containing cobalt. Essential for nerve function, DNA synthesis, and red blood cell formation. Only found naturally in animal products.'
functions:
  - Coenzyme for methionine synthase (methylation cycle)
  - Required for DNA synthesis and regulation
  - Essential for red blood cell maturation
  - Maintains myelin sheath around nerves
  - Cofactor for methylmalonyl-CoA mutase (energy from fats/proteins)
rda:
  nih:
    - group: Adults
      amount: 2.4 mcg
    - group: Pregnant
      amount: 2.6 mcg
    - group: Lactating
      amount: 2.8 mcg
    - group: Adults 50+
      amount: 2.4 mcg (from supplements/fortified foods recommended)
  who:
    - group: Adults
      amount: 2.4 mcg
  efsa:
    - group: Adults
      amount: 4 mcg
  nin:
    - group: Adults
      amount: 2.2 mcg
    - group: Pregnancy
      amount: 2.2 mcg
deficiency:
  symptoms:
    early:
      - Fatigue and weakness
      - Pale or jaundiced skin
      - Pins and needles (paresthesia)
      - Mouth ulcers
      - Mood disturbance
    moderate:
      - Megaloblastic anemia
      - Glossitis (beefy red tongue)
      - Difficulty walking and balance problems
      - 'Cognitive changes (memory problems, confusion)'
      - Breathlessness
    severe:
      - Subacute combined degeneration of spinal cord
      - Severe peripheral neuropathy
      - Psychosis and severe dementia
      - Pancytopenia
      - Optic neuropathy
    longTerm:
      - Irreversible neurological damage (if untreated >6 months)
      - Permanent spinal cord damage
      - Increased cardiovascular risk (homocysteine)
      - Pernicious anemia (autoimmune — lifelong B12 injections needed)
  conditions:
    - Pernicious anemia (autoimmune destruction of intrinsic factor)
    - Subacute combined degeneration of the spinal cord
    - Irreversible neurological damage if untreated
  mimickingConditions:
    - Folate (B9) deficiency (causes identical megaloblastic anemia)
    - Multiple sclerosis (shares similar neurological symptoms like paresthesia and gait issues)
    - Copper deficiency (can cause similar myelopathy and neuropathy)
  riskGroups:
    - Vegans and strict vegetarians (NO plant sources)
    - Elderly (reduced absorption due to atrophic gastritis — affects 10-30%)
    - People on metformin (reduces absorption)
    - People on long-term PPIs or H2 blockers
    - Post-bariatric surgery patients
toxicity:
  symptoms:
    - No known toxicity — extremely safe even at high doses
  upperLimit: No established UL
  notes: B12 is stored in the liver (2-5 mg total) — stores can last 3-5 years even with zero intake.
normalLevels:
  bloodRange: 200-900 pg/mL (148-664 pmol/L)
  unit: pg/mL
  notes: <200 pg/mL = deficient. 200-300 = borderline. Methylmalonic acid (MMA) is a more specific marker.
testing:
  methods:
    - Serum B12 level (most common but not very specific)
    - Methylmalonic acid (MMA) — elevated in B12 deficiency (more specific)
    - Homocysteine — elevated in B12 and/or folate deficiency
    - Holotranscobalamin (active B12) — the best early marker
  sampleType: Blood (serum)
sources:
  - name: Clams (3 oz)
    amount: 84.1
    unit: mcg
  - name: Beef liver (3 oz)
    amount: 70.7
    unit: mcg
  - name: 'Nutritional yeast (1 tbsp, fortified)'
    amount: 2.4
    unit: mcg
  - name: Salmon (3 oz)
    amount: 4.8
    unit: mcg
  - name: Beef (3 oz)
    amount: 1.4
    unit: mcg
  - name: Milk (1 cup)
    amount: 1.2
    unit: mcg
  - name: Egg (1 large)
    amount: 0.6
    unit: mcg
  - name: Milk (1 cup)
    amount: '1.2'
    unit: mcg
  - name: Paneer (100g)
    amount: '0.8'
    unit: mcg
  - name: Curd / Dahi (1 cup)
    amount: '0.9'
    unit: mcg
myths:
  - myth: Spirulina and seaweed provide B12
    reality: They contain B12 ANALOGUES (pseudovitamin B12) that are inactive in humans and may actually block real B12 absorption. Vegans MUST use supplements or fortified foods.
  - myth: You can get enough B12 from a healthy plant-based diet
    reality: There is NO reliable plant-based source of active B12. Supplement or fortified food is mandatory for vegans.
  - myth: B12 injections give you energy if you're not deficient
    reality: B12 shots only boost energy if you were actually deficient. They've become a wellness fad with no evidence of benefit for non-deficient people.
precautions:
  - Vegans MUST supplement B12 — this is non-negotiable
  - Adults over 50 should get B12 from supplements/fortified foods (better absorbed than food-bound B12)
  - Neurological damage from B12 deficiency can be IRREVERSIBLE — early detection is crucial
  - Folate supplementation can mask B12 deficiency anemia while neurological damage progresses silently
interactions:
  - substance: Metformin
    effect: Reduces B12 absorption by 10-30% — monitor levels
  - substance: Proton pump inhibitors (omeprazole)
    effect: Reduce acid needed to release B12 from food proteins
  - substance: Nitrous oxide (anesthesia/recreational)
    effect: Inactivates B12 — can precipitate acute deficiency and neurological crisis
  - substance: Colchicine
    effect: Reduces B12 absorption
history: 'B12 has the richest discovery history of any vitamin. In 1926, Minot and Murphy showed that eating liver cured pernicious anemia (Nobel Prize 1934). It took until 1948 for the vitamin itself to be isolated — independently by Karl Folkers (US) and Alexander Todd (UK). Dorothy Hodgkin determined its structure using X-ray crystallography in 1956 (Nobel Prize 1964). It remains the largest and most complex vitamin.'
funFacts:
  - B12 is the only vitamin containing a metal ion (cobalt) — hence 'COBAL-amin'
  - It's the largest and most structurally complex vitamin known
  - 'Your liver stores enough B12 to last 3-5 years, which is why vegans may not notice deficiency for years'
  - Dorothy Hodgkin's X-ray crystallography of B12 was considered one of the greatest achievements in structural chemistry
  - Nitrous oxide ('laughing gas') permanently destroys B12 — recreational users can develop acute neurological damage
enzymeRoles:
  - Cofactor for methionine synthase (methylcobalamin form)
  - Cofactor for methylmalonyl-CoA mutase (adenosylcobalamin form)
hormonalRoles:
  - 'Required for SAM production (methylation of hormones, neurotransmitters)'
  - Indirectly supports myelin synthesis
  - Influences homocysteine-mediated vascular signaling
metabolicPathways:
  - Methylation cycle (homocysteine → methionine → SAM)
  - Propionate pathway (methylmalonyl-CoA → succinyl-CoA)
  - Folate trap release (methyl-THF → THF)
organsAffected:
  - Nervous system (myelin sheath)
  - Bone marrow (red blood cell maturation)
  - Brain (cognitive function)
  - Liver (storage — 2-5 mg)
  - GI tract
cellularFunctions:
  - Methyl group transfer
  - DNA synthesis (via folate cycle coupling)
  - Myelin membrane maintenance
  - Mitochondrial energy production (succinyl-CoA for TCA)
supplementForms:
  - form: Cyanocobalamin
    bioavailability: Moderate
    notes: 'Synthetic, cheapest, requires conversion to active forms, contains cyanide trace'
  - form: Methylcobalamin
    bioavailability: High
    notes: 'Active coenzyme form, used in methylation cycle'
  - form: Adenosylcobalamin
    bioavailability: High
    notes: 'Active coenzyme form, used in mitochondrial metabolism'
  - form: Hydroxocobalamin
    bioavailability: High
    notes: 'Natural form, longest retention, used in injections, cyanide antidote'
synergy:
  - nutrient: Folate (B9)
    effect: Work together in the methylation cycle and DNA synthesis. B12 deficiency traps folate in an unusable form.
antagonists:
  - nutrient: Vitamin C
    effect: Massive doses (>1000mg) taken with meals might destroy B12 in the gut.
---

