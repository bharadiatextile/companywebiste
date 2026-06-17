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

## Hosting on GitHub Pages (custom domain: bharadiatextiles.in)

This repo already contains the two files Pages needs:
- `CNAME` — holds the custom domain `bharadiatextiles.in`
- `.nojekyll` — tells Pages to serve the files as-is (skip Jekyll processing)

### 1. Push the site
```bash
git add -A
git commit -m "Deploy Bharadia Textiles website"
git push origin main
```

### 2. Enable GitHub Pages
On GitHub: **Settings → Pages**
- **Source:** "Deploy from a branch"
- **Branch:** `main`  •  **Folder:** `/ (root)`  → **Save**

In a minute the site builds at `https://bharadiatextile.github.io/companywebiste/`.

### 3. Set the custom domain
Still in **Settings → Pages → Custom domain**, enter `bharadiatextiles.in` and Save.
(The `CNAME` file already sets this, so it should appear automatically.)
Tick **Enforce HTTPS** once the certificate is issued (can take a few minutes to an hour).

### 4. DNS records (at your domain registrar for bharadiatextiles.in)
Because `bharadiatextiles.in` is an apex/root domain, add these **A** records:
```
@   A   185.199.108.153
@   A   185.199.109.153
@   A   185.199.110.153
@   A   185.199.111.153
```
And (recommended) these **AAAA** records for IPv6:
```
@   AAAA   2606:50c0:8000::153
@   AAAA   2606:50c0:8001::153
@   AAAA   2606:50c0:8002::153
@   AAAA   2606:50c0:8003::153
```
To also support `www.bharadiatextiles.in`, add a **CNAME** record:
```
www   CNAME   bharadiatextile.github.io.
```
DNS changes can take from a few minutes up to 24–48 hours to propagate.

### 5. Verify
Visit `https://bharadiatextiles.in` — you should see the site over HTTPS.
After every future change, just `git add -A && git commit && git push` to redeploy.

## Suggested next steps
- Add product/factory photos to make the cards richer.
- Compress the PNGs in `assets/` (favicon, og-image, hero) to speed up loading.
# companywebiste
