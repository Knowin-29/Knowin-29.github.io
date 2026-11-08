# KnowinSpatial Lab

Focusing on Embodied Foundational Models, Simulation Data Engine and Spatial Perception.

Live site: **https://knowin-29.github.io/**

- KnowinRouter / EKT-Router and Anvil link to their existing project pages and code.
- [KnowinMem / KIM](https://knowin-29.github.io/KnowinMem/) provides seven research panels: overview, experiments, results, demos, samples, blog, and VLA research.
- SpatialGauge is the spatial supervision and evaluation project.

Static HTML/CSS with no build dependencies, analytics, or API credentials. Preview
with `python -m http.server 8000`. The Pages workflow deploys `main`.

Edit `index.html` for projects and `style.css` for layout. The compact panel fits
common desktop viewports; smaller screens retain normal document scrolling.

KnowinMem is a buildless HTML/CSS/JavaScript dashboard. Its versioned public
snapshot is in `KnowinMem/data/`; reports are standalone HTML in
`KnowinMem/reports/`. Videos and stills are local static assets. To update the
snapshot, update the JSON and corresponding CSV/report numbers together, including
the visible publication date. Keep protocol-specific results separate and retain
all published comparison conditions. Source paths, credentials and execution logs
are not part of the public site.

The November 4 release includes four evaluation panels, four paired video demos,
twelve sample trajectories, six reports and a searchable 37-entry research index.
All navigation, filtering and random sampling run locally in the visitor's browser.

The November 6 training update adds a bimanual adaptation report, marks all three
matched adapters as trained, and lists their shared-layout evaluation separately.
The 22:17 UTC progress snapshot includes 9,102 accepted RoboTwin base-policy
cases and the first 100 accepted paired-context executions. Three-model
evaluation continues toward 30,000 executions on 10,000 shared layouts.

The bimanual demo update adds five three-camera recordings and an eighth Blog
report. The recordings follow the first accepted shard's original case order
and retain all 1,143 observations at 15 observation frames per second, with
terminal outcomes displayed for each case. Existing evaluation tables, CSVs,
videos, the two synchronized comparisons and the 44-entry research index remain
unchanged. For video seeking in local preview, use an HTTP server with Range
support, such as `npx http-server -p 8000`.

See [NOTICE](NOTICE.md) for project attribution and [LICENSE](LICENSE) for the
retained source license.

The November 7 base-policy release adds a fifth result panel and a ninth report:
Frozen X-VLA-RoboTwin2 on 10,000 fixed layouts, with 66.04% clean and 23.68%
randomized success. The complete 50-task table and 100-row CSV accompany the
two aggregate rows in `results.csv`. The 19:50 UTC snapshot records 900 accepted
KIM condition-layout executions (300 per condition on 300 shared layouts).
Original assets, prior results, reference library and page styling are retained.

The November 8, 00:02 UTC progress update records 1,300 accepted KIM condition-layout
executions: 500 paired, 400 successful-context and 400 constant-context. All
three conditions are complete on 400 shared layouts. The local continuation
has accepted 400 of 600 executions, with the remaining 200 continuing on two
L20 GPUs; the cloud allocation for 28,500 executions remains queued.
