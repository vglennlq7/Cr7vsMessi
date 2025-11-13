// ----- POINTS RULES -----
const rules = {
  op1: { score:{cr7:1}, assits:{messi:1}, both:{cr7:1,messi:1} },
  op2: { dribbling:{messi:1}, shooting:{cr7:1}, both:{cr7:1,messi:1} },
  op3: { one_club:{messi:1}, more_than:{cr7:1} },
  op4: { talent:{messi:1}, discipline:{cr7:1}, half:{cr7:1,messi:1} },
  op5: { yeah:{cr7:1}, nop:{messi:1} },
  op6: { extroverted:{cr7:1}, introverted:{messi:1} },
  op7: { fast:{cr7:1}, possession:{messi:1} },
  op8: { cross:{messi:1}, wait:{cr7:1} },
  op9: { bicycle:{cr7:1}, justdribbling:{messi:1} }
};

function computeGOAT(e){
  e?.preventDefault?.();

  let cr7 = 0, messi = 0;
  for (const id in rules) {
    const sel = document.getElementById(id);
    if (!sel) { console.warn('Missing select:', id); continue; }
    const add = rules[id][sel.value];
    if (!add)  { console.warn('No rule for', id, sel.value); continue; }
    cr7   += add.cr7   || 0;
    messi += add.messi || 0;
  }

  const btn = document.getElementById('seeGoatBtn');
  if (!btn) return;

  let msg;
  if (cr7 > messi) msg = `Your 🐐 is <strong>CRISTIANO RONALDO</strong> (${cr7}–${messi})`;
  else if (messi > cr7) msg = `Your 🐐 is <strong>LIONEL MESSI</strong> (${messi}–${cr7})`;
  else msg = `⚖️ It’s a tie! (${cr7}–${messi}) — you like both 🐐s.`;

  btn.innerHTML = msg;
  btn.classList.add('btn-result');
}

// make sure the listener is attached
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('seeGoatBtn');
  if (btn) btn.addEventListener('click', computeGOAT);
});

