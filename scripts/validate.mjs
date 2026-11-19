import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
const read = path => readFileSync(path,'utf8');
const catalog = read('src/catalog.ts');
const demos = read('src/Demos.tsx');
const thumbnails = read('src/PreviewArt.tsx');
const artStyles = read('src/app.css');
const css = ['src/demo-a.css','src/demo-b.css','src/demo-c.css','src/demo-d.css'].map(read).join('\n');
const slugs = [...catalog.matchAll(/slug:'([^']+)'/g)].map(match=>match[1]);
assert.equal(slugs.length,28,'Catalogue must contain exactly 28 styles');
assert.equal(new Set(slugs).size,28,'Every style slug must be unique');
for(const slug of slugs){
  assert.ok(demos.includes("case '"+slug+"':"),'Missing live demo route: '+slug);
  assert.ok(thumbnails.includes("case '"+slug+"':"),'Missing original gallery preview: '+slug);
  assert.ok(artStyles.includes('.thumbnail--'+slug),'Missing preview visual styling: '+slug);
}
assert.ok((demos.match(/function [A-Z][a-zA-Z]+\(/g)||[]).length>=28,'Must implement 28 standalone React components');
assert.ok(css.length>40000,'Landing page styling is incomplete');
const markup = read('src/App.tsx');
const rawSource = read('src/source.ts');
assert.ok(rawSource.includes('Demos.tsx?raw'),'Code explorer must use real component source');
assert.ok(read('src/Compare.tsx').includes('comparison-grid'),'Comparison page is missing');
for(const feature of ['form-atlas-favorites','aria-label="Search designs"','#/render/','copyToClipboard','style-card','device-frame device-','getReactSource']){
  assert.ok(markup.includes(feature),'Missing gallery feature: '+feature);
}
console.log('PASS: 28 unique styles, 28 demo routes, 28 preview illustrations, theme CSS and core gallery features.');
