/* ====== COLOR FLIPPER: MERGING 20 PALETTES ====== */
(function(){
  const btn = document.getElementById('colorFlipperBtn');
  const root = document.documentElement;

  const userPalettes = [
    { '--paper':'#F8F6F2', '--paper2':'#FFFFFF', '--ink':'#1E1E1E', '--blue':'#5B8DEF', '--yellow':'#FFD166', '--green':'#7BD389', isDark: false },
    { '--paper':'#0F172A', '--paper2':'#1E293B', '--ink':'#F8FAFC', '--blue':'#38BDF8', '--yellow':'#FACC15', '--green':'#4ADE80', isDark: true },
    { '--paper':'#FFF7ED', '--paper2':'#FFFFFF', '--ink':'#3B2F2F', '--blue':'#60A5FA', '--yellow':'#FDBA74', '--green':'#86EFAC', isDark: false },
    { '--paper':'#FAFAFA', '--paper2':'#FFFFFF', '--ink':'#111827', '--blue':'#818CF8', '--yellow':'#FDE68A', '--green':'#6EE7B7', isDark: false },
    { '--paper':'#111827', '--paper2':'#1F2937', '--ink':'#F9FAFB', '--blue':'#A78BFA', '--yellow':'#FCD34D', '--green':'#34D399', isDark: true },
    { '--paper':'#FEFCE8', '--paper2':'#FFFFFF', '--ink':'#292524', '--blue':'#67E8F9', '--yellow':'#FDE047', '--green':'#86EFAC', isDark: false },
    { '--paper':'#F5F3FF', '--paper2':'#FFFFFF', '--ink':'#312E81', '--blue':'#818CF8', '--yellow':'#FDE68A', '--green':'#A7F3D0', isDark: false },
    { '--paper':'#ECFEFF', '--paper2':'#FFFFFF', '--ink':'#164E63', '--blue':'#06B6D4', '--yellow':'#FDE68A', '--green':'#6EE7B7', isDark: false },
    { '--paper':'#FFF1F2', '--paper2':'#FFFFFF', '--ink':'#4C0519', '--blue':'#60A5FA', '--yellow':'#FDBA74', '--green':'#86EFAC', isDark: false },
    { '--paper':'#F0FDF4', '--paper2':'#FFFFFF', '--ink':'#14532D', '--blue':'#38BDF8', '--yellow':'#FACC15', '--green':'#4ADE80', isDark: false },
    { '--paper':'#172554', '--paper2':'#1E3A8A', '--ink':'#EFF6FF', '--blue':'#60A5FA', '--yellow':'#FCD34D', '--green':'#6EE7B7', isDark: true },
    { '--paper':'#1C1917', '--paper2':'#292524', '--ink':'#FAFAF9', '--blue':'#38BDF8', '--yellow':'#FBBF24', '--green':'#4ADE80', isDark: true },
    { '--paper':'#FDF2F8', '--paper2':'#FFFFFF', '--ink':'#831843', '--blue':'#818CF8', '--yellow':'#FDE68A', '--green':'#A7F3D0', isDark: false },
    { '--paper':'#EFF6FF', '--paper2':'#FFFFFF', '--ink':'#1E3A8A', '--blue':'#3B82F6', '--yellow':'#FCD34D', '--green':'#6EE7B7', isDark: false },
    { '--paper':'#FAF5FF', '--paper2':'#FFFFFF', '--ink':'#581C87', '--blue':'#A78BFA', '--yellow':'#FDE68A', '--green':'#6EE7B7', isDark: false },
    { '--paper':'#082F49', '--paper2':'#0F172A', '--ink':'#F0F9FF', '--blue':'#38BDF8', '--yellow':'#FACC15', '--green':'#4ADE80', isDark: true },
    { '--paper':'#F7FEE7', '--paper2':'#FFFFFF', '--ink':'#365314', '--blue':'#60A5FA', '--yellow':'#FDE047', '--green':'#4ADE80', isDark: false },
    { '--paper':'#FEF2F2', '--paper2':'#FFFFFF', '--ink':'#7F1D1D', '--blue':'#818CF8', '--yellow':'#FDBA74', '--green':'#86EFAC', isDark: false },
    { '--paper':'#E0F2FE', '--paper2':'#FFFFFF', '--ink':'#0C4A6E', '--blue':'#0EA5E9', '--yellow':'#FDE68A', '--green':'#6EE7B7', isDark: false },
    { '--paper':'#262626', '--paper2':'#404040', '--ink':'#FAFAFA', '--blue':'#60A5FA', '--yellow':'#FACC15', '--green':'#34D399', isDark: true }
  ];

  const palettes = userPalettes.map(p => {
    const isDark = p.isDark;
    delete p.isDark;
    
    return {
      ...p,
      '--kraft': isDark ? p['--paper2'] : '#e8d9b5',
      '--ink-light': isDark ? '#9CA3AF' : '#4B5563',
      '--white': isDark ? p['--paper2'] : '#ffffff',
      '--always-dark': '#000000',
      '--bg-line': isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.06)',
      '--blue-dark': isDark ? p['--blue'] : '#2563eb',
      '--blue-light': isDark ? '#1e3a8a' : '#bfdbfe',
      '--yellow-light': isDark ? '#422006' : '#fef08a',
      '--green-dark': isDark ? p['--green'] : '#16a34a',
      '--red': isDark ? '#ef4444' : '#f87171',
      '--red-dark': isDark ? '#fca5a5' : '#dc2626',
      '--purple': isDark ? '#a855f7' : '#a78bfa',
      '--orange': isDark ? '#f97316' : '#fb923c',
      '--teal': isDark ? '#14b8a6' : '#2dd4bf',
      '--pink': isDark ? '#ec4899' : '#f9a8d4',
    };
  });

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

/* ====== PROGRESS ====== */
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
  const txt=items.map(i=>`<span>${i} ✦</span>`).join('');
  document.getElementById('mqTrack').innerHTML=txt+txt;
})();

/* ====== REVEAL ====== */
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

/* ====== CONFETTI ====== */
const colors=['#60a5fa','#fde047','#4ade80','#fb923c','#f87171','#a78bfa','#2dd4bf','#f9a8d4'];
document.querySelectorAll('.ach-note').forEach(card=>{
  card.addEventListener('mouseenter',()=>{
    for(let i=0;i<6;i++){
      const c=document.createElement('span');
      c.className='confetti';
      c.style.background=colors[Math.floor(Math.random()*colors.length)];
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

/* ====== CAROUSEL ====== */
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

  // touch swipe
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