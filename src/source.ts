import type { DesignStyle } from './catalog';
import demosSource from './Demos.tsx?raw';
import cssA from './demo-a.css?raw';
import cssB from './demo-b.css?raw';
import cssC from './demo-c.css?raw';
import cssD from './demo-d.css?raw';

const componentNames = [
  'Glass','Neumo','Clay','Skeuo','Flat','Material','Minimal',
  'Brutal','NeoBrutal','Bento','Dark','Gradient','Aurora','Mesh',
  'Three','Immersive','Motion','Parallax','Story','Cinema','Editorial',
  'TypeFirst','Future','Cyber','Bauhaus','Organic','Isometric','Interactive',
];
const sheets = [cssA,cssB,cssC,cssD];
export function getReactSource(style:DesignStyle,index:number):string {
  const name=componentNames[index];
  if(!name)return '// Component unavailable.';
  const start=demosSource.indexOf('function '+name+'(');
  if(start<0)return '// Component not found in source.';
  const next=demosSource.indexOf('\nfunction ',start+10);
  const exportAt=demosSource.indexOf('\nexport function StyleDemo',start+10);
  const end=next>=0?next:(exportAt>=0?exportAt:demosSource.length);
  return '// src/Demos.tsx — '+style.name+'\n'+demosSource.slice(start,end).trim();
}
export function getStyleCssSource(style:DesignStyle,index:number):string {
  const sheet=sheets[Math.floor(index/7)];
  const marker='/* '+String(index+1).padStart(2,'0')+' — ';
  const start=sheet.indexOf(marker);
  if(start<0)return '/* Style rules not found. */';
  const next=sheet.indexOf('/* ',start+5);
  const media=sheet.indexOf('@media(',start+5);
  const end=[next,media].filter(x=>x>start).sort((a,b)=>a-b)[0]??sheet.length;
  return '/* '+style.name+' — src/demo-'+['a','b','c','d'][Math.floor(index/7)]+'.css */\n'+sheet.slice(start,end).trim();
}
