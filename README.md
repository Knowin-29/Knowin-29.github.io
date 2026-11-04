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

See [NOTICE](NOTICE.md) for project attribution and [LICENSE](LICENSE) for the
retained source license.
