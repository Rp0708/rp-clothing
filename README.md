<div align="center">

# Rp clothing

### Everyday, elevated.

An editorial storefront for modern uniforms, useful objects, and the pieces you keep reaching for.

<br />

![Rp clothing storefront](https://img.shields.io/badge/Rp_clothing-everyday%2C_elevated-191d1c?style=for-the-badge&labelColor=d8f568&color=191d1c)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Vanilla JS](https://img.shields.io/badge/Vanilla_JS-ES2022-f7df1e?style=for-the-badge&logo=javascript&logoColor=191d1c)

<br />
<br />

[**Live locally**](#-getting-started) · [**Explore the routes**](#-the-storefront) · [**View the repo**](https://github.com/Rp0708/rp-clothing)

</div>

<br />

## The idea

Rp clothing is a small, considered fashion shop built around a simple point of view: the everyday deserves more attention. The interface pairs quiet editorial typography with a tactile, responsive shopping flow — designed to feel more like browsing a well-curated studio than navigating a generic catalogue.

The visual system is intentionally restrained:

|  | Direction |
| --- | --- |
| **Palette** | Warm paper, ink, soft stone, acid green |
| **Type** | Space Grotesk for structure, Georgia for a human note |
| **Motion** | Soft reveals, image swaps, sliding drawers, small useful feedback |
| **Voice** | Considered, direct, a little playful |

## ✦ What’s inside

### A real shopping loop

- Browse a curated product collection by category
- Sort by featured, name, or price
- Search products through the command-style search overlay
- Open product pages with gallery switching, colour swatches, sizes, care details, and shipping information
- Add items to a persistent bag with size-aware quantities
- Save products to a persistent wishlist
- Review the full bag or use the slide-out bag drawer
- Complete the demo checkout flow with form validation and confirmation feedback

### Details that make it feel alive

- Product images crossfade to a second view on hover
- Quick-add actions appear contextually on desktop
- Cards reveal in sequence as the page loads
- Mobile navigation and filter drawer are purpose-built for smaller screens
- Toast feedback confirms saves, removals, and bag actions
- Newsletter signup transitions into an inline success state
- Checkout is deliberately labelled as a demo so the experience is safe to explore

## ◌ The storefront

| Route | Purpose |
| --- | --- |
| `#/` | Editorial landing page with hero, arrivals, categories, quote, and newsletter signup |
| `#/shop` | Filterable and sortable collection grid |
| `#/shop?filter=new` | New-in edit |
| `#/shop?category=Essentials` | Category-specific collection view |
| `#/product/:id` | Product detail, gallery, options, details, and related pieces |
| `#/wishlist` | Saved product edit |
| `#/cart` | Full bag review and checkout entry point |
| `#/story` | Brand point of view and making approach |

## ⌁ Getting started

### Requirements

- Node.js 22+
- npm

### Run it

```bash
git clone https://github.com/Rp0708/rp-clothing.git
cd rp-clothing
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://127.0.0.1:5173/`.

### Production build

```bash
npm run build
npm run preview
```

## ⌘ Project shape

```text
rp-clothing/
├── index.html          # Document shell and font setup
├── src/
│   ├── app.js           # Product data, routing, state, views, interactions
│   └── styles.css       # Responsive visual system and motion
├── package.json         # Vite scripts and project metadata
└── README.md            # You are here
```

The app is intentionally dependency-light: one Vite entry point, browser-native routing through the hash, and `localStorage` for the bag and wishlist. That keeps the prototype quick to run and easy to hand off.

## ◐ Design notes

The interface uses a warm paper surface rather than a default white canvas, a bright acid accent for action states, and oversized type to create hierarchy without visual noise. Cards and panels are built from the same small set of interaction rules, so the site feels coherent as you move from editorial content into commerce.

Product imagery is sourced from Unsplash for the prototype. The checkout is a front-end demo and does not process payments.

## Status

**Ready to explore.** The current build includes the complete front-end shopping journey and is set up for replacing demo product data, imagery, and checkout integrations when the real catalogue is ready.

<br />

<div align="center">

**Rp clothing**  ·  Designed in London, made for everywhere.

</div>
