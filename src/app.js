import './styles.css';

const products = [
  {
    id: 'soft-structure-blazer',
    name: 'Soft Structure Blazer',
    price: 195,
    category: 'Tailoring',
    badge: 'New in',
    color: 'Ink',
    colors: ['#171a19', '#d8d1c2'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'A relaxed, single-breasted blazer with a considered shoulder and a little room to move. Cut from a weighty recycled wool blend for everyday polish.',
    details: ['Recycled wool blend', 'Relaxed fit', 'Two front pockets', 'Dry clean only'],
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=900&q=85'
    ]
  },
  {
    id: 'everyday-tee',
    name: 'Everyday Tee',
    price: 48,
    category: 'Essentials',
    badge: 'Best seller',
    color: 'Chalk',
    colors: ['#f0eee7', '#1c2222', '#a9b5a8'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'The one you reach for first. A heavyweight organic cotton tee with a clean neckline and slightly boxy fit.',
    details: ['100% organic cotton', 'Boxy fit', '260gsm jersey', 'Machine wash cold'],
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=900&q=85'
    ]
  },
  {
    id: 'wide-leg-trouser',
    name: 'Wide Leg Trouser',
    price: 120,
    category: 'Bottoms',
    badge: 'New in',
    color: 'Stone',
    colors: ['#c4b9a8', '#232524'],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'A high-rise trouser with a generous leg and an easy drape. Made to sit just above the shoe, whatever your day looks like.',
    details: ['Tencel and linen blend', 'High rise', 'Back welt pockets', 'Made in Portugal'],
    images: [
      'https://images.unsplash.com/photo-1506629905607-d9f297d3b5ca?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85'
    ]
  },
  {
    id: 'ribbed-knit-tank',
    name: 'Ribbed Knit Tank',
    price: 64,
    category: 'Essentials',
    color: 'Moss',
    colors: ['#677466', '#d6c3b7', '#292b29'],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'A close-fitting ribbed tank with a high square neckline. Designed to work solo, or under your favourite layer.',
    details: ['Organic cotton knit', 'Fitted silhouette', 'Square neckline', 'Machine wash cold'],
    images: [
      'https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1583743814966-8936f37f4678?auto=format&fit=crop&w=900&q=85'
    ]
  },
  {
    id: 'utility-overshirt',
    name: 'Utility Overshirt',
    price: 145,
    category: 'Outerwear',
    badge: 'Limited run',
    color: 'Olive',
    colors: ['#4e5848', '#1c2020'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A substantial overshirt with utility pockets, a curved hem and a little structure. The layer that makes a look feel finished.',
    details: ['Brushed cotton twill', 'Oversized fit', 'Four utility pockets', 'Horn-effect buttons'],
    images: [
      'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85'
    ]
  },
  {
    id: 'relaxed-hoodie',
    name: 'Relaxed Hoodie',
    price: 92,
    category: 'Essentials',
    color: 'Ash',
    colors: ['#b5b5af', '#313a38'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'A soft, brushed-back cotton hoodie with a relaxed shape and a considered weight. Built for slow mornings and late trains.',
    details: ['Organic cotton fleece', 'Relaxed fit', 'Kangaroo pocket', 'Brushed inside'],
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&w=900&q=85'
    ]
  },
  {
    id: 'canvas-weekender',
    name: 'Canvas Weekender',
    price: 110,
    category: 'Objects',
    badge: 'New in',
    color: 'Natural',
    colors: ['#d8c7a8', '#242928'],
    sizes: ['One size'],
    description: 'A soft-sided canvas bag for two days away, or one very full day in the city. Finished with vegetable-tanned leather handles.',
    details: ['Waxed cotton canvas', 'Leather handles', 'Internal zip pocket', 'W 48cm × H 30cm'],
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&w=900&q=85'
    ]
  },
  {
    id: 'minimal-runner',
    name: 'Minimal Runner',
    price: 138,
    category: 'Objects',
    color: 'Cloud',
    colors: ['#e7e4da', '#7d8a88'],
    sizes: ['36', '37', '38', '39', '40', '41', '42'],
    description: 'A low-profile runner with a cushioned footbed and a quiet, tonal finish. For getting there, wherever there is.',
    details: ['Recycled mesh upper', 'Rubber sole', 'EVA footbed', 'Runs true to size'],
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=900&q=85'
    ]
  }
];

const categories = ['All', 'Essentials', 'Tailoring', 'Bottoms', 'Outerwear', 'Objects'];
const money = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 });
const storedCart = JSON.parse(localStorage.getItem('rp-cart') || '[]');
const storedWishlist = JSON.parse(localStorage.getItem('rp-wishlist') || '[]');

const state = {
  cart: Array.isArray(storedCart) ? storedCart : [],
  wishlist: Array.isArray(storedWishlist) ? storedWishlist : [],
  shopCategory: 'All',
  shopSort: 'featured',
  searchOpen: false,
  menuOpen: false,
  cartOpen: false,
  checkoutOpen: false,
  toast: null
};

const app = document.querySelector('#app');

function icon(name, size = 20) {
  const paths = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    arrowUp: '<path d="m18 15-6-6-6 6"/>',
    bag: '<path d="M5 8h14l-1 13H6L5 8Z"/><path d="M9 8a3 3 0 0 1 6 0"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    chevron: '<path d="m6 9 6 6 6-6"/>',
    close: '<path d="M6 6l12 12M18 6 6 18"/>',
    heart: '<path d="M20.8 8.9c0 5.5-8.8 10.1-8.8 10.1S3.2 14.4 3.2 8.9A4.7 4.7 0 0 1 12 6.2a4.7 4.7 0 0 1 8.8 2.7Z"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    minus: '<path d="M5 12h14"/>',
    plus: '<path d="M5 12h14M12 5v14"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    spark: '<path d="m12 2 1.5 7.5L21 12l-7.5 1.5L12 21l-1.5-7.5L3 12l7.5-2.5L12 2Z"/>',
    user: '<circle cx="12" cy="8" r="3.5"/><path d="M4.5 21c.8-4 3.1-6 7.5-6s6.7 2 7.5 6"/>'
  };
  return `<svg class="icon" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || ''}</svg>`;
}

function saveState() {
  localStorage.setItem('rp-cart', JSON.stringify(state.cart));
  localStorage.setItem('rp-wishlist', JSON.stringify(state.wishlist));
}

function getProduct(id) {
  return products.find((product) => product.id === id) || products[0];
}

function cartCount() {
  return state.cart.reduce((total, item) => total + item.quantity, 0);
}

function cartTotal() {
  return state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

function isWishlisted(id) {
  return state.wishlist.includes(id);
}

function route() {
  const [path, query] = window.location.hash.replace(/^#/, '').split('?');
  if (!path || path === '/') return { page: 'home' };
  if (path === '/shop') return { page: 'shop', query: new URLSearchParams(query || '') };
  if (path === '/wishlist') return { page: 'wishlist' };
  if (path === '/cart') return { page: 'cart' };
  if (path === '/story') return { page: 'story' };
  if (path.startsWith('/product/')) return { page: 'product', id: path.split('/')[2] };
  return { page: 'home' };
}

function navigate(path) {
  window.location.hash = path;
  state.menuOpen = false;
}

function header() {
  return `
    <div class="announcement"><span>Complimentary shipping on orders over £150</span><button class="announcement-close" aria-label="Close announcement">×</button></div>
    <header class="site-header">
      <div class="header-inner">
        <button class="mobile-menu" data-action="menu" aria-label="Open menu">${icon('menu')}</button>
        <a class="wordmark" href="#/" aria-label="Rp clothing home"><span>Rp</span><small>clothing</small></a>
        <nav class="main-nav" aria-label="Main navigation">
          <a href="#/shop" class="nav-link">Shop</a>
          <a href="#/shop?filter=new" class="nav-link">New in <span class="nav-dot"></span></a>
          <a href="#/story" class="nav-link">Our story</a>
        </nav>
        <div class="header-actions">
          <button class="header-button search-trigger" data-action="search" aria-label="Search">${icon('search')}</button>
          <a href="#/wishlist" class="header-button wishlist-link" aria-label="Wishlist">${icon('heart')}<span class="header-count wishlist-count">${state.wishlist.length || ''}</span></a>
          <button class="header-button bag-trigger" data-action="cart" aria-label="Shopping bag">${icon('bag')}<span class="header-count bag-count">${cartCount() || ''}</span></button>
        </div>
      </div>
      ${state.menuOpen ? `<div class="mobile-nav"><a href="#/shop">Shop all ${icon('arrow', 16)}</a><a href="#/shop?filter=new">New in ${icon('arrow', 16)}</a><a href="#/story">Our story ${icon('arrow', 16)}</a><a href="#/wishlist">Wishlist ${icon('arrow', 16)}</a></div>` : ''}
    </header>`;
}

function productCard(product, index = 0) {
  const wished = isWishlisted(product.id);
  return `
    <article class="product-card reveal" style="--delay:${Math.min(index, 5) * 70}ms">
      <div class="product-image-wrap">
        <a href="#/product/${product.id}" class="product-image-link" aria-label="View ${product.name}">
          <img src="${product.images[0]}" alt="${product.name}" class="product-image" loading="lazy" />
          <img src="${product.images[1]}" alt="" class="product-image product-image-hover" loading="lazy" />
        </a>
        ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
        <button class="card-wishlist ${wished ? 'is-active' : ''}" data-action="wishlist" data-id="${product.id}" aria-label="${wished ? 'Remove from' : 'Add to'} wishlist">${icon('heart', 19)}</button>
        <button class="quick-add" data-action="quick-add" data-id="${product.id}">Add to bag ${icon('arrow', 16)}</button>
      </div>
      <div class="product-info"><div><a href="#/product/${product.id}" class="product-name">${product.name}</a><span class="product-color">${product.color}</span></div><span class="product-price">${money.format(product.price)}</span></div>
    </article>`;
}

function homePage() {
  return `
    <main>
      <section class="hero-section">
        <div class="hero-copy">
          <p class="eyebrow"><span class="eyebrow-line"></span>Collection 04 — 2024</p>
          <h1>Everyday,<br /><em>elevated.</em></h1>
          <p class="hero-intro">Modern uniforms for the way you actually live. Quietly considered, made to move with you.</p>
          <a href="#/shop" class="button button-dark">Shop the collection ${icon('arrow', 17)}</a>
          <div class="hero-note"><span class="hero-note-mark">↳</span><span>Designed in London<br />Made for everywhere</span></div>
        </div>
        <div class="hero-visual">
          <img src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1600&q=90" alt="Model wearing a soft neutral outfit from Rp clothing" />
          <span class="image-caption">The new uniform / 01</span>
          <span class="image-index">01 <i></i> 04</span>
        </div>
        <div class="hero-side-note">Rp / objects for<br />your everyday</div>
      </section>

      <div class="marquee"><div class="marquee-track"><span>Good clothes, better days</span><b>✳</b><span>Good clothes, better days</span><b>✳</b><span>Good clothes, better days</span><b>✳</b><span>Good clothes, better days</span><b>✳</b></div></div>

      <section class="section new-arrivals-section">
        <div class="section-heading"><div><p class="eyebrow">01 / The edit</p><h2>New arrivals</h2></div><a href="#/shop?filter=new" class="text-link">View all ${icon('arrow', 16)}</a></div>
        <div class="product-grid product-grid-four">${products.slice(0, 4).map((product, index) => productCard(product, index)).join('')}</div>
      </section>

      <section class="category-feature section-wide">
        <div class="category-image"><img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=85" alt="Neutral tailoring and knitwear" loading="lazy" /><span class="image-caption">Soft forms / strong details</span></div>
        <div class="category-copy"><p class="eyebrow">02 / Built to last</p><h2>Layers for<br /><em>in-between.</em></h2><p>Pieces with a point of view, but plenty of room for yours. Explore our considered layers in brushed cotton, recycled wool and washed linen.</p><a href="#/shop?category=Outerwear" class="text-link">Explore outerwear ${icon('arrow', 16)}</a></div>
      </section>

      <section class="section essentials-section"><div class="section-heading"><div><p class="eyebrow">03 / The foundation</p><h2>Start with the essentials</h2></div><a href="#/shop?category=Essentials" class="text-link">Shop essentials ${icon('arrow', 16)}</a></div><div class="essentials-grid"><a href="#/shop?category=Essentials" class="essential-tile"><img src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=900&q=85" alt="Everyday essentials" loading="lazy" /><span>Everyday layers <small>${icon('arrow', 14)}</small></span></a><a href="#/shop?category=Bottoms" class="essential-tile"><img src="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=900&q=85" alt="Relaxed trousers" loading="lazy" /><span>Relaxed bottoms <small>${icon('arrow', 14)}</small></span></a><a href="#/shop?category=Objects" class="essential-tile"><img src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85" alt="Daily objects" loading="lazy" /><span>Daily objects <small>${icon('arrow', 14)}</small></span></a></div></section>

      <section class="quote-section"><div class="quote-mark">“</div><blockquote>We make the pieces you keep reaching for — the ones that make getting dressed feel like the easy part.</blockquote><p>— RP, FOUNDER</p></section>
      ${newsletterSection()}
    </main>`;
}

function newsletterSection() {
  return `<section class="newsletter"><div><p class="eyebrow">Stay in the loop</p><h2>Good things,<br /><em>occasionally.</em></h2></div><div class="newsletter-form-wrap"><p>New drops, thoughtful things and 10% off your first order. No noise, promise.</p><form class="newsletter-form"><label class="sr-only" for="newsletter-email">Email address</label><input id="newsletter-email" type="email" placeholder="Your email address" required /><button class="button button-dark" type="submit">Sign me up ${icon('arrow', 16)}</button></form><small>By subscribing, you agree to our privacy policy.</small></div></section>`;
}

function shopPage() {
  const params = route().query;
  const queryFilter = params.get('category');
  const isNew = params.get('filter') === 'new';
  if (isNew && !queryFilter) state.shopCategory = 'All';
  if (queryFilter && categories.includes(queryFilter)) state.shopCategory = queryFilter;
  let listed = [...products];
  if (state.shopCategory !== 'All') listed = listed.filter((product) => product.category === state.shopCategory);
  if (isNew) listed = listed.filter((product) => product.badge === 'New in');
  if (state.shopSort === 'price-low') listed.sort((a, b) => a.price - b.price);
  if (state.shopSort === 'price-high') listed.sort((a, b) => b.price - a.price);
  if (state.shopSort === 'name') listed.sort((a, b) => a.name.localeCompare(b.name));
  return `<main class="shop-page"><section class="shop-intro"><p class="eyebrow">Rp clothing / collection 04</p><h1>All the good stuff.</h1><p>Thoughtful clothes and useful objects for your everyday rotation.</p></section><div class="shop-toolbar"><button class="filter-toggle" data-action="filter-toggle">${icon('menu', 17)} Filters <span class="filter-count">${state.shopCategory !== 'All' ? '1' : ''}</span></button><span class="result-count">${listed.length} ${listed.length === 1 ? 'piece' : 'pieces'}</span><label class="sort-label">Sort by <select class="sort-select" data-action="sort"><option value="featured" ${state.shopSort === 'featured' ? 'selected' : ''}>Featured</option><option value="price-low" ${state.shopSort === 'price-low' ? 'selected' : ''}>Price: low to high</option><option value="price-high" ${state.shopSort === 'price-high' ? 'selected' : ''}>Price: high to low</option><option value="name" ${state.shopSort === 'name' ? 'selected' : ''}>Name</option></select>${icon('chevron', 15)}</label></div><div class="shop-layout"><aside class="filter-panel"><div class="filter-heading"><span>Filter by</span><button data-action="filter-close" aria-label="Close filters">${icon('close', 18)}</button></div><div class="filter-group"><span class="filter-label">Category</span>${categories.map((category) => `<button class="filter-option ${state.shopCategory === category ? 'is-selected' : ''}" data-action="category" data-category="${category}"><span>${category}</span>${state.shopCategory === category ? icon('check', 15) : ''}</button>`).join('')}</div><div class="filter-note"><span>${icon('spark', 15)}</span><p>All our pieces are designed to work hard and live well.</p></div></aside><div class="shop-results">${listed.length ? `<div class="product-grid product-grid-three">${listed.map((product, index) => productCard(product, index)).join('')}</div>` : `<div class="empty-results"><div>${icon('search', 30)}</div><h2>Nothing here yet.</h2><p>Try another category or view everything.</p><button class="button button-dark" data-action="clear-filters">View all ${icon('arrow', 16)}</button></div>`}</div></div></main>`;
}

function productPage(product) {
  const defaultSizeIndex = Math.min(1, product.sizes.length - 1);
  return `<main class="product-page"><div class="breadcrumbs"><a href="#/shop">Shop</a><span>/</span><span>${product.name}</span></div><div class="product-detail"><div class="product-gallery"><div class="gallery-main"><img src="${product.images[0]}" alt="${product.name}" id="gallery-main-image" /></div><div class="gallery-side"><button class="gallery-thumb is-selected" data-action="gallery" data-image="${product.images[0]}"><img src="${product.images[0]}" alt="Front view" /></button><button class="gallery-thumb" data-action="gallery" data-image="${product.images[1]}"><img src="${product.images[1]}" alt="Detail view" /></button></div></div><div class="product-detail-copy"><div class="detail-topline"><span class="eyebrow">${product.category}</span><button class="detail-wishlist ${isWishlisted(product.id) ? 'is-active' : ''}" data-action="wishlist" data-id="${product.id}">${icon('heart', 21)}<span>${isWishlisted(product.id) ? 'Saved' : 'Save to wishlist'}</span></button></div><h1>${product.name}</h1><div class="detail-price">${money.format(product.price)}</div><p class="detail-description">${product.description}</p><div class="option-block"><div class="option-label"><span>Colour: <strong id="selected-color">${product.color}</strong></span><span class="color-swatches">${product.colors.map((color, index) => `<button class="color-swatch ${index === 0 ? 'is-selected' : ''}" style="--swatch:${color}" data-action="color" data-color="${index === 0 ? product.color : 'Alternate'}" aria-label="Select colour"></button>`).join('')}</span></div></div><div class="option-block size-block"><div class="option-label"><span>Size</span><button class="size-guide" data-action="size-guide">Size guide ${icon('arrow', 14)}</button></div><div class="size-grid">${product.sizes.map((size, index) => `<button class="size-option ${index === defaultSizeIndex ? 'is-selected' : ''}" data-action="size" data-size="${size}">${size}</button>`).join('')}</div><p class="size-error" aria-live="polite"></p></div><button class="button button-accent add-detail" data-action="add-detail" data-id="${product.id}">Add to bag <span>${money.format(product.price)}</span>${icon('arrow', 17)}</button><div class="detail-accordions"><button class="accordion is-open" data-action="accordion"><span>Details &amp; care</span>${icon('chevron', 16)}<div class="accordion-content"><ul>${product.details.map((detail) => `<li>${detail}</li>`).join('')}</ul></div></button><button class="accordion" data-action="accordion"><span>Shipping &amp; returns</span>${icon('chevron', 16)}<div class="accordion-content"><p>Complimentary delivery on orders over £150. Easy returns within 30 days.</p></div></button></div></div></div><section class="related-products section"><div class="section-heading"><div><p class="eyebrow">You may also like</p><h2>Keep exploring</h2></div><a href="#/shop" class="text-link">Shop all ${icon('arrow', 16)}</a></div><div class="product-grid product-grid-four">${products.filter((item) => item.id !== product.id).slice(0, 4).map((item, index) => productCard(item, index)).join('')}</div></section></main>`;
}

function wishlistPage() {
  const saved = products.filter((product) => state.wishlist.includes(product.id));
  return `<main class="simple-page"><section class="simple-intro"><p class="eyebrow">Your edit</p><h1>Wishlist <span>${saved.length}</span></h1><p>Keep the pieces you’re thinking about close.</p></section>${saved.length ? `<div class="section wishlist-grid product-grid product-grid-four">${saved.map((product, index) => productCard(product, index)).join('')}</div>` : `<div class="empty-page"><div class="empty-icon">${icon('heart', 30)}</div><h2>Nothing saved yet.</h2><p>When something catches your eye, tap the heart to keep it here.</p><a class="button button-dark" href="#/shop">Explore the collection ${icon('arrow', 16)}</a></div>`}</main>`;
}

function cartPage() {
  return `<main class="cart-page"><div class="cart-page-head"><div><p class="eyebrow">Your selection</p><h1>Shopping bag <span>${cartCount()}</span></h1></div><a class="text-link" href="#/shop">Continue shopping ${icon('arrow', 16)}</a></div>${cartContents(true)}</main>`;
}

function cartContents(fullPage = false) {
  if (!state.cart.length) return `<div class="empty-page cart-empty"><div class="empty-icon">${icon('bag', 30)}</div><h2>Your bag is feeling light.</h2><p>Good things are waiting. Add something you’ll want to wear on repeat.</p><a class="button button-dark" href="#/shop">Shop the collection ${icon('arrow', 16)}</a></div>`;
  return `<div class="cart-layout"><div class="cart-items">${state.cart.map((item) => cartItem(item)).join('')}<div class="cart-perk"><span>${icon('spark', 18)}</span><p>Free shipping unlocked — your order is over £150.</p></div></div><aside class="cart-summary"><div class="summary-line"><span>Subtotal</span><strong>${money.format(cartTotal())}</strong></div><div class="summary-line muted"><span>Shipping</span><span>${cartTotal() >= 150 ? 'Complimentary' : 'Calculated at checkout'}</span></div><div class="summary-total"><span>Total</span><strong>${money.format(cartTotal())}</strong></div><button class="button button-accent checkout-trigger" data-action="checkout">Checkout ${icon('arrow', 17)}</button><p class="secure-note">${icon('check', 14)} Secure checkout · Easy returns</p></aside></div>`;
}

function cartItem(item) {
  const product = getProduct(item.id);
  return `<div class="cart-item"><a href="#/product/${product.id}" class="cart-item-image"><img src="${product.images[0]}" alt="${product.name}" /></a><div class="cart-item-info"><div class="cart-item-head"><div><a href="#/product/${product.id}" class="cart-item-name">${product.name}</a><span>${item.size || 'One size'} · ${product.color}</span></div><strong>${money.format(item.price * item.quantity)}</strong></div><div class="cart-item-bottom"><div class="quantity-control"><button data-action="quantity" data-id="${item.id}" data-size="${item.size}" data-change="-1" aria-label="Decrease quantity">${icon('minus', 14)}</button><span>${item.quantity}</span><button data-action="quantity" data-id="${item.id}" data-size="${item.size}" data-change="1" aria-label="Increase quantity">${icon('plus', 14)}</button></div><button class="remove-item" data-action="remove" data-id="${item.id}" data-size="${item.size}">Remove</button></div></div></div>`;
}

function storyPage() {
  return `<main class="story-page"><section class="story-hero"><div><p class="eyebrow">The Rp point of view</p><h1>Less, but<br /><em>better.</em></h1><p>We believe in a smaller, more intentional wardrobe. Clothes that earn their place, feel good on, and get better with time.</p></div><img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85" alt="Model in an Rp clothing look" /></section><section class="story-statement"><p class="eyebrow">01 / Our approach</p><h2>The everyday deserves<br /><em>more attention.</em></h2><div><p>Rp started with a simple question: what if the clothes we wear most were the ones we thought about most?</p><p>We make small runs of well-made, versatile pieces. We work with considered materials, honest proportions and makers we know. No seasonal noise. Just a wardrobe in progress.</p></div></section><section class="story-values"><div class="value-card"><span>01</span><h3>Considered</h3><p>Every seam, pocket and proportion has a reason to be here.</p></div><div class="value-card"><span>02</span><h3>Useful</h3><p>Designed for real days, repeat wears and whatever comes next.</p></div><div class="value-card"><span>03</span><h3>Lasting</h3><p>Made with better materials and enough character to stay with you.</p></div></section><section class="story-image"><img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1800&q=85" alt="A rack of carefully made clothing" /><div><p class="eyebrow">Made for everywhere</p><a href="#/shop" class="button button-light">Explore the collection ${icon('arrow', 17)}</a></div></section>${newsletterSection()}</main>`;
}

function searchOverlay() {
  if (!state.searchOpen) return '';
  return `<div class="search-overlay"><div class="search-panel"><div class="search-panel-top"><span class="eyebrow">Search Rp clothing</span><button data-action="search-close" aria-label="Close search">${icon('close', 21)}</button></div><div class="search-input-wrap">${icon('search', 25)}<input type="search" id="site-search" placeholder="What are you looking for?" autocomplete="off" autofocus /></div><div class="search-results" id="search-results"><p class="search-hint">Try “blazer”, “everyday” or “objects”</p></div></div></div>`;
}

function checkoutModal() {
  if (!state.checkoutOpen) return '';
  return `<div class="modal-backdrop"><div class="checkout-modal"><button class="modal-close" data-action="checkout-close" aria-label="Close checkout">${icon('close', 19)}</button><div class="checkout-heading"><p class="eyebrow">Almost yours</p><h2>Checkout</h2><p>${cartCount()} ${cartCount() === 1 ? 'piece' : 'pieces'} · ${money.format(cartTotal())}</p></div><form class="checkout-form"><label>Email address<input required type="email" name="email" placeholder="you@example.com" /></label><label>Delivery address<input required name="address" placeholder="Start typing your address" /></label><div class="form-row"><label>City<input required name="city" placeholder="London" /></label><label>Postcode<input required name="postcode" placeholder="SW1A 1AA" /></label></div><label>Card details<div class="card-input"><span>••••</span><input required minlength="4" maxlength="4" inputmode="numeric" placeholder="1234" aria-label="Last four card digits" /><span>VISA</span></div></label><button class="button button-accent" type="submit">Place order ${icon('arrow', 17)}</button><p class="secure-note">${icon('check', 14)} This is a demo checkout — no payment is taken.</p></form></div></div>`;
}

function render() {
  const current = route();
  let content = homePage();
  if (current.page === 'shop') content = shopPage();
  if (current.page === 'product') content = productPage(getProduct(current.id));
  if (current.page === 'wishlist') content = wishlistPage();
  if (current.page === 'cart') content = cartPage();
  if (current.page === 'story') content = storyPage();
  app.innerHTML = `${header()}${content}${searchOverlay()}${checkoutModal()}<div class="toast-region" aria-live="polite"></div>`;
  document.body.classList.toggle('no-scroll', state.searchOpen || state.checkoutOpen);
  if (state.toast) showToast(state.toast.message, state.toast.type);
  requestAnimationFrame(() => {
    document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'));
  });
  if (state.searchOpen) updateSearchResults('');
}

function showToast(message, type = 'success') {
  const region = document.querySelector('.toast-region');
  if (!region) return;
  region.innerHTML = `<div class="toast ${type}">${icon(type === 'error' ? 'close' : 'check', 16)}<span>${message}</span></div>`;
  requestAnimationFrame(() => region.querySelector('.toast')?.classList.add('show'));
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => {
    region.querySelector('.toast')?.classList.remove('show');
    state.toast = null;
  }, 2800);
}

function addToCart(id, size) {
  const product = getProduct(id);
  const selectedSize = size || product.sizes[0];
  const existing = state.cart.find((item) => item.id === id && item.size === selectedSize);
  if (existing) existing.quantity += 1;
  else state.cart.push({ id, size: selectedSize, quantity: 1, price: product.price });
  saveState();
  state.toast = { message: `${product.name} added to your bag` };
  render();
}

function toggleWishlist(id) {
  const product = getProduct(id);
  if (isWishlisted(id)) {
    state.wishlist = state.wishlist.filter((item) => item !== id);
    state.toast = { message: `${product.name} removed from wishlist` };
  } else {
    state.wishlist.push(id);
    state.toast = { message: `${product.name} saved to wishlist` };
  }
  saveState();
  render();
}

function updateSearchResults(query) {
  const result = document.querySelector('#search-results');
  if (!result) return;
  const term = query.trim().toLowerCase();
  if (!term) {
    result.innerHTML = `<p class="search-hint">Try “blazer”, “everyday” or “objects”</p><div class="search-featured"><span>Popular now</span><div><a href="#/product/soft-structure-blazer" data-action="search-link">Soft Structure Blazer ${icon('arrow', 15)}</a><a href="#/shop?category=Essentials" data-action="search-link">Everyday essentials ${icon('arrow', 15)}</a></div></div>`;
    return;
  }
  const results = products.filter((product) => `${product.name} ${product.category} ${product.color}`.toLowerCase().includes(term));
  result.innerHTML = results.length ? results.map((product) => `<a class="search-result" href="#/product/${product.id}" data-action="search-link"><img src="${product.images[0]}" alt="" /><span><strong>${product.name}</strong><small>${product.category} · ${money.format(product.price)}</small></span>${icon('arrow', 16)}</a>`).join('') : `<div class="search-no-results"><p>No pieces found for “${query}”.</p><a href="#/shop" data-action="search-link">Browse everything ${icon('arrow', 15)}</a></div>`;
}

document.addEventListener('click', (event) => {
  const actionTarget = event.target.closest('[data-action]');
  if (!actionTarget) return;
  const action = actionTarget.dataset.action;
  if (action === 'menu') { state.menuOpen = !state.menuOpen; render(); }
  if (action === 'search') { state.searchOpen = true; render(); }
  if (action === 'search-close') { state.searchOpen = false; render(); }
  if (action === 'cart') { state.cartOpen = !state.cartOpen; if (state.cartOpen) openCartDrawer(); }
  if (action === 'quick-add') addToCart(actionTarget.dataset.id);
  if (action === 'add-detail') {
    const selected = document.querySelector('.size-option.is-selected');
    if (!selected) { document.querySelector('.size-error').textContent = 'Please select a size'; return; }
    addToCart(actionTarget.dataset.id, selected.dataset.size);
  }
  if (action === 'wishlist') toggleWishlist(actionTarget.dataset.id);
  if (action === 'category') { state.shopCategory = actionTarget.dataset.category; render(); }
  if (action === 'clear-filters') { state.shopCategory = 'All'; navigate('/shop'); render(); }
  if (action === 'filter-toggle') document.querySelector('.filter-panel')?.classList.add('is-open');
  if (action === 'filter-close') document.querySelector('.filter-panel')?.classList.remove('is-open');
  if (action === 'size') { document.querySelectorAll('.size-option').forEach((button) => button.classList.remove('is-selected')); actionTarget.classList.add('is-selected'); document.querySelector('.size-error').textContent = ''; }
  if (action === 'color') { document.querySelectorAll('.color-swatch').forEach((button) => button.classList.remove('is-selected')); actionTarget.classList.add('is-selected'); document.querySelector('#selected-color').textContent = actionTarget.dataset.color; }
  if (action === 'gallery') { document.querySelectorAll('.gallery-thumb').forEach((button) => button.classList.remove('is-selected')); actionTarget.classList.add('is-selected'); document.querySelector('#gallery-main-image').src = actionTarget.dataset.image; }
  if (action === 'accordion') actionTarget.classList.toggle('is-open');
  if (action === 'size-guide') showToast('Our fit is true to size. Between sizes? Size up.', 'success');
  if (action === 'quantity') updateQuantity(actionTarget.dataset.id, actionTarget.dataset.size, Number(actionTarget.dataset.change));
  if (action === 'remove') removeFromCart(actionTarget.dataset.id, actionTarget.dataset.size);
  if (action === 'checkout') { state.checkoutOpen = true; render(); }
  if (action === 'checkout-close') { state.checkoutOpen = false; render(); }
  if (action === 'search-link') { state.searchOpen = false; }
});

document.addEventListener('change', (event) => {
  if (event.target.matches('[data-action="sort"]')) { state.shopSort = event.target.value; render(); }
});

document.addEventListener('input', (event) => {
  if (event.target.id === 'site-search') updateSearchResults(event.target.value);
});

document.addEventListener('submit', (event) => {
  if (event.target.matches('.newsletter-form')) {
    event.preventDefault();
    const email = event.target.querySelector('input').value;
    if (email) { event.target.innerHTML = `<div class="form-success">${icon('check', 18)} You’re on the list. See you soon.</div>`; }
  }
  if (event.target.matches('.checkout-form')) {
    event.preventDefault();
    state.cart = [];
    state.checkoutOpen = false;
    saveState();
    render();
    state.toast = { message: 'Order placed — welcome to the Rp club' };
    showToast(state.toast.message);
  }
});

document.addEventListener('click', (event) => {
  if (event.target.matches('.announcement-close')) event.target.closest('.announcement').remove();
  if (event.target.classList.contains('modal-backdrop')) { state.checkoutOpen = false; render(); }
  if (event.target.classList.contains('search-overlay')) { state.searchOpen = false; render(); }
});

function updateQuantity(id, size, change) {
  const item = state.cart.find((entry) => entry.id === id && entry.size === size);
  if (!item) return;
  item.quantity += change;
  if (item.quantity <= 0) state.cart = state.cart.filter((entry) => entry !== item);
  saveState();
  render();
}

function removeFromCart(id, size) {
  state.cart = state.cart.filter((item) => !(item.id === id && item.size === size));
  saveState();
  state.toast = { message: 'Item removed from your bag' };
  render();
}

function openCartDrawer() {
  const drawer = document.createElement('div');
  drawer.className = 'cart-drawer-wrap';
  drawer.innerHTML = `<div class="drawer-backdrop"></div><aside class="cart-drawer"><div class="drawer-head"><div><p class="eyebrow">Your selection</p><h2>Your bag <span>${cartCount()}</span></h2></div><button class="drawer-close" aria-label="Close bag">${icon('close', 20)}</button></div><div class="drawer-body">${cartContents()}<a class="drawer-full-bag" href="#/cart">View full bag ${icon('arrow', 15)}</a></div></aside>`;
  document.body.appendChild(drawer);
  requestAnimationFrame(() => drawer.classList.add('is-open'));
  const close = () => { state.cartOpen = false; drawer.classList.remove('is-open'); setTimeout(() => drawer.remove(), 250); };
  drawer.querySelector('.drawer-close').addEventListener('click', close);
  drawer.querySelector('.drawer-backdrop').addEventListener('click', close);
  drawer.addEventListener('click', (event) => {
    const target = event.target.closest('[data-action]');
    if (!target) {
      if (event.target.closest('a')) close();
      return;
    }
    if (target.dataset.action === 'checkout') { close(); state.checkoutOpen = true; render(); }
    if (target.dataset.action === 'quantity') { updateQuantity(target.dataset.id, target.dataset.size, Number(target.dataset.change)); close(); }
    if (target.dataset.action === 'remove') { removeFromCart(target.dataset.id, target.dataset.size); close(); }
  });
}

window.addEventListener('hashchange', () => { state.shopCategory = route().query?.get('category') || state.shopCategory; render(); window.scrollTo({ top: 0, behavior: 'smooth' }); });
render();
