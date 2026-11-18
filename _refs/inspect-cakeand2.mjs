import { readFileSync } from 'fs';
const css = readFileSync('vendor/cakeand/package/cakeand.css', 'utf8');
const idx = css.indexOf('[data-theme="dark.a"]');
const end = css.indexOf('[data-theme="win hct"]', idx);
const block = css.slice(idx, end > idx ? end : idx + 20000);
const vars = [...block.matchAll(/--([a-z0-9-]+):\s*([^;}]+)/gi)].map((m) => [m[1], m[2].trim()]);
const interesting = vars.filter(([k]) =>
  /surface|text|stroke|primary|radius|space|canvas|container|error|warn|success|secondary/i.test(k)
);
console.log('var count in dark.a', vars.length);
interesting.slice(0, 80).forEach(([k, v]) => console.log(`--${k}: ${v}`));
console.log('--- root vars sample ---');
const rootIdx = css.indexOf(':root');
console.log(css.slice(rootIdx, rootIdx + 1200));
