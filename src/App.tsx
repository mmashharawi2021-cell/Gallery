import { useEffect, useMemo, useState } from 'react';
import { ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, Check, ChevronDown, Code2, Copy, ExternalLink, Heart, Layers3, Maximize2, Menu, Monitor, Search, SlidersHorizontal, Smartphone, Tablet, X } from 'lucide-react';
import { categories, cssTokens, getStyle, sourceSnippet, styles } from './catalog';
import type { DesignStyle, StyleCategory } from './catalog';
import { PreviewArt } from './PreviewArt';
import { StyleDemo } from './Demos';

type Route = { page:'gallery'|'detail'|'render'|'about'; slug:string };
type PreviewDevice = 'desktop'|'tablet'|'mobile';
type DetailTab = 'preview'|'tokens'|'code';
function readRoute():Route {
  const path=decodeURIComponent(window.location.hash.replace(/^#\/?/,'')).split('/').filter(Boolean);
  if (path[0]==='styles' && path[1]) return {page:'detail',slug:path[1]};
  if (path[0]==='render' && path[1]) return {page:'render',slug:path[1]};
  if (path[0]==='about') return {page:'about',slug:''};
  return {page:'gallery',slug:''};
}
function go(path:string){window.location.hash='#/'+path;}
function useRoute(){
  const [route,setRoute]=useState<Route>(readRoute);
  useEffect(()=>{const listener=()=>setRoute(readRoute());window.addEventListener('hashchange',listener);return()=>window.removeEventListener('hashchange',listener);},[]);
  useEffect(()=>{window.scrollTo({top:0,behavior:'instant'});},[route.page,route.slug]);
  return route;
}
function useFavorites(){
  const [favoriteSlugs,setFavoriteSlugs]=useState<string[]>(()=>{
    try{const v=JSON.parse(localStorage.getItem('form-atlas-favorites')||'[]');return Array.isArray(v)?v.filter(x=>typeof x==='string'):[];}catch{return[];}
  });
  function toggle(slug:string){setFavoriteSlugs(old=>{const next=old.includes(slug)?old.filter(x=>x!==slug):[...old,slug];try{localStorage.setItem('form-atlas-favorites',JSON.stringify(next));}catch{}return next;});}
  return {favoriteSlugs,toggle};
}
function Logo(){return <button className="brand" onClick={()=>go('')} aria-label="Go to gallery"><span className="brand-symbol"><i/><i/><i/><i/></span><span>form<span className="brand-dot">.</span>atlas</span></button>;}
function Header({active}:{active?:'gallery'|'about'}){
  const [menu,setMenu]=useState(false);
  return <header className="site-header"><div className="shell header-inner"><Logo/><nav className={menu?'site-nav open':'site-nav'} aria-label="Main navigation"><button className={active==='gallery'?'active':''} onClick={()=>{go('');setMenu(false);}}>Explore styles</button><button className={active==='about'?'active':''} onClick={()=>{go('about');setMenu(false);}}>About the project</button><a href="https://github.com/mmashharawi2021-cell/Gallery" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={13}/></a></nav><div className="header-right"><span className="header-live"><i/> 28 ORIGINAL DEMOS</span><button className="mobile-menu" onClick={()=>setMenu(!menu)} aria-label={menu?'Close menu':'Open menu'}>{menu?<X size={20}/>:<Menu size={20}/>}</button></div></div></header>;
}
function Footer(){return <footer className="site-footer"><div className="shell footer-inner"><div><div className="footer-brand">form<span>.</span>atlas</div><p>28 original ways to experience the web.<br/>Designed to inspire. Built to explore.</p></div><div className="footer-links"><button onClick={()=>go('')}>All styles <ArrowUpRight size={13}/></button><button onClick={()=>go('about')}>About <ArrowUpRight size={13}/></button><a href="https://github.com/mmashharawi2021-cell/Gallery" target="_blank" rel="noopener noreferrer">Source on GitHub <ArrowUpRight size={13}/></a></div><div className="footer-copy">© 2026 FORM ATLAS &nbsp; • &nbsp; AN ORIGINAL DESIGN EXPLORATION</div></div></footer>;}
function FavoriteButton({style,active,onToggle}:{style:DesignStyle;active:boolean;onToggle:()=>void}){
  return <button type="button" className={'fav-button '+(active?'is-favorite':'')} aria-label={(active?'Remove ':'Add ')+style.name+(active?' from':' to')+' favorites'} title={active?'Remove from favorites':'Save to favorites'} onClick={onToggle}><Heart size={17} fill={active?'currentColor':'none'}/></button>;
}
function GalleryCard({style,index,favorite,onToggle}:{style:DesignStyle;index:number;favorite:boolean;onToggle:()=>void}){
  return <article className="style-card"><button className="style-card-link" onClick={()=>go('styles/'+style.slug)} aria-label={'Explore '+style.name}><div className="style-card-art"><PreviewArt slug={style.slug}/><span className="style-card-explore">Open live demo <ArrowUpRight size={15}/></span></div><div className="style-card-copy"><div className="style-card-topline"><span>STYLE {String(index+1).padStart(2,'0')}</span><span>{style.category}</span></div><h3>{style.name}</h3><p>{style.tagline}</p><div className="style-card-bottom"><div className="palette-dots">{style.palette.map((c,i)=><i style={{background:c}} key={i}/>)}</div><span>Explore style <ArrowUpRight size={15}/></span></div></div></button><FavoriteButton style={style} active={favorite} onToggle={onToggle}/></article>;
}
function Gallery({favorites,toggle}:{favorites:string[];toggle:(slug:string)=>void}){
  const [search,setSearch]=useState('');
  const [category,setCategory]=useState<'All styles'|StyleCategory>('All styles');
  const [onlyFavorites,setOnlyFavorites]=useState(false);
  const [sort,setSort]=useState<'curated'|'name'>('curated');
  const filtered=useMemo(()=>{
    const query=search.toLowerCase().trim();
    const base=styles.filter(s=>(category==='All styles'||s.category===category)&&(!onlyFavorites||favorites.includes(s.slug))&&(!query||[s.name,s.tagline,s.description,s.category,...s.tags].join(' ').toLowerCase().includes(query)));
    return sort==='name'?[...base].sort((a,b)=>a.name.localeCompare(b.name)):base;
  },[search,category,onlyFavorites,sort,favorites]);
  return <div className="app-surface"><Header active="gallery"/>
    <section className="hero shell"><div className="hero-background one"/><div className="hero-background two"/><div className="hero-intro"><span className="eyebrow"><span className="eyebrow-dot"/> THE INTERACTIVE DESIGN COLLECTION &nbsp; / &nbsp; VOL. 01</span><h1>Every style.<br/><span>A different story<span className="hero-period">.</span></span></h1><p>Explore 28 distinct visual languages through original, fully interactive landing pages. Find a direction. Feel the difference. Make it yours.</p><button className="hero-scroll" onClick={()=>document.getElementById('explore')?.scrollIntoView({behavior:'smooth'})}>Explore the collection <ArrowDownRight size={18}/></button></div><div className="hero-orbit" aria-hidden="true"><div className="hero-orbit-ring ring-a"/><div className="hero-orbit-ring ring-b"/><div className="hero-orbit-core"><div className="orbit-mosaic"><i/><i/><i/><i/><i/><i/></div></div><div className="orbit-satellite sat-1">✳</div><div className="orbit-satellite sat-2">↗</div><div className="orbit-satellite sat-3">◈</div></div><div className="hero-bottom"><div><strong>28</strong><span>Curated aesthetics</span></div><i/><div><strong>05</strong><span>Design categories</span></div><i/><div><strong>∞</strong><span>Ways to create</span></div></div></section>
    <section className="collection shell" id="explore"><div className="collection-heading"><div><span className="section-eyebrow">01 / THE COLLECTION</span><h2>Find your visual language<span>.</span></h2><p>Each card leads to a full responsive, interactive page—not just a screenshot.</p></div><span className="style-count">28 / STYLES</span></div>
      <div className="toolbar"><div className="search-box"><Search size={19}/><input type="search" value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search by style, mood, or technique..." aria-label="Search designs"/>{search&&<button aria-label="Clear search" onClick={()=>setSearch('')}><X size={16}/></button>}</div><label className="sort-control"><SlidersHorizontal size={17}/><select value={sort} onChange={e=>setSort(e.target.value as 'curated'|'name')} aria-label="Sort styles"><option value="curated">Curated order</option><option value="name">A to Z</option></select><ChevronDown size={15}/></label></div>
      <div className="filter-row"><div className="filter-chips">{categories.map(c=><button key={c} className={category===c?'active':''} onClick={()=>setCategory(c)}>{c}</button>)}</div><button className={'saved-toggle '+(onlyFavorites?'active':'')} onClick={()=>setOnlyFavorites(!onlyFavorites)}><Heart size={17} fill={onlyFavorites?'currentColor':'none'}/> Saved {favorites.length>0&&<span>{favorites.length}</span>}</button></div>
      <div className="results-line"><span>SHOWING <b>{String(filtered.length).padStart(2,'0')}</b> OF 28 DESIGNS</span>{(search||category!=='All styles'||onlyFavorites)&&<button onClick={()=>{setSearch('');setCategory('All styles');setOnlyFavorites(false);}}>Reset filters <X size={13}/></button>}</div>
      {filtered.length>0?<div className="styles-grid">{filtered.map(s=><GalleryCard key={s.slug} style={s} index={styles.indexOf(s)} favorite={favorites.includes(s.slug)} onToggle={()=>toggle(s.slug)}/>)}</div>:<div className="empty-state"><Search size={28}/><h3>No styles found</h3><p>Try a different keyword or clear your current filters.</p><button onClick={()=>{setSearch('');setCategory('All styles');setOnlyFavorites(false);}}>View all styles <ArrowRight size={16}/></button></div>}
    </section>
    <section className="outro shell"><div><span className="section-eyebrow">02 / CREATE SOMETHING NEW</span><h2>Inspiration is just<br/><i>the beginning.</i></h2><p>Use the live demos to explore, then inspect the design tokens and copy working implementation patterns.</p><button onClick={()=>go('about')}>Inside the project <ArrowUpRight size={17}/></button></div><div className="outro-art" aria-hidden="true"><span>FORM</span><span>✷</span><span>ATLAS</span></div></section><Footer/>
  </div>;
}
async function copyToClipboard(value:string,setCopied:(value:boolean)=>void){
  try{await navigator.clipboard.writeText(value);setCopied(true);window.setTimeout(()=>setCopied(false),2000);}catch{setCopied(false);}
}
function Detail({style,favorite,onToggle}:{style:DesignStyle;favorite:boolean;onToggle:()=>void}){
  const [device,setDevice]=useState<PreviewDevice>('desktop');
  const [tab,setTab]=useState<DetailTab>('preview');
  const [copied,setCopied]=useState(false);
  useEffect(()=>{setDevice('desktop');setTab('preview');setCopied(false);},[style.slug]);
  const ix=styles.indexOf(style),prev=styles[(ix+styles.length-1)%styles.length],next=styles[(ix+1)%styles.length];
  const url=window.location.href.split('#')[0]+'#/render/'+style.slug;
  return <div className="app-surface detail-surface"><Header/>
    <div className="shell detail-layout"><div className="detail-breadcrumb"><button onClick={()=>go('')}><ArrowLeft size={16}/> All styles</button><span>/</span><span>{style.category}</span><span>/</span><b>{style.name}</b></div>
      <div className="detail-title"><div><span className="section-eyebrow">STYLE {String(ix+1).padStart(2,'0')} / 28 &nbsp; — &nbsp; {style.category.toUpperCase()}</span><h1>{style.name}<span>.</span></h1><p>{style.description}</p><div className="detail-tags">{style.tags.map(t=><span key={t}>{t}</span>)}</div></div><div className="detail-actions"><FavoriteButton style={style} active={favorite} onToggle={onToggle}/><a href={url} target="_blank" rel="noopener noreferrer"><ExternalLink size={16}/> Full page</a></div></div>
      <section className="inspector"><div className="inspector-top"><div className="inspector-tabs" role="tablist" aria-label="Style details">{([['preview','Live Preview',<Monitor size={16}/>],['tokens','Design Tokens',<Layers3 size={16}/>],['code','Code Explorer',<Code2 size={16}/>]] as const).map(([t,label,icon])=><button key={t} role="tab" aria-selected={tab===t} className={tab===t?'active':''} onClick={()=>setTab(t)}>{icon}<span>{label}</span></button>)}</div>{tab==='preview'&&<div className="inspector-devices" aria-label="Preview device size">{([['desktop','Desktop',<Monitor size={17}/>],['tablet','Tablet',<Tablet size={17}/>],['mobile','Mobile',<Smartphone size={17}/>]] as const).map(([d,label,icon])=><button title={label} aria-label={label+' preview'} aria-pressed={device===d} key={d} className={device===d?'active':''} onClick={()=>setDevice(d)}>{icon}</button>)}<span className="device-size">{device==='desktop'?'Responsive':device==='tablet'?'820px':'390px'}</span></div>}</div>
      {tab==='preview'&&<div className="inspector-viewport"><div className="browser-bar"><div className="browser-dots"><i/><i/><i/></div><div className="browser-address"><span>●</span> form-atlas / preview / {style.slug}</div><a href={url} title="Open standalone landing page" target="_blank" rel="noopener noreferrer"><Maximize2 size={16}/></a></div><div className={'device-frame device-'+device}><iframe key={style.slug} title={style.name+' live responsive demo'} src={'#/render/'+style.slug} loading="eager" style={{width:device==='desktop'?'100%':device==='tablet'?'820px':'390px'}} /></div></div>}
      {tab==='tokens'&&<div className="inspector-content"><div className="inspector-content-head"><div><span className="section-eyebrow">DESIGN SYSTEM / FOUNDATIONS</span><h2>Made from these ingredients.</h2><p>Copy the base color tokens and adapt the visual language to your own work.</p></div><button onClick={()=>copyToClipboard(cssTokens(style),setCopied)}>{copied?<Check size={16}/>:<Copy size={16}/>} {copied?'Copied':'Copy CSS tokens'}</button></div><div className="token-colors">{style.palette.map((hex,i)=><div key={hex}><div style={{background:hex}}/><span>{['ACCENT','SECONDARY','HIGHLIGHT'][i]}</span><b>{hex.toUpperCase()}</b></div>)}</div><pre className="code-panel"><code>{cssTokens(style)}</code></pre><div className="token-note"><b>Technique notes</b><p>{style.description} Full styling lives in <code>src/demos.css</code>.</p></div></div>}
      {tab==='code'&&<div className="inspector-content"><div className="inspector-content-head"><div><span className="section-eyebrow">IMPLEMENTATION / REAL SOURCE</span><h2>See how it's built.</h2><p>An implementation excerpt from this visual style. The complete React components and CSS are available in the GitHub repository.</p></div><button onClick={()=>copyToClipboard(sourceSnippet(style),setCopied)}>{copied?<Check size={16}/>:<Copy size={16}/>} {copied?'Copied':'Copy snippet'}</button></div><div className="code-caption"><span>JSX + CSS / {style.slug}</span><span>SELECTED PATTERN</span></div><pre className="code-panel"><code>{sourceSnippet(style)}</code></pre><a className="source-link" href="https://github.com/mmashharawi2021-cell/Gallery/blob/main/src/Demos.tsx" target="_blank" rel="noopener noreferrer">View complete component source on GitHub <ArrowUpRight size={16}/></a></div>}
      </section>
      <div className="detail-pager"><button onClick={()=>go('styles/'+prev.slug)}><ArrowLeft size={17}/><span><small>PREVIOUS STYLE</small><b>{prev.name}</b></span></button><button onClick={()=>go('styles/'+next.slug)}><span><small>NEXT STYLE</small><b>{next.name}</b></span><ArrowRight size={17}/></button></div><div className="detail-more"><div><span className="section-eyebrow">CONTINUE EXPLORING</span><h2>Keep your curiosity open.</h2></div><button onClick={()=>go('')}>View all 28 styles <ArrowUpRight size={17}/></button></div></div><Footer/>
  </div>;
}
function About(){return <div className="app-surface"><Header active="about"/><div className="shell about-main"><span className="eyebrow"><span className="eyebrow-dot"/> ABOUT THE PROJECT</span><h1>A field guide to<br/><em>the visual web.</em></h1><p>Form Atlas is an independent, original collection of 28 fully coded landing page examples. Each design has its own identity, responsive layout and working interactions. It exists to make design decisions easier to see, feel and understand.</p><div className="about-statline"><div><b>28</b><span>Distinct demos</span></div><div><b>05</b><span>Creative categories</span></div><div><b>01</b><span>Open-source project</span></div></div><div className="about-sections"><article><Layers3 size={24}/><h2>Explore</h2><p>Browse styles by mood, search for specific techniques and save the ones you love.</p></article><article><Monitor size={24}/><h2>Experience</h2><p>Every design opens as a working page. Test desktop, tablet and mobile layouts.</p></article><article><Code2 size={24}/><h2>Learn</h2><p>Inspect design colors, copy practical snippets and open the complete React source code.</p></article></div><div className="about-disclaimer"><b>A note on the demos</b><p>All brand names, example products, charts and interface text shown in the 28 demonstrations are fictional original design concepts. Charts and metrics are illustrative, not live business data. No external visual templates are copied.</p></div><button className="about-back" onClick={()=>go('')}>Explore all styles <ArrowUpRight size={17}/></button></div><Footer/></div>;}
export default function App(){
  const route=useRoute();
  const {favoriteSlugs,toggle}=useFavorites();
  useEffect(()=>{document.title=route.page==='detail'?(getStyle(route.slug)?.name||'Design')+' — Form Atlas':route.page==='about'?'About — Form Atlas':'Form Atlas — 28 Web Design Styles';},[route]);
  if(route.page==='render'){
    return getStyle(route.slug)?<StyleDemo slug={route.slug}/>:<div className="render-not-found"><h1>Style not found</h1><button onClick={()=>go('')}>Back to gallery</button></div>;
  }
  if(route.page==='detail'){
    const style=getStyle(route.slug);
    return style?<Detail style={style} favorite={favoriteSlugs.includes(style.slug)} onToggle={()=>toggle(style.slug)}/>:<div className="app-surface"><Header/><div className="shell not-found"><h1>Style not found.</h1><button onClick={()=>go('')}>Explore all styles <ArrowRight size={16}/></button></div><Footer/></div>;
  }
  if(route.page==='about')return <About/>;
  return <Gallery favorites={favoriteSlugs} toggle={toggle}/>;
}
