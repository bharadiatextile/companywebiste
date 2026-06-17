# Bharadia Textiles — Website

A fresh, responsive single-page marketing website for **Bharadia Textiles (Textile Division)**,
Indore (M.P.), India — Exporter & Agents of Yarn, Fabrics & Raw Cotton.

## Files
- `index.html` — page content (Hero, About, Products, Markets, Why Us, Contact, Footer)
- `styles.css` — all styling (indigo + gold textile theme, fully responsive)
- `script.js` — mobile nav, scroll reveal, footer year, WhatsApp links, form submission
- `assets/` — vector graphics (SVG):
  - `logo-mark.svg` — logo (yarn-cone mark), used in header & footer
  - `favicon.svg` — browser tab icon
  - `hero-illustration.svg` — hero artwork (yarn cones, fabric roll, cotton)
  - `og-image.svg` — social-share preview card

All artwork is SVG, so it stays sharp at any size. To use real photos instead,
drop them in `assets/` and point the relevant `<img>` `src` (or the logo) at them.

## Run it
No build step — it's plain HTML/CSS/JS. Just open `index.html` in a browser, or serve locally:

```bash
cd bharadia-textiles
python3 -m http.server 8080
# then open http://localhost:8080
```

## Customising
- **Contact details** live in the `#contact` section and footer of `index.html`.
- **Products** are individual `.product-card` blocks in the `#products` section — edit/add freely.
- **Markets** are list items under `.markets`.
- **Colors** are CSS variables at the top of `styles.css` (`--indigo`, `--gold`, etc.).
### Enquiry form (IMPORTANT)
The form submits to **Web3Forms** and emails enquiries to `shreebharadia@gmail.com`.
Before it works, paste your free access key:

1. Go to **https://web3forms.com**, enter `shreebharadia@gmail.com`, and copy the **Access Key** they email you.
2. In `index.html`, find `value="YOUR_ACCESS_KEY_HERE"` and replace it with your key.

Until that key is added, the form shows a message telling visitors to email directly.
It includes a hidden honeypot field for basic spam protection and shows an inline
success/error message (no page reload).

## Suggested next steps
- Add a real logo image (replace the `BT` monogram in the header/footer).
- Add product/factory photos to make the cards richer.
- Register a domain and deploy (Netlify, Vercel, GitHub Pages, or any static host).
# companywebiste
