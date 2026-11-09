(function () {
  'use strict';
  document.documentElement.classList.add('js');

  /* ---------- Data ---------- */
  var CATS = [
    { key: 'all', label: 'Semua' },
    { key: 'pos', label: 'POS & Retail' },
    { key: 'mgmt', label: 'Sistem Pengurusan' },
    { key: 'api', label: 'Integrasi & API' },
    { key: 'mobile', label: 'Mobile App' },
    { key: 'other', label: 'Lain-lain' }
  ];

  var FEATURED = [
    {
      title: 'IziPOS', kicker: 'POS awan multi-tenant', icon: 'fa-cash-register', hue: '#0f9d6b',
      desc: 'Platform POS untuk F&B, runcit dan kedai hardware, digunakan oleh banyak syarikat dalam satu sistem.',
      points: ['3 aliran jualan: dine-in, kaunter dan hardware', 'Inventori, pembelian, kredit pelanggan dan e-Invoice LHDN', 'App Flutter untuk juruwang, pelayan dan paparan pelanggan'],
      tags: ['PHP', 'CodeIgniter 4', 'Express.js', 'PostgreSQL', 'Flutter', 'Docker']
    },
    {
      title: 'JerseyOrder', kicker: 'Sistem kilang jersey', icon: 'fa-shirt', hue: '#7c5cff',
      desc: 'Sistem order kilang jersey hujung ke hujung, dari order masuk hingga penghantaran dan komisen jualan.',
      points: ['Pengeluaran ikut station dengan imbasan QR', 'Penghantaran Pos Laju dan pengiraan komisen', 'PWA dengan push notification dan backup automatik'],
      tags: ['Vue.js', 'Node.js', 'Docker', 'PWA']
    },
    {
      title: 'MyInvois e-Invoice', kicker: 'Integrasi LHDN', icon: 'fa-file-invoice', hue: '#e0782f',
      desc: 'Jana dan hantar e-Invois ke LHDN untuk banyak syarikat sekali gus, disambung terus ke SQL Accounting.',
      points: ['Sokong banyak credential syarikat', 'Semakan TIN dan eksport invois dari portal LHDN', 'REST API SQL Accounting dengan dokumentasi Swagger'],
      tags: ['PHP', 'Node.js', 'MyInvois API', 'SQL Accounting']
    },
    {
      title: 'JMBUrus', kicker: 'Pengurusan pangsapuri', icon: 'fa-building', hue: '#2f80ed',
      desc: 'Sistem pengurusan JMB/MC untuk banyak pangsapuri, dikawal oleh Superadmin.',
      points: ['Multi-company: satu sistem untuk banyak JMB', 'Unit, caj penyelenggaraan dan rekod bayaran', 'Deploy satu arahan dengan Docker Compose'],
      tags: ['Express.js', 'MySQL', 'Docker']
    }
  ];

  // [category, icon, title, description, tags, public repo]
  var PROJECTS = [
    ['pos', 'fa-cash-register', 'IziPOS', 'Platform POS awan multi-tenant untuk F&B, runcit dan hardware: inventori, pembelian, kredit pelanggan, e-Invoice LHDN dan portal multi-cawangan.', ['PHP', 'CodeIgniter 4', 'MySQL', 'Docker']],
    ['pos', 'fa-server', 'iziPOS v2', 'Seni bina POS multi-tenant generasi kedua: database berasingan setiap syarikat, langganan modul dan 4 peranan pengguna.', ['Express.js', 'PostgreSQL', 'Docker']],
    ['pos', 'fa-glasses', 'optoPOS', 'Sistem POS dengan backend dan frontend berasingan, disambungkan terus ke SQL Accounting.', ['Node.js', 'Docker', 'SQL Accounting']],
    ['pos', 'fa-bowl-food', 'Sistem Jualan Restoran', 'Sistem jualan restoran dengan print agent untuk printer dapur dan sync jualan ke SQL Accounting.', ['Node.js', 'EJS', 'Docker']],
    ['pos', 'fa-print', 'MultiPrinter', 'Print server WebSocket melalui Cloudflare Tunnel: web POS boleh cetak ke banyak printer thermal melalui app Android, walaupun di rangkaian lain.', ['Flutter', 'WebSocket', 'ESC/POS']],
    ['pos', 'fa-rotate', 'MyPOS Sync API', 'API untuk sync inventori, jualan dan penerimaan stok antara POS desktop dan server pusat.', ['PHP', 'REST API', 'MySQL']],
    ['pos', 'fa-cubes', 'Sistem Inventori Kedai', 'Pengurusan stok kedai: barang masuk dan keluar, baki stok dan laporan inventori.', ['PHP', 'CodeIgniter', 'MySQL']],
    ['pos', 'fa-star', 'Member Points', 'Sistem mata ganjaran ahli untuk kedai runcit: kumpul dan tebus mata serta semak baki.', ['PHP', 'CodeIgniter']],
    ['pos', 'fa-hourglass-end', 'Sistem Tarikh Luput', 'Jejak barang yang hampir tamat tempoh supaya stok boleh dijual atau dipulangkan lebih awal.', ['PHP', 'JavaScript']],

    ['mgmt', 'fa-shirt', 'JerseyOrder', 'Sistem order kilang jersey: design, pengeluaran ikut station (scan QR), penghantaran Pos Laju dan komisen. PWA dengan push notification.', ['Vue.js', 'Node.js', 'Docker', 'PWA']],
    ['mgmt', 'fa-building', 'JMBUrus', 'Sistem pengurusan JMB/MC pangsapuri untuk banyak syarikat, diurus oleh Superadmin.', ['Express.js', 'MySQL', 'Docker']],
    ['mgmt', 'fa-graduation-cap', 'TuisyenKu', 'Sistem pengurusan pusat tuisyen: pelajar, kelas, kehadiran dan yuran.', ['Express.js', 'EJS', 'MySQL', 'Docker']],
    ['mgmt', 'fa-truck', 'Balak Track', 'Penjejakan balak dari matau ke lori ke pelanggan, dengan sync ke SQL Accounting. Boleh dipasang sebagai PWA.', ['Vue.js', 'Node.js', 'Swagger']],
    ['mgmt', 'fa-ticket', 'Managy', 'Sistem pengurusan tiket servis pelanggan: cipta, agih dan jejak status tiket sehingga selesai.', ['PHP', 'CodeIgniter', 'JavaScript'], 'managy'],
    ['mgmt', 'fa-users', 'Sistem HR', 'Sistem sumber manusia untuk sebuah yayasan pendidikan: rekod pekerja, cuti dan pentadbiran.', ['PHP', 'JavaScript']],
    ['mgmt', 'fa-money-bill-wave', 'Sistem Gaji', 'Portal slip gaji pekerja dalam bentuk PWA, termasuk fungsi lupa kata laluan.', ['PHP', 'PWA']],
    ['mgmt', 'fa-school', 'Sistem Yuran Sekolah', 'Pengurusan yuran sekolah: invois yuran, bayaran dan rekod tunggakan pelajar.', ['PHP', 'MySQL']],
    ['mgmt', 'fa-book', 'SPBT', 'Sistem pengurusan Skim Pinjaman Buku Teks: stok buku, pinjaman dan pemulangan.', ['PHP', 'CodeIgniter']],
    ['mgmt', 'fa-box-archive', 'Fixed Assets', 'Aplikasi pengurusan aset tetap: daftar aset, lokasi dan rekod susut nilai.', ['PHP', 'CodeIgniter']],
    ['mgmt', 'fa-clipboard-check', 'Purchase Request', 'Permohonan pembelian dalaman dengan aliran kelulusan.', ['PHP', 'CodeIgniter']],
    ['mgmt', 'fa-chart-line', 'Sarep', 'Laporan jualan daripada banyak database syarikat dalam satu paparan.', ['PHP', 'CodeIgniter', 'SQL Accounting']],
    ['mgmt', 'fa-file-lines', 'Sales Order', 'Sistem sales order untuk sebuah koperasi.', ['JavaScript', 'HTML', 'CSS']],

    ['api', 'fa-file-invoice', 'MyInvois e-Invoice', 'Web app e-Invois LHDN yang menyokong banyak credential syarikat: jana, hantar dan semak status dokumen.', ['PHP', 'JavaScript', 'MyInvois API']],
    ['api', 'fa-download', 'Export Invois LHDN', 'Tarik dan eksport senarai invois daripada portal MyInvois LHDN.', ['JavaScript', 'MyInvois API']],
    ['api', 'fa-magnifying-glass', 'MyTIN Lookup', 'Semakan nombor TIN pembayar cukai melalui API LHDN.', ['PHP', 'LHDN API']],
    ['api', 'fa-plug', 'SQL Accounting API', 'REST API untuk SQL Accounting (Firebird) dengan dokumentasi Swagger, asas integrasi untuk sistem lain.', ['Node.js', 'Firebird', 'Swagger']],
    ['api', 'fa-scale-balanced', 'Stock Take & Adjustment', 'Modul kira stok dan pelarasan stok yang disambung ke SQL Accounting, termasuk app mobile untuk imbas barang.', ['PHP', 'Flutter', 'SQL Accounting']],
    ['api', 'fa-right-to-bracket', 'Login SQL Accounting & Google', 'Modul login guna akaun pengguna SQL Accounting dan Google Sign-In, untuk satu atau banyak database.', ['PHP', 'CodeIgniter', 'OAuth']],
    ['api', 'fa-car', 'RoadTax Blaster', 'Peringatan roadtax automatik melalui WhatsApp (Baileys), disambung ke jualan tunai SQL Accounting.', ['PHP', 'Baileys', 'Docker']],
    ['api', 'fa-comments', 'WhatsApp API', 'Gateway WhatsApp untuk hantar mesej dan notifikasi daripada sistem lain.', ['PHP', 'CodeIgniter']],
    ['api', 'fa-comment-sms', 'SMS Blast', 'Hantar SMS pukal kepada pelanggan melalui API penyedia SMS.', ['PHP', 'JavaScript', 'Docker']],
    ['api', 'fa-building-columns', 'Banking API', 'REST API perbankan ringkas: akaun, deposit, pengeluaran dan pemindahan wang.', ['REST API'], 'banking-api'],

    ['mobile', 'fa-cash-register', 'IziPOS Cashier', 'App juruwang Android/iOS untuk IziPOS: jualan di kaunter, bayaran dan cetak resit.', ['Flutter', 'Dart']],
    ['mobile', 'fa-bell-concierge', 'IziPOS Waiter', 'App pelayan untuk ambil pesanan di meja dan hantar terus ke dapur.', ['Flutter', 'Dart']],
    ['mobile', 'fa-display', 'IziPOS Customer Display', 'Paparan pelanggan pada skrin kedua: senarai item dan jumlah bayaran secara langsung.', ['Flutter', 'Kotlin']],
    ['mobile', 'fa-wallet', 'Poketku', 'App aliran tunai peribadi ikut tempoh gaji bulanan. Semua data disimpan dalam peranti.', ['Flutter', 'Dart', 'Material 3']],

    ['other', 'fa-gamepad', 'Dunia Si Comel', '17 permainan ringkas dalam Bahasa Melayu untuk kanak-kanak 3 tahun. PWA yang boleh dimain tanpa internet.', ['JavaScript', 'PWA', 'Docker']],
    ['other', 'fa-link', 'Short Link', 'Penjana URL pendek dengan pautan tersuai.', ['Node.js', 'Docker']],
    ['other', 'fa-circle-play', 'NadiTube', 'Portal video tutorial untuk pelanggan.', ['JavaScript', 'HTML']],
    ['other', 'fa-folder-open', 'File Manager', 'Pengurus fail web dengan muat naik drag & drop.', ['PHP']],
    ['other', 'fa-globe', 'Laman Web Korporat', 'Laman web syarikat dan organisasi, termasuk laman web Nadicom.', ['PHP', 'HTML', 'CSS']]
  ].map(function (p) {
    return { cat: p[0], icon: p[1], title: p[2], desc: p[3], tags: p[4], repo: p[5] || null };
  });

  /* ---------- Helpers ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function $(id) { return document.getElementById(id); }
  function tagsHtml(tags) { return '<div class="tags">' + tags.map(function (t) { return '<span>' + esc(t) + '</span>'; }).join('') + '</div>'; }

  /* ---------- Featured ---------- */
  $('featured').innerHTML = FEATURED.map(function (f) {
    return '<article class="feat reveal" style="--hue:' + f.hue + ';--hue-soft:' + f.hue + '33">' +
      '<div class="feat__visual" aria-hidden="true">' +
        '<div class="feat__icon"><i class="fa-solid ' + f.icon + '"></i></div>' +
        '<div class="win"><div class="win__side"><span></span><span></span><span></span><span></span></div>' +
        '<div class="win__main"><span></span><span></span><span></span><span class="wide"></span></div></div>' +
      '</div>' +
      '<div class="feat__body">' +
        '<div class="feat__top"><span class="feat__kicker">' + esc(f.kicker) + '</span>' + '</div>' +
        '<h3>' + esc(f.title) + '</h3>' +
        '<p>' + esc(f.desc) + '</p>' +
        '<ul class="points">' + f.points.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ul>' +
        tagsHtml(f.tags) +
      '</div></article>';
  }).join('');

  /* ---------- Catalog ---------- */
  var LIMIT = 9;
  var state = { cat: 'all', q: '', all: false };
  var grid = $('projectGrid'), empty = $('emptyState'), count = $('projectCount'), more = $('showMore');

  function countCat(key) {
    return key === 'all' ? PROJECTS.length : PROJECTS.filter(function (p) { return p.cat === key; }).length;
  }

  $('filters').innerHTML = CATS.map(function (c) {
    return '<button class="chip" type="button" role="tab" data-cat="' + c.key + '" aria-selected="' + (c.key === 'all') + '">' +
      esc(c.label) + '<small>' + countCat(c.key) + '</small></button>';
  }).join('');

  function render() {
    var q = state.q.trim().toLowerCase();
    var list = PROJECTS.filter(function (p) {
      if (state.cat !== 'all' && p.cat !== state.cat) return false;
      if (!q) return true;
      return (p.title + ' ' + p.desc + ' ' + p.tags.join(' ')).toLowerCase().indexOf(q) !== -1;
    });
    var total = list.length;
    var limited = !state.all && !q && state.cat === 'all' && total > LIMIT;
    if (limited) list = list.slice(0, LIMIT);
    grid.innerHTML = list.map(function (p, i) {
      var foot = p.repo
        ? '<a class="repo" href="https://github.com/ibnunasir/' + p.repo + '" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i> Lihat repo</a>'
        : '';
      return '<article class="card" style="animation-delay:' + Math.min(i * 30, 300) + 'ms">' +
        '<div class="card__top"><span class="card__icon"><i class="fa-solid ' + p.icon + '"></i></span>' + '</div>' +
        '<h4>' + esc(p.title) + '</h4>' +
        '<p>' + esc(p.desc) + '</p>' +
        tagsHtml(p.tags) + foot +
        '</article>';
    }).join('');
    empty.hidden = total > 0;
    count.textContent = '(' + total + ')';
    more.hidden = !limited;
    more.innerHTML = 'Tunjuk semua ' + total + ' projek <i class="fa-solid fa-chevron-down"></i>';
  }

  $('filters').addEventListener('click', function (e) {
    var btn = e.target.closest('.chip');
    if (!btn) return;
    state.cat = btn.getAttribute('data-cat');
    Array.prototype.forEach.call(this.children, function (b) { b.setAttribute('aria-selected', String(b === btn)); });
    render();
  });
  more.addEventListener('click', function () { state.all = true; render(); });
  $('projectSearch').addEventListener('input', function () { state.q = this.value; render(); });
  render();

  /* ---------- Stats ---------- */
  var statEls = document.querySelectorAll('.stats dd');
  Array.prototype.forEach.call(statEls, function (el) {
    var target = el.hasAttribute('data-count-projects') ? PROJECTS.length
      : el.hasAttribute('data-count-cat') ? countCat(el.getAttribute('data-count-cat'))
      : parseInt(el.getAttribute('data-count'), 10);
    el.setAttribute('data-target', target);
    el.textContent = target;
  });
  function animateStats() {
    Array.prototype.forEach.call(statEls, function (el) {
      var target = +el.getAttribute('data-target'), start = null;
      function step(ts) {
        if (!start) start = ts;
        var p = Math.min((ts - start) / 1200, 1);
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }

  /* ---------- Terminal ---------- */
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var LINES = [
    ['cmd', 'whoami'],
    ['out', '<span class="y">muizuddin</span> <span class="d">— full-stack developer, Kelantan</span>'],
    ['cmd', 'ls ~/projects | wc -l'],
    ['out', String(PROJECTS.length)],
    ['cmd', 'docker compose up -d'],
    ['out', '<span class="ok">✔</span> izipos        <span class="d">Started</span>'],
    ['out', '<span class="ok">✔</span> jerseyorder  <span class="d">Started</span>'],
    ['out', '<span class="ok">✔</span> myinvois     <span class="d">Started</span>'],
    ['out', '<span class="ok">✔</span> sql-api      <span class="d">Started</span>'],
    ['cmd', 'echo $STACK'],
    ['out', 'php · node · vue · flutter · mysql · postgres']
  ];
  var term = $('terminal');
  function prompt() { return '<span class="p">❯</span> '; }
  if (reduce) {
    term.innerHTML = LINES.map(function (l) { return l[0] === 'cmd' ? prompt() + esc(l[1]) : l[1]; }).join('\n') + '\n' + prompt() + '<span class="c"></span>';
  } else {
    var done = '', li = 0;
    var next = function () {
      if (li >= LINES.length) { term.innerHTML = done + prompt() + '<span class="c"></span>'; return; }
      var line = LINES[li++];
      if (line[0] === 'out') {
        done += line[1] + '\n';
        term.innerHTML = done + '<span class="c"></span>';
        setTimeout(next, 120);
        return;
      }
      var ci = 0;
      var type = function () {
        term.innerHTML = done + prompt() + esc(line[1].slice(0, ci)) + '<span class="c"></span>';
        if (ci++ < line[1].length) setTimeout(type, 38 + Math.random() * 40);
        else { done += prompt() + esc(line[1]) + '\n'; setTimeout(next, 280); }
      };
      type();
    };
    setTimeout(next, 500);
  }

  /* ---------- Nav ---------- */
  var nav = $('nav'), links = $('navLinks'), burger = $('navBurger');
  function onScroll() { nav.classList.toggle('is-scrolled', window.scrollY > 20); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  burger.addEventListener('click', function () {
    var open = links.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(open));
    burger.innerHTML = open ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
  });
  links.addEventListener('click', function (e) {
    if (e.target.closest('a')) {
      links.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
      burger.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
  });

  /* ---------- Theme ---------- */
  $('themeToggle').addEventListener('click', function () {
    var root = document.documentElement;
    var current = root.getAttribute('data-theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    var nextTheme = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', nextTheme);
    try { localStorage.setItem('theme', nextTheme); } catch (e) {}
  });

  /* ---------- Reveal + active section ---------- */
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    Array.prototype.forEach.call(document.querySelectorAll('.reveal'), function (el) { io.observe(el); });

    var navMap = {};
    Array.prototype.forEach.call(links.querySelectorAll('a'), function (a) { navMap[a.getAttribute('href').slice(1)] = a; });
    var so = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var a = navMap[en.target.id];
        Array.prototype.forEach.call(links.querySelectorAll('a'), function (x) { x.classList.remove('is-active'); });
        if (a && !a.classList.contains('nav__cta')) a.classList.add('is-active');
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Array.prototype.forEach.call(document.querySelectorAll('main section[id]'), function (s) { so.observe(s); });

    var statsSeen = false;
    var st = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting && !statsSeen && !reduce) { statsSeen = true; animateStats(); }
    }, { threshold: 0.5 });
    st.observe(document.querySelector('.stats'));
  } else {
    Array.prototype.forEach.call(document.querySelectorAll('.reveal'), function (el) { el.classList.add('is-in'); });
  }

  $('year').textContent = new Date().getFullYear();
})();
