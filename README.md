# A Visual Memory for Everyday Objects

CS663 research tutorial · Khagendra Khatri · October 2026

**Live site:** https://khagendra01.github.io/visual-memory-tutorial/ (GitHub Pages, `main` branch, root). Repository: https://github.com/Khagendra01/visual-memory-tutorial

## Start here

Open `index.html` in a modern browser after extracting the ZIP. The tutorial uses static HTML, CSS, JavaScript, SVG diagrams, and bundled MP3 narration. No build, account, API key, model download, or JavaScript framework is required. The simulation uses synthetic observations and does not access a camera or microphone.

For a local server, run `python3 -m http.server 8000` from the extracted folder, then open `http://localhost:8000/`.

Allow approximately 25–28 minutes for reading, the three demo experiments, and the practice questions. Individual pacing varies. The short audio tracks summarize each page; they do not replace the detailed written tutorial. Try an unassisted timed run to confirm the assignment's 15–30 minute target.

## Files

- `index.html` — introduction and learning goals
- `memory.html` — episodic memory and research approaches
- `detection.html` — identity, records, executable algorithm
- `geometry.html` — SLAM, depth, worked geometry, persistent maps
- `demo.html` — interactive last-seen memory simulation
- `mobile.html` — offline processing, resource budgets, accessibility
- `research.html` — results, limitations, evaluation, future directions
- `practice.html` — five-question quiz and design exercise
- `references.html` — eight annotated references and media credits
- `assets/diagrams/` — seven original SVG diagrams
- `assets/audio/` — nine bundled MP3 summaries and matching transcripts
- `downloads/memory.py` — executable Python 3.9+ teaching example
- `downloads/Visual-Memory-Presentation.pptx` — nine slides with speaker notes
- `downloads/presentation-script.md` — timed speaking and live-demo script
- `SUBMISSION-CHECKLIST.md` — GitHub, recording, and rubric checklist

## Publish to GitHub Pages

This tutorial is already published: repository `Khagendra01/visual-memory-tutorial`, branch `main`, Pages source `/(root)`, live at https://khagendra01.github.io/visual-memory-tutorial/. To republish after an edit:

1. Commit the change on `main` and push (`git push origin main`).
2. GitHub rebuilds automatically. Check **Settings → Pages** (Deploy from a branch, `main`, `/(root)`) if the URL ever stops responding. Keep `.nojekyll` in the repository root.
3. Open the published address in a signed-out/private window. Test every page, audio track, diagram, download, demo control, and quiz. Use this published address in your submission and recording.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

All internal links are relative, so the tutorial works both locally from the extracted folder and under the repository subpath.

## Record the presentation

Open the PowerPoint and rehearse with its speaker notes or the Markdown script. The target is roughly 7–8 minutes including a live website demonstration. At slide 6, switch to your GitHub Pages tutorial, demonstrate observed versus hidden moves, show stale/alignment responses, and briefly visit the code, practice, and bibliography pages. Return to the deck for the conclusion.

Record your screen and **your own clearly audible voice** using Zoom or your preferred recorder. Use a large browser window and readable zoom. Mute the page audio while speaking so two voices do not overlap. Upload the recording to YouTube with **Unlisted** visibility and verify the link while signed out. This package includes synthetic page narration, not a recording of your presentation.

## Edit or replace narration

Each page uses `<audio controls preload="none">`. Replace its matching MP3 in `assets/audio/` while retaining the filename. The narration is labeled synthetic and uses the CMU Flite SLT voice. If you replace it with your own voice, update that label and the credits. Keep the transcript beside the player and in the matching `.txt` file consistent with your recording. No autoplay is used.

## Verification performed

- Loaded all nine HTML pages in headless Google Chrome 150 against a local HTTP server: no JavaScript console errors, the nine-link chapter menu and `aria-current` marker correct on every page, one narration player per page, and every image carries alternative text.
- Crawled all 28 unique local link targets (pages, diagrams, stylesheet, script, downloads): every target returned HTTP 200, and every numbered citation resolves to a matching `id` on the bibliography page.
- Exercised the interactive lab in the browser across all three experiments: observed move updates the record, hidden move leaves the record unchanged, quality below 0.80 is rejected, 40 minutes produces the stale response, alignment off withholds guidance, the wallet starts unknown, and reset restores the initial state.
- Exercised the quiz in the browser: all-correct scores 5 of 5, one wrong answer scores 4 of 5 with the right explanation, reset clears feedback and score, and an empty submission reports 0 of 5.
- Checked responsive layout at 360, 390, 768, and 1024 CSS pixels on every page: no horizontal page scrolling, and wide tables and code blocks scroll inside their own containers.
- Decoded all nine MP3 files in Chrome (43–56 seconds each) and confirmed each page transcript matches its `.txt` transcript file; seven captioned diagram files present.
- Ran the Python example (returns the documented 3.61 m result) and validated the PPTX package, slide geometry, notes, and editable chart data.
- Published to GitHub Pages and crawled the live site: all nine pages plus all 28 link targets (diagrams, MP3s, `memory.py`, the PowerPoint) return HTTP 200 from `https://khagendra01.github.io/visual-memory-tutorial/`, and the deployed `assets/app.js` matches the local file byte for byte.

**Verification boundary:** The checks above ran headless, so they do not replace looking at the pages. Human checks remain for visual appearance, keyboard focus order, audible playback, opening the PowerPoint in desktop Microsoft PowerPoint, and a signed-out pass over the live URL. Do the checks below on your own devices before submitting.

## Final browser checks

- Desktop and phone: no clipped headings or unwanted page-wide scrolling.
- 200% zoom: content and controls remain usable. Wide tables and code scroll within their containers.
- Keyboard: tab through navigation, audio, demo controls, and the quiz; verify visible focus and skip link.
- Audio: play, pause, seek, and replay all nine tracks; compare a passage with each transcript.
- Diagrams: open each full-size SVG and verify text readability.
- Demo: execute all three experiments; verify the wallet's initial unknown state and reset.
- Quiz: submit correct, incorrect, and incomplete answers, then reset.
- Citations: follow the numbered links and primary-source links.
- GitHub: verify each chapter loads directly from its URL, and the Python and PowerPoint downloads open.
- Offline: extract the ZIP and test locally with networking disabled. External references naturally require a connection.

The educational demo is not a complete mobile computer-vision application and has no measured clinical or household performance. Research results and illustrative numerical examples are labeled separately.
