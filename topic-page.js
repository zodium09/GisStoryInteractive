const topicKeys = Object.keys(window.SUBTOPIC_DETAILS || {});
const requestedTitle = new URLSearchParams(location.search).get("topic");
const topicIndex = topicKeys.indexOf(requestedTitle);

const chapterInfo = [
  { title: "ธรณีสัณฐาน", english: "Geomorphology", sections: ["กำเนิดและโครงสร้างโลก", "แผ่นธรณีและแรงภายใน", "การผุพังและการกร่อน", "วิวัฒนาการของภูมิลักษณ์"], steps: ["พลังงานหรือแรงเริ่มต้น", "วัสดุตอบสนอง", "เกิดการเคลื่อนย้าย", "เหลือร่องรอยบนภูมิประเทศ"], context: "ธรณีสัณฐานอธิบายว่าพลังงานภายในโลก แรงโน้มถ่วง น้ำ ลม คลื่น และน้ำแข็งร่วมกันสร้างและปรับแต่งพื้นผิวอย่างไร", evidence: "หลักฐานสำคัญอยู่ในชนิดหิน แนวชั้นหิน รูปร่างภูมิประเทศ ตะกอน และตำแหน่งเมื่อเทียบกับรอยต่อแผ่นธรณี", importance: "ความเข้าใจเรื่องนี้ช่วยอ่านทรัพยากร ประเมินภัย เลือกพื้นที่ก่อสร้าง และอธิบายว่าภูมิประเทศยังเปลี่ยนต่อเนื่อง" },
  { title: "ภูมิอากาศวิทยา", english: "Climatology", sections: ["บรรยากาศและพลังงาน", "ความกดอากาศและลม", "เมฆ ฝน และพายุ", "ระบบภูมิอากาศโลก"], steps: ["รับพลังงานไม่เท่ากัน", "อุณหภูมิและความกดต่างกัน", "อากาศและไอน้ำเคลื่อน", "เกิดอากาศและภูมิอากาศ"], context: "ภูมิอากาศเกิดจากการถ่ายเทพลังงานและน้ำระหว่างดวงอาทิตย์ พื้นผิวโลก มหาสมุทร และบรรยากาศในหลายมาตราส่วน", evidence: "อ่านได้จากแผนที่อุณหภูมิ ความกด ลม เมฆ ฝน และสถิติระยะยาว รวมถึงการเปลี่ยนตามฤดูกาลและเหตุการณ์ผิดปกติ", importance: "ความรู้นี้ใช้พยากรณ์อากาศ วางแผนเกษตร จัดการน้ำ ออกแบบเมือง และเตรียมรับพายุ ภัยแล้ง คลื่นความร้อน และภูมิอากาศเปลี่ยนแปลง" },
  { title: "สมุทรศาสตร์", english: "Oceanography", sections: ["พื้นมหาสมุทร", "อุณหภูมิ ความเค็ม และความหนาแน่น", "คลื่นและกระแสน้ำ", "ทรัพยากรและระบบนิเวศทะเล"], steps: ["รับแรงจากลมหรือความหนาแน่น", "มวลน้ำเริ่มเคลื่อน", "แลกเปลี่ยนความร้อนและสาร", "ส่งผลต่อชายฝั่งและภูมิอากาศ"], context: "มหาสมุทรเป็นระบบสามมิติที่เชื่อมพื้นทะเล มวลน้ำ บรรยากาศ สิ่งมีชีวิต และชายฝั่งเข้าด้วยกัน", evidence: "หลักฐานมาจากแผนที่ความลึก อุณหภูมิ ความเค็ม ระดับทะเล กระแสน้ำ ตะกอน และการกระจายของแพลงก์ตอนกับสัตว์น้ำ", importance: "มหาสมุทรควบคุมภูมิอากาศ เป็นแหล่งอาหาร การเดินทาง พลังงาน และความหลากหลาย พร้อมรับมลพิษและความร้อนส่วนเกินจากกิจกรรมมนุษย์" },
  { title: "ภูมิภาคและลักษณะกายภาพโลก", english: "World Physiography", sections: ["องค์ประกอบของภูมิภาค", "ภูเขา ที่ราบสูง และที่ราบลุ่ม", "เขตแห้งแล้งและชายฝั่ง", "ความเชื่อมโยงของภูมิภาคโลก"], steps: ["โครงสร้างพื้นฐานของพื้นที่", "ภูมิอากาศและน้ำทำงาน", "ดินและชีวิตปรับตัว", "มนุษย์ใช้และเปลี่ยนพื้นที่"], context: "ภูมิภาคกายภาพเกิดจากการซ้อนกันของธรณีสัณฐาน ภูมิอากาศ ระบบน้ำ ดิน พืชพรรณ และการเชื่อมโยงกับพื้นที่รอบข้าง", evidence: "การอ่านภาพถ่าย แผนที่ความสูง ลุ่มน้ำ ฝน และพืชพรรณร่วมกันช่วยอธิบายขอบเขตและลักษณะเฉพาะของแต่ละภูมิภาค", importance: "การมองภูมิภาคเป็นระบบช่วยวางแผนข้ามพรมแดน เข้าใจความต่างของวิถีชีวิต และเห็นผลที่ต้นน้ำ ลม หรือการค้าในพื้นที่หนึ่งส่งต่อไปอีกพื้นที่" },
  { title: "การกระจายทรัพยากรธรรมชาติ", english: "Natural Resources", sections: ["ทรัพยากรและการเกิด", "น้ำและดิน", "แร่และพลังงาน", "การจัดการอย่างยั่งยืน"], steps: ["ธรรมชาติสร้างหรือสะสม", "มนุษย์ค้นหาและเข้าถึง", "นำไปผลิตและใช้", "หมุนเวียนหรือฟื้นฟู"], context: "ทรัพยากรกระจายไม่เท่ากันเพราะประวัติธรณี ภูมิอากาศ ระบบน้ำ และการทำงานของสิ่งมีชีวิตต่างกันในแต่ละพื้นที่", evidence: "ตำแหน่งแหล่งแร่ ชั้นหินอุ้มน้ำ ชนิดดิน ผลผลิตชีวภาพ และศักยภาพพลังงานเป็นหลักฐานว่ากระบวนการใดสร้างทรัพยากรนั้น", importance: "การจัดการต้องสมดุลประโยชน์ปัจจุบันกับกำลังฟื้นตัว ผลกระทบต่อชุมชน และทางเลือกของคนรุ่นต่อไป" },
  { title: "ภูมิศาสตร์อุตสาหกรรม", english: "Industrial Geography", sections: ["ประเภทและปัจจัยทำเล", "เขตอุตสาหกรรม", "อุตสาหกรรมเกษตรและเทคโนโลยี", "ห่วงโซ่อุปทานและสิ่งแวดล้อม"], steps: ["จัดหาวัตถุดิบและทุน", "ผลิตและประกอบ", "ขนส่งผ่านเครือข่าย", "กระจาย ใช้ และจัดการของเสีย"], context: "ภูมิศาสตร์อุตสาหกรรมอธิบายว่าทำไมกิจการตั้งอยู่บางแห่ง และการผลิตเชื่อมทรัพยากร แรงงาน เมือง ท่าเรือ ตลาด และข้อมูลอย่างไร", evidence: "แผนที่โรงงาน การขนส่ง พลังงาน แรงงาน การค้า และการปล่อยมลพิษเผยให้เห็นข้อได้เปรียบ การกระจุกตัว และความเสี่ยงของห่วงโซ่", importance: "ความเข้าใจทำเลช่วยวางโครงสร้างพื้นฐาน กระจายงาน ลดความเสี่ยง และนับต้นทุนด้านพลังงาน น้ำ ของเสีย แรงงาน และคาร์บอนตลอดวงจรสินค้า" }
];

const assets = {
  earth: ["assets/ai/earth-system-hero-v2.png", "ระบบโลกตั้งแต่ชั้นหินถึงบรรยากาศ"], rock: ["assets/lessons/rock-cycle.webp", "วัฏจักรหินและโครงสร้างโลก"], quake: ["assets/lessons/earthquake-fault.webp", "รอยเลื่อนและคลื่นแผ่นดินไหว"], mountain: ["assets/lessons/himalaya.webp", "เทือกเขาจากการชนของแผ่นธรณี"], weather: ["assets/lessons/weathering-erosion.webp", "การผุพัง กร่อน พัดพา และสะสมตัว"], glacier: ["assets/lessons/glacial-system.webp", "ธารน้ำแข็งและภูมิลักษณ์เขตหนาว"], desert: ["assets/lessons/arid-aeolian.webp", "กระบวนการลมในเขตแห้งแล้ง"], coast: ["assets/lessons/coastal-process.webp", "คลื่นและการเปลี่ยนแปลงชายฝั่ง"], water: ["assets/lessons/water-atmosphere-cycle.webp", "วงจรน้ำและบรรยากาศ"], monsoon: ["assets/lessons/thai-monsoon.webp", "มรสุมและการกระจายฝน"], cyclone: ["assets/lessons/tropical-cyclone.webp", "โครงสร้างของพายุหมุนเขตร้อน"], urban: ["assets/lessons/urban-climate.webp", "เมือง พลังงาน และกิจกรรมมนุษย์"], ocean: ["assets/lessons/ocean-circulation.webp", "การหมุนเวียนของมหาสมุทร"], coral: ["assets/lessons/coral-mangrove.webp", "ระบบนิเวศปะการังและป่าชายเลน"], amazon: ["assets/lessons/amazon.webp", "ลุ่มน้ำและป่าฝนขนาดใหญ่"], andes: ["assets/lessons/andes.webp", "เทือกเขาและความต่างระดับ"], biome: ["assets/lessons/biome-gradient.webp", "ชีวนิเวศตามอุณหภูมิและความชื้น"], groundwater: ["assets/lessons/groundwater-aquifer.webp", "ชั้นหินอุ้มน้ำและการเติมน้ำ"], terrace: ["assets/lessons/terrace-agriculture.webp", "การจัดการดินและน้ำบนพื้นที่ลาดชัน"]
};

function chooseAssets(title, chapter) {
  const rules = [
    [/ระบบสุริยะ|แยกชั้น|เปลือกโลก เนื้อโลก|งบพลังงาน/, ["earth", "rock"]],
    [/แผ่นดินไหว|คลื่นแผ่นดินไหว|ภูเขาไฟ|สึนามิ|รอยต่อแผ่น/, ["quake", "mountain"]],
    [/เลื่อนทวีป|แผ่ขยาย|เทือกเขาอายุน้อย|โครงสร้างธรณี/, ["mountain", "rock"]],
    [/ผุพัง|กร่อน|มวลดิน|สะสมตะกอน/, ["weather", "rock"]],
    [/แม่น้ำ|ลุ่มน้ำ|ที่ราบตะกอน/, ["amazon", "water"]], [/คาร์สต์|ชั้นหินอุ้มน้ำ|โอเอซิส|น้ำใต้ดิน/, ["groundwater", "water"]],
    [/ชายฝั่ง|คลื่น|น้ำขึ้นน้ำลง|เกาะ/, ["coast", "ocean"]], [/ทะเลทราย|กระบวนการลม/, ["desert", "weather"]], [/ธารน้ำแข็ง|เขตหนาว|น้ำแข็ง/, ["glacier", "water"]],
    [/บรรยากาศ|รังสี|อุณหภูมิ|ความชื้น|เมฆ|หยาดน้ำฟ้า/, ["water", "urban"]], [/ความกด|ลมประจำ|มรสุม|ลมกรด/, ["monsoon", "water"]], [/มวลอากาศ|พายุหมุน/, ["cyclone", "water"]], [/เอลนีโญ|ลานีญา|ภูมิอากาศ/, ["ocean", "urban"]],
    [/มหาสมุทร|ความเค็ม|ความหนาแน่น|กระแสน้ำ|น้ำผุด|พื้นทะเล|ร่องลึก/, ["ocean", "coast"]], [/ปะการัง|ป่าชายเลน|ประมง|มลพิษจากลุ่มน้ำ/, ["coral", "ocean"]],
    [/แอนดีส|ที่ราบสูง/, ["andes", "mountain"]], [/เอเชีย|แอฟริกา|ยุโรป|อเมริกา|ภูมิภาค|พืชพรรณ/, ["biome", "amazon"]],
    [/ดิน|อนุรักษ์ดิน|ฟื้นฟูพื้นที่|เกษตร/, ["terrace", "weather"]], [/แร่|ถ่านหิน|น้ำมัน|เหมือง|หิน/, ["rock", "urban"]], [/พลังงาน|ประสิทธิภาพ|เศรษฐกิจหมุนเวียน/, ["urban", "terrace"]],
    [/อุตสาหกรรมอาหาร|สิ่งทอ/, ["terrace", "urban"]], [/ท่าเรือ|ห่วงโซ่|ขนส่ง|ย้ายฐาน|กระจุกตัว/, ["coast", "urban"]], [/อุตสาหกรรม|เทคโนโลยี|สารกึ่งตัวนำ|บริการดิจิทัล|แรงงาน|ตลาด/, ["urban", "terrace"]]
  ];
  const match = rules.find(([pattern]) => pattern.test(title));
  const defaults = [["rock","weather"],["water","monsoon"],["ocean","coral"],["mountain","biome"],["groundwater","terrace"],["urban","coast"]][chapter];
  return (match ? match[1] : defaults).map((key) => assets[key]);
}

function renderNotFound() {
  document.querySelector("#topicMain").innerHTML = `<section class="topic-error"><h1>ไม่พบหัวข้อที่ต้องการ</h1><p>ลิงก์อาจไม่สมบูรณ์ กรุณากลับไปเลือกเรื่องจากสารบัญ</p><a href="index.html#contents">กลับสารบัญ</a></section>`;
}

function renderTopic() {
  if (topicIndex < 0) return renderNotFound();
  const chapterIndex = Math.floor(topicIndex / 16);
  const withinChapter = topicIndex % 16;
  const sectionIndex = Math.floor(withinChapter / 4);
  const chapter = chapterInfo[chapterIndex];
  const section = chapter.sections[sectionIndex];
  const detail = window.SUBTOPIC_DETAILS[requestedTitle];
  const [primary, secondary] = chooseAssets(requestedTitle, chapterIndex);
  const previous = topicKeys[topicIndex - 1];
  const next = topicKeys[topicIndex + 1];
  document.title = `${requestedTitle} | ภูมิศาสตร์โลก`;
  document.querySelector("#topicMain").innerHTML = `
    <header class="topic-hero"><img src="${primary[0]}" alt="${primary[1]}"><div><nav aria-label="ตำแหน่งบทเรียน"><a href="index.html#contents">สารบัญ</a><span>›</span><span>${chapter.title}</span></nav><p>บทที่ ${chapterIndex + 1} · ${chapter.english}</p><h1>${requestedTitle}</h1><p>${detail}</p></div></header>
    <div class="topic-layout">
      <aside class="topic-outline"><a href="index.html#chapter-${chapterIndex + 1}">← กลับบท ${chapter.title}</a><p>ในหน้านี้</p><nav><a href="#overview">ภาพรวม</a><a href="#process">กระบวนการ</a><a href="#evidence">หลักฐานและตัวอย่าง</a><a href="#importance">ความสำคัญ</a></nav></aside>
      <article class="topic-article">
        <section id="overview"><span class="section-number">01</span><h2>ความหมายและภาพรวม</h2><p class="topic-lead">${detail}</p><p>${chapter.context} สำหรับเรื่อง “${requestedTitle}” ควรเริ่มจากการระบุตำแหน่งและมาตราส่วนก่อน แล้วจึงพิจารณาว่าพลังงาน วัสดุ น้ำ อากาศ สิ่งมีชีวิต หรือกิจกรรมมนุษย์ส่วนใดเป็นตัวขับหลัก</p></section>
        <figure class="topic-main-figure"><img src="${primary[0]}" alt="${primary[1]}"><figcaption><strong>อ่านภาพ</strong>${primary[1]} ให้สังเกตรูปร่าง แนว การเปลี่ยนระดับ และความสัมพันธ์ขององค์ประกอบที่ช่วยอธิบาย ${requestedTitle}</figcaption></figure>
        <section id="process"><span class="section-number">02</span><h2>กระบวนการเกิดและลำดับเหตุผล</h2><p>${chapter.context} กระบวนการไม่ได้เกิดในเหตุการณ์เดียว แต่เป็นผลสะสมที่แต่ละขั้นส่งต่อเงื่อนไขไปยังขั้นถัดไป</p><ol class="topic-process">${chapter.steps.map((step, i) => `<li><span>${i + 1}</span><div><strong>${step}</strong><p>${i === 0 ? `ระบุจุดเริ่มต้นและเงื่อนไขของ ${requestedTitle}` : i === 1 ? "ติดตามว่าวัสดุหรือพลังงานเปลี่ยนสถานะและตำแหน่งอย่างไร" : i === 2 ? "สังเกตการถ่ายเท การสะสม หรือการเชื่อมต่อกับระบบข้างเคียง" : "อ่านผลลัพธ์ที่ปรากฏในภูมิประเทศ ภูมิอากาศ ทรัพยากร หรือกิจกรรมมนุษย์"}</p></div></li>`).join("")}</ol></section>
        <section id="evidence"><span class="section-number">03</span><h2>หลักฐานและตัวอย่างเชิงพื้นที่</h2><p>${chapter.evidence} เมื่อนำหลักฐานหลายชนิดมาเทียบกัน เราสามารถแยกผลที่เกิดจาก ${requestedTitle} ออกจากกระบวนการอื่นที่อาจสร้างรูปแบบคล้ายกันได้</p><figure class="topic-secondary-figure"><img src="${secondary[0]}" alt="${secondary[1]}" loading="lazy"><figcaption>${secondary[1]} เป็นบริบทอีกแบบหนึ่งที่ช่วยเชื่อมกลไกกับพื้นที่จริง</figcaption></figure></section>
        <section id="importance"><span class="section-number">04</span><h2>ความสำคัญต่อโลกและมนุษย์</h2><p>${chapter.importance}</p><p>ความรู้เรื่อง ${requestedTitle} ยังช่วยเชื่อมบทเรียนหมวด ${chapter.title} กับหัวข้ออื่น เพราะระบบโลกไม่แยกส่วน การเปลี่ยนแปลงในตำแหน่งหนึ่งอาจส่งผลต่อการไหลของน้ำ พลังงาน วัสดุ ระบบนิเวศ เมือง หรือเศรษฐกิจในพื้นที่อื่น</p></section>
        <aside class="topic-summary"><strong>สรุปใจความ</strong><p>${detail}</p></aside>
        <nav class="topic-pagination" aria-label="เปลี่ยนหัวข้อ">${previous ? `<a href="topic.html?topic=${encodeURIComponent(previous)}"><span>เรื่องก่อนหน้า</span>${previous}</a>` : `<span></span>`}${next ? `<a href="topic.html?topic=${encodeURIComponent(next)}"><span>เรื่องถัดไป</span>${next}</a>` : `<a href="index.html#contents"><span>อ่านครบแล้ว</span>กลับสารบัญ</a>`}</nav>
      </article>
    </div>`;
}

document.querySelector("#themeToggle").addEventListener("click", (event) => { document.body.classList.toggle("dark"); const dark = document.body.classList.contains("dark"); event.currentTarget.textContent = dark ? "โหมดกลางวัน" : "โหมดกลางคืน"; localStorage.setItem("geo-theme", dark ? "dark" : "light"); });
if (localStorage.getItem("geo-theme") === "dark") { document.body.classList.add("dark"); document.querySelector("#themeToggle").textContent = "โหมดกลางวัน"; }
renderTopic();
