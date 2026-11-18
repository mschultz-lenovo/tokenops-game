import { readFileSync, copyFileSync, mkdirSync } from 'fs';
const css = readFileSync('vendor/cakeand/package/cakeand.css', 'utf8');
const idx = css.indexOf('[data-theme="dark.a"]');
const end = css.indexOf('[data-theme="win hct"]', idx);
const block = css.slice(idx, end);
const vars = Object.fromEntries([...block.matchAll(/--([a-z0-9-]+):\s*([^;}]+)/gi)].map((m) => [m[1], m[2].trim()]));
[
  'color-surfaces-canvas',
  'color-surfaces-container',
  'color-surfaces-on-container',
  'color-surfaces-on-container-low',
  'color-surfaces-on-container-high',
  'color-surfaces-primary',
  'color-text-icon-primary',
  'color-text-icon-secondary',
  'color-text-icon-placeholder',
  'color-text-icon-on-primary',
  'color-stroke-border',
  'color-stroke-border-container',
  'color-stroke-border-low',
  'color-stroke-border-high',
  'color-primary-primary',
  'color-button-primary-fill',
  'color-button-on-primary-fill',
  'color-warning-warn',
  'color-success-success',
  'color-error-error',
].forEach((k) => console.log(k, vars[k] || 'MISSING'));

// also find spacing/radius in :root
const root = css.slice(css.indexOf(':root'), css.indexOf(':root') + 50000);
const rootVars = Object.fromEntries([...root.matchAll(/--([a-z0-9-]+):\s*([^;}]+)/gi)].map((m) => [m[1], m[2].trim()]));
['space-100','space-200','space-300','space-400','space-500','space-600','space-800','radius-100','radius-150','radius-200','radius-300','radius-400','radius-1000','stroke-100','stroke-200','stroke-300'].forEach((k) => console.log(k, rootVars[k] || 'MISSING'));

mkdirSync('vendor', { recursive: true });
copyFileSync('vendor/cakeand/package/cakeand.css', 'vendor/cakeand.css');
console.log('copied cakeand.css to vendor/');
