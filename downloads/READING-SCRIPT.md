# Reading script — say this out loud

Plain-language version of the presentation. Short lines, written the way you speak.
**Bold in [BRACKETS] = an action, not words to say.** Total time: about 7 minutes.

Recording tips: speak slowly, pause at each new slide, look at the camera when you are not reading. Keep the text large on screen so it is readable in the video.

---

## [CLICK: Slide 1 — title]

Hi, I'm Khagendra Khatri, and this is my tutorial: A Visual Memory for Everyday Objects.

My topic is computer vision that helps older adults remember where they left things — like their glasses.

I'll cover the research behind this, a proposed phone design that works offline, and then I'll show you the live website.

One thing up front: this is a teaching proposal and a simulation. It is not a tested medical product.

---

## [CLICK: Slide 2 — the meaning of "last seen"]

First, what does "last seen" actually mean?

Say the camera sees your glasses on the side table at 9:12.

Then someone moves them while the phone is in your pocket. The camera saw nothing.

So the record still says: side table, 9:12.

Is that wrong? No. It's an honest, dated answer. It tells you where the glasses WERE last observed — not where they are now.

That's the core idea of this whole project. A visual memory can only report what it actually saw, with a time stamp.

The Ego4D benchmark asks exactly this kind of question: when and where did I last see this object? [1]

---

## [CLICK: Slide 3 — proposed mobile pipeline]

Here's the design I propose for a phone.

Step one: the camera feed goes through object detection — that finds candidate objects.

Step two: identity matching decides if it's YOUR glasses, not just any glasses.

Step three: depth and camera pose give us a position in 3D.

Step four: we store a small record — identity, evidence image, time, place, and which map version it belongs to.

Later, when you ask "where are my glasses?", the app checks three things: is the identity confident, is the record fresh, and does the map still line up. Only then does it give you directions.

This streaming idea comes from recent work on object memory [3], but the specific thresholds and layout are my teaching design.

The website includes real Python code that does this update and retrieval step.

---

## [CLICK: Slide 4 — pixel, depth, and camera pose]

Now the geometry — how a pixel becomes a location.

You have a pixel in the image. The camera's calibration turns that into a ray pointing out into the room.

Depth tells you how far along that ray. Say it's 2 meters.

That gives a camera-space point: 0.2, 0.1, and 2 meters.

Then camera pose — rotation and translation — moves that point into world coordinates. Add a 1 meter move sideways, and you get 1.2, 0.1, 2.

One warning: world-to-camera and camera-to-world transforms are inverses. Get that backwards and your numbers look plausible but are wrong.

And before any guidance is shown, the new session must be aligned with the saved map. A precise-looking arrow is misleading if the two maps don't agree.

This builds on ORB-SLAM3 [4], EgoLoc [5], and Apple's saved world maps [6].

---

## [CLICK: Slide 5 — research results depend on assumptions]

Now, what does the research actually show?

This chart comes from the ESOM paper, Table 1 [3].

With learned detection and tracking — the real setup — success is 4.02 percent.

With an "oracle" — meaning perfect, idealized detection and tracking — success jumps to 81.92 percent.

That huge gap tells us something important: the weak point is perception and identity, not the memory system.

But notice: this is NOT a "how often seniors find their glasses" number. It's a benchmark score with a low overlap threshold, measured on research datasets.

So my conclusion: read results together with their assumptions.

---

## [CLICK: Slide 6 — then SWITCH SCREEN SHARE TO THE BROWSER]

Let me show you the actual website.

**[SWITCH: share the browser window with the published GitHub Pages site]**

This is the home page. Notice the chapter menu on the left — it stays on every page, so navigation is always one click.

**[CLICK: Interactive lab, chapter 5]**

Here's the interactive lab. The orange dot is the real position of the glasses; the dashed line is what the memory remembers.

First experiment: observation is ON. I move the glasses to the sofa and apply the move. Now I query — and the memory updates. Correct.

Second experiment: I turn observation OFF and move the glasses to the shelf. The real dot moves… but the memory still says sofa.

That's the hidden-move failure. A real app wouldn't even have that orange dot — it can only show you the last supported answer.

**[CLICK: Advance 40 minutes]**

Now I age the record by 40 minutes. The system flags it as stale instead of pretending it's current.

**[UNCHECK: "Phone aligned with saved map"]**

And if I break the map alignment, it keeps the history but withholds the direction arrow. Honest uncertainty.

**[CLICK: chapter 3, Detect and remember]**

This page has the actual algorithm in Python — the update and retrieval code.

**[CLICK: chapter 8, Practice]**

Here's a five-question quiz with explanations, plus a short design exercise.

**[CLICK: chapter 9, References]**

And the annotated bibliography — eight sources with author, date, synopsis, and a reliability rating.

**[SWITCH BACK: share PowerPoint again]**

---

## [CLICK: Slide 7 — offline mobile design]

Back to the design. Why keep it on the phone?

Because the object list is small and enrolled, retrieval can be simple — a picker or a small phrase parser. You don't need a large language model for "where are my glasses?".

Quantization can shrink a model from 32-bit to 8-bit — about 40 MB down to 10 MB for 10 million weights [7]. But smaller doesn't automatically mean faster on a real phone, so measure latency and heat on the actual device.

Privacy matters too. Local storage still describes your home, so keep only selected evidence and give the user a delete button.

And accessibility means readable text, big controls, replayable audio, and an option besides augmented reality [8].

---

## [CLICK: Slide 8 — limits and evaluation]

What can go wrong?

The camera can miss a move — that's the big one. It can confuse two similar objects, lose its map after furniture changes, or run out of battery.

My system should expose those limits instead of answering confidently every time.

For evaluation, I'd run a pilot: ten objects, two rooms, with scripted observed moves and hidden moves. And I'd report correct retrievals, but also false confident answers, abstentions, and relocalization errors — failures included.

Main conclusion: visual memory can organize evidence, but time and uncertainty are part of every answer.

---

## [CLICK: Slide 9 — references]

Finally, the website's bibliography has eight full references with annotations and links — research papers, platform documentation, and accessibility guidance.

If you want to dig further, compare how each paper defines a query, what data it's allowed to use, and how it measures success.

Thank you — the full tutorial is on my GitHub Pages site.

---

## Quick checklist before recording

- [ ] Website published and tested in a private window
- [ ] Browser tab audio muted (only your voice should be heard)
- [ ] Zoom set to "Record to this computer", screen share ON, camera optional
- [ ] Browser zoom large enough that text is readable at 480p
- [ ] One smooth run of 7–8 minutes, then upload as **Unlisted**
