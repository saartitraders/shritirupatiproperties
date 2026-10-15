# Shri Tirupati Properties

A responsive, static website for Mundka and nearby West Delhi. Ready for GitHub Pages: no framework, installation, build process, paid API or backend required.

## Publish on GitHub Pages

1. Create a GitHub repository, for example `shri-tirupati-properties`. Use a public repository for GitHub Free.
2. Extract the supplied ZIP. Upload the **contents** of the `shri-tirupati-properties` folder into the repository root. `index.html` must be at the top level, beside `styles.css`, `script.js`, and the `assets` folder. Upload the files, not the ZIP itself.
3. Commit to the `main` branch.
4. Open repository **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select **main** and **/(root)**, then **Save**.
6. Wait for GitHub to finish deployment. The Pages settings page will show the live URL, normally `https://YOUR-USERNAME.github.io/shri-tirupati-properties/`.

All local asset paths are relative, so both repository URLs and custom domains work.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Use shritirupatiproperties.com

First verify the new site at its GitHub Pages URL. Then add `shritirupatiproperties.com` in the repository's Pages custom-domain setting and follow GitHub's DNS guidance. Keep your current site running until the new deployment is ready. No DNS changes or custom-domain switch have been made by this project.

Follow current official DNS and domain verification instructions:
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

## Preview locally

Open `index.html` directly, or from this directory run:

```sh
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Edit the website

- `index.html`: page content, contact details, property categories, areas and FAQs.
- `styles.css`: colours, spacing, typography and responsive layouts.
- `script.js`: mobile navigation, category selection and WhatsApp draft creation.
- `assets/logo.svg`: complete editable vector wordmark.
- `assets/logo-mark.svg`: standalone logo symbol and favicon.
- `credits.html`: required image credits; keep this page and its footer link.
- `privacy.html`: description of the form and third-party services.

Current contact: **+91 81309 66987** and **satishsaini335@gmail.com**, retained from the existing website. If changing the phone number, update `index.html`, `script.js`, and `privacy.html`.

## Enquiries

The form validates the required name and phone fields, encodes the enquiry and opens a WhatsApp draft addressed to the business. It does not send a message automatically. The visitor reviews the draft and presses Send in WhatsApp. No enquiries are stored by the static website.

## Photos and content

The included locality photos show Mundka Metro and Mundka Industrial Area Metro, by Santosh4118, CC BY-SA 4.0. See `credits.html` for source and license links. The four category images are preserved from the previous business website; their original licenses and exact locations were not supplied. Confirm the business has reuse rights or replace them with owned property photographs before publication. They are visibly labeled illustrative, not available listings. No invented prices, reviews, transaction counts or availability claims are included.

The original website’s Mundka banner is reused at the owner’s request. It is stylized imagery, with this distinction explained in Photo credits. The road illustration is not used. The new logo is an original SVG design. Google Fonts is optional; system font fallbacks are provided if it cannot load.

## Delivery status

This package is prepared for GitHub Pages. It has not been uploaded to a GitHub repository or deployed, and the existing live website has not been changed.
