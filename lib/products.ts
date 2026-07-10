export interface Product {
  id: string
  name: string
  slug: string
  productCode: string
  image?: string
  category: 'healing-teas' | 'fruit-teas' | 'true-teas' | 'herbs' | 'spices'
  benefits?: string[]
  description: string[]
}

export const products: Product[] = [
  // HEALING TEAS
  {
    id: '1',
    name: 'Alfalfa Tea',
    slug: 'alfalfa',
    productCode: '0001',
    category: 'healing-teas',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-04%20at%208.30.17%E2%80%AFPM-zhyH9sQkXWOjvzHRJ765bdyJdogB6D.png',
    benefits: [
      'Aids in weight loss',
      'Cleanses impurities in body',
      'Combats depression',
      'Controls cholesterol',
      'Cleanses your blood',
      'Limits excessive bleeding',
      'Prevents allergies',
      'Promotes hair growth'
    ],
    description: [
      'Alfalfa leaf tea is primarily known for its rich nutrient content and potent antioxidant properties, which may support overall wellness.',
      'Rich in Nutrients: Alfalfa is a good source of vitamins A, C, E, and K, as well as minerals such as calcium, potassium, phosphorus, and iron.',
      'Antioxidant Support: It is high in antioxidants and phytonutrients (like phenols and flavonoids) that help neutralize unstable molecules called free radicals, which in turn may help reduce inflammation and oxidative stress in the body.',
      'Bone Health: The combination of high calcium and vitamin K content can help support strong bones. Vitamin K is also essential for proper blood clotting.',
      'Digestive Health: Its high fiber content may help promote healthy digestion, prevent constipation, and alleviate issues like bloating and gas.',
      'Diuretic Properties: Alfalfa is traditionally used as a natural diuretic to increase urine flow, which some herbalists suggest helps detoxify the body and manage water retention or urinary tract issues.'
    ]
  },
  {
    id: '2',
    name: 'Avocado Leaf Tea',
    slug: 'avocado-leaf',
    productCode: '0002',
    category: 'healing-teas',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-04%20at%208.30.39%E2%80%AFPM-FRHTgdgFciD604ubjH5iZSdEmOlLqB.png',
    benefits: [
      'Promote smooth skin',
      'Relieves dry skin',
      'Good for diabetics',
      'Relief for Cavities',
      'Good for women fertility',
      'Treatment of hypertension',
      'Thrush Treatments',
      'Back pain relieves',
      'Swelling Relieves',
      'Promote hair health',
      'Good Colds and Flu',
      'Good for Stomachaches',
      'Good for Arthritis'
    ],
    description: [
      'Antioxidant Effects: The leaves are a rich source of polyphenols, flavonoids, and other antioxidants like quercetin, which help to fight free radicals and reduce oxidative stress in the body.',
      'Blood Pressure Management: Studies suggest that compounds in avocado leaves may help lower blood pressure by promoting the dilation of blood vessels and acting as a natural diuretic, which helps flush out excess sodium and fluid.',
      'Blood Sugar Regulation: Research indicates that avocado leaf extracts may help regulate blood glucose levels and improve insulin sensitivity, making it a potential complementary aid for individuals managing diabetes.',
      'Anti-inflammatory Properties: The anti-inflammatory compounds, such as tannins and flavonoids, can help reduce inflammation throughout the body, potentially easing symptoms of arthritis, gout, and general swelling.',
      'Digestive Health: The tea can aid digestion, help balance stomach acidity to reduce the chance of ulcers, and provide relief from issues such as bloating, gas, stomach aches, and diarrhea.',
      'Relaxation and Sleep Support: Avocado leaves naturally contain serotonin, which may help promote a sense of calm, reduce stress and anxiety, and support restful sleep without caffeine.',
      'Cardiovascular Health: In addition to managing blood pressure, the tea may help lower "bad" (LDL) cholesterol levels and improve overall blood circulation.',
      'Immune System Support: The vitamins and antioxidants present can help strengthen the immune system and enhance the body\'s ability to fight off infections.',
      'Kidney Function Support: The diuretic properties may aid the kidneys in filtering waste products and regulating body fluid volume, potentially supporting overall kidney function.',
      'Pain Relief: It has been traditionally used as a natural painkiller to alleviate various aches, including headaches, menstrual cramps, toothaches, and muscle soreness.',
      'Diuretic and Detoxifying Effects: The natural diuretic effect can help the kidneys and liver remove toxins and excess fluid from the body more effectively.',
      'Important Note: While avocado leaf tea offers many potential benefits, it should not replace conventional medical treatment. It is recommended to consult with a healthcare professional before incorporating it into your routine, especially if you have existing health conditions.'
    ]
  },
  {
    id: '3',
    name: 'Sage Tea',
    slug: 'sage',
    productCode: '0023',
    category: 'healing-teas',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-04%20at%209.17.45%E2%80%AFPM-qWA8DPaoAvvaFxQ22L0lnQHmhlcmPy.png',
    benefits: [
      'Aids in Digestion',
      'Alleviate skin conditions',
      'Cognitive Disorders',
      'Effective in eczema & psoriasis',
      'Good for arthritis & gout',
      'Good for Diabetics',
      'Good for heart',
      'Good for Osteoporosis',
      'Immune System Strength',
      'Prevents gastric spasms',
      'Regulate proper digestion',
      'Strengthens immune system'
    ],
    description: [
      'Rich in Nutrients and Antioxidants: Sage is an excellent source of vitamin K, essential for bone health and proper blood clotting. It is also loaded with over 160 distinct polyphenols (plant-based antioxidants), such as rosmarinic acid and carnosol, which help neutralize harmful free radicals and protect against chronic diseases.',
      'May Support Brain and Memory Function: The tea may improve cognitive function, memory, concentration, and mood. Compounds in sage appear to prevent the breakdown of acetylcholine (ACH), a chemical messenger involved in memory, and studies have shown improved cognitive abilities in people with mild to moderate Alzheimer\'s disease who took sage extracts.',
      'May Ease Menopause Symptoms: Sage is a traditional remedy for menopause symptoms, with studies showing that it can significantly reduce the frequency and severity of hot flashes, night sweats, and irritability.',
      'May Reduce Blood Sugar Levels: Traditionally used as an anti-diabetes remedy, research indicates that sage may help lower blood glucose levels and improve insulin sensitivity, though it should not replace prescribed diabetes medications.',
      'May Improve Cholesterol Levels: Consuming sage tea has been linked to lower levels of "bad" (LDL) cholesterol, while increasing "good" (HDL) cholesterol, which supports heart health.',
      'Promotes Oral Health: Due to its antimicrobial and anti-inflammatory properties, gargling with or drinking sage tea can help protect against dental plaque, treat sore throats, mouth ulcers, and inflamed gums.',
      'May Aid Digestion: Sage can help alleviate indigestion, bloating, cramps, and heartburn by stimulating digestive enzyme production and reducing gut irritation.',
      'May Have Anticancer Properties: Test-tube and animal studies suggest that compounds in sage can suppress the growth of certain types of cancer cells, though human studies are needed to confirm this effect.'
    ]
  },
  {
    id: '4',
    name: 'Turmeric Tea',
    slug: 'turmeric',
    productCode: '0006',
    category: 'healing-teas',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-04%20at%208.32.14%E2%80%AFPM-jWIq9OFAJCKzVVqGqpzYoZosJknjsp.png',
    benefits: [
      'Detoxify the body',
      'Prevent diabetes',
      'Prevents arthritis',
      'Heals ulcers',
      'Heals piles',
      'Anti-microbial',
      'Anti-oxidant',
      'Anti-cancer in effect',
      'Promotes brain health',
      'Boon for Alzheimer\'s disease'
    ],
    description: [
      'Promotes relaxation and reduces stress: The compounds in turmeric have a calming effect on the nervous system, which may help to lower cortisol (stress hormone) levels, ease tension, and promote a relaxed state of mind.',
      'Aids sleep quality: A warm cup before bedtime may help the body wind down, making it an effective natural remedy for improving sleep quality and duration, especially in people with mild insomnia or disturbed sleep patterns.',
      'May improve mood disorders: Research suggests that turmeric may help reduce symptoms of anxiety, depression, and fatigue.',
      'Supports digestive health: Turmeric tea possesses antispasmodic properties that can help soothe the digestive tract, potentially alleviating issues such as gas, bloating, nausea, and abdominal cramps. Its scent can also stimulate bile production, aiding digestion.',
      'Rich in antioxidants and anti-inflammatory compounds: Turmeric contains antioxidants like curcumin and polyphenols, which help fight off damaging free radicals in the body and reduce inflammation.',
      'May help relieve headaches and migraines: The anti-inflammatory and pain-relieving properties may help ease tension headaches and migraines, particularly when combined with inhaling the tea\'s aroma.',
      'Supports immune health: The anti-microbial and anti-bacterial properties, along with nutrients like vitamin C, calcium, and magnesium, may help strengthen the immune system and protect against infections.',
      'Promotes skin health: The antioxidants and anti-inflammatory properties may help improve skin health from the inside out, potentially soothing skin irritations, reducing redness, and boosting collagen production.',
      'May help with respiratory problems: Inhaling the steam from the tea may open constricted airways and help alleviate symptoms of respiratory issues like asthma or a cold due to its antimicrobial and anti-inflammatory effects.',
      'May reduce menstrual pain: Studies have indicated that the relaxing effects of turmeric can help mitigate muscle spasms and offer relief from menstrual discomfort, especially when its aroma is inhaled.'
    ]
  },
  {
    id: '5',
    name: 'Centella Tea',
    slug: 'centella',
    productCode: '0007',
    category: 'healing-teas',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-04%20at%208.49.27%E2%80%AFPM-Kb76Yk8nEGwD2JrESyCT32y8TpRIyw.png',
    benefits: [
      'Enhance blood flow',
      'Reduce numbness',
      'Healthy heart',
      'Enhance detoxification',
      'Enhance blood circulation',
      'Lower and prevent cholesterol',
      'Lower and prevent high blood pressure',
      'Soften blood vessels',
      'Cleanse the intestines',
      'Lose weight',
      'Ease constipation'
    ],
    description: [
      'Improved memory and cognitive function: The herb is traditionally known as a "brain food" and may enhance memory, focus, and overall mental clarity.',
      'Reduced anxiety and stress: Centella has anxiolytic and antidepressant properties that may help calm nerves, relieve mental stress, improve mood, and aid in managing anger.',
      'Neuroprotective effects: Its antioxidant and anti-inflammatory properties may protect neurons from damage and could potentially help in preventing neurodegenerative diseases like Alzheimer\'s and Parkinson\'s, though more research is needed.',
      'Circulation and Cardiovascular Health: Improved blood circulation: It may help strengthen veins and improve blood flow, which is beneficial for conditions like varicose veins, hemorrhoids, and general circulatory health.',
      'Reduced swelling and fluid retention: Its positive effects on the vascular system may help decrease swelling, numbness, and heaviness in the legs.',
      'Potential cardiovascular benefits: Compounds like asiaticoside may help reduce inflammation in blood vessels and prevent fat buildup.',
      'Skin and Wound Healing: Promoted wound healing: Centella contains triterpenoids that support skin repair, stimulate collagen production, and speed up the healing of minor wounds and burns when consumed orally or applied topically.',
      'Management of skin conditions: Its anti-inflammatory properties make it useful for managing issues like acne, psoriasis, eczema, and atopic dermatitis, by reducing inflammation and oxidative stress in skin cells.',
      'Anti-aging effects: By boosting collagen and acting as an antioxidant, it may help reduce sagging skin, stretch marks, and wrinkles.',
      'Other Potential Benefits: Antioxidant activity: Centella is rich in antioxidants that protect the body against free radicals and oxidative stress.'
    ]
  },
  {
    id: '6',
    name: 'Chamomile Tea',
    slug: 'chamomile',
    productCode: '0008',
    category: 'healing-teas',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-04%20at%208.50.08%E2%80%AFPM-QZb4mNQ3KI4JxYWJxQzwQcUzZadgLw.png',
    benefits: [
      'Boosts Up Immunity',
      'Helpful In Cold and ear ache',
      'Improves digestion',
      'Improves facial skin',
      'Increases immunity',
      'Infantile convulsions',
      'Good for dentition pain',
      'Good Neuralgic pain',
      'Prevents cancer',
      'Prevents diabetes'
    ],
    description: [
      'Promotes relaxation and sleep: The antioxidant apigenin in chamomile binds to brain receptors that may reduce anxiety and initiate sleep, helping improve overall sleep quality.',
      'Aids digestion: Chamomile has anti-inflammatory and antispasmodic properties that can soothe the stomach lining, relieve gas, bloating, indigestion, and nausea, and may help protect against stomach ulcers.',
      'Reduces stress and anxiety: Its calming effects can help lower stress levels and ease symptoms of generalized anxiety disorder (GAD), promoting a sense of calmness and mental well-being.',
      'Eases menstrual pain: The anti-inflammatory and analgesic properties of the tea can help relax the uterus and decrease the pain and discomfort associated with menstrual cramps and premenstrual syndrome (PMS).',
      'Supports heart health: Rich in flavonoids and other antioxidants, chamomile may help lower blood pressure and cholesterol levels, potentially reducing the risk of cardiovascular diseases.',
      'Helps manage blood sugar: Chamomile may aid in blood sugar control and protect pancreatic cells due to its anti-inflammatory properties, making it a complementary option for individuals with diabetes.',
      'Boosts immune system: The tea has antibacterial and anti-inflammatory properties that can help prevent illness, fight harmful bacteria, and strengthen the immune system against colds and other infections.',
      'Promotes skin health: Used topically or consumed, chamomile\'s anti-inflammatory and healing properties can help treat acne, reduce skin inflammation and irritation, and assist in wound healing.',
      'May have anti-cancer properties: Some laboratory studies suggest that compounds in chamomile may help inhibit the growth of certain types of cancer cells, though more research in humans is needed.'
    ]
  },
  {
    id: '7',
    name: 'Geranium Tea',
    slug: 'geranium',
    productCode: '0009',
    category: 'healing-teas',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-04%20at%208.50.34%E2%80%AFPM-AaG1APzygt9Y4i2j3TFZjRJ4bXtDsN.png',
    benefits: [
      'A strong antimicrobial',
      'Antifungal',
      'Antiviral',
      'Good for skin care and infections'
    ],
    description: [
      'Stress and Anxiety Reduction: The aroma has a calming effect on the nervous system and can help reduce feelings of anxiety, tension, and fatigue.',
      'Mood Enhancement: It is known for its mood-lifting and balancing properties, which can aid in managing feelings of sadness or emotional upset.',
      'Improved Sleep: Its relaxing qualities may help with insomnia and promote healthy sleep patterns.',
      'Physical Health and Pain Relief: Inflammation Relief: Compounds in the tea help reduce internal and external inflammation, benefiting conditions like sore joints, aching muscles, or gastrointestinal inflammation.',
      'Pain Management: Due to its analgesic (pain-relieving) properties, it has been used as a traditional remedy for headaches and chronic pain conditions like migraines.',
      'Immune System Support: The natural antiseptic, antibacterial, and antifungal properties help boost immunity and fight off certain infections, particularly those affecting the respiratory and digestive systems.',
      'Digestive Aid: Drinking the tea may help soothe the digestive tract, alleviate bloating, cramping, and symptoms of diarrhea.',
      'Blood Sugar Management: Some studies suggest it may help lower blood glucose levels, potentially benefiting individuals with or at risk of type 2 diabetes (consult a doctor before use).',
      'Cardiovascular Support: Inhaling the aroma has been linked to lower blood pressure and heart rate, which can support heart health.',
      'Skin and Hair Health (often applied topically or through steam): Skin Rejuvenation: Geranium promotes cell health, helping regenerate new cells and diminish the appearance of scars, acne, and dark spots.',
      'Astringent Properties: It acts as a natural astringent, helping to tighten and tone the skin, prevent sagging, and reduce the appearance of wrinkles.',
      'Wound Healing: Applying the tea (once cooled) or diluted essential oil to minor cuts or wounds can help stop bleeding, prevent infection, and speed up the healing process.',
      'Balances Oil Production: It helps regulate sebum production, making it beneficial for both dry and oily skin and scalp conditions.'
    ]
  },
  {
    id: '8',
    name: 'Lavender Tea',
    slug: 'lavender',
    productCode: '0010',
    category: 'healing-teas',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-04%20at%208.51.00%E2%80%AFPM-GPX7rp3mVsh0pCDEdwAF4tNk4ZLe7H.png',
    benefits: [
      'Good Anti-inflammatory',
      'Has antiseptic ability',
      'Good for bloating & digestive issues',
      'Eliminates Dandruff',
      'Promotes hair health',
      'Boon for heart issues',
      'Improves Mood',
      'Lowers skin Irritation',
      'Promote Restful sleep',
      'Reduce Inflammation',
      'Reduces anxiety & stress'
    ],
    description: [
      'Promotes relaxation and reduces stress: The compounds in lavender have a calming effect on the nervous system, which may help to lower cortisol (stress hormone) levels, ease tension, and promote a relaxed state of mind.',
      'Aids sleep quality: A warm cup before bedtime may help the body wind down, making it an effective natural remedy for improving sleep quality and duration, especially in people with mild insomnia or disturbed sleep patterns.',
      'May improve mood disorders: Research suggests that lavender may help reduce symptoms of anxiety, depression, and fatigue.',
      'Supports digestive health: Lavender tea possesses antispasmodic properties that can help soothe the digestive tract, potentially alleviating issues such as gas, bloating, nausea, and abdominal cramps. Its scent can also stimulate bile production, aiding digestion.',
      'Rich in antioxidants and anti-inflammatory compounds: Lavender contains antioxidants like rosmarinic acid and polyphenols, which help fight off damaging free radicals in the body and reduce inflammation.',
      'May help relieve headaches and migraines: The anti-inflammatory and pain-relieving properties may help ease tension headaches and migraines, particularly when combined with inhaling the tea\'s aroma.',
      'Supports immune health: The antimicrobial and antibacterial properties, along with nutrients like vitamin C, calcium, and magnesium, may help strengthen the immune system and protect against infections.',
      'Promotes skin health: The antioxidants and anti-inflammatory properties may help improve skin health from the inside out, potentially soothing skin irritations, reducing redness, and boosting collagen production.',
      'May help with respiratory problems: Inhaling the steam from the tea may open constricted airways and help alleviate symptoms of respiratory issues like asthma or a cold due to its antimicrobial and anti-inflammatory effects.',
      'May reduce menstrual pain: Studies have indicated that the relaxing effects of lavender can help mitigate muscle spasms and offer relief from menstrual discomfort, especially when its aroma is inhaled.'
    ]
  },
  {
    id: '9',
    name: 'Stinging Nettle Tea',
    slug: 'stinging-nettle',
    productCode: '0012',
    category: 'healing-teas',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-04%20at%208.51.25%E2%80%AFPM-QK4TsACrY7uf7J3PUfX467KWo34UQx.png',
    benefits: [
      'Good for pregnancy',
      'Good anti-inflammatory',
      'Detoxifies the body',
      'For Heart health',
      'Reduces Blood pressure',
      'Reduces blood sugar'
    ],
    description: [
      'Rich in Nutrients: Stinging nettle is packed with essential vitamins (A, C, K, and some B vitamins), minerals (iron, calcium, magnesium, potassium, phosphorus), and amino acids. It also contains powerful antioxidants like carotenoids and polyphenols that help protect cells from oxidative stress.',
      'Anti-Inflammatory Effects: The plant contains compounds that may help reduce inflammation, potentially alleviating symptoms of conditions like arthritis, joint pain, and other inflammatory conditions. These effects are often attributed to bioactive compounds that inhibit inflammatory pathways.',
      'Allergy Relief: Nettle may help manage seasonal allergies (allergic rhinitis) by reducing inflammation and acting as a natural antihistamine, helping to alleviate sneezing, itching, and nasal congestion.',
      'Urinary Tract Health: Traditionally, nettle tea has been used to support bladder and urinary tract health. Its mild diuretic effects may help flush out bacteria and toxins, potentially reducing the risk of urinary tract infections.',
      'Prostate Health: Some studies suggest that nettle root extract might help ease symptoms of benign prostatic hyperplasia (BPH), such as frequent urination and incomplete bladder emptying, although more research is needed.',
      'Blood Sugar Regulation: Compounds in nettle leaves may help lower blood sugar levels by mimicking insulin effects and improving glucose uptake, though it should not replace conventional diabetes treatments.',
      'Blood Pressure Management: The tea\'s ability to stimulate nitric oxide production (which relaxes blood vessels) and its diuretic properties may help lower blood pressure.',
      'Bone Health: The combination of calcium, magnesium, and other minerals in nettle supports bone density and may help prevent osteoporosis.',
      'Skin and Hair Health: Nettle tea may promote healthier hair and skin due to its high silica and sulfur content, and its anti-inflammatory effects may help with conditions like eczema and acne.',
      'Detoxification: The diuretic properties help the kidneys flush out toxins and excess fluids from the body.'
    ]
  },
  {
    id: '10',
    name: 'Chayote Tea',
    slug: 'chayote',
    productCode: '0013',
    category: 'healing-teas',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-04%20at%209.38.45%E2%80%AFPM-uaHkxdeVl0EMXfvFwd0tt7SqrEaMI3.png',
    benefits: [
      'Antibacterial',
      'Antiviral',
      'Antifungal',
      'Helps in weight loss',
      'Good for heart health',
      'Good for blood pressure'
    ],
    description: [
      'Blood Pressure Regulation: Chayote is rich in potassium, which is essential for regulating blood pressure. It helps balance sodium levels in the body, relaxing blood vessels and reducing hypertension. The antioxidants in chayote also help protect against oxidative stress, further supporting heart health.',
      'Cardiovascular Support: The fiber content in chayote can help lower "bad" (LDL) cholesterol levels, while its antioxidants help prevent the buildup of plaque in arteries, reducing the risk of heart disease and stroke.',
      'Diuretic Properties: Chayote acts as a natural diuretic, promoting urine production and helping the body eliminate excess sodium and water. This can help reduce swelling and bloating, while also supporting kidney function.',
      'Kidney Health: By increasing urine output and flushing out toxins, chayote may help prevent kidney stones and support overall kidney health.',
      'Anti-inflammatory Effects: The antioxidants and phytonutrients in chayote have anti-inflammatory properties that can help reduce inflammation throughout the body, potentially easing symptoms of conditions like arthritis.',
      'Digestive Aid: The fiber in chayote supports healthy digestion by promoting regular bowel movements and feeding beneficial gut bacteria.',
      'Immune Support: Chayote is a good source of vitamin C, which plays a vital role in immune function. It helps strengthen the body\'s defenses against infections.',
      'Cough Relief: In some traditional medicine practices, chayote has been used to help relieve coughs and respiratory issues.',
      'Bone and Teeth Health: The minerals in chayote, including calcium and phosphorus, contribute to strong bones and teeth.'
    ]
  },
  {
    id: '11',
    name: 'Eucalyptus Tea',
    slug: 'eucalyptus',
    productCode: '0014',
    category: 'healing-teas',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-04%20at%209.04.16%E2%80%AFPM-X4xoJl7GyntGH1hAsLj1r1z2iN5EXS.png',
    benefits: [
      'Good for Respiratory health',
      'Good for Immune system',
      'Good for skin health',
      'Stress reliever'
    ],
    description: [
      'Relieves cold and respiratory symptoms: Eucalyptus is a common natural cold and flu remedy. The compound eucalyptol (cineole) acts as an expectorant and mucolytic agent, helping to loosen phlegm, clear nasal and chest congestion, ease coughs, soothe sore throats, and open airways for easier breathing.',
      'High in antioxidants: Eucalyptus leaves are a rich source of protective compounds like flavonoids and tannins (catechin, quercetin, luteolin, etc.). These antioxidants help protect the body from oxidative stress and free radical damage, which may reduce the risk of certain chronic conditions like heart disease, cancer, and neurodegenerative disorders.',
      'May reduce pain and inflammation: Due to its anti-inflammatory and analgesic (pain-relieving) properties, consuming eucalyptus tea may help manage general discomfort and inflammation within the body.',
      'Promotes relaxation: The aroma of the tea and its eucalyptol content may help reduce stress and anxiety by decreasing the activity of the sympathetic nervous system, promoting a sense of calm.',
      'Supports oral health: The antibacterial and anti-inflammatory properties can help fight bacteria responsible for bad breath, cavities, tooth decay, and gum disease (gingivitis).',
      'May improve skin health: The extract may boost the skin\'s ceramide content, a type of fatty acid that helps retain moisture and maintain the skin\'s protective barrier, potentially improving conditions like dry skin, dandruff, or dermatitis.',
      'May help manage blood sugar: Some studies suggest that the antioxidants in eucalyptus tea may help regulate blood sugar levels, though more research is needed.'
    ]
  },
  {
    id: '12',
    name: 'Red Clover Tea',
    slug: 'red-clover',
    productCode: '0017',
    category: 'healing-teas',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-04%20at%209.40.40%E2%80%AFPM-XvHT66c7628iGF3xFfrDasd4d2qaMN.png',
    benefits: [
      'Good for hot flashes',
      'Helps in PMS',
      'Good for Menopause',
      'Good for Prostate',
      'Good for Osteoporosis',
      'Good for Cardiovascular diseases',
      'Good for Asthma'
    ],
    description: [
      'Menopause Relief: Red clover is perhaps best known for its isoflavones, which are plant-based compounds that mimic estrogen in the body. For menopausal and postmenopausal women, these isoflavones may help reduce the frequency and severity of hot flashes, night sweats, mood swings, and other menopausal symptoms.',
      'Bone Health: The isoflavones in red clover may help slow bone loss and even improve bone mineral density, potentially reducing the risk of osteoporosis, especially in postmenopausal women.',
      'Cardiovascular Support: Red clover may improve arterial flexibility and blood circulation. The isoflavones have been studied for their potential to improve cholesterol levels and support overall heart health, although results are mixed.',
      'Skin and Hair Health: Traditionally used to address skin conditions like eczema and psoriasis, red clover may help improve skin health due to its anti-inflammatory properties. It may also support hair growth and strength.',
      'Immune Support: The antioxidants and anti-inflammatory compounds in red clover can help support the immune system and protect against oxidative stress.',
      'Respiratory Health: Red clover has traditionally been used to help with respiratory issues like coughs, bronchitis, and asthma, thanks to its expectorant properties.',
      'Detoxification: The tea is believed to support liver and lymphatic function, helping the body eliminate toxins more efficiently.',
      'Mood and Stress: Some users report that red clover tea helps reduce feelings of anxiety and improves overall mood, possibly due to its phytoestrogen content.'
    ]
  },
  {
    id: '13',
    name: 'Dandelion Tea',
    slug: 'dandelion',
    productCode: '0019',
    category: 'healing-teas',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-04%20at%209.39.02%E2%80%AFPM-3y4shK3Qewh9V76rs7Yd3uITpyJUSF.png',
    benefits: [
      'Boosts Immune System',
      'Controls Blood Sugar Level',
      'Fights Inflammation',
      'Helps In Weight Loss',
      'Lowers Blood Pressure',
      'Reduces Cholesterol',
      'Treats Constipation'
    ],
    description: [
      'Nutrient-dense: Dandelion is an excellent source of vitamins A, C, and K, as well as minerals like potassium, calcium, and iron.',
      'Rich in antioxidants: Dandelion contains potent antioxidants like beta-carotene and polyphenols, which help neutralize free radicals and protect against cell damage and oxidative stress.',
      'Anti-inflammatory effects: Compounds in dandelion have shown anti-inflammatory properties in studies, which may help reduce inflammation linked to various chronic diseases.',
      'May lower water retention (natural diuretic): Dandelion leaves are traditionally used as a diuretic, which can help the body eliminate excess fluid, reducing bloating and potentially lowering blood pressure.',
      'Supports liver health: Dandelion root is often used in traditional medicine as a "liver tonic" to aid detoxification and increase the flow of bile, which helps break down fats.',
      'Aids digestion: Rich in the prebiotic fiber inulin, the root can promote healthy gut bacteria, relieve constipation, and soothe minor digestive ailments.',
      'May manage blood sugar: Some compounds in dandelion, such as chicoric and chlorogenic acids, may help improve insulin secretion and sensitivity, potentially aiding in blood sugar management.',
      'Potential anti-cancer properties: Test-tube and animal studies have indicated that dandelion root extract may induce cell death in certain cancer cells (e.g., melanoma, pancreatic), though human research is lacking.',
      'May support skin health: Research suggests dandelion extract can help protect the skin from sun damage, increase collagen production, and reduce inflammation, which may be useful in treating conditions like acne.',
      'Boosts immune health: Dandelion may have antimicrobial and antiviral properties, which, along with its high vitamin C content, can help support the immune system\'s ability to fight off infections.',
      'Important Note: Much of the research on dandelion tea\'s benefits is limited to test-tube and animal studies, and more high-quality human research is needed to confirm these effects. It is important to consult a healthcare professional before using dandelion tea as a supplement, especially if you have existing health conditions or are taking medications, as it may cause allergic reactions in some individuals or interact with certain drugs.'
    ]
  },
  {
    id: '14',
    name: 'Evening Primrose Tea',
    slug: 'evening-primrose',
    productCode: '0020',
    category: 'healing-teas',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-04%20at%209.16.37%E2%80%AFPM-e48KyFpHio89LTq2IDbd1ayNUKqQho.png',
    benefits: [
      'Ability prevents fungal growth',
      'Antioxidant Capacity',
      'Boost immune system',
      'Boosts our mood',
      'Treats Arthritis',
      'Cleanses your blood',
      'Clear ear tingling sound',
      'Cures a cough & bronchitis',
      'Fights cancer',
      'Heals sore throat',
      'Improves heart health',
      'Instigate cancer cell apoptosis',
      'Lowers blood pressure',
      'Lowers cholesterol'
    ],
    description: [
      'Relieves cold and respiratory symptoms: Evening primrose is a common natural cold and flu remedy. The compound eucalyptol (cineole) acts as an expectorant and mucolytic agent, helping to loosen phlegm, clear nasal and chest congestion, ease coughs, soothe sore throats, and open airways for easier breathing.',
      'High in antioxidants: Evening primrose leaves are a rich source of protective compounds like flavonoids and tannins (catechin, quercetin, luteolin, etc.). These antioxidants help protect the body from oxidative stress and free radical damage, which may reduce the risk of certain chronic conditions like heart disease, cancer, and neurodegenerative disorders.',
      'May reduce pain and inflammation: Due to its anti-inflammatory and analgesic (pain-relieving) properties, consuming evening primrose tea may help manage general discomfort and inflammation within the body.',
      'Promotes relaxation: The aroma of the tea and its content may help reduce stress and anxiety by decreasing the activity of the sympathetic nervous system, promoting a sense of calm.',
      'Supports oral health: The antibacterial and anti-inflammatory properties can help fight bacteria responsible for bad breath, cavities, tooth decay, and gum disease (gingivitis).',
      'May improve skin health: The extract may boost the skin\'s ceramide content, a type of fatty acid that helps retain moisture and maintain the skin\'s protective barrier, potentially improving conditions like dry skin, dandruff, or dermatitis.',
      'May help manage blood sugar: Some studies suggest that the antioxidants in evening primrose tea may help regulate blood sugar levels, though more research is needed.'
    ]
  },
  {
    id: '15',
    name: 'Milk Thistle Tea',
    slug: 'milk-thistle',
    productCode: '0024',
    category: 'healing-teas',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-04%20at%209.39.21%E2%80%AFPM-bEyKHWutSNS8JLx8BPkFu2mXc62bTT.png',
    benefits: [
      'Excellent as an anti-inflammatory',
      'Good for liver Cell regeneration',
      'Fights free radicals',
      'Good For Neurodegenerative diseases',
      'As a protection against Cancer',
      'To inhibit cancer cell growth',
      'To inhibit cancer development',
      'To controls high cholesterol',
      'To control diabetes',
      'Good kidney stones',
      'Good for gall bladder disorders'
    ],
    description: [
      'Supports liver health: Milk thistle is traditionally used for liver support and may help protect liver cells from toxins. Research suggests it can improve liver function in people with certain liver diseases.',
      'Aids digestion: It may help relieve indigestion when used alongside other supplements.',
      'Promotes heart health: Some studies indicate it can help lower "bad" LDL cholesterol, which may reduce the risk of heart disease, especially in individuals with diabetes.',
      'Regulates blood sugar: It might help lower blood sugar levels in people with type 2 diabetes, but more studies are needed to confirm this effect.',
      'Provides antioxidant and anti-inflammatory benefits: The active compound silymarin has antioxidant and anti-inflammatory properties that could help reduce inflammation and oxidative stress.',
      'Supports skin health: Its anti-inflammatory and antioxidant properties may help with skin conditions like acne.',
      'Boosts immune function: Milk thistle tea may offer support for the immune system due to its potential antibacterial and antiviral properties.',
      'Supports bone health: Some animal and test-tube studies suggest it may help with bone mineralization and protect against bone loss, but human research is lacking.'
    ]
  },
  {
    id: '16',
    name: 'Feverfew Tea',
    slug: 'feverfew',
    productCode: '0025',
    category: 'healing-teas',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-04%20at%209.27.15%E2%80%AFPM-pd9qDinDdyS8BuXYoohSGd2xAdociN.png',
    benefits: [
      'Herbal alternative for autoimmune disease',
      'Lowers blood pressure',
      'Eases menstrual cramps',
      'Preventative against a migraine',
      'Relief from arthritis',
      'Relieves a migraine'
    ],
    description: [
      'Migraine Prevention: This is the most well-studied use. Studies suggest that regular use of feverfew may reduce the frequency and severity of migraine attacks and associated symptoms like nausea and light sensitivity. It is important to note that it is used for prevention, not for treating a migraine that has already started.',
      'Anti-inflammatory Effects: Feverfew contains parthenolide and other compounds that help inhibit the production of substances (like prostaglandins) in the body that trigger inflammation, making it a traditional remedy for various inflammatory conditions.',
      'Pain Relief: Traditionally, it has been used as a pain reliever for general headaches, toothaches, and joint pain.',
      'Menstrual Discomfort: It may help ease menstrual cramps and regulate menstrual flow due to its antispasmodic properties and ability to help bring on menses (emmenagogue).',
      'Fever Reduction: The name "feverfew" comes from the Latin word febrifugia, meaning "fever reducer," and it has a long history of traditional use for this purpose.',
      'Skin Health: Parthenolide-free feverfew extracts are used in topical creams to help soothe skin irritation, reduce redness associated with conditions like rosacea, and provide antioxidant protection against UV damage.',
      'Digestive Aid: Traditionally, it has been used as a digestive bitter to help boost appetite, relieve stomachaches, gas, and nausea.',
      'Other Traditional Uses: The plant has also been used in folk medicine for conditions such as arthritis, allergies, asthma, tinnitus (ringing in the ears), and as an insect repellent.'
    ]
  },
  {
    id: '17',
    name: 'Fuchsia Tea',
    slug: 'fuchsia',
    productCode: '0026',
    category: 'healing-teas',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-04%20at%209.27.36%E2%80%AFPM-biciV254qCoRXI6MlYJ0kJDnAeaTgE.png',
    benefits: [
      'Promotes oral health',
      'Protects against heart disease',
      'Reduces bacteria in the mouth',
      'Reduces blood pressure',
      'Reduces plaque in the teeth',
      'Reduces the risk of heart attack',
      'Reduces the risks of cancer',
      'Strengthens tooth enamel'
    ],
    description: [
      'Anti-inflammatory Effects: Fuchsia contains compounds that help inhibit the production of substances (like prostaglandins) in the body that trigger inflammation, making it a traditional remedy for various inflammatory conditions.',
      'Pain Relief: Traditionally, it has been used as a pain reliever for general headaches, toothaches, and joint pain.',
      'Menstrual Discomfort: It may help ease menstrual cramps and regulate menstrual flow due to its antispasmodic properties and ability to help bring on menses (emmenagogue).',
      'Fever Reduction: It has a long history of traditional use for fever reduction.',
      'Skin Health: Fuchsia extracts are used in topical creams to help soothe skin irritation, reduce redness associated with conditions like rosacea, and provide antioxidant protection against UV damage.',
      'Digestive Aid: Traditionally, it has been used as a digestive bitter to help boost appetite, relieve stomachaches, gas, and nausea.',
      'Other Traditional Uses: The plant has also been used in folk medicine for conditions such as arthritis, allergies, asthma, tinnitus (ringing in the ears), and as an insect repellent.'
    ]
  },
  {
    id: '18',
    name: 'Ginger Tea',
    slug: 'ginger',
    productCode: '0027',
    category: 'healing-teas',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-04%20at%209.28.02%E2%80%AFPM-hGKomjWx47b5CuLvUgJyXaTjr6YBF4.png',
    benefits: [
      'Treats motion sickness',
      'Cures chronic indigestion',
      'Helps in menstrual pain',
      'Lowers blood cholesterol',
      'Protects against Alzheimer',
      'Fights Infections'
    ],
    description: [
      'Alleviates nausea and vomiting: Ginger is a well-established remedy for various types of nausea, including morning sickness during pregnancy, motion sickness, and post-surgery or chemotherapy-related nausea.',
      'Eases pain and inflammation: Its anti-inflammatory properties can help manage pain and stiffness associated with conditions like osteoarthritis and rheumatoid arthritis.',
      'Reduces menstrual pain (dysmenorrhea): Studies suggest ginger can be as effective as some over-the-counter nonsteroidal anti-inflammatory drugs (NSAIDs) like ibuprofen in relieving menstrual cramps.',
      'Aids digestion: Ginger helps speed up gastric emptying, stimulate digestive enzymes, and relieve symptoms of indigestion, bloating, gas, and stomach discomfort.',
      'May help manage blood sugar levels: Research indicates that ginger may help lower blood sugar levels and improve insulin sensitivity in people with type 2 diabetes.',
      'Supports heart health: Ginger may help lower blood pressure, cholesterol (LDL and triglycerides), and reduce the risk of blood clots, potentially protecting against heart disease.',
      'May aid in weight management: Some evidence suggests ginger can help control appetite, increase calorie burn, and inhibit fat absorption, though more research is needed.',
      'Boosts immunity and fights infections: With its natural antiviral, antibacterial, and antifungal properties, ginger may help strengthen the immune system and protect against various infections.',
      'May improve brain function: The antioxidants in ginger help protect brain cells from oxidative stress and inflammation, potentially reducing the risk of age-related cognitive decline and neurodegenerative diseases like Alzheimer\'s.',
      'Rich in antioxidants: Ginger contains more than 50 antioxidants that help combat oxidative stress and damage caused by free radicals in the body.'
    ]
  },
  {
    id: '19',
    name: 'Thyme Tea',
    slug: 'thyme',
    productCode: '0029',
    category: 'healing-teas',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-04%20at%209.29.12%E2%80%AFPM-9m8LGSDBmazlFmz3wsqP33PClW9ieF.png',
    benefits: [
      'Promote smooth skin',
      'Relieves dry skin',
      'Good for diabetics',
      'Relief for Cavities',
      'Good for women fertility',
      'Treatment of hypertension',
      'Thrush Treatments',
      'Back pain relieves',
      'Swelling Relieves',
      'Promote hair health',
      'Good Colds and Flu',
      'Good for Stomachaches',
      'Good for Arthritis'
    ],
    description: [
      'Respiratory Health: Thyme is a popular natural remedy for ailments like coughs, colds, flu, and bronchitis. Its expectorant and antispasmodic properties help soothe sore throats, reduce coughing, and clear phlegm and mucus from the respiratory tract.',
      'Immune System Support: Thyme contains essential vitamins and minerals, including high levels of Vitamin C, Vitamin A, copper, iron, and manganese, which help boost the immune system and the body\'s ability to fight off infections.',
      'Antioxidant Effects: The herb is rich in potent antioxidants, such as flavonoids and phenolic compounds, which help combat oxidative stress and neutralize free radicals in the body, potentially lowering the risk of chronic diseases.',
      'Anti-inflammatory Properties: The anti-inflammatory compounds in thyme can help reduce inflammation throughout the body, which may be beneficial for conditions like arthritis and other inflammatory issues.',
      'Blood Pressure Management: Thyme extracts have shown potential in helping to regulate heart rate and lower blood pressure in individuals with hypertension due to the presence of potassium and other compounds.',
      'Digestive Aid: Thyme can improve digestive health by relaxing gastrointestinal muscles, reducing gas and bloating, and alleviating symptoms of indigestion and intestinal cramping.',
      'Pain Relief: The tea can help ease menstrual pain and general muscle cramps due to its antispasmodic properties.',
      'Mood and Stress Reduction: Some studies suggest that the carvacrol content in thyme may influence neurotransmitters, potentially helping to reduce stress and anxiety and improve mood.',
      'Important Considerations: Moderation is Key: While thyme tea is generally considered safe in moderate amounts, excessive consumption may cause side effects like abdominal cramps or headaches in some individuals.',
      'Consult a Professional: For medicinal use, especially for existing health conditions or during pregnancy, it is best to consult with a doctor or health professional.',
      'Incorporating thyme leaf tea into a balanced lifestyle may offer these and other potential health benefits.'
    ]
  },
  {
    id: '20',
    name: 'Melissa Tea',
    slug: 'melissa',
    productCode: '0030',
    category: 'healing-teas',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-04%20at%209.29.43%E2%80%AFPM-ZlKLGXwRcjE8mAwaHDxLUrr92I511C.png',
    benefits: [
      'Carminative',
      'Calms the nerves',
      'Eases restlessness & sleeplessness',
      'Anti anxiety',
      'Good for hyperactivity',
      'Beneficial in cases of depression',
      'Calms the heart',
      'Clears heat',
      'Improves concentration',
      'Promote restful sleep in children',
      'Boosts the mood of youngsters',
      'Eases gassiness & stomach',
      'Excellent for colic & indigestion',
      'Helpful for teething infants'
    ],
    description: [
      'Stress and Anxiety Reduction: Melissa leaf has a calming effect on the nervous system, helping to reduce feelings of stress, agitation, and anxiety.',
      'Improved Sleep: Its natural sedative properties can help people fall asleep more easily and promote a more restful and peaceful sleep, making it a potential aid for insomnia and restlessness.',
      'Digestive Aid: It is traditionally used to alleviate digestive issues such as bloating, gas, indigestion, and cramps due to its antispasmodic and carminative properties.',
      'Antioxidant Effects: Rich in phenolic compounds and flavonoids, the tea provides strong antioxidant activity, which helps protect cells from damage caused by free radicals and reduces oxidative stress.',
      'Additional and Investigational Benefits: Antiviral Properties: When used topically (as an extract in a cream), it has shown effectiveness in treating cold sores (herpes simplex virus), potentially by inhibiting the virus from entering host cells.',
      'Cognitive Function: Some studies suggest it may help improve memory, focus, and concentration, and can be used in supportive management of neurodegenerative conditions.',
      'Pain Relief: Its anti-inflammatory and analgesic properties may help soothe minor aches, including headaches, toothaches, and menstrual pain.',
      'Cardiovascular Support: Research indicates potential benefits for the cardiovascular system, such as helping to regulate blood pressure, lower total cholesterol and triglyceride levels, and decrease heart rate.',
      'Anti-inflammatory Effects: The compounds in Melissa leaf help to reduce inflammation throughout the body.'
    ]
  },
  {
    id: '21',
    name: 'Senna Tea',
    slug: 'senna',
    productCode: '0031',
    category: 'healing-teas',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-04%20at%209.45.46%E2%80%AFPM-vLN2DWUGYszhuAS19TRwQdZEjlbgV4.png',
    benefits: [
      'Boon for extreme constipation',
      'Boost the immune system',
      'Cleans the stomach',
      'Cure breathing difficulties',
      'Good for hair care',
      'Good for hemorrhoids',
      'Good For Lotion And Cremes',
      'Helps with weight loss',
      'Laxative action',
      'Parasite cleaning action',
      'Protection against bacterium',
      'Purgative action',
      'Relieves Breathing Difficulties'
    ],
    description: [
      'Constipation Relief: Senna contains natural compounds called sennosides, which irritate the lining of the bowel and stimulate strong muscle contractions (peristalsis), helping to move stool through the intestines. This typically results in a bowel movement within 6 to 12 hours.',
      'Bowel Preparation: Due to its effective purgative action, senna is used to clear the bowels before certain diagnostic tests, such as a colonoscopy.',
      'Hemorrhoid Management Aid: By producing softer stools and promoting easier bowel movements, it helps reduce strain and discomfort associated with hemorrhoids (piles) or anal fissures, which are often aggravated by chronic constipation.',
      'Potential Anti-inflammatory and Antioxidant Effects: Traditional medicine and some preliminary research suggest the presence of antioxidants and anti-inflammatory compounds (like rhein and chrysophanol) that may offer benefits for gut health and immune support, though more research is needed to confirm these uses.',
      'Traditional Skin Care Uses: When used topically (as a paste or extract, not the tea itself), senna has traditional applications for treating skin infections and inflammatory conditions like acne and eczema due to its antibacterial and antifungal properties.'
    ]
  },
  {
    id: '22',
    name: 'Mint Tea',
    slug: 'mint',
    productCode: '0032',
    category: 'healing-teas',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-04%20at%209.46.37%E2%80%AFPM-waeobgJNl9cUoPAq0cHhIKbQZ2sP5V.png',
    benefits: [
      'Aids digestion and Weight Loss',
      'Good for irritable bowel syndrome',
      'Treatment for colic spasms',
      'Treats nausea and cough',
      'Treats respiratory disorders',
      'Good Anti cancer tea',
      'Good for depression',
      'Anti fatigue',
      'Inhibits herpes Simplex',
      'Good post radiation tea'
    ],
    description: [
      'Aids Digestion: Mint can help alleviate stomach discomfort, gas, and bloating by relaxing the muscles of the digestive tract and improving bile flow. It may also help manage symptoms of irritable bowel syndrome (IBS).',
      'Relieves Cold and Flu Symptoms: Menthol acts as a subjective nasal decongestant, making people feel like they are breathing easier, and its anti-inflammatory properties can soothe sore throats and coughs.',
      'Freshens Breath: Mint naturally combats bad breath. Drinking mint tea or chewing on fresh leaves can help mask odors and kill the bacteria responsible for bad breath.',
      'Improves Brain Function and Alertness: The aroma of mint essential oils is claimed to enhance memory, increase alertness, and decrease feelings of anxiety and fatigue.',
      'Reduces Stress and Promotes Relaxation: Mint has natural calming effects that can help alleviate stress and anxiety, making it a good choice before bedtime to promote restful sleep.',
      'Rich in Antioxidants: Mint is a good source of antioxidants, which help protect the body from oxidative stress and cell damage caused by free radicals.',
      'May Ease Headache and Menstrual Pain: Due to its muscle-relaxing and analgesic properties, the menthol in mint may help relieve tension headaches and menstrual cramps.',
      'Supports Immunity: Mint contains various vitamins and antioxidants that can help strengthen the immune system and protect against infections.',
      'May Help with Weight Management: As a calorie-free beverage, mint tea can be a refreshing alternative to sugary drinks and may help curb cravings, supporting weight loss efforts when combined with a healthy diet.',
      'May Balance Hormones (Spearmint): Studies suggest that spearmint tea in particular may help balance female hormones and reduce male hormones (testosterone) in conditions like polycystic ovary syndrome (PCOS).'
    ]
  },

  // FRUIT TEAS
  {
    id: '23',
    name: 'Blackberries Tea',
    slug: 'blackberries',
    productCode: '0003',
    category: 'fruit-teas',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-04%20at%209.39.47%E2%80%AFPM-Hl0XP327sBxyiCq24D6qydrdUPNggp.png',
    benefits: [
      'Rich in Antioxidants',
      'Assists in digestive problems',
      'Anti Bacterial',
      'Anti viral',
      'Controls diabetes',
      'Fights Cancer',
      'Enhance brain health',
      'Boost immune system',
      'Helps in weight loss',
      'Good for healthy bones'
    ],
    description: [
      'Rich in nutrients and low in calories: Blackberries are an excellent source of vitamins C and K, manganese, and fiber, while being low in calories and carbohydrates.',
      'High in antioxidants: They contain potent antioxidants like anthocyanins, which give them their deep purple color and help reduce oxidative stress, protecting cells from damage.',
      'Anti-inflammatory properties: The antioxidants in blackberries help reduce inflammation throughout the body, potentially lowering the risk of chronic conditions such as heart disease and certain cancers.',
      'Supports brain health: Studies suggest that the polyphenols in blackberries may improve cognitive function, memory, and motor skills, while potentially protecting against age-related mental decline.',
      'Promotes oral health: Due to their antibacterial and anti-inflammatory properties, blackberries may help prevent gum disease, cavities, and other oral infections.',
      'Aids digestion: The high fiber content supports healthy digestion, promotes regular bowel movements, and may help manage blood sugar levels.',
      'Supports heart health: The fiber, potassium, and antioxidants in blackberries contribute to cardiovascular health by helping to regulate blood pressure and cholesterol levels.',
      'May support healthy skin: Vitamin C in blackberries is essential for collagen production, which helps maintain skin elasticity and may protect against sun damage.',
      'Potential weight management: Being low in calories and high in fiber, blackberries can help promote feelings of fullness and support weight management goals.'
    ]
  },
  {
    id: '24',
    name: 'Raspberry Tea',
    slug: 'raspberry',
    productCode: '0011',
    category: 'fruit-teas',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-04%20at%209.40.06%E2%80%AFPM-qiCSVlz27aTcGzte0dBUPcuNWbyw0s.png',
    benefits: [
      'Is a calming herb',
      'Good for Stress',
      'Helps in Anxiety',
      'Promotes Sleep',
      'Improves Appetite',
      'Relieve pain',
      'Treats Diabetes',
      'Good for Heart',
      'Good for liver & kidneys',
      'Improves Digestion'
    ],
    description: [
      'Women\'s Health and Pregnancy: Toning the uterus: It is often recommended for strengthening and toning the uterine muscles, which may help prepare the body for childbirth.',
      'Supporting labor: Some believe it can help make labor more efficient, though scientific evidence is limited. It\'s generally advised to start drinking it in the later stages of pregnancy (after the first trimester) and under the guidance of a healthcare provider.',
      'Easing menstrual symptoms: The tea may help alleviate heavy menstrual bleeding, cramps, and other symptoms of PMS due to its astringent properties.',
      'Postpartum recovery: It may support uterine recovery after childbirth and is sometimes used to help increase breast milk supply.',
      'Fertility: Traditionally, it has been used to support fertility, though more research is needed.',
      'Hormonal Balance: May help balance hormones and ease symptoms associated with hormonal fluctuations, such as those experienced during menstruation or menopause.',
      'Nutrient-Rich: Raspberry leaf is a good source of vitamins and minerals, including vitamins C, E, A, and B complex, as well as calcium, magnesium, potassium, and iron.',
      'Antioxidant Properties: Contains antioxidants like ellagic acid, quercetin, and various polyphenols that help protect cells from damage caused by free radicals.',
      'Digestive Health: Its astringent properties can help soothe digestive issues such as diarrhea, nausea, and stomach cramps.',
      'Immune Support: The vitamin C and antioxidant content may help boost the immune system.'
    ]
  },
  {
    id: '25',
    name: 'Guava Tea',
    slug: 'guava',
    productCode: '0015',
    category: 'fruit-teas',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-04%20at%209.40.23%E2%80%AFPM-izf09MhapY4n7iFJiTbj8NgcFCqPzh.png',
    benefits: [
      'Helps in weight loss',
      'Good for heart health',
      'Good for Diabetes',
      'Good for skin care',
      'Good for brain health'
    ],
    description: [
      'Blood Sugar Management: Guava leaf extract has been shown to help lower blood sugar levels after meals by inhibiting the absorption of certain sugars. Some studies suggest it may improve insulin resistance and blood sugar control, making it a potential complementary option for managing type 2 diabetes.',
      'Heart Health: Guava leaf tea may help lower "bad" LDL cholesterol and triglycerides while potentially raising "good" HDL cholesterol, supporting overall cardiovascular health. Its antioxidant properties may also help protect the heart.',
      'Digestive Support: The tea has antimicrobial properties that can help combat harmful gut bacteria and relieve symptoms of diarrhea. It may also help soothe stomach discomfort and support overall digestive health.',
      'Weight Management: Research suggests that guava leaf extract may help inhibit the conversion of complex carbohydrates into sugars, potentially aiding in weight loss efforts.',
      'Immune Boost: Guava leaves are high in vitamin C and other antioxidants, which can help strengthen the immune system and protect against infections.',
      'Menstrual Pain Relief: Some studies indicate that guava leaf extract may be effective in reducing the intensity of menstrual cramps, possibly even more so than some pain medications.',
      'Potential Anti-Cancer Effects: Test-tube and animal studies suggest that the antioxidants in guava leaves may help inhibit the growth of certain cancer cells, though more research in humans is needed.',
      'Skin and Hair Health: Due to its antioxidant and antimicrobial properties, guava leaf tea may help treat acne, promote collagen production for healthier skin, and support hair growth.',
      'Brain Health: Antioxidants and other compounds in guava leaves may help protect brain cells from oxidative stress.',
      'Oral Health: The antimicrobial properties of guava leaves can help fight bacteria in the mouth, potentially reducing plaque and promoting healthier gums.'
    ]
  },
  {
    id: '26',
    name: 'Loquat Tea',
    slug: 'loquat',
    productCode: '0016',
    category: 'fruit-teas',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-04%20at%209.47.38%E2%80%AFPM-hY8gu8iE7qG94z58mad5cS6BCO4n0Z.png',
    benefits: [
      'Good for Liver Fibrosis',
      'Good for Liver function',
      'Good for Lung function',
      'Good for renal function',
      'Good for skin care',
      'Good for upper respiratory',
      'Good for weight loss'
    ],
    description: [
      'Anti-inflammatory Effects: Loquat leaves contain ursolic acid and other triterpene compounds that have been shown to possess anti-inflammatory properties, which may help reduce inflammation throughout the body and alleviate symptoms of conditions like arthritis.',
      'Respiratory Health: Traditionally, loquat leaf tea has been used to soothe the respiratory system. It may help relieve coughs, reduce phlegm, and ease symptoms of bronchitis, asthma, and other respiratory conditions due to its expectorant and anti-inflammatory effects.',
      'Blood Sugar Management: Some studies suggest that compounds in loquat leaves, particularly triterpenes, may help regulate blood sugar levels by enhancing insulin production and improving glucose uptake, making it potentially beneficial for individuals with or at risk of type 2 diabetes.',
      'Antioxidant Properties: Loquat leaves are rich in antioxidants like polyphenols (chlorogenic acid, epicatechin), flavonoids, and vitamin E. These compounds help neutralize harmful free radicals and protect cells from oxidative stress, which may reduce the risk of chronic diseases.',
      'Metabolic and Heart Health: By potentially helping to manage blood sugar, cholesterol levels, and triglycerides, loquat leaf tea may support overall metabolic health and reduce the risk of cardiovascular disease.',
      'Skin Health: The antioxidants and anti-inflammatory compounds in loquat leaves may benefit skin health by reducing inflammation and potentially preventing conditions like dermatitis or skin aging caused by oxidative damage.',
      'Liver Support: Some research indicates that loquat leaf extract may help protect the liver from damage and support its detoxifying functions.',
      'Brain Health: Preliminary studies suggest that the antioxidants in loquat leaves may have neuroprotective effects, potentially slowing cognitive decline and protecting brain cells.',
      'Potential Anti-Cancer Activity: Test-tube and animal studies have shown that certain compounds in loquat leaves may inhibit the growth of some types of cancer cells, though human research is still needed to confirm these effects.'
    ]
  },
  {
    id: '27',
    name: 'Soursop Tea',
    slug: 'soursop',
    productCode: '0018',
    category: 'fruit-teas',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-04%20at%209.48.19%E2%80%AFPM-vGdpK1p7EMuycw0lYaBRk9TD3FOlPH.png',
    benefits: [
      'Good for autoimmune disease',
      'Lowers Blood pressure',
      'Eases menstrual cramps',
      'Good for migraine',
      'Good for Arthritis',
      'Good for Stomach aches'
    ],
    description: [
      'Antioxidant Properties: Soursop leaves are rich in antioxidants, including flavonoids, tannins, and phytosterols. These compounds help neutralize harmful free radicals in the body, protecting cells from oxidative stress and potentially reducing the risk of chronic diseases.',
      'Anti-inflammatory Effects: The bioactive compounds in soursop have demonstrated anti-inflammatory properties in some studies, which may help alleviate symptoms of inflammatory conditions like arthritis.',
      'Blood Pressure Regulation: Some research suggests that soursop may help lower blood pressure by relaxing blood vessels, due in part to its potassium content, which helps balance sodium levels in the body.',
      'Blood Sugar Management: Studies indicate that soursop leaf extract may help lower blood sugar levels, potentially by inhibiting enzymes that break down carbohydrates and by supporting insulin function. This makes it a subject of interest for managing type 2 diabetes.',
      'Immune Support: The vitamins (especially vitamin C) and antioxidants in soursop may help boost the immune system, enhancing the body\'s ability to fight off infections.',
      'Digestive Health: Traditionally, soursop has been used to support digestive health and relieve stomach ailments like constipation and diarrhea.',
      'Potential Anti-Cancer Activity: Laboratory studies have shown that certain compounds in soursop, particularly acetogenins, can kill cancer cells or slow their growth. However, these findings are from test-tube and animal studies, and there is currently no solid clinical evidence in humans. Soursop should not be used as a substitute for conventional cancer treatment.',
      'Relaxation and Sleep: The tea is often consumed for its calming effects, which may help reduce stress, anxiety, and promote better sleep.',
      'Antimicrobial Activity: Some studies suggest that soursop extracts may have antibacterial and antiviral properties, potentially helping to fight certain infections.',
      'Safety Note: While soursop tea has many potential benefits, excessive consumption may be harmful. The plant contains annonacin, a compound that in high amounts has been linked to neurological issues in some studies. Pregnant or breastfeeding women and individuals with low blood pressure or Parkinson\'s disease should exercise caution or avoid soursop. Always consult a healthcare professional before using soursop as a supplement.'
    ]
  },
  {
    id: '28',
    name: 'Mango Tea',
    slug: 'mango',
    productCode: '0022',
    category: 'fruit-teas',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-04%20at%209.40.55%E2%80%AFPM-2OcjisLwIATJw3ArRH4ygIMh2Tzsky.png',
    benefits: [
      'Provide Vitamins A & C',
      'Relieve Nausea',
      'Relieve Dizziness',
      'Prevent Cholesterol',
      'Prevent Cardiovascular Disease',
      'Promote Energy',
      'Reduce Body Fats',
      'Provide Antioxidants',
      'Promote Healthy Teeth & Bones'
    ],
    description: [
      'Contains beneficial plant compounds like polyphenols and terpenoids, which have antioxidant and anti-inflammatory properties.',
      'Helps protect cells from damage caused by free radicals.',
      'May help reduce inflammation in the body.',
      'Metabolic and cardiovascular benefits: Helps manage blood sugar levels.',
      'May support weight loss by helping to regulate fat accumulation.',
      'Has hypotensive properties that can help lower blood pressure and strengthen blood vessels.',
      'Supports overall heart health.',
      'Immune system and respiratory benefits: The terpenoids in mango leaves are important for immune health.',
      'Traditionally used to help with respiratory issues like bronchitis and asthma.',
      'Other potential benefits: Supports overall wellness due to its vitamin and mineral content, including vitamins A, B, and C.',
      'May support skin health.'
    ]
  },

  // TRUE TEAS
  {
    id: '29',
    name: 'Green Tea',
    slug: 'green-tea',
    productCode: '0028',
    category: 'true-teas',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-04%20at%209.28.40%E2%80%AFPM-dv6agI25bzAWyefSauCszd5U2BbTB4.png',
    benefits: [
      'Good Anti aging and Antiviral agent',
      'Good for Arthritis and Asthma',
      'Blood clot prevention',
      'Good blood pressure',
      'Great for bone health',
      'Builds stamina and immunity',
      'Prevents colds & flu',
      'Detoxifies the body',
      'Prevents diabetes',
      'Reduces blood pressure',
      'Reducing cholesterol',
      'Strengthens tooth enamel',
      'Helps in Weight loss'
    ],
    description: [
      'Rich in antioxidants: Green tea helps protect cells from damage caused by free radicals and oxidative stress, which may lower the risk of various chronic diseases.',
      'Anti-inflammatory effects: Its compounds can help mitigate inflammation throughout the body, benefiting conditions like arthritis and inflammatory bowel disease (IBD).',
      'May lower cancer risk: Population studies have linked regular green tea consumption to a potentially reduced risk of several types of cancer, including breast, prostate, colorectal, and ovarian cancers.',
      'May increase longevity: Due to its protective effects against chronic diseases, regular green tea drinkers may have a lower overall risk of mortality and potentially live longer.',
      'Cardiovascular & Metabolic Health: Promotes heart health: Consumption is linked to a reduced risk of heart disease, heart attacks, and stroke by helping to lower blood pressure and "bad" LDL cholesterol levels.',
      'Aids in weight management: The combination of caffeine and catechins may boost metabolism and enhance fat-burning processes, especially when combined with exercise.',
      'Helps manage blood sugar: Green tea may improve insulin sensitivity and help regulate blood sugar levels, potentially lowering the risk of developing type 2 diabetes.',
      'Brain & Mental Health: Improves cognitive function: The combination of L-theanine (an amino acid that promotes relaxation) and a moderate amount of caffeine can enhance alertness, focus, and memory without causing jitters.',
      'Neuroprotective properties: It may offer some protection against age-related neurodegenerative diseases such as Alzheimer\'s and Parkinson\'s diseases.',
      'Reduces stress and anxiety: L-theanine has tranquilizing effects that can help ease stress and promote a state of calmness.',
      'Other Benefits: Supports oral health: Green tea\'s antibacterial properties can help prevent cavities, fight bad breath, and reduce the risk of gum disease.'
    ]
  },
  {
    id: '30',
    name: 'Oolong Tea',
    slug: 'oolong',
    productCode: '0021',
    category: 'true-teas',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-04%20at%209.17.01%E2%80%AFPM-AC30vtYTP7ru69vlBWnf2JhwrEl0Ft.png',
    benefits: [
      'Boosts metabolism',
      'Aids weight loss',
      'Supports heart health',
      'Improves brain function',
      'Regulates blood sugar'
    ],
    description: [
      'Boosts Metabolism: Oolong tea contains caffeine and catechins that can help increase your metabolic rate, leading to more efficient calorie burning throughout the day.',
      'Aids Fat Oxidation: The polyphenols in oolong tea may help enhance fat oxidation, which means your body can break down fat more effectively, supporting weight loss efforts.',
      'Supports Weight Loss: Regular consumption of oolong tea, combined with a healthy diet and exercise, may contribute to weight management by reducing fat absorption and boosting energy expenditure.',
      'Heart Health: Oolong tea may help lower bad (LDL) cholesterol levels and reduce the risk of heart disease by improving blood lipid profiles and supporting healthy blood pressure.',
      'Brain Function: The combination of caffeine and L-theanine in oolong tea can improve mental alertness, focus, and mood, while promoting a calm, relaxed state of mind.',
      'Blood Sugar Regulation: Some studies suggest that oolong tea may help regulate blood sugar levels, making it potentially beneficial for individuals with or at risk of type 2 diabetes.',
      'Bone and Dental Health: The minerals and antioxidants in oolong tea may help support bone density and promote oral health by reducing the risk of tooth decay and gum disease.'
    ]
  },
  {
    id: '31',
    name: 'Purple Tea',
    slug: 'purple-tea',
    productCode: '0005',
    category: 'true-teas',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-04%20at%209.41.30%E2%80%AFPM-HFimnr9Sco4oShjL5fIs5fAB7xOmjV.png',
    benefits: [
      'High in antioxidants',
      'Supports weight management',
      'Boosts brain function',
      'Supports heart health'
    ],
    description: [
      'Purple tea is a unique variety of tea grown in Kenya known for its high anthocyanin content, which gives it its distinctive purple color and powerful antioxidant properties.',
      'Supports weight management and fat oxidation.',
      'Boosts brain function and cognitive health.',
      'Promotes heart health and healthy cholesterol levels.'
    ]
  },

  // HERBS
  {
    id: '32',
    name: 'Thyme',
    slug: 'thyme-herb',
    productCode: 'H001',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-05%20at%202.47.52%E2%80%AFPM-wHRzBNKUUPyrvOOkOgRWJpfXpbcJyy.png',
    category: 'herbs',
    description: [
      'A versatile, slightly earthy, and minty herb that blends well with other seasonings in long-cooking dishes like stews and roasts. Earthy and minty, excellent for stews, braises, and roasts.'
    ]
  },
  {
    id: '33',
    name: 'Sage',
    slug: 'sage-herb',
    productCode: 'H002',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-05%20at%202.48.04%E2%80%AFPM-6r7KLbyJsDI74BkAOjlFrJY45ciF8O.png',
    category: 'herbs',
    description: [
      'An earthy, slightly bitter, and savory herb, popular in poultry stuffings and with pork. Savory and earthy, perfect for pork, poultry, and brown butter sauces.'
    ]
  },
  {
    id: '34',
    name: 'Oregano',
    slug: 'oregano-herb',
    productCode: 'H003',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-05%20at%202.48.16%E2%80%AFPM-Ktr3hVBXuybK146lrSwb4Fu928qAXj.png',
    category: 'herbs',
    description: [
      'An earthy, robust herb essential for Italian tomato sauces, pizza, and Greek grilled meats. Robust and pungent, crucial for Italian, Greek, and Mexican dishes.'
    ]
  },
  {
    id: '35',
    name: 'Parsley',
    slug: 'parsley',
    productCode: 'H004',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-05%20at%202.48.29%E2%80%AFPM-LnHqenVonO0pMWRBo97SWbtdlJ825D.png',
    category: 'herbs',
    description: [
      'Known for its clean, bright, and slightly peppery taste, used extensively as a garnish or in sauces, salads, and stews. Fresh and grassy, ideal for garnishes.'
    ]
  },
  {
    id: '36',
    name: 'Celery',
    slug: 'celery-herb',
    productCode: 'H005',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-05%20at%202.48.44%E2%80%AFPM-CwL3j52U2TygU7RMPL5uqMrsjkELK9.png',
    category: 'herbs',
    description: [
      'Celery is a highly aromatic and versatile plant with a pungent herb. The leaves are robust, peppery, and grassy herb often used to enhance savory dishes. Celery are used in almost any dish requiring a boost of savory, herbal flavor on roasted fish, or as a garnish for soups. Celery flakes or powder to use as a seasoning.'
    ]
  },
  {
    id: '37',
    name: 'Marjoram',
    slug: 'marjoram',
    productCode: 'H006',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-05%20at%202.49.09%E2%80%AFPM-AxCM05MSf0UYjCrY4xb3yyIcfg94zc.png',
    category: 'herbs',
    description: [
      'Sweet, floral cousin to oregano, but milder. Used in cooking of meatloaves, vinaigrettes, sausages and herb-Roasted Vegetables.'
    ]
  },
  {
    id: '38',
    name: 'Coriander Leaves',
    slug: 'coriander-leaves',
    productCode: 'H007',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-05%20at%202.49.24%E2%80%AFPM-vpWJdDmR5mcId6M57SgSdJI0UAICfj.png',
    category: 'herbs',
    description: [
      'Dried coriander seeds have a warm, nutty, and slightly citrusy flavor, essential in many curry powders. Bright, citrusy, and essential for salsas and curries.'
    ]
  },
  {
    id: '39',
    name: 'Basil',
    slug: 'basil',
    productCode: 'H008',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-05%20at%202.49.36%E2%80%AFPM-LAkvenKMAWA6Juejez9m122V76ZVf0.png',
    category: 'herbs',
    description: [
      'Sweet, peppery, and slightly anise-like flavor. A staple in Mediterranean cooking, especially for pesto, tomatoes, and pasta. Aromatic and peppery, used in pesto, sauces, and salads.'
    ]
  },
  {
    id: '40',
    name: 'Onion Flakes',
    slug: 'onion-flakes',
    productCode: 'H009',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-05%20at%202.54.42%E2%80%AFPM-FFUh478CUyIB0NjY0Di7OWrW4q9VR3.png',
    category: 'herbs',
    description: [
      'Dried Onion flakes are used as a pantry staple for adding savory flavor that is robust, sweet, and slightly pungent. Soups, Stews, and Sauces: They dissolve or soften in simmering liquid, providing a rich, savory foundation. Good for Meat Mixtures, they work perfectly in meatloaf, meatballs, and hamburger patties, where they absorb meat juices. They add instant flavor to dips (like sour cream or hummus) without making them watery. Lightly toasted, they add texture to salads, pizzas, or savory breads.'
    ]
  },
  {
    id: '58',
    name: 'Dried Onion',
    slug: 'dried-onion',
    productCode: 'H012',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-05%20at%203.08.12%E2%80%AFPM-6G9x1bT4bhfJrpizQaDwdKbuf0ctgh.png',
    category: 'herbs',
    description: [
      'Dried Onion flakes: are used as a pantry staple for adding savory flavor that is robust, sweet, and slightly pungent. Soups, Stews, and Sauces: They dissolve or soften in simmering liquid, providing a rich, savory foundation. Good for Meat Mixtures, they work perfectly in meatloaf, meatballs, and hamburger patties, where they absorb meat juices. They add instant flavor to dips (like sour cream or hummus) without making them watery. Lightly toasted, they add texture to salads, pizzas, or savory breads.'
    ]
  },
  {
    id: '41',
    name: 'Stinging Nettle',
    slug: 'stinging-nettle',
    productCode: 'H010',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-05%20at%202.56.31%E2%80%AFPM-gLQOpa6aY7NnIsR8dl7CyxtN8lMFCi.png',
    category: 'herbs',
    description: [
      'Stinging nettle (Urtica dioica) is a highly nutritious, often described as an "untamed spinach", richer in nutrients, mineral-heavy having an "iron-like" flavor. Nettles can substitute for spinach or kale in almost any recipe. Nettle soup is a classic Scandinavian spring dish, creating a vibrant green, thick soup.'
    ]
  },
  {
    id: '42',
    name: 'Mint',
    slug: 'mint-herb',
    productCode: 'H011',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-05%20at%202.56.50%E2%80%AFPM-NVGHypiufcEGGbk1tuDbCcHPmzg38b.png',
    category: 'herbs',
    description: [
      'Mint is a highly aromatic and versatile perennial herb prized for its cool, refreshing sensation, which is produced by the chemical compound menthol acting on cold-sensitive receptors in the mouth. It is mild and preferred for culinary uses, peppermint is stronger with a higher menthol content. Used is globally in both sweet and savory dishes, Pairs perfectly with lamb, yogurt dressings (tzatziki/raita), salads (tabbouleh), chickpeas, peas, and root vegetables. Good in teas (Moroccan mint tea), mojitos, lemonades, and smoothies. Wonderful in chocolates, ice creams, fruit salads (especially watermelon), and in jellies. Adding near the end of cooking preserve its fresh flavor, as heat degrades its volatile oils.'
    ]
  },

  // SPICES
  {
    id: '43',
    name: 'Chili Flakes',
    slug: 'chili-flakes',
    productCode: 'S001',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-05%20at%202.57.03%E2%80%AFPM-aeemzYvCWeeDPTQaNDVeXgsQB0REL8.png',
    category: 'spices',
    description: [
      'Chilli flakes (or red pepper flakes) are a versatile spice staple made from dried and crushed hot peppers, typically cayenne-type peppers. Our chili flakes highly valued for adding a fiery, direct heat to dishes and are a staple in many cuisines. They contain both the dried skin and seeds of the pepper, with the seeds contributing significantly to the texture and heat.'
    ]
  },
  {
    id: '44',
    name: 'Chili Powder',
    slug: 'chili-powder',
    productCode: 'S002',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-05%20at%202.57.14%E2%80%AFPM-T8QtygrryG3bOp1LD8gjeNLhC4e31D.png',
    category: 'spices',
    description: [
      'Ground chili peppers, hot and tantalizing, commonly used in Tex-Mex and Indian cuisines for moderate heat and earthy flavor.'
    ]
  },
  {
    id: '45',
    name: 'Black Pepper',
    slug: 'black-pepper',
    productCode: 'S003',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-05%20at%202.57.27%E2%80%AFPM-zUfvf9KwA3ZZdxeT6tBYunNxb20ENb.png',
    category: 'spices',
    description: [
      'Adds a sharp, pungent bite to almost any savory dish. Black Pepper: Piney, spicy heat. Black pepper is the most common table spice worldwide. Used in nearly all savory dishes.'
    ]
  },
  {
    id: '46',
    name: 'Dhania Jeera Powder',
    slug: 'dhania-jeera',
    productCode: 'S004',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-05%20at%202.57.55%E2%80%AFPM-tKPowgWqxCJrg16TbXKacizjf8QNCJ.png',
    category: 'spices',
    description: [
      'Dhania Jeera powder is a mix of Coriander-Cumin powder, non-spicy spice blend widely used in Indian cuisine, particularly in Gujarati and Maharashtrian households. It is earthy and warm (from the cumin) with a slight savory citrus note (from the coriander). It is designed to be mild and complement dishes rather than make them spicy. Dhania Jeera is a versatile, everyday spice added to a wide variety of dishes to add depth, flavor, and thickness to curries, Vegetable Dishes, stuffed brinjal, and potato fry, curries, yogurt-based curries, meat, stuffing for vegetables, snacks and Snacks. A wonderful and thickening for vegetable soups, gravies, and stews.'
    ]
  },
  {
    id: '47',
    name: 'Ginger Powder',
    slug: 'ginger-powder',
    productCode: 'S005',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-05%20at%202.58.12%E2%80%AFPM-As2CO8WaqIqyCeqWJK5rbYc52eZGyX.png',
    category: 'spices',
    description: [
      'Spicy, zesty, and warming, A peppery, slightly sweet, and pungent spice often used in Asian stir-fries, baking, and teas. Cool and sweet, used in teas, yogurt sauces, and lamb and Ginger-Soy Marinated Salmon.'
    ]
  },
  {
    id: '48',
    name: 'Black Seeds',
    slug: 'black-seeds',
    productCode: 'S006',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-05%20at%202.58.28%E2%80%AFPM-1tmD83rRg5RyccbBI92hck89Jj52zf.png',
    category: 'spices',
    description: [
      'Black seeds (Nigella sativa) are known for their distinctive flavor and numerous health benefits. Often used in breads, curries, and traditional medicine.'
    ]
  },
  {
    id: '49',
    name: 'Cloves Whole',
    slug: 'cloves-whole',
    productCode: 'S007',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-05%20at%203.02.35%E2%80%AFPM-Esz0qsBqiwprrHLhDm9kWlUJ5rkB5m.png',
    category: 'spices',
    description: [
      'Cloves Whole: one of the most intense and aromatic spices in the world. Strongly aromatic, sweet, woody, and pungent. A bold blend of sweet and spicy notes with hints of astringency and heat. Cloves contain a high amount of eugenol, an essential oil that can produce a numbing sensation on the tongue if bitten into directly. Whole cloves are primarily used to infuse flavor into dishes rather than being eaten whole due to their hard, woody texture. Often added to rice dishes (pulao, biryani), curries, stews, marinades, and soups. Poked into ham, onions, or citrus fruits to add flavor to roasted meats or liquids. Essential for mulled wine, hot apple cider, and masala chai. Used in poached fruits (pears, apples), rice puddings, and spice mixes for baking. Commonly used in pickling liquids.'
    ]
  },
  {
    id: '50',
    name: 'Cloves Powder',
    slug: 'cloves-powder',
    productCode: 'S008',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-05%20at%203.02.52%E2%80%AFPM-2pjk94ILHRmqdAZo9Js2fwSO5lmLDa.png',
    category: 'spices',
    description: [
      'Aromatic, pungent, and sweet dried flower bud used in both sweet baking and savory stews or curries. Intense and sweet, common in baking and spice blends.'
    ]
  },
  {
    id: '51',
    name: 'Tea Masala',
    slug: 'tea-masala',
    productCode: 'S009',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-05%20at%203.03.13%E2%80%AFPM-EQoqAEPLSveIOFszinOgd6CFo3Otpz.png',
    category: 'spices',
    description: [
      'Tea masala is a fragrant, aromatic blend of ground spices specifically designed to be added to black tea, milk, and sugar to make Masala Chai. This spice mix typically features warm and aromatic ingredients like ginger, cardamom, cinnamon, and cloves, which not only enhance the tea\'s flavor but also provide potential health benefits like aiding digestion and boosting immunity.'
    ]
  },
  {
    id: '52',
    name: 'Pilau Masala',
    slug: 'pilau-masala',
    productCode: 'S010',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-05%20at%203.03.28%E2%80%AFPM-CqwZxmFNfwQFQJoAPDsfTQCaPvpYTh.png',
    category: 'spices',
    description: [
      'Pilau Masala is a signature, highly aromatic spice blend central to Swahili cuisine, particularly in Kenya and Tanzania. It is used to create Pilau (or Pulao), a fragrant rice dish cooked with meat or vegetables. Unlike Garam Masala, which is used for curries, Pilau Masala is specifically designed for rice dishes.'
    ]
  },
  {
    id: '53',
    name: 'Chili Seeds',
    slug: 'chili-seeds',
    productCode: 'S011',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-05%20at%203.03.59%E2%80%AFPM-7HXiW1mGBv7tywZ9akvBkpF8GMyOgJ.png',
    category: 'spices',
    description: [
      'Chilli seeds come from the Capsicum genus and are the primary source of capsaicin, the compound responsible for the heat in chili peppers. They are added to cooking to increase spiciness. Used to keep them for intense, concentrated fire. Their intensity is Spicy, fiery, and pungent, creating a burning sensation on the tongue. Flavor Notes are primarily a source of heat, some seeds can add a nutty or slightly bitter taste to dishes if used in large quantities.'
    ]
  },
  {
    id: '54',
    name: 'Fennel Seeds',
    slug: 'fennel-seeds',
    productCode: 'S012',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-05%20at%203.04.12%E2%80%AFPM-pdwTGU3eLLZHxC1Kt6zljTAyoxh5Qp.png',
    category: 'spices',
    description: [
      'Fennel seeds are the dried, aromatic fruits of the fennel plant (Foeniculum vulgare), a member of the carrot and parsley family. They are commonly used as a spice in global cuisines, offering a distinctively sweet, licorice-like flavor that is both herbal and warm. Highly fragrant and aromatic, with a pronounced licorice scent that intensifies when toasted. Fennel seeds are highly versatile, appearing in savory dishes, baking, and traditional health remedies. A staple in Italian sausages, meatballs, and pork roasts, where they complement rich fats. A key ingredient in garam masala, and often tempered in hot oil for curries, lentils, stews, and roasted root vegetables. Commonly used in bread, cookies and biscuits. Ideal for pickling brines, adding a sweet-spicy note to cucumbers and beets. Frequently chewed raw or sugar-coated after meals to aid digestion and freshen breath.'
    ]
  },
  {
    id: '55',
    name: 'Cinnamon',
    slug: 'cinnamon',
    productCode: 'S013',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-05%20at%203.04.26%E2%80%AFPM-K9HwwL4DLGwpP2awUypnu5gAUz9ffF.png',
    category: 'spices',
    description: [
      'Cinnamon (Spice): spicy-sweet flavor, essential for baking, desserts, and Middle Eastern meat dishes. Warm and sweet, used in baking and savory dishes.'
    ]
  },
  {
    id: '56',
    name: 'Coriander Seeds',
    slug: 'coriander-seeds',
    productCode: 'S014',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-05%20at%202.57.41%E2%80%AFPM-p4NWSf0Rb2Igx2IAdOLQlIpeRHUSbz.png',
    category: 'spices',
    description: [
      'Coriander Seeds (Herb): Citrusy, earthy, and warm when ground. Uses: Curry powder blends, pickling, sausages. Recipe: Moroccan Spice-Rubbed Chicken.'
    ]
  },
  {
    id: '57',
    name: 'Senna Seeds',
    slug: 'senna-seeds',
    productCode: 'S015',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-05%20at%202.50.04%E2%80%AFPM-IUbDikbZDLc0tFtn9oqR4QdJpFZCmI.png',
    category: 'spices',
    description: [
      'Senna seeds are the dried, bean-like seeds found within the pods of the senna plant, a legume known primarily for its medicinal properties. The seeds are used as a culinary ingredient. THEY are have a mild, sweet, and slightly bitter flavor. When brewed as tea, they are sometimes described as having a mild, earthy, or even nutty taste. Tea and Infusions: They are roasted and brewed as a "coffee substitute" or a health-promoting tea to aid digestion. Often brewed with cinnamon, ginger, or cloves to counteract the abdominal discomfort (griping) that laxative teas can cause.'
    ]
  }
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug)
}

export function getProductsByCategory(category: Product['category']): Product[] {
  return products.filter(product => product.category === category)
}

export const categories = [
  { id: 'healing-teas', name: 'Healing Teas' },
  { id: 'fruit-teas', name: 'Fruit Teas' },
  { id: 'true-teas', name: 'True Teas' },
  { id: 'herbs', name: 'Herbs' },
  { id: 'spices', name: 'Spices' }
] satisfies { id: Product['category']; name: string }[]
