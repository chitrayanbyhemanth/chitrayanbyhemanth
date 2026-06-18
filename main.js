function goSlide(idx) {
  document.querySelectorAll('.hero-slide').forEach((s, i) => {
    s.classList.toggle('active', i === idx);
  });
  document.querySelectorAll('.slide-dot').forEach((d, i) => {
    d.classList.toggle('active', i === idx);
    d.style.width = i === idx ? '32px' : '8px';
  });
  currentSlide = idx;
}

function startSlider() {
  clearInterval(slideTimer);
  slideTimer = setInterval(() => {
    currentSlide = (currentSlide + 1) % imgs.length;
    goSlide(currentSlide);
  }, 6000);
}

if (document.querySelector('.hero')) {
  startSlider();
}



// Hide Loader after animations complete
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) {
      loader.classList.add('hidden');
      setTimeout(() => loader.remove(), 1000);
    }
  }, 2000);
});



window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 60);
});


// Custom Cursor
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorRing = document.querySelector('.cursor-ring');

    document.addEventListener('mousemove', (e) => {
      if (cursorDot && cursorRing) {
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
        cursorRing.style.left = e.clientX + 'px';
        cursorRing.style.top = e.clientY + 'px';
      }
    });
  


function handleFormSubmit(e) {
  e.preventDefault();
  const form = e.target;
  form.innerHTML = `<div style="text-align:center;padding:60px 0">
<div style="font-size:40px;margin-bottom:18px;color:var(--gold)">✦</div>
<h2 style="font-size:30px;color:var(--gold);font-style:italic;margin-bottom:14px">Message Received</h2>
<p style="font-family:'EB Garamond',Georgia,serif;font-size:16px;color:var(--muted);line-height:1.8">Hemanth will personally respond within 24 hours.<br>Looking forward to creating something beautiful together.</p>
</div>`;
}



function makeGCard(item, extra = '') {
  // Use section and id for link
  let link = `gallery.html?id=${item.id}`;
  if (typeof experiences !== 'undefined' && experiences.find(e => e.id === item.id)) {
    link = `gallery.html?section=experiences&id=${item.id}`;
  } else if (typeof portfolio !== 'undefined' && portfolio.find(p => p.id === item.id)) {
    link = `gallery.html?section=portfolio&id=${item.id}`;
  }

  return `<div class="g-card ${extra}" onclick="window.location.href='${link}'" style="background:var(--ink)">
<img src="${item.img}" alt="${item.title}" loading="lazy">
<div class="g-base-overlay"></div>
<div class="g-hover-overlay" style="background:${item.color}">
  <div class="g-content">
    <div class="g-accent-line"></div>
    <div class="g-cat">${item.title}</div>
    <div class="g-tagline">${item.tagline}</div>
    <div class="g-explore">Explore <span class="g-arrow">→</span></div>
  </div>
</div>
<div class="g-default-label">
  <div class="g-def-cat">${item.title}</div>
  <div class="g-def-desc">${item.desc}</div>
</div>
</div>`;
}