---
name: Vitamin B9
altName: Folate / Folic Acid
symbol: B9
category: vitamin
subcategory: water-soluble
essentiality: essential
sortOrder: 12
description: Critical for DNA synthesis, cell division, and preventing neural tube defects in pregnancy. Folate is the natural form; folic acid is the synthetic form.
functions:
  - Essential coenzyme for DNA/RNA synthesis and repair
  - Required for cell division and growth
  - Works with B12 in methionine metabolism (methylation cycle)
  - Critical for neural tube formation in early pregnancy
  - Required for red blood cell maturation
rda:
  nih:
    - group: Adults
      amount: 400 mcg DFE
    - group: Pregnant women
      amount: 600 mcg DFE
    - group: Lactating women
      amount: 500 mcg DFE
    - group: Women of childbearing age
      amount: 400 mcg from supplements/fortified foods IN ADDITION to food folate
  who:
    - group: Adults
      amount: 400 mcg
    - group: Pregnant
      amount: 600 mcg
  efsa:
    - group: Adults
      amount: 330 mcg DFE
deficiency:
  symptoms:
    - Megaloblastic anemia (large, immature red blood cells)
    - Fatigue, weakness, shortness of breath
    - Mouth sores, swollen tongue
    - Irritability, forgetfulness
    - Elevated homocysteine levels
  conditions:
    - Neural tube defects (spina bifida, anencephaly) in offspring
    - Megaloblastic anemia
    - Hyperhomocysteinemia (cardiovascular risk)
  riskGroups:
    - Women of childbearing age (especially pre-conception)
    - Pregnant women
    - Alcoholics
    - People with celiac disease or IBD
    - Those with MTHFR gene variants (impaired folate metabolism)
toxicity:
  symptoms:
    - Can mask B12 deficiency (corrects anemia but not neurological damage)
    - May promote growth of existing pre-cancerous cells (controversial)
  upperLimit: 1000 mcg/day of folic acid (synthetic form) for adults
  notes: The main concern is masking B12 deficiency in the elderly, leading to irreversible neurological damage.
normalLevels:
  bloodRange: ">3 ng/mL serum folate; >140 ng/mL RBC folate"
  unit: ng/mL
testing:
  methods:
    - Serum folate (reflects recent intake)
    - Red blood cell (RBC) folate (reflects long-term status — preferred)
    - Plasma homocysteine (indirect marker — elevated in folate deficiency)
  sampleType: Blood
sources:
  - name: Beef liver (3 oz)
    amount: 215
    unit: mcg DFE
  - name: Spinach (½ cup, boiled)
    amount: 131
    unit: mcg DFE
  - name: Black-eyed peas (½ cup)
    amount: 105
    unit: mcg DFE
  - name: Asparagus (4 spears)
    amount: 89
    unit: mcg DFE
  - name: Brussels sprouts (½ cup)
    amount: 78
    unit: mcg DFE
  - name: Avocado (½)
    amount: 59
    unit: mcg DFE
  - name: Fortified cereal (1 cup)
    amount: 400
    unit: mcg DFE
myths:
  - myth: Folate and folic acid are the same thing
    reality: Folate is the natural form found in food. Folic acid is the synthetic form used in supplements and fortification — it requires enzymatic conversion. People with MTHFR mutations may not convert folic acid efficiently.
  - myth: If you eat well, you don't need folic acid during pregnancy
    reality: Neural tube defects occur in the first 28 days of pregnancy, often before a woman knows she's pregnant. All women of childbearing age should take 400 mcg folic acid daily regardless of diet.
precautions:
  - Start supplementation BEFORE conception — neural tube closes by day 28
  - MTHFR variants (especially C677T) may benefit from methylfolate (5-MTHF) instead of folic acid
  - Always check B12 status when supplementing folate, especially in elderly
  - Mandatory folic acid fortification of grain products in 80+ countries has reduced neural tube defects by 20-50%
interactions:
  - substance: Methotrexate
    effect: Methotrexate works by inhibiting folate metabolism — leucovorin (folinic acid) is the rescue therapy
  - substance: Anticonvulsants (phenytoin, carbamazepine)
    effect: Reduce folate absorption; folate may reduce anticonvulsant levels
  - substance: Sulfasalazine
    effect: Impairs folate absorption
history: In 1931, Lucy Wills discovered that yeast extract (Marmite) cured macrocytic anemia in pregnant textile workers in India. The "Wills factor" was later identified as folic acid (from Latin "folium" = leaf). The link between folate and neural tube defects was established in the 1960s-1980s, leading to mandatory fortification programs worldwide.
funFacts:
  - Mandatory folic acid fortification in the US alone prevents ~1,300 neural tube defects per year
  - The name comes from Latin "folium" (leaf) — dark leafy greens are among the best sources
  - MTHFR gene variants affecting folate metabolism are extremely common — up to 40% of some populations
  - Lucy Wills used Marmite to cure anemia — making it one of the most important medical discoveries from a yeast extract
---
