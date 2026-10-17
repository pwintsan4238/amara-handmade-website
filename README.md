# AMARA Handmade — demo website

A demo website for **AMARA Handmade**, a Thai brand of hand-woven designer bags made from 100% recycled plastic.

Static HTML, CSS and JavaScript — no build step.

## Pages

- `index.html` — Home: hero, sustainability highlights, featured bags, lookbook, Hug Craft store locations
- `shop.html` — The AMARA Woven Collection, with style filters
- `product.html?id=…` — Product details, gallery, features and care
- `contact.html` — Contact details, how to order, message form, store locations

English and Thai are switchable from the header (Thai translations should be reviewed by a native speaker).

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
npx http-server . -p 5173
```

## Editing

- Products: `assets/js/products.js` (names are placeholders; all prices use the "from ฿490" starting price)
- Text and translations: the `I18N` object in `assets/js/main.js`
- Colours, type and layout: `assets/css/styles.css`
