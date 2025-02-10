# Web Fundamentals
[![DOI](https://zenodo.org/badge/49000057.svg)](https://zenodo.org/badge/latestdoi/49000057)

This repository contains the slides for the [Web Fundamentals](http://rubenverborgh.github.io/WebFundamentals/) module
of the Ghent University course [Web Development](http://studiegids.ugent.be/2016/EN/studiefiches/C003779.pdf).
<br>
[View the slides online.](http://rubenverborgh.github.io/WebFundamentals/)

## Questions, feedback and suggestions welcome!
- Do you have a **question** on one of topics? [Please create an issue.](https://github.com/RubenVerborgh/WebFundamentals/issues/new)
- Do you have **feedback** on contents or form? [Please create an issue.](https://github.com/RubenVerborgh/WebFundamentals/issues/new)
- Do you have a **suggestion** to improve the slides? [Please create a pull request.](https://github.com/RubenVerborgh/WebFundamentals/pulls)

Please read and accept the [contributor agreement](https://github.com/RubenVerborgh/WebFundamentals/blob/gh-pages/CONTRIBUTING.md) before contributing.

## Finding your way around
This repository contains:
- **1 introductory slidedeck** ([`index.html`](https://github.com/RubenVerborgh/WebFundamentals/blob/gh-pages/index.html) in the [root folder](https://github.com/RubenVerborgh/WebFundamentals/))
- **7 lecture slidedecks** (`index.html` files in subfolders such as [`architecture`](https://github.com/RubenVerborgh/WebFundamentals/tree/gh-pages/architecture))
- **shared [`images`](https://github.com/RubenVerborgh/WebFundamentals/tree/gh-pages/_shared/images), [`styles`](https://github.com/RubenVerborgh/WebFundamentals/tree/gh-pages/_shared/styles), [`fonts`](https://github.com/RubenVerborgh/WebFundamentals/tree/gh-pages/_shared/fonts), and [`scripts`](https://github.com/RubenVerborgh/WebFundamentals/tree/gh-pages/_shared/scripts)**
- **`images` per lecture** (`images` folders in subfolders such as [`architecture`](https://github.com/RubenVerborgh/WebFundamentals/tree/gh-pages/architecture))
- **auxiliary files** in the [root folder](https://github.com/RubenVerborgh/WebFundamentals/)

## How to start
A typical starting point would be to open up any `index.html` file, either in the root folder or any of the subfolders. This allows you to edit the contents of the corresponding slidedeck.

The slides themselves are regular HTML files, brought to life with the [Shower](https://github.com/shower/shower) presentation engine. They use the [Clear](https://github.com/RubenVerborgh/Shower-Clear) template with a few customizations in [`_shared/styles/web-fundamentals.css`](https://github.com/RubenVerborgh/WebFundamentals/blob/gh-pages/_shared/styles/web-fundamentals.css).

You can just open the slides in your browser. from the local filesystem while editing. Alternatively, you can install [gulp](http://gulpjs.com/) and run the `gulp` command in the root folder, which will autorefresh your browser upon changes.

## License
Except where otherwise noted, the content of these slides is licensed under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/).
