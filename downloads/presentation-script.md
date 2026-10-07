# Presentation and recording script

Target: about 7–8 minutes including the live website demonstration. Rehearse at your own speaking pace. Use your own voice for the submitted video.

## Slide 1: A visual memory for everyday objects

[0:00–0:35] My topic is mobile computer vision for helping older adults remember where everyday objects were last observed. The central example is a pair of glasses. I will review the research, explain the components of a proposed offline mobile design, and demonstrate the difference between physical reality and stored visual memory. The system described here is a proposal and a teaching simulation, not a validated assistive product.

## Slide 2: The meaning of “last seen”

[0:35–1:15] Consider glasses observed on a side table at nine twelve. If someone moves them while the camera looks elsewhere, the record remains a valid description of that earlier sighting. It does not establish the current location. Recognition, identity matching, and episodic memory answer different questions. Ego4D's visual-query task uses an example image and returns a previous response track. Our proposed interface should show the evidence image, place, and timestamp.
Source [1]: https://ego4d-data.org/docs/benchmarks/episodic-memory/

## Slide 3: Proposed mobile pipeline

[1:15–2:05] Camera observations first pass through object detection and identity matching. A tracker provides continuity across nearby frames, but a tracker ID is not automatically the identity of someone's personal object. Depth and camera pose provide geometry. The application stores a compact, dated observation with its map identifier and evidence. A later query checks identity, freshness, and alignment before calculating displacement. This arrangement draws on the idea of streaming object memory, while the particular threshold policy and application architecture are our teaching design. The website includes original Python code for update and retrieval.
Source [3]: https://arxiv.org/html/2411.16934v2

## Slide 4: Pixel, depth, and camera pose

[2:05–2:55] Start with a calibrated image pixel and its depth along the optical axis. Inverse camera intrinsics produce a ray, and depth gives a camera-space point. Rotation and translation place it in a world coordinate system. The example uses a two meter depth and produces a camera-space point of point two, point one, and two meters. A one meter translation along x gives one point two, point one, and two. Watch the pose convention: world-to-camera and camera-to-world transforms are inverses. Finally, align the new session with the saved map before guidance. A precise-looking arrow is misleading if the maps do not agree.
Sources [4] https://arxiv.org/abs/2007.11898 ; [5] https://arxiv.org/abs/2212.06969 ; [6] https://developer.apple.com/documentation/arkit/saving-and-loading-world-data

## Slide 5: Research results depend on assumptions

[2:55–3:45] This chart compares two configurations from Table 1 of the July twenty twenty-five E SOM manuscript. The learned detection and tracking configuration achieves four point zero two percent success, while the oracle configuration reaches eighty-one point nine two percent. The oracle supplies idealized detection and tracking. It is not a mobile product result. Success here uses a low spatiotemporal overlap threshold with the response track, so it is not a household recovery rate. The gap directs attention to perception and identity failures. CocoFormer addresses query-conditioned detection, and EgoLoc addresses important three-dimensional geometry issues.
Source [3], Table 1, arXiv:2411.16934v2: https://arxiv.org/html/2411.16934v2
Source [2]: https://arxiv.org/html/2211.10528v2
Source [5]: https://arxiv.org/abs/2212.06969

## Slide 6: Live website demonstration

[3:45–5:15] Switch from PowerPoint to the published GitHub Pages website. Show the introduction and persistent chapter navigation briefly, then open Interactive lab. Reset the demo. Move the glasses to the sofa with observation enabled and ask for the last-seen location. Now turn observation off and move them to the shelf. Query again and point out that memory still says sofa. Explain that the orange dot is teaching ground truth unavailable to a real assistant. Advance forty minutes to trigger a stale response. Reset, disable map alignment, and show that directional guidance is withheld. Briefly open Detect and remember to show the Python example, then Practice and References. Return to PowerPoint. This demonstration uses synthetic data and does not run a computer vision model.

## Slide 7: Offline mobile design

[5:15–6:00] An enrolled object inventory allows a relatively simple retrieval interface. A local object picker or a small phrase parser can map a request to an object ID, without a large language model. Quantization can reduce model weight storage, but conversion needs accuracy checks and representative calibration data. Measure actual latency and thermal behavior on the target phone. The record should retain only selected evidence and include a deletion control. Local storage can still reveal private information about a home. Accessibility means readable text, large controls, replayable audio, and alternatives to augmented reality. The proposed system needs testing with intended users.
Sources [7]: https://developers.google.com/edge/litert/conversion/tensorflow/quantization/post_training_quantization ; [8]: https://www.w3.org/WAI/older-users/

## Slide 8: Limits and evaluation

[6:00–6:45] The camera can miss a move, confuse similar objects, or lose its map. Our response policy should expose these limits rather than turn every query into a confident answer. A pilot can use scripted observed and hidden moves in two rooms, with separate enrollment, tuning, and evaluation captures. Report correct last-seen retrieval, false confident answers, abstentions, relocalization success, and geometric errors. Include failures in the denominator. Future progress should improve identity stability, persistent mapping, and user control. The main conclusion is that visual memory can organize evidence, while uncertainty and time remain part of every answer.

## Slide 9: References and further reading

[6:45–7:15] The website's annotated bibliography includes eight distinct works, with title, author, date, synopsis, and reliability assessment. It links primary research, platform documentation, and accessibility guidance. The numerical E SOM result is explicitly versioned to the July twenty twenty-five manuscript. The figures and the simulation are original teaching materials. For further reading, compare how the papers define a query, what data each system may access, and how success is measured. Thank you.
[1] Grauman et al., Ego4D, CVPR 2022. https://ego4d-data.org/docs/benchmarks/episodic-memory/
[2] Xu et al., Where Is My Wallet?, CVPR 2023. https://arxiv.org/html/2211.10528v2
[3] Manigrasso et al., ESOM, WACV 2026; numerical source arXiv v2 2025. https://arxiv.org/html/2411.16934v2
[4] Campos et al., ORB-SLAM3, IEEE T-RO 2021. https://arxiv.org/abs/2007.11898
[5] Mai et al., EgoLoc, ICCV 2023. https://arxiv.org/abs/2212.06969
[6] Apple, Saving and loading world data. https://developer.apple.com/documentation/arkit/saving-and-loading-world-data
[7] Google AI Edge, Post-training quantization. https://developers.google.com/edge/litert/conversion/tensorflow/quantization/post_training_quantization
[8] W3C WAI, Older Users and Web Accessibility. https://www.w3.org/WAI/older-users/
