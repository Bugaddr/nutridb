---
name: Vitamin A
altName: Retinol / Retinoids
symbol: A
category: vitamin
subcategory: fat-soluble
essentiality: essential
sortOrder: 1
description: A fat-soluble vitamin critical for vision, immune function, reproduction, and cellular communication.
functions:
  - Maintains healthy vision, especially night vision (retinal is the active form in the retina)
  - Supports immune system by maintaining mucosal barriers and white blood cell production
  - Essential for cell growth, differentiation, and embryonic development
  - Acts as an antioxidant (beta-carotene form) protecting cells from free radical damage
  - Maintains healthy skin, teeth, skeletal and soft tissue
rda:
  nih:
    - group: Infants 0-6 months
      amount: 400 mcg RAE
    - group: Children 1-3 years
      amount: 300 mcg RAE
    - group: Children 4-8 years
      amount: 400 mcg RAE
    - group: Males 9-13 years
      amount: 600 mcg RAE
    - group: Males 14+ years
      amount: 900 mcg RAE
    - group: Females 9-13 years
      amount: 600 mcg RAE
    - group: Females 14+ years
      amount: 700 mcg RAE
    - group: Pregnant women
      amount: 770 mcg RAE
    - group: Lactating women
      amount: 1300 mcg RAE
  who:
    - group: Adults male
      amount: 600 mcg RE
    - group: Adults female
      amount: 500 mcg RE
    - group: Pregnant women
      amount: 800 mcg RE
  efsa:
    - group: Adults
      amount: 750 mcg RE (men), 650 mcg RE (women)
deficiency:
  symptoms:
    early:
      - "Night blindness (nyctalopia)"
      - "Dry eyes"
      - "Dry skin and poor wound healing"
      - "Frequent minor infections"
    moderate:
      - "Bitot spots on conjunctiva (foamy white patches)"
      - "Rough, scaly skin (follicular hyperkeratosis)"
      - "Impaired immune response"
      - "Loss of taste and smell"
    severe:
      - "Xerophthalmia (corneal drying and ulceration)"
      - "Keratomalacia (corneal melting — irreversible blindness)"
      - "Severe immunodeficiency"
      - "Growth retardation in children"
    longTerm:
      - "Permanent blindness"
      - "Increased childhood mortality from measles and diarrhea"
      - "Impaired fetal development"
      - "Iron-deficiency anemia (vitamin A aids iron mobilization)"
  conditions:
    - Xerophthalmia — leading cause of preventable childhood blindness worldwide
    - Keratomalacia — corneal necrosis
    - Measles complications — vitamin A deficiency worsens outcomes
  riskGroups:
    - Premature infants
    - Children in developing countries
    - Pregnant/lactating women in low-income regions
    - People with cystic fibrosis or Crohn's disease
    - Individuals with fat malabsorption disorders
toxicity:
  symptoms:
    - Nausea, vomiting, headache, dizziness
    - Blurred vision, bone pain, skin peeling
    - Liver damage (hepatotoxicity) with chronic excess
    - Birth defects (teratogenic) — retinoids are Category X in pregnancy
    - Hypervitaminosis A — can be fatal in extreme cases
  upperLimit: 3000 mcg RAE/day for adults (NIH)
  notes: Toxicity only occurs from preformed vitamin A (retinol), NOT from beta-carotene. Beta-carotene can cause harmless orange skin (carotenodermia).
normalLevels:
  bloodRange: 20-60 mcg/dL (0.7-2.1 µmol/L)
  unit: mcg/dL
  notes: Serum retinol below 20 mcg/dL indicates deficiency. Liver stores are a more accurate indicator but require biopsy.
testing:
  methods:
    - Serum retinol level (most common blood test)
    - Retinol-binding protein (RBP) levels
    - Relative dose response (RDR) test — measures liver stores
    - Dark adaptation test — functional assessment of night vision
  sampleType: Blood (serum)
  notes: Serum retinol is homeostatically controlled, so it only drops when liver stores are severely depleted.
sources:
  - name: Beef liver (3 oz)
    amount: 6582
    unit: mcg RAE
  - name: Sweet potato (1 medium, baked)
    amount: 1403
    unit: mcg RAE
  - name: Carrots (½ cup, raw)
    amount: 459
    unit: mcg RAE
  - name: Spinach (½ cup, boiled)
    amount: 573
    unit: mcg RAE
  - name: Cantaloupe (½ cup)
    amount: 135
    unit: mcg RAE
  - name: Mango (1 whole)
    amount: 112
    unit: mcg RAE
  - name: Egg (1 large)
    amount: 75
    unit: mcg RAE
  - name: Cod liver oil (1 tsp)
    amount: 1350
    unit: mcg RAE
myths:
  - myth: Eating carrots gives you super vision
    reality: Carrots provide beta-carotene which supports normal vision, but won't give you superhuman sight. This myth originated from WWII British propaganda to hide their radar technology.
  - myth: You can never get too much vitamin A from food
    reality: Liver is extremely rich in preformed vitamin A — eating polar bear liver has historically caused fatal hypervitaminosis A in Arctic explorers.
  - myth: All forms of vitamin A are equally effective
    reality: Preformed vitamin A (retinol, from animal sources) is directly usable. Plant carotenoids must be converted, and conversion efficiency varies 3-28x between individuals.
precautions:
  - Avoid retinol supplements during pregnancy — high doses are teratogenic
  - Accutane (isotretinoin) is a vitamin A derivative; do not combine with supplements
  - Fat is required for absorption — take with meals containing dietary fat
  - Alcohol consumption increases the hepatotoxic effects of vitamin A
  - Smokers should avoid high-dose beta-carotene supplements (increased lung cancer risk in ATBC/CARET trials)
interactions:
  - substance: Orlistat (weight loss drug)
    effect: Reduces absorption of fat-soluble vitamins including A
  - substance: Retinoid medications (Accutane, tretinoin)
    effect: Combined use risks hypervitaminosis A
  - substance: Warfarin
    effect: High vitamin A doses may increase bleeding risk
  - substance: Alcohol
    effect: Increases hepatotoxicity of vitamin A
history: Vitamin A was the first vitamin to be officially named, identified in 1913 by Elmer McCollum and Marguerite Davis at the University of Wisconsin. They discovered a fat-soluble factor in butter and egg yolks essential for growth. Night blindness treatment with liver was known to ancient Egyptians (~1500 BCE), though they didn't know why it worked.
funFacts:
  - The Inuit traditionally avoided eating polar bear liver because they knew it was toxic — it contains 9 million IU of vitamin A per 100g
  - Flamingos get their pink color from carotenoids (vitamin A precursors) in the shrimp and algae they eat
  - Your body stores 80-90% of its vitamin A in the liver — up to a 2-year supply
  - The WWII carrot propaganda was so effective that British citizens actually increased carrot consumption, eating carrot jam, carrot cake, and "Dr. Carrot" became a cartoon mascot
enzymeRoles:
  - "Cofactor for retinal reductase (vision cycle)"
  - "Involved in glycoprotein synthesis enzymes"
hormonalRoles:
  - "Regulates gene expression via retinoic acid receptors (RAR/RXR)"
  - "Modulates growth hormone signaling"
  - "Influences thyroid hormone metabolism"
metabolicPathways:
  - "Retinol → retinal → retinoic acid conversion"
  - "Visual cycle (retinal ↔ rhodopsin in rod cells)"
  - "Carotenoid cleavage pathway (beta-carotene → retinal)"
organsAffected:
  - "Eyes (retina)"
  - "Skin and mucous membranes"
  - "Liver (primary storage)"
  - "Lungs"
  - "Immune organs (thymus, spleen)"
cellularFunctions:
  - "Cell differentiation (epithelial cells)"
  - "Gene transcription regulation"
  - "Embryonic development patterning"
  - "Immune cell maturation (T-cells, B-cells)"
supplementForms:
  - form: "Retinyl palmitate"
    bioavailability: "High"
    notes: "Preformed vitamin A, well absorbed with fat"
  - form: "Retinyl acetate"
    bioavailability: "High"
    notes: "Synthetic preformed A, commonly used in supplements"
  - form: "Beta-carotene"
    bioavailability: "Moderate"
    notes: "Provitamin A, conversion rate varies 3:1 to 28:1 depending on source"
  - form: "Retinol"
    bioavailability: "High"
    notes: "Active form, excellent absorption but less stable"
---
