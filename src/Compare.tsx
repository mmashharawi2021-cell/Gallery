import { useState } from 'react';
import { ArrowLeftRight, ArrowUpRight, Monitor, Smartphone } from 'lucide-react';
import { getStyle, styles } from './catalog';
type Device='desktop'|'mobile';
export default function Compare(){
  const [left,setLeft]=useState('glassmorphism');
  const [right,setRight]=useState('neo-brutalism');
  const [device,setDevice]=useState<Device>('desktop');
  const first=getStyle(left)!;
  const second=getStyle(right)!;
  return <main className="comparison shell">
    <div className="comparison-hero">
      <span className="section-eyebrow">SIDE BY SIDE / STYLE COMPARISON</span>
      <h1>Two styles.<br/><em>One clear choice.</em></h1>
      <p>See how completely different visual languages solve the same problem. Change either design, then explore their responsive versions without leaving the page.</p>
    </div>
    <div className="comparison-toolbar">
      <div className="comparison-selector"><label htmlFor="style-left">FIRST DESIGN</label><select id="style-left" value={left} onChange={e=>setLeft(e.target.value)}>{styles.map(s=><option value={s.slug} key={s.slug}>{s.name}</option>)}</select></div>
      <button className="compare-swap" aria-label="Swap comparison designs" title="Swap designs" onClick={()=>{setLeft(right);setRight(left);}}><ArrowLeftRight size={20}/></button>
      <div className="comparison-selector"><label htmlFor="style-right">SECOND DESIGN</label><select id="style-right" value={right} onChange={e=>setRight(e.target.value)}>{styles.map(s=><option value={s.slug} key={s.slug}>{s.name}</option>)}</select></div>
      <div className="comparison-devices"><button className={device==='desktop'?'active':''} aria-label="Desktop comparison" onClick={()=>setDevice('desktop')}><Monitor size={18}/></button><button className={device==='mobile'?'active':''} aria-label="Mobile comparison" onClick={()=>setDevice('mobile')}><Smartphone size={18}/></button></div>
    </div>
    <div className={'comparison-grid comparison-'+device}>
      {[first,second].map((style,i)=><article className="compare-panel" key={i}>
        <div className="compare-panel-head"><div><span>0{i+1} / {style.category.toUpperCase()}</span><h2>{style.name}</h2></div><a href={'#/styles/'+style.slug}>Explore detail <ArrowUpRight size={16}/></a></div>
        <div className="compare-frame"><iframe key={style.slug+device} title={style.name+' comparison preview'} src={'#/render/'+style.slug} style={{width:device==='mobile'?390:'100%'}} /></div>
        <div className="compare-info"><p>{style.description}</p><div className="compare-palette">{style.palette.map(c=><span key={c} title={c} style={{background:c}}/>)}</div><div className="compare-tags">{style.tags.map(t=><span key={t}>{t}</span>)}</div></div>
      </article>)}
    </div>
    <div className="comparison-ending"><h2>Found your direction?</h2><p>Explore all 28 designs or continue comparing until the right look stands out.</p><a href="#/">Back to all styles <ArrowUpRight size={17}/></a></div>
  </main>;
}
