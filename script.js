document.getElementById('year').textContent = new Date().getFullYear();
const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');
menuBtn.addEventListener('click', () => navMenu.classList.toggle('open'));

const gallery = document.getElementById('gallery');
const items = [
  ['Branding','Premium Business Branding','✨'],['Branding','Shop Identity Design','🏪'],['Branding','Modern Brand Kit','🎯'],['Branding','Creative Poster Pack','🎨'],
  ['Flex Posters','Event Flex Banner','📢'],['Flex Posters','Madrasa Flex Design','🕌'],['Flex Posters','Shop Banner Design','🏬'],['Flex Posters','Political Flex Design','🟢'],
  ['Posters','Eid Mubarak Post','🌙'],['Posters','Social Media Poster','📱'],['Posters','Business Promotion','🚀'],['Posters','School Poster','📚'],
  ['Logo / Social','Logo Concept','💎'],['Logo / Social','Facebook Post Design','👍'],['Logo / Social','TikTok Thumbnail','🎬'],['Logo / Social','YouTube Thumbnail','▶️'],
  ['Cards / Certificates','Visiting Card','💳'],['Cards / Certificates','Certificate Design','🏆'],['Cards / Certificates','Invitation Card','💌'],['Cards / Certificates','Office Card','🪪']
];
for (let i = 0; i < items.length; i++) {
  const [cat,title,icon] = items[i];
  const card = document.createElement('div');
  card.className = 'work-card';
  card.dataset.category = cat;
  card.innerHTML = `<div class="work-icon">${icon}</div><div><small>Sample Design ${String(i+1).padStart(2,'0')}</small><h3>${title}</h3><p>${cat} by Bin Asad Graphics Center</p></div>`;
  gallery.appendChild(card);
}

const buttons = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('.work-card');
buttons.forEach(btn => btn.addEventListener('click', () => {
  buttons.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const f = btn.dataset.filter;
  cards.forEach(card => card.style.display = (f === 'all' || card.dataset.category === f) ? 'flex' : 'none');
}));

const lightbox = document.getElementById('lightbox');
const previewCard = document.getElementById('previewCard');
cards.forEach(card => card.addEventListener('click', () => {
  previewCard.innerHTML = card.innerHTML;
  lightbox.classList.add('open');
}));
document.getElementById('close').onclick = () => lightbox.classList.remove('open');
lightbox.addEventListener('click', e => { if (e.target === lightbox) lightbox.classList.remove('open'); });
