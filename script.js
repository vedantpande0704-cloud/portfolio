/* ====== 20 BALANCED UI/UX COLOR PALETTES ====== */
(function(){
  const btn = document.getElementById('colorFlipperBtn');
  const root = document.documentElement;

  const palettes = [
    { // 1. Original Cream
      '--paper':'#f4efe6', '--paper2':'#fcfbfa', '--kraft':'#e8d9b5', '--ink':'#111827', '--ink-light':'#374151', '--white':'#ffffff',
      '--blue':'#60a5fa', '--blue-dark':'#2563eb', '--blue-light':'#bfdbfe', '--yellow':'#fde047', '--yellow-light':'#fef08a',
      '--green':'#4ade80', '--green-dark':'#16a34a', '--red':'#f87171', '--red-dark':'#dc2626', '--purple':'#a78bfa', '--orange':'#fb923c',
      '--teal':'#2dd4bf', '--pink':'#f9a8d4', '--always-dark':'#111827', '--bg-line':'rgba(0,0,0,0.06)'
    },
    { // 2. Dark Navy
      '--paper':'#0f172a', '--paper2':'#1e293b', '--kraft':'#334155', '--ink':'#f8fafc', '--ink-light':'#cbd5e1', '--white':'#1e293b',
      '--blue':'#38bdf8', '--blue-dark':'#7dd3fc', '--blue-light':'#0c4a6e', '--yellow':'#fde047', '--yellow-light':'#422006',
      '--green':'#34d399', '--green-dark':'#6ee7b7', '--red':'#f87171', '--red-dark':'#fca5a5', '--purple':'#c084fc', '--orange':'#fb923c',
      '--teal':'#2dd4bf', '--pink':'#f472b6', '--always-dark':'#0f172a', '--bg-line':'rgba(255,255,255,0.05)'
    },
    { // 3. Forest Mint
      '--paper':'#f0fdf4', '--paper2':'#ffffff', '--kraft':'#dcfce7', '--ink':'#064e3b', '--ink-light':'#065f46', '--white':'#ffffff',
      '--blue':'#60a5fa', '--blue-dark':'#2563eb', '--blue-light':'#dbeafe', '--yellow':'#facc15', '--yellow-light':'#fef9c3',
      '--green':'#4ade80', '--green-dark':'#16a34a', '--red':'#f87171', '--red-dark':'#dc2626', '--purple':'#a78bfa', '--orange':'#fb923c',
      '--teal':'#2dd4bf', '--pink':'#f9a8d4', '--always-dark':'#064e3b', '--bg-line':'rgba(6,78,59,0.05)'
    },
    { // 4. Terracotta Sunset
      '--paper':'#fff7ed', '--paper2':'#ffedd5', '--kraft':'#fed7aa', '--ink':'#7c2d12', '--ink-light':'#9a3412', '--white':'#fff7ed',
      '--blue':'#38bdf8', '--blue-dark':'#0284c7', '--blue-light':'#e0f2fe', '--yellow':'#facc15', '--yellow-light':'#fef08a',
      '--green':'#4ade80', '--green-dark':'#16a34a', '--red':'#ef4444', '--red-dark':'#b91c1c', '--purple':'#c084fc', '--orange':'#f97316',
      '--teal':'#2dd4bf', '--pink':'#f472b6', '--always-dark':'#7c2d12', '--bg-line':'rgba(124,45,18,0.05)'
    },
    { // 5. Slate Minimalist
      '--paper':'#f8fafc', '--paper2':'#ffffff', '--kraft':'#e2e8f0', '--ink':'#0f172a', '--ink-light':'#475569', '--white':'#ffffff',
      '--blue':'#94a3b8', '--blue-dark':'#64748b', '--blue-light':'#f1f5f9', '--yellow':'#cbd5e1', '--yellow-light':'#f8fafc',
      '--green':'#94a3b8', '--green-dark':'#64748b', '--red':'#cbd5e1', '--red-dark':'#94a3b8', '--purple':'#94a3b8', '--orange':'#cbd5e1',
      '--teal':'#94a3b8', '--pink':'#cbd5e1', '--always-dark':'#0f172a', '--bg-line':'rgba(15,23,42,0.05)'
    },
    { // 6. Velvet Plum
      '--paper':'#2e1065', '--paper2':'#3b0764', '--kraft':'#4c1d95', '--ink':'#faf5ff', '--ink-light':'#e9d5ff', '--white':'#3b0764',
      '--blue':'#38bdf8', '--blue-dark':'#7dd3fc', '--blue-light':'#172554', '--yellow':'#fde047', '--yellow-light':'#581c87',
      '--green':'#34d399', '--green-dark':'#6ee7b7', '--red':'#f43f5e', '--red-dark':'#fb7185', '--purple':'#d8b4fe', '--orange':'#fb923c',
      '--teal':'#2dd4bf', '--pink':'#f472b6', '--always-dark':'#2e1065', '--bg-line':'rgba(255,255,255,0.05)'
    },
    { // 7. Coffee House
      '--paper':'#f5f5f4', '--paper2':'#e5e5e5', '--kraft':'#d4d4d4', '--ink':'#292524', '--ink-light':'#44403c', '--white':'#f5f5f4',
      '--blue':'#78716c', '--blue-dark':'#57534e', '--blue-light':'#d6d3d1', '--yellow':'#d97706', '--yellow-light':'#fef3c7',
      '--green':'#65a30d', '--green-dark':'#4d7c0f', '--red':'#991b1b', '--red-dark':'#7f1d1d', '--purple':'#5b21b6', '--orange':'#c2410c',
      '--teal':'#0f766e', '--pink':'#be185d', '--always-dark':'#292524', '--bg-line':'rgba(41,37,36,0.06)'
    },
    { // 8. Cyber Neon
      '--paper':'#000000', '--paper2':'#09090b', '--kraft':'#18181b', '--ink':'#a3e635', '--ink-light':'#4ade80', '--white':'#09090b',
      '--blue':'#22d3ee', '--blue-dark':'#06b6d4', '--blue-light':'#083344', '--yellow':'#fde047', '--yellow-light':'#422006',
      '--green':'#10b981', '--green-dark':'#059669', '--red':'#f43f5e', '--red-dark':'#e11d48', '--purple':'#d946ef', '--orange':'#f97316',
      '--teal':'#14b8a6', '--pink':'#ec4899', '--always-dark':'#000000', '--bg-line':'rgba(163,230,53,0.1)'
    },
    { // 9. Rose Blush
      '--paper':'#fff1f2', '--paper2':'#ffe4e6', '--kraft':'#fecdd3', '--ink':'#881337', '--ink-light':'#9f1239', '--white':'#fff1f2',
      '--blue':'#38bdf8', '--blue-dark':'#0284c7', '--blue-light':'#e0f2fe', '--yellow':'#fbbf24', '--yellow-light':'#fef08a',
      '--green':'#4ade80', '--green-dark':'#16a34a', '--red':'#f43f5e', '--red-dark':'#e11d48', '--purple':'#c084fc', '--orange':'#fb923c',
      '--teal':'#2dd4bf', '--pink':'#f472b6', '--always-dark':'#881337', '--bg-line':'rgba(136,19,55,0.05)'
    },
    { // 10. True Monochrome
      '--paper':'#ffffff', '--paper2':'#f5f5f5', '--kraft':'#e5e5e5', '--ink':'#000000', '--ink-light':'#404040', '--white':'#ffffff',
      '--blue':'#a3a3a3', '--blue-dark':'#737373', '--blue-light':'#e5e5e5', '--yellow':'#d4d4d4', '--yellow-light':'#f5f5f5',
      '--green':'#a3a3a3', '--green-dark':'#737373', '--red':'#a3a3a3', '--red-dark':'#737373', '--purple':'#a3a3a3', '--orange':'#d4d4d4',
      '--teal':'#a3a3a3', '--pink':'#d4d4d4', '--always-dark':'#000000', '--bg-line':'rgba(0,0,0,0.1)'
    },
    { // 11. Deep Forest
      '--paper':'#022c22', '--paper2':'#064e3b', '--kraft':'#065f46', '--ink':'#ecfdf5', '--ink-light':'#a7f3d0', '--white':'#064e3b',
      '--blue':'#38bdf8', '--blue-dark':'#7dd3fc', '--blue-light':'#0c4a6e', '--yellow':'#fde047', '--yellow-light':'#422006',
      '--green':'#34d399', '--green-dark':'#6ee7b7', '--red':'#f87171', '--red-dark':'#fca5a5', '--purple':'#c084fc', '--orange':'#fb923c',
      '--teal':'#2dd4bf', '--pink':'#f472b6', '--always-dark':'#022c22', '--bg-line':'rgba(255,255,255,0.05)'
    },
    { // 12. Mustard Yellow
      '--paper':'#fef3c7', '--paper2':'#fde68a', '--kraft':'#fcd34d', '--ink':'#451a03', '--ink-light':'#78350f', '--white':'#fef3c7',
      '--blue':'#0ea5e9', '--blue-dark':'#0369a1', '--blue-light':'#e0f2fe', '--yellow':'#fbbf24', '--yellow-light':'#fef08a',
      '--green':'#16a34a', '--green-dark':'#15803d', '--red':'#dc2626', '--red-dark':'#b91c1c', '--purple':'#9333ea', '--orange':'#ea580c',
      '--teal':'#0d9488', '--pink':'#db2777', '--always-dark':'#451a03', '--bg-line':'rgba(69,26,3,0.05)'
    },
    { // 13. Deep Teal
      '--paper':'#134e4a', '--paper2':'#0f766e', '--kraft':'#0d9488', '--ink':'#f0fdfa', '--ink-light':'#ccfbf1', '--white':'#0f766e',
      '--blue':'#38bdf8', '--blue-dark':'#7dd3fc', '--blue-light':'#082f49', '--yellow':'#fde047', '--yellow-light':'#713f12',
      '--green':'#4ade80', '--green-dark':'#86efac', '--red':'#f87171', '--red-dark':'#fca5a5', '--purple':'#c084fc', '--orange':'#fb923c',
      '--teal':'#2dd4bf', '--pink':'#f472b6', '--always-dark':'#134e4a', '--bg-line':'rgba(255,255,255,0.05)'
    },
    { // 14. Retro Lavender
      '--paper':'#faf5ff', '--paper2':'#f3e8ff', '--kraft':'#e9d5ff', '--ink':'#4c1d95', '--ink-light':'#6d28d9', '--white':'#faf5ff',
      '--blue':'#3b82f6', '--blue-dark':'#2563eb', '--blue-light':'#dbeafe', '--yellow':'#facc15', '--yellow-light':'#fef9c3',
      '--green':'#22c55e', '--green-dark':'#16a34a', '--red':'#ef4444', '--red-dark':'#dc2626', '--purple':'#a855f7', '--orange':'#f97316',
      '--teal':'#14b8a6', '--pink':'#ec4899', '--always-dark':'#4c1d95', '--bg-line':'rgba(76,29,149,0.05)'
    },
    { // 15. Charcoal Contrast
      '--paper':'#27272a', '--paper2':'#3f3f46', '--kraft':'#52525b', '--ink':'#f4f4f5', '--ink-light':'#e4e4e7', '--white':'#3f3f46',
      '--blue':'#60a5fa', '--blue-dark':'#93c5fd', '--blue-light':'#1e3a8a', '--yellow':'#fde047', '--yellow-light':'#451a03',
      '--green':'#4ade80', '--green-dark':'#86efac', '--red':'#f87171', '--red-dark':'#fca5a5', '--purple':'#c084fc', '--orange':'#fb923c',
      '--teal':'#2dd4bf', '--pink':'#f472b6', '--always-dark':'#27272a', '--bg-line':'rgba(255,255,255,0.05)'
    },
    { // 16. Mint Breeze
      '--paper':'#f0fdfa', '--paper2':'#ccfbf1', '--kraft':'#99f6e4', '--ink':'#115e59', '--ink-light':'#134e4a', '--white':'#f0fdfa',
      '--blue':'#3b82f6', '--blue-dark':'#2563eb', '--blue-light':'#dbeafe', '--yellow':'#fbbf24', '--yellow-light':'#fef9c3',
      '--green':'#22c55e', '--green-dark':'#16a34a', '--red':'#ef4444', '--red-dark':'#dc2626', '--purple':'#a855f7', '--orange':'#f97316',
      '--teal':'#0d9488', '--pink':'#ec4899', '--always-dark':'#115e59', '--bg-line':'rgba(17,94,89,0.05)'
    },
    { // 17. Sepia Earth
      '--paper':'#78350f', '--paper2':'#92400e', '--kraft':'#b45309', '--ink':'#fef3c7', '--ink-light':'#fde68a', '--white':'#92400e',
      '--blue':'#38bdf8', '--blue-dark':'#7dd3fc', '--blue-light':'#082f49', '--yellow':'#fde047', '--yellow-light':'#451a03',
      '--green':'#4ade80', '--green-dark':'#86efac', '--red':'#f87171', '--red-dark':'#fca5a5', '--purple':'#c084fc', '--orange':'#fb923c',
      '--teal':'#2dd4bf', '--pink':'#f472b6', '--always-dark':'#78350f', '--bg-line':'rgba(255,255,255,0.05)'
    },
    { // 18. Pale Blue
      '--paper':'#f0f9ff', '--paper2':'#e0f2fe', '--kraft':'#bae6fd', '--ink':'#0c4a6e', '--ink-light':'#075985', '--white':'#f0f9ff',
      '--blue':'#0ea5e9', '--blue-dark':'#0284c7', '--blue-light':'#f0f9ff', '--yellow':'#f59e0b', '--yellow-light':'#fef3c7',
      '--green':'#10b981', '--green-dark':'#059669', '--red':'#ef4444', '--red-dark':'#b91c1c', '--purple':'#8b5cf6', '--orange':'#f97316',
      '--teal':'#14b8a6', '--pink':'#d946ef', '--always-dark':'#0c4a6e', '--bg-line':'rgba(12,74,110,0.05)'
    },
    { // 19. Maroon Bold
      '--paper':'#4c0519', '--paper2':'#881337', '--kraft':'#9f1239', '--ink':'#ffe4e6', '--ink-light':'#fecdd3', '--white':'#881337',
      '--blue':'#38bdf8', '--blue-dark':'#7dd3fc', '--blue-light':'#1e3a8a', '--yellow':'#fde047', '--yellow-light':'#4c0519',
      '--green':'#4ade80', '--green-dark':'#86efac', '--red':'#fb7185', '--red-dark':'#fda4af', '--purple':'#c084fc', '--orange':'#fb923c',
      '--teal':'#2dd4bf', '--pink':'#f472b6', '--always-dark':'#4c0519', '--bg-line':'rgba(255,255,255,0.05)'
    },
    { // 20. Concrete Grey
      '--paper':'#d4d4d8', '--paper2':'#e4e4e7', '--kraft':'#f4f4f5', '--ink':'#18181b', '--ink-light':'#27272a', '--white':'#d4d4d8',
      '--blue':'#3b82f6', '--blue-dark':'#2563eb', '--blue-light':'#bfdbfe', '--yellow':'#f59e0b', '--yellow-light':'#fef3c7',
      '--green':'#10b981', '--green-dark':'#059669', '--red':'#ef4444', '--red-dark':'#dc2626', '--purple':'#8b5cf6', '--orange':'#f97316',
      '--teal':'#14b8a6', '--pink':'#db2777', '--always-dark':'#18181b', '--bg-line':'rgba(24,24,27,0.08)'
    }
  ];

  let currentIndex = parseInt(localStorage.getItem('themeIndex') || '0');

  function applyPalette(index) {
    const p = palettes[index];
    for (let key in p) {
      root.style.setProperty(key, p[key]);
    }
  }

  applyPalette(currentIndex);

  btn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % palettes.length;
    applyPalette(currentIndex);
    localStorage.setItem('themeIndex', currentIndex.toString());
  });
})();

/* ====== CURSOR ====== */
(function(){
  if(!matchMedia('(hover:hover)').matches) return;
  const outer=document.getElementById('cursor-outer'), dot=document.getElementById('cursor-dot');
  let ox=0,oy=0,mx=window.innerWidth/2,my=window.innerHeight/2;
  document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;
    dot.style.left=(mx-4)+'px';dot.style.top=(my-4)+'px';});
  (function loop(){ox+=(mx-ox)*0.14;oy+=(my-oy)*0.14;
    outer.style.left=(ox-16)+'px';outer.style.top=(oy-16)+'px';requestAnimationFrame(loop);})();
  const hov=document.querySelectorAll('a,button,label,.proj-card,.ach-note,.exp-entry,.course-pill,.sticker,input,textarea');
  hov.forEach(el=>{
    el.addEventListener('mouseenter',()=>{outer.classList.add('cursor-hover');dot.classList.add('cursor-hover')});
    el.addEventListener('mouseleave',()=>{outer.classList.remove('cursor-hover');dot.classList.remove('cursor-hover')});
  });
})();

/* ====== SCROLL PROGRESS + NAV ACTIVE ====== */
const prog=document.getElementById('progress');
const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>{
  const s=window.scrollY, m=document.body.scrollHeight-window.innerHeight;
  prog.style.width=(m>0?(s/m*100):0)+'%';
  nav.classList.toggle('scrolled',s>60);
  const sections=['hero','edu','experience','achievements','projects','courses','contact'];
  let cur='hero';
  for(const id of sections){
    const el=document.getElementById(id);
    if(el && el.getBoundingClientRect().top<140) cur=id;
  }
  document.querySelectorAll('#navList a').forEach(a=>{
    a.classList.toggle('active', a.getAttribute('href')==='#'+cur);
  });
});

/* ====== HAMBURGER ====== */
const navList=document.getElementById('navList'), hb=document.getElementById('hbBtn');
hb.addEventListener('click',()=>navList.classList.toggle('open'));
navList.querySelectorAll('a').forEach((a,i)=>{
  a.style.transitionDelay=(0.06*i)+'s';
  a.addEventListener('click',()=>navList.classList.remove('open'));
});

/* ====== STICKER RANDOM ROTATE ====== */
document.querySelectorAll('.sticker').forEach((el,i)=>{
  const r=(Math.random()*8-4).toFixed(2);
  el.style.transform=`rotate(${r}deg)`;
  el.style.animationDelay=(0.55+i*0.08)+'s';
});

/* ====== MARQUEE BUILD ====== */
(function(){
  const items=["Marketing","B2B Lead Gen","SEO Content","Email Automation","Event Direction","Team Leadership","Research","AR in Retail","Brevo","Upwork","IIT Bombay","Top 20 NEC","Published Researcher"];
  const txt=items.map(i=>`<span>${i} ★</span>`).join('');
  document.getElementById('mqTrack').innerHTML=txt+txt;
})();

/* ====== REVEAL ON SCROLL ====== */
const io=new IntersectionObserver(es=>{
  es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}});
},{threshold:.12});
document.querySelectorAll('.reveal,.reveal-l,.reveal-r,.reveal-scale').forEach(el=>io.observe(el));

/* ====== STAT COUNTERS ====== */
const counterIO=new IntersectionObserver(es=>{
  es.forEach(e=>{
    if(!e.isIntersecting) return;
    const el=e.target, tgt=+el.dataset.target, suf=el.dataset.suffix||'', pre=el.dataset.prefix||'';
    let v=0, step=Math.max(1,Math.ceil(tgt/40));
    const t=setInterval(()=>{v+=step;if(v>=tgt){v=tgt;clearInterval(t)}el.textContent=pre+v+suf;},30);
    counterIO.unobserve(el);
  });
},{threshold:.4});
document.querySelectorAll('.stat-num').forEach(el=>counterIO.observe(el));

/* ====== CONFETTI ON ACHIEVEMENT HOVER ====== */
const confettiColors=['#60a5fa','#fde047','#4ade80','#fb923c','#f87171','#a78bfa','#2dd4bf','#f9a8d4'];
document.querySelectorAll('.ach-note').forEach(card=>{
  card.addEventListener('mouseenter',()=>{
    for(let i=0;i<6;i++){
      const c=document.createElement('span');
      c.className='confetti';
      c.style.background=confettiColors[Math.floor(Math.random()*confettiColors.length)];
      c.style.left=(20+Math.random()*60)+'%';
      c.style.top='10%';
      c.style.transform=`rotate(${Math.random()*360}deg)`;
      c.style.setProperty('--dx',(Math.random()*140-70)+'px');
      c.style.setProperty('--dy',(-60-Math.random()*90)+'px');
      card.appendChild(c);
      setTimeout(()=>c.remove(),1000);
    }
  });
});

/* ====== PROJECTS CAROUSEL ====== */
(function(){
  const track=document.getElementById('carTrack');
  const viewport=document.querySelector('.carousel-viewport');
  const prevBtn=document.querySelector('.car-prev');
  const nextBtn=document.querySelector('.car-next');
  const dotsWrap=document.getElementById('carDots');
  if(!track||!viewport) return;

  const cards=[...track.children];
  const total=cards.length;
  let idx=0;

  function cardStep(){
    const gap=parseFloat(getComputedStyle(track).gap)||32;
    return (cards[0]?cards[0].offsetWidth:320)+gap;
  }
  function perView(){
    return Math.max(1,Math.floor(viewport.clientWidth/cardStep()));
  }
  function maxIdx(){
    return Math.max(0,total-perView());
  }
  function update(){
    if(idx<0) idx=0;
    if(idx>maxIdx()) idx=maxIdx();
    track.style.transform=`translateX(${-idx*cardStep()}px)`;
    [...dotsWrap.children].forEach((d,i)=>d.classList.toggle('active',i===idx));
  }
  function buildDots(){
    dotsWrap.innerHTML='';
    const pages=maxIdx()+1;
    for(let i=0;i<pages;i++){
      const b=document.createElement('button');
      b.setAttribute('aria-label','Go to slide '+(i+1));
      b.addEventListener('click',()=>{idx=i;update();});
      dotsWrap.appendChild(b);
    }
  }

  prevBtn.addEventListener('click',()=>{idx=idx<=0?maxIdx():idx-1;update();});
  nextBtn.addEventListener('click',()=>{idx=idx>=maxIdx()?0:idx+1;update();});

  // Touch swipe support
  let sx=0,sy=0,active=false;
  viewport.addEventListener('touchstart',e=>{const t=e.changedTouches[0];sx=t.clientX;sy=t.clientY;active=true;},{passive:true});
  viewport.addEventListener('touchend',e=>{
    if(!active) return; active=false;
    const t=e.changedTouches[0];
    const dx=t.clientX-sx, dy=t.clientY-sy;
    if(Math.abs(dx)>40 && Math.abs(dx)>Math.abs(dy)){
      if(dx<0){idx=idx>=maxIdx()?0:idx+1;} else {idx=idx<=0?maxIdx():idx-1;}
      update();
    }
  },{passive:true});

  window.addEventListener('resize',()=>{buildDots();update();});
  buildDots(); update();
})();

/* ====== CONTACT FORM ====== */
const form=document.getElementById('contactForm');
form.addEventListener('submit', async e=>{
  e.preventDefault();
  const btn=document.getElementById('sendBtn');
  const old=btn.textContent;
  btn.disabled=true; btn.textContent='Sending... ⏳';
  try{
    const res=await fetch(form.action,{method:'POST',body:new FormData(form),headers:{Accept:'application/json'}});
    if(res.ok){
      form.style.display='none';
      document.getElementById('successCard').style.display='block';
    } else { throw new Error('failed') }
  }catch(err){
    alert('Hmm, something went wrong. Please email me directly: vedantpande0704@gmail.com');
    btn.disabled=false; btn.textContent=old;
  }
});
