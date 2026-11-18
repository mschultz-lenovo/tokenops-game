import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { PDFParse } from 'pdf-parse';

const buf = readFileSync('./_refs/Tech-World-Demo-Concept-Visuals.pdf');
const parser = new PDFParse({ data: buf });
const result = await parser.getText();
writeFileSync('./_refs/pdf-text.txt', result.text || '');
console.log('pages', result.total);
console.log('chars', (result.text || '').length);
console.log((result.text || '').slice(0, 8000));

try {
  const info = await parser.getInfo?.();
  if (info) writeFileSync('./_refs/pdf-info.json', JSON.stringify(info, null, 2));
} catch {}

try {
  mkdirSync('./_refs/pages', { recursive: true });
  const screens = await parser.getScreenshot?.({ scale: 1.5 });
  if (screens?.pages) {
    for (const page of screens.pages) {
      const out = `./_refs/pages/page-${page.pageNumber}.png`;
      writeFileSync(out, Buffer.from(page.data));
      console.log('wrote', out);
    }
  } else {
    console.log('screenshot keys', screens && Object.keys(screens));
  }
} catch (e) {
  console.log('screenshot error', e.message);
}
