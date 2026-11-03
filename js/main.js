(() => {
  const C = SITE_CONFIG, $ = s => document.querySelector(s), root = document.documentElement;
  const esc = s => String(s).replace(/[&<>"]/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[m]));
  const img = (src, label) => `<div class="ph" data-l="${esc(label)}">${src ? `<img src="${esc(src)}" alt="" loading="lazy" onerror="this.remove()">` : ''}</div>`;
  const li = a => a.map(t => `<li>${esc(t)}</li>`).join('');

  // Tema
  function theme(t) {
    root.dataset.theme = t;
    for (const k in C.colors[t]) root.style.setProperty('--' + k, C.colors[t][k]);
    $('#themeBtn').innerHTML = `<i class="fa-solid ${t === 'dark' ? 'fa-sun' : 'fa-moon'}" aria-hidden="true"></i>`;
    try { localStorage.setItem('p2theme', t); } catch (e) { }
  }
  let saved; try { saved = localStorage.getItem('p2theme'); } catch (e) { }
  document.title = C.title;
  $('#brand').textContent = C.brand;
  $('#themeBtn').onclick = () => theme(root.dataset.theme === 'dark' ? 'light' : 'dark');
  theme(saved || C.defaultTheme);

  // Header
  $('#socials').innerHTML = C.socials.map(s => `<a href="${esc(s.url)}" target="_blank" rel="noopener" aria-label="${esc(s.name)}" title="${esc(s.name)}"><i class="${esc(s.icon)}" aria-hidden="true"></i></a>`).join('');

  // Hero
  $('#hero').innerHTML = C.hero.map((h, i) => `<a class="hi" href="#${h.go}" data-i="${i}">${img(h.image, 'IMG' + (i + 1))}<span class="cap">${esc(h.label)}</span></a>`).join('');
  document.querySelectorAll('.hi').forEach(a => a.addEventListener('click', () => {
    const h = C.hero[a.dataset.i]; if (h.go === 'commission') setCard(h.card);
  }));

  // Commission (flip)
  const L = C.labels; let cur = 0;
  $('#swHint').textContent = L.switchHint; $('#addT').textContent = L.add; $('#dontT').textContent = L.dont;
  function fill(i) {
    const c = C.commissions[i];
    $('#cmImg').innerHTML = img(c.image, 'IMG');
    $('#cmPrice').textContent = c.price; $('#cmSw').textContent = c.switchLabel;
    $('#cmFt').innerHTML = li(c.features); $('#cmAdd').innerHTML = li(c.add); $('#cmDont').innerHTML = li(c.dont);
  }
  function setCard(i) {
    if (i === cur) return; cur = i;
    $('#cmSw').classList.toggle('alt', i % 2 === 1); // border: kartu 1 pink, kartu 2 biru, dst (selalu sinkron)
    const b = $('#cmBox'); b.classList.add('out');
    setTimeout(() => { fill(i); b.classList.replace('out', 'in'); setTimeout(() => b.classList.remove('in'), 350); }, 300);
  }
  fill(0);
  $('#cmSw').onclick = () => setCard((cur + 1) % C.commissions.length);

  // Karya Lainnya: marquee bergantian arah, klik tile buka pratinjau + link postingan
  const W = C.works, igUrl = (C.socials.find(s => /instagram/i.test(s.name)) || C.socials[0]).url;
  const item = w => typeof w === 'string' ? { src: w } : (w || {});
  $('#wkT').textContent = W.title; let rowsNow = 0;
  function works() {
    const rows = innerWidth < 640 ? 3 : 2; if (rows === rowsNow) return; rowsNow = rows;
    const n = Math.max(W.minSlots, W.images.length), box = $('#wkRows'); box.innerHTML = '';
    for (let r = 0; r < rows; r++) {
      const mine = []; for (let i = r; i < n; i += rows) mine.push(W.images[i]);
      const set = mine.map(w => {
        const it = item(w), src = it.src || '';
        if (!src) return `<div class="w">${img('', 'IMG')}</div>`;
        const alt = it.alt || 'Karya Pupuy.2';
        return `<button type="button" class="w" data-src="${esc(src)}" data-url="${esc(it.url || igUrl)}" aria-label="${esc(alt)}">${img(src, 'IMG')}</button>`;
      }).join('');
      box.insertAdjacentHTML('beforeend', `<div class="row"><div class="track ${r % 2 ? 'right' : 'left'}" style="animation-duration:${mine.length * W.secondsPerImage}s">${set.repeat(4)}</div></div>`);
    }
  }
  works(); addEventListener('resize', works);

  // Pratinjau (dialog bawaan browser: Escape + focus sudah ditangani)
  const lb = $('#lb'), lbImg = $('#lbImg');
  $('#lbTxt').textContent = L.post;
  $('#lbX').onclick = () => lb.close();
  lb.addEventListener('click', e => { if (e.target === lb) lb.close(); });
  document.addEventListener('click', e => {
    const w = e.target.closest('.w'); if (!w || !w.dataset.src) return;
    lbImg.src = w.dataset.src; lbImg.alt = w.getAttribute('aria-label');
    $('#lbLink').href = w.dataset.url; lb.showModal();
  });

  // Footer
  $('#fTxt').textContent = C.footer.text.replace('{year}', new Date().getFullYear()); $('#fNote').textContent = C.footer.note;

  // Background lucu
  const bg = $('#bg');
  for (let i = 0; i < C.background.count; i++) {
    const s = document.createElement('span');
    s.textContent = C.background.symbols[i % C.background.symbols.length];
    s.style.cssText = `left:${Math.random() * 100}%;font-size:${14 + Math.random() * 26}px;animation-duration:${14 + Math.random() * 18}s;animation-delay:-${Math.random() * 30}s;color:var(--${i % 2 ? 'blue' : 'pink'})`;
    bg.appendChild(s);
  }

  // Reveal saat scroll
  const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add('on')), { threshold: .15 });
  document.querySelectorAll('.cm,.wk').forEach(e => { e.classList.add('rv'); io.observe(e); });
})();
