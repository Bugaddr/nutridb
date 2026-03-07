---
name: Iodine
altName: Iodide
symbol: I
category: mineral
subcategory: trace
essentiality: essential
sortOrder: 23
description: Essential for thyroid hormone synthesis. Iodine deficiency is the most common cause of preventable intellectual disability worldwide. Iodized salt programs have been one of public health's greatest successes.
functions:
  - Required for thyroid hormone production (T3 and T4)
  - Thyroid hormones regulate metabolism, growth, and development
  - Critical for fetal and infant brain development
  - Breast tissue health (concentrate iodine)
rda:
  nih:
    - group: Adults
      amount: 150 mcg
    - group: Pregnant
      amount: 220 mcg
    - group: Lactating
      amount: 290 mcg
  who:
    - group: Adults
      amount: 150 mcg
    - group: Pregnant/Lactating
      amount: 250 mcg
  efsa:
    - group: Adults
      amount: 150 mcg
  nin:
    - group: Adults
      amount: 140 mcg
    - group: Pregnancy
      amount: 200 mcg
deficiency:
  symptoms:
    early:
      - "Fatigue"
      - "Weight gain"
      - "Cold sensitivity"
      - "Dry skin"
      - "Mild cognitive slowing"
    moderate:
      - "Goiter (thyroid enlargement)"
      - "Constipation"
      - "Puffy face"
      - "Hair thinning"
      - "Depression"
      - "Irregular periods"
    severe:
      - "Severe hypothyroidism (myxedema)"
      - "Cretinism in infants (profound intellectual disability, deaf-mutism)"
      - "Myxedema coma (life-threatening)"
    longTerm:
      - "Endemic goiter"
      - "Intellectual disability (cretinism — most preventable cause of brain damage worldwide)"
      - "Impaired reproductive function"
      - "Increased pregnancy complications (stillbirth, miscarriage)"
  conditions:
    - Goiter
    - Cretinism (severe intellectual disability in children of deficient mothers)
    - Hypothyroidism
  riskGroups:
    - People in mountainous/inland regions far from ocean
    - Pregnant women (increased demand)
    - People who don't use iodized salt
    - Vegans (limited dietary sources)
toxicity:
  symptoms:
    - Thyroid dysfunction (both hyper- and hypothyroidism)
    - Metallic taste, sore teeth and gums
    - Burning sensation in mouth/throat
  upperLimit: 1100 mcg/day for adults
  notes: Both excess and deficiency cause thyroid problems. Japanese populations tolerating high iodine from seaweed may have adapted over generations.
normalLevels:
  bloodRange: Assessed via urinary iodine concentration
  unit: mcg/L (urine)
  notes: Spot urine iodine of 100-199 mcg/L indicates adequate intake for populations.
testing:
  methods:
    - Urinary iodine concentration (best population-level indicator)
    - Thyroid function tests (TSH, T4 — indirect)
    - Thyroglobulin level
  sampleType: Urine
sources:
  - name: Seaweed/kelp (1 sheet)
    amount: 16-2984
    unit: mcg (highly variable)
  - name: Cod (3 oz)
    amount: 99
    unit: mcg
  - name: Iodized salt (¼ tsp)
    amount: 71
    unit: mcg
  - name: Milk (1 cup)
    amount: 56
    unit: mcg
  - name: Shrimp (3 oz)
    amount: 35
    unit: mcg
  - name: Egg (1 large)
    amount: 24
    unit: mcg
myths:
  - myth: Iodine deficiency is no longer a problem
    reality: ~2 billion people worldwide remain at risk. Even in developed countries, pregnant women are often mildly deficient. Only 71% of the world's households use iodized salt.
  - myth: Sea salt contains enough iodine
    reality: Most sea salt is NOT an adequate iodine source — the iodine evaporates during processing. Only specifically iodized salt provides reliable iodine.
precautions:
  - Pregnant women should use prenatal vitamins containing iodine
  - Kelp supplements can contain dangerously variable amounts (100-10,000+ mcg)
  - Goitrogens in raw cruciferous vegetables can interfere with iodine utilization (but are largely neutralized by cooking)
interactions:
  - substance: Goitrogens (cruciferous vegetables, soy)
    effect: Can interfere with thyroid iodine uptake (significant only with deficiency)
  - substance: Selenium
    effect: Required for thyroid hormone conversion — deficiency of either worsens the other
  - substance: Lithium
    effect: Inhibits thyroid hormone release — may worsen iodine deficiency effects
history: Goiter treatments with seaweed and burnt sponge date to ancient China and Greece. In 1811, Bernard Courtois discovered iodine while making gunpowder from seaweed ash. The Swiss began iodizing salt in 1922, dramatically reducing goiter. The global salt iodization movement has been called one of the greatest public health achievements of the 20th century.
funFacts:
  - Salt iodization is estimated to have raised average IQ by 3.5 points in previously deficient populations
  - The "goiter belt" of the US Midwest and Great Lakes region had goiter rates of up to 70% before iodized salt
  - Japan's seaweed-rich diet provides 1,000-3,000 mcg iodine daily — 10-20x the RDA — yet thyroid disease rates aren't dramatically higher
  - Iodine deficiency remains the single most common cause of preventable brain damage in the world
enzymeRoles:
  - "Substrate for thyroid peroxidase (TPO) — organification of iodine"
  - "Component of thyroid hormones used by deiodinases"
hormonalRoles:
  - "Structural component of T3 (triiodothyronine — 3 iodines) and T4 (thyroxine — 4 iodines)"
  - "Thyroid hormones regulate metabolism in virtually every cell"
  - "Influences TSH feedback loop"
metabolicPathways:
  - "Iodide trapping by sodium-iodide symporter (NIS)"
  - "Organification and coupling in thyroglobulin"
  - "T4 → T3 conversion by deiodinases (selenium-dependent)"
  - "Wolff-Chaikoff effect (autoregulation at high iodine)"
organsAffected:
  - "Thyroid gland (primary)"
  - "Brain (development)"
  - "Breast tissue"
  - "Salivary glands"
  - "Gastric mucosa"
cellularFunctions:
  - "Basal metabolic rate regulation"
  - "Thermogenesis"
  - "Protein synthesis stimulation"
  - "Neural development and myelination"
supplementForms:
  - form: "Potassium iodide"
    bioavailability: "High"
    notes: "Standard supplement form, well absorbed"
  - form: "Sodium iodide"
    bioavailability: "High"
    notes: "Used in iodized salt"
  - form: "Kelp/seaweed extract"
    bioavailability: "Moderate"
    notes: "Natural source, variable iodine content, may contain contaminants"
  - form: "Nascent iodine"
    bioavailability: "Moderate"
    notes: "Atomic form, claimed better absorption — limited evidence"
synergy:
  - nutrient: "Selenium"
    effect: "Required to convert thyroid hormone T4 to the active T3 form. Iodine without selenium can damage the thyroid."
  - nutrient: "Iron"
    effect: "Required for thyroperoxidase, the enzyme that adds iodine to thyroglobulin."
antagonists:
  - nutrient: "Goitrogens"
    effect: "Compounds in raw cruciferous vegetables and soy that compete with iodine for thyroid uptake."
  - nutrient: "Fluoride/Bromide"
    effect: "Halogens that can compete with iodine for absorption and cellular receptors."
---
