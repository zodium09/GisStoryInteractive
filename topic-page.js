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

const relationshipLabels = {
  sequence: "ลำดับต่อเนื่อง (sequence)",
  branching: "แตกแขนง (branching)",
  comparison: "เปรียบเทียบ (comparison)",
  balance: "สมดุลรับและจ่าย (balance)",
  flow: "การไหล (flow)",
  feedback: "วงจรป้อนกลับ (feedback)",
  profile: "การเปลี่ยนตามแนวดิ่ง (profile)",
  network: "เครือข่าย (network)",
  classification: "การจำแนก (classification)",
  "source-to-sink": "จากต้นทางสู่แหล่งสะสม (source to sink)",
  budget: "งบรับ จ่าย และเก็บ (budget)",
  cycle: "วัฏจักร (cycle)",
  decision: "การตัดสินใจหลายปัจจัย (decision)",
};

const productionLabels = {
  hybrid: "GPT Image ร่วมกับป้ายและข้อมูลที่ควบคุมได้",
  "deterministic-svg": "แผนภาพที่จัดวางและตรวจข้อความได้แน่นอน",
  "gis-map": "แผนที่จากข้อมูลเชิงพื้นที่และแหล่งอ้างอิง",
  "gpt-raster": "ภาพจำลองจาก GPT Image",
};

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
  const visualSpec = window.GEOSTORY_TOPIC_VISUAL_SPECS?.[requestedTitle];
  const visualPlan = window.GEOSTORY_VISUALS.getLessonVisual(requestedTitle, chapterIndex);
  const model = window.GEOSTORY_VISUALS.getSectionModel(chapterIndex, sectionIndex);
  const primary = visualPlan.primary;
  const secondary = visualPlan.secondary;
  const previous = topicKeys[topicIndex - 1];
  const next = topicKeys[topicIndex + 1];
  const visualStatus = visualPlan.fit === "direct" ? "ภาพอธิบายตรงหัวข้อ" : "ภาพบริบทของหมวด";
  const annotationKey = primary.annotations.length ? `<ol class="visual-key">${primary.annotations.map((item, index) => `<li><span>${index + 1}</span><div><strong>${item.label}</strong><p>${item.detail}</p></div></li>`).join("")}</ol>` : "";
  const visualBrief = visualSpec ? `<section id="visual-reading" class="visual-brief" aria-labelledby="visual-brief-title">
    <div class="visual-brief-heading"><span class="section-label">มาตรฐานภาพเฉพาะเรื่อง</span><h2 id="visual-brief-title">ภาพต้องช่วยให้เข้าใจอะไร</h2><p>${visualSpec.lessonObjective}</p></div>
    <blockquote>${visualSpec.inImageExplanationTH}</blockquote>
    <div class="visual-brief-grid">
      <div><strong>สิ่งที่ต้องเห็น</strong><ul>${visualSpec.mustShow.map((item) => `<li>${item}</li>`).join("")}</ul></div>
      <div><strong>ป้ายสำคัญในภาพ</strong><p class="label-chips">${visualSpec.labelsTH.map((label) => `<span>${label}</span>`).join("")}</p></div>
      <div class="brief-warning"><strong>ข้อผิดพลาดที่ต้องหลีกเลี่ยง</strong><ul>${visualSpec.mustAvoid.map((item) => `<li>${item}</li>`).join("")}</ul></div>
    </div>
    <dl class="visual-production"><div><dt>รูปแบบภาพ</dt><dd>${productionLabels[visualSpec.productionMode] || visualSpec.productionMode}</dd></div><div><dt>ขอบเขตพื้นที่</dt><dd>${visualSpec.spatialScale}</dd></div><div><dt>ช่วงเวลา</dt><dd>${visualSpec.timeScale}</dd></div></dl>
  </section>` : "";
  const sourceLinks = primary.sourceRefs.length ? `<span class="visual-sources"><strong>หลักวิทยาศาสตร์ของภาพ</strong>${primary.sourceRefs.map((source) => `<a href="${source.url}">${source.label}</a>`).join("")}</span>` : "";
  const secondaryFigure = secondary ? `<figure class="topic-secondary-figure"><img src="${secondary.src}" alt="${secondary.alt}" width="${secondary.width}" height="${secondary.height}"><figcaption><span class="visual-fit">ภาพเปรียบเทียบ</span><strong>หลักฐานที่ใช้เทียบ</strong>${secondary.alt}<small>${secondary.limitation}</small></figcaption></figure>` : `<aside class="visual-gap" aria-label="สถานะภาพหลักฐาน"><strong>ยังไม่ใช้ภาพอื่นแทนหลักฐาน</strong><p>หัวข้อนี้ยังไม่มีภาพหลักฐานเฉพาะเรื่องที่ผ่านการตรวจความสอดคล้อง แอปจึงแสดงเกณฑ์การอ่านหลักฐานแทนการวนใช้ภาพที่ไม่เกี่ยวข้อง</p></aside>`;
  document.title = `${requestedTitle} | ภูมิศาสตร์โลก`;
  document.querySelector("#topicMain").innerHTML = `
    <header class="topic-hero"><img src="${primary.src}" alt="${primary.alt}" width="${primary.width}" height="${primary.height}"><div><nav aria-label="ตำแหน่งบทเรียน"><a href="index.html#contents">สารบัญ</a><span>›</span><span>${chapter.title}</span><span>›</span><span>${section}</span></nav><p>บทที่ ${chapterIndex + 1} · ${chapter.english}</p><h1>${requestedTitle}</h1><p>หัวข้อในตอน “${section}” อ่านผ่านกลไก หลักฐาน มาตราส่วนพื้นที่ และมาตราส่วนเวลา</p><span class="hero-visual-status">${visualStatus}</span></div></header>
    <div class="topic-layout">
      <aside class="topic-outline"><a href="index.html#chapter-${chapterIndex + 1}">← กลับบท ${chapter.title}</a><p>ในหน้านี้</p><nav><a href="#overview">ทฤษฎีและภาพรวม</a><a href="#visual-reading">กรอบอ่านภาพ</a><a href="#process">กระบวนการเกิด</a><a href="#evidence">หลักฐานและตัวอย่าง</a><a href="#importance">ความสำคัญ</a></nav></aside>
      <article class="topic-article">
        <section id="overview"><span class="section-label">กรอบอธิบายเฉพาะเรื่อง</span><h2>ความหมายและตำแหน่งในระบบ</h2><p class="topic-lead">${detail}</p><p>${chapter.context} เรื่อง “${requestedTitle}” อยู่ในแบบจำลอง “${model.title}” จึงต้องอ่านทั้งตัวขับ วัสดุที่ตอบสนอง ทิศทางการถ่ายเท และร่องรอยที่เหลืออยู่</p><dl class="scale-strip"><div><dt>มาตราส่วนพื้นที่</dt><dd>${visualSpec?.spatialScale || model.spatialScale}</dd></div><div><dt>มาตราส่วนเวลา</dt><dd>${visualSpec?.timeScale || model.timeScale}</dd></div><div><dt>รูปแบบความสัมพันธ์</dt><dd>${relationshipLabels[model.mode] || model.mode}</dd></div></dl></section>
        <figure class="topic-main-figure visual-${visualPlan.fit}"><img src="${primary.src}" alt="${primary.alt}" width="${primary.width}" height="${primary.height}"><figcaption><span class="visual-fit">${visualStatus}</span><strong>อ่านภาพ</strong>${visualPlan.caption}<small>${visualPlan.disclaimer}</small>${sourceLinks}</figcaption>${annotationKey}</figure>
        ${visualBrief}
        <section id="process"><span class="section-label">ลำดับเหตุและผล</span><h2>${model.title}</h2><p>ขั้นด้านล่างเป็นแบบจำลองของตอน “${section}” ไม่ใช่ลำดับเดียวที่นำไปใช้กับทุกเรื่อง ความเร็ว ทิศทาง จุดเปลี่ยน และวงจรป้อนกลับต้องตรวจร่วมกับมาตราส่วนของหัวข้อนี้</p><ol class="topic-process">${model.steps.map((step, i) => `<li><span>${i + 1}</span><div><strong>${step}</strong><p>${i === 0 ? "กำหนดสภาพตั้งต้นและตัวขับที่ทำให้ระบบเริ่มเปลี่ยน" : i === model.steps.length - 1 ? "อ่านผลลัพธ์ ร่องรอย และเงื่อนไขที่ทำให้ผลต่างกันในแต่ละพื้นที่" : "ติดตามการเปลี่ยนสถานะ ตำแหน่ง หรือการถ่ายเทไปยังส่วนถัดไปของระบบ"}</p></div></li>`).join("")}</ol></section>
        <section id="evidence"><span class="section-label">อ่านหลักฐาน</span><h2>หลักฐานที่ต้องใช้ตรวจคำอธิบาย</h2><p>${model.evidence} ภาพสังเคราะห์ช่วยจัดโครงความคิด แต่หลักฐานของสถานที่และปริมาณจริงต้องมาจากแผนที่ ภาพถ่าย ภาพดาวเทียม ภาคตัดขวาง หรือข้อมูลวัดที่ระบุแหล่งและเวลา</p>${secondaryFigure}</section>
        <section id="importance"><span class="section-label">เชื่อมสู่โลกจริง</span><h2>ความสำคัญต่อโลกและมนุษย์</h2><p>${chapter.importance}</p><p>ความรู้เรื่อง ${requestedTitle} ช่วยเชื่อมบทเรียนหมวด ${chapter.title} กับหัวข้ออื่น เพราะระบบโลกไม่แยกส่วน การเปลี่ยนแปลงในตำแหน่งหนึ่งอาจส่งผลต่อการไหลของน้ำ พลังงาน วัสดุ ระบบนิเวศ เมือง หรือเศรษฐกิจในพื้นที่อื่น การเข้าใจลำดับเหตุและผลจึงช่วยทั้งการอธิบายอดีต ประเมินสถานการณ์ปัจจุบัน และวางแผนรับการเปลี่ยนแปลงในอนาคต</p></section>
        <aside class="topic-summary"><strong>สรุปใจความ</strong><p>${visualSpec?.inImageExplanationTH || `${requestedTitle} ต้องอธิบายผ่านแบบจำลอง “${model.title}” และตรวจด้วย ${model.evidence}`}</p></aside>
        <nav class="topic-pagination" aria-label="เปลี่ยนหัวข้อ">${previous ? `<a href="topic.html?topic=${encodeURIComponent(previous)}"><span>เรื่องก่อนหน้า</span>${previous}</a>` : `<span></span>`}${next ? `<a href="topic.html?topic=${encodeURIComponent(next)}"><span>เรื่องถัดไป</span>${next}</a>` : `<a href="index.html#contents"><span>อ่านครบแล้ว</span>กลับสารบัญ</a>`}</nav>
      </article>
    </div>`;
}

document.querySelector("#themeToggle").addEventListener("click", (event) => { document.body.classList.toggle("dark"); const dark = document.body.classList.contains("dark"); event.currentTarget.textContent = dark ? "โหมดกลางวัน" : "โหมดกลางคืน"; localStorage.setItem("geo-theme", dark ? "dark" : "light"); });
if (localStorage.getItem("geo-theme") === "dark") { document.body.classList.add("dark"); document.querySelector("#themeToggle").textContent = "โหมดกลางวัน"; }
renderTopic();
