import { readFileSync } from 'fs';
const css = readFileSync('vendor/cakeand/package/cakeand.css', 'utf8');
const themes = [...css.matchAll(/\[data-theme=([^\]]+)\]/g)].map((m) => m[1]);
console.log('themes', [...new Set(themes)].slice(0, 30));
const idx = css.indexOf('[data-theme="dark.a"]');
console.log('dark.a index', idx);
console.log(css.slice(idx, idx + 2500));
const keys = [
  '--color-surfaces-canvas',
  '--color-surfaces-container',
  '--color-surfaces-onContainer',
  '--color-text-icon-primary',
  '--color-text-icon-secondary',
  '--color-primary-primary',
  '--color-stroke-border',
  '--color-stroke-border-container',
  '--radius-200',
  '--radius-400',
  '--space-300',
];
for (const k of keys) {
  const re = new RegExp(k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ':([^;}]+)');
  const m = css.slice(idx, idx + 8000).match(re);
  console.log(k, m ? m[1].trim() : 'NOT IN DARK BLOCK');
}
