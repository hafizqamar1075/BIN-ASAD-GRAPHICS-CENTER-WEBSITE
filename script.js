document.getElementById('year').textContent = new Date().getFullYear();
const buttons = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('.work-card');
buttons.forEach(btn=>btn.addEventListener('click',()=>{buttons.forEach(b=>b.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;cards.forEach(card=>{card.style.display=(f==='all'||card.dataset.category===f)?'block':'none';});}));
const lightbox=document.getElementById('lightbox');const lightImg=lightbox.querySelector('img');
cards.forEach(card=>card.addEventListener('click',()=>{lightImg.src=card.querySelector('img').src;lightbox.classList.add('open')}));
document.getElementById('close').onclick=()=>lightbox.classList.remove('open');
lightbox.addEventListener('click',e=>{if(e.target===lightbox)lightbox.classList.remove('open')});