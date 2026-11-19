import type { ReactNode } from 'react';

export function PreviewArt({slug}:{slug:string}) {
  let art:ReactNode;
  switch(slug){
    case 'glassmorphism': art=<><div className="p-gl-orb"/><div className="p-gl-panel"><span>◎ LUMEN</span><b>Build with<br/>clarity.</b><i/><i/></div><div className="p-gl-bubble">✦</div></>;break;
    case 'neumorphism': art=<><div className="p-ne-label">SOFTLY</div><div className="p-ne-circle"><span>25:00</span></div><div className="p-ne-controls"><i/><i/><i/></div></>;break;
    case 'claymorphism': art=<><div className="p-clay-star">✳</div><div className="p-clay-cloud"><b>make it<br/>happy!</b></div><div className="p-clay-pill"/></>;break;
    case 'skeuomorphism': art=<><div className="p-radio"><div className="p-radio-title">ASTRA / FM</div><div className="p-radio-grill"/><div className="p-radio-dial">94.6</div><div className="p-radio-knob"/></div></>;break;
    case 'flat-design': art=<><div className="p-flat-head">modu.</div><div className="p-flat-circle"/><div className="p-flat-slice"/><b className="p-flat-word">GO<br/>BOLD.</b></>;break;
    case 'material-design': art=<><div className="p-mat-top">◈ Tasks</div><div className="p-mat-card"><b>Today’s focus</b><i/><i/><i/></div><div className="p-mat-fab">+</div></>;break;
    case 'minimalism': art=<><div className="p-min-top">FORMA — 001</div><div className="p-min-object"/><div className="p-min-word">SPACE TO THINK.</div></>;break;
    case 'brutalism': art=<><div className="p-brut-head">INDEX / 001</div><div className="p-brut-word">NO<br/>RULES.</div><div className="p-brut-bar">EXPERIMENT — REPEAT — CREATE</div></>;break;
    case 'neo-brutalism': art=<><div className="p-nb-label">LOUD®</div><div className="p-nb-yellow"><b>BE<br/>BOLD!</b></div><div className="p-nb-pink">✷</div></>;break;
    case 'bento-grid': art=<><div className="p-bento-top">daybreak.</div><div className="p-bento-grid"><div><b>82%</b><span>Focus</span></div><div>◉</div><div>↗</div><div><span>Today</span><b>24</b></div></div></>;break;
    case 'dark-ui': art=<><div className="p-dark-menu">PULSE / ANALYTICS</div><b className="p-dark-score">84.2K <small>↗ 12%</small></b><svg viewBox="0 0 200 50"><path d="M0 45L24 36L42 40L61 15L80 24L104 20L126 27L153 8L173 17L200 3" fill="none" stroke="#7ce4cc" strokeWidth="3"/></svg><div className="p-dark-boxes"><i/><i/><i/></div></>;break;
    case 'gradient-design': art=<><div className="p-grad-glow"/><div className="p-grad-top">PRISM — STUDIO</div><b className="p-grad-word">COLOR<br/>IS FEELING.</b></>;break;
    case 'aurora-ui': art=<><div className="p-aurora-wave"/><div className="p-aurora-stars">✦ &nbsp;&nbsp; · &nbsp;&nbsp;✧ &nbsp;&nbsp;·</div><div className="p-aurora-word">N O R T H<br/><small>FIND YOUR WONDER</small></div></>;break;
    case 'mesh-gradient': art=<><div className="p-mesh-cloud"/><span className="p-mesh-mark">chroma°</span><b className="p-mesh-word">SOFTLY<br/>UNLIMITED.</b></>;break;
    case '3d-web-design': art=<><div className="p-three-title">ORBIT / 03</div><div className="p-three-object"><i/><i/><i/></div><b className="p-three-word">BEYOND<br/>FLAT.</b></>;break;
    case 'immersive-design': art=<><div className="p-imm-sun"/><div className="p-imm-mountain back"/><div className="p-imm-mountain front"/><b className="p-imm-type">GO<br/>FURTHER.</b></>;break;
    case 'motion-ui': art=<><div className="p-motion-header">KINETIC<span>↗</span></div><div className="p-motion-squares"><i/><i/><i/></div><b className="p-motion-type">IN MOTION.</b></>;break;
    case 'parallax-scrolling': art=<><div className="p-para-sun"/><div className="p-para-layer one"/><div className="p-para-layer two"/><div className="p-para-layer three"/><b className="p-para-text">HORIZON</b></>;break;
    case 'scrollytelling': art=<><div className="p-story-vert">01 / 04</div><span className="p-story-kicker">A STORY ABOUT</span><b className="p-story-title">THE<br/>JOURNEY.</b><div className="p-story-line"/></>;break;
    case 'cinematic-design': art=<><div className="p-film-bars top"/><div className="p-film-light"/><span className="p-film-sub">AN ORIGINAL STORY</span><b className="p-film-title">BEYOND<br/>THE FRAME</b><div className="p-film-bars bottom"/></>;break;
    case 'editorial-design': art=<><div className="p-edit-mast">THE FOLIO</div><div className="p-edit-grid"><div className="p-edit-image"/><div><small>ISSUE 01</small><b>THE ART<br/>OF LESS.</b><span>Form / function / culture</span></div></div></>;break;
    case 'typography-first': art=<><small className="p-type-label">A DESIGN STUDIO</small><b className="p-type-big">TYPE<br/>IS ALL.</b><span className="p-type-bottom">WORDS MAKE WORLDS ↗</span></>;break;
    case 'futuristic-ui': art=<><div className="p-future-label">NEXUS // ONLINE</div><div className="p-future-rings"><i/><i/><i/></div><div className="p-future-cross">+</div><b className="p-future-title">SYSTEM 04</b></>;break;
    case 'cyberpunk': art=<><div className="p-cyber-city"/><span className="p-cyber-top">NIGHT CITY / 2099</span><b className="p-cyber-title">AFTER<br/>DARK.</b><div className="p-cyber-line"/></>;break;
    case 'bauhaus-design': art=<><div className="p-bau-head">BAU / 1925</div><div className="p-bau-circle"/><div className="p-bau-square"/><div className="p-bau-half"/><b className="p-bau-word">FORM<br/>FOLLOWS<br/>FUNCTION.</b></>;break;
    case 'organic-design': art=<><div className="p-org-shape"/><div className="p-org-leaf one"/><div className="p-org-leaf two"/><span className="p-org-label">TERRA / NATURAL</span><b className="p-org-text">GROW<br/>GENTLY.</b></>;break;
    case 'isometric-design': art=<><div className="p-iso-top">BUILD / TOGETHER</div><div className="p-iso-ground"><i/><i/><i/><i/></div><b className="p-iso-title">NEW PERSPECTIVES</b></>;break;
    case 'interactive-landing-page': art=<><div className="p-int-head">STUDIO / CONFIGURE</div><div className="p-int-colorbars"><i/><i/><i/><i/></div><div className="p-int-panel"><b>YOUR PLAN</b><span>$48 /mo</span><div/></div></>;break;
    default: art=<b>Explore the art of the web</b>;
  }
  return <div className={'thumbnail thumbnail--'+slug} aria-hidden="true">{art}</div>;
}
