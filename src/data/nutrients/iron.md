---
name: Iron
altName: Ferrous / Ferric
symbol: Fe
category: mineral
subcategory: trace
essentiality: essential
sortOrder: 20
description: Essential for oxygen transport via hemoglobin and myoglobin. The most common nutritional deficiency worldwide. Exists in two dietary forms — heme (animal) and non-heme (plant).
functions:
  - Oxygen transport (hemoglobin in blood, myoglobin in muscle)
  - Electron transport chain (cytochromes, energy production)
  - DNA synthesis
  - Immune function
  - Cognitive development
rda:
  nih:
    - group: Adult males
      amount: 8 mg
    - group: Premenopausal females
      amount: 18 mg
    - group: Pregnant women
      amount: 27 mg
    - group: Postmenopausal females
      amount: 8 mg
    - group: Vegetarians
      amount: 1.8x above listed amounts
  who:
    - group: Adult males
      amount: 8 mg (assuming 15% bioavailability)
    - group: Premenopausal females
      amount: 18 mg
  efsa:
    - group: Adult males
      amount: 11 mg
    - group: Premenopausal females
      amount: 16 mg
deficiency:
  symptoms:
    early:
      - "Fatigue and weakness"
      - "Pale skin"
      - "Cold hands and feet"
      - "Brittle nails"
      - "Headache"
    moderate:
      - "Koilonychia (spoon-shaped nails)"
      - "Pica (craving for ice, dirt, starch)"
      - "Restless leg syndrome"
      - "Tachycardia"
      - "Shortness of breath on exertion"
      - "Glossitis"
    severe:
      - "Severe microcytic hypochromic anemia"
      - "Plummer-Vinson syndrome (esophageal webs, dysphagia)"
      - "High-output heart failure"
      - "Impaired immune function"
    longTerm:
      - "Cognitive and developmental delays in children"
      - "Poor pregnancy outcomes (preterm birth, low birth weight)"
      - "Chronic heart failure"
      - "Impaired work capacity"
  conditions:
    - Iron deficiency anemia — most common anemia worldwide
    - Impaired cognitive development in children
    - Decreased work capacity
  riskGroups:
    - Premenopausal women (menstrual blood loss)
    - Pregnant women (expanded blood volume)
    - Infants and toddlers (rapid growth)
    - Vegetarians/vegans (lower bioavailability)
    - Frequent blood donors
    - Endurance athletes ("foot-strike hemolysis")
toxicity:
  symptoms:
    - Nausea, vomiting, abdominal pain
    - Organ damage (liver, heart)
    - Bronze skin discoloration
    - Diabetes, cardiomyopathy (from iron overload)
  upperLimit: 45 mg/day for adults
  notes: Iron poisoning from supplement overdose is a leading cause of fatal poisoning in children under 6. Hereditary hemochromatosis causes dangerous iron accumulation.
normalLevels:
  bloodRange: "Serum ferritin: 12-150 ng/mL (women), 12-300 ng/mL (men)"
  unit: ng/mL (ferritin)
  notes: Ferritin is the best single marker of iron stores. Serum iron and TIBC are useful but less specific.
testing:
  methods:
    - Serum ferritin (best single test for iron stores)
    - Complete blood count (CBC) — MCV, hemoglobin
    - Serum iron + TIBC (total iron-binding capacity)
    - Transferrin saturation
    - Soluble transferrin receptor (sTfR)
  sampleType: Blood (serum)
sources:
  - name: Oysters (3 oz)
    amount: 8.0
    unit: mg (heme)
  - name: Beef liver (3 oz)
    amount: 5.2
    unit: mg (heme)
  - name: Fortified cereal (1 cup)
    amount: 18.0
    unit: mg (non-heme)
  - name: White beans (½ cup)
    amount: 3.9
    unit: mg (non-heme)
  - name: Spinach (½ cup, boiled)
    amount: 3.2
    unit: mg (non-heme)
  - name: Dark chocolate (1 oz)
    amount: 3.4
    unit: mg (non-heme)
  - name: Lentils (½ cup)
    amount: 3.3
    unit: mg (non-heme)
myths:
  - myth: Spinach is the best source of iron
    reality: While spinach contains iron, it also contains oxalates that inhibit absorption by up to 90%. Red meat, oysters, and fortified cereals are far more effective sources.
  - myth: Everyone should take iron supplements
    reality: Iron overload is dangerous. Men and postmenopausal women rarely need supplements and should NOT take them without testing. Iron is uniquely dangerous because the body has no mechanism to excrete excess iron.
  - myth: Cast iron cookware significantly boosts iron intake
    reality: Acidic foods cooked in cast iron do absorb small amounts of iron, but it's mostly in the poorly absorbed ferric form. The benefit is modest.
precautions:
  - Vitamin C dramatically increases non-heme iron absorption — pair plant iron sources with citrus
  - Calcium, tea/coffee polyphenols, and phytates inhibit iron absorption
  - Iron supplements should be taken on empty stomach for best absorption (or with vitamin C)
  - Keep iron supplements away from children — overdose can be fatal
  - Do NOT supplement without confirming deficiency via blood test
interactions:
  - substance: Vitamin C
    effect: Increases non-heme iron absorption 2-6x — take together
  - substance: Calcium
    effect: Inhibits both heme and non-heme iron absorption — separate by 2 hours
  - substance: Tea and coffee (tannins)
    effect: Reduce non-heme iron absorption by 50-90%
  - substance: Levothyroxine
    effect: Iron reduces thyroid medication absorption — separate by 4 hours
  - substance: Tetracycline antibiotics
    effect: Mutual absorption reduction — separate by 2 hours
history: Iron's role in blood was recognized early — the iron content of blood was identified in the 18th century. The link between iron deficiency and anemia was firmly established by the mid-19th century. Iron fortification of flour began in the 1940s. The discovery of hepcidin in 2000 revolutionized understanding of iron homeostasis.
funFacts:
  - The body has no regulated mechanism to excrete iron — the only "exit" is blood loss, skin shedding, and small amounts in stool
  - Popeye's spinach iron myth was partly based on a decimal point error in 1870s nutritional data
  - The Lucky Iron Fish project provides cast iron fish-shaped ingots for cooking in iron-deficient populations
  - Menstruation is a significant iron drain — premenopausal women need 2.25x more dietary iron than men
enzymeRoles:
  - "Component of cytochrome c oxidase (Complex IV)"
  - "Component of catalase and peroxidases"
  - "Component of ribonucleotide reductase (DNA synthesis)"
  - "Cofactor for prolyl hydroxylase (collagen and HIF regulation)"
hormonalRoles:
  - "Component of thyroid peroxidase (thyroid hormone synthesis)"
  - "Regulated by hepcidin (master iron regulatory hormone)"
  - "Required for catecholamine synthesis"
metabolicPathways:
  - "Electron transport chain (cytochromes, iron-sulfur clusters)"
  - "Oxygen transport (hemoglobin: Fe²⁺ + O₂)"
  - "Heme synthesis (protoporphyrin IX + Fe²⁺)"
  - "Iron recycling by macrophages (erythrophagocytosis)"
organsAffected:
  - "Bone marrow (hemoglobin production)"
  - "Liver (ferritin storage, hepcidin)"
  - "Spleen (RBC recycling)"
  - "Muscles (myoglobin)"
  - "Brain"
cellularFunctions:
  - "Oxygen binding and transport"
  - "Electron transfer in redox reactions"
  - "DNA synthesis (ribonucleotide reductase)"
  - "Oxygen sensing (HIF-prolyl hydroxylase system)"
  - "Mitochondrial energy production"
supplementForms:
  - form: "Ferrous sulfate"
    bioavailability: "Moderate"
    notes: "Standard, cheapest, ~20% elemental iron, GI side effects common"
  - form: "Ferrous bisglycinate"
    bioavailability: "High"
    notes: "Chelated, 2-4x better absorbed, fewer GI effects"
  - form: "Ferrous fumarate"
    bioavailability: "Moderate"
    notes: "33% elemental iron, commonly used"
  - form: "Ferrous gluconate"
    bioavailability: "Moderate"
    notes: "Gentler on stomach, lower elemental iron (12%)"
  - form: "Iron polysaccharide complex"
    bioavailability: "Moderate"
    notes: "Well tolerated, fewer GI effects"
  - form: "Carbonyl iron"
    bioavailability: "Moderate"
    notes: "Elemental iron powder, slowly absorbed, lower toxicity risk"
---
