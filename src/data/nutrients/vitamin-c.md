---
name: Vitamin C
altName: Ascorbic Acid
symbol: C
category: vitamin
subcategory: water-soluble
essentiality: essential
sortOrder: 5
description: A powerful water-soluble antioxidant essential for collagen synthesis, immune defense, and iron absorption. Humans are among the few mammals that cannot synthesize it.
functions:
  - Required for collagen synthesis (skin, tendons, ligaments, blood vessels)
  - Potent antioxidant protecting cells from oxidative stress
  - Enhances immune cell function (neutrophils, lymphocytes)
  - Dramatically improves non-heme iron absorption
  - Required for carnitine and neurotransmitter biosynthesis
rda:
  nih:
    - group: Adults male
      amount: 90 mg
    - group: Adults female
      amount: 75 mg
    - group: Smokers
      amount: +35 mg above baseline
    - group: Pregnant women
      amount: 85 mg
    - group: Lactating women
      amount: 120 mg
  who:
    - group: Adults
      amount: 45 mg
  efsa:
    - group: Adults male
      amount: 110 mg
    - group: Adults female
      amount: 95 mg
  nin:
    - group: Adult males
      amount: 80 mg
    - group: Adult females
      amount: 65 mg
deficiency:
  symptoms:
    early:
      - "Fatigue and malaise"
      - "Irritability"
      - "Joint and muscle aches"
      - "Easy bruising"
    moderate:
      - "Bleeding gums (gingivitis)"
      - "Poor wound healing"
      - "Dry, rough skin"
      - "Petechiae (small red spots under skin)"
      - "Weakened immune response"
    severe:
      - "Scurvy — swollen bleeding gums, tooth loss"
      - "Hemorrhage (subcutaneous, intramuscular, subperiosteal)"
      - "Anemia"
      - "Corkscrew hairs and perifollicular hemorrhages"
    longTerm:
      - "Chronic anemia"
      - "Tooth loss"
      - "Bone pain and impaired bone formation"
      - "Death if untreated (historically common in sailors)"
  conditions:
    - Scurvy — connective tissue breakdown (historically fatal for sailors)
    - Impaired immune response
    - Iron-deficiency anemia (secondary)
  riskGroups:
    - Smokers and passive smoke exposed
    - People with limited diet variety
    - People with malabsorption disorders
    - Infants fed boiled/evaporated milk
    - Chronic alcoholics
toxicity:
  symptoms:
    - Diarrhea, nausea, abdominal cramps
    - Kidney stones (oxalate)
    - Headache, insomnia (rare)
  upperLimit: 2000 mg/day for adults
  notes: Excess is excreted in urine. Mega-dose IV vitamin C is used experimentally in cancer therapy but not proven.
normalLevels:
  bloodRange: 0.4-1.5 mg/dL (23-85 µmol/L)
  unit: mg/dL
  notes: "<0.2 mg/dL indicates deficiency. Plasma levels plateau at ~400 mg/day intake."
testing:
  methods:
    - Plasma/serum ascorbic acid level
    - Leukocyte vitamin C (more accurate for tissue levels but rarely done)
  sampleType: Blood (plasma)
  notes: Plasma levels reflect recent intake. Fasting sample preferred.
sources:
  - name: Red bell pepper (½ cup)
    amount: 95
    unit: mg
  - name: Orange (1 medium)
    amount: 70
    unit: mg
  - name: Kiwi (1 medium)
    amount: 64
    unit: mg
  - name: Strawberries (½ cup)
    amount: 49
    unit: mg
  - name: Broccoli (½ cup, cooked)
    amount: 51
    unit: mg
  - name: Guava (1 fruit)
    amount: 125
    unit: mg
  - name: Kakadu plum (1 fruit)
    amount: 530
    unit: mg
myths:
  - myth: Mega-doses of vitamin C prevent colds
    reality: Research shows vitamin C may reduce cold duration by 8% in adults but does NOT prevent colds. Regular supplementation, not post-onset dosing, shows the modest benefit.
  - myth: Oranges are the best source of vitamin C
    reality: Many foods exceed oranges — guava, kiwi, red bell peppers, and kakadu plum contain 2-7x more vitamin C per serving.
  - myth: Vitamin C supplements are always beneficial
    reality: "Over 1000 mg/day may increase kidney stone risk, especially in men. Most people get adequate amounts from 5 servings of fruits/vegetables daily."
precautions:
  - Vitamin C is destroyed by heat — raw or lightly cooked foods retain more
  - High doses may interfere with blood glucose monitor readings
  - Avoid high-dose supplements if you have a history of kidney stones
  - Abrupt cessation of mega-doses may cause "rebound scurvy"
interactions:
  - substance: Iron supplements
    effect: Vitamin C dramatically increases non-heme iron absorption (take together)
  - substance: Chemotherapy drugs
    effect: Antioxidant effects may theoretically reduce efficacy (controversial)
  - substance: Estrogen (birth control pills)
    effect: Vitamin C may increase estrogen levels
  - substance: Aluminum (antacids)
    effect: Vitamin C increases aluminum absorption — avoid combining
history: Scurvy killed more sailors than warfare, storms, and all other diseases combined during the Age of Exploration. In 1747, James Lind conducted one of the first clinical trials, proving citrus fruit treated scurvy. Despite this, the British Navy didn't mandate citrus juice until 1795 — earning sailors the nickname "limeys." Vitamin C was isolated in 1928 by Albert Szent-Györgyi, winning the 1937 Nobel Prize.
funFacts:
  - Humans, guinea pigs, and fruit bats are among the few mammals that can't make their own vitamin C — we lost the gene (GULO) ~40 million years ago
  - A goat produces ~13,000 mg of vitamin C per day in its liver — 144x the human RDA
  - The highest natural concentration of vitamin C is in the Australian Kakadu plum — 100x more than oranges
  - Linus Pauling (double Nobel laureate) famously advocated mega-dosing vitamin C, taking 18,000 mg daily — this remains controversial
enzymeRoles:
  - "Cofactor for prolyl hydroxylase and lysyl hydroxylase (collagen synthesis)"
  - "Cofactor for dopamine beta-hydroxylase (norepinephrine synthesis)"
  - "Cofactor for peptidyl-glycine alpha-amidating monooxygenase"
hormonalRoles:
  - "Required for adrenal cortisol synthesis"
  - "Supports catecholamine production (dopamine → norepinephrine)"
  - "Modulates cortisol release during stress"
metabolicPathways:
  - "Collagen hydroxylation pathway"
  - "Carnitine biosynthesis (fat transport)"
  - "Iron absorption enhancement (Fe³⁺ → Fe²⁺ reduction)"
  - "Ascorbate-glutathione cycle (antioxidant recycling)"
organsAffected:
  - "Adrenal glands (highest concentration)"
  - "Skin (collagen)"
  - "Immune system"
  - "Brain and nervous system"
  - "Blood vessels"
cellularFunctions:
  - "Electron donor for enzymatic reactions"
  - "Free radical scavenging (water-soluble compartments)"
  - "Regeneration of vitamin E"
  - "Epigenetic regulation via TET enzymes (DNA demethylation)"
supplementForms:
  - form: "Ascorbic acid"
    bioavailability: "High"
    notes: "Standard form, well absorbed up to ~200mg doses"
  - form: "Sodium ascorbate"
    bioavailability: "High"
    notes: "Buffered, gentler on stomach, ~89% vitamin C by weight"
  - form: "Calcium ascorbate (Ester-C)"
    bioavailability: "High"
    notes: "Buffered form with metabolites, less acidic"
  - form: "Liposomal vitamin C"
    bioavailability: "High"
    notes: "Phospholipid-encapsulated, may improve absorption at high doses"
  - form: "Ascorbyl palmitate"
    bioavailability: "Moderate"
    notes: "Fat-soluble form, used in skin products and some supplements"
synergy:
  - nutrient: "Iron (Non-heme)"
    effect: "Increases plant-based iron absorption by up to 300% when taken together."
  - nutrient: "Vitamin E"
    effect: "Vitamin C recycles oxidized Vitamin E back to its active antioxidant form."
  - nutrient: "Collagen"
    effect: "Required as a cofactor for enzymes that stabilize the collagen triple helix."
antagonists:
  - nutrient: "Copper"
    effect: "High doses of Vitamin C can competitively inhibit copper absorption and lower ceruloplasmin levels."
  - nutrient: "Vitamin B12"
    effect: "Megadoses of Vitamin C taken with B12 can potentially destroy the B12 in the digestive tract."
---
