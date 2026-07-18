# GPT Image scientific visual set

ภาพฐานสร้างด้วย built-in Imagegen ใน use case `scientific-educational` สำหรับ hero อัตราส่วน 16:9 แล้วใช้ HTML/SVG วางคำกำกับ ลูกศร legend และคำอธิบายที่ต้องตรงตัวอักษร ภาพสังเคราะห์ไม่ใช้แทนแผนที่ ข้อมูลวัด ภาพดาวเทียม หรือหลักฐานสถานที่จริง

## Shared prompt constraints

```text
Style: premium natural-history museum editorial realism with scientific visualization clarity
Constraints: physically plausible process and landforms; no text; no labels; no logo; no watermark
Avoid: fantasy geography, neon colors, generic travel postcard, unrelated disaster spectacle
```

## Assets

- `himalaya.webp`: continental collision, folded strata, uplift, glacier headwaters; explicitly excludes oceanic subduction and volcanoes.
- `andes.webp`: Nazca plate subduction beneath South America, trench, magma generation and continental volcanic arc.
- `amazon.webp`: meandering river, oxbow lakes, várzea and seasonal flood-pulse connectivity.
- `thai-monsoon.webp`: southwest monsoon moisture, orographic rain, wet rice plains and downstream river networks.
- `glacial-system.webp`: accumulation zone, glacier tongue, U-shaped valley, moraines and meltwater.
- `arid-aeolian.webp`: barchan dunes, slip faces, saltation, desert pavement and yardangs with one coherent wind direction.
- `coastal-process.webp`: wave refraction, cliff erosion, beach transport, spit and sheltered lagoon.
- `groundwater-aquifer.webp`: infiltration, water table, confined aquifer, artesian pressure, river exchange and pumping cone.
- `ocean-circulation.webp`: surface gyre, upwelling, polar sinking and deep-ocean return circulation.
- `coral-mangrove.webp`: mangrove, seagrass, reef crest, sediment trapping and connected nursery habitats.
- `earthquake-fault.webp`: offset stream, strike-slip fault, hypocenter and seismic wave fronts; explicitly excludes lava.
- `tropical-cyclone.webp`: eye, eyewall, rainbands and surge setup with meteorologically plausible Northern Hemisphere rotation.
- `biome-gradient.webp`: altitude, temperature and moisture controlled biome transition and ecotone.
- `urban-climate.webp`: heat island, cool park-river corridor and sea-breeze ventilation through urban form.
- `terrace-agriculture.webp`: watershed, contour terraces, gravity irrigation and sediment-retaining walls.
- `rock-cycle.webp`: magma, igneous rock, weathering, sediment, lithification, metamorphism and melting in one continuous crustal system.
- `weathering-erosion.webp`: connected source-to-sink journey from weathering and hillslope erosion to river transport, delta and coast.
- `water-atmosphere-cycle.webp`: ocean evaporation, atmospheric moisture, orographic rain, infiltration, groundwater, runoff and return flow.

`visual-manifest.js` เป็นแหล่งเดียวสำหรับการจับคู่ภาพ บทเรียนที่มีแผนเฉพาะจะแสดงสถานะ “ภาพอธิบายตรงหัวข้อ” ส่วนบทเรียนที่ยังไม่มีภาพเฉพาะจะแสดง “ภาพบริบทของหมวด” พร้อมข้อจำกัด และไม่ดึงภาพอื่นมาเป็นหลักฐานรองโดยอัตโนมัติ

## Prompt compiler order

ทุกภาพใหม่ต้องเรียงข้อกำหนดตามลำดับนี้

1. Purpose และผู้เรียนเป้าหมาย
2. ข้อเท็จจริงและความสัมพันธ์ทางวิทยาศาสตร์ที่ต้องเห็น
3. มุมมอง ทิศทาง มาตราส่วนพื้นที่และเวลา
4. องค์ประกอบที่ต้องมี และข้อผิดพลาดที่ห้ามเกิด
5. พื้นที่ว่างสำหรับคำกำกับ HTML/SVG
6. รูปแบบภาพ สี และข้อกำหนด output

ข้อความ ตัวเลข หน่วย พิกัด เส้นเขตแดน scale bar และ legend ที่เป็นข้อมูล authoritative ต้องสร้างด้วย code หรือข้อมูล GIS ไม่ให้โมเดลวาดลงใน raster

## Pilot: plate-boundary-types-gpt-v1.webp

- Path: `assets/ai/plate-boundary-types-gpt-v1.webp`
- Generated: 2026-07-17, built-in Imagegen, model snapshot not exposed
- Size: 1280×720 WebP, quality 84; generated source 1672×941 PNG
- Visual role: scientific-educational process triptych
- QA status: editorial pilot, needs expert geology and accessibility review before claiming final approval
- Required relationships: divergent oceanic ridge; oceanic-continental subduction with trench, dipping slab and inland volcanic arc; transform motion with shallow earthquake foci and no magma
- Deterministic overlay: three Thai explanation blocks are rendered from `visual-manifest.js`
- Limitation: conceptual comparison, not to scale

Final prompt:

```text
Use case: scientific-educational
Asset type: textbook atlas process illustration for a Thai high-school and introductory university geography lesson
Primary request: create one scientifically accurate 16:9 triptych explaining the three plate-boundary mechanisms as three clearly separated equal-width scenes, with no written labels
Scene/backdrop: clean neutral museum-atlas background; each scene uses the same simplified Earth-crust visual language
Subject: left scene shows a divergent oceanic boundary with two oceanic plates moving apart, a central mid-ocean ridge, symmetrical newly formed basaltic crust, and restrained magma upwelling; center scene shows an oceanic plate subducting beneath a continental plate, a deep-ocean trench, a dipping slab, a volcanic arc inland above the slab, and a restrained sequence of earthquake foci along the slab; right scene shows a transform boundary in oblique top-down view with two crustal blocks sliding horizontally past each other, an offset stream or ridge, and shallow earthquake foci, with no magma and no volcano
Style/medium: premium natural-history museum scientific illustration, realistic materials with diagram clarity, restrained editorial atlas aesthetic
Composition/framing: landscape 16:9, three distinct panels separated by narrow neutral gutters, consistent scale and horizon, generous clear areas for HTML callout overlays outside the image
Color palette: natural basalt charcoal, continental earth browns, ocean blue, restrained warm orange only for magma, subtle gold earthquake points
Constraints: physically plausible geology; each panel must depict only its own boundary mechanism; subdued non-sensational volcano in the subduction panel; no impossible exposed mantle cavity; no decorative fantasy; no people; no buildings; no map borders
Text: no text, no letters, no numbers, no legend, no watermark
Avoid: giant eruptive spectacle, lava in the transform panel, volcano in the transform panel, continental collision in the divergent panel, duplicated objects, merged panels, neon colors, poster typography
```

Targeted correction:

```text
Change only the rightmost transform-boundary panel so that every gold earthquake focus is shallow and confined to a narrow vertical fault zone entirely within the brittle upper crust. Remove all deeper gold earthquake points. Preserve the divergent and subduction panels exactly, and preserve composition, arrows, terrain, lighting, and color.
```

Annotated image edit:

```text
Use case: precise-object-edit
Input images: the approved three-panel plate-boundary base image
Primary request: add concise Thai textbook explanations inside the existing white top and bottom margin bands. Change only the typography and preserve every geology panel, arrow, gutter, color, crop, and scientific relationship exactly.
Top headings (verbatim): "1 แยกออก", "2 ชนและมุดตัว", "3 เลื่อนผ่านกัน"
Bottom descriptions (verbatim): "แผ่นแยกออก แมกมาสร้างเปลือกโลกใหม่", "แผ่นมหาสมุทรมุดใต้ทวีป เกิดร่องลึกและภูเขาไฟ", "แผ่นเลื่อนสวนกัน เกิดแผ่นดินไหวตื้น ไม่มีภูเขาไฟ"
Typography: highly legible Noto Sans Thai-like font; bold dark navy headings; regular dark charcoal descriptions; consistent baseline and padding.
Constraints: render every Thai phrase exactly once and verbatim; no extra text; do not place text over the geology artwork; do not alter the scientific image content.
```

Final annotated asset:

- Path: `assets/ai/plate-boundary-types-gpt-annotated-v1.webp`
- Size: 1280×720 WebP, quality 88; generated source 1672×941 PNG
- Text QA: all three headings and descriptions match the approved Thai copy
- Accessibility: the same explanations remain available as HTML text below the figure

## Pilot: groundwater-aquifer-annotated-v1.webp

- Path: `assets/ai/groundwater-aquifer-annotated-v1.webp`
- Generated: 2026-07-17, built-in Imagegen, model snapshot not exposed
- Size: 1672×941 WebP, quality 90
- Visual role: annotated scientific cross-section for hydrology and natural-resources lessons
- QA status: editorial pilot; scientific relationships checked against USGS Water Science School, still needs independent expert sign-off
- Required relationships: recharge through the unsaturated zone; water table as the top of the saturated zone; flow from upland toward river; unconfined aquifer above a confining layer; confined aquifer below; pumping well completed only in the unconfined aquifer with a local cone of depression
- Limitation: conceptual model, not to scale

Final generation prompt:

```text
Use case: scientific-educational
Asset type: ภาพประกอบ atlas ระดับ textbook สำหรับบทชั้นหินอุ้มน้ำ
Primary request: สร้างภาพตัดขวางภูมิประเทศจากพื้นที่สูงที่มีฝน ไปยังที่ราบและแม่น้ำ แสดงระบบน้ำใต้ดินอย่างถูกต้องตามหลักอุทกธรณีวิทยา เปรียบเทียบชั้นหินอุ้มน้ำไร้แรงดันกับชั้นหินอุ้มน้ำมีแรงดัน และแสดงผลของบ่อสูบน้ำ
Scene/backdrop: พื้นหลังสีอ่อนสะอาดแบบหน้าหนังสือเรียน ภูมิประเทศกึ่งสมจริงเหนือดินและชั้นตะกอน/หินแบบแผนภาพด้านล่าง
Subject: ฝนซึมลงในเขตเติมน้ำ ผ่านเขตไม่อิ่มตัวถึงระดับน้ำใต้ดิน; ใต้ระดับน้ำใต้ดินเป็นเขตอิ่มตัวในวัสดุพรุน; ระดับน้ำใต้ดินลาดจากพื้นที่สูงไปหาแม่น้ำ; ชั้นกั้นน้ำคั่นชั้นหินอุ้มน้ำมีแรงดัน; บ่อสูบน้ำตัดชั้นหินอุ้มน้ำและมีกรวยลดระดับน้ำใต้ดินเล็กน้อยรอบบ่อ; ลูกศรแสดงการไหลช้าไปสู่แม่น้ำและบ่อ
Style/medium: ภาพประกอบวิทยาศาสตร์แบบ atlas ร่วมสมัย กึ่งสมจริงแต่เส้นขอบและลูกศรชัด สีแยกชั้นอย่างเป็นระบบ ไม่ใช่ภาพถ่าย
Composition/framing: 16:9 แนวนอน แบ่งพื้นที่ภาพบน 60% สำหรับหน้าตัด และแถบคำอธิบายล่าง 40% มีเส้น callout ไม่ทับกัน ตัวอักษรใหญ่ อ่านได้บนจอมือถือ
Text (verbatim): "ชั้นหินอุ้มน้ำและการไหลของน้ำใต้ดิน"; "เขตเติมน้ำ"; "เขตไม่อิ่มตัว"; "ระดับน้ำใต้ดิน"; "ชั้นหินอุ้มน้ำไร้แรงดัน"; "ชั้นกั้นน้ำ"; "ชั้นหินอุ้มน้ำมีแรงดัน"; "บ่อน้ำ"; "แม่น้ำ"; "ฝนซึมลงเติมน้ำในช่องว่างของดินและหิน"; "น้ำใต้ดินไหลช้า จากพื้นที่สูงไปยังแม่น้ำและบ่อน้ำ"; "สูบน้ำเร็วเกินการเติมกลับ ทำให้ระดับน้ำใต้ดินลดลง"
Typography: ภาษาไทย sans-serif ชัดเจน น้ำหนักต่างกันตามลำดับชั้น เขียนข้อความทุกบรรทัดตรงตามที่กำหนดแบบ verbatim ห้ามเพิ่มหรือลดตัวอักษร
Scientific constraints: ระดับน้ำใต้ดินต้องเป็นขอบบนของเขตอิ่มตัว; ชั้นหินอุ้มน้ำคือวัสดุพรุน/แตกร้าวที่เก็บและส่งผ่านน้ำ ไม่ใช่โพรงน้ำขนาดใหญ่; น้ำใต้ดินไหลตามความต่างศักย์จากพื้นที่สูงสู่ต่ำ; ชั้นกั้นน้ำซึมผ่านได้น้อย; การสูบน้ำแสดง cone of depression อย่างสมเหตุผล; ระบุว่าเป็นภาพจำลองไม่ตามมาตราส่วน
Avoid: แม่น้ำใต้ดินเป็นอุโมงค์กว้าง, น้ำเป็นทะเลสาบว่างเปล่าในชั้นหิน, ลูกศรสวนทาง, ชั้นหินตัดกันผิดธรรมชาติ, ป้ายผิดตำแหน่ง, ตัวเลขที่แต่งขึ้น, ข้อความอื่นนอกเหนือจากที่กำหนด, โลโก้, watermark
```

Targeted scientific correction:

```text
Change only the central pumping well. Shorten the casing and screen so the well terminates entirely inside the unconfined aquifer above the confining layer. Keep the cone of depression connected to the unconfined water table. Do not let the well cross the confining layer or receive water from both aquifers. Preserve every Thai label, explanation, layer, arrow, and layout exactly.
```

## Pilot: ocean-circulation-annotated-v1.webp

- Path: `assets/ai/ocean-circulation-annotated-v1.webp`
- Generated: 2026-07-17, built-in Imagegen, model snapshot not exposed
- Size: 1672×941 WebP, quality 90
- Visual role: annotated comparison of wind-driven surface circulation and density-related deep circulation
- QA status: editorial pilot checked against NOAA educational references; still needs independent oceanographer sign-off
- Required relationships: wind drives near-surface flow; temperature and salinity affect density; colder saltier water can sink; deep return and gradual upwelling connect the system without implying one closed pipe
- Limitation: conceptual cross-section, not a route map or scale drawing

Final generation prompt:

```text
Use case: scientific-educational
Asset type: ภาพประกอบ atlas ระดับ textbook สำหรับบทสมุทรศาสตร์
Primary request: สร้างภาพตัดขวางเชิงแนวคิดเปรียบเทียบการหมุนเวียนน้ำผิวกับการไหลเวียนน้ำลึก ตั้งแต่ทะเลอุ่นละติจูดต่ำไปยังทะเลหนาวใกล้ขั้วโลก แสดงว่ากลไกสองส่วนสัมพันธ์กันแต่ไม่ใช่แรงขับชนิดเดียวกัน
Subject: ลูกศรสีส้มใกล้ผิวแสดงกระแสน้ำผิวที่ลมขับ; บริเวณหนาวแสดงน้ำเย็นเค็มหนาแน่นขึ้นและจม; ลูกศรสีน้ำเงินแสดงการไหลลึกและน้ำผุดขึ้นอย่างค่อยเป็นค่อยไป
Style/medium: ภาพวิทยาศาสตร์แบบ atlas ร่วมสมัย กึ่งสมจริงแต่ diagram clarity สูง
Composition/framing: 16:9 แนวนอน ส่วนแผนภาพหลักด้านบนและแถบคำอธิบายสามช่องด้านล่าง ตัวอักษรใหญ่สำหรับจอมือถือ
Text (verbatim): "การหมุนเวียนน้ำผิวและน้ำลึก"; "ลม"; "กระแสน้ำผิว"; "น้ำอุ่น"; "น้ำเย็นและเค็ม"; "จมตัว"; "กระแสน้ำลึก"; "น้ำผุดขึ้น"; "ลมขับกระแสน้ำใกล้ผิว"; "อุณหภูมิและความเค็มเปลี่ยนความหนาแน่นของน้ำ"; "น้ำหนาแน่นจมและเชื่อมการไหลลึกทั่วมหาสมุทร"; "ภาพจำลอง ไม่ใช่เส้นทางจริงหรือมาตราส่วนจริง"
Scientific constraints: แยกแรงขับผิวกับลึก; น้ำแข็งทะเลทำให้เกลือส่วนใหญ่คงในน้ำรอบข้าง; circulation จริงยังขึ้นกับการหมุนโลก ทวีป และก้นสมุทร
Avoid: ท่อ conveyor เส้นเดียวปิดสนิท, บอกว่าลมขับน้ำลึกทั้งหมด, salt shaker, น้ำผุดเป็นน้ำพุแรง, แผนที่เส้นทางที่แต่งขึ้น, ตัวเลขไม่มีแหล่ง, โลโก้, watermark
```

Targeted scientific correction:

```text
Change only the small icon in the center lower explanation card. Remove the salt shaker and replace it with a thermometer, seawater, and newly forming sea ice with salt remaining in the surrounding water. Preserve all Thai text, arrows, labels, layout, and other artwork exactly.
```

## Approved correction: ocean-circulation-annotated-v2.webp

- Path: `assets/ai/ocean-circulation-annotated-v2.webp`
- Final QA: PASS by the hydrology–oceanography review agent
- Generation mode: built-in Imagegen, precise-object edit from v1

```text
Use the supplied image as the exact base. Preserve its 16:9 textbook-atlas composition and correct only the scientific relationships. Add "สูญเสียความร้อน" above the polar surface. Replace the sea-ice mechanism with "การเกิดน้ำแข็งทะเลปล่อยเกลือกลับสู่น้ำ". Show the explicit sequence "น้ำเย็นและเค็ม" → "ความหนาแน่นเพิ่มขึ้น" → "จมตัว". State that sinking occurs in suitable regions and connects to deep circulation. State that near-surface water is driven by wind, while Earth's rotation and basin shape help determine direction. State that upwelling can result from wind, divergence, and mixing. End with "ภาพจำลองเชิงกลไก ไม่ใช่เส้นทางจริงหรือมาตราส่วนจริง". Keep Thai text legible and do not add a closed conveyor pipe, fabricated route, number, logo, or watermark.
```

## Approved correction: groundwater-aquifer-annotated-v3.webp

- Path: `assets/ai/groundwater-aquifer-annotated-v3.webp`
- Final QA: PASS by the human–resources review agent after hydrologic arrow correction
- Generation mode: built-in Imagegen, iterative precise-object edit from v1

```text
Use the supplied image as the exact base. Change "บ่อน้ำ" to "บ่อสูบน้ำ". Add the process strip "การเติมน้ำ → การกักเก็บ → การไหลออกสู่แม่น้ำ" with "การสูบ" as a separate outlet. Keep the well entirely in the unconfined aquifer above the confining layer. Separate local pumping capture from natural river discharge with "จุดแบ่งการไหล": arrows between the well and this marker point toward the well, while arrows beyond it point toward the river. Do not overlap opposite directions. Use the limitation "ภาพจำลอง ไม่ตามมาตราส่วน และอัตราการไหลต่างกันตามชั้นหิน". Preserve all other approved Thai labels and artwork; no extra text or watermark.
```

## Approved correction: soil-formation-horizons-annotated-v2.webp

- Path: `assets/ai/soil-formation-horizons-annotated-v2.webp`
- Final QA: PASS by the human–resources review agent
- Generation mode: built-in Imagegen, precise-object edit from v1

```text
Use the supplied image as the exact base. Change the subheading to "ตัวอย่างหน้าตัดดินแบบหนึ่ง" and the caution to "ดินไม่ได้มีชั้น O–A–E–B–C–R ครบทุกแห่ง". Replace the outer cycle with five separate arrows from วัสดุต้นกำเนิด, ภูมิอากาศ, ภูมิประเทศ, เวลา, and สิ่งมีชีวิตและมนุษย์ toward the central soil. Show a continuous vertical transfer from E into B with "การชะออกจากชั้น E" and "การสะสมในชั้น B". Use "น้ำชะล้างวัสดุจากชั้นบน และพาบางส่วนไปสะสมในชั้นล่าง" and add "ชนิดและกระบวนการของชั้น B ต่างกันตามดิน". Preserve "ภาพจำลอง ไม่ตามมาตราส่วน" and every other approved label. No extra text or watermark.
```

## Deterministic scientific fallback: earth-layers-th.svg

- Path: `assets/diagrams/earth-layers-th.svg`
- Mode: deterministic SVG, selected after GPT seismic-ray variants failed geometry review
- Locked copy: `เปลือกโลก`, `เนื้อโลก`, `แก่นโลกชั้นนอก (ของเหลว)`, `แก่นโลกชั้นใน (ของแข็ง)`, `ภาพจำลอง ไม่ตามมาตราส่วน`
- Rule: seismic ray paths and shadow zones must be produced as separately testable vector geometry; they must not be inferred from decorative raster artwork.

## Deterministic production: earth-differentiation-th.svg

- Path: `assets/diagrams/earth-differentiation-th.svg`
- Mode: deterministic SVG because process order and arrow direction are scientific topology
- Locked relation: โลกยุคแรกร้อนและวัสดุเคลื่อนตัวได้ → โลหะหนาแน่นจม → ซิลิเกตเบากว่าอยู่ชั้นนอก → แก่นโลก เนื้อโลก และเปลือกโลก
- Avoid: โลหะก้อนเดียวจม, ตัวเลขเวลาแต่งขึ้น, การอ้างว่าสนามแม่เหล็กเกิดจากการแยกชั้นโดยตรง

## Deterministic production: water-cycle-budget-th.svg

- Path: `assets/diagrams/water-cycle-budget-th.svg`
- Mode: deterministic SVG because boundary, equation, stock–flow topology, arrow type, and accounting period must be testable
- Locked equation: `P = ET + Q + ΔS`
- Locked distinction: `การซึม ≠ การเติมน้ำใต้ดิน`
- Assumption: ลุ่มน้ำสมมติ ช่วงเวลา 1 ปี ไม่รวมการผันน้ำข้ามลุ่ม และสมการเป็นยอดรวมตลอดช่วงเวลา ไม่ได้หมายความว่าทุก flux สมดุลทันที

## Deterministic production: resource-types-th.svg

- Path: `assets/diagrams/resource-types-th.svg`
- Mode: deterministic SVG because classification, rates, and comparison relationships must be exact
- Locked relation: ธรรมชาติสร้างหรือสะสม stock และ flow; ความต้องการและเทคโนโลยีเปลี่ยนสถานะสิ่งหนึ่งให้เป็นทรัพยากร; อัตราใช้ต้องอ่านเทียบอัตราฟื้นตัว
- Avoid: หมุนเวียน = ไม่มีวันหมด, ใช้ราคาตลาดเป็นคุณค่าทั้งหมด, ปริมาณรวม = พร้อมใช้

## Deterministic production: earth-two-classifications-th.svg

- Path: `assets/diagrams/earth-two-classifications-th.svg`
- Locked comparison: `แบ่งตามองค์ประกอบ` เทียบกับ `แบ่งตามสมบัติเชิงกล`
- Locked misconceptions: `เปลือกโลกไม่ใช่ธรณีภาค`; `เปลือกมหาสมุทร ≠ ธรณีภาคมหาสมุทร`; `เนื้อโลกส่วนใหญ่เป็นหินของแข็งที่ไหลช้ามาก`
- Geometry rule: ใช้วงตัดขนาดเท่ากันและเส้นเทียบความลึกเชิงแนวคิดโดยไม่แต่งตัวเลข

## Deterministic production: continental-drift-evidence-th.svg

- Path: `assets/diagrams/continental-drift-evidence-th.svg`
- Locked evidence: แนวขอบไหล่ทวีป, ซากดึกดำบรรพ์, แนวหินและเทือกเขา, ร่องรอยภูมิอากาศโบราณ
- Rule: รวมหลักฐานหลายสายเป็นข้ออนุมานเดียว; ห้ามใช้รูปร่างชายฝั่งเพียงอย่างเดียว
- Limitation: silhouettes เป็น schematic ไม่ใช่แผนที่พิกัดหรือ paleogeographic reconstruction เชิงปริมาณ

## Deterministic production: enso-three-states-th.svg

- Path: `assets/diagrams/enso-three-states-th.svg`
- Locked panels: `ภาวะปกติ`, `เอลนีโญ`, `ลานีญา`
- Locked variables: ลมค้า, น้ำอุ่น, เทอร์โมไคลน์, น้ำผุด, บริเวณฝนมาก
- Rule: ทั้งสามแผงใช้ทิศและมาตราส่วนเดียวกัน; ผลกระทบภูมิภาคเป็นการเปลี่ยนความน่าจะเป็น ไม่ใช่ผลแน่นอนทุกเหตุการณ์

## Deterministic production: physical-region-criteria-th.svg

- Path: `assets/diagrams/physical-region-criteria-th.svg`
- Locked layers: ธรณี–ภูมิประเทศ, ลุ่มน้ำ, ภูมิอากาศ, พืชพรรณ
- Rule: แสดงขอบเขตความเชื่อมั่นสูง ปานกลาง และเขตเปลี่ยนผ่านด้วยสีร่วมกับลวดลายและรูปแบบเส้น
- Limitation: synthetic map ไม่มีพิกัด ระบบฉาย หรือปีข้อมูลจริง และเส้นการเมืองไม่ใช้สร้างขอบเขตธรรมชาติ

## Deterministic production: global-supply-chain-th.svg

- Path: `assets/diagrams/global-supply-chain-th.svg`
- Locked structure: upstream–midstream–downstream, ผู้ขายหลายชั้น, วัตถุดิบ, ชิ้นส่วน, สินค้า, ข้อมูล, เงิน, การคืนกลับ และผลกระทบแฝง
- Risk layer: สินค้าคงคลัง, lead time, จุดคอขวด, ความเสี่ยงกระจุกตัว และการกระจายผู้ขาย
- Avoid: เส้นทางสั้นหรือการย้ายฐาน = ยืดหยุ่นกว่าเสมอ; เส้นในภาพ = เส้นทางขนส่งจริง

## Deterministic production: seismic-evidence-th.svg

- Path: `assets/diagrams/seismic-evidence-th.svg`
- Locked logic: P ผ่านของแข็งและของเหลว; S ผ่านได้เฉพาะของแข็ง; เส้นทางหักเหและเขตเงาใช้อนุมานแก่นโลกชั้นนอกของเหลวและแก่นโลกชั้นในของแข็ง
- Geometry rule: ray paths และ shadow zones ต้องสมมาตร ไม่มีสถานีในเขตเงา ไม่มีหัวลูกศรย้อน และไม่ใส่มุมที่ไม่ได้ล็อกจากแหล่ง

## Deterministic production: atmosphere-composition-th.svg

- Path: `assets/diagrams/atmosphere-composition-th.svg`
- Locked dry-air proportions: N₂ ประมาณ 78%, O₂ ประมาณ 21%, Ar ประมาณ 0.9%, ก๊าซร่องรอยรวมทั้ง CO₂
- Rule: ไอน้ำและละอองลอยแสดงแยกเพราะแปรผัน; ห้ามทำ pie รวมไอน้ำเป็นค่าคงที่หรือขยาย CO₂ ใกล้ O₂ โดยไม่ระบุว่าไม่ตามสัดส่วน

## Deterministic production: atmosphere-layers-th.svg

- Path: `assets/diagrams/atmosphere-layers-th.svg`
- Locked layers: โทรโพสเฟียร์, สตราโตสเฟียร์, มีโซสเฟียร์, เทอร์โมสเฟียร์, เอกโซสเฟียร์
- Rule: แบ่งตามแนวโน้มอุณหภูมิที่สลับทิศ; ชั้นโอโซนเป็นบริเวณไล่ระดับในสตราโตสเฟียร์; ขอบชั้นไม่ใช่กำแพงคม; แกนเหนือ 85 กม. ต้องระบุว่าถูกย่อ

## Deterministic production: tides-mechanism-th.svg

- Path: `assets/diagrams/tides-mechanism-th.svg`
- Locked sections: กลไกโลก–ดวงจันทร์, น้ำเกิด–น้ำตาย, รูปแบบวันละครั้ง/วันละสองครั้ง/แบบผสม
- Rule: แสดงป่องน้ำสองด้านในแบบอุดมคติ; `spring tide` ไม่ใช่ฤดูใบไม้ผลิ; กราฟ schematic ไม่ใช่ข้อมูลหรือคำพยากรณ์สถานี

## Deterministic production: seafloor-spreading-evidence-th.svg

- Path: `assets/diagrams/seafloor-spreading-evidence-th.svg`
- Locked evidence: แถบแม่เหล็กสมมาตร, อายุพื้นสมุทรเพิ่มออกจากสันเขา, ตะกอนหนาขึ้นออกด้านข้าง, เปลือกใหม่ที่สันเขา และการหมุนเวียนกลับที่เขตมุดตัว
- Avoid: แมกมาดันแผ่นเป็นกลไกเดียว; การสร้างเปลือกใหม่ทำให้โลกขยายตัว

## Deterministic production: rain-infiltration-runoff-th.svg

- Path: `assets/diagrams/rain-infiltration-runoff-th.svg`
- Locked comparison: ฝนเหตุการณ์เดียวกันบน `พื้นที่ซึมได้และยังไม่อิ่มน้ำ`, `ดินบางส่วนอิ่มน้ำ`, และ `เมืองที่มีผิวทึบน้ำ`
- Locked mechanisms: interception, depression storage, infiltration, saturation-excess runoff และ infiltration-excess runoff
- Avoid: ฝนทุกหยดกลายเป็นน้ำไหลบ่า, การซึมเท่ากับ recharge ทันที, ตัวเลขปริมาณที่ไม่มีข้อมูลอ้างอิง

## Approved generation: glacial-system-annotated-v2.webp

- Path: `assets/ai/glacial-system-annotated-v2.webp`
- Generation mode: built-in Imagegen, new scientific-educational raster followed by precise-object edits
- Final QA: PASS by the geology review agent

```text
Create a 16:9 Thai textbook-atlas illustration of a valley glacier. Show and label exactly: "เขตสะสม", "เส้นสมดุล", "เขตสูญเสีย", "ทิศการไหล", "หุบเขารูปตัวยู", "ร่องขูด", "มอเรน", and "น้ำละลาย". The equilibrium line must cross the glacier above a clearly shaded lower ablation zone; downslope arrows must continue toward the terminus. Show polished striated bedrock, lateral/terminal debris, and meltwater. Include the exact summary: "ธารน้ำแข็งไหลจากเขตสะสมสู่เขตสูญเสีย กัดหุบเขาและทิ้งตะกอน". Title: "ธารน้ำแข็งและเขตหนาว". Limitation: "ภาพจำลอง ไม่ตามมาตราส่วน". Avoid a V-shaped main valley, uphill arrows, an equilibrium line at the terminus, fabricated numbers, English labels, logos, and watermarks.
```

## Deterministic production: earth-energy-budget-th.svg

- Path: `assets/diagrams/earth-energy-budget-th.svg`
- Locked boundary: สมดุลที่ระดับบนบรรยากาศ; คลื่นสั้นเข้า = สะท้อนกลับ + คลื่นยาวออก
- Rule: แยกฟลักซ์ออกจากแหล่งกักเก็บและการแลกเปลี่ยนภายใน; เรือนกระจกคือการดูดกลืน–แผ่รังสี ไม่ใช่ชั้นกระจกทึบ
- Data rule: ไม่ใส่ค่าร้อยละหรือวัตต์เมื่อไม่ได้ใช้ dataset เดียวกัน

## Deterministic production: karst-landforms-th.svg

- Path: `assets/diagrams/karst-landforms-th.svg`
- Locked system: หินปูน + รอยแตก + การละลาย + หลุมยุบ + ถ้ำ + หินงอกหินย้อย + เครือข่ายทางไหล + น้ำพุคาร์สต์
- Avoid: ชั้นหินอุ้มน้ำคาร์สต์เป็นอุโมงค์แม่น้ำเส้นเดียวทั้งหมด; น้ำผ่านการกรองสมบูรณ์ก่อนถึงใต้ดิน

## Deterministic production: hydrograph-response-th.svg

- Path: `assets/diagrams/hydrograph-response-th.svg`
- Locked comparison: ลุ่มน้ำซึมได้เทียบเมืองทึบน้ำใต้ฝนเหตุการณ์เดียวกัน บนแกนเวลาเดียวกันและสเกล Q เดียวกัน
- Locked labels: ไฮเอโทกราฟฝน, ไฮโดรกราฟอัตราการไหล, น้ำท่าฐาน, แขนขาขึ้น, ยอดอัตราการไหล, แขนขาลง, เวลาหน่วง
- Avoid: ใช้แกนฝนกับ Q เป็นแกนเดียว; ให้ peak discharge ตรงกับฝนสูงสุดเสมอ; ใส่ตัวเลขที่ไม่มีข้อมูลวัด

## Deterministic production: temperature-inversion-th.svg

- Path: `assets/diagrams/temperature-inversion-th.svg`
- Locked comparison: โปรไฟล์ภาวะปกติเทียบชั้นกลับตัวจากการแผ่รังสีในแอ่งเมือง โดยใช้แกนความสูง–อุณหภูมิแบบเดียวกัน
- Locked mechanism: อากาศเย็นค้างใกล้พื้น + ชั้นอุ่นด้านบน → ชั้นเสถียร → การผสมแนวดิ่งลดลง → มลพิษสะสมได้; การกลับตัวไม่ใช่แหล่งกำเนิดมลพิษ
- Taxonomy rule: แยก radiation/nocturnal, subsidence และ frontal inversion; ห้ามรวมเป็นกลไกเดียว

## Deterministic production: wave-generation-breaking-th.svg

- Path: `assets/diagrams/wave-generation-breaking-th.svg`
- Locked sequence: ลมถ่ายเทพลังงาน → คลื่นเดินทางและอนุภาคแกว่งเป็นวง → น้ำตื้นทำให้ความเร็วและความยาวคลื่นลด ความสูงและความชันเพิ่ม → คลื่นแตก
- Locked controls: ความเร็วลม + fetch + duration; ชนิดคลื่นแตกคือ spilling, plunging และ surging
- Avoid: น้ำทั้งมวลเดินทางพร้อมยอดคลื่น; ความลาดเป็นตัวกำหนดชนิดคลื่นแตกเพียงปัจจัยเดียว; ตัวเลขคลื่นที่ไม่มีข้อมูลวัด

## Deterministic production: mass-movement-types-th.svg

- Path: `assets/diagrams/mass-movement-types-th.svg`
- Locked mechanics: แรงขับเทียบความต้านทาน, บทบาทแรงดันน้ำในช่องว่าง, ส่วนหัว–หน้าผารอยเลื่อน–ปลายมวล และผิวการเคลื่อน
- Locked examples: หินร่วง (fall), การเลื่อนแบบระนาบ (translational slide), สลัมป์ซึ่งเป็นการเลื่อนแบบหมุน (rotational slide), การไหล (flow) และการคืบ (creep) พร้อมความเร็วสัมพัทธ์และหลักฐานสังเกต
- Rule: แยก susceptibility จาก trigger; เหตุการณ์จริงอาจเปลี่ยนชนิดหรือมีหลายกลไกร่วมกัน
