# Next batch P0: hydrology–climate–ocean visual briefs

สถานะ: prompt-ready draft สำหรับ science review  
ขอบเขต: 3 หัวข้อ P0 ที่ยังไม่มี direct visual ใน `visual-manifest.js`  
หลักการ: ล็อกชื่อ ป้าย และคำอธิบายภาษาไทยก่อนผลิต แยก GPT base-art ออกจาก geometry/data/annotation ที่ต้องตรวจสอบได้

## การเลือกและลำดับผลิต

| ลำดับ | ชื่อหัวข้อภาษาไทยแบบ exact | สถานะในโครงบทเรียน | เหตุผลที่เป็น P0 | วิธีผลิตหลัก |
|---|---|---|---|---|
| 1 | `วัฏจักรน้ำและงบน้ำ` | หัวข้อ prerequisite ที่ audit เสนอเพิ่ม; ยังไม่มี lesson/direct plan | เป็นกฎอนุรักษ์ที่ต้องมาก่อน runoff, groundwater, flood/drought และ water quality; แก้ภาพจำว่าวัฏจักรน้ำเป็นลูกศรวงกลมที่น้ำกลับมาทันที | `hybrid`: deterministic SVG เป็นแกน; GPT ใช้ได้เฉพาะ base-art ไร้ข้อความ |
| 2 | `เอลนีโญและลานีญา` | มีใน catalog และ `climate-ocean.json`; ยังไม่มี direct plan | เป็นระบบมหาสมุทร–บรรยากาศร่วมกัน ไม่ใช่ “น้ำอุ่นอย่างเดียว”; เชื่อมลมค้า น้ำผุด เทอร์โมไคลน์ ฝน และผลเชื่อมโยงระยะไกล | `hybrid`: deterministic section + GIS/data เฉพาะเมื่อมี dataset; GPT เป็น texture เท่านั้น |
| 3 | `น้ำขึ้นน้ำลง` | มีใน catalog และ `climate-ocean.json`; ยังไม่มี direct plan | เป็น prerequisite ของชายฝั่ง การเดินเรือ ระบบนิเวศ และน้ำท่วมชายฝั่ง; มี misconception สูงเรื่องป่องน้ำ จำนวนรอบ และคำว่า spring tide | `deterministic-svg`; GPT ใช้ได้เฉพาะภาพประกอบดวงจันทร์/ผิวน้ำที่ไม่สื่อข้อมูล |

ลำดับนี้เริ่มจาก conservation และขอบเขตระบบ ต่อด้วย coupling หลายองค์ประกอบ และจบด้วย forcing ที่ต้องแยกจากการตอบสนองเฉพาะพื้นที่

---

## P0-1 วัฏจักรน้ำและงบน้ำ

### Locked copy

- **Exact title:** `วัฏจักรน้ำและงบน้ำ`
- **Exact labelsTH:** `ขอบเขตลุ่มน้ำ`, `หยาดน้ำฟ้า`, `การคายระเหย`, `น้ำท่า`, `การซึม`, `การเติมน้ำใต้ดิน`, `น้ำใต้ดิน`, `การกักเก็บ`, `การถอนน้ำ`, `น้ำไหลออก`
- **Exact equation:** `P = ET + Q + ΔS`
- **Exact in-image explanation:** `น้ำไม่หายไป แต่เปลี่ยนแหล่งกักและเส้นทางภายในขอบเขตที่กำหนด`
- **Exact cross-category note:** `น้ำหมุนเวียน แต่ปริมาณที่พร้อมใช้จำกัดตามพื้นที่และเวลา`
- **Spatial scale:** `ลุ่มน้ำหนึ่งแห่งตั้งแต่บรรยากาศถึงชั้นน้ำใต้ดิน`
- **Time scale:** `เหตุการณ์ฝนถึงงบรายปี`

### Lesson objective

ติดตามน้ำเข้า น้ำออก และการเปลี่ยนแปลงการกักเก็บภายในขอบเขตและช่วงเวลาที่ประกาศ โดยแยกการซึมลงดินออกจากการเติมน้ำใต้ดิน และแยกการหมุนเวียนของน้ำออกจากความพร้อมใช้ของมนุษย์

### mustShow

1. ขอบเขตลุ่มน้ำและทางออกที่เห็นชัด พร้อมระบุช่วงเวลาของงบ
2. `P` เป็นน้ำเข้าหลัก และ `ET`, `Q`, `ΔS` เป็นองค์ประกอบของสมดุลตาม convention ที่ประกาศ
3. stock อย่างน้อย 4 แหล่ง: หิมะ/น้ำผิวดิน ความชื้นดิน น้ำใต้ดิน และน้ำในสิ่งมีชีวิตหรือพืช
4. การซึมเข้าสู่ดินไม่เท่ากับการเติมน้ำใต้ดินทั้งหมด; มี soil storage และการคายระเหยระหว่างทาง
5. น้ำใต้ดินมี recharge, storage, lateral flow และ discharge; ลูกศรต้องสื่อเวลาไหลช้ากว่าน้ำผิวดินโดยไม่ใส่ตัวเลขปลอม
6. การถอนน้ำและน้ำไหลกลับ/ส่งออกต้องตัดขอบเขตอย่างถูกต้อง; ถ้าไม่รวมการผันน้ำข้ามลุ่มให้พิมพ์ assumption ไว้ในภาพ
7. แยกเส้นลูกศร `การไหลของน้ำ` ออกจาก `อิทธิพลของมนุษย์` ด้วยรูปแบบเส้นและ legend ไม่พึ่งสีอย่างเดียว

### mustAvoid

1. ลูกศรวัฏจักรเป็นวงปิดสวยงามแต่ไม่สมดุลหรือไม่มีต้นทาง–ปลายทาง
2. ไม่มีขอบเขต ไม่มีช่วงเวลา หรือใช้ `P = ET + Q + ΔS` โดยไม่ประกาศ convention ของ `ΔS`
3. วาดน้ำฝนทุกหยดเป็นน้ำท่า หรือวาดการซึมทุกส่วนลงถึงชั้นหินอุ้มน้ำทันที
4. วาดน้ำใต้ดินเป็นแม่น้ำหรือถ้ำเปิดทั้งหมด หรือให้ระดับน้ำใต้ดินเป็นเส้นราบเสมอ
5. สื่อว่าน้ำ “หมุนเวียนได้” จึงไม่มีวันขาดแคลนในพื้นที่และเวลาหนึ่ง
6. ให้ GPT สร้างสูตร ป้าย ลูกศร ขอบเขตลุ่มน้ำ หรือความหนาของชั้นน้ำใต้ดินเป็นข้อเท็จจริง

### Authoritative source refs

- USGS Water Science School, **Water cycle**: https://www.usgs.gov/water-science-school/water-cycle
- USGS, **Hydrological cycle and water budgets**: https://www.usgs.gov/publications/hydrological-cycle-and-water-budgets
- USGS Water Science School, **Watersheds and drainage basins**: https://www.usgs.gov/water-science-school/science/watersheds-and-drainage-basins

### Recommended production mode

`hybrid` แต่ master ต้องเป็น deterministic SVG:

- `base-art`: GPT สร้างภาพตัดขวางลุ่มน้ำสมมติแบบ textbook atlas ไม่มีข้อความ ลูกศร สูตร เส้นแบ่งลุ่มน้ำ บ่อ หรือเส้นระดับน้ำใต้ดิน
- `geometry`: SVG วาดขอบเขตลุ่มน้ำ ชั้นดิน/ชั้นน้ำ เส้นทาง stock–flow และทางออก
- `annotation`: SVG/HTML live text สำหรับป้าย สมการ legend assumption และคำอธิบาย
- `data`: ไม่มีตัวเลขเชิงปริมาณใน pilot; หากเพิ่มค่าจริงต้องมีพื้นที่ ช่วงเวลา หน่วย วิธีคำนวณ uncertainty และ source ID

### GPT base-art prompt

```text
Use case: scientific-educational
Asset type: unlabeled textbook atlas base illustration
Primary request: a clean oblique cutaway of one generic watershed from mountain ridge to a single river outlet, showing clouds, forest, soil, bedrock, a shallow groundwater zone, river and small reservoir
Style/medium: restrained museum-quality geographic textbook illustration, semi-realistic, clean material boundaries, generous whitespace
Composition/framing: 16:10 landscape; one continuous watershed; clear sky-to-bedrock cutaway; leave open margins for later SVG labels
Constraints: no text, no letters, no numbers, no equations, no arrows, no watershed boundary line, no map scale, no legend, no wells, no fabricated data, no watermark
Avoid: underground rivers or giant caves, horizontal water table, impossible water flowing through intact confining rock, dramatic flood, fantasy terrain
```

### Acceptance checks

- เมื่อลบภาพพื้นหลังออก งบและ topology ยังอ่านได้ครบจาก SVG
- ลูกศรทุกเส้นข้าม stock หรือขอบเขตอย่างมีเหตุผลและมีชนิดใน legend
- `การซึม` และ `การเติมน้ำใต้ดิน` ไม่เป็นลูกศรเดียวกัน
- ข้อความ exact ผ่าน OCR และมี alt/long description ที่อธิบายสมการกับ assumption

---

## P0-2 เอลนีโญและลานีญา

### Locked copy

- **Exact title:** `เอลนีโญและลานีญา`
- **Exact panel titles:** `ภาวะปกติ`, `เอลนีโญ`, `ลานีญา`
- **Exact labelsTH:** `ลมค้า`, `น้ำอุ่น`, `น้ำเย็น`, `น้ำผุด`, `เทอร์โมไคลน์`, `อากาศลอยตัว`, `อากาศจมตัว`, `บริเวณฝนมาก`, `เอเชีย–แปซิฟิกตะวันตก`, `อเมริกาใต้–แปซิฟิกตะวันออก`
- **Exact in-image explanation:** `ENSO เป็นการเปลี่ยนร่วมกันของลม น้ำอุ่น เทอร์โมไคลน์ และฝนในแปซิฟิก`
- **Exact uncertainty note:** `ผลกระทบแต่ละภูมิภาคเป็นความน่าจะเป็น ไม่ใช่ผลแน่นอนทุกเหตุการณ์`
- **Spatial scale:** `แปซิฟิกเขตร้อนถึงผลเชื่อมโยงทั่วโลก`
- **Time scale:** `หลายเดือนถึงหลายปี`

### Lesson objective

เปรียบเทียบภาวะปกติ เอลนีโญ และลานีญาด้วยกรอบเดียวกัน โดยติดตาม feedback ระหว่างลมค้า ตำแหน่งน้ำอุ่น ความลาดเทอร์โมไคลน์ น้ำผุด การพาความร้อน และฝน

### mustShow

1. สามแผงใช้ทิศ สเกล แนวชายฝั่ง ความลึก และ legend เดียวกัน; ฝั่งตะวันตกอยู่ซ้ายและฝั่งตะวันออกอยู่ขวาทุกแผง
2. ภาวะปกติ: ลมค้าพัดจากตะวันออกไปตะวันตก น้ำอุ่นสะสมฝั่งตะวันตก เทอร์โมไคลน์ตื้นขึ้นทางตะวันออก และมีน้ำผุดทางตะวันออก
3. เอลนีโญ: ลมค้าอ่อนลง น้ำอุ่นและการพาความร้อนเลื่อนไปทางกลาง/ตะวันออก เทอร์โมไคลน์ฝั่งตะวันออกลึกขึ้น และน้ำผุดเย็นสู่ผิวลดประสิทธิภาพ
4. ลานีญา: ลมค้าแรงกว่าปกติ ความลาดเทอร์โมไคลน์เด่นขึ้น น้ำผุดทางตะวันออกเข้มขึ้น และฝนเด่นทางตะวันตกมากกว่าปกติ
5. ลูกศร Walker circulation ปิด topology ทางกายภาพ: ลมผิว อากาศลอย ลมระดับบน และอากาศจม
6. ถ้าใช้ SST anomaly map ต้องมาจาก dataset เดียวกัน มีหน่วย ช่วงฐาน ช่วงเวลา projection และ source; schematic ต้องติดป้าย `ภาพจำลองเชิงกลไก`
7. แยก `สถานะ ENSO` ออกจาก `ผลกระทบภูมิภาค`; ไม่ใช้ลูกศรเหตุแน่นอนไปยังภัยแล้ง/น้ำท่วมในไทย

### mustAvoid

1. วาดทั้งมหาสมุทรอุ่นหรือเย็นเท่ากัน หรือใช้สีแดง/น้ำเงินโดยไม่มีคำว่า “กว่าค่าเฉลี่ย”
2. กลับทิศลมค้าในภาวะปกติ หรือละเว้นลมระดับบนจน Walker cell เป็นลูกศรไม่ครบ
3. วาดเทอร์โมไคลน์เป็นพื้นทะเล หรือทำให้น้ำผุดหยุดสนิททุกแห่งในเอลนีโญ
4. อธิบาย ENSO ด้วย SST เพียงตัวแปรเดียวโดยไม่แสดง atmospheric response
5. สื่อว่าเอลนีโญ/ลานีญาเกิดเป็นคาบคงที่ หรือทุกเหตุการณ์มีรูปทรงและผลเท่ากัน
6. ฝังเกณฑ์ ONI/RONI หรือค่าปัจจุบันโดยไม่ล็อกนิยาม product และวันที่เข้าถึง; NOAA CPC เปลี่ยนระบบ operational monitoring ไปใช้ RONI ในปี 2026
7. ให้ GPT วาดแผนที่ anomaly แนวชายฝั่ง ลูกศรลม เทอร์โมไคลน์ หรือป้ายเป็นข้อมูลจริง

### Authoritative source refs

- NOAA PMEL, **What is El Niño?**: https://www.pmel.noaa.gov/elnino/what-is-el-nino
- NOAA PMEL, **Schematic diagrams: El Niño, Normal and La Niña**: https://www.pmel.noaa.gov/elnino/schematic-diagrams
- NOAA Climate.gov, **El Niño and La Niña FAQ**: https://www.climate.gov/news-features/understanding-climate/el-nino-and-la-nina-frequently-asked-questions
- NOAA CPC, **RONI operational monitoring announcement (2026)**: https://www.cpc.ncep.noaa.gov/products/analysis_monitoring/enso/roni/announcement.php

### Recommended production mode

`hybrid` โดยไม่ใช้ GPT เป็น evidence:

- `base-art`: ไม่จำเป็นในรุ่นแรก; ถ้าใช้ให้เป็น texture น้ำ/เมฆจาง ๆ ไม่มีแผนที่หรือข้อความ
- `geometry`: deterministic SVG สำหรับหน้าตัด ความลาดเทอร์โมไคลน์ ลูกศรลม/อากาศ น้ำผุด และตำแหน่งฝน
- `GIS/data`: ใช้เฉพาะ variant ที่แนบ SST anomaly dataset; ห้ามสร้าง anomaly จาก prompt
- `annotation`: live text ทุกคำ พร้อม panel reading order จากปกติ → เอลนีโญ → ลานีญา

### Prompt-ready production brief

```text
Use case: scientific-educational
Asset type: three-panel Thai textbook atlas mechanism diagram
Primary request: compare the coupled tropical Pacific ocean-atmosphere system in neutral, El Niño and La Niña conditions
Composition/framing: 16:10 landscape; three equal panels; west Pacific/Asia on the left and east Pacific/South America on the right in every panel; identical scale and depth
Core geometry: deterministic SVG only for trade winds, Walker circulation, warm-water distribution, upwelling, thermocline slope and rain/convection zone
Text (verbatim): "เอลนีโญและลานีญา"; "ภาวะปกติ"; "เอลนีโญ"; "ลานีญา"; "ลมค้า"; "น้ำอุ่น"; "น้ำเย็น"; "น้ำผุด"; "เทอร์โมไคลน์"; "อากาศลอยตัว"; "อากาศจมตัว"; "บริเวณฝนมาก"; "เอเชีย–แปซิฟิกตะวันตก"; "อเมริกาใต้–แปซิฟิกตะวันออก"
Thai explanation (verbatim): "ENSO เป็นการเปลี่ยนร่วมกันของลม น้ำอุ่น เทอร์โมไคลน์ และฝนในแปซิฟิก"
Uncertainty note (verbatim): "ผลกระทบแต่ละภูมิภาคเป็นความน่าจะเป็น ไม่ใช่ผลแน่นอนทุกเหตุการณ์"
Constraints: render all causal arrows, coastlines, thermocline and Thai text as deterministic vector layers; if no SST dataset is attached, label the visual as a mechanism schematic and do not invent anomalies
Avoid: reversed neutral trade winds, whole-basin uniform warming/cooling, fixed-period cycle, deterministic Thailand impacts, tiny text, watermark
```

### Acceptance checks

- ผู้เรียนชี้ลำดับ `ลม → เทอร์โมไคลน์/น้ำผุด → SST → การพาความร้อน/ฝน` ได้ในแต่ละแผง
- ทิศตะวันตก–ตะวันออกและทิศลูกศรคงที่ทั้งสามแผง
- ไม่มีตัวเลข/แผนที่ที่ขาด baseline, unit, date และ source
- exact copy ผ่าน OCR และผลกระทบภูมิภาคไม่ถูกเขียนเป็นคำทำนายแน่นอน

---

## P0-3 น้ำขึ้นน้ำลง

### Locked copy

- **Exact title:** `น้ำขึ้นน้ำลง`
- **Exact labelsTH:** `น้ำเกิด`, `น้ำตาย`, `ดวงจันทร์`, `ดวงอาทิตย์`, `น้ำขึ้น`, `น้ำลง`, `ช่วงน้ำ`, `รอบวันจันทรคติ`, `วันละครั้ง`, `วันละสองครั้ง`, `แบบผสม`, `ระดับอ้างอิง`
- **Exact in-image explanation:** `แรงดาราศาสตร์เป็นตัวขับ แต่รูปร่างแอ่งกำหนดเวลารอบและช่วงน้ำท้องถิ่น`
- **Exact misconception note:** `น้ำเกิดเกิดได้ทุกฤดู เมื่อดวงอาทิตย์ โลก และดวงจันทร์เกือบอยู่แนวเดียวกัน`
- **Spatial scale:** `อ่าวถึงทั้งโลกและระบบโลก–ดวงจันทร์–ดวงอาทิตย์`
- **Time scale:** `ชั่วโมงถึงรอบเดือน`

### Lesson objective

เชื่อมแรงขึ้นน้ำลงจากดวงจันทร์และดวงอาทิตย์กับน้ำเกิด–น้ำตาย แล้วแยก forcing แบบอุดมคติออกจากรูปแบบน้ำรายวันจริงที่ถูกปรับด้วยรูปร่างแอ่ง ความลึก การเสียดทาน และการสั่นพ้อง

### mustShow

1. แผง forcing สองคู่: แนวเกือบตรงกันสำหรับ `น้ำเกิด` และมุมใกล้ฉากสำหรับ `น้ำตาย`
2. ดวงจันทร์เป็นตัวขับสำคัญและดวงอาทิตย์ร่วมเพิ่มหรือลดช่วงน้ำ; ห้ามแสดงแรงเป็นบวก/ลบแบบเวกเตอร์ธรรมดาที่ตำแหน่งเดียว
3. กราฟท้องถิ่นสามชนิดบนแกนเวลาเดียวกัน: `วันละครั้ง`, `วันละสองครั้ง`, `แบบผสม`
4. แกนกราฟมีเวลา หน่วยระดับน้ำ `ระดับอ้างอิง` และช่วง `รอบวันจันทรคติ` ประมาณ 24 ชั่วโมง 50 นาทีเมื่อใช้ schematic
5. กล่องกลไกท้องถิ่นแสดง `รูปร่างแอ่ง`, `ความลึก`, `การเสียดทาน`, `การสั่นพ้อง` เป็นตัวปรับ phase และ amplitude โดยไม่ใส่ค่าปลอม
6. `ช่วงน้ำ` วัดความต่างระหว่างระดับสูงกับต่ำ ไม่ใช่ความสูงจากก้นทะเล
7. ถ้าใช้สถานีจริง ต้องระบุ station ID, datum, timezone, start/end time, units, source และสถานะ observed/predicted

### mustAvoid

1. ใช้ป่องน้ำสองก้อนเป็นคำอธิบายท้องถิ่นที่สมบูรณ์ หรือวาดป่องติดอยู่ใต้ดวงจันทร์อย่างแข็ง
2. สื่อว่าทุกชายฝั่งมีน้ำขึ้นวันละสองครั้งและมีความสูงเท่ากัน
3. แปล spring tide ว่าเกิดเฉพาะฤดูใบไม้ผลิ หรือสื่อว่าเกิดเฉพาะพระจันทร์เต็มดวงโดยละเดือนมืด
4. ละเว้นอิทธิพลของดวงอาทิตย์ หรือสื่อว่าดวงอาทิตย์กับดวงจันทร์ดึง “คนละก้อนน้ำ”
5. ใช้กราฟคลื่นไซน์โดยไม่มีแกน ระดับอ้างอิง หรือคำว่า schematic
6. สับสน `น้ำขึ้นน้ำลง` กับ `สึนามิ`, `คลื่นลม` หรือ `กระแสน้ำขึ้นลง`
7. ให้ GPT สร้างตำแหน่งดาราศาสตร์ กราฟ curve ป้าย ตัวเลข หรือข้อมูลสถานี

### Authoritative source refs

- NOAA Ocean Service, **What are tides?**: https://oceanservice.noaa.gov/facts/tides.html
- NOAA Ocean Service, **Types and causes of tidal cycles**: https://oceanservice.noaa.gov/education/tutorial_tides/tides07_cycles.html
- NOAA Ocean Service, **Tidal variations: position and distance**: https://oceanservice.noaa.gov/education/tutorial_tides/tides06_variations.html
- NOAA Ocean Service, **How frequent are tides?**: https://oceanservice.noaa.gov/facts/tidefrequency.html

### Recommended production mode

`deterministic-svg` เป็น master:

- วาด orbit/alignment, force relationship, graph curves, axes, datum, labels และ legend ด้วย SVG
- GPT ใช้ได้เฉพาะ decorative base-art เช่นผิวมหาสมุทรหรือดวงจันทร์ไม่มีตำแหน่งเชิงกลไก และควรตัดออกได้โดยไม่เสียสาระ
- variant สถานีจริงใช้ NOAA/หน่วยงานอุทกศาสตร์ที่มี datum และ timezone ครบ; ไม่ใช้ความจำของโมเดลสร้างกราฟ

### Prompt-ready production brief

```text
Use case: scientific-educational
Asset type: Thai textbook atlas diagram about tides
Primary request: explain astronomical tide forcing, spring and neap tides, and the three common local daily tide patterns without treating the equilibrium bulge model as a complete local prediction
Composition/framing: 16:10 landscape; top row has spring-tide and neap-tide alignments; bottom row has three same-scale local water-level curves plus a basin-controls inset
Text (verbatim): "น้ำขึ้นน้ำลง"; "น้ำเกิด"; "น้ำตาย"; "ดวงจันทร์"; "ดวงอาทิตย์"; "น้ำขึ้น"; "น้ำลง"; "ช่วงน้ำ"; "รอบวันจันทรคติ"; "วันละครั้ง"; "วันละสองครั้ง"; "แบบผสม"; "ระดับอ้างอิง"
Thai explanation (verbatim): "แรงดาราศาสตร์เป็นตัวขับ แต่รูปร่างแอ่งกำหนดเวลารอบและช่วงน้ำท้องถิ่น"
Misconception note (verbatim): "น้ำเกิดเกิดได้ทุกฤดู เมื่อดวงอาทิตย์ โลก และดวงจันทร์เกือบอยู่แนวเดียวกัน"
Constraints: all celestial positions, curves, axes, datum, arrows and Thai text must be deterministic vector geometry; label every curve as schematic unless sourced station data is attached
Avoid: identical tides at all coasts, one high tide everywhere, spring-season iconography, missing solar influence, unlabeled sine waves, tsunami or wind-wave imagery, watermark
```

### Acceptance checks

- ผู้เรียนแยก `น้ำเกิด/น้ำตาย` จาก `วันละครั้ง/วันละสองครั้ง/แบบผสม` ได้ว่าเป็นคนละมิติ
- กราฟทั้งสามใช้แกนและ datum เดียวกัน; curve ไม่ถูกตีความเป็นข้อมูลสถานีจริง
- ตำแหน่งดวงอาทิตย์–โลก–ดวงจันทร์ถูกต้องทั้งเดือนมืด/วันเพ็ญและข้างขึ้น/ข้างแรมครึ่งดวง
- exact copy ผ่าน OCR และความหมายอ่านได้เมื่อย่อภาพเหลือครึ่งหนึ่ง

---

## QA ภาพที่มีอยู่: การหมุนเวียนน้ำผิวและน้ำลึก

ไฟล์ที่ตรวจ: `assets/ai/ocean-circulation-annotated-v1.webp`  
สถานะ: **ผ่านด้านโครงเรื่องและความอ่านง่าย แต่ยังไม่ผ่าน science approval; ควร targeted edit ก่อนใช้เป็นภาพหลักฐาน**

### สิ่งที่ผ่าน

1. แยกสีและระดับของ `กระแสน้ำผิว` กับ `กระแสน้ำลึก` ชัดเจน; ทิศลูกศรต่อเนื่องและมี `จมตัว` กับ `น้ำผุดขึ้น`
2. กล่องคำอธิบายแยกแรงขับใกล้ผิวจากบทบาทอุณหภูมิ–ความเค็ม–ความหนาแน่นได้ดีกว่าภาพ “สายพาน” ทั่วไป
3. ข้อความไทยทั้งหมดที่มองเห็นอ่านถูก: `ลม`, `กระแสน้ำผิว`, `น้ำอุ่น`, `น้ำเย็นและเค็ม`, `จมตัว`, `กระแสน้ำลึก`, `น้ำผุดขึ้น` และคำเตือนว่าไม่ใช่เส้นทาง/มาตราส่วนจริง
4. ลำดับสายตาจากลม → ผิว → การเพิ่มความหนาแน่น → จม → ไหลลึก → ผุด อ่านได้โดยไม่ต้องพึ่ง caption ภายนอก

### จุดที่ต้องแก้ก่อน approve

1. จุดสีขาวใต้ขอบน้ำแข็งอาจถูกอ่านเป็นหิมะ น้ำจืดละลาย หรือเกลือ จึงยัง **ไม่ผ่าน brine-rejection claim**; ต้องวาด `น้ำแข็งทะเลก่อตัว` และลูกศรเกลือออกจากผลึก พร้อมป้าย exact `การเกิดน้ำแข็งทะเลปล่อยเกลือกลับสู่น้ำ`
2. เพิ่มป้าย exact `สูญเสียความร้อน` ใกล้ลูกศรขึ้นสู่บรรยากาศ เพื่อไม่ให้ผู้เรียนสรุปว่า “อยู่ใกล้น้ำแข็งจึงจม” โดยข้าม heat loss
3. คำว่า `น้ำเย็นและเค็ม` ควรเชื่อมด้วยลูกศรไปยัง `ความหนาแน่นเพิ่มขึ้น` ก่อน `จมตัว`; การเย็นหรือเค็มขึ้นไม่ได้ทำให้น้ำจมทุกแห่งโดยไม่มีบริบทการเรียงชั้นและการผสม
4. กล่องขวาล่าง `น้ำหนาแน่นจมและเชื่อมการไหลลึกทั่วมหาสมุทร` ยังฟังเหมือนสายพานปิดเส้นเดียว ควรแก้ exact เป็น `น้ำที่หนาแน่นกว่าจมในบริเวณเหมาะสม และเชื่อมกับการไหลลึก`
5. กล่องซ้ายล่าง `ลมขับกระแสน้ำใกล้ผิว` ถูกแต่ยังไม่ครบ ควรแก้ exact เป็น `ลมขับน้ำใกล้ผิว โดยการหมุนโลกและรูปร่างแอ่งช่วยกำหนดทิศ`
6. ลูกศร `น้ำผุดขึ้น` ดูเหมือนเกิดเพราะกระแสน้ำชนภูเขาใต้ทะเลเพียงอย่างเดียว; เพิ่ม note exact `การผุดขึ้นเกิดได้จากลม การกระจายตัว และการผสม ไม่ใช่จุดเดียวทั่วโลก`
7. คำเตือนล่างควรล็อกเป็น `ภาพจำลองเชิงกลไก ไม่ใช่เส้นทางจริงหรือมาตราส่วนจริง` เพื่อแยกภาพ concept ออกจากแผนที่ circulation

### Targeted-edit invariants

- รักษาองค์ประกอบ 16:9 สีส้มสำหรับผิว สีฟ้าสำหรับลึก และตำแหน่งป้ายหลักเดิม
- เปลี่ยนเฉพาะข้อความ/ลูกศรของ heat loss, sea-ice formation, brine rejection, density และ upwelling caveat
- ห้ามเพิ่มแผนที่โลก ตำแหน่งมหาสมุทรจริง ความเร็ว/เวลาเดินทาง หรือลูกศรเป็นวงปิดเส้นเดียว
- หลังแก้ต้องรัน OCR ภาษาไทยและตรวจว่าหัวลูกศรทุกเส้นมีทิศเดียว ไม่มีลูกศรชนกันหรือปลายลอย

---

## Cross-category review ที่นำมาปรับแล้ว

### จาก geology

1. ภาพ `วัฏจักรน้ำและงบน้ำ` แสดงชั้นหินเพื่อเป็น boundary/material เท่านั้น ไม่ใช้ mantle/ocean metaphor และไม่วาดน้ำไหลผ่านชั้นกั้นโดยไม่มีทางผ่าน
2. แยก `เปลือกมหาสมุทร` จาก `ธรณีภาคมหาสมุทร` ในภาพธรณี ไม่ใช้คำสองคำนี้แทนกันเมื่อเชื่อมกับสมุทรศาสตร์
3. หากภาพการเลื่อนทวีปใช้ coastline หรือ paleogeography ต้องสร้างจาก GIS/deterministic geometry; หลักฐานต้องต่อไปยัง magnetic stripes, age of ocean floor และ seafloor spreading

### จาก human/resources atlas

1. วงจรน้ำต้องแยก physical stock–flow ออกจาก `การเข้าถึง`, `โครงสร้างพื้นฐาน` และ `การจัดการ`; ภาวะขาดแคลนไม่ใช่ผลของปริมาณธรรมชาติเพียงอย่างเดียว
2. แยก recharge, storage, discharge และ withdrawal; ห้ามให้วงลูกศรสื่อว่าน้ำกลับมาทันที
3. การเชื่อม ENSO/น้ำขึ้นน้ำลงกับประมง ท่าเรือ การเดินเรือ หรือภัยชายฝั่งเป็น downstream inset ได้ แต่ต้องเป็นข้อมูลจริงหรือระบุว่า schematic; GPT ห้ามวาด route, current strength หรือ hazard footprint
4. เพิ่ม long description ที่ตามเส้นทาง `ต้นน้ำ → ชายฝั่ง → ประมง/ท่าเรือ` โดยไม่ยัดทุกผลกระทบลงในภาพหลัก

## Batch-wide production gate

ทั้งสาม asset ยังเป็น `draft` จนกว่าจะผ่านทุกข้อ:

1. ชื่อ ป้าย คำอธิบาย และ note ตรง locked copy ทุกตัวอักษร
2. แต่ละ `mustShow` ชี้ตำแหน่งในภาพได้ และไม่มี `mustAvoid` ระดับ critical
3. แยกเลเยอร์ `base-art`, `geometry/data`, `annotation` พร้อม source ID และ hash
4. GPT raster ไม่มีข้อความ ลูกศร สูตร แผนที่จริง กราฟ หรือ geometry ที่ถูกใช้เป็นหลักฐาน
5. map/graph/profile มี unit, baseline/datum, time period, source และ uncertainty ตามชนิดข้อมูล
6. OCR ภาษาไทย, contrast, responsive crop, alt, long description และ reading order ผ่านการตรวจ
7. science reviewer ระบุชื่อ วันที่ และ checklist version ก่อนเปลี่ยนเป็น `approved`

## ลำดับผลิตหลัง science review

1. ทำ wireframe SVG ของ `วัฏจักรน้ำและงบน้ำ` และตรวจ conservation/topology ก่อนสร้าง base-art
2. ใช้ภาษาลูกศรและ legend เดียวกันสร้างสามแผง `เอลนีโญและลานีญา`; รุ่นแรกเป็น schematic ไม่มีค่าปัจจุบัน
3. สร้าง `น้ำขึ้นน้ำลง` ด้วยกราฟสังเคราะห์ที่ประกาศว่า schematic; เพิ่ม station-data variant ภายหลัง
4. รัน OCR + schema + visual QA; แก้ครั้งละหนึ่งข้อโดยรักษา invariants
5. หลัง 3 ภาพผ่าน ให้ batch ถัดไปเป็น `ฝน การซึม และการเกิดน้ำไหลบ่า` → `อัตราการไหล ไฮโดรกราฟ และเวลาตอบสนอง` → `กำเนิดและการแตกตัวของคลื่น`
