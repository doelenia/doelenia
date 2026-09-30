/**
 * Rebuild language/glossary.html from lexicon.ts.
 * The glossary is a standalone file. It is not a page of the website.
 *
 *   node language/build-glossary.mjs
 */

import { readFileSync, writeFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const dir = dirname(fileURLToPath(import.meta.url))
const src = readFileSync(join(dir, 'lexicon.ts'), 'utf8')
const start = src.indexOf('export const lexicon')
if (start < 0) throw new Error('lexicon.ts has no export const lexicon')
let body = src.slice(start).replace(
  /export const lexicon\s*:\s*LexEntry\[\]\s*=/,
  'const lexicon =',
)
const lexicon = Function(`${body}; return lexicon`)()

const records = JSON.stringify(lexicon)
const html = `<!DOCTYPE html>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Doelenian glossary</title>
<style>
  :root{
    --bg:#f7f7f5; --panel:#ffffff; --ink:#1a1a18; --muted:#6b6b66; --line:#e5e5e0;
    --accent:#2f6f4f; --accent-soft:#e6f0ea; --chip:#eef0ee; --mark:#fff3b0;
  }
  @media (prefers-color-scheme: dark){
    :root:not([data-theme="light"]){
      --bg:#17181a; --panel:#1f2124; --ink:#e9e9e6; --muted:#9a9a94; --line:#2e3034;
      --accent:#6fce9f; --accent-soft:#20302a; --chip:#26282c; --mark:#5a4d16;
    }
  }
  *{box-sizing:border-box}
  body{margin:0;background:var(--bg);color:var(--ink);
    font:15px/1.5 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;}
  .wrap{max-width:760px;margin:0 auto;padding:0 16px 64px;}
  header{position:sticky;top:0;background:linear-gradient(var(--bg) 72%,transparent);
    padding:20px 0 12px;z-index:5;}
  h1{margin:0 0 2px;font-size:19px;letter-spacing:-.01em;}
  .sub{margin:0 0 12px;color:var(--muted);font-size:13px;}
  .searchbox{position:relative;}
  #q{width:100%;padding:13px 40px 13px 14px;font-size:16px;border:1.5px solid var(--line);
    border-radius:12px;background:var(--panel);color:var(--ink);outline:none;}
  #q:focus{border-color:var(--accent);}
  .clear{position:absolute;right:8px;top:50%;transform:translateY(-50%);border:0;background:none;
    color:var(--muted);font-size:20px;cursor:pointer;padding:4px 8px;line-height:1;}
  .count{color:var(--muted);font-size:12px;margin:10px 2px 0;}
  .tagbar{display:flex;align-items:center;gap:8px;margin-top:10px;}
  .tags{display:flex;flex-wrap:nowrap;gap:6px;overflow-x:auto;flex:1;min-width:0;padding-bottom:3px;}
  .tag{border:1px solid var(--line);background:var(--panel);color:var(--muted);font-size:12px;
    padding:4px 10px;border-radius:20px;cursor:pointer;white-space:nowrap;}
  .tag.active{background:var(--accent-soft);border-color:var(--accent);color:var(--accent);font-weight:600;}
  .tagclear{border:0;background:none;color:var(--accent);font-size:12px;cursor:pointer;padding:4px;}
  ul{list-style:none;margin:14px 0 0;padding:0;}
  li{background:var(--panel);border:1px solid var(--line);border-radius:12px;padding:13px 15px;margin-bottom:10px;}
  .name{font-weight:650;font-size:16px;}
  .chip{display:inline-block;background:var(--chip);color:var(--muted);font-size:11px;
    padding:2px 8px;border-radius:20px;margin-left:8px;vertical-align:middle;}
  .made{margin:7px 0 0;font-size:13px;}
  .made button{border:0;background:none;padding:0;color:var(--accent);cursor:pointer;
    font:inherit;text-decoration:underline;text-underline-offset:2px;}
  .plus{color:var(--muted);}
  .def{margin:7px 0 0;}
  .notes{margin:8px 0 0;color:var(--muted);font-size:13px;}
  mark{background:var(--mark);color:inherit;border-radius:3px;padding:0 1px;}
  .empty{color:var(--muted);text-align:center;padding:40px 0;}
</style>
<div class="wrap">
  <header>
    <h1>Doelenian glossary</h1>
    <p class="sub">Search by word or meaning. Edit <code>lexicon.ts</code>, then run <code>node language/build-glossary.mjs</code>. This file is not part of the DOK website.</p>
    <div class="searchbox">
      <input id="q" type="search" autocomplete="off" autocapitalize="off" spellcheck="false"
             placeholder="Search a word or a meaning…" autofocus>
      <button class="clear" id="clear" title="Clear" aria-label="Clear">×</button>
    </div>
    <div class="tagbar">
      <div class="tags" id="tags"></div>
      <button class="tagclear" id="tagclear" hidden>clear</button>
    </div>
    <div class="count" id="count"></div>
  </header>
  <ul id="results"></ul>
</div>
<script>
const RECORDS = ${records};
const KINDS = ['root','compound','name','particle','pronoun','grammar'];
const q = document.getElementById('q');
const results = document.getElementById('results');
const count = document.getElementById('count');
const clearBtn = document.getElementById('clear');
const tagsEl = document.getElementById('tags');
const tagclearBtn = document.getElementById('tagclear');
const active = new Set();
const byWord = new Map(RECORDS.map(r => [r.word.toLowerCase(), r]));

const norm = s => (s||'').toLowerCase();
const esc = s => (s||'').replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

function boundary(text, query){
  let from = 0;
  while(from <= text.length){
    const i = text.indexOf(query, from);
    if(i < 0) return false;
    const before = i === 0 || !/[a-z0-9]/i.test(text[i - 1]);
    const after = i + query.length === text.length || !/[a-z0-9]/i.test(text[i + query.length]);
    if(before && after) return true;
    from = i + 1;
  }
  return false;
}

function score(rec, query){
  if(!query) return 0;
  const names = [rec.word, ...(rec.parts||[]), rec.root||''];
  let best = null;
  for(const name of names){
    const n = norm(name);
    if(!n) continue;
    let s = null;
    if(n === query) s = 0;
    else if(n.startsWith(query)) s = 1;
    else if(n.includes(query)) s = 2;
    if(s !== null && (best === null || s < best)) best = s;
  }
  const gloss = norm(rec.gloss);
  const note = norm(rec.note);
  if(best === null && boundary(gloss, query)) best = 3;
  else if(best === null && gloss.includes(query)) best = 5;
  if(best === null && boundary(note, query)) best = 4;
  else if(best === null && note.includes(query)) best = 6;
  return best;
}

function highlight(text, query){
  if(!query) return esc(text);
  const i = norm(text).indexOf(query);
  if(i < 0) return esc(text);
  return esc(text.slice(0,i)) + '<mark>' + esc(text.slice(i, i+query.length)) + '</mark>' + esc(text.slice(i+query.length));
}

function renderTags(){
  tagsEl.innerHTML = KINDS.map(t =>
    '<span class="tag'+(active.has(t)?' active':'')+'" data-t="'+t+'">'+t+'</span>'
  ).join('');
  tagclearBtn.hidden = active.size === 0;
}

function render(){
  const query = norm(q.value.trim());
  clearBtn.style.visibility = q.value ? 'visible' : 'hidden';
  renderTags();
  let rows = RECORDS
    .filter(r => active.size === 0 || active.has(r.kind))
    .map(r => ({r, s: score(r, query)}))
    .filter(x => x.s !== null);
  rows.sort((a,b) => a.s - b.s || a.r.word.localeCompare(b.r.word));
  count.textContent = rows.length + ' word' + (rows.length===1?'':'s');
  if(!rows.length){
    results.innerHTML = '<div class="empty">No word matches.</div>';
    return;
  }
  results.innerHTML = rows.map(({r}) => {
    const chip = '<span class="chip">'+esc(r.kind)+(r.status==='given'?'':' · '+esc(r.status))+'</span>';
    const bits = [];
    (r.parts||[]).forEach((part, i) => {
      const shown = (byWord.get(part.toLowerCase())||{}).word || part;
      if(i) bits.push('<span class="plus"> + </span>');
      bits.push('<button type="button" data-jump="'+esc(shown)+'">'+esc(shown)+'</button>');
    });
    if(r.root){
      if(bits.length) bits.push('<span class="plus"> · </span>');
      const shown = (byWord.get(r.root.toLowerCase())||{}).word || r.root;
      bits.push('<span class="plus">root </span><button type="button" data-jump="'+esc(shown)+'">'+esc(shown)+'</button>');
    }
    const made = bits.length ? '<p class="made">'+bits.join('')+'</p>' : '';
    const notes = r.note ? '<p class="notes">'+highlight(r.note, query)+'</p>' : '';
    return '<li><div class="name">'+highlight(r.word, query)+chip+'</div>'
      + made
      + '<p class="def">'+highlight(r.gloss||'', query)+'</p>'
      + notes + '</li>';
  }).join('');
}

q.addEventListener('input', render);
clearBtn.addEventListener('click', () => { q.value=''; q.focus(); render(); });
tagsEl.addEventListener('click', e => {
  const chip = e.target.closest('.tag');
  if(!chip) return;
  const t = chip.getAttribute('data-t');
  active.has(t) ? active.delete(t) : active.add(t);
  render();
});
tagclearBtn.addEventListener('click', () => { active.clear(); render(); });
results.addEventListener('click', e => {
  const btn = e.target.closest('[data-jump]');
  if(!btn) return;
  active.clear();
  q.value = btn.getAttribute('data-jump');
  q.focus();
  render();
});
document.addEventListener('keydown', e => {
  if(e.key === 'Escape'){ q.value=''; active.clear(); render(); q.blur(); }
  else if(e.key === '/' && document.activeElement !== q){ e.preventDefault(); q.focus(); }
});
render();
</script>
`

writeFileSync(join(dir, 'glossary.html'), html)
console.log('wrote', join(dir, 'glossary.html'), lexicon.length, 'entries')
