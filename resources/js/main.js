const $=(s,r=document)=>r.querySelector(s);
const ICO={pen:'<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',code:'<path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>',lay:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>',spark:'<path d="M12 3l1.9 5.6L20 10l-6.1 1.4L12 17l-1.9-5.6L4 10l6.1-1.4z"/>',tool:'<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z"/>',chat:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>'};
const ic=k=>`<svg viewBox="0 0 24 24" aria-hidden="true">${ICO[k]}</svg>`;
// Theme
const root=document.documentElement;
try{const t=localStorage.getItem('theme');if(t)root.dataset.theme=t}catch(e){}
$('#theme').onclick=()=>{const dark=getComputedStyle(root).getPropertyValue('--bg').trim()==='#0c0c0e';const n=dark?'light':'dark';root.dataset.theme=n;try{localStorage.setItem('theme',n)}catch(e){}};
// Mobile menu
const mb=$('#menuBtn'),lk=$('#links');
const setMenu=o=>{lk.classList.toggle('open',o);mb.setAttribute('aria-expanded',o);document.body.style.overflow=o?'hidden':''};
mb.onclick=()=>setMenu(!lk.classList.contains('open'));
lk.querySelectorAll('a').forEach(a=>a.onclick=()=>setMenu(false));
addEventListener('keydown',e=>{if(e.key==='Escape')setMenu(false)});
// Data
const SKILLS=[['pen','Graphic design',['Brand identity','Logo design','Social media design','Marketing & advertising','Flyers & posters','Typography','Layout & composition','Photo manipulation','Visual storytelling']],
['code','Front-end development',['HTML5','CSS3','JavaScript','TypeScript','React','Next.js','Tailwind CSS','Responsive design','UI implementation','Git & GitHub']],
['lay','UI/UX',['UI design','UX fundamentals','Wireframing','Prototyping','Design systems','User-centered design']],
['spark','AI & modern workflows',['AI-assisted design','Prompt engineering','AI image generation','AI-assisted coding','Workflow integration','Rapid prototyping','AI-powered productivity','Intelligent web experiences']]];
$('#skills').innerHTML=SKILLS.map(s=>`<div class="rv"><h3>${ic(s[0])}${s[1]}</h3><div class="tg">${s[2].map(t=>`<span>${t}</span>`).join('')}</div></div>`).join('');
const SERV=[['pen','Graphic design',['Brand identity','Logo design','Social media graphics','Marketing materials','Campaign visuals']],
['code','Front-end development',['Responsive websites','Landing pages','Website UI implementation','Interactive web interfaces']],
['lay','UI/UX design',['Interface design','User experience design','Wireframes','Prototypes']],
['spark','AI-powered creative solutions',['AI-enhanced creative workflows','AI-assisted prototyping','AI in web experiences','Workflow automation']],
['chat','Digital creative consulting',['Creative direction','Design consultation','Digital product ideation']]];
$('#sv').innerHTML=SERV.map(s=>`<div class="rv"><h3>${ic(s[0])}${s[1]}</h3><ul>${s[2].map(t=>`<li>${t}</li>`).join('')}</ul></div>`).join('');
const STEPS=[['Discover','Understand the client, audience, goals and problem.'],['Strategize','Develop a concept, creative direction and execution plan.'],['Design','Create visual concepts, interfaces and digital experiences.'],['Build','Turn concepts into responsive, functional products.'],['Optimize','Test and refine performance, accessibility and usability.'],['Deliver','Hand over polished, scalable, production-ready work.']];
$('#pr').innerHTML=STEPS.map(s=>`<li tabindex="0" class="rv"><h3>${s[0]}</h3><p>${s[1]}</p></li>`).join('');
const AI=[['AI-assisted coding','Faster scaffolding, refactors and test ideas. I read, run and own every line that ships.'],['Creative research','Mood boards, competitor scans and audience summaries, checked against real sources.'],['Concept development','Image generation to explore directions quickly, then redrawn and refined by hand.'],['Rapid prototyping','Clickable prototypes in hours, so clients react to something real early.'],['Workflow optimization','Small automations for exports, naming, resizing and handoff notes.'],['AI-powered web features','Search, summaries or personalization, added only where they help a visitor.']];
const tl=$('#tl'),tp=$('#tpn');
tl.innerHTML=AI.map((a,i)=>`<button role="tab" aria-selected="${i===0}" data-i="${i}">${a[0]}</button>`).join('');
const showAI=i=>{tl.querySelectorAll('button').forEach((b,j)=>b.setAttribute('aria-selected',j===i));tp.innerHTML=`<h3>${AI[i][0]}</h3><p>${AI[i][1]}</p>`};
tl.onclick=e=>{const b=e.target.closest('button');if(b)showAI(+b.dataset.i)};showAI(0);
// Projects (DEMO DATA)
const G=(a,b,c)=>`<div class="art" style="background:${c}"></div>`;
const PROJECTS=[
{n:'Hairs by Winnie',c:'Branding',d:'Logo and brand identity for a premium human hair brand.',t:['Logo design','Brand identity','Mockups'],real:1,bg:'url(resources/images/winnie/page-1.jpg) center/cover',g:['resources/images/winnie/page-3.jpg','resources/images/winnie/page-5.jpg','resources/images/winnie/page-2.jpg'],pdf:'resources/files/hairs-by-winnie-branding.pdf',o:'Hairs by Winnie sells premium 100% human hair extensions, wigs and accessories. This identity gives the brand a refined, luxurious look across print, packaging and outdoor.',b:'Create a brand that signals quality and sophistication, and works for both timeless classic and modern chic styles.',cd:'A gold gradient W monogram inside a circle, with a crowned woman with flowing hair woven into the letter. Gold on white or black keeps it elegant and premium.',p:'[Add your process: sketches, concepts, refinements.] The identity was then applied to a billboard, shopping bags, a mug, a T-shirt and thank-you cards.',r:'A complete brand kit with logo variations and real-world mockups. [Add any client feedback or results.]'},
{n:'Whispers Chat App',c:'UI/UX',d:'Mobile UI design for a secure team messaging app.',t:['UI design','Mobile UI','Mockups'],real:1,bg:'url(resources/images/whispers/thumb.jpg) center/cover',g:['resources/images/whispers/sneak-peek.jpg','resources/images/whispers/mockups.jpg','resources/images/whispers/colors-fonts.jpg','resources/images/whispers/logo.jpg','resources/images/whispers/team.jpg'],link:'https://www.behance.net/gallery/201538699/Whispers-Chat-App',o:'Whispers is a mobile chat platform for company staff. It connects teams with instant, end-to-end encrypted messaging across every level of an organization. Created for the #100daysofUI challenge.',b:'Design a private, efficient messaging app where colleagues can coordinate projects, share updates and stay in touch.',cd:'A clean black-and-white interface with a deep indigo accent (#2F2794) and the Hindi Kochi typeface. The promise is simple: Simple, Smooth, Secure.',p:'Designed the splash screen, chat list with online friends, Messages and Groups tabs, a conversation view and a bottom navigation (home, calls, new chat, broadcast, settings). Presented through device mockups and a sneak-peek layout. [Add more process notes if you like.]',r:'A set of polished mobile screens and presentation visuals for the Whispers brand: Connect, Collaborate, Communicate.'},
{n:'STRYD Footwear',c:'Web Development',d:'Multi-page e-commerce website for a premium footwear brand.',t:['HTML','CSS','JavaScript'],real:1,bg:'url(resources/images/stryd-home.jpg) center 55%/cover',g:['resources/images/stryd-home.jpg'],live:'https://stryd-gamma.vercel.app',o:'STRYD is a multi-page online store for a premium footwear brand, with home, shop, product, cart, about and contact pages.',b:'Build a premium shopping experience where visitors can browse shoes by category, view product details and add items to a cart.',cd:'A near-black look with a gold accent and elegant serif headlines, a clear "Move With Purpose" message, curated featured products and upfront shipping, returns and warranty information.',p:'[Add your process: structure, design and build.]',r:'A live multi-page footwear store. [Add results or what you learned.]'},
{n:'The Caliphate Debate 2.0',c:'Graphic Design',d:'Promotional flyer for a university debating championship.',t:['Flyer design','Typography','Layout'],real:1,bg:'url(resources/images/flyers/caliphate-debate.jpg) center/cover',g:['resources/images/flyers/caliphate-debate.jpg'],o:'A promotional flyer for The Caliphate Debate 2.0, a debating championship run to World Universities\' Debating Championships standard.',b:'Announce the event and make it feel prestigious and rooted in its place.',cd:'A deep green field with white and mint headline blocks in a bold condensed typeface, over a black-and-white photo of the historic gate building. The logo sits at the top and the website at the bottom.',p:'[Add your process: concept, layout and revisions.]',r:'[Add where the flyer was used and the result.]'},
{n:'NYSC POP After Party',c:'Graphic Design',d:'Event flyer for an NYSC passing-out celebration.',t:['Flyer design','Photo manipulation','Typography'],real:1,bg:'url(resources/images/flyers/nysc-pop.jpg) center 30%/cover',g:['resources/images/flyers/nysc-pop.jpg'],o:'An event flyer for the NYSC POP After Party, presented by Avanlanche Ent. x De Throne at Dethrone Lounge, Ilorin.',b:'Promote a night party for corps members finishing their service and get people to reserve.',cd:'A green and black palette that echoes the NYSC uniform, a cut-out model in NYSC kit, an oversized neon-green headline with a script \'After Party\', and a crowd silhouette at the bottom.',p:'[Add your process: concept, photo editing and revisions.]',r:'[Add where the flyer was used and the result.]'},
{n:'Lionstorms International',c:'Web Design',d:'Corporate website for a Nigerian contracting and procurement company.',t:['Web design','HTML','CSS'],real:1,bg:'url(resources/images/lionstorms-thumb.jpg) center/cover',g:['resources/images/lionstorms-thumb.jpg'],live:'https://lionstorms.vercel.app/',o:'A corporate website for Lionstorms International Ltd, a Nigerian general contracting, merchandise and procurement company serving corporate and government clients.',b:'Give the company a credible, professional online presence that explains its services and makes it easy to request a quote.',cd:'A clean corporate layout in navy and gold, taken from the lion shield logo, with clear sections for about, mission and vision, core expertise and contact.',p:'[Add your process: structure, design and build.]',r:'A live site with home, about, services and contact sections, a contact form and an embedded map. [Add results.]'},

];
const cats=['All',...new Set(PROJECTS.map(p=>p.c))];
const pg=$('#pg'),fb=$('#fb');
function draw(f){pg.innerHTML=PROJECTS.map((p,i)=>({p,i})).filter(x=>f==='All'||x.p.c===f).map(({p,i})=>`<button class="pc" data-i="${i}" aria-label="Open ${p.n} details"><div class="th"><div class="art" style="background:${p.bg}"></div><div class="ov">${p.t.join(', ')}</div></div><h3>${p.n}${p.real?'':'<span class="demo">Demo</span>'}</h3><p>${p.c}. ${p.d}</p></button>`).join('')}
fb.innerHTML=cats.map((c,i)=>`<button aria-pressed="${i===0}">${c}</button>`).join('');
fb.onclick=e=>{const b=e.target.closest('button');if(!b)return;fb.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed',x===b));draw(b.textContent)};
draw('All');
const dlg=$('#dlg');
pg.onclick=e=>{const b=e.target.closest('.pc');if(!b)return;const p=PROJECTS[+b.dataset.i];
$('#dc').innerHTML=`<button class="ic cl" aria-label="Close" onclick="dlg.close()"><svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg></button><span class="chip">${p.c}</span> ${p.real?'':'<span class="chip">Demo project</span>'}<h3 id="dt">${p.n}</h3>
<h4>Overview</h4><p>${p.o}</p><h4>Creative brief</h4><p>${p.b}</p><h4>Creative direction</h4><p>${p.cd}</p><h4>Tools</h4><div class="tg">${p.t.map(t=>`<span>${t}</span>`).join('')}</div>
${p.live?`<a class="btn p" style="margin:1.5rem .6rem 0 0" href="${p.live}" target="_blank" rel="noopener">Visit live site</a>`:''}
${p.link?`<a class="btn p" style="margin-top:1.5rem" href="${p.link}" target="_blank" rel="noopener">View on Behance</a>`:''}
${p.pdf?`<a class="btn p" style="margin-top:1.5rem" href="${p.pdf}" target="_blank" rel="noopener">View full PDF</a>`:''}
<div class="gal${p.g?' w':''}">${p.g?p.g.map(x=>`<div style="background:url(${x}) center/${p.g.length===1?'contain no-repeat':'cover'}"></div>`).join(''):`<div style="background:${p.bg}"></div><div style="background:${p.bg};filter:hue-rotate(40deg)"></div><div style="background:${p.bg};filter:invert(.9)"></div>`}</div>`;dlg.showModal()};
dlg.onclick=e=>{if(e.target===dlg)dlg.close()};
// Form
const f=$('#f'),st=$('#st');
const rules={name:v=>v.trim()?'':'Enter your name.',email:v=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)?'':'Enter a valid email address.',subject:v=>v.trim()?'':'Add a subject.',message:v=>v.trim().length>=10?'':'Write at least 10 characters.'};
const chk=el=>{const m=rules[el.name](el.value);el.setAttribute('aria-invalid',!!m);el.nextElementSibling.textContent=m;return !m};
f.querySelectorAll('input,textarea').forEach(el=>el.addEventListener('blur',()=>chk(el)));
/* To send real email: set ENDPOINT to a Formspree/Web3Forms/your own API URL that accepts JSON POST. */
const ENDPOINT='';
const TO='sosthenespatrick@gmail.com';
f.onsubmit=async e=>{e.preventDefault();const els=[...f.elements].filter(x=>x.name);const ok=els.map(chk).every(Boolean);if(!ok){st.textContent='Fix the highlighted fields and try again.';return}
const d=Object.fromEntries(els.map(x=>[x.name,x.value.trim()]));const sb=$('#sb');sb.disabled=true;sb.textContent='Sending…';
try{if(ENDPOINT){const r=await fetch(ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(d)});if(!r.ok)throw 0;st.textContent='Message sent. I will reply soon.';f.reset()}
else{location.href=`mailto:${TO}?subject=${encodeURIComponent(d.subject)}&body=${encodeURIComponent(d.message+'\n\n'+d.name+' ('+d.email+')')}`;st.textContent='Opening your email app with the message ready to send.'}}
catch(_){st.textContent='Could not send. Email me directly at '+TO+'.'}
sb.disabled=false;sb.textContent='Send message'};
// Reveal, nav state, loader, hero parallax
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
const sec=[...document.querySelectorAll('main section[id]')];
const so=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){lk.querySelectorAll('a').forEach(a=>a.toggleAttribute('aria-current',a.getAttribute('href')==='#'+x.target.id))}}),{rootMargin:'-45% 0px -50% 0px'});
sec.forEach(s=>so.observe(s));
$('#yr').textContent=new Date().getFullYear();
addEventListener('load',()=>setTimeout(()=>$('#ld').classList.add('x'),250));
setTimeout(()=>$('#ld').classList.add('x'),1500);
if(!matchMedia('(prefers-reduced-motion:reduce)').matches){const s=$('#stage');addEventListener('pointermove',e=>{const x=(e.clientX/innerWidth-.5),y=(e.clientY/innerHeight-.5);s.querySelectorAll('.fl').forEach(el=>{const d=+el.dataset.d;el.style.translate=`${x*d}px ${y*d}px`})})}
