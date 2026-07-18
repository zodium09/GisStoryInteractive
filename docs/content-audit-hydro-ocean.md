# Content audit: น้ำ มหาสมุทร บรรยากาศ ภูมิอากาศ ไครโอสเฟียร์ และภัยพิบัติ

สถานะ: ร่างสำหรับ science review  
วันที่ตรวจ: 17 กรกฎาคม 2026  
ไฟล์ที่ตรวจ: `subtopic-content.js`, `visual-manifest.js`  
visual spec ที่จัดทำคู่กัน: `content/visual-specs/climate-ocean.json`

## ข้อสรุปสำหรับการตัดสินใจ

โครงเนื้อหาปัจจุบันมีบทภูมิอากาศวิทยา 16 หัวข้อและสมุทรศาสตร์ 16 หัวข้อที่ครอบคลุมภาพรวมได้ดี แต่ “อุทกวิทยา”, “ไครโอสเฟียร์” และ “ภัยพิบัติ” ยังไม่เป็นหมวดความรู้ที่สมบูรณ์ เนื้อหาน้ำกระจายอยู่ในธรณีสัณฐาน ทรัพยากร ภูมิอากาศ และสมุทรศาสตร์ จึงขาดเส้นทางเรียนจากงบน้ำไปสู่การไหล น้ำใต้ดิน น้ำท่วม ภัยแล้ง และคุณภาพน้ำอย่างต่อเนื่อง ไครโอสเฟียร์มีหัวข้อเฉพาะเพียง “ธารน้ำแข็งและเขตหนาว” ส่วนภัยพิบัติถูกกล่าวถึงเป็นผลข้างเคียงของกระบวนการโดยยังไม่แยกตัวภัย การเปิดรับ ความเปราะบาง และความเสี่ยง

ปัญหาภาพรุนแรงกว่าเนื้อหา:

- `visual-manifest.js:2-15` กำหนดภาพแทบทั้งหมดเป็น `gpt-image`, `needs-expert-review` และ `notToScale` โดยค่าเริ่มต้น แต่ยังไม่มี checklist ระดับ claim
- บทภูมิอากาศมีภาพเฉพาะเรื่องเพียง 2 จาก 16 หัวข้อ คือมรสุมและพายุ; อีก 14 หัวข้อใช้ภาพวัฏจักรน้ำเป็นเพียงบริบท
- บทสมุทรศาสตร์มีภาพเฉพาะเรื่องเพียง 5 จาก 16 หัวข้อ คือการหมุนเวียนน้ำลึก วงหมุนผิว น้ำผุด ระบบชายฝั่ง และมลพิษ; อีก 11 หัวข้อใช้ภาพ circulation เดียวเป็นบริบท
- `visual-manifest.js:139-145` ระบุชัดว่าภาพ fallback ไม่ใช่ภาพเฉพาะเรื่อง ซึ่งซื่อสัตย์กว่าระบบเดิม แต่ยังไม่เพียงพอสำหรับ textbook เพราะผู้เรียนยังเห็นภาพที่ไม่พิสูจน์ข้อความ
- มีเพียงภาพ plate-boundary pilot ที่มี `sourceRefs`; ภาพน้ำ อากาศ มหาสมุทร และน้ำแข็งยังไม่มีแหล่งวิทยาศาสตร์หรือผู้ทบทวน
- alt ของภาพบางรายการบอกองค์ประกอบเกินกว่าที่ภาพแสดงจริง เช่น cyclone อ้างน้ำทะเลหนุน, ocean circulation อ้างน้ำผุด และ groundwater อ้าง cone of depression ทั้งที่ตำแหน่งหรือ topology ใน raster ยังไม่ตรวจผ่าน

เกณฑ์ผลิตที่ควรถือเป็นข้อบังคับคือ: GPT raster ใช้สร้างฉากหรือ texture ที่ติดป้ายว่า “ภาพจำลอง” เท่านั้น; ลูกศร ป้าย ตัวเลข กราฟ profile และ topology ใช้ deterministic SVG; การกระจายเชิงพื้นที่และภัยใช้ GIS/data map; ภาพ hybrid ต้องแยก base raster ออกจาก overlay ที่สร้างจากข้อมูลและตรวจได้

## สินค้าส่งมอบแบบ machine-readable

`content/visual-specs/climate-ocean.json` ครบ 32 ชื่อหัวข้อของบทภูมิอากาศวิทยาและสมุทรศาสตร์ตาม catalog ทุกตัวอักษร แต่ละรายการมี:

- `visualKind`, `productionMode`, `lessonObjective`
- `mustShow` 3–6 ข้อ และ `mustAvoid` 2–5 ข้อ
- `labelsTH` 3–8 ป้าย และ `inImageExplanationTH` ไม่เกิน 90 อักขระ
- `spatialScale`, `timeScale`, `reviewStatus: "draft"`

ไฟล์ผ่านการตรวจ JSON, มี 32 รายการ, ชื่อตรงกับลำดับ `Object.keys(SUBTOPIC_DETAILS).slice(16, 48)` และข้อจำกัดจำนวน/ความยาวทุก field

## Audit เนื้อหาปัจจุบัน

### 1. บรรยากาศและภูมิอากาศ

หัวข้อปัจจุบัน 16 เรื่องมีแกนที่ดี: องค์ประกอบและชั้นบรรยากาศ, งบพลังงาน, ลมและความกด, ความชื้น เมฆ แนวปะทะ พายุ, เขตภูมิอากาศ, ENSO, การเปลี่ยนแปลงภูมิอากาศ และการปรับตัว อย่างไรก็ตามมีจุดที่ต้องแก้ก่อนเรียกว่า canonical:

| จุดตรวจ | ข้อค้นพบ | การแก้ที่ควรทำ |
|---|---|---|
| แถบความกด | `subtopic-content.js:23` อธิบายแบบสามเซลล์ราวกับเป็นแถบต่อเนื่อง | ระบุว่าเป็น climatological idealization; แถบเคลื่อนตามฤดู แตกเป็นศูนย์ความกด และถูกภูมิประเทศ/ทวีปปรับ |
| มรสุม | `subtopic-content.js:25` เน้นทวีป–มหาสมุทรร้อนเย็นต่างกันมากเกินไป | เพิ่ม ITCZ, pressure gradient ตามฤดู, cross-equatorial flow, plateau/orography และ intraseasonal variability; ห้ามอธิบายว่าเป็น sea breeze ขนาดใหญ่เพียงอย่างเดียว |
| ลมกรด | `subtopic-content.js:26` กล่าวถึงความต่างอุณหภูมิแต่ยังไม่เชื่อม thermal wind | ระบุว่าลมกรดอยู่ใกล้ tropopause และความต่างอุณหภูมิด้านข้างสัมพันธ์กับ vertical wind shear; แยก polar-front กับ subtropical jet |
| ความชื้น | `subtopic-content.js:27` ยังไม่แยก absolute/specific/relative humidity | เพิ่มความชื้นสัมพัทธ์ จุดน้ำค้าง saturation vapor pressure และเงื่อนไขความดัน; ห้ามใช้ประโยค “อากาศเย็นเก็บน้ำได้น้อย” เป็นคำอธิบายทั้งหมด |
| เมฆและฝน | `subtopic-content.js:28` มีเพียงตัวอย่างชื่อเมฆ | เพิ่ม 10 genera/ระดับเมฆ, collision–coalescence, ice-crystal process และโปรไฟล์ melting/refreezing ที่แยกฝน หิมะ sleet/freezing rain/hail |
| แนวปะทะ | `subtopic-content.js:29` บอกว่าแนวปะทะเย็น “มักชันและรุนแรงกว่า” | เปลี่ยนเป็น “มักชันกว่าและมีเขตอากาศแคบกว่า”; ความรุนแรงขึ้นกับ moisture, instability, lift และ shear ไม่ใช่ชนิด front อย่างเดียว |
| พายุเขตอบอุ่น | `subtopic-content.js:30` ใช้คำว่าแกนเย็นแบบสัมบูรณ์ | ใช้เป็นแบบจำลองพื้นฐานได้ แต่ควรบอกวงจรชีวิตและ warm seclusion ที่เป็นข้อยกเว้น; ห้ามวาดสองพายุมีโครงสร้างเดียวกัน |
| ENSO | `subtopic-content.js:32` กลไกหลักถูกทิศ | เพิ่ม coupled feedback, thermocline slope, Walker circulation, index/ช่วงฐาน และย้ำว่า teleconnection เป็นความน่าจะเป็น ไม่ใช่ผลแน่นอนทุกพื้นที่ |
| Climate change | `subtopic-content.js:33` ถูกทิศแต่ยังไม่มีหลักฐานและระดับความเชื่อมั่น | แยก forcing, observed response, attribution, feedback และ impact; เหตุการณ์สุดขั้วต้องระบุชนิด ภูมิภาค และ confidence จากแหล่งอ้างอิง |
| Adaptation | `subtopic-content.js:34` มีรายการมาตรการแต่ยังไม่มี risk framework | ใช้กรอบ Hazard × Exposure × Vulnerability พร้อม capacity, residual risk, maladaptation และความเป็นธรรม |

#### หัวข้อที่ควรเพิ่มในหมวดบรรยากาศ/ภูมิอากาศ

1. **อากาศกับภูมิอากาศและระบบสังเกตการณ์**
   - Canonical claims: weather คือสถานะระยะสั้น; climate คือสถิติการกระจายและเหตุการณ์สุดขั้วในช่วงยาว; station, radiosonde, radar, satellite และ reanalysis มีสิ่งที่วัดต่างกัน
   - ป้ายไทย: `สถานีอากาศ`, `เรดาร์`, `เรดิโอซอนด์`, `ดาวเทียม`, `ค่าเฉลี่ย`, `ความแปรปรวน`, `ช่วงฐาน`
   - คำอธิบายในภาพ: “ภูมิอากาศคือสถิติระยะยาวที่สร้างจากการสังเกตหลายระบบ”
   - ห้ามวาด: ใช้ภาพวันเดียวแทน climate; ผสม radar reflectivity กับ rainfall โดยไม่บอกการแปลง
   - Medium: GIS/data dashboard + deterministic SVG

2. **เสถียรภาพบรรยากาศและการเปลี่ยนอุณหภูมิแบบอะเดียแบติก**
   - Canonical claims: parcel ที่ยกตัวขยายและเย็น; เปรียบเทียบ environmental lapse rate กับ dry/moist adiabatic rate; stability และ CAPE/CIN ควบคุม convection
   - ป้ายไทย: `ก้อนอากาศ`, `ระดับยกตัว`, `อัตราลดอุณหภูมิ`, `เสถียร`, `ไม่เสถียร`, `CAPE`, `CIN`
   - คำอธิบายในภาพ: “การลอยต่อหรือหยุดขึ้นกับอุณหภูมิก้อนอากาศเทียบกับสิ่งแวดล้อม”
   - ห้ามวาด: ใช้อัตราเดียวทั่วโลก; สื่อว่า parcel แลกเปลี่ยนความร้อนเต็มที่ระหว่างการยกตัวแบบอะเดียแบติก
   - Medium: deterministic SVG/profile

3. **พายุฝนฟ้าคะนอง ฟ้าผ่า ลูกเห็บ และทอร์นาโด**
   - Canonical claims: moisture + instability + lift เป็นเงื่อนไขฐาน; shear จัดระเบียบพายุ; lightning, hail, downburst และ tornado เป็นภัยต่างกลไก
   - ป้ายไทย: `กระแสยก`, `กระแสลง`, `ชั้นเยือกแข็ง`, `ประจุไฟฟ้า`, `ลมเฉือน`, `ซูเปอร์เซลล์`, `ลมกระโชกลง`
   - คำอธิบายในภาพ: “พายุรุนแรงต้องมีทั้งพลังลอยตัว การยก และลมเฉือนที่เหมาะสม”
   - ห้ามวาด: ทุก cumulonimbus มี tornado; ลูกเห็บเกิดจากฝนแข็งตัวหลังตกถึงพื้น
   - Medium: deterministic SVG; ใช้ sourced photo เป็น context ได้แต่ไม่ใช้ GPT เป็นหลักฐาน

4. **วงจรคาร์บอน แรงบังคับรังสี และ feedback**
   - Canonical claims: stock ต่างจาก flux; anthropogenic emissions perturb carbon cycle; water-vapor, ice-albedo และ cloud feedback มีบทบาทต่างกัน; aerosol forcing มีเครื่องหมายและความไม่แน่นอนต่างจาก greenhouse gases
   - ป้ายไทย: `แหล่งปล่อย`, `แหล่งดูดซับ`, `คาร์บอนสะสม`, `แรงบังคับรังสี`, `ป้อนกลับ`, `มหาสมุทร`, `ชีวมณฑล`
   - คำอธิบายในภาพ: “การปล่อยเปลี่ยนแหล่งสะสมคาร์บอนและงบพลังงานของโลก”
   - ห้ามวาด: ลูกศร flux โดยไม่มีหน่วย/ช่วงเวลา; ต้นไม้ดูดซับการปล่อยทั้งหมดทันที
   - Medium: deterministic Sankey + sourced data chart

5. **การตรวจจับและระบุสาเหตุการเปลี่ยนแปลงภูมิอากาศ**
   - Canonical claims: detection แยก signal จาก variability; attribution เปรียบเทียบ fingerprints และ model experiments; uncertainty ไม่เท่ากับไม่รู้
   - ป้ายไทย: `ความแปรปรวนธรรมชาติ`, `สัญญาณ`, `ตัวขับจากมนุษย์`, `แบบจำลอง`, `ช่วงความเชื่อมั่น`, `หลักฐานหลายชนิด`
   - คำอธิบายในภาพ: “สาเหตุประเมินจากรูปแบบหลักฐาน ไม่ใช่จากกราฟเส้นเดียว”
   - ห้ามวาด: correlation เส้นเดียวเป็นเหตุผลสมบูรณ์; ตัด uncertainty bands ออกจากกราฟ
   - Medium: data chart + deterministic comparison

### 2. สมุทรศาสตร์

หัวข้อปัจจุบัน 16 เรื่องครอบคลุม bathymetry, temperature–salinity–density, waves/tides/currents, ecosystems/resources/sea level/pollution แต่ต้องแก้ข้อจำกัดดังนี้:

| จุดตรวจ | ข้อค้นพบ | การแก้ที่ควรทำ |
|---|---|---|
| ชั้นน้ำทะเล | `subtopic-content.js:40-42` ถูกทิศแต่ยังแยกเป็นสามหัวข้อที่ไม่เชื่อม T–S–density | ใช้ profile ที่มีหน่วย/ละติจูด/ฤดูเดียวกันและ T–S diagram; เพิ่ม pressure/potential density เมื่อลงรายละเอียด |
| Deep circulation | `subtopic-content.js:43` เสี่ยงสร้างภาพ “global conveyor belt” เส้นเดียว | แสดงหลาย water masses, formation regions, mixing และ distributed upwelling; เส้นทางเป็น schematic ไม่ใช่กระแสท่อคงที่ |
| Waves | `subtopic-content.js:44` ควรเพิ่มเงื่อนไข shallow-water | แสดง wave energy, orbital motion, shoaling, refraction และ breaking; ห้ามวาดมวลน้ำเดินทางพร้อมรูปคลื่นทั้งหมด |
| Tides | `subtopic-content.js:45` ใช้ equilibrium bulge model อย่างเดียว | ใช้ bulge เพื่อเริ่มแนวคิด แต่ต้องเพิ่ม tidal wave, basin resonance, amphidromic systems และ diurnal/semidiurnal/mixed local curves |
| Gyres | `subtopic-content.js:46` ถูกทิศ | เพิ่ม Ekman convergence, sea-surface slope/geostrophic balance และ western boundary intensification; แผนที่ต้องใช้ข้อมูล ไม่ใช้ GPT |
| Upwelling | `subtopic-content.js:47` ถูกทิศแต่ข้าม Ekman transport | เพิ่ม alongshore wind, hemisphere, offshore Ekman transport/divergence และ source depth; น้ำผุดไม่จำเป็นต้องมาจาก abyss |
| Coral carbon | `subtopic-content.js:48` กล่าวว่าแนวปะการังและป่าชายเลน “กักคาร์บอน” ในความหมายเดียวกัน | แก้ P0: mangrove/seagrass เป็น organic blue-carbon sinks; carbonate production ของ reef มี carbon chemistry ซับซ้อน ไม่ควรสรุปว่าเป็น climate sink แบบเดียวกัน |
| Fisheries/minerals | `subtopic-content.js:49` รวม renewable biological stock กับ non-renewable deposit | แยก stock–recruitment/harvest rate จาก geologic resource/EEZ/environmental impact |
| Sea level | `subtopic-content.js:50` กลไกหลักถูกต้อง | แยก global mean กับ relative sea level; เพิ่ม vertical land motion, gravitational fingerprints, datum, baseline และ uncertainty |

#### หัวข้อที่ควรเพิ่มในหมวดสมุทรศาสตร์

1. **แสง ความดัน และเสียงในมหาสมุทร**
   - Claims: แสงลดและเปลี่ยนสเปกตรัมตามความลึก; pressure เพิ่มตามความลึก; sound propagation ขึ้นกับ temperature, salinity, pressure
   - ป้าย: `เขตมีแสง`, `เขตแสงน้อย`, `เขตมืด`, `ความดัน`, `ช่องเสียง`, `ความลึก`
   - ห้าม: วาดทะเลลึกสว่าง/สีสด; ให้ความดันเปลี่ยนแบบไม่สัมพันธ์ความลึก
   - Medium: deterministic profile

2. **ชั้นผสม ไพคโนไคลน์ และการแลกเปลี่ยนแนวดิ่ง**
   - Claims: wind/buoyancy mix surface layer; pycnocline resists mixing; seasonal mixed-layer depth controls nutrient/light exposure
   - ป้าย: `ชั้นผสม`, `ไพคโนไคลน์`, `การผสม`, `สารอาหาร`, `เขตมีแสง`, `พายุ`
   - ห้าม: วาด pycnocline เป็น membrane; ใช้ความลึกเดียวทุกละติจูด/ฤดู
   - Medium: deterministic profile + seasonal panels

3. **การขนส่งเอกมันและการไหลเชิงธรณีสมดุล**
   - Claims: wind stress drives spiral/transport; net transport turns relative to wind by hemisphere; pressure-gradient and Coriolis balance sustain geostrophic currents
   - ป้าย: `แรงลม`, `ชั้นเอกมัน`, `การขนส่งสุทธิ`, `แรงคอริออลิส`, `ความลาดผิวน้ำ`, `กระแสธรณีสมดุล`
   - ห้าม: ใช้ลูกศร 90° กับทุกชั้น; ละเว้นซีกโลก; วาด Coriolis เป็นแรงเริ่มการเคลื่อน
   - Medium: deterministic SVG

4. **กระแสชายฝั่ง การหักเหคลื่น และกระแสฉีก**
   - Claims: oblique waves drive longshore transport; refraction redistributes energy; rip currents return water offshore through narrow jets
   - ป้าย: `แนวคลื่น`, `การหักเห`, `กระแสเลียบฝั่ง`, `การเคลื่อนตะกอน`, `กระแสฉีก`, `สันทราย`
   - ห้าม: วาด rip current ดึงคนลงก้นทะเล; ลูกศรตะกอนสวนกับคลื่นโดยไม่มีบริบท
   - Medium: deterministic plan + section

5. **ปากแม่น้ำ เอสทูรี และการผสมเค็มจืด**
   - Claims: river discharge, tides and density shape salinity structure; estuary can be salt-wedge, partially/well mixed; residence time controls water quality
   - ป้าย: `น้ำจืด`, `น้ำเค็ม`, `ลิ่มน้ำเค็ม`, `น้ำขึ้นน้ำลง`, `การผสม`, `เวลาพำนัก`, `ตะกอนแขวนลอย`
   - ห้าม: วาดเส้นแบ่งเค็มจืดตั้งตรง; ใช้รูปแบบเดียวกับทุก estuary
   - Medium: deterministic comparison + GIS locator

6. **ปั๊มชีวภาพ คาร์บอน และภาวะเป็นกรด**
   - Claims: phytoplankton fix carbon; a fraction sinks/remineralizes; ocean uptake changes carbonate chemistry and lowers pH; acidification is not the same as acidic pH below 7
   - ป้าย: `คาร์บอนไดออกไซด์`, `แพลงก์ตอนพืช`, `อนุภาคจม`, `การคืนแร่ธาตุ`, `คาร์บอเนต`, `pH ลดลง`
   - ห้าม: บอกมหาสมุทรกลายเป็นกรด pH ต่ำกว่า 7 โดยทั่วไป; วาดคาร์บอนจมถึงก้นทั้งหมด
   - Medium: deterministic process SVG + sourced time series

7. **ออกซิเจนต่ำและคลื่นความร้อนทะเล**
   - Claims: warming lowers oxygen solubility and strengthens stratification; nutrient loading can raise oxygen demand; marine heatwave is a sustained temperature extreme relative to local climatology
   - ป้าย: `ออกซิเจนละลาย`, `การเรียงชั้น`, `ยูโทรฟิเคชัน`, `เขตออกซิเจนต่ำ`, `คลื่นความร้อนทะเล`, `ค่าฐานท้องถิ่น`
   - ห้าม: ทุก low-oxygen zone เกิดจาก pollution; marine heatwave เป็นอุณหภูมิตายตัวทั่วโลก
   - Medium: GIS/data map + deterministic section

8. **ระบบสังเกตการณ์มหาสมุทร**
   - Claims: satellite measures surface proxies; Argo/CTD measure profiles; moorings/tide gauges measure time series; model/reanalysis combines observations with dynamics
   - ป้าย: `ดาวเทียม`, `ทุ่น Argo`, `CTD`, `ทุ่นตรึง`, `มาตรวัดน้ำ`, `โซนาร์`, `แบบจำลอง`
   - ห้าม: ดาวเทียมวัดทะเลลึกโดยตรง; interpolation เป็น observation จริงทุก pixel
   - Medium: deterministic network + real data inset

### 3. อุทกวิทยา

หัวข้อปัจจุบันกระจายอยู่ใน `ภูมิลักษณ์จากแม่น้ำ`, `ภูมิลักษณ์คาร์สต์`, `ลุ่มน้ำและน้ำผิวดิน`, `ชั้นหินอุ้มน้ำ`, `โอเอซิสและน้ำใต้ดิน`, `การอนุรักษ์ดินและน้ำ`, `มลพิษจากลุ่มน้ำสู่มหาสมุทร` และภาพ water-cycle/groundwater/Amazon ไม่มีบทที่พาผู้เรียนจาก conservation law ไปสู่ observation, hydrograph, flood/drought และ management

ข้อควรแก้ในเนื้อหาเดิม:

- `subtopic-content.js:14` ใช้โมเดลต้นน้ำ–กลางน้ำ–ปลายน้ำแบบแข็งเกินไป Meander, floodplain และ deposition พบได้ตาม controls หลายแบบ ไม่ได้ผูกกับสามช่วงเสมอ; delta เกิดเมื่อ sediment supply ชนะ wave/tide/current removal
- `subtopic-content.js:15` อธิบาย karst vulnerability ได้ดี แต่ควรแยก conduit flow กับ diffuse flow และเตือนว่าขอบเขต groundwater catchment อาจไม่ตรง surface divide
- `subtopic-content.js:74` ควรเขียนงบน้ำชัดเจนและแยก infiltration, percolation, soil storage, groundwater recharge, evapotranspiration และ runoff
- `subtopic-content.js:75` ควรแยก porosity กับ permeability, unconfined/confined aquifer, potentiometric surface, cone of depression และ saltwater intrusion

#### ชุดหัวข้ออุทกวิทยาที่ควรเพิ่ม

1. **วัฏจักรน้ำและงบน้ำ**
   - Canonical claims: สำหรับขอบเขตและช่วงเวลาที่กำหนด `P = ET + Q + ΔS`; storage รวม snow, soil, surface water และ groundwater; flux ต้องมีหน่วยต่อเวลา
   - ป้ายไทย: `หยาดน้ำฟ้า`, `การคายระเหย`, `น้ำท่า`, `การซึม`, `น้ำใต้ดิน`, `การกักเก็บ`, `ขอบเขตลุ่มน้ำ`
   - คำอธิบาย: “น้ำไม่หายไป แต่เปลี่ยนแหล่งกักและเส้นทางภายในขอบเขตที่กำหนด”
   - ห้ามวาด: ลูกศรวัฏจักรไม่ปิดงบ; ไม่มีขอบเขต/ช่วงเวลา; infiltration เท่ากับ recharge ทั้งหมด
   - Medium: deterministic SVG

2. **ฝน การซึม และการเกิดน้ำไหลบ่า**
   - Claims: runoff แบบ rainfall-excess กับ saturation-excess ต่างกัน; controls คือ intensity/duration, antecedent moisture, soil, slope, cover และ drainage
   - ป้าย: `ความเข้มฝน`, `ความจุการซึม`, `ดินอิ่มน้ำ`, `ไหลบ่าผิวดิน`, `ไหลใต้ผิว`, `ความชื้นเดิม`
   - คำอธิบาย: “น้ำไหลบ่าเกิดเมื่อฝนเกินการซึมหรือเมื่อดินอิ่มน้ำแล้ว”
   - ห้ามวาด: ฝนทุกหยดไหลผิว; พื้นป่าป้องกันน้ำท่วมได้ทั้งหมด
   - Medium: deterministic comparison

3. **ลุ่มน้ำ โครงข่ายลำน้ำ และสันปันน้ำ**
   - Claims: surface divide derives from topography; stream order/drainage pattern reflects relief/geology; groundwater divide may differ; outlet sets accounting boundary
   - ป้าย: `สันปันน้ำ`, `ต้นน้ำ`, `ลำน้ำสาขา`, `ทางออกลุ่มน้ำ`, `ลำดับลำน้ำ`, `ลุ่มน้ำใต้ดิน`
   - คำอธิบาย: “ลุ่มน้ำผิวดินแบ่งด้วยภูมิประเทศ แต่การไหลใต้ดินอาจข้ามสันปันน้ำได้”
   - ห้ามวาด: สันปันน้ำตัดข้ามหุบ; ขอบ groundwater ตรง surface ทุกแห่ง
   - Medium: GIS DEM map + deterministic arrows

4. **อัตราการไหล ไฮโดรกราฟ และเวลาตอบสนอง**
   - Claims: discharge `Q = A × v`; hydrograph separates rainfall, rising limb, peak, lag, recession/baseflow; basin and storm properties alter shape
   - ป้าย: `ฝน`, `น้ำท่า`, `ช่วงหน่วง`, `ยอดน้ำ`, `ฐานการไหล`, `ขาขึ้น`, `ขาลง`, `อัตราการไหล`
   - คำอธิบาย: “รูปร่างไฮโดรกราฟบอกว่าลุ่มน้ำรับ เก็บ และระบายน้ำเร็วเพียงใด”
   - ห้ามวาด: แกนเวลา/หน่วยหาย; peak flow ตรง peak rainfall เสมอ
   - Medium: deterministic data chart

5. **แม่น้ำ ที่ราบน้ำท่วม และสมดุลตะกอน**
   - Claims: erosion/transport/deposition depend competence, capacity and sediment supply; channel migrates; floodplain stores water/sediment; levee/cutoff/oxbow are dynamic
   - ป้าย: `ตลิ่งกัดเซาะ`, `สันดอนโค้ง`, `คุ้งน้ำ`, `คันดินธรรมชาติ`, `ที่ราบน้ำท่วม`, `ทางน้ำเก่า`, `ตะกอน`
   - คำอธิบาย: “ทางน้ำและที่ราบน้ำท่วมเปลี่ยนตามน้ำหลาก ตะกอน และพื้นที่ให้แม่น้ำเคลื่อน”
   - ห้ามวาด: meander เฉพาะตอนกลาง; floodplain เป็นที่ว่างปลอดภัยนอกแม่น้ำ
   - Medium: GIS time series + deterministic overlay

6. **น้ำใต้ดินและชั้นหินอุ้มน้ำ**
   - Claims: porosity stores water while permeability transmits; hydraulic head gradient drives flow; confined/unconfined differ; pumping forms drawdown; recharge and discharge connect rivers/coasts
   - ป้าย: `ชั้นไม่อิ่มน้ำ`, `ระดับน้ำใต้ดิน`, `ชั้นหินอุ้มน้ำ`, `ชั้นกั้นน้ำ`, `ระดับศักย์น้ำ`, `พื้นที่เติมน้ำ`, `หลุมลดระดับ`, `น้ำไหลออก`
   - คำอธิบาย: “น้ำใต้ดินไหลตามความต่างศักย์ผ่านวัสดุที่เก็บและส่งน้ำได้ต่างกัน”
   - ห้ามวาด: aquifer เป็นถ้ำเปิดทั้งหมด; water table เป็นเส้นนอนเสมอ; well สูบโดยไม่เกิด drawdown
   - Medium: deterministic cross-section; GPT ใช้ texture เท่านั้น

7. **คาร์สต์และการไหลในโพรง**
   - Claims: carbonate dissolution enlarges fractures; conduit flow responds rapidly and filters poorly; sink–cave–spring network may cross surface divides; collapse and cover-subsidence sinkholes differ
   - ป้าย: `หลุมรับน้ำ`, `รอยแตก`, `โพรง`, `ลำธารใต้ดิน`, `ถ้ำ`, `ตาน้ำ`, `ขอบเขตน้ำใต้ดิน`, `หลุมยุบ`
   - คำอธิบาย: “โพรงคาร์สต์ส่งน้ำเร็ว จึงเชื่อมพื้นที่ไกลและไวต่อมลพิษ”
   - ห้ามวาด: ถ้ำทุกแห่งเต็มน้ำ; stalactite/stalagmite กลับด้าน; ขอบเขตลุ่มน้ำใต้ดินตามสันเขาเสมอ
   - Medium: deterministic cross-section + GIS tracer map

8. **ทะเลสาบ พื้นที่ชุ่มน้ำ และอ่างเก็บน้ำ**
   - Claims: storage changes hydrograph; wetlands exchange surface/groundwater and transform nutrients; lakes stratify/mix; dams change flow, sediment, temperature and connectivity
   - ป้าย: `พื้นที่ชุ่มน้ำ`, `น้ำเข้า`, `น้ำออก`, `การกักเก็บ`, `การตกตะกอน`, `การแลกเปลี่ยนน้ำใต้ดิน`, `อ่างเก็บน้ำ`, `ทางผ่านปลา`
   - คำอธิบาย: “แหล่งกักน้ำชะลอการไหล แต่เปลี่ยนตะกอน อุณหภูมิ และระบบนิเวศด้วย”
   - ห้ามวาด: wetland เป็น sponge ป้องกันทุก flood; dam มีแต่ประโยชน์หรือมีแต่ผลเสีย
   - Medium: hybrid GIS + SVG budget

9. **น้ำท่วม ภัยแล้ง และการเปลี่ยนแปลงสภาพน้ำ**
   - Claims: flood types have distinct drivers; drought has meteorological/agricultural/hydrological dimensions; antecedent conditions and management matter; hazard differs from risk
   - ป้าย: `น้ำท่วมลำน้ำ`, `น้ำท่วมฉับพลัน`, `น้ำท่วมเมือง`, `ภัยแล้งอุตุนิยม`, `ภัยแล้งเกษตร`, `ภัยแล้งอุทกวิทยา`, `การเปิดรับ`, `ความเปราะบาง`
   - คำอธิบาย: “น้ำมากหรือน้ำน้อยกลายเป็นภัยเมื่อกระทบคนและระบบที่เปิดรับและเปราะบาง”
   - ห้ามวาด: flood/drought เป็นขั้วตรงข้ามที่เกิดร่วมกันไม่ได้; hazard map เท่ากับ risk map
   - Medium: GIS/data maps + deterministic risk frame

10. **คุณภาพน้ำและการเคลื่อนของสาร**
    - Claims: concentration differs from load; advection, dispersion, reaction, settling and uptake alter contaminants; source control differs for point/non-point sources
    - ป้าย: `ความเข้มข้น`, `ภาระมลพิษ`, `แหล่งจุด`, `แหล่งกระจาย`, `การพา`, `การกระจาย`, `การตกตะกอน`, `การย่อยสลาย`
    - คำอธิบาย: “ปริมาณน้ำและกระบวนการระหว่างทางร่วมกำหนดความเข้มข้นและภาระมลพิษ”
    - ห้ามวาด: dilution ทำให้มวลหาย; สีของน้ำแทนค่าคุณภาพโดยไม่มี legend
    - Medium: deterministic source–pathway–receptor + GIS monitoring data

### 4. ไครโอสเฟียร์

ปัจจุบันมีเพียง `subtopic-content.js:17` ซึ่งรวมการกำเนิด การไหล การกร่อน ภูมิลักษณ์ และตะกอนธารน้ำแข็งไว้ในย่อหน้าเดียว ไม่ครอบคลุม snow, ice sheet, ice shelf, sea ice, permafrost, seasonality, mass balance, albedo, hydrology, sea level และ frozen-ground hazards ภาพ `glacial-system.webp` ยังเป็น GPT raster ที่มี geometry บริเวณปลายธารน้ำแข็งผิดธรรมชาติ จึงไม่ควรใช้เป็น cross-section อ้างอิง

#### ชุดหัวข้อไครโอสเฟียร์ที่ควรเพิ่ม

1. **องค์ประกอบของไครโอสเฟียร์**
   - Claims: seasonal snow, mountain glaciers, ice sheets/shelves, sea/lake/river ice and permafrost differ in location, storage and response
   - ป้าย: `หิมะตามฤดูกาล`, `ธารน้ำแข็ง`, `พืดน้ำแข็ง`, `หิ้งน้ำแข็ง`, `น้ำแข็งทะเล`, `ชั้นดินเยือกแข็งคงตัว`
   - ห้าม: รวม sea ice กับ glacier; วาด permafrost เป็นน้ำแข็งล้วน
   - Medium: GIS locator + deterministic taxonomy

2. **งบมวลธารน้ำแข็งและเส้นสมดุล**
   - Claims: mass balance = accumulation − ablation over time; ELA separates net zones; glacier can advance/retreat depending on balance and dynamics; retreat is not ice flowing uphill
   - ป้าย: `เขตสะสม`, `เส้นสมดุล`, `เขตสูญเสีย`, `การละลาย`, `การไหลของน้ำแข็ง`, `ปลายธาร`, `งบมวล`
   - ห้าม: ลูกศร ice flow ชี้ขึ้นเขา; retreat แปลว่าน้ำแข็งไหลถอยหลัง
   - Medium: deterministic profile + sourced mass-balance graph

3. **การไหลของน้ำแข็งและภูมิลักษณ์ธารน้ำแข็ง**
   - Claims: deformation + basal sliding drive flow; velocity varies across/depth; abrasion/plucking erode; till and meltwater deposits differ
   - ป้าย: `การเปลี่ยนรูปภายใน`, `การเลื่อนฐาน`, `การขูด`, `การดึงหิน`, `โมเรน`, `ตะกอนคละขนาด`, `น้ำละลาย`
   - ห้าม: glacier เป็นก้อนแข็งไม่ไหล; ปลายธารตัดเป็นผนังสี่เหลี่ยม; moraine เป็นชั้นคัดขนาดดี
   - Medium: deterministic cross-section; GPT texture optional

4. **พืดน้ำแข็ง หิ้งน้ำแข็ง และเส้นยึดพื้น**
   - Claims: grounded ice contributes to sea level when mass enters ocean; floating shelf buttresses upstream flow; grounding line migrates; calving differs from surface melt
   - ป้าย: `พืดน้ำแข็ง`, `หิ้งน้ำแข็ง`, `เส้นยึดพื้น`, `ฐานน้ำแข็ง`, `การแตกตัว`, `น้ำอุ่นใต้หิ้ง`, `การไหลสู่ทะเล`
   - ห้าม: floating shelf melt directly raises sea level by full volume; grounding line at coast by definition
   - Medium: deterministic section + real satellite inset

5. **น้ำแข็งทะเลและอัลบีโด**
   - Claims: sea ice forms from seawater, floats and changes seasonally; freezing rejects brine; melt has small direct sea-level effect but changes albedo/ecosystems/navigation
   - ป้าย: `น้ำแข็งปีเดียว`, `น้ำแข็งหลายปี`, `ขอบน้ำแข็ง`, `น้ำเกลือเข้มข้น`, `อัลบีโด`, `ฤดูหนาว`, `ฤดูร้อน`
   - ห้าม: sea ice เป็น freshwater glacier; melt เป็นแหล่งหลักของ sea-level rise
   - Medium: GIS time-series map + deterministic process

6. **ชั้นดินเยือกแข็งคงตัวและชั้นละลายตามฤดู**
   - Claims: permafrost is ground at ≤0°C for at least two consecutive years, not necessarily ice-rich; active layer thaws seasonally; thaw causes subsidence/thermokarst and can mobilize carbon
   - ป้าย: `ชั้นละลายตามฤดู`, `ชั้นดินเยือกแข็งคงตัว`, `น้ำแข็งในดิน`, `เทอร์โมคาร์สต์`, `การทรุด`, `คาร์บอนในดิน`
   - ห้าม: permafrost เป็นแผ่นน้ำแข็งบริสุทธิ์; ทุกพื้นที่ thaw ปล่อยคาร์บอนเท่ากัน
   - Medium: deterministic section + GIS extent

7. **หิมะ อ่างเก็บน้ำตามฤดูกาล และน้ำละลาย**
   - Claims: snow-water equivalent differs from snow depth; accumulation and melt timing control runoff; rain-on-snow can amplify flood; dust/albedo changes melt rate
   - ป้าย: `ความลึกหิมะ`, `น้ำเทียบเท่าในหิมะ`, `การสะสม`, `การละลาย`, `ฝนบนหิมะ`, `น้ำท่าฤดูใบไม้ผลิ`, `อัลบีโด`
   - ห้าม: snow depth เท่าปริมาณน้ำ; melt ทั้งหมดไหลถึงแม่น้ำทันที
   - Medium: deterministic budget + GIS snow map

8. **ไครโอสเฟียร์กับระดับทะเล ภูมิอากาศ และน้ำ**
   - Claims: land ice loss raises sea level; snow/sea-ice albedo is a feedback; glacier loss changes seasonal water availability; regional sea-level fingerprints vary
   - ป้าย: `น้ำแข็งบนบก`, `ระดับทะเล`, `อัลบีโด`, `การป้อนกลับ`, `น้ำละลาย`, `น้ำท่าฤดูแล้ง`, `รูปแบบภูมิภาค`
   - ห้าม: sea-level response same everywhere; all glacier melt produces permanent increase in downstream water
   - Medium: hybrid data chart + deterministic causal graph

### 5. ภัยพิบัติและความเสี่ยง

ปัจจุบัน `subtopic-content.js:9,12,30,34,39,50` กล่าวถึงแผ่นดินไหว สึนามิ ดินถล่ม พายุ เหตุการณ์สุดขั้ว และระดับทะเล แต่ยังไม่มี common risk language จึงเสี่ยงสอนว่า “ปรากฏการณ์ธรรมชาติ = ภัยพิบัติ” และใช้แผนที่ขอบแผ่นหรือภาพพายุแทนแผนที่ความเสี่ยง

ข้อแก้ P0:

- `subtopic-content.js:9` ต้องระบุว่าสึนามิต้องมีการแทนที่มวลน้ำอย่างรวดเร็ว โดยมากจากการเลื่อนแนวดิ่งของพื้นทะเล แต่อาจมาจาก landslide/volcano; แผ่นดินไหวใต้ทะเลไม่ทุกครั้งเกิดสึนามิ
- การบอกว่าใช้แผนที่รอยต่อแผ่น “ประเมินพื้นที่เสี่ยง” ยังไม่พอ ต้องรวม source, propagation, inundation, exposure, vulnerability และ warning/evacuation
- ภาพภัยต้องแยก hazard footprint ออกจาก damage icons; จำนวนบ้านหรือคนเสียหายห้ามสร้างด้วย GPT แล้วทำให้ดูเป็นข้อมูล

#### ชุดหัวข้อภัยพิบัติที่ควรเพิ่ม

1. **ตัวภัย การเปิดรับ ความเปราะบาง ศักยภาพ และความเสี่ยง**
   - Claims: hazardous event is not automatically a disaster; risk emerges from hazard, exposure, vulnerability and capacity; uncertainty is explicit
   - ป้าย: `ตัวภัย`, `การเปิดรับ`, `ความเปราะบาง`, `ศักยภาพรับมือ`, `ความเสี่ยง`, `ความไม่แน่นอน`
   - คำอธิบาย: “ภัยพิบัติเกิดเมื่อปรากฏการณ์กระทบคนและระบบที่เปิดรับและเปราะบาง”
   - ห้าม: hazard map = risk map; ใช้ขนาดภัยแทนจำนวนความเสียหาย
   - Medium: deterministic framework + GIS layers

2. **แผ่นดินไหว การสั่นสะเทือน และผลกระทบต่อพื้นที่**
   - Claims: magnitude differs from intensity; shaking depends source, path and site; liquefaction requires susceptible saturated sediment; secondary hazards include landslide/fire/tsunami
   - ป้าย: `ขนาดแผ่นดินไหว`, `ความรุนแรงการสั่น`, `รอยเลื่อน`, `ชั้นดินอ่อน`, `การขยายแรงสั่น`, `ดินเหลว`, `โครงสร้างอาคาร`
   - ห้าม: วงคลื่นเท่ากันทุกทิศ/วัสดุ; magnitude เป็นความเสียหาย; ทุกพื้นที่ทรายเกิด liquefaction
   - Medium: GIS ShakeMap + deterministic section

3. **สึนามิจากแหล่งกำเนิดถึงเขตน้ำท่วม**
   - Claims: rapid water displacement generates long waves; deep-ocean amplitude can be small and speed high; shoaling raises wave; run-up/inundation depend bathymetry/topography; natural signs and warning matter
   - ป้าย: `การเลื่อนแนวดิ่ง`, `ความยาวคลื่น`, `ทะเลลึก`, `การตื้นตัว`, `ความสูงวิ่งขึ้น`, `เขตน้ำท่วม`, `เส้นทางอพยพ`
   - ห้าม: tsunami เป็นคลื่นโต้รูปกำแพงกลางทะเล; ทุก subduction earthquake generates tsunami; drawdown always precedes first wave
   - Medium: deterministic sequence + GIS inundation map

4. **ภูเขาไฟและชุดตัวภัยหลายชนิด**
   - Claims: eruption style depends magma/gas; pyroclastic density current, ashfall, lava, lahar and gas have distinct footprints/speeds; risk persists after eruption in lahars
   - ป้าย: `เถ้าภูเขาไฟ`, `กระแสไพโรคลาสติก`, `ลาวา`, `ลาฮาร์`, `ก๊าซ`, `เขตอพยพ`, `ทิศลม`
   - ห้าม: lava เป็นภัยเร็วที่สุดทุกกรณี; pyroclastic flow เป็นควันลอย; hazard zones เป็นวงกลมเท่ากัน
   - Medium: deterministic hazard map + contextual GPT raster only as scene

5. **น้ำท่วมลำน้ำ น้ำท่วมฉับพลัน น้ำท่วมเมือง และน้ำท่วมชายฝั่ง**
   - Claims: drivers, lead times and footprints differ; compound flooding can combine river, rain, tide, surge and subsidence; drainage changes urban response
   - ป้าย: `น้ำท่วมลำน้ำ`, `น้ำท่วมฉับพลัน`, `น้ำท่วมเมือง`, `คลื่นพายุซัดฝั่ง`, `ฝนหนัก`, `การระบายน้ำ`, `น้ำท่วมร่วม`
   - ห้าม: flood types ใช้ภาพเดียว; depth map ไม่มี datum; levee/dam removes all risk
   - Medium: GIS depth/velocity maps + deterministic comparison

6. **พายุหมุนเขตร้อนและภัยประกอบ**
   - Claims: wind, rain, river flood, surge, waves and landslide can overlap; storm surge is abnormal water-level rise from wind/pressure, while total coastal water includes tide/waves; impacts vary by track/size/speed
   - ป้าย: `ลมแรง`, `ฝนหนัก`, `น้ำท่วมลำน้ำ`, `คลื่นพายุซัดฝั่ง`, `น้ำขึ้นน้ำลง`, `คลื่น`, `ดินถล่ม`, `เส้นทางพายุ`
   - ห้าม: surge เป็นคลื่นยักษ์เดียว; category wind alone predicts all impacts; clockwise/counterclockwise without hemisphere
   - Medium: GIS forecast/hazard layers + deterministic section

7. **ดินถล่ม หินร่วง และการไหลของเศษดิน**
   - Claims: slope, material, structure, pore pressure and triggers control failure; fall/slide/flow differ; susceptibility is not event probability; rainfall thresholds need local calibration
   - ป้าย: `ระนาบเลื่อน`, `แรงต้าน`, `แรงขับ`, `ความดันน้ำในช่องว่าง`, `หินร่วง`, `ดินถล่ม`, `การไหลเศษดิน`, `พื้นที่รับตะกอน`
   - ห้าม: วาดรากไม้ยึดทุก slope; susceptibility map เป็น prediction วันเวลา; debris flow เป็นน้ำโคลนบาง
   - Medium: deterministic slope section + GIS susceptibility/trigger map

8. **ภัยแล้ง คลื่นความร้อน และไฟป่า**
   - Claims: meteorological/agricultural/hydrological drought differ; heat hazard depends duration/nighttime/humidity and urban form; fire needs fuel, weather and ignition; compound/sequential effects matter
   - ป้าย: `ฝนน้อย`, `ความชื้นดิน`, `น้ำในอ่าง`, `ความร้อนกลางคืน`, `เกาะความร้อนเมือง`, `เชื้อเพลิงไฟ`, `ลม`, `ควัน`
   - ห้าม: drought = ไม่มีฝนเท่านั้น; heat risk ใช้อุณหภูมิสูงสุดอย่างเดียว; wildfire caused by heat without ignition/fuel
   - Medium: GIS/data dashboard + deterministic causal graph

9. **หิมะถล่มและทะเลสาบน้ำแข็งแตก**
   - Claims: avalanche depends snowpack layers/slope/loading; GLOF needs lake, dam/ice stability and trigger; runout follows terrain; monitoring and evacuation reduce risk
   - ป้าย: `ชั้นหิมะอ่อน`, `ระนาบแตก`, `เขตเริ่ม`, `ทางไหล`, `เขตทับถม`, `ทะเลสาบธารน้ำแข็ง`, `เขื่อนโมเรน`, `น้ำหลากฉับพลัน`
   - ห้าม: avalanche เป็นก้อนหิมะกลม; ทุก glacier lake unstable; runout ข้ามสันเขา
   - Medium: GIS terrain + deterministic sections

10. **การเตือนภัยล่วงหน้า การพยากรณ์ และการสื่อสารความไม่แน่นอน**
    - Claims: end-to-end warning = risk knowledge, monitoring, forecast, communication, response capacity; forecast probability differs from certainty; lead time trades with accuracy
    - ป้าย: `ตรวจวัด`, `พยากรณ์`, `เกณฑ์เตือน`, `การสื่อสาร`, `เวลานำ`, `ความน่าจะเป็น`, `การตอบสนอง`, `ทบทวนหลังเหตุการณ์`
    - ห้าม: warning issued = warning received/acted; probability cone = storm size; return period = fixed schedule
    - Medium: deterministic flow + real forecast example

## Canonical claims ข้ามหมวดที่ภาพทุกชุดต้องรักษา

1. **Conservation first** — งบน้ำ พลังงาน มวล และเกลือต้องประกาศขอบเขต ช่วงเวลา stock และ flux; ลูกศรทุกเส้นต้องมีต้นทางและปลายทาง
2. **Scale is part of the claim** — แยกอนุภาค/parcel, column/profile, catchment, basin, region และ globe; ห้ามรวมชั้นใต้ดินกับภูมิประเทศบนสเกลเดียวโดยไม่ติด `ไม่ใช่มาตราส่วนจริง`
3. **Average is not an event** — pressure belts, winds, climate zones, currents และ sea level patterns เป็นค่าเฉลี่ยหรือ anomaly ที่ต้องมีช่วงฐาน/วันที่
4. **Hazard is not risk** — footprint ของปรากฏการณ์ต้องไม่ถูกเรียกว่าความเสี่ยงจนกว่าจะรวม exposure/vulnerability/capacity
5. **Synthetic is not observed** — GPT image ห้ามมีหน้าตาเป็นภาพดาวเทียม แผนที่ข้อมูล หรือภาพเหตุการณ์จริงโดยไม่มีป้าย “ภาพจำลอง”
6. **Direction and hemisphere are hard constraints** — Coriolis, cyclone rotation, Ekman transport, gyres, trade winds และ monsoon arrows ต้องระบุ hemisphere/season
7. **Land ice is not sea ice** — ผลต่อระดับทะเล อัลบีโด น้ำจืด และการไหลต้องแยกอย่างชัดเจน
8. **Correlation is not attribution** — climate/hazard dashboard ต้องไม่ใช้กราฟร่วมเวลาเพียงคู่เดียวเป็นหลักฐานสาเหตุ

## ป้ายและคำอธิบายภาษาไทยในภาพ

### หลักการเขียนป้าย

- ใช้คำไทยหลักและใส่อังกฤษครั้งแรกในวงเล็บเมื่อจำเป็น เช่น `ชั้นอุณหภูมิเปลี่ยนเร็ว (thermocline)`
- ป้ายต้องเป็นคำนามสั้น 1–5 คำ; ประโยคเหตุผลอยู่ใน callout หรือ caption
- ลูกศรต้องมีชนิด: `การไหล`, `การถ่ายเทพลังงาน`, `การเคลื่อนตะกอน`, `ความสัมพันธ์เชิงเหตุ`; ห้ามใช้ลูกศรรูปเดียวแทนทุกอย่าง
- สีต้องมี legend และไม่เป็นช่องทางสื่อความหมายเพียงอย่างเดียว
- Profile และ graph ต้องมีแกน หน่วย ทิศเพิ่ม/ลด ช่วงข้อมูล และ baseline
- Map ต้องมีชื่อพื้นที่ projection/CRS, scale, north เมื่อเหมาะสม, legend, data date, source และ no-data treatment
- ป้ายภาษาไทยและตัวเลข authoritative ต้องมาจาก SVG/HTML overlay ไม่ฝังใน GPT raster

### รูปแบบคำอธิบายสั้น

ใช้ประโยคไม่เกิน 90 อักขระและตอบเพียงหนึ่งความสัมพันธ์ เช่น:

- “อากาศชื้นยกตัวและเย็นถึงจุดน้ำค้าง จึงเริ่มเกิดหยดเมฆ”
- “น้ำผิวออกจากฝั่ง ทำให้น้ำลึกเย็นและมีสารอาหารขึ้นมาแทน”
- “ระดับทะเลสัมพัทธ์รวมทั้งการเปลี่ยนน้ำทะเลและการยกทรุดของแผ่นดิน”
- “ความเสี่ยงเกิดจากตัวภัย การเปิดรับ และความเปราะบางร่วมกัน”

คำอธิบายต้องไม่พูดเกินสิ่งที่ตรวจเห็นใน `mustShow`; caption ที่อ้าง claim ต้องผูกกับ claim ID และ source ID ใน schema ขั้นถัดไป

## การเลือกเทคนิคผลิต

| เทคนิค | ใช้เมื่อ | ห้ามใช้เมื่อ | ตัวอย่างใน scope นี้ |
|---|---|---|---|
| GPT raster | ฉากบริบท ภูมิประเทศสมมติ texture หรือ museum-style reconstruction ที่ไม่อ้างปริมาณ | แผนที่จริง กราฟ profile ลูกศรกลไก ขอบเขตภัย ตำแหน่งกระแสน้ำ/ทรัพยากร และภาพหลักฐาน | ฉากชายฝั่ง ป่าชายเลน เมืองฝนหนัก โดยติดป้ายภาพจำลอง |
| Deterministic SVG | topology, causal flow, cross-section, arrows, labels, legend, units, comparison | ต้องแสดงการกระจายเชิงพื้นที่จากข้อมูลจริง | งบพลังงาน, front, T–S density, wave shoaling, aquifer, glacier mass balance |
| GIS/data map | ตำแหน่ง ขอบเขต แนวโน้ม anomaly hazard footprint bathymetry และ monitoring | ไม่มีแหล่ง/วันที่/CRS/หน่วย หรือข้อมูลไม่รองรับความละเอียด | Köppen map, SST anomaly ENSO, salinity, currents, sea level, flood depth |
| Hybrid | ต้องมีฉากอ่านง่ายร่วมกับ geometry/data ที่ตรวจได้ | overlay ไม่ยึด anchor หรือ raster บังคับ topology ผิด | monsoon map + cross-section, upwelling map + section, habitats + deterministic zonation |

กฎ hybrid: raster base ห้ามมีตัวอักษร ลูกศร scale bar หรือเขตแดน; overlay ใช้ normalized coordinates/anchors และต้องยังถูกต้องเมื่อ responsive crop; ถ้า base geometry ขัด claim ให้ reject ไม่ใช่แก้ด้วย caption

## Hard-fail rules สำหรับ science review

Visual ต้องไม่เข้าสถานะ `approved` หากพบข้อใดข้อหนึ่ง:

1. ชื่อหัวข้อไม่มี stable lesson ID หรือ visual ไม่มี explicit lesson ID
2. `mustShow` ข้อใดที่ priority สูงไม่ปรากฏ หรือ `mustAvoid` ระดับ critical ปรากฏ
3. ทิศลม/กระแส/แผ่น/ตะกอน/น้ำใต้ดินผิด หรือ hemisphere/season ไม่ระบุในภาพที่ต้องใช้
4. map/graph/profile ไม่มี source, date/baseline, legend, unit หรือ scale ที่จำเป็น
5. GPT raster ถูกใช้เป็นข้อมูลเชิงปริมาณ ภาพดาวเทียม แผนที่ hazard หรือภาพสถานที่จริง
6. caption บอกกลไกที่ไม่สามารถชี้ตำแหน่งในภาพได้
7. sea ice/land ice, hazard/risk, weather/climate, salinity/density หรือ concentration/load ถูกใช้แทนกัน
8. ภาพ cross-section มี topology เป็นไปไม่ได้ แม้ภาพสวย เช่น น้ำไหลข้ามชั้นกั้นโดยไม่มีรอยแตก ธารน้ำแข็งตัดเป็นหน้าสี่เหลี่ยม หรือร่องลึกเป็นกำแพงน้ำตั้ง
9. ไม่มี alt, long description, reading order ของ overlay หรือ contrast/focus ไม่ผ่าน accessibility review
10. reviewer ผู้เชี่ยวชาญยังไม่ระบุชื่อ วันที่ และ checklist version

## แหล่งอ้างอิงหลักที่ควรผูกใน schema

แหล่งต่อไปนี้ควรเป็น source families ไม่ใช่การคัดลอกภาพโดยไม่ตรวจ license:

- บรรยากาศ/ภูมิอากาศ: WMO, WMO International Cloud Atlas, IPCC AR6, NOAA, NASA Earth Observatory
- อุทกวิทยา/น้ำใต้ดิน: USGS Water Science School, WMO Hydrology, UNESCO-IHP, หน่วยงานน้ำและธรณีของไทย
- สมุทรศาสตร์: UNESCO-IOC, NOAA Ocean Service, NASA/ESA satellite products, Argo, GEBCO
- ไครโอสเฟียร์: NSIDC, WGMS, IMBIE, Randolph Glacier Inventory, IPCC
- ภัยพิบัติ: UNDRR terminology, WMO Early Warnings for All, USGS, NOAA/NHC/JTWC และหน่วยงานเตือนภัยไทย

ทุก dataset ต้องเก็บ publisher, URL/DOI, version, published/accessed date, license, spatial/temporal resolution, uncertainty และ processing code/hash ใน data manifest

## ลำดับดำเนินการ

### P0 — ก่อนสร้างภาพเพิ่ม

1. แก้ coral-carbon claim, monsoon oversimplification, front severity, deep-ocean conveyor และ equilibrium-tide overclaim
2. เพิ่ม risk framework และแยก hazard map จาก risk map
3. หยุดใช้ water-cycle fallback เป็นภาพหลักของ 14 เรื่อง climate และ ocean-circulation fallback ของ 11 เรื่อง ocean
4. แสดง contextual placeholder แทนจน visual spec ผ่าน review

### P1 — สร้างชุดภาพแกนกลาง

1. ใช้ 32 specs ใน `climate-ocean.json` สร้าง deterministic/GIS pilots ก่อน GPT raster
2. ทำ 8 ภาพแกนกลาง: atmosphere profile, radiation budget, global circulation, fronts/cyclones, ocean T–S profile, waves/tides, gyre/upwelling map, relative sea-level budget
3. เพิ่ม source IDs และ science reviewer ต่อ claim/visual

### P2 — เติมหมวดที่หาย

1. จัดอุทกวิทยาเป็น learning path จาก water budget → runoff → catchment → hydrograph → groundwater → flood/drought → water quality
2. ขยายไครโอสเฟียร์อย่างน้อย 8 เรื่องตาม audit
3. สร้างภัยพิบัติอย่างน้อย 10 เรื่องโดยใช้ common risk language และ end-to-end warning

### P3 — Review และ publish gate

1. automated asset/schema/topology/OCR checks
2. science review โดยผู้เชี่ยวชาญแต่ละสาขา
3. accessibility/Thai terminology review
4. deploy เฉพาะ visual version แบบ immutable ที่มี source, hash และสถานะ approved
