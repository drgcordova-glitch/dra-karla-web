@tailwind base;
@tailwind components;
@tailwind utilities;

:root{
  --plum:#2a1e3a; --plum-2:#372a4a; --plum-line:#4a3a5e;
  --lila:#cab4e2; --violeta:#9b7fc0; --dorado:#c9a96e; --crema:#ece6f4;
  --paper:#faf8fc; --ink:#2a1e3a; --ink-soft:#5c5168;
  --serif:var(--font-spectral),Georgia,serif;
  --sans:var(--font-montserrat),system-ui,sans-serif;
}
*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{font-family:var(--serif);color:var(--ink);background:var(--paper);line-height:1.6;-webkit-font-smoothing:antialiased}
img{display:block;max-width:100%}
a{color:inherit;text-decoration:none}

.wrap{max-width:1180px;margin:0 auto;padding:0 28px}
.eyebrow{font-family:var(--sans);font-size:11px;font-weight:600;letter-spacing:.22em;text-transform:uppercase;color:var(--violeta)}
h1,h2,h3{font-family:var(--serif);font-weight:400;line-height:1.12;letter-spacing:-.01em}
.btn{font-family:var(--sans);font-size:13px;font-weight:600;letter-spacing:.04em;padding:14px 26px;border-radius:2px;display:inline-block;transition:.25s;cursor:pointer;border:1px solid transparent}
.btn-solid{background:var(--dorado);color:#fff}
.btn-solid:hover{background:#b8955c}
.btn-ghost{border-color:var(--dorado);color:var(--dorado);background:transparent}
.btn-ghost:hover{background:var(--dorado);color:#fff}
.btn-light{border-color:rgba(236,230,244,.4);color:var(--crema)}
.btn-light:hover{background:var(--crema);color:var(--plum);border-color:var(--crema)}
.btn-ink{border-color:var(--plum);color:var(--plum)}
.btn-ink:hover{background:var(--plum);color:#fff}

/* HEADER */
.site-header{position:sticky;top:0;z-index:50;background:rgba(250,248,252,.92);backdrop-filter:blur(10px);border-bottom:1px solid rgba(42,30,58,.08)}
.nav{display:flex;align-items:center;justify-content:space-between;height:74px}
.nav .logo img{height:34px;width:auto}
.nav ul{display:flex;gap:30px;list-style:none;font-family:var(--sans);font-size:13px;font-weight:500;letter-spacing:.02em}
.nav ul a{color:var(--ink-soft);transition:.2s}
.nav ul a:hover{color:var(--plum)}
.nav .cta-wrap{display:flex;align-items:center;gap:18px}
.burger{display:none;background:none;border:0;cursor:pointer}
.mobile-menu{display:none;flex-direction:column;gap:4px;padding:8px 28px 22px;background:var(--paper);border-bottom:1px solid rgba(42,30,58,.08)}
.mobile-menu.open{display:flex}
.mobile-menu a{font-family:var(--sans);font-size:15px;font-weight:500;color:var(--ink);padding:12px 0;border-bottom:1px solid rgba(42,30,58,.06)}

/* HERO */
.hero{background:var(--plum);color:var(--crema);position:relative;overflow:hidden}
.hero-grid{display:grid;grid-template-columns:1.05fr .95fr;align-items:stretch;min-height:640px}
.hero-copy{padding:96px 60px 96px 0;align-self:center;position:relative;z-index:2}
.hero-copy .eyebrow{color:var(--lila)}
.hero h1{font-size:clamp(42px,5.4vw,72px);margin:22px 0 26px;color:#fff}
.hero h1 em{font-style:italic;color:var(--lila)}
.hero p.lead{font-size:19px;font-weight:300;color:rgba(236,230,244,.82);max-width:30em;margin-bottom:38px}
.hero-actions{display:flex;gap:14px;flex-wrap:wrap}
.hero-photo{position:relative}
.hero-photo .portrait{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:top center}
.hero-photo::after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,var(--plum) 0%,rgba(42,30,58,.25) 22%,transparent 45%)}
.hero-mark{position:absolute;right:-40px;bottom:-60px;width:340px;opacity:.10;z-index:1;pointer-events:none}

/* TRUST */
.trust{background:var(--plum-2);color:var(--lila);border-top:1px solid var(--plum-line)}
.trust .wrap{display:flex;flex-wrap:wrap;justify-content:center;gap:14px 44px;padding:22px 28px}
.trust span{font-family:var(--sans);font-size:12px;font-weight:500;letter-spacing:.13em;text-transform:uppercase;color:rgba(202,180,226,.85);display:flex;align-items:center;gap:14px}
.trust span::before{content:"";width:5px;height:5px;background:var(--dorado);border-radius:50%}

/* SECTION SHELL */
section.block{padding:110px 0}
.sec-head{max-width:640px;margin-bottom:60px}
.sec-head h2{font-size:clamp(32px,3.8vw,46px);margin-top:16px}
.sec-head p{color:var(--ink-soft);font-size:18px;font-weight:300;margin-top:18px}

/* PILARES */
.tier-label{font-family:var(--sans);font-size:11px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:var(--violeta);margin:0 0 24px;display:flex;align-items:center;gap:16px}
.tier-label::after{content:"";flex:1;height:1px;background:rgba(155,127,192,.3)}
.pillars{display:grid;grid-template-columns:repeat(4,1fr);gap:26px}
.pillar{background:#fff;border:1px solid rgba(42,30,58,.08);padding:34px 28px;border-radius:3px;transition:.3s;position:relative;display:block}
.pillar:hover{border-color:var(--lila);transform:translateY(-4px);box-shadow:0 20px 50px -30px rgba(42,30,58,.4)}
.pillar .num{font-family:var(--sans);font-size:12px;font-weight:600;color:var(--dorado);letter-spacing:.1em}
.pillar h3{font-size:23px;margin:18px 0 12px}
.pillar p{font-size:15px;color:var(--ink-soft);font-weight:300;line-height:1.55}
.pillar .more{font-family:var(--sans);font-size:12px;font-weight:600;letter-spacing:.06em;color:var(--violeta);margin-top:20px;display:inline-block}
.amplitud{margin-top:64px}
.pillars-2{display:grid;grid-template-columns:repeat(2,1fr);gap:26px}
.pillar.soft{background:transparent;border-style:dashed}

/* SOBRE */
.about{background:var(--crema)}
.about-grid{display:grid;grid-template-columns:.85fr 1.15fr;gap:70px;align-items:center}
.about-photo{position:relative}
.about-photo .frame{background:var(--plum);border-radius:3px;overflow:hidden;aspect-ratio:4/5;position:relative}
.about-photo .frame img{width:100%;height:100%;object-fit:cover;object-position:top center}
.about-photo .mark{position:absolute;left:-34px;top:-34px;width:120px;opacity:.9;z-index:2}
.about-body h2{font-size:clamp(30px,3.5vw,42px);margin:16px 0 24px}
.about-body p{font-size:17px;color:var(--ink-soft);font-weight:300;margin-bottom:18px}
.cred{margin-top:34px;padding:22px 26px;background:#fff;border-left:3px solid var(--dorado);border-radius:2px}
.cred .name{font-family:var(--serif);font-size:19px;color:var(--plum);margin-bottom:6px}
.cred .lines{font-family:var(--sans);font-size:12.5px;color:var(--ink-soft);line-height:1.9;letter-spacing:.01em}

/* PROBLEMAS */
.probs{display:grid;grid-template-columns:repeat(3,1fr);gap:0;border:1px solid rgba(42,30,58,.1);border-radius:3px;overflow:hidden}
.prob{padding:32px 30px;border-right:1px solid rgba(42,30,58,.1);border-bottom:1px solid rgba(42,30,58,.1);transition:.25s;display:flex;justify-content:space-between;align-items:center}
.prob:hover{background:#fff}
.prob h3{font-size:21px;font-weight:400}
.prob .arw{font-family:var(--sans);color:var(--dorado);font-size:18px;transition:.25s}
.prob:hover .arw{transform:translateX(5px)}

/* RESEÑAS */
.reviews{background:var(--plum);color:var(--crema);text-align:center}
.reviews .eyebrow{color:var(--lila)}
.reviews h2{font-size:clamp(28px,3.4vw,40px);margin:16px auto 20px;max-width:16em}
.reviews .ph{margin-top:36px;border:1px dashed var(--plum-line);border-radius:4px;padding:44px;max-width:720px;margin-left:auto;margin-right:auto;color:rgba(202,180,226,.7);font-weight:300;font-size:16px}
.reviews .ph b{font-family:var(--sans);font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:var(--dorado);display:block;margin-bottom:10px;font-weight:600}

/* CTA */
.ctaband{background:var(--plum-2);color:var(--crema);text-align:center;position:relative;overflow:hidden}
.ctaband .mark{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:280px;opacity:.07}
.ctaband .eyebrow{color:var(--lila)}
.ctaband h2{font-size:clamp(30px,3.8vw,48px);margin:18px auto 14px;max-width:14em;position:relative}
.ctaband p{color:rgba(236,230,244,.75);font-weight:300;font-size:18px;margin-bottom:34px;position:relative}
.ctaband .hero-actions{justify-content:center;position:relative}

/* PAGE HEADER (interior) */
.pagehead{background:var(--plum);color:var(--crema);padding:72px 0 64px;position:relative;overflow:hidden}
.pagehead .crumb{font-family:var(--sans);font-size:12px;letter-spacing:.06em;color:rgba(202,180,226,.7);margin-bottom:18px}
.pagehead .crumb a:hover{color:#fff}
.pagehead h1{font-size:clamp(34px,4.6vw,58px);color:#fff;max-width:16em}
.pagehead p{font-size:19px;font-weight:300;color:rgba(236,230,244,.82);max-width:38em;margin-top:20px}
.pagehead .mark{position:absolute;right:-30px;bottom:-70px;width:300px;opacity:.09}

/* PROSE (interior content) */
.prose-med{max-width:720px}
.prose-med h2{font-size:30px;margin:44px 0 16px;color:var(--plum)}
.prose-med h3{font-size:22px;margin:30px 0 10px;color:var(--plum)}
.prose-med p{font-size:17px;color:var(--ink-soft);font-weight:300;margin-bottom:16px}
.prose-med ul{list-style:none;margin:8px 0 20px}
.prose-med li{font-size:16px;color:var(--ink-soft);font-weight:300;padding-left:22px;position:relative;margin-bottom:9px}
.prose-med li::before{content:"";position:absolute;left:0;top:11px;width:6px;height:6px;background:var(--dorado);border-radius:50%}

/* FAQ */
.faq{border-top:1px solid rgba(42,30,58,.12)}
.faq details{border-bottom:1px solid rgba(42,30,58,.12);padding:22px 0}
.faq summary{font-family:var(--serif);font-size:20px;color:var(--plum);cursor:pointer;list-style:none;display:flex;justify-content:space-between;align-items:center;gap:20px}
.faq summary::-webkit-details-marker{display:none}
.faq summary::after{content:"+";font-family:var(--sans);color:var(--dorado);font-size:24px;font-weight:400}
.faq details[open] summary::after{content:"–"}
.faq p{font-size:16px;color:var(--ink-soft);font-weight:300;margin-top:14px;max-width:60em}

/* GRID of especialidad cards on hub */
.esp-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px}

/* CONTACT */
.contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:start}
.contact-info h3{font-size:26px;color:var(--plum);margin-bottom:20px}
.contact-info .row{margin-bottom:22px}
.contact-info .row .k{font-family:var(--sans);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--violeta);margin-bottom:5px}
.contact-info .row .v{font-size:17px;color:var(--ink-soft);font-weight:300}
.contact-info .row .v a:hover{color:var(--plum)}
.map-ph{border:1px dashed rgba(42,30,58,.2);border-radius:4px;min-height:340px;display:flex;align-items:center;justify-content:center;font-family:var(--sans);font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--ink-soft);background:#fff}

/* FOOTER */
.site-footer{background:var(--plum);color:rgba(236,230,244,.7);padding:70px 0 34px;border-top:1px solid var(--plum-line)}
.foot-grid{display:grid;grid-template-columns:1.4fr 1fr 1fr;gap:44px;padding-bottom:44px;border-bottom:1px solid var(--plum-line)}
.foot-grid h4{font-family:var(--sans);font-size:11px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:var(--lila);margin-bottom:18px}
.foot-grid .wm{height:32px;width:auto;margin-bottom:20px}
.foot-grid p,.foot-grid a{font-size:14.5px;font-weight:300;line-height:1.9;color:rgba(236,230,244,.72)}
.foot-grid a:hover{color:#fff}
.foot-map{margin-top:14px;border:1px dashed var(--plum-line);border-radius:3px;height:120px;display:flex;align-items:center;justify-content:center;font-family:var(--sans);font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:rgba(202,180,226,.5)}
.foot-bottom{padding-top:26px;display:flex;justify-content:space-between;align-items:center;font-family:var(--sans);font-size:11.5px;letter-spacing:.03em;color:rgba(202,180,226,.55)}

/* WHATSAPP FLOAT */
.wa{position:fixed;right:24px;bottom:24px;z-index:60;background:#25D366;width:58px;height:58px;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 10px 30px -8px rgba(0,0,0,.4);transition:.25s}
.wa:hover{transform:scale(1.06)}
.wa svg{width:30px;height:30px;fill:#fff}

/* reveal */
.reveal{opacity:0;transform:translateY(22px);transition:opacity .7s ease,transform .7s ease}
.reveal.in{opacity:1;transform:none}
@media (prefers-reduced-motion:reduce){.reveal{opacity:1;transform:none;transition:none}html{scroll-behavior:auto}}

/* RESPONSIVE */
@media(max-width:900px){
  .nav ul,.nav .cta-wrap .btn{display:none}
  .burger{display:block}
  .hero-grid{grid-template-columns:1fr}
  .hero-copy{padding:72px 0 40px}
  .hero-photo{height:420px}
  .hero-photo::after{background:linear-gradient(0deg,var(--plum) 0%,transparent 55%)}
  .hero-mark{display:none}
  .pillars{grid-template-columns:repeat(2,1fr)}
  .pillars-2{grid-template-columns:1fr}
  .about-grid{grid-template-columns:1fr;gap:44px}
  .about-photo .mark{display:none}
  .probs{grid-template-columns:1fr}
  .prob{border-right:0}
  .esp-grid{grid-template-columns:1fr}
  .contact-grid{grid-template-columns:1fr;gap:32px}
  .foot-grid{grid-template-columns:1fr;gap:32px}
  .foot-bottom{flex-direction:column;gap:10px;text-align:center}
}
@media(max-width:520px){ .pillars{grid-template-columns:1fr} }

/* BLOG */
.blog-list{display:grid;grid-template-columns:1fr;gap:0;border-top:1px solid rgba(42,30,58,.12)}
.blog-item{display:block;padding:34px 0;border-bottom:1px solid rgba(42,30,58,.12);transition:.2s}
.blog-item:hover{padding-left:10px}
.blog-item .cat{font-family:var(--sans);font-size:11px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--violeta)}
.blog-item h2{font-size:28px;margin:12px 0 10px;color:var(--plum)}
.blog-item p{font-size:16px;color:var(--ink-soft);font-weight:300;max-width:60em}
.blog-item .meta{font-family:var(--sans);font-size:12px;color:#8a8098;margin-top:12px;letter-spacing:.02em}
.art-meta{font-family:var(--sans);font-size:13px;color:rgba(202,180,226,.85);margin-top:18px;letter-spacing:.02em}
.related-box{margin-top:48px;padding:28px 30px;background:var(--crema);border-radius:4px;display:flex;justify-content:space-between;align-items:center;gap:20px;flex-wrap:wrap}
.related-box .t{font-family:var(--serif);font-size:19px;color:var(--plum)}
.related-box .s{font-size:14px;color:var(--ink-soft);font-weight:300;margin-top:4px}
@media(max-width:640px){.related-box{flex-direction:column;align-items:flex-start}}

/* CASOS CLÍNICOS */
.case-figs{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:24px 0 8px}
.case-figs img{width:100%;height:auto;border-radius:4px;border:1px solid rgba(42,30,58,.1)}
.ba-wrap{margin:40px 0}
.ba-grid{display:grid;grid-template-columns:1fr 1fr;gap:26px}
.ba-col .ba-label{font-family:var(--sans);font-size:11px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;margin-bottom:12px}
.ba-col.antes .ba-label{color:#b06a6a}
.ba-col.despues .ba-label{color:#5a8a6a}
.ba-col .ba-imgs{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.ba-col .ba-imgs img{width:100%;height:auto;border-radius:4px;border:1px solid rgba(42,30,58,.1)}
.ba-col .ba-desc{font-size:14px;color:var(--ink-soft);font-weight:300;margin-top:12px}
.key-msgs{margin-top:44px;background:var(--crema);border-radius:5px;padding:32px 34px}
.key-msgs h3{font-size:20px;color:var(--plum);margin-bottom:16px}
.key-msgs ol{list-style:none;counter-reset:k;margin:0}
.key-msgs li{counter-increment:k;position:relative;padding-left:40px;margin-bottom:14px;font-size:15.5px;color:var(--ink-soft);font-weight:300;line-height:1.55}
.key-msgs li::before{content:counter(k,decimal-leading-zero);position:absolute;left:0;top:0;font-family:var(--sans);font-size:12px;font-weight:600;color:var(--dorado);letter-spacing:.05em}
.consent-note{margin-top:36px;padding:18px 22px;border:1px solid rgba(42,30,58,.14);border-radius:4px;font-size:13.5px;color:#8a8098;font-weight:300;line-height:1.6;font-style:italic}
.case-diag{display:inline-block;font-family:var(--sans);font-size:12px;font-weight:600;letter-spacing:.04em;color:var(--violeta);background:rgba(155,127,192,.12);padding:6px 14px;border-radius:20px;margin-top:18px}
@media(max-width:640px){.ba-grid{grid-template-columns:1fr;gap:32px}.case-figs{grid-template-columns:1fr}}

/* AVISO CITA PREVIA */
.cita-aviso{margin-top:26px;padding:14px 18px;border-left:3px solid var(--dorado);background:rgba(201,169,110,.08);border-radius:2px;font-family:var(--sans);font-size:13.5px;font-weight:500;color:var(--plum);line-height:1.5}
