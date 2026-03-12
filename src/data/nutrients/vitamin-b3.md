---
name: Vitamin B3
altName: Niacin / Nicotinic Acid / Nicotinamide
symbol: B3
category: vitamin
subcategory: water-soluble
essentiality: essential
sortOrder: 8
description: Essential for NAD/NADP coenzymes driving 400+ metabolic reactions. Can be synthesized from tryptophan in small amounts.
functions:
  - Precursor to NAD+ and NADP+ — critical for energy metabolism
  - DNA repair and cell signaling (via sirtuins)
  - Cholesterol modification (raises HDL, lowers LDL and triglycerides)
  - Supports skin health and nervous system
rda:
  nih:
    - group: Adult males
      amount: 16 mg NE
    - group: Adult females
      amount: 14 mg NE
    - group: Pregnant
      amount: 18 mg NE
  who:
    - group: Adults
      amount: 14-16 mg NE
  efsa:
    - group: Adults
      amount: 1.6 mg NE per MJ energy intake
  nin:
    - group: Adult males
      amount: 14 mg
    - group: Adult females
      amount: 11 mg
deficiency:
  symptoms:
    early:
      - "Fatigue"
      - "Poor appetite"
      - "Indigestion"
      - "Headache"
    moderate:
      - "Skin sensitivity to sunlight"
      - "Mouth sores"
      - "Diarrhea"
      - "Depression and anxiety"
      - "Brain fog"
    severe:
      - "Pellagra — the 4 Ds: Dermatitis, Diarrhea, Dementia, Death"
      - "Casal necklace (photosensitive skin rash on neck)"
      - "Severe psychosis and hallucinations"
      - "Bright red swollen tongue"
    longTerm:
      - "Permanent cognitive damage"
      - "Chronic GI dysfunction"
      - "Death if untreated"
      - "Skin scarring from chronic dermatitis"
  conditions:
    - Pellagra — historically endemic in corn-dependent populations
    - Hartnup disease (genetic impaired tryptophan absorption)
  mimickingConditions:
    - "Sunburn or contact dermatitis (mimics the pellagra rash)"
    - "Schizophrenia or Alzheimer's (mimics pellagra dementia)"
    - "Tryptophan deficiency (can cause similar symptoms since it converts to B3)"
  riskGroups:
    - Alcoholics
    - People with carcinoid syndrome (tryptophan diverted to serotonin)
    - Populations dependent on untreated corn/maize
toxicity:
  symptoms:
    - Flushing (nicotinic acid form) — warmth, redness, tingling
    - Liver toxicity (sustained-release niacin)
    - Hyperglycemia, gout exacerbation
  upperLimit: 35 mg/day for adults (supplemental)
  notes: Nicotinamide form does NOT cause flushing. Prescription niacin (1-3g/day) used for cholesterol requires medical supervision.
normalLevels:
  bloodRange: Assessed via urinary metabolites (N-methyl-nicotinamide)
  unit: N/A
testing:
  methods:
    - Urinary N-methyl-nicotinamide and 2-pyridone
    - NAD/NADP ratio in red blood cells
  sampleType: Urine/Blood
sources:
  - name: Chicken breast (3 oz)
    amount: 11.4
    unit: mg
  - name: Tuna (3 oz, canned)
    amount: 8.6
    unit: mg
  - name: Turkey (3 oz)
    amount: 10.0
    unit: mg
  - name: Peanuts (1 oz)
    amount: 4.4
    unit: mg
  - name: Fortified cereal (1 cup)
    amount: 20.0
    unit: mg
  - name: "Peanuts (1 oz)"
    amount: "4.2"
    unit: "mg"
  - name: "Brown rice (1 cup, cooked)"
    amount: "5.2"
    unit: "mg"
myths:
  - myth: Niacin flush is dangerous
    reality: The flushing from nicotinic acid (warmth, redness) is harmless and temporary — it's caused by prostaglandin release. Taking aspirin 30 min before or using the nicotinamide form avoids it.
  - myth: Corn provides adequate niacin
    reality: Niacin in corn is bound (niacytin) and unavailable unless treated with alkali (nixtamalization). This is why pellagra occurred in regions eating untreated corn but not in Mexico where they made tortillas with lime-treated corn.
precautions:
  - Start prescription niacin at low doses to minimize flushing
  - Monitor liver function with high-dose niacin therapy
  - Sustained-release niacin is more hepatotoxic than immediate-release
interactions:
  - substance: Statins
    effect: Combined use increases muscle damage risk (rhabdomyolysis)
  - substance: Diabetes medications
    effect: Niacin may increase blood sugar
  - substance: Alcohol
    effect: May worsen niacin flushing and liver effects
history: Pellagra killed thousands in the American South in the early 1900s. Joseph Goldberger proved it was dietary, not infectious, through dramatic self-experimentation (injecting himself with pellagra patients' blood). Conrad Elvehjem identified nicotinic acid as the cure in 1937. The name "niacin" was coined to avoid confusion with nicotine.
funFacts:
  - The Mesoamerican practice of nixtamalization (soaking corn in lime water) prevented pellagra for millennia — European colonizers adopted corn but not this technique, leading to epidemics
  - NAD+ is being heavily researched as an anti-aging molecule — levels decline with age
  - 60 mg of dietary tryptophan can be converted to about 1 mg of niacin
  - Goldberger's "filth parties" where volunteers ate pellagra patients' scabs to prove it wasn't contagious are legendary in medical history
enzymeRoles:
  - "Component of NAD⁺ — cofactor for 400+ enzymes"
  - "Component of NADP⁺ — cofactor for anabolic reactions"
  - "Substrate for sirtuins (SIRT1-7) and PARPs"
hormonalRoles:
  - "NAD⁺-dependent sirtuins regulate metabolic hormones"
  - "Influences insulin sensitivity"
  - "Modulates cortisol metabolism"
metabolicPathways:
  - "Glycolysis (glyceraldehyde-3-phosphate dehydrogenase)"
  - "TCA cycle (multiple NAD⁺-dependent steps)"
  - "Pentose phosphate pathway (NADP⁺)"
  - "NAD⁺ salvage pathway"
  - "Fatty acid synthesis (NADPH-dependent)"
organsAffected:
  - "All tissues (universal energy metabolism)"
  - "Liver"
  - "Brain"
  - "Skin"
  - "GI tract"
cellularFunctions:
  - "Central electron carrier in metabolism (NAD⁺/NADH)"
  - "DNA repair (PARP enzymes consume NAD⁺)"
  - "Gene silencing and aging regulation (sirtuins)"
  - "Calcium signaling (CD38 consumes NAD⁺)"
supplementForms:
  - form: "Nicotinic acid (niacin)"
    bioavailability: "High"
    notes: "Causes flushing, best for lipid modification"
  - form: "Nicotinamide (niacinamide)"
    bioavailability: "High"
    notes: "No flushing, does not affect lipids"
  - form: "Nicotinamide riboside (NR)"
    bioavailability: "High"
    notes: "NAD+ precursor, emerging anti-aging research, expensive"
  - form: "Nicotinamide mononucleotide (NMN)"
    bioavailability: "Moderate"
    notes: "Converted to NR before absorption (debated), longevity research"
  - form: "Inositol hexanicotinate"
    bioavailability: "Low"
    notes: "\"No-flush niacin\" — may not reliably release niacin"
---
