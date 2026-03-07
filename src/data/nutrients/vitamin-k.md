---
name: Vitamin K
altName: Phylloquinone (K1) / Menaquinone (K2)
symbol: K
category: vitamin
subcategory: fat-soluble
essentiality: essential
sortOrder: 4
description: Essential for blood clotting and bone metabolism. K1 comes from plants, K2 from fermented foods and gut bacteria.
functions:
  - Required for synthesis of clotting factors (II, VII, IX, X)
  - Activates osteocalcin for bone mineralization
  - Helps direct calcium to bones and away from arteries
  - K2 (MK-7) supports cardiovascular health
  - Involved in cell growth regulation
rda:
  nih:
    - group: Adult males
      amount: 120 mcg
    - group: Adult females
      amount: 90 mcg
    - group: Children 1-3 years
      amount: 30 mcg
  who:
    - group: Adults
      amount: 55-65 mcg
  efsa:
    - group: Adults
      amount: 70 mcg
  nin:
    - group: Adults
      amount: 55 mcg
deficiency:
  symptoms:
    early:
      - "Slightly prolonged clotting time"
      - "Easy bruising"
      - "Minor bleeding from cuts takes longer to stop"
    moderate:
      - "Nosebleeds"
      - "Bleeding gums"
      - "Blood in urine or stool"
      - "Heavy menstrual periods"
    severe:
      - "Hemorrhagic disease of the newborn (VKDB)"
      - "Uncontrolled bleeding"
      - "Intracranial hemorrhage in infants"
      - "Massive bruising"
    longTerm:
      - "Osteoporosis (undercarboxylated osteocalcin)"
      - "Vascular calcification (inactive MGP)"
      - "Increased fracture risk"
  conditions:
    - Hemorrhagic disease of the newborn
    - Increased fracture risk (long-term)
  riskGroups:
    - Newborns (low stores, sterile gut)
    - People on long-term antibiotics
    - People with fat malabsorption
    - Those on warfarin therapy
toxicity:
  symptoms:
    - No known toxicity from food forms
    - Synthetic menadione (K3) can cause liver damage
  upperLimit: No established UL for K1 or K2
  notes: Vitamin K is one of the safest vitamins — no toxicity from K1/K2 at any studied dose.
normalLevels:
  bloodRange: 0.2-3.2 ng/mL
  unit: ng/mL
  notes: Blood levels aren't routinely tested. Functional status assessed via clotting times (PT/INR).
testing:
  methods:
    - Prothrombin time (PT) / INR — indirect functional measure
    - Plasma phylloquinone level
    - Undercarboxylated osteocalcin (ucOC) — K2 status marker
  sampleType: Blood
sources:
  - name: Natto (3 oz)
    amount: 850
    unit: mcg (K2)
  - name: Kale (1 cup, raw)
    amount: 472
    unit: mcg (K1)
  - name: Spinach (1 cup, raw)
    amount: 145
    unit: mcg (K1)
  - name: Broccoli (½ cup, cooked)
    amount: 110
    unit: mcg (K1)
  - name: Brussels sprouts (½ cup)
    amount: 109
    unit: mcg (K1)
myths:
  - myth: K1 and K2 are the same
    reality: K1 (phylloquinone) primarily supports clotting, while K2 (menaquinone) is more involved in calcium metabolism, bone and cardiovascular health.
  - myth: You don't need to worry about vitamin K
    reality: Subclinical K2 deficiency is widespread and linked to arterial calcification and osteoporosis. Most people get enough K1 but not K2.
precautions:
  - Warfarin users must maintain CONSISTENT intake — don't suddenly increase or decrease green vegetables
  - Vitamin K does NOT make warfarin users' blood "too thick" — inconsistency is the problem
  - Newborns receive a vitamin K injection at birth to prevent hemorrhagic disease
interactions:
  - substance: Warfarin (Coumadin)
    effect: Vitamin K directly opposes warfarin — dietary consistency is critical
  - substance: Antibiotics (long-term)
    effect: Kill gut bacteria that produce vitamin K2
  - substance: Bile acid sequestrants
    effect: Reduce vitamin K absorption
history: Discovered in 1929 by Danish scientist Henrik Dam, who noticed chicks on fat-free diets developed hemorrhaging. He named it Koagulationsvitamin (vitamin K). Dam and Edward Doisy shared the 1943 Nobel Prize for discovering K and determining its structure.
funFacts:
  - The "K" stands for "Koagulation" — the German spelling of coagulation
  - Natto (fermented soybeans) contains the most K2 of any food — a Japanese breakfast staple
  - Newborn babies are born with almost no vitamin K, which is why they get a shot at birth
  - Vitamin K2 (MK-4) is the only vitamin that also acts as an electron carrier
enzymeRoles:
  - "Cofactor for gamma-glutamyl carboxylase (GGCX)"
  - "Recycled by vitamin K epoxide reductase (VKORC1 — warfarin target)"
hormonalRoles:
  - "Activates osteocalcin (bone hormone)"
  - "Activates matrix Gla protein (MGP — vascular calcification inhibitor)"
  - "May influence testosterone production"
metabolicPathways:
  - "Vitamin K cycle (quinone → hydroquinone → epoxide)"
  - "Gamma-carboxylation of glutamic acid residues in clotting factors"
  - "Menaquinone synthesis by gut bacteria (K2)"
organsAffected:
  - "Liver (clotting factor production)"
  - "Bones"
  - "Blood vessels (arterial calcification prevention)"
  - "Cartilage"
cellularFunctions:
  - "Post-translational modification of Gla proteins"
  - "Blood coagulation cascade (factors II, VII, IX, X)"
  - "Calcium binding to bone matrix"
  - "Cell growth regulation (Gas6 protein)"
supplementForms:
  - form: "Phylloquinone (K1)"
    bioavailability: "Moderate"
    notes: "Plant-derived, primarily supports clotting, short half-life"
  - form: "Menaquinone-4 (MK-4)"
    bioavailability: "Moderate"
    notes: "Short half-life (hours), needs multiple daily doses"
  - form: "Menaquinone-7 (MK-7)"
    bioavailability: "High"
    notes: "Long half-life (72h), single daily dose sufficient, best for bones"
---
