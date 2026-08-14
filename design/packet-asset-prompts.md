# Packet — Mascot Regeneration Prompt Pack

Prompts for regenerating Packet, the Maroon Raccoon mascot, with modern image
models. Written for reference-image workflows (GPT Image, Gemini/Nano Banana,
Midjourney `--cref`), but each prompt also works standalone.

---

## 1. The character bible (paste this into EVERY prompt)

> **Packet**, a friendly cartoon raccoon mascot. Maroon-red fur (#950000) with
> darker maroon-black stripes; classic black raccoon "bandit mask" around big
> expressive dark eyes; white muzzle, white inner ears, and white eyebrow
> patches; small black nose; bushy ringed tail alternating maroon and
> near-black. He wears a crimson-maroon pullover hoodie with white drawstrings,
> and dark charcoal-gray gloved paws. Proportions: chibi, large head, small
> body, roughly 1:1 head-to-body ratio.

## 2. Global style block (append to every prompt)

> Bold clean black outlines, flat cel-shaded vector mascot style with subtle
> two-tone shading, sticker-like, crisp edges, high resolution.
> **Transparent background. No text, no words, no lettering anywhere in the
> image.** Props limited to a palette of charcoal gray (#2e3238), white, and
> muted maroon so they match the brand.

**Negative prompt (where supported):** text, watermark, signature, background
scenery, gradient backdrop, glow halo, drop shadow baked into background,
photorealism, fur texture, extra fingers, gray box

### Why "no text / no background" matters
The current assets bake in gray gradient backdrops, red glow halos, and English
labels ("Quick Call"). On the site those render as mismatched gray rectangles
against the walnut-brown background (#534a40), and baked text can't be
localized or restyled. Transparent PNGs fix all of it — captions live in HTML.

---

## 3. Asset prompts

### A. Character sheet (generate FIRST, then use as the reference image for all others)
> [character bible] + [style block]. Character reference sheet: front view,
> three-quarter view, and side view of the same character standing in a neutral
> pose, arms relaxed, gentle smile. Consistent proportions across all three
> views, evenly spaced on one row.

### B. Consultant Packet (services hero — replaces PacketConsultant_Transparent.png)
> [character bible] + [style block]. Packet sits behind an open charcoal-gray
> laptop angled three-quarters toward the viewer, one paw raised palm-up in a
> welcoming "let me show you" gesture, warm confident smile. Beside the laptop:
> a white coffee mug and a small stack of two books. Empty white speech bubble
> above his paw (no text inside).

### C. Typing Packet (projects hero + 404 — replaces PacketTyping.png)
> [character bible] + [style block]. Packet typing enthusiastically on a
> charcoal-gray laptop, both paws on the keyboard, leaning slightly forward,
> focused happy expression with tongue peeking out, tail curled up behind him.

### D. Step 1 — Quick Call
> [character bible] + [style block]. Packet wearing a charcoal headset with
> microphone, one paw holding a pen over a clipboard, listening attentively
> with a warm smile. An empty white speech bubble floats beside his head.

### E. Step 2 — Quote & Timeline
> [character bible] + [style block]. Packet proudly holding up a white document
> with simple abstract lines and a large maroon checkmark, a small calendar
> icon floating beside it, reassuring smile.

### F. Step 3 — Design & Feedback
> [character bible] + [style block]. Packet at a charcoal-gray desktop monitor
> showing a simple abstract website wireframe (maroon header bar, gray blocks),
> giving a thumbs-up with his free paw, pleased expression.

### G. Step 4 — Launch & Handoff
> [character bible] + [style block]. Packet pressing a big round maroon launch
> button, a small stylized rocket lifting off above it with a short maroon
> exhaust trail, confetti pieces in maroon and white, gleeful open-mouth smile.

### H. 404 Packet (bonus — for the new error page)
> [character bible] + [style block]. Packet holding a flashlight, peeking into
> an open, tipped-over metal trash can with a puzzled expression, one ear
> folded, question mark floating above his head (a simple shape, not a
> typographic character... if the model insists on rendering it as text, drop
> this detail).

### I. Favicon / avatar mark (bonus)
> [character bible] + [style block]. Head-and-shoulders portrait of Packet
> smiling straight at the viewer, hood down, centered in the frame, simple and
> readable at small sizes, no props.

---

## 4. Consistency workflow

1. Generate **A (character sheet)** until it nails Packet — judge against the
   current logo's colors, not memory.
2. Feed that sheet as the **reference image** for every other prompt:
   - GPT Image / Gemini: attach the sheet + "match this character exactly."
   - Midjourney: `--cref <sheet-url> --cw 100`, add `--sref` of your favorite
     result once you have one, keep the same `--seed`.
3. Generate the six site assets in **one sitting with the same settings** —
   style drift between sessions is what made the current set inconsistent.
4. Ask for / export **transparent PNG at 2048px+**, then compress (e.g.
   `squoosh`, `oxipng`) before dropping into `frontend/public/`.
5. Sanity-check every asset on the walnut background: `#534a40`.

## 5. Brand palette reference

| Use                  | Hex        |
| -------------------- | ---------- |
| Packet body fur      | `#950000`  |
| Bright maroon accent | `#bb0101`  |
| Stripe/mask dark     | `#3d0000`  |
| Hoodie               | `#8f1414`  |
| Props / devices      | `#2e3238`  |
| Muzzle, bubbles      | `#ffffff`  |
| Site background      | `#534a40`  |
