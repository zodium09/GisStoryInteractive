# รายงานตรวจเนื้อหา: ธรณีวิทยา ธรณีสัณฐาน แผนที่/GIS และโลกแข็ง

วันที่ตรวจ: 17 กรกฎาคม 2026  
ขอบเขตไฟล์: `subtopic-content.js`, `visual-manifest.js`  
ไฟล์ machine-readable คู่กัน: `content/visual-specs/geology-regions.json`

## บทสรุปผู้บริหาร

โครง 6 × 4 × 4 ทำให้เห็นลำดับหนังสือชัด แต่หมวดแรกใช้ชื่อ “ธรณีสัณฐาน” ครอบทั้งกำเนิดระบบสุริยะ โครงสร้างโลก ธรณีฟิสิกส์ แผ่นธรณี ภัยธรณี และกระบวนการพื้นผิว จึงปนหลายสาขาและทำให้ภาพหนึ่งชิ้นต้องรับภาระอธิบายมากเกินไป เนื้อหาแต่ละหัวข้อมีแกนความรู้ที่ถูกทิศทาง แต่ยังสั้นเกินระดับตำรา ไม่มี claim ID, แหล่งอ้างอิงราย claim, ความไม่แน่นอน, กรณีศึกษาไทย และคำถามตรวจความเข้าใจ

ใน `visual-manifest.js` หัวข้อของ chapter 0 และ 3 รวม 32 เรื่อง มีแผนภาพแบบ `direct` 16 เรื่อง และภาพเปิดบริบทแบบ `context` 16 เรื่อง ระบบ fallback ที่บอกว่า “ยังไม่ใช่ภาพอธิบายเฉพาะเรื่อง” เป็นการปรับปรุงที่ถูกต้อง ควรรักษาไว้จนกว่าภาพเฉพาะเรื่องจะผ่าน science review ห้ามย้อนกลับไปใช้ภาพที่ “ดูใกล้เคียง” เป็นหลักฐาน

ความเสี่ยง P0 คือภาพที่ดูสมจริงอาจทำให้ผู้เรียนเชื่อ topology หรือสเกลที่ผิด เช่น เนื้อโลกเป็นทะเลแมกมา แผ่นมหาสมุทรมุดด้วยมุมเดียวทุกแห่ง สึนามิเป็นคลื่นม้วนยักษ์กลางทะเล หรือแม่น้ำทุกสายพัฒนาตามลำดับต้นน้ำ–กลางน้ำ–ปลายน้ำเหมือนกัน จึงต้องแยกหน้าที่ดังนี้:

- GPT raster: ฉากสังเกต ภาพ reconstruction และพื้นผิวที่ไม่ใช่ข้อมูลอ้างอิง
- Deterministic SVG: ลูกศร ลำดับเหตุ–ผล topology หน้าตัด ป้าย หน่วย legend และข้อความไทย
- GIS map: ตำแหน่งจริง ชายฝั่ง เขตประเทศ ลุ่มน้ำ รอยต่อแผ่น ความสูง และข้อมูลเชิงปริมาณ
- Hybrid: GPT raster เป็นฐาน แล้ววาง SVG/GIS ที่ตรวจสอบได้เป็นชั้นข้อมูลด้านบน

## สิ่งที่ตรวจพบในไฟล์ปัจจุบัน

### `subtopic-content.js`

1. บรรทัด 2–17 ครอบคลุมแกนพื้นฐาน 16 เรื่อง แต่ยังขาดธรณีกาล วัฏจักรหิน แร่และการจำแนกหิน การลำดับชั้นหิน การเปลี่ยนรูปของหิน แผนที่ธรณี และสมดุลการยกตัว–กร่อน
2. “การแยกชั้นของโลก” ควรแก้เหตุ–ผลให้ชัด: การแยกชั้นสร้างแก่นเหล็ก แต่สนามแม่เหล็กเกิดจาก geodynamo ในแก่นโลกชั้นนอกที่นำไฟฟ้า ไหลวน และหมุน ไม่ใช่ผลอัตโนมัติของการแยกชั้นเพียงอย่างเดียว
3. “เปลือกโลก เนื้อโลก และแก่นโลก” ต้องแยกชั้นตามองค์ประกอบออกจากชั้นเชิงกล เปลือกโลกไม่เท่ากับธรณีภาค และเนื้อโลกส่วนใหญ่เป็นของแข็งที่เปลี่ยนรูปได้ช้า ไม่ใช่มหาสมุทรแมกมา
4. “การแผ่ขยายพื้นมหาสมุทร” ใช้คำว่าแมกมา “ผลัก” พื้นทะเลเก่า เสี่ยงสร้าง misconception ว่า magma push เป็นตัวขับเดียว ควรอธิบายแรงขับของแผ่นเป็นระบบ รวม slab pull, ridge push และ mantle flow โดยไม่ลดเหลือกลไกเดียว
5. “ภูเขาไฟ แผ่นดินไหว และสึนามิ” รวมสามปรากฏการณ์ที่มีกลไกและเงื่อนไขต่างกัน ควรแยกเป็นสามบท หรืออย่างน้อยเป็นผังแตกแขนงที่ย้ำว่าไม่เกิดร่วมกันเสมอ แผนที่รอยต่อช่วยระบุ hazard context แต่ไม่ใช่แผนที่ risk หากไม่มี exposure และ vulnerability
6. “ภูมิลักษณ์จากแม่น้ำ” ใช้โมเดลต้นน้ำ–กลางน้ำ–ปลายน้ำแบบอุดมคติ ต้องระบุว่าไม่ใช่ลำดับสากล แม่น้ำถูกควบคุมโดยธรณีวิทยา base level เขื่อน ตะกอน และเหตุการณ์น้ำหลากด้วย
7. “ชายฝั่งและทะเลทราย” รวมระบบที่ไม่ควรเป็นหัวข้อเดียว ควรแยก Coastal geomorphology กับ Aeolian geomorphology แล้วใช้บทเปรียบเทียบ sediment transport เป็นบทเชื่อม
8. “ที่ราบตะกอนน้ำพา” ไม่ควรสื่อว่าดินอุดมทุกแห่ง ความอุดมขึ้นกับแร่ต้นกำเนิด การระบายน้ำ อายุผิวดิน และการจัดการ
9. “ถ่านหิน น้ำมัน และก๊าซ” ควรขยายว่าหินต้นกำเนิดน้ำมัน–ก๊าซอาจเป็นอินทรียวัตถุทะเลหรือทะเลสาบ ต้องผ่านการฝังและช่วงอุณหภูมิเหมาะสม แล้วเคลื่อนย้ายสู่ reservoir/trap ไม่ใช่เกิดจาก “อินทรียวัตถุทะเล” แบบเดียว
10. หัวข้อภูมิภาคที่บรรทัด 65–68 กว้างเกินหนึ่งบท: “แอฟริกาและตะวันออกกลาง” และ “ยุโรปและอเมริกา” รวมภูมิภาคที่ต่างกันมาก ขาดโอเชียเนีย อาร์กติก และแอนตาร์กติกา

### `visual-manifest.js`

1. โครง asset กลางที่บรรทัด 2–15 มี `qaStatus`, `notToScale`, `sourceRefs` และ `limitation` เป็นฐานที่ดี แต่ asset ส่วนใหญ่ยังใช้ `sourceRefs: []` และไม่มี canonical claim IDs
2. `plateBoundaries` เป็น asset เดียวที่มี annotation และแหล่ง USGS ชัดเจน แต่ manifest ระบุ `medium: gpt-image` ทั้งที่ไฟล์ annotated เป็นผลแบบ hybrid ควรแยก base raster กับ deterministic annotation เป็นคนละ version/layer
3. แผ่นสามรอยต่อที่บรรทัด 21–37 สื่อ divergent, oceanic–continental subduction และ transform ได้ แต่ยังไม่ครอบ ocean–ocean convergence กับ continent–continent collision ทั้งที่ชื่อบทพูดถึง “รอยต่อสามรูปแบบ” ในความหมายกว้าง
4. `directPlans` บรรทัด 55–84 ช่วยลด semantic mismatch ได้มาก แต่ภาพ `source-to-sink` ยังถูกใช้กับผุพัง กร่อน mass movement และ deposition หลายเรื่องโดยไม่มี annotation เฉพาะ claim จึงเป็น direct ทางบริบท ไม่ใช่ direct ทางหลักฐาน
5. `chapterFallbacks` และข้อความบรรทัด 139–145 ทำสิ่งที่ถูกต้อง: ภาพบริบทไม่ถูกเรียกเป็นหลักฐาน ควรรักษา hard rule นี้ไว้
6. `sectionModels` บรรทัด 89–126 มี spatial scale, time scale, process และ evidence ระดับตอนแล้ว แต่ยังต้องแตกเป็น lesson-level claim/evidence เพราะหัวข้อเดียวกันในตอนอาจต้องใช้ geometry และข้อห้ามต่างกัน

## ช่องว่าง taxonomy ที่ควรเพิ่ม

### ภาคพื้นฐานแผนที่และ GIS ซึ่งยังไม่มีใน catalog

| หัวข้อที่ควรเพิ่ม | Canonical claim | ป้ายไทยขั้นต่ำ | ห้ามวาดผิด | รูปแบบ |
|---|---|---|---|---|
| คำถามเชิงภูมิศาสตร์และมาตราส่วน | คำตอบเปลี่ยนตาม extent, resolution และหน่วยวิเคราะห์ | ตำแหน่ง, การกระจาย, ความสัมพันธ์, มาตราส่วนพื้นที่, มาตราส่วนเวลา | สรุปข้ามสเกลโดยไม่บอก; ใช้จุดแทนพื้นที่ | Deterministic SVG |
| พิกัด ภูมิศาสตร์ และ datum | พิกัดมีความหมายเมื่อระบุระบบอ้างอิงและ datum | ละติจูด, ลองจิจูด, เส้นศูนย์สูตร, เมริเดียนแรก, datum | สลับ lat/long; ไม่ระบุ datum | GIS + SVG |
| Projection และความบิดเบือน | ทุก projection แลกความถูกต้องของพื้นที่ รูปร่าง ระยะ หรือทิศ | ทรงกลมอ้างอิง, ระนาบฉาย, พื้นที่, รูปร่าง, ระยะทาง | เรียกแผนที่แบนว่าไม่บิดเบือน; เทียบพื้นที่ด้วย Mercator | Deterministic SVG + GIS |
| แผนที่ภูมิประเทศและเส้นชั้นความสูง | ระยะเส้นชั้นบอกความชันและรูปตัว V ชี้โครงข่ายน้ำเมื่ออ่านทิศสูงต่ำ | เส้นชั้นความสูง, ช่วงชั้น, จุดระดับ, สันเขา, หุบเขา, มาตราส่วน | เส้นชั้นตัดกัน; น้ำไหลขึ้นสูง | GIS + SVG |
| DEM, hillshade และหน้าตัด | DEM เป็นแบบจำลองความสูงที่มี resolution และ error | เซลล์กริด, ความสูง, hillshade, แนว A–B, profile | อ่าน hillshade เป็นสีพื้นผิวจริง; ไม่มี vertical exaggeration | GIS |
| แผนที่เฉพาะเรื่อง | class breaks และ normalization เปลี่ยนข้อความของแผนที่ | ตัวแปร, หน่วย, legend, ช่วงชั้น, ไม่มีข้อมูล, แหล่งข้อมูล | สีไม่มี legend; รวม count ที่ควรหารด้วยประชากร | GIS |
| Vector, raster และชั้นข้อมูล GIS | จุด เส้น พื้นที่ และ raster เหมาะกับปรากฏการณ์ต่างชนิด | จุด, เส้น, polygon, pixel, attribute, layer | ใช้จุดแทนขอบเขต; ซ้อน layer คนละ CRS | Deterministic SVG + GIS |
| การวิเคราะห์เชิงพื้นที่ | buffer, overlay, network และ terrain analysis ตอบคำถามต่างกัน | buffer, intersect, catchment, cost path, uncertainty | สื่อ correlation เป็น causation; ไม่มี sensitivity test | Deterministic SVG + GIS |
| Remote sensing | sensor วัดพลังงานในหลายช่วงคลื่น ไม่ได้ “ถ่ายสีจริง” เสมอ | เซนเซอร์, ช่วงคลื่น, true color, false color, resolution, วันที่ | ไม่บอกวันที่/เมฆ; เรียก false color ว่าสีจริง | Sourced imagery + SVG |
| GNSS, ความคลาดเคลื่อน และ provenance | ตำแหน่งและข้อมูลทุกชุดมี error, date, license และ lineage | ดาวเทียม, ตัวรับ, ความคลาดเคลื่อน, วันที่, แหล่งข้อมูล, license | แสดงความแม่นยำเกินข้อมูล; ลบ metadata | Deterministic SVG |
| แผนที่ธรณีและหน้าตัด | แผนที่ผิวดินเชื่อมกับโครงสร้างใต้ดินผ่านแนวหน้าตัดและกฎเรขาคณิต | หน่วยหิน, อายุ, strike, dip, fault, เส้น A–B | หน้าตัดไม่ตรงแผนที่; สีไม่มี legend | GIS + deterministic SVG |

### ภาคธรณีวิทยาและโลกแข็งที่ควรเพิ่ม

- ธรณีกาลและวิธีหาอายุ: relative dating, superposition, cross-cutting, fossils, radiometric dating และ uncertainty
- แร่และสมบัติแร่: crystal structure, hardness, cleavage, streak, density และข้อจำกัดการจำแนกจากภาพ
- หินอัคนี ตะกอน แปร และวัฏจักรหิน: ต้องเป็น network หลายเส้นทาง ไม่ใช่วงกลมทางเดียว
- การลำดับชั้นหินและสภาพแวดล้อมสะสมตัว: facies, unconformity, correlation และ basin history
- การเปลี่ยนรูปของหิน: fold, fault, stress–strain, brittle–ductile และชนิดรอยเลื่อน
- Isostasy, uplift และ subsidence: แยกการยกตัวของหินออกจากการสูงขึ้นของผิวภูมิประเทศ
- แผ่นธรณีโลกจากข้อมูลจริง: plate polygons, velocity vectors, earthquake depth และ volcano distribution
- แผ่นดินไหวแยกบท: fault mechanics, P/S/surface waves, magnitude vs intensity, site effects, liquefaction และ risk
- ภูเขาไฟแยกบท: magma composition, viscosity, eruption style, products, caldera, lahar และ monitoring
- สึนามิแยกบท: source, propagation, shoaling, inundation, travel time และ natural warning signs

### ภาคธรณีสัณฐานที่ควรเพิ่ม

- Drainage basin, longitudinal profile, base level, stream power และ sediment budget
- Slope stability, landslide inventory, susceptibility, hazard และ risk เป็นคนละผลิตภัณฑ์
- Karst hydrogeology, groundwater contamination และ sinkhole mechanisms
- Periglacial processes และ permafrost แยกจาก glacier
- Coastal sediment cell, relative sea-level change และ shoreline uncertainty
- Landscape evolution, uplift–erosion balance, terrace dating และ inherited landforms

### Atlas ภูมิภาคโลก

ทุกภูมิภาคควรใช้ template เดียวกัน: tectonics → relief/drainage → climate/biomes → people/settlement → resources/economy → hazards/change พร้อมแผนที่ locator, physical, climate, population, land use และ case ไทย–โลก ขณะนี้ขาด Oceania, Arctic และ Antarctica และสามหัวข้อสำรวจทวีปยังหยาบเกินระดับ atlas

เพื่อไม่ให้ทุกภูมิภาคกลายเป็นบท 7 ส่วนที่ยาวและซ้ำกัน ให้จัด template เป็นสองชั้น:

- Region passport แบบคงที่: locator สามมาตราส่วน เหตุผลของขอบเขต key spatial/time scales และตัวแปรสำคัญที่ใช้ legend เดียวกันทุกภูมิภาค
- Narrative แบบยืดหยุ่น: เปิดด้วย essential question หรือ case ที่ต่างกัน แล้วเดินจาก tectonics/relief/drainage → climate/biomes → people/settlement/networks → resources/economy → hazards/change

Map/GIS foundations ไม่ควรเป็นกำแพง prerequisite ทั้งชุด ให้เรียนแบบ spiral และ just-in-time: เริ่ม core 4 เรื่องคือ scale/extent, location/coordinate, symbol/legend และ projection/distortion จากนั้นแทรก contour/DEM ก่อน relief, vector/raster และ thematic mapping ก่อน distribution, remote sensing ก่อน land-cover change, spatial analysis ก่อน network/accessibility, GNSS/provenance เมื่ออ่าน evidence และ geologic map/cross-section หลัง topographic map แต่ก่อน regional tectonics

UX ของ atlas ควรมี sticky region passport mini-map, synchronized small multiples ที่ใช้ extent/legend เดียวกัน, layer checklist พร้อม legend/source/date, ปุ่ม Reset map, compare tray สองภูมิภาค, glossary ไทย–อังกฤษ และ claim/citation ติดกับรูป ห้ามพึ่ง hover, scroll-jacking หรือ layer toggle ที่ซ่อนตัวแปรเปรียบเทียบทั้งหมด ต้องมี keyboard/touch controls, text/table alternative และ low-bandwidth static fallback

ความหนาแน่นป้าย: 5–7 callouts ต่อ viewport บนจอใหญ่ และ 3–5 บนมือถือ ป้ายไทยยาว 1–4 คำ ใช้ progressive layers “ภาพรวม → กลไก → หลักฐาน” พร้อม numbered key เมื่อพื้นที่แน่น และมี “สิ่งที่ควรสังเกต” 2–3 จุดต่อภาพ

## ข้อกำหนดรายหัวข้อ: chapter 0 และ 3

ตารางต่อไปนี้เป็นฉบับอ่านเร็ว รายการ `mustShow`, `labelsTH` และ `mustAvoid` ที่ครบถ้วนอยู่ใน `content/visual-specs/geology-regions.json`

### Chapter 0: โลกแข็งและธรณีสัณฐาน

| หัวข้อ | Canonical claims ที่ภาพต้องสื่อ | ป้ายหลัก | ห้ามวาดผิด | โหมด |
|---|---|---|---|---|
| สมมติฐานการกำเนิดระบบสุริยะ | เนบิวลายุบ → จานหมุน → accretion; ระนาบและทิศโคจรเป็นหลักฐาน | เนบิวลา, จาน, ดวงอาทิตย์อ่อน, การพอกพูน | ดาวโตเต็มที่ตั้งแต่เริ่ม; วงโคจรสุ่ม | Hybrid |
| การแยกชั้นของโลก | ความร้อนทำให้วัสดุเคลื่อน; Fe–Ni จม; silicate อยู่ด้านนอก | โลกยุคแรก, Fe–Ni, แก่น, เนื้อโลก, เปลือก | โลกปัจจุบันหลอมทั้งดวง; สลับชั้น | SVG |
| เปลือกโลก เนื้อโลก และแก่นโลก | compositional layers ไม่เท่ากับ mechanical layers; outer core liquid | เปลือกทวีป/มหาสมุทร, เนื้อโลก, แก่นนอก/ใน, ธรณีภาค | เนื้อโลกเป็น magma ocean; crust = lithosphere | SVG |
| หลักฐานจากคลื่นแผ่นดินไหว | P ผ่าน solid/liquid; S ไม่ผ่าน liquid outer core; refraction สร้าง shadow zones | P, S, เขตเงา, แก่นนอก, สถานี | S ผ่านแก่นนอก; คลื่นไม่หักเห | SVG |
| การเลื่อนทวีป | continental-shelf fit + fossil + rock belt + paleoclimate สนับสนุน Pangaea | แพนเจีย, fossils, แนวหิน, รอยธารน้ำแข็ง | ใช้ชายฝั่งปัจจุบันประกบแบบสมบูรณ์; ทวีปลอยบนทะเล | GIS |
| การแผ่ขยายพื้นมหาสมุทร | crust ใหม่ที่ ridge; age และ magnetic stripes สมมาตร | ridge, crust ใหม่, age, magnetic stripes | magma push เป็นแรงเดียว; ridge เป็น subduction | Hybrid |
| รอยต่อแผ่นธรณีสามรูปแบบ | divergent, convergent variants, transform มี geometry และภัยต่างกัน | แยก, มุด, ชนทวีป, เลื่อนผ่าน, trench, arc | volcano ที่ transform; ทิศลูกศรผิด | Hybrid |
| ภูเขาไฟ แผ่นดินไหว และสึนามิ | เป็นสาม causal paths; tsunami ต้องมี water displacement ที่เหมาะสม | magma, fault, seafloor displacement, shoaling | แผ่นดินไหวทุกครั้งเกิดสึนามิ; คลื่นม้วนกลางทะเล | Hybrid |
| การผุพังทางกายภาพและเคมี | physical fragmentation ไม่เปลี่ยนแร่; chemical weathering เปลี่ยนแร่ | รอยแตก, น้ำ/กรด, แร่เดิม/ใหม่ | ใช้ erosion แทน weathering; สลับสองชนิด | Hybrid |
| การกร่อนและการพัดพา | erosion นำออก; transport เคลื่อน; competence ขึ้นกับพลังงาน | แหล่งกำเนิด, ตัวพา, ขนาดตะกอน, ทิศทาง | รวมสามคำเป็นคำเดียว; coarse เดินทางไกลกว่าโดยไร้เงื่อนไข | Hybrid |
| การเคลื่อนตัวของมวลดิน | gravity, shear/resistance, pore pressure และ trigger ควบคุม slope failure | ผิวเลื่อน, แรงดันน้ำ, crown, toe | เคลื่อนขึ้นลาด; ฝนเป็นสาเหตุเดียว | Hybrid |
| การสะสมตะกอน | energy ลด → deposition และ sorting; structures บอก paleoflow/environment | กรวด–ดินเหนียว, พลังงาน, ชั้นตะกอน | ลำดับขนาดตายตัวทุกบริบท; เกิดเฉพาะ delta | SVG |
| ภูมิลักษณ์จากแม่น้ำ | incision, meander migration, floodplain และ avulsion เปลี่ยนตาม controls | คุ้งนอก/ใน, oxbow, floodplain, levee | stage model เป็นกฎสากล; delta ทุกปากน้ำ | Hybrid |
| ภูมิลักษณ์คาร์สต์ | acidic water ละลาย limestone ตาม joints; surface–subsurface เชื่อมกัน | limestone, sinkhole, cave, conduit, spring | stalagmite ห้อยเพดาน; น้ำคาร์สต์กรองดีเสมอ | Hybrid |
| ชายฝั่งและทะเลทราย | wave กับ wind เป็นคนละ agent แต่เปรียบเทียบ sediment system ได้ | wave/longshore, wind/saltation, source–sink | รวมเป็นสถานที่เดียว; สลับทิศลมกับคลื่น | Hybrid |
| ธารน้ำแข็งและเขตหนาว | mass balance, flow, erosion และ deposition สร้าง glacial landforms | accumulation, ELA, ablation, U-valley, moraine | glacier หยุดนิ่ง; U-valley เป็น V | Hybrid |

### Chapter 3: ภูมิภาคกายภาพและ atlas

| หัวข้อ | Canonical claims ที่ภาพต้องสื่อ | ป้ายหลัก | ห้ามวาดผิด | โหมด |
|---|---|---|---|---|
| เกณฑ์แบ่งภูมิภาคกายภาพ | region ขึ้นกับ criteria/layers; boundaries ซ้อนและมี transition | layer, criterion, boundary, transition | เส้นเดียวเป็นความจริงตายตัว | GIS |
| โครงสร้างธรณีกับภูมิประเทศ | lithology + structure + uplift + differential erosion เชื่อม map กับ section | rock unit, fault, strike/dip, A–B | section ไม่ตรง map; hardness เป็นปัจจัยเดียว | Hybrid |
| ภูมิอากาศกับพืชพรรณ | temperature/water เป็นข้อจำกัดหลัก มี soil/fire/human เป็นตัวปรับ | temp, rain, growing season, ecotone | climate หนึ่งแบบมี vegetation เดียว | Hybrid |
| ขอบเขตธรรมชาติกับการเมือง | political boundary เป็นข้อตกลง; natural systems ข้ามและเปลี่ยนได้ | border, watershed, flow, disputed area | GPT สร้างเขตประเทศ; เส้นพิพาทเป็นข้อยุติ | GIS |
| เทือกเขาอายุน้อย | Himalaya collision ต่างจาก Andes subduction; uplift และ erosion ร่วมกัน | Himalaya, Andes, collision, subduction | volcano เป็นแบบทั่วไปใน Himalaya | Hybrid |
| ที่ราบสูงและแอ่ง | plateau/basin มีหลายกำเนิด ต้องอ่าน relative relief + structure | uplift, subsidence, lava, basin fill | basin ต้องต่ำกว่าทะเล; plateau ทุกแห่งจาก lava | Hybrid |
| ที่ราบตะกอนน้ำพา | flood, channel migration และ sedimentation สร้าง floodplain | channel, levee, backswamp, paleochannel | floodplain ปลอดน้ำท่วม; ดินอุดมเสมอ | Hybrid |
| ลุ่มน้ำขนาดใหญ่ของโลก | divide กำหนด basin; upstream–downstream เชื่อมข้ามประเทศ | divide, outlet, flow, basin names | GPT วาดแม่น้ำ; basin = country | GIS |
| กระบวนการลมในทะเลทราย | suspension/saltation/creep และ dune geometry ขึ้นกับ wind/sediment | wind, suspension, saltation, slip face | slip face หันผิด; desert = sand sea ทั้งหมด | Hybrid |
| โอเอซิสและน้ำใต้ดิน | recharge อาจไกล; aquifer/discharge/fossil water; pumping ลด head | recharge, aquifer, water table, oasis, cone | น้ำใต้ดินเป็นทะเลสาบ; recharge อยู่ข้าง oasis เสมอ | Hybrid |
| ชายฝั่งกัดเซาะและสะสมตัว | refraction + longshore transport + sediment budget เชื่อมผลข้างเคียง | wave ray, headland, bay, longshore, budget | กระแสสวน sediment; ภาพเดียวแทน trend | Hybrid |
| เกาะและหมู่เกาะ | volcanic, continental, coral และ sediment islands มีคนละ origin | hotspot, arc, continental fragment, atoll | เกาะทุกแห่งเป็น volcano; coral ในน้ำลึกไร้แสง | Hybrid |
| ภูมิภาคเอเชีย | tectonics/elevation/monsoon/interior aridity/drainage ต้องอ่านร่วมกัน | Tibet, Himalaya, monsoon, basins, rain shadow | ภาพ biome เดียวแทนทวีป; GPT วาด coastline | GIS |
| แอฟริกาและตะวันออกกลาง | ต้องแยกสอง panels และเทียบ relief, aridity, drainage, resources | Rift, Congo, Nile, Sahara, Sahel, Arabia | ทั้งภูมิภาคเป็นทะเลทราย; รวมเป็นระบบเดียว | GIS |
| ยุโรปและอเมริกา | ต้องแยก Europe, North America, South America ด้วยกรอบเดียวกัน | Alps/plain, Rockies/plain, Andes/Amazon | รวม Americas เป็น relief เดียว; projections เทียบไม่ได้ | GIS |
| การเชื่อมโยงข้ามภูมิภาค | flow ต้องมี origin, route, destination, magnitude/unit และ feedback | origin, route, destination, dust/ocean/river/trade | รวมหน่วยต่างกัน; ลูกศรไร้นิยาม | GIS |

## หัวข้อเกี่ยวข้องนอก chapter 0 และ 3

| หัวข้อปัจจุบัน | สิ่งที่ต้องเพิ่มในเนื้อหา/ภาพ | ป้ายและข้อห้าม | โหมด |
|---|---|---|---|
| ไหล่ทวีปและลาดทวีป | shelf break, slope, canyon, continental rise, sediment gravity flow | ป้าย shelf/slope/canyon/rise; ห้ามใช้ภาพ circulation แทน bathymetry | GIS bathymetry + SVG section |
| ที่ราบก้นสมุทร | abyssal plain เกิดจากตะกอนปกคลุม relief; seamounts ไม่ใช่ส่วนของ plain | abyssal plain, sediment drape, seamount; ห้ามวาดพื้นทะเลเรียบทั้งหมด | GIS + SVG |
| สันเขากลางมหาสมุทร | ridge segmentation, rift valley บางชนิด, hydrothermal vents, crustal age | ridge axis, transform offset, vent, age; ห้ามสันต่อเนื่องตรงทั้งโลก | GIS + hybrid section |
| ร่องลึกและภูเขาใต้ทะเล | trench จาก flexure ที่ subduction; seamount มีหลาย origin | trench, accretionary prism, seamount, guyot; ห้ามรวม trench กับ ridge | GIS + hybrid section |
| การกระจายตัวเชิงพื้นที่ | แร่ น้ำ และทรัพยากรต้องใช้ layer คนละชนิดพร้อม source/date/unit | deposit, aquifer, potential, uncertainty; ห้าม GPT วาดตำแหน่ง | GIS |
| ลุ่มน้ำและน้ำผิวดิน | water budget, storage, runoff coefficient และ hydrograph | divide, storage, runoff, outlet; ห้าม basin = river line | GIS + SVG |
| ชั้นหินอุ้มน้ำ | porosity ไม่เท่ากับ permeability; confined/unconfined; hydraulic head | aquifer, aquitard, head, recharge, cone; ห้าม underground lake | SVG + GIS |
| การเกิดและความอุดมของดิน | CLORPT, horizons, texture/structure/pH และ nutrient availability | O/A/B/C, parent material, drainage; ห้ามสีดิน = fertility โดยตรง | Hybrid + sourced soil profile |
| การเกิดแหล่งแร่ | magmatic, hydrothermal, sedimentary, metamorphic, placer เป็นคนละ geometry | intrusion, vein, ore, gangue, placer; ห้าม ore เป็นก้อนบริสุทธิ์ขนาดใหญ่ | Hybrid + geologic map |
| ถ่านหิน น้ำมัน และก๊าซ | source–maturation–migration–reservoir–seal–trap; coal rank แยกอีกระบบ | source, oil window, reservoir, seal, trap; ห้ามโพรงน้ำมันใต้ดิน | SVG + geologic section |
| เหมืองบนบกและใต้ทะเล | ore body, overburden, waste, tailings, plume, closure และ uncertainty | pit, waste rock, tailings, benthic plume; ห้ามทำ deep-sea impact ดูย้อนคืนง่าย | GIS + hybrid |
| การฟื้นฟูพื้นที่ | reference condition, landform/water stability, native succession, monitoring | baseline, target, indicator, monitoring year; ห้ามใช้ “เขียวขึ้น” เป็นความสำเร็จเดียว | GIS time series + sourced photo |

## กฎป้ายและคำอธิบายภาษาไทยในภาพ

1. ป้ายเป็น deterministic layer ห้ามให้ GPT raster เป็นแหล่งข้อความ authoritative
2. ใช้คำไทยก่อนและคำอังกฤษในวงเล็บเมื่อช่วยค้นคว้า เช่น “ฐานธรณีภาค (asthenosphere)”
3. ลูกศรต้องมี legend: การเคลื่อนแผ่น, การไหลของน้ำ, การถ่ายเทพลังงาน และลำดับเวลาใช้รูปแบบต่างกัน
4. ทุกหน้าตัดต้องระบุ “ภาพเชิงแผนผัง ไม่เป็นมาตราส่วน” และระบุ vertical exaggeration หากมี
5. แผนที่ทุกชิ้นต้องมี title, legend, scale, north หรือเหตุผลที่ไม่ใช้, projection/CRS, extent, source, date และ no-data treatment
6. คำอธิบายในภาพเป็นหนึ่งประโยคไม่เกิน 90 ตัวอักษร รายละเอียดและข้อจำกัดอยู่ใน caption/long description
7. สีไม่เป็นช่องทางเดียว ต้องมีรูปแบบเส้น สัญลักษณ์ หรือข้อความกำกับ

## Hard-fail สำหรับภาพชุดนี้

- ภาพไม่มี stable lesson/visual/claim IDs หรือไม่ได้อ้าง source claim
- ใช้ GPT raster เป็น GIS map, geologic map, coastline, political boundary หรือ quantitative chart
- caption อ้างสิ่งที่ไม่มีใน verified checklist
- ทิศทาง plate, fault, water, sediment, wind หรือ wave ผิด topology
- layer order ผิด เช่น S-wave ผ่าน outer core, oceanic plate อยู่เหนือ continental plate ใน subduction case, stalagmite ห้อยเพดาน
- ไม่มี scale status, time scale, alt, long description, source และ science/accessibility approval
- fallback ภาพบริบทถูกนำไปใช้เป็น “หลักฐาน” หรือ “ภาพอธิบายเฉพาะเรื่อง”

## ลำดับดำเนินการ

1. P0: สร้าง claim IDs และ sources รายบท แล้วผูก `geology-regions.json` เข้ากับ lesson manifest
2. P0: ทำ deterministic SVG ก่อน 4 เรื่องที่ topology สำคัญ: ชั้นโลก, คลื่น P/S, sea-floor spreading และ three-boundary comparison
3. P0: วาง GIS core 4 เรื่องก่อนเข้า atlas แล้วสอด foundations ที่เหลือแบบ just-in-time ตามชนิดหลักฐาน
4. P1: แยกบท volcano, earthquake, tsunami และแยก coast ออกจาก desert
5. P1: ใช้ regional template เดียวกันและเพิ่ม Oceania, Arctic, Antarctica
6. P1: pilot science review ด้วย 3 ชุด: plate tectonics, karst groundwater และ Asian physical atlas
7. P2: เพิ่ม Thai case pair เช่น รอยเลื่อนมีพลังภาคเหนือ–ตะวันตก, คาร์สต์ภาคใต้, ลุ่มน้ำโขง/เจ้าพระยา และการกัดเซาะชายฝั่งอ่าวไทย

## Positive findings ที่ควรรักษา

- ข้อความไทยปัจจุบันเริ่มจากกลไกและอ่านง่ายสำหรับผู้ไม่มีพื้นฐาน
- catalog 4 × 4 ต่อหมวดช่วยสร้าง learning progression ได้
- manifest ใหม่มี limitation และ `needs-expert-review` เป็นค่าเริ่มต้น
- fallback ใหม่ยอมรับตรงไปตรงมาว่ายังไม่มีภาพเฉพาะเรื่อง แทนการยัดภาพใกล้เคียง
- asset รอยต่อแผ่นมีแหล่ง USGS และ annotation เป็นจุดตั้งต้นที่ดีสำหรับระบบ claim-based review
