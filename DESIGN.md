---
name: GeoStory Atlas
description: Interactive field atlas for physical geography and Earth sciences
colors:
  atlas-ink: "#172521"
  atlas-deep: "#21483F"
  mineral: "#C65F3D"
  contour: "#D9A441"
  river: "#2C7281"
  field: "#EEF1EB"
  surface: "#FFFFFF"
  muted: "#53625D"
  line: "#CAD2CC"
typography:
  display:
    fontFamily: "Noto Serif Thai, Georgia, serif"
    fontSize: "clamp(2.75rem, 7vw, 5.75rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Noto Sans Thai, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
rounded:
  sm: "6px"
  md: "12px"
  pill: "999px"
spacing:
  xs: "6px"
  sm: "12px"
  md: "20px"
  lg: "32px"
  xl: "56px"
components:
  button-primary:
    backgroundColor: "{colors.atlas-deep}"
    textColor: "{colors.surface}"
    rounded: "{rounded.sm}"
    padding: "12px 18px"
  chip-active:
    backgroundColor: "{colors.atlas-ink}"
    textColor: "{colors.surface}"
    rounded: "{rounded.pill}"
    padding: "8px 14px"
---

# Design System: GeoStory Atlas

## 1. Overview

**Creative North Star: "โต๊ะทำงานของนักสำรวจโลก"**

หน้าจอให้ความรู้สึกเหมือนโต๊ะอ่านแผนที่ร่วมสมัยที่มีทั้งสมุดภาคสนาม ภาพดาวเทียม ชั้นข้อมูล และหนังสืออ้างอิง ทุกส่วนต้องพาผู้ใช้จากความสงสัยไปสู่หลักฐาน จากภาพรวมไปสู่กลไก และจากกลไกไปสู่สถานที่จริง ความหนาแน่นของข้อมูลสูงได้ แต่ต้องมีลำดับและพื้นที่หายใจ

ระบบนี้ไม่เป็นเว็บสำหรับเด็ก ไม่เป็นคลังกริดการ์ดที่ไร้เส้นทาง และไม่เป็นบทความวิชาการผนังข้อความ ภาพและ motion มีหน้าที่อธิบายสถานะ สเกล หรือกระบวนการเท่านั้น

**Key Characteristics:**

- แผนที่และภาพถ่ายเป็นหลักฐาน ไม่ใช่ฉากหลัง
- ลำดับตัวอักษรแบบสารคดีและหนังสืออ้างอิง
- สีแร่ น้ำ และพืช ใช้ตามความหมายของระบบโลก
- รายละเอียดเปิดเผยตามระดับความรู้ของผู้ใช้

## 2. Colors

พาเลตมาจากหมึกแผนที่ แร่เหล็ก เส้นชั้นความสูง น้ำลึก และพื้นผิวห้องสมุดสีเทาเขียว

### Primary

- **Atlas Deep:** สีหลักสำหรับ navigation การเลือก และการกระทำสำคัญ
- **Atlas Ink:** ตัวอักษรหลักและพื้นผิวที่ต้องการความมั่นคง

### Secondary

- **Mineral:** ใช้กับธรณีวิทยา ความร้อน และจุดเน้นที่ต้องการความสนใจ
- **River:** ใช้กับน้ำ ภูมิอากาศ และข้อมูลเชิงพื้นที่

### Tertiary

- **Contour:** ใช้กับเส้นทาง ระดับ และ annotation ปริมาณน้อย

### Neutral

- **Field:** พื้นหลังหลักที่ลดแสงสะท้อน
- **Surface:** พื้นอ่านเนื้อหา
- **Muted:** ข้อความประกอบที่ยังผ่าน WCAG AA
- **Line:** เส้นแบ่งโครงสร้างและเส้นตาราง

**The Evidence Color Rule.** สีอิ่มตัวต้องระบุหมวด สถานะ หรือข้อมูล ห้ามใช้เพื่อเติมพื้นที่ว่าง

## 3. Typography

**Display Font:** Noto Serif Thai (with Georgia fallback)
**Body Font:** Noto Sans Thai (with system sans fallback)

**Character:** serif ช่วยให้บทเรียนมีน้ำหนักแบบสิ่งพิมพ์ ส่วน sans ทำให้ UI ศัพท์ และข้อมูลย่อยอ่านเร็ว ทั้งคู่รองรับภาษาไทยเต็มรูปแบบ

### Hierarchy

- **Display** (700, responsive, 1.05): ชื่อบทและข้อความเปิดเรื่องเท่านั้น
- **Headline** (700, 2rem, 1.25): หัวข้อสาขาและหัวข้อหลัก
- **Title** (700, 1.2rem, 1.35): ชื่อโมดูลและหัวข้อย่อย
- **Body** (400, 1rem, 1.75): จำกัดบรรทัดบทเรียนที่ 70 ตัวอักษรโดยประมาณ
- **Label** (700, 0.78rem): metadata และป้ายสั้น ไม่ใช่ประโยคตัวพิมพ์ใหญ่

**The Two-Language Rule.** ศัพท์อังกฤษตามหลังคำไทยในตำแหน่งที่ช่วยเรียนรู้ ห้ามสลับภาษาโดยไม่มีเหตุผล

## 4. Elevation

ใช้ tonal layering และเส้นโครงสร้างเป็นหลัก เงาเกิดเฉพาะแผงลอย เมนู หรือวัตถุที่ถูกยกขึ้นจากลำดับเอกสาร

### Shadow Vocabulary

- **Lifted panel** (`0 8px 24px rgba(23,37,33,.12)`): command palette และ mobile navigation
- **Hover lift** (`0 4px 8px rgba(23,37,33,.10)`): ภาพหรือโมดูลที่คลิกได้เท่านั้น

**The Flat Atlas Rule.** พื้นผิวบทเรียนอยู่ในระนาบเดียว เงาไม่ใช้เป็นเครื่องประดับ

## 5. Components

### Buttons

- **Shape:** มุมแม่นยำและไม่อ่อนเกินไป (6px)
- **Primary:** Atlas Deep บนข้อความสีขาว padding 12px 18px
- **Hover / Focus:** สีเข้มขึ้นและ focus ring สองชั้นที่ชัดเจน
- **Secondary:** พื้นโปร่งพร้อมเส้น Atlas Deep

### Chips

- **Style:** ป้าย pill ใช้กับตัวกรองและระดับความรู้เท่านั้น
- **State:** selected ใช้พื้น Atlas Ink และมีเครื่องหมาย ไม่สื่อด้วยสีเพียงอย่างเดียว

### Cards / Containers

- **Corner Style:** 12px สำหรับกลุ่มเนื้อหา 6px สำหรับรายการหนาแน่น
- **Background:** Surface หรือ Field ตามลำดับข้อมูล
- **Shadow Strategy:** แบนโดยค่าเริ่มต้น
- **Border:** เส้น Line 1px เมื่อจำเป็นต่อการแบ่งกลุ่ม
- **Internal Padding:** 20px ถึง 32px

### Inputs / Fields

- **Style:** พื้น Surface เส้น Line และมุม 6px
- **Focus:** เส้น Atlas Deep 2px พร้อม offset
- **Error / Disabled:** มีข้อความและไอคอนเสมอ ไม่พึ่งสี

### Navigation

Navigation แบบ sticky แสดงตำแหน่งปัจจุบัน ระดับ และความคืบหน้า บนมือถือยุบเป็นแผงที่ใช้งานด้วยแป้นพิมพ์ได้

### Earth System Dial

วงแหวนระบบโลกเป็นเครื่องนำทางเชิงแนวคิด แต่ละส่วนเปิดสาขาที่เกี่ยวข้องและอธิบายการเชื่อมโยงข้ามระบบ

## 6. Do's and Don'ts

### Do:

- **Do** ให้ทุกภาพมี caption หรือคำถามชี้สิ่งที่ควรสังเกต
- **Do** ให้ผู้เริ่มต้นเห็นใจความสำคัญภายในหนึ่งหน้าจอ
- **Do** ใช้ progressive disclosure สำหรับสมการ ทฤษฎี และศัพท์ expert
- **Do** รักษา focus, reduced motion และ contrast ระดับ WCAG 2.2 AA

### Don't:

- **Don't** ทำเป็นเว็บสำหรับเด็กหรือคลังกริดการ์ดที่ต้องกรองเองโดยไม่มีเส้นทาง
- **Don't** สร้างบทความวิชาการผนังข้อความ
- **Don't** ใช้นีออน glassmorphism gradient text หรือภาพตกแต่งที่ไม่มีข้อมูล
- **Don't** ใช้แถบสีข้างการ์ด กรอบโค้งเกิน 16px หรือเงาฟุ้งกว้างคู่กับเส้นขอบ
- **Don't** ซ่อนเนื้อหาที่จำเป็นไว้หลัง motion หรือ hover
