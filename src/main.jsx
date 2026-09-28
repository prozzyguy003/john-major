import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, Check, ChevronDown, CircleHelp, Heart, MapPin, Menu, Search, ShoppingBag, Smartphone, Sparkles, Truck, X, Zap } from 'lucide-react';
import './styles.css';

const logo = '/logo.jpg';

const categories = [
  { label: 'Smartphones', detail: 'Find your next daily essential', icon: Smartphone },
  { label: 'Accessories', detail: 'Power, protect and connect', icon: Zap },
  { label: 'Audio', detail: 'Sound that moves with you', icon: Sparkles },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [notice, setNotice] = useState('');

  const showNotice = (message) => {
    setNotice(message);
    window.setTimeout(() => setNotice(''), 3200);
  };

  const scrollToCatalog = () => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="app-shell">
      {notice && <div className="toast"><Check size={17} /> {notice}</div>}
      <header className="site-header">
        <div className="announcement"><span>Authentic tech. Honest service. Local expertise.</span><span className="announcement-location"><MapPin size={13} /> Ilorin, Kwara</span></div>
        <div className="header-main page-width">
          <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">{menuOpen ? <X /> : <Menu />}</button>
          <a href="#top" className="brand" aria-label="John Major Innovation Technology home"><img src={logo} alt="John Major Innovation Technology logo" /><span>JOHN MAJOR<small>INNOVATION TECHNOLOGY</small></span></a>
          <nav className={menuOpen ? 'main-nav open' : 'main-nav'}>
            <a href="#top" onClick={() => setMenuOpen(false)}>Home</a><a href="#catalog" onClick={() => setMenuOpen(false)}>Shop</a><a href="#categories" onClick={() => setMenuOpen(false)}>Categories</a><a href="#about" onClick={() => setMenuOpen(false)}>Our store</a>
          </nav>
          <div className="header-actions"><div className="search-box"><Search size={18} /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search the catalog" aria-label="Search the catalog" /></div><button className="icon-button" aria-label="Wishlist" onClick={() => showNotice('Wishlist is ready when products are added.')}><Heart size={20} /></button><button className="cart-button" onClick={() => setCartOpen(true)} aria-label="Open cart"><ShoppingBag size={20} /><span>0</span></button></div>
        </div>
      </header>

      <main id="top">
        <section className="hero page-width">
          <div className="hero-copy"><p className="eyebrow"><span></span> Your trusted tech destination</p><h1>Technology that keeps you <em>moving.</em></h1><p className="hero-text">Phones, accessories and everyday gadgets — selected with care for the way you live, work and connect.</p><div className="hero-actions"><button className="button button-dark" onClick={scrollToCatalog}>Explore the catalog <ArrowRight size={17} /></button><a className="text-link" href="#about">Visit our store <ArrowRight size={15} /></a></div><div className="hero-proof"><div className="proof-avatars"><span>JM</span><span>IT</span><span>+</span></div><p><strong>Local service,</strong><br />with a personal touch.</p></div></div>
          <div className="hero-art"><div className="art-circle"></div><div className="art-card"><div className="art-top"><span>JM / 01</span><span>EST. LOCAL</span></div><div className="art-monogram">JM</div><div className="art-bottom"><span>INNOVATION<br />TECHNOLOGY</span><ArrowRight size={26} /></div></div><div className="art-note"><CircleHelp size={15} /><span>Need help choosing?</span><strong>Talk to our team</strong></div></div>
        </section>

        <section className="trust-strip"><div className="page-width trust-grid"><div><Truck size={21} /><span><strong>Shop with confidence</strong>Quality-first service</span></div><div><Check size={21} /><span><strong>Curated technology</strong>Essentials that fit your life</span></div><div><MapPin size={21} /><span><strong>Find us in Ilorin</strong>155 Ibrahim Taiwo Rd</span></div></div></section>

        <section className="section page-width" id="categories"><div className="section-heading"><div><p className="eyebrow"><span></span> Browse by need</p><h2>Make your tech<br /><em>work smarter.</em></h2></div><p className="section-intro">Explore our focused collections for the essentials that keep your world connected.</p></div><div className="category-grid">{categories.map(({ label, detail, icon: Icon }, index) => <button className={`category-card category-${index + 1}`} key={label} onClick={() => showNotice(`${label} will appear here once the verified catalog is connected.`)}><span className="category-number">0{index + 1}</span><Icon size={30} strokeWidth={1.5} /><div><h3>{label}</h3><p>{detail}</p></div><ArrowRight className="card-arrow" size={19} /></button>)}</div></section>

        <section className="catalog-section" id="catalog"><div className="page-width"><div className="catalog-top"><div><p className="eyebrow"><span></span> The catalog</p><h2>Shop the <em>selection.</em></h2></div><div className="catalog-tools"><div className="filter-select"><span>Sort by</span><ChevronDown size={16} /></div><button className="filter-button"><span>Filters</span><ChevronDown size={16} /></button></div></div><div className="catalog-empty"><div className="empty-mark"><ShoppingBag size={29} /></div><p className="eyebrow"><span></span> Catalog preparing</p><h3>We’re getting the details right.</h3><p>The available files contain reference photos but no verified product names, model numbers or prices. Products will appear here once the source catalog is connected, so nothing is mislabeled or priced by guesswork.</p><button className="button button-wine" onClick={() => showNotice('Catalog request noted.')} >Notify me when it’s live <ArrowRight size={17} /></button></div></div></section>

        <section className="statement-section"><div className="page-width statement"><div className="statement-mark">JM</div><div><p className="eyebrow"><span></span> Why John Major</p><h2>Good technology should feel <em>simple.</em></h2><p>We believe choosing a phone or gadget should be clear, personal and worth your money. That is why our store focuses on useful technology and service you can trust.</p><a href="#about" className="text-link">Get to know us <ArrowRight size={15} /></a></div></div></section>

        <section className="store-section page-width" id="about"><div className="store-panel"><div><p className="eyebrow"><span></span> Visit the store</p><h2>Come say <em>hello.</em></h2><p>It’s a phone and gadget store where you can get your phones, accessories and gadget at affordable prices.</p><div className="store-details"><div><MapPin size={18} /><span><strong>155 Ibrahim Taiwo Rd</strong>Oko Erin 240101, Kwara, Nigeria</span></div><div><Check size={18} /><span><strong>Open daily</strong>Closes 8 PM</span></div></div></div><div className="store-map"><div className="map-grid"></div><div className="map-pin"><MapPin size={24} fill="currentColor" /></div><span>Oko Erin · Ilorin</span></div></div></section>

        <section className="review-section page-width"><div className="review-stars">★★★★★</div><blockquote>“It's a phone and gadget store where you can get your phones, accessories and gadget at affordable prices.”</blockquote><p>Isaac Ajiyat · <strong>5.0</strong> from 1 review</p></section>
      </main>

      <footer className="site-footer"><div className="page-width footer-grid"><div className="footer-brand"><a href="#top" className="brand"><img src={logo} alt="John Major Innovation Technology logo" /><span>JOHN MAJOR<small>INNOVATION TECHNOLOGY</small></span></a><p>Technology for real life. Service you can count on.</p></div><div><h4>Explore</h4><a href="#catalog">Shop catalog</a><a href="#categories">Categories</a><a href="#about">Our store</a></div><div><h4>Store hours</h4><p>Open daily<br /><strong>Closes 8 PM</strong></p><p>155 Ibrahim Taiwo Rd<br />Oko Erin, Kwara</p></div><div><h4>Need a hand?</h4><p>Visit us in-store for product guidance and support.</p><a href="#about" className="footer-link">Get directions <ArrowRight size={14} /></a></div></div><div className="page-width footer-bottom"><span>© 2026 John Major Innovation Technology</span><span>Built for better everyday tech.</span></div></footer>

      {cartOpen && <div className="drawer-backdrop" onClick={() => setCartOpen(false)}><aside className="cart-drawer" onClick={(event) => event.stopPropagation()}><div className="drawer-heading"><div><p className="eyebrow"><span></span> Your bag</p><h2>Shopping cart</h2></div><button className="icon-button" onClick={() => setCartOpen(false)} aria-label="Close cart"><X size={20} /></button></div><div className="drawer-empty"><div className="empty-mark"><ShoppingBag size={27} /></div><h3>Your cart is waiting.</h3><p>Verified products will appear here as soon as the catalog is available.</p><button className="button button-dark" onClick={() => { setCartOpen(false); scrollToCatalog(); }}>Continue shopping <ArrowRight size={16} /></button></div></aside></div>}
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
