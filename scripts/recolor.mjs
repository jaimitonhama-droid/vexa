import { readdirSync, readFileSync, writeFileSync, statSync } from 'fs';
import { join, extname } from 'path';

const replacements = [
  // ── Backgrounds: old ónix → new Sapphire Night ──
  ['#0C0D0E', '#0A0D14'],
  ['#0c0d0e', '#0a0d14'],
  ['#08090A', '#060810'],

  // ── Card surfaces ──
  ['#141518', '#111827'],

  // ── Navy / surface ──
  ['#1A1B20', '#1E2638'],
  ['#1a1b20', '#1e2638'],

  // ── Borders: white-tinted → blue-tinted ──
  ['border-white/[0.08]', 'border-blue-900/40'],
  ['border-white/[0.06]', 'border-blue-900/30'],
  ['border-white/[0.04]', 'border-blue-900/20'],
  ['border-white/[0.1]',  'border-blue-900/50'],
  ['border-white/[0.2]',  'border-blue-800/60'],
  ['border-white/15',     'border-blue-900/40'],
  ['border-white/20',     'border-blue-900/50'],
  ['border-white/30',     'border-blue-800/60'],

  // ── Buttons: improve primary to sapphire blue ──
  ['bg-white hover:bg-slate-200', 'bg-blue-600 hover:bg-blue-500 text-white'],
  ['text-black bg-white hover:bg-slate-200', 'text-white bg-blue-600 hover:bg-blue-500'],
];

function walk(dir) {
  const entries = readdirSync(dir);
  let files = [];
  for (const entry of entries) {
    const full = join(dir, entry);
    if (entry === 'node_modules' || entry === '.next' || entry === '.git') continue;
    const stat = statSync(full);
    if (stat.isDirectory()) {
      files = files.concat(walk(full));
    } else if (['.tsx', '.ts', '.css'].includes(extname(entry))) {
      files.push(full);
    }
  }
  return files;
}

const files = walk('./src');
let changed = 0;

for (const file of files) {
  let content = readFileSync(file, 'utf8');
  let original = content;

  for (const [from, to] of replacements) {
    while (content.includes(from)) {
      content = content.split(from).join(to);
    }
  }

  if (content !== original) {
    writeFileSync(file, content, 'utf8');
    changed++;
    console.log('Updated:', file.replace(process.cwd(), ''));
  }
}

console.log(`\nDone. Updated ${changed} files.`);

