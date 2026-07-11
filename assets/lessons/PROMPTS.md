# Imagen scientific visual set

ภาพทั้งหมดสร้างด้วย built-in Imagegen ใน use case `scientific-educational` สำหรับ hero อัตราส่วน 16:9 จากนั้นแปลงเป็น WebP 1280×720 คุณภาพ 82 เพื่อใช้บนเว็บ

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

`app.js` matches every lesson using its id, title, category, subcategory and key concept. Specific lesson assets take precedence; unmatched interdisciplinary lessons use the generated Earth-system visual rather than an unrelated stock image.
