import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dir = path.resolve(__dirname, 'src/data/nutrients');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));

const keyCounts = {};
const allKeysSet = new Set();
const keyExamples = {};

files.forEach(file => {
  const content = fs.readFileSync(path.join(dir, file), 'utf8');
  const parsed = matter(content);
  Object.keys(parsed.data).forEach(key => {
    keyCounts[key] = (keyCounts[key] || 0) + 1;
    allKeysSet.add(key);
    if (!keyExamples[key]) {
      keyExamples[key] = parsed.data[key];
    }
  });
});

console.log('Key Frequencies:');
Object.entries(keyCounts).sort((a, b) => b[1] - a[1]).forEach(([k, v]) => {
  console.log(`${k}: ${v}`);
});
console.log('\nAll unique keys:', Array.from(allKeysSet));
