# Design Analysis — On Da Radę

> Figma file: `iyrRYxHYeNx3n3MpEVyHWT`  
> Main frame: `212:5` — `main frame` — 1280×4297 px

---

## Sekcje strony (top → bottom, y-pozycje w ramce)

| # | Nazwa | Y start | Y end | Node | Wysokość |
|---|-------|---------|-------|------|---------|
| 1 | Header | 0 | ~140 | (elementy rozproszone) | ~140 |
| 2 | Hero | 140 | 808 | elementy: 212:19, 212:6, 249:96 | ~668 |
| 3 | O co chodzi w kampanii? | 808 | 1660 | Rectangle 127 `212:13` | 852 |
| 4 | Jakie zachowania są nieakceptowalne? | 1660 | ~2425 | Rectangle 130 `246:10` (y=1743, h=588) | ~765 |
| 5 | Ojcowie i partnerzy z całego świata | 2425 | 2949 | Rectangle 131 `247:43` | 524 |
| 6 | Spoty video | 2949 | ~3392 | brak tła-rect, free layout | ~443 |
| 7 | Spot radiowy + Pobierz ulotkę | 3392 | 3792 | Rect 139 `249:119` + Rect 140 `250:122` | ~400 |
| 8 | Źródła | 3792 | 4172 | Rectangle 152 `251:187` | 349 |
| 9 | Footer | 4172 | 4297 | Rectangle 138 `249:98` | 124 |

---

## Szczegóły sekcja po sekcji

### 1. Header (y=0–140)
- **Logo** `212:14` — x=64, y=26, 134×88 px
- **Nav** — 5 linków, y≈50, font: Barlow Condensed 700, 24px
  - `O kampanii` x=251
  - `Na co uważać` x=395
  - `Dobre przykłady` x=574
  - `Materiały` x=792
  - `Źródła` x=952
- **Prawy element** `249:87 "Group 1"` — x=1076, y=49, 150×40 → prawdopodobnie CTA/język/social
- **Ikony** `248:52, 248:53` — x≈1194-1202, y≈60-64

### 2. Hero (y=0–808)
- **Hero image** `212:19 "image 86"` — x=259, y=169, 695×454
- **Character (tata z dzieckiem)** `212:6 "image 14"` — x=0, y=233, 405×575
- **NOWY element** `249:96 "image 88"` — x=720, y=194, 563×614 (branding/watercolour - inna pozycja!)
  - poprzedni: x=717 y=119 766×754 → zmienione wymiary i pozycja
- **Przycisk różowy** `212:15` — x=259, y=650, 292×84
  - Tekst + ikona grupy `248:55` x=280, y=669
- **Przycisk niebieski** `251:160 "Rectangle 146"` — x=660, y=650, **312×84** (był 302!)
  - Ikony play: `251:165, 251:166` — x=675, y=667/682

### 3. O co chodzi w kampanii? (y=808–1660)
- **Tło** `212:13 "Rectangle 127"` — 1280×852, kolor: #fcebf0 (z poprz. impl.)
- **Nagłówek** `218:2` — x=409.5, y=856, 500×60
- **Dekoracja** `247:44 "Vector 1"` — x=356.7, y=916, 438.3×37.8 (podkreślenie/flourish)
- **Treść** `263:25` — x=128, y=973, 1061×679
  - *"„On Da Radę" to kampania społeczna skierowana do kobiet, promująca świadomy wybór partnera..."*

### 4. Jakie zachowania są nieakceptowalne? (y=1660–2425)
- **Tło** `246:10 "Rectangle 130"` — x=83, y=1743, 1114×588, kolor: **TBD**
- **Nagłówek** `247:39` — x=443, y=1708, 426×120
- **Dekoracja** `247:41 "Vector 1"` — x=335, y=1857, 631×149
- **Zdjęcie** `251:172 "image 90"` — x=827, y=1965, 353×346
- **Bullet 1** (y=1877): *"Przemoc i dręczenie psychiczne – obejmuje bicie, popychanie..."*
- **Bullet 2** (y=1987): *"Brak szacunku do granic – ignorowanie „nie"..."*
- **Bullet 3** (y=2062): *"Zaniedbywanie dzieci – brak opieki..."*
- **Infolinia** `251:249` (y=2217) — *"Jeśli potrzebujesz pomocy... Niebieska Linia 800 120 002"*

### 5. Ojcowie i partnerzy z całego świata (y=2425–2949)
- **Tło** `247:43 "Rectangle 131"` — 1280×524, kolor: **TBD**
- **Nagłówek** `248:67` — x=45, y=2479, 391×123
- **Podtytuł** `248:74` — x=32, y=2628, 409×249
- **Karty** (carousel — karty wychodzą poza 1280px):
  - Rect 132 x=456, y=2467, 319×441
  - Rect 133 x=844, y=2467, 319×441
  - Rect 134 x=1232, y=2467, 319×441 (częściowo poza)
  - `Group 1 249:88` — dalsze karty x=1400+ (poza widokiem)
- **Mark Cronin** (x=492, y=2687) + opis
- **Ben Ryan** (x=878, y=2687) + opis

### 6. Spoty video (y=2949–3392)
- **Nagłówek** `251:153` — *"Spoty video"* — x=53, y=2987, 282×67
- **Dekoracja** `251:152 "Vector 3"` — x=60.5, y=3041
- **Przycisk YouTube** `251:163` — x=716, y=2987, 507×84 — *"OBEJRZYJ SPOTY NA YOUTUBE"*
- **Miniatury wideo** (3 kafelki w rzędzie):
  - x=57, y=3109, 368×229
  - x=456, y=3109, 368×229
  - x=855, y=3109, 368×229

### 7. Spot radiowy + Pobierz ulotkę (y=3392–3792)
- **Lewa kolumna** (Rect 139): *"Spot radiowy"* + player (play icon + waveform + timer 0:00/0:30)
- **Prawa kolumna** (Rect 140): *"Pobierz ulotkę kampanii"* + miniaturki ulotki + btn *"Pobierz PDF"*

### 8. Źródła (y=3792–4172)
- **Tło** `251:187 "Rectangle 152"` — x=38, y=3792, 1193×349, kolor: **TBD**
- **Nagłówek** *"Źródła"* — x=567, y=3807

### 9. Footer (y=4172–4297)
- **Tło** `249:98 "Rectangle 138"` — 1283×124, kolor: **TBD**
- **Logo** `249:99` — x=0, y=4172, 192×126
- **Tagline** `251:207` — *"Świadomy wybór. Lepsza relacja. Lepsza przyszłość."* — x=223, y=4198
- **Dekoracje tagline** — Vectors 251:209–214
- **Nav** (5 linków, y≈4219–4230)

---

## Zmiany vs. obecna implementacja

| Element | Było | Jest w Figmie |
|---------|------|---------------|
| Branding/watercolour | x=717 y=119 766×754 | `image 88` x=720 y=194 **563×614** |
| Btn niebieski szerokość | 292px | **312px** |
| Btn niebieski x | 662 | **660** |
| Ikony play na przyciskach | brak | Vector 251:165, 251:166 |
| Header prawy | 5 linków | + Group 1 (x=1076, 150×40) |
| Sekcje pod hero | tylko empty pink band | **6 pełnych sekcji + footer** |

---

## Tokeny designu ✅ KOMPLETNE

| Token | Wartość | Border |
|-------|---------|--------|
| Pink CTA | `#d7316e` | — |
| Blue CTA | `#225ea1` | — |
| Tło sek. 3 (O kampanii) | `#fcebf0` | — |
| Tło sek. 4 (Zachowania) | `#fff7ef` | `2px dashed #f5bdab` |
| Tło sek. 5 (Ojcowie) | `#f0f8fe` | `1px solid #6ca1bf` (t+b) |
| Tło sek. 7 lewa (Radio) | `#fdecf0` | `2px solid #e2d0d9`, r=15px |
| Tło sek. 7 prawa (PDF) | `#fdecf0` (analogicznie) | |
| Tło sek. 8 (Źródła) | `#f0f8fe` | `1px solid #d9d9d9`, r=8px |
| Tło footer | `#d7316e` | — |
| Font | Barlow Condensed 700 | — |

---

## Plan implementacji (etapy)

- [x] **Etap A**: Kolory wszystkich sekcji — GOTOWE
- [ ] **Etap B**: Naprawa Hero + nowe sekcje — **TERAZ**
- [ ] **Etap C**: Weryfikacja wizualna

---

## Figma Call Log
1. Poprzednia sesja — assets
2. `get_metadata()` — lista stron
3. `get_metadata(0:1)` — pełna struktura


### Co jest już w `index.astro`
- **Header**: logo (left: 64px, top: 26px, 134×88px) + nav 5 linków (Barlow Condensed 700, 24px)
- **Hero section**: height 808px
  - character (tata z dzieckiem): x=0 y=233 405×575px
  - branding watercolour: x=717 y=119 766×754px (za zdjęciem)
  - hero image: x=259 y=169 695×454px
  - 2 przyciski (ZOBACZ ULOTKĘ pink #d7316e, OBEJRZYJ SPOTY blue #225ea1): y=650 292×84px r=39px
- **Pink content band**: 100% width, 463px height, bg #fcebf0

### Czego brakuje
- Wszystkich sekcji poniżej hero
- Treści w pink content band
- Pełnej nawigacji (na co wskazują linki: #uwazac, #przyklady, #materialy, #zrodla)
- Footer

---

## Struktura Figmy — do uzupełnienia

### Strony w pliku Figma
<!-- Do uzupełnienia po sprawdzeniu mcp_figma_get_metadata -->

### Sekcje strony (top-level)
<!-- Do uzupełnienia -->

---

## Notatki sekcja po sekcji

### 1. Header
<!-- Do uzupełnienia -->

### 2. Hero
<!-- Do uzupełnienia -->

### 3. Sekcja różowa (content band)
<!-- Do uzupełnienia -->

### 4–N. Pozostałe sekcje
<!-- Do uzupełnienia -->

---

## Tokeny designu

| Token | Wartość |
|-------|---------|
| Kolor różowy główny | `#d7316e` |
| Kolor niebieski | `#225ea1` |
| Tło różowe (band) | `#fcebf0` |
| Font główny | Barlow Condensed 700 |

---

## Figma Call Log
1. Pierwsze wywołanie (poprzednia sesja — assets)
