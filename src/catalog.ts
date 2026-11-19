export type StyleCategory = 'Surfaces' | 'Minimal' | 'Color' | 'Motion' | 'Experimental';
export type DesignStyle = {
  slug: string;
  name: string;
  category: StyleCategory;
  tagline: string;
  description: string;
  palette: [string, string, string];
  tags: string[];
};
export const styles: DesignStyle[] = [
  { slug:'glassmorphism', name:'Glassmorphism', category:'Surfaces', tagline:'Light, layered, translucent.', description:'Frosted surfaces, background blur, luminous depth and carefully restrained outlines.', palette:['#9284ff','#6c42a3','#e1d9ff'], tags:['blur','depth','transparency'] },
  { slug:'neumorphism', name:'Neumorphism', category:'Surfaces', tagline:'Soft light, tactile controls.', description:'A quietly embossed interface where gentle highlights and inset shadows create physicality.', palette:['#e6ecf1','#bacbd8','#5d7991'], tags:['soft UI','shadows','tactile'] },
  { slug:'claymorphism', name:'Claymorphism', category:'Surfaces', tagline:'Soft shapes with personality.', description:'Squishy rounded volumes, playful proportions and friendly three-dimensional forms.', palette:['#ffc6df','#ac91ff','#ffed9e'], tags:['playful','rounded','3D'] },
  { slug:'skeuomorphism', name:'Skeuomorphism', category:'Surfaces', tagline:'Digital objects, real-world feel.', description:'Real-world materials, engraved controls, purposeful texture and analog-inspired interaction.', palette:['#aa7551','#4d3023','#d0ab7c'], tags:['analog','materials','realistic'] },
  { slug:'flat-design', name:'Flat Design', category:'Minimal', tagline:'Bold ideas, zero clutter.', description:'Solid colors, geometric forms and immediate hierarchy with no unnecessary decoration.', palette:['#2d59f4','#ffbd31','#fd7667'], tags:['geometric','solid','clean'] },
  { slug:'material-design', name:'Material Design', category:'Surfaces', tagline:'Purposeful surfaces and motion.', description:'A structured component system with elevation, actionable color and useful feedback.', palette:['#625bff','#e8def8','#454061'], tags:['cards','elevation','system'] },
  { slug:'minimalism', name:'Minimalism', category:'Minimal', tagline:'Less, but with intention.', description:'Refined typography, impeccable rhythm and generous space allow a single idea to lead.', palette:['#efece5','#1f2420','#a6a89c'], tags:['editorial','whitespace','refined'] },
  { slug:'brutalism', name:'Brutalism', category:'Experimental', tagline:'Unpolished on purpose.', description:'Confrontational type, raw structure and unapologetic contrast expose the web’s foundations.', palette:['#f1f1ec','#181818','#e84725'], tags:['raw','grid','bold'] },
  { slug:'neo-brutalism', name:'Neo-Brutalism', category:'Experimental', tagline:'Loud, charming, unforgettable.', description:'Hard offset shadows, thick outlines and exuberant blocks replace subtlety with personality.', palette:['#ffe150','#fb92c3','#81e3e6'], tags:['outlines','playful','contrast'] },
  { slug:'bento-grid', name:'Bento Grid', category:'Minimal', tagline:'Complexity, beautifully organized.', description:'A modular asymmetric tile layout that gives every idea its own carefully sized space.', palette:['#cbd6ff','#bfcbe3','#36445a'], tags:['tiles','modular','grid'] },
  { slug:'dark-ui', name:'Dark UI', category:'Surfaces', tagline:'Precision after dark.', description:'Quiet high-contrast typography, considered accent light and dense information hierarchy.', palette:['#0f1425','#645fff','#80dcbf'], tags:['dashboard','contrast','data'] },
  { slug:'gradient-design', name:'Gradient Design', category:'Color', tagline:'Color in continuous motion.', description:'Rich chromatic transitions create emotion, focus and an unmistakably digital atmosphere.', palette:['#ff7cb4','#8a5dff','#65d6fe'], tags:['color','vibrant','blend'] },
  { slug:'aurora-ui', name:'Aurora UI', category:'Color', tagline:'A soft glow from somewhere else.', description:'Diffuse illuminated ribbons and atmospheric gradients add a cinematic sense of wonder.', palette:['#69fbc3','#5e91ff','#a462e0'], tags:['glow','atmospheric','light'] },
  { slug:'mesh-gradient', name:'Mesh Gradient', category:'Color', tagline:'Every color finds its place.', description:'Multidirectional fields of soft color meet and flow together without rigid boundaries.', palette:['#f3a0bb','#b6a6ff','#9ce0c1'], tags:['organic','pastel','fluid'] },
  { slug:'3d-web-design', name:'3D Web Design', category:'Experimental', tagline:'Go beyond the flat screen.', description:'Depth, perspective, lighting and responsive objects give a page spatial character.', palette:['#a88aff','#121936','#f6c5ff'], tags:['perspective','objects','depth'] },
  { slug:'immersive-design', name:'Immersive Design', category:'Motion', tagline:'Step into the experience.', description:'An edge-to-edge composition combining atmosphere, scale and strong visual storytelling.', palette:['#92a9ac','#1b3545','#d7b688'], tags:['atmospheric','full bleed','story'] },
  { slug:'motion-ui', name:'Motion UI', category:'Motion', tagline:'Make every movement meaningful.', description:'Stagger, timing and micro-interactions explain relationships instead of distracting from them.', palette:['#ef6362','#f3c16a','#24263c'], tags:['animation','microinteractions','timing'] },
  { slug:'parallax-scrolling', name:'Parallax Scrolling', category:'Motion', tagline:'A story with real depth.', description:'Foreground and background layers respond differently as the page scrolls.', palette:['#e9b98a','#5f7e80','#25334f'], tags:['scroll','layers','depth'] },
  { slug:'scrollytelling', name:'Scrollytelling', category:'Motion', tagline:'The story unfolds as you move.', description:'Chapters, sticky cues and progressive transitions turn a page into a narrative.', palette:['#ecddd1','#bc785f','#292923'], tags:['chapters','progress','narrative'] },
  { slug:'cinematic-design', name:'Cinematic Design', category:'Motion', tagline:'A landing page with a pulse.', description:'Wide frames, monumental imagery and theatrical typography borrow the language of film.', palette:['#e4be86','#14121c','#8e4553'], tags:['dramatic','hero','immersive'] },
  { slug:'editorial-design', name:'Editorial Design', category:'Minimal', tagline:'A magazine in the browser.', description:'Classic grids, column rhythm and authoritative typography put the story in charge.', palette:['#efeadc','#30302c','#b55343'], tags:['magazine','columns','type'] },
  { slug:'typography-first', name:'Typography-First', category:'Minimal', tagline:'The words are the work.', description:'Oversized lettering, thoughtful contrasts and text-led layouts make every word count.', palette:['#f0ede5','#101012','#f96d45'], tags:['type','display','contrast'] },
  { slug:'futuristic-ui', name:'Futuristic UI', category:'Experimental', tagline:'Interfaces from tomorrow.', description:'Precision grids, glowing signals and sci-fi control panels create a forward-looking identity.', palette:['#48f6de','#0c192b','#b2d3ff'], tags:['HUD','tech','grid'] },
  { slug:'cyberpunk', name:'Cyberpunk', category:'Experimental', tagline:'Neon, grit and velocity.', description:'Electric color, glitch accents and dystopian visual energy break every quiet convention.', palette:['#f900ab','#03e7fc','#191328'], tags:['neon','glitch','night'] },
  { slug:'bauhaus-design', name:'Bauhaus Design', category:'Experimental', tagline:'Form follows function.', description:'Primary colors, circles, squares and purposeful geometry celebrate reduction and craft.', palette:['#e74a2c','#f9cf35','#2855a6'], tags:['geometry','modernist','primary'] },
  { slug:'organic-design', name:'Organic Design', category:'Color', tagline:'A little closer to nature.', description:'Earthy tones, botanical silhouettes and flowing curves favor the gentle and human.', palette:['#bfd3a6','#ecd5b5','#60785d'], tags:['natural','curves','earthy'] },
  { slug:'isometric-design', name:'Isometric Design', category:'Experimental', tagline:'A world at an angle.', description:'A playful fixed-angle world makes complex concepts instantly tangible and approachable.', palette:['#858dea','#71d7bd','#f6c37d'], tags:['isometric','illustration','geometry'] },
  { slug:'interactive-landing-page', name:'Interactive Landing Page', category:'Motion', tagline:'Don’t just browse. Try it.', description:'Direct manipulation and live feedback invite visitors into the product before they sign up.', palette:['#a991ff','#f3b1bc','#5b52da'], tags:['configurator','state','feedback'] },
];
export const categories: Array<'All styles' | StyleCategory> = ['All styles','Surfaces','Minimal','Color','Motion','Experimental'];
export function getStyle(slug:string) { return styles.find((s)=>s.slug===slug); }
export function cssTokens(style:DesignStyle) {
  return ':root {\n  --accent: '+style.palette[0]+';\n  --accent-secondary: '+style.palette[1]+';\n  --highlight: '+style.palette[2]+';\n}\n';
}
export function sourceSnippet(style:DesignStyle) {
  const examples: Record<string, string> = {
    'glassmorphism': '<div className="glass-window">\n  <div className="glass-pane">\n    <h2>Clarity in every layer.</h2>\n    <button>Open workspace</button>\n  </div>\n</div>\n\n.glass-pane {\n  background: rgba(255,255,255,.12);\n  border: 1px solid rgba(255,255,255,.24);\n  backdrop-filter: blur(24px);\n}',
    'neumorphism': '<button className="neo-control" onClick={onToggle}>Start focus</button>\n\n.neo-control {\n  background: #e6ecf1;\n  box-shadow: 9px 9px 18px #bcc8d1,\n             -9px -9px 18px #fff;\n}',
    'claymorphism': '<div className="clay-sticker">✦</div>\n\n.clay-sticker {\n  border-radius: 40%;\n  box-shadow: inset -8px -12px 20px #9e76db66,\n               0 18px 35px #8760af55;\n}',
    'skeuomorphism': '<input type="range" min="88" max="108" value={frequency} onChange={tune} />\n\n.radio-cabinet {\n  background: repeating-linear-gradient(94deg,#845434,#996843 3px,#70492d 6px);\n  box-shadow: inset 0 2px 4px #fff4, 0 24px 55px #24140988;\n}',
    'flat-design': '<div className="flat-shape"><span>MAKE IT SIMPLE.</span></div>\n\n.flat-shape { background: #2d59f4; color: white; border-radius: 0; }',
    'material-design': '<button className="mat-fab" onClick={addTask} aria-label="Add a task">+</button>\n\n.mat-fab { border-radius: 18px; background: #d7caff; box-shadow: 0 4px 12px #0002; }',
    'minimalism': '<section className="minimal-hero"><small>OBJECTS / 001</small><h1>Space to think.</h1></section>\n\n.minimal-hero { padding: clamp(4rem,10vw,10rem); letter-spacing: -.04em; }',
    'brutalism': '<section className="brutal-hero"><h1>NO RULES.</h1><a href="#work">SEE THE WORK ↗</a></section>\n\n.brutal-hero { border: 5px solid #151515; text-transform: uppercase; }',
    'neo-brutalism': '<button className="nb-btn">LET’S GO ↗</button>\n\n.nb-btn { border:3px solid #111; box-shadow:6px 6px 0 #111; background:#ffe150; }',
    'bento-grid': '<div className="bento-layout"><article className="bento-feature">...</article><article>...</article></div>\n\n.bento-layout { display:grid; grid-template-columns:2fr 1fr; gap:16px; }',
    'dark-ui': '<section className="dark-stat"><small>Active visitors</small><strong>84.2K</strong></section>\n\n.dark-stat { background:#161b2c; border:1px solid #ffffff14; }',
    'gradient-design': '<div className="gradient-orb" aria-hidden="true" />\n\n.gradient-orb { background:linear-gradient(140deg,#ff7cb4,#8a5dff,#65d6fe); filter:blur(1px); }',
    'aurora-ui': '<div className="aurora-light" aria-hidden="true" />\n\n.aurora-light { background:conic-gradient(from 90deg,#69fbc3,#5e91ff,#a462e0,#69fbc3); filter:blur(70px); }',
    'mesh-gradient': '<div className="mesh-field" aria-hidden="true" />\n\n.mesh-field { background: radial-gradient(at 20% 20%,#f3a0bb,transparent 50%), radial-gradient(at 80% 70%,#b6a6ff,transparent 55%),#9ce0c1; }',
    '3d-web-design': '<div className="orbit-cube"><div className="cube-face front" />...</div>\n\n.orbit-cube { transform-style:preserve-3d; animation:spin 12s linear infinite; }',
    'immersive-design': '<section className="imm-scene"><div className="imm-hill far" /><div className="imm-hill near" /><h1>Go further.</h1></section>',
    'motion-ui': '<div className="motion-tile" style={{animationDelay:"120ms"}}>01</div>\n\n.motion-tile { animation:rise-in 700ms both cubic-bezier(.2,.8,.2,1); }',
    'parallax-scrolling': '<div className="parallax-back" style={{transform:"translateY("+scrollY*.2+"px)"}} />\n<div className="parallax-front" style={{transform:"translateY("+scrollY*.55+"px)"}} />',
    'scrollytelling': '<div className="story-progress" style={{width:(progress*100)+"%"}} />\n<section className="story-chapter">01 — The beginning</section>',
    'cinematic-design': '<header className="cinema-frame"><span>AN ORIGINAL EXPERIENCE</span><h1>BEYOND THE FRAME</h1></header>',
    'editorial-design': '<article className="editorial-columns"><h1>Design is a way of seeing.</h1><p>...</p></article>\n\n.editorial-columns { columns:2; column-gap:3rem; }',
    'typography-first': '<h1 className="type-giant">WORDS<br/>MOVE<br/>WORLDS.</h1>\n\n.type-giant { font-size:clamp(5rem,16vw,15rem); line-height:.78; }',
    'futuristic-ui': '<div className="future-scan"><div className="future-ring" /><small>SYSTEM // ONLINE</small></div>',
    'cyberpunk': '<h1 className="cyber-glitch" data-text="AFTER DARK">AFTER DARK</h1>\n\n.cyber-glitch { text-shadow:3px 0 #03e7fc,-3px 0 #f900ab; }',
    'bauhaus-design': '<div className="bau-geom"><div className="bau-circle"/><div className="bau-square"/></div>',
    'organic-design': '<div className="organic-blob" aria-hidden="true" />\n\n.organic-blob { border-radius:57% 43% 68% 32% / 40% 59% 41% 60%; }',
    'isometric-design': '<div className="iso-world"><div className="iso-block tall"/><div className="iso-block short"/></div>\n\n.iso-world { transform:rotateX(55deg) rotateZ(-45deg); transform-style:preserve-3d; }',
    'interactive-landing-page': '<input type="range" min="1" max="20" value={seats} onChange={updateSeats} />\n<strong>{(seats*12).toLocaleString()} / month</strong>',
  };
  return '// '+style.name+' — selected real implementation pattern\n'+cssTokens(style)+'\n'+(examples[style.slug]||'// See src/Demos.tsx for the full page');
}
