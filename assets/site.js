/* fondo de red animado, reactivo al mouse */
(function(){
  var cv = document.getElementById('net');
  if(!cv) return;
  var ctx = cv.getContext('2d'), W, H, dpr = Math.min(devicePixelRatio || 1, 2), pts = [], m = { x: -999, y: -999 };
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var rgb = getComputedStyle(document.documentElement).getPropertyValue('--rgb').trim() || '255,90,31';

  function size(){
    W = innerWidth; H = innerHeight;
    cv.width = W * dpr; cv.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    var n = Math.round(Math.min(70, W * H / 22000));
    pts = [];
    for (var i = 0; i < n; i++) pts.push({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .25, vy: (Math.random() - .5) * .25 });
  }

  function draw(){
    ctx.clearRect(0, 0, W, H);
    for (var i = 0; i < pts.length; i++){
      var a = pts[i];
      if (!reduce){
        a.x += a.vx; a.y += a.vy;
        if (a.x < 0 || a.x > W) a.vx *= -1;
        if (a.y < 0 || a.y > H) a.vy *= -1;
      }
      for (var j = i + 1; j < pts.length; j++){
        var b = pts[j], dx = a.x - b.x, dy = a.y - b.y, d = dx * dx + dy * dy;
        if (d < 24000){
          ctx.strokeStyle = 'rgba(' + rgb + ',' + (.22 * (1 - d / 24000)).toFixed(3) + ')';
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
      var md = Math.hypot(a.x - m.x, a.y - m.y), near = md < 160;
      if (near){
        ctx.strokeStyle = 'rgba(' + rgb + ',' + (.55 * (1 - md / 160)).toFixed(3) + ')';
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(m.x, m.y); ctx.stroke();
      }
      ctx.fillStyle = 'rgba(' + rgb + ',' + (near ? .95 : .6) + ')';
      ctx.beginPath(); ctx.arc(a.x, a.y, near ? 2.4 : 1.6, 0, 6.283); ctx.fill();
    }
    if (!reduce) requestAnimationFrame(draw);
  }

  addEventListener('resize', size);
  addEventListener('mousemove', function(e){ m.x = e.clientX; m.y = e.clientY; }, { passive: true });
  size(); draw();
})();

/* biblioteca: buscador + filtro de nivel + grilla, data-driven */
function initLibrary(GUIAS, basePath){
  basePath = basePath || '';
  var NIV = ['Principiante', 'Intermedio', 'Avanzado'];
  var $ = function(id){ return document.getElementById(id); };
  var nivel = 'Todas', q = '';

  function esc(t){ return String(t).replace(/[&<>"]/g, function(c){ return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  function pills(){
    var h = '<button class="lib-pill' + (nivel === 'Todas' ? ' on' : '') + '" data-n="Todas">Todas · ' + GUIAS.length + '</button>';
    NIV.forEach(function(n){
      var c = GUIAS.filter(function(g){ return g.nivel === n; }).length;
      if (c) h += '<button class="lib-pill' + (nivel === n ? ' on' : '') + '" data-n="' + n + '">' + n + ' · ' + c + '</button>';
    });
    $('pills').innerHTML = h;
  }

  function render(){
    var l = GUIAS.filter(function(g){
      var t = (g.titulo + ' ' + g.desc + ' ' + g.tags.join(' ')).toLowerCase();
      return (nivel === 'Todas' || g.nivel === nivel) && (!q || t.indexOf(q) > -1);
    });
    $('count').textContent = l.length + ' guía' + (l.length === 1 ? '' : 's') + ' disponible' + (l.length === 1 ? '' : 's');
    $('grid').innerHTML = l.length ? l.map(function(g, i){
      return '<article class="lib-card" style="--d:' + Math.min(i * .05, .4) + 's">' +
        '<div class="lib-meta"><span>' + esc(g.meta) + '</span><span class="lib-badge b-' + g.nivel.toLowerCase() + '">' + g.nivel + '</span></div>' +
        '<h3>' + esc(g.titulo) + '</h3>' +
        '<p>' + esc(g.desc) + '</p>' +
        '<div class="lib-tags">' + g.tags.map(function(t){ return '<span class="lib-tag">' + esc(t) + '</span>'; }).join('') + '</div>' +
        '<div class="lib-open"><a href="' + basePath + esc(g.link) + '">Leer guía <span>→</span></a></div>' +
        '</article>';
    }).join('') : '<div class="lib-empty">No encontramos guías con ese filtro.</div>';
  }

  $('pills').addEventListener('click', function(e){
    var b = e.target.closest('.lib-pill');
    if (!b) return;
    nivel = b.dataset.n; pills(); render();
  });
  $('q').addEventListener('input', function(e){ q = e.target.value.trim().toLowerCase(); render(); });
  pills(); render();
}
