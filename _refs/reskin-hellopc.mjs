import { readFileSync, writeFileSync } from 'fs';

let html = readFileSync('index.html', 'utf8');

const newHead = `<!doctype html>
<html lang="en" data-theme="dark.a">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Token Ops Challenge</title>
<link rel="stylesheet" href="vendor/cakeand.css">
<style>
/* ---- Standalone shell: fits the 1920x1080 console into any window ---- */
html,body{height:100%;overflow:hidden}
#stage{position:absolute;left:50%;top:50%;width:1920px;height:1080px;transform-origin:center center}

/* ---- Hello PC / Cake& dark.a reskin ---- */
body{
  margin:0;
  background:var(--color-surfaces-canvas);
  color:var(--color-text-icon-primary);
  font-family:"Rookery New","Rookery",system-ui,sans-serif;
}
a{color:var(--color-primary-primary)}
a:hover{color:var(--color-primary-primary-hover)}
.disp,.mono,button{font-family:"Rookery New","Rookery",system-ui,sans-serif}
button{color:inherit;cursor:pointer}
.cta{
  background:var(--color-button-primary-fill);
  color:var(--color-button-on-primary-fill);
  border:0;
  border-radius:var(--radius-1000);
  height:84px;
  padding:0 44px;
  font-size:30px;
  font-weight:700;
  display:inline-flex;
  align-items:center;
  gap:14px;
}
.cta:hover{background:var(--color-primary-primary-hover)}
.ghost{
  background:transparent;
  border:var(--stroke-200) solid var(--color-stroke-border);
  border-radius:var(--radius-200);
  height:56px;
  padding:0 22px;
  font-size:19px;
  font-weight:600;
}
.ghost:hover{border-color:var(--color-primary-primary)}
.stp{display:flex;align-items:center;gap:10px;font-size:18px;font-weight:600;color:var(--color-text-icon-placeholder)}
.stp .n{
  width:32px;height:32px;border-radius:var(--radius-1000);
  border:var(--stroke-200) solid var(--color-stroke-border);
  display:flex;align-items:center;justify-content:center;font-size:15px;
}
.stp.on{color:var(--color-text-icon-primary)}
.stp.on .n{
  background:var(--color-button-primary-fill);
  border-color:var(--color-button-primary-fill);
  color:var(--color-button-on-primary-fill);
}
.stp.done{color:var(--color-text-icon-secondary)}
.stp.done .n{border-color:var(--color-primary-primary);color:var(--color-primary-primary)}
.nb{
  width:56px;height:56px;border-radius:var(--radius-1000);
  border:var(--stroke-200) solid var(--color-stroke-border);
  background:var(--color-surfaces-on-container);
  display:flex;align-items:center;justify-content:center;flex:none;
}
.nb:hover{border-color:var(--color-primary-primary)}
.nb:disabled{opacity:.3;cursor:not-allowed}
.knob{
  width:112px;height:112px;border-radius:var(--radius-1000);
  background:var(--color-surfaces-on-container);
  border:var(--stroke-300) solid var(--color-stroke-border);
  position:relative;flex:none;
  box-shadow:inset 0 -8px 0 rgba(0,0,0,.25);
}
.ptr{
  position:absolute;left:53px;top:9px;width:6px;height:38px;
  border-radius:3px;background:var(--color-primary-primary);
  transform-origin:3px 47px;transition:transform .25s;
}
.det{display:flex;gap:6px;justify-content:center;height:10px}
.det span{width:10px;height:10px;border-radius:var(--radius-1000);background:var(--color-surfaces-on-container-high)}
.det span.on{background:var(--color-primary-primary)}
.tgl{
  width:112px;height:112px;border-radius:var(--radius-400);
  border:var(--stroke-300) solid var(--color-stroke-border);
  background:var(--color-surfaces-on-container);
  display:flex;align-items:center;justify-content:center;
}
.tgl .lev{
  width:20px;height:52px;border-radius:10px;
  background:var(--color-text-icon-placeholder);
  transition:transform .2s;transform:rotate(-25deg);
}
.tgl.on{
  border-color:var(--color-primary-primary);
  background:var(--color-surfaces-primary);
}
.tgl.on .lev{background:var(--color-primary-primary);transform:rotate(25deg)}
.track{
  height:16px;border-radius:var(--radius-150);
  background:var(--color-surfaces-on-container-low);
  position:relative;overflow:hidden;
}
.fill{height:100%;border-radius:var(--radius-150);transition:width .35s}
.chk{display:flex;align-items:center;gap:12px;font-size:21px;color:var(--color-text-icon-secondary)}
.chk .b{
  width:28px;height:28px;border-radius:var(--radius-1000);
  border:var(--stroke-200) solid var(--color-stroke-border);
  display:flex;align-items:center;justify-content:center;flex:none;
}
.chk.ok{color:var(--color-text-icon-primary)}
.chk.ok .b{
  background:var(--color-button-primary-fill);
  border-color:var(--color-button-primary-fill);
  color:var(--color-button-on-primary-fill);
}
.pill{display:inline-flex;align-items:center;height:36px;padding:0 16px;border-radius:var(--radius-1000);font-size:18px;font-weight:700}
.pill.good{background:rgba(36,164,106,.2);color:var(--color-success-success)}
.pill.warn{background:rgba(213,122,21,.2);color:var(--color-warning-warn)}
.pill.bad{background:rgba(254,83,90,.2);color:var(--color-error-error)}
.kick{font-size:18px;letter-spacing:.16em;text-transform:uppercase;font-weight:700;color:var(--color-primary-primary)}
.cap{font-size:18px;color:var(--color-text-icon-secondary)}
.card{
  background:var(--color-surfaces-container);
  border:var(--stroke-100) solid var(--color-stroke-border-container);
  border-radius:var(--radius-400);
}
.wl{
  background:var(--color-surfaces-container);
  border:var(--stroke-200) solid var(--color-stroke-border);
  border-radius:var(--radius-400);
  padding:26px 28px;display:flex;flex-direction:column;gap:14px;text-align:left;min-width:0;
}
.wl:hover{border-color:var(--color-primary-primary)}
.wl.on{
  border-color:var(--color-primary-primary);
  background:var(--color-surfaces-primary);
}
.chip{
  display:inline-flex;align-items:center;height:38px;padding:0 16px;
  border-radius:var(--radius-1000);
  border:var(--stroke-100) solid var(--color-stroke-border);
  font-size:17px;font-weight:600;color:var(--color-text-icon-primary);
}
.let{
  width:76px;height:92px;border-radius:var(--radius-200);
  background:var(--color-surfaces-on-container);
  border:var(--stroke-200) solid var(--color-stroke-border);
  display:flex;align-items:center;justify-content:center;font-size:56px;font-weight:700;
}
.brand-sep{width:1px;height:22px;background:var(--color-stroke-border);margin:0 4px}
.nvidia-brand{display:inline-flex;align-items:center;gap:10px;text-decoration:none;color:var(--color-text-icon-primary);opacity:.92;transition:opacity .15s}
.nvidia-brand:hover{opacity:1;color:var(--color-text-icon-primary)}
.nvidia-brand img{height:28px;width:auto;display:block}
.nvidia-brand .nvidia-word{font-family:"Rookery New","Rookery",system-ui,sans-serif;font-size:18px;font-weight:700;letter-spacing:.04em}

/* Chart series — Hello PC DataVis distinct tones */
.series-cloud{background:#FF8886}
.series-factory{background:#7586FF}
.series-energy{background:#FB911C}
.series-laptop{background:#00BBDF}
.underline-cloud{border-bottom:3px solid #FF8886}
.underline-factory{border-bottom:3px solid #7586FF}
.underline-energy{border-bottom:3px solid #FB911C}
.underline-laptop{border-bottom:3px solid #00BBDF}
</style>
</head>
<body>
<div id="stage"></div>`;

const bodyStart = html.indexOf('<script>');
if (bodyStart < 0) throw new Error('script not found');
html = newHead + '\n\n' + html.slice(bodyStart);

// Replace common inline hex colors with Hello PC token vars / datavis colors
const swaps = [
  // surfaces / chrome
  ['#140B22', 'var(--color-surfaces-canvas)'],
  ['#1D1230', 'var(--color-surfaces-container)'],
  ['#22163A', 'var(--color-surfaces-on-container)'],
  ['#2B1E45', 'var(--color-surfaces-on-container)'],
  ['#251740', 'var(--color-surfaces-on-container)'],
  ['#2A1D42', 'var(--color-surfaces-on-container-low)'],
  ['#2E1528', 'var(--color-surfaces-primary)'],
  ['#3A1626', 'var(--color-surfaces-primary)'],
  ['#1B2E44', 'rgba(36,164,106,.2)'],
  ['#3B2A12', 'rgba(213,122,21,.2)'],
  ['#46161B', 'rgba(254,83,90,.2)'],
  // borders
  ['#36264F', 'var(--color-stroke-border-container)'],
  ['#4B3670', 'var(--color-stroke-border)'],
  ['#5A4680', 'var(--color-stroke-border)'],
  ['#6A5294', 'var(--color-primary-primary)'],
  ['#9A7BD0', 'var(--color-primary-primary)'],
  ['#3A2A57', 'var(--color-surfaces-on-container-high)'],
  // text
  ['#F4F0FA', 'var(--color-text-icon-primary)'],
  ['#E6DAF5', 'var(--color-text-icon-primary)'],
  ['#B9A9D3', 'var(--color-text-icon-secondary)'],
  ['#A592C4', 'var(--color-text-icon-secondary)'],
  ['#8C7AAA', 'var(--color-text-icon-placeholder)'],
  ['#7E6C9C', 'var(--color-text-icon-placeholder)'],
  ['#8E7BAA', 'var(--color-text-icon-placeholder)'],
  ['#B79AE6', 'var(--color-primary-primary)'],
  ['#C9A8FF', 'var(--color-primary-primary)'],
  ['#E2D1FF', 'var(--color-primary-primary-hover)'],
  // accents (old coral → Hello PC primary)
  ['#FF4A3F', 'var(--color-primary-primary)'],
  ['#FF6359', 'var(--color-primary-primary-hover)'],
  ['#FF7A70', 'var(--color-primary-primary)'],
  ['#FF948C', 'var(--color-error-error)'],
  ['#FFC870', 'var(--color-warning-warn)'],
  ['#8FD3FF', 'var(--color-success-success)'],
  // chart series (old game palette → DataVis)
  ['#FF5C4D', '#FF8886'],
  ['#FF6B5C', '#FF8886'],
  ['#E85D4C', '#FF8886'],
  ['#7B5CFF', '#7586FF'],
  ['#6C4FE0', '#7586FF'],
  ['#5B4BDB', '#7586FF'],
  ['#C44DFF', '#F65396'],
  ['#B44AE8', '#F65396'],
  ['#2EC4B6', '#00BBDF'],
  ['#1FA89C', '#00BBDF'],
  ['#3DDC97', '#33C27F'],
];

for (const [from, to] of swaps) {
  html = html.split(from).join(to);
  html = html.split(from.toLowerCase()).join(to);
}

// Font family leftovers in inline styles
html = html.replace(/font-family: Inter, system-ui, sans-serif/g, 'font-family: "Rookery New", "Rookery", system-ui, sans-serif');
html = html.replace(/'Space Grotesk',Inter,system-ui,sans-serif/g, '"Rookery New", "Rookery", system-ui, sans-serif');
html = html.replace(/'JetBrains Mono',ui-monospace,monospace/g, '"Rookery New", "Rookery", system-ui, sans-serif');

writeFileSync('index.html', html);
console.log('reskinned index.html', html.length);
