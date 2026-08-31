(function(){
  const languages={
    en:{name:'English',path:'/'},hi:{name:'हिन्दी',path:'/hi/'},tr:{name:'Türkçe',path:'/tr/'},vi:{name:'Tiếng Việt',path:'/vi/'},es:{name:'Español',path:'/es/'},ru:{name:'Русский',path:'/ru/'},id:{name:'Bahasa Indonesia',path:'/id/'},de:{name:'Deutsch',path:'/de/'},fr:{name:'Français',path:'/fr/'}}
  const codes=Object.keys(languages);
  function current(){const p=location.pathname.replace(/\/+$/,'')||'/';return codes.find(c=>languages[c].path.replace(/\/+$/,'')===p)||'en'}
  function detect(){const n=(navigator.language||'en').toLowerCase();if(/^en(?:-|$)/.test(n))return'en';if(/^hi(?:-|$)/.test(n))return'hi';if(/^tr(?:-|$)/.test(n))return'tr';if(/^vi(?:-|$)/.test(n))return'vi';if(/^es(?:-|$)/.test(n))return'es';if(/^ru(?:-|$)/.test(n))return'ru';if(/^id(?:-|$)/.test(n))return'id';if(/^de(?:-|$)/.test(n))return'de';if(/^fr(?:-|$)/.test(n))return'fr';return'en'}
  function add(){
    const nav=document.querySelector('.navbar'); if(!nav)return;
    if(!document.getElementById('languageBtn')){
      const tools=document.createElement('div');tools.className='language-tools';tools.innerHTML='<button class="language-button" id="languageBtn" type="button" aria-haspopup="dialog" aria-controls="languageModal" aria-label="Change language"><i class="fa-solid fa-globe" aria-hidden="true"></i><span id="currentLanguageLabel">English</span></button>';nav.appendChild(tools)
    }
    if(!document.getElementById('languageModal')){
      const modal=document.createElement('div');modal.className='language-modal';modal.id='languageModal';modal.setAttribute('aria-hidden','true');modal.innerHTML='<div class="language-backdrop" data-close-language></div><div class="language-dialog" role="dialog" aria-modal="true" aria-labelledby="languageTitle"><button class="language-close" id="languageClose" type="button" aria-label="Close language selector">×</button><div class="language-icon"><i class="fa-solid fa-language" aria-hidden="true"></i></div><h2 id="languageTitle">Choose your language</h2><p id="languageSubtitle">Select a language for the best experience.</p><select id="languageSelect" aria-label="Select language"></select><button class="btn primary language-continue" id="languageContinue" type="button">Continue</button><p class="language-detected" id="languageDetected"></p></div></div>';document.body.appendChild(modal)
    }
  }
  function go(code){localStorage.setItem('manavsols-language',code);location.href=languages[code].path}
  function setup(){
    add();
    const code=current(),saved=localStorage.getItem('manavsols-language'),suggested=(saved&&languages[saved])?saved:detect();
    const btn=document.getElementById('languageBtn'),label=document.getElementById('currentLanguageLabel'),modal=document.getElementById('languageModal'),sel=document.getElementById('languageSelect'),close=document.getElementById('languageClose'),cont=document.getElementById('languageContinue'),det=document.getElementById('languageDetected');
    if(label)label.textContent=languages[code].name;
    if(sel){sel.innerHTML=codes.map(c=>`<option value="${c}">${languages[c].name}</option>`).join('');sel.value=code}
    const texts={en:['Choose your language','Select a language for the best experience.','Continue','Language detected from your browser'],hi:['अपनी भाषा चुनें','बेहतरीन अनुभव के लिए एक भाषा चुनें।','जारी रखें','भाषा आपके ब्राउज़र से पहचानी गई'],tr:['Dilinizi seçin','En iyi deneyim için bir dil seçin.','Devam','Dil tarayıcınızdan algılandı'],vi:['Chọn ngôn ngữ','Chọn ngôn ngữ để có trải nghiệm tốt nhất.','Tiếp tục','Ngôn ngữ được nhận diện từ trình duyệt'],es:['Elige tu idioma','Selecciona un idioma para disfrutar de la mejor experiencia.','Continuar','Idioma detectado desde tu navegador'],ru:['Выберите язык','Выберите язык для лучшего опыта.','Продолжить','Язык определён браузером'],id:['Pilih bahasa Anda','Pilih bahasa untuk pengalaman terbaik.','Lanjutkan','Bahasa terdeteksi dari browser'],de:['Sprache auswählen','Wähle eine Sprache für die beste Erfahrung.','Weiter','Sprache aus deinem Browser erkannt'],fr:['Choisissez votre langue','Sélectionnez une langue pour une meilleure expérience.','Continuer','Langue détectée par votre navigateur']};
    function paint(c){const t=texts[c]||texts.en;document.getElementById('languageTitle').textContent=t[0];document.getElementById('languageSubtitle').textContent=t[1];cont.textContent=t[2]}
    function open(first){if(!modal)return;modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.classList.add('language-open');sel.value=first?selected:selected;paint(sel.value);if(det&&first)det.textContent=(texts[sel.value]||texts.en)[3]+': '+languages[sel.value].name}
    const selected=current();
    if(btn)btn.addEventListener('click',()=>open(false));
    if(close)close.addEventListener('click',()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('language-open')});
    if(cont)cont.addEventListener('click',()=>go(sel.value));
    if(sel)sel.addEventListener('change',()=>paint(sel.value));
    document.querySelectorAll('[data-close-language]').forEach(e=>e.addEventListener('click',()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('language-open')}));
    document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('language-open')}});
    if(!localStorage.getItem('manavsols-language-selected')){setTimeout(()=>{sel.value=suggested;paint(suggested);if(det)det.textContent=(texts[suggested]||texts.en)[3]+': '+languages[suggested].name;open(false)},450)}
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',setup);else setup();
})();