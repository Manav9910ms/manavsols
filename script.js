const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector("nav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("show");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      nav.classList.remove("show");
      menuBtn.setAttribute("aria-expanded", "false");
    }
  });
}

const translations = {
  en: {
    name: "English",
    popupTitle: "Choose your language",
    popupSubtitle: "Select a language for the best experience.",
    continue: "Continue",
    detected: "Language detected from your browser",
    nav: ["Home", "About MANAV SOLS", "Services", "Sample Websites", "Contact"],
    heroTagline: "Digital Solutions & Technology Services",
    heroTitle: "Building Digital Solutions That Matter",
    heroDescription: "<strong>MANAV SOLS</strong> is an independent digital solutions brand and technology services platform, founded by <strong>Manav Singh</strong>. We build modern websites, digital products, automation and custom technology solutions for businesses, professionals and startups.",
    heroSamples: "Sample Websites",
    heroWork: "Work With MANAV SOLS",
    aboutTitle: "About MANAV SOLS",
    aboutP1: "<strong>MANAV SOLS</strong> is a digital solutions business and technology services platform focused on building useful, modern and reliable digital products for real-world needs.",
    aboutP2: "Founded by <strong>Manav Singh</strong>, MANAV SOLS works across web development, software, automation and AI-based concepts. The platform brings services, products and custom technology projects together under one technology brand.",
    aboutBusinessTitle: "💼 Business Type", aboutBusinessText: "Digital Solutions Brand • Technology Services",
    aboutDoTitle: "🚀 What We Do", aboutDoText: "Websites, software, automation and custom digital solutions.",
    aboutVisionTitle: "🎯 Vision", aboutVisionText: "Build a trusted technology brand through innovation, quality and limitless skills.",
    servicesTitle: "MANAV SOLS Services",
    servicesSubtitle: "Technology services for businesses, professionals, startups and custom projects.",
    services: [
      ["Web Development", "Modern, fast and responsive websites for businesses, brands, professionals and portfolios."],
      ["AI & Automation", "Automation tools and smart digital workflows built around practical AI-focused ideas."],
      ["Technical Solutions", "Practical technical systems, integrations and digital workflows designed around real needs."],
      ["Custom Software", "Unique software and coding solutions tailored to specific ideas and business requirements."]
    ],
    samplesTitle: "Sample Websites",
    samplesSubtitle: "Explore the types of modern websites MANAV SOLS can design and build for different business needs.",
    samples: [
      ["Business", "Business Website", "Professional websites for local businesses, startups and growing brands with a clean, trustworthy design."],
      ["Restaurant", "Restaurant Website", "Modern restaurant pages with menus, contact details, offers and a mobile-friendly customer experience."],
      ["Portfolio", "Personal Portfolio", "Personal branding websites for developers, freelancers, creators and professionals who want to stand out."],
      ["Company", "Company Website", "Responsive company websites that present services, projects, information and contact options professionally."]
    ],
    contactTitle: "Contact MANAV SOLS",
    contactSubtitle: "Talk directly with MANAV SOLS about a website, software project or digital solution.",
    contactTitles: ["Call", "WhatsApp", "Email", "LinkedIn", "GitHub", "Instagram", "YouTube", "WhatsApp Channel"],
    contactTexts: ["+91 8376882879", "+91 8376882879", "manavsolszzz@gmail.com", "Founder Profile", "MANAV SOLS Projects", "MANAV SOLS", "MANAV SOLS Content", "MANAV SOLS Updates"],
    footer: "© 2026 MANAV SOLS — Digital Solutions & Technology Services. All rights reserved."
  },
  hi: {
    name: "हिन्दी", popupTitle: "अपनी भाषा चुनें", popupSubtitle: "बेहतरीन अनुभव के लिए एक भाषा चुनें।", continue: "जारी रखें", detected: "भाषा आपके ब्राउज़र से पहचानी गई",
    nav: ["होम", "MANAV SOLS के बारे में", "सेवाएँ", "सैंपल वेबसाइट", "संपर्क"],
    heroTagline: "डिजिटल सॉल्यूशंस और टेक्नोलॉजी सेवाएँ", heroTitle: "काम आने वाले डिजिटल सॉल्यूशंस बनाते हैं",
    heroDescription: "<strong>MANAV SOLS</strong> एक स्वतंत्र डिजिटल सॉल्यूशंस ब्रांड और टेक्नोलॉजी सर्विस प्लेटफ़ॉर्म है, जिसकी स्थापना <strong>Manav Singh</strong> ने की है। हम व्यवसायों, प्रोफेशनल्स और स्टार्टअप्स के लिए आधुनिक वेबसाइट, डिजिटल प्रोडक्ट, ऑटोमेशन और कस्टम टेक्नोलॉजी सॉल्यूशंस बनाते हैं।",
    heroSamples: "सैंपल वेबसाइट", heroWork: "MANAV SOLS के साथ काम करें", aboutTitle: "MANAV SOLS के बारे में",
    aboutP1: "<strong>MANAV SOLS</strong> एक डिजिटल सॉल्यूशंस बिज़नेस और टेक्नोलॉजी सर्विस प्लेटफ़ॉर्म है, जो वास्तविक जरूरतों के लिए उपयोगी, आधुनिक और भरोसेमंद डिजिटल प्रोडक्ट बनाता है।",
    aboutP2: "<strong>Manav Singh</strong> द्वारा स्थापित, MANAV SOLS वेब डेवलपमेंट, सॉफ्टवेयर, ऑटोमेशन और AI-केंद्रित कॉन्सेप्ट्स पर काम करता है।",
    aboutBusinessTitle: "💼 बिज़नेस प्रकार", aboutBusinessText: "डिजिटल सॉल्यूशंस ब्रांड • टेक्नोलॉजी सेवाएँ", aboutDoTitle: "🚀 हम क्या करते हैं", aboutDoText: "वेबसाइट, सॉफ्टवेयर, ऑटोमेशन और कस्टम डिजिटल सॉल्यूशंस।", aboutVisionTitle: "🎯 विज़न", aboutVisionText: "नवाचार, गुणवत्ता और असीमित कौशल के साथ भरोसेमंद टेक्नोलॉजी ब्रांड बनाना।",
    servicesTitle: "MANAV SOLS सेवाएँ", servicesSubtitle: "बिज़नेस, प्रोफेशनल्स, स्टार्टअप्स और कस्टम प्रोजेक्ट्स के लिए टेक्नोलॉजी सेवाएँ।",
    services: [["वेब डेवलपमेंट", "बिज़नेस, ब्रांड, प्रोफेशनल्स और पोर्टफोलियो के लिए आधुनिक, तेज़ और रिस्पॉन्सिव वेबसाइट।"],["AI और ऑटोमेशन", "प्रैक्टिकल AI आइडिया पर आधारित ऑटोमेशन टूल्स और स्मार्ट डिजिटल वर्कफ़्लो।"],["टेक्निकल सॉल्यूशंस", "वास्तविक जरूरतों के अनुसार टेक्निकल सिस्टम, इंटीग्रेशन और डिजिटल वर्कफ़्लो।"],["कस्टम सॉफ्टवेयर", "विशेष आइडिया और बिज़नेस जरूरतों के अनुसार कस्टम सॉफ्टवेयर और कोडिंग सॉल्यूशंस।"]],
    samplesTitle: "सैंपल वेबसाइट", samplesSubtitle: "अलग-अलग बिज़नेस जरूरतों के लिए MANAV SOLS द्वारा बनाई जा सकने वाली आधुनिक वेबसाइट देखें।",
    samples: [["बिज़नेस", "बिज़नेस वेबसाइट", "लोकल बिज़नेस, स्टार्टअप्स और बढ़ते ब्रांड्स के लिए प्रोफेशनल और भरोसेमंद वेबसाइट।"],["रेस्टोरेंट", "रेस्टोरेंट वेबसाइट", "मेन्यू, संपर्क, ऑफ़र और मोबाइल-फ्रेंडली अनुभव वाली आधुनिक रेस्टोरेंट वेबसाइट।"],["पोर्टफोलियो", "पर्सनल पोर्टफोलियो", "डेवलपर्स, फ्रीलांसर, क्रिएटर्स और प्रोफेशनल्स के लिए व्यक्तिगत ब्रांडिंग वेबसाइट।"],["कंपनी", "कंपनी वेबसाइट", "सेवाओं, प्रोजेक्ट्स और जानकारी को प्रोफेशनल ढंग से दिखाने वाली रिस्पॉन्सिव कंपनी वेबसाइट।"]],
    contactTitle: "MANAV SOLS से संपर्क करें", contactSubtitle: "वेबसाइट, सॉफ्टवेयर प्रोजेक्ट या डिजिटल सॉल्यूशन के लिए सीधे MANAV SOLS से बात करें।", contactTitles: ["कॉल", "WhatsApp", "ईमेल", "LinkedIn", "GitHub", "Instagram", "YouTube", "WhatsApp चैनल"], contactTexts: ["+91 8376882879", "+91 8376882879", "manavsolszzz@gmail.com", "फाउंडर प्रोफ़ाइल", "MANAV SOLS प्रोजेक्ट्स", "MANAV SOLS", "MANAV SOLS कंटेंट", "MANAV SOLS अपडेट्स"], footer: "© 2026 MANAV SOLS — डिजिटल सॉल्यूशंस और टेक्नोलॉजी सेवाएँ। सर्वाधिकार सुरक्षित।"
  },
  tr: { name:"Türkçe", popupTitle:"Dilinizi seçin", popupSubtitle:"En iyi deneyim için bir dil seçin.", continue:"Devam", detected:"Dil tarayıcınızdan algılandı", nav:["Ana Sayfa","MANAV SOLS Hakkında","Hizmetler","Örnek Web Siteleri","İletişim"], heroTagline:"Dijital Çözümler ve Teknoloji Hizmetleri", heroTitle:"Değer Yaratan Dijital Çözümler Geliştiriyoruz", heroDescription:"<strong>MANAV SOLS</strong>, <strong>Manav Singh</strong> tarafından kurulmuş bağımsız bir dijital çözümler markası ve teknoloji hizmetleri platformudur. İşletmeler, profesyoneller ve girişimler için modern web siteleri, dijital ürünler, otomasyon ve özel teknoloji çözümleri geliştiriyoruz.", heroSamples:"Örnek Web Siteleri", heroWork:"MANAV SOLS ile Çalışın", aboutTitle:"MANAV SOLS Hakkında", aboutP1:"<strong>MANAV SOLS</strong>, gerçek ihtiyaçlara yönelik kullanışlı, modern ve güvenilir dijital ürünler geliştiren bir dijital çözümler işletmesidir.", aboutP2:"<strong>Manav Singh</strong> tarafından kurulan MANAV SOLS; web geliştirme, yazılım, otomasyon ve yapay zekâ odaklı konseptler üzerinde çalışır.", aboutBusinessTitle:"💼 İş Türü",aboutBusinessText:"Dijital Çözümler Markası • Teknoloji Hizmetleri",aboutDoTitle:"🚀 Ne Yapıyoruz",aboutDoText:"Web siteleri, yazılım, otomasyon ve özel dijital çözümler.",aboutVisionTitle:"🎯 Vizyon",aboutVisionText:"İnovasyon, kalite ve sınırsız becerilerle güvenilir bir teknoloji markası oluşturmak.", servicesTitle:"MANAV SOLS Hizmetleri",servicesSubtitle:"İşletmeler, profesyoneller, girişimler ve özel projeler için teknoloji hizmetleri.",services:[["Web Geliştirme","İşletmeler, markalar, profesyoneller ve portföyler için modern, hızlı ve duyarlı web siteleri."],["Yapay Zekâ ve Otomasyon","Pratik yapay zekâ fikirleriyle oluşturulan otomasyon araçları ve akıllı dijital iş akışları."],["Teknik Çözümler","Gerçek ihtiyaçlara göre tasarlanan teknik sistemler, entegrasyonlar ve dijital iş akışları."],["Özel Yazılım","Özel fikirler ve işletme ihtiyaçlarına göre geliştirilen yazılım ve kodlama çözümleri."]], samplesTitle:"Örnek Web Siteleri",samplesSubtitle:"Farklı işletme ihtiyaçları için tasarlayabileceğimiz modern web sitesi türlerini keşfedin.",samples:[["İşletme","İşletme Web Sitesi","Yerel işletmeler, girişimler ve büyüyen markalar için profesyonel ve güvenilir web siteleri."],["Restoran","Restoran Web Sitesi","Menü, iletişim, teklifler ve mobil uyumlu deneyim sunan modern restoran siteleri."],["Portföy","Kişisel Portföy","Geliştiriciler, serbest çalışanlar, içerik üreticileri ve profesyoneller için kişisel marka siteleri."],["Şirket","Şirket Web Sitesi","Hizmetleri, projeleri ve bilgileri profesyonel şekilde sunan duyarlı şirket web siteleri."]],contactTitle:"MANAV SOLS ile İletişim",contactSubtitle:"Web sitesi, yazılım projesi veya dijital çözüm hakkında doğrudan MANAV SOLS ile konuşun.",contactTitles:["Ara","WhatsApp","E-posta","LinkedIn","GitHub","Instagram","YouTube","WhatsApp Kanalı"],contactTexts:["+91 8376882879","+91 8376882879","manavsolszzz@gmail.com","Kurucu Profili","MANAV SOLS Projeleri","MANAV SOLS","MANAV SOLS İçerikleri","MANAV SOLS Güncellemeleri"],footer:"© 2026 MANAV SOLS — Dijital Çözümler ve Teknoloji Hizmetleri. Tüm hakları saklıdır." },
  vi: { name:"Tiếng Việt", popupTitle:"Chọn ngôn ngữ", popupSubtitle:"Chọn ngôn ngữ để có trải nghiệm tốt nhất.", continue:"Tiếp tục", detected:"Ngôn ngữ được nhận diện từ trình duyệt", nav:["Trang chủ","Về MANAV SOLS","Dịch vụ","Website mẫu","Liên hệ"], heroTagline:"Giải pháp số & Dịch vụ công nghệ", heroTitle:"Xây dựng những giải pháp số tạo ra giá trị", heroDescription:"<strong>MANAV SOLS</strong> là thương hiệu giải pháp số và nền tảng dịch vụ công nghệ độc lập, được thành lập bởi <strong>Manav Singh</strong>. Chúng tôi xây dựng website hiện đại, sản phẩm số, tự động hóa và giải pháp công nghệ tùy chỉnh cho doanh nghiệp, chuyên gia và startup.", heroSamples:"Website mẫu", heroWork:"Làm việc cùng MANAV SOLS", aboutTitle:"Về MANAV SOLS", aboutP1:"<strong>MANAV SOLS</strong> tập trung xây dựng các sản phẩm số hữu ích, hiện đại và đáng tin cậy cho nhu cầu thực tế.", aboutP2:"Được thành lập bởi <strong>Manav Singh</strong>, MANAV SOLS hoạt động trong phát triển web, phần mềm, tự động hóa và các ý tưởng ứng dụng AI.", aboutBusinessTitle:"💼 Loại hình",aboutBusinessText:"Thương hiệu giải pháp số • Dịch vụ công nghệ",aboutDoTitle:"🚀 Chúng tôi làm gì",aboutDoText:"Website, phần mềm, tự động hóa và giải pháp số tùy chỉnh.",aboutVisionTitle:"🎯 Tầm nhìn",aboutVisionText:"Xây dựng thương hiệu công nghệ đáng tin cậy bằng đổi mới, chất lượng và kỹ năng không giới hạn.",servicesTitle:"Dịch vụ MANAV SOLS",servicesSubtitle:"Dịch vụ công nghệ dành cho doanh nghiệp, chuyên gia, startup và dự án tùy chỉnh.",services:[["Phát triển Web","Website hiện đại, nhanh và responsive cho doanh nghiệp, thương hiệu, chuyên gia và portfolio."],["AI & Tự động hóa","Công cụ tự động hóa và quy trình số thông minh dựa trên ý tưởng AI thực tế."],["Giải pháp Kỹ thuật","Hệ thống kỹ thuật, tích hợp và quy trình số được thiết kế theo nhu cầu thực tế."],["Phần mềm Tùy chỉnh","Giải pháp phần mềm và lập trình riêng theo ý tưởng và yêu cầu kinh doanh."]],samplesTitle:"Website mẫu",samplesSubtitle:"Khám phá các loại website hiện đại MANAV SOLS có thể thiết kế và xây dựng.",samples:[["Doanh nghiệp","Website Doanh nghiệp","Website chuyên nghiệp cho doanh nghiệp địa phương, startup và thương hiệu đang phát triển."],["Nhà hàng","Website Nhà hàng","Website nhà hàng hiện đại với menu, liên hệ, ưu đãi và trải nghiệm thân thiện trên di động."],["Portfolio","Portfolio Cá nhân","Website thương hiệu cá nhân cho nhà phát triển, freelancer, creator và chuyên gia."],["Công ty","Website Công ty","Website công ty responsive trình bày dịch vụ, dự án, thông tin và liên hệ chuyên nghiệp."]],contactTitle:"Liên hệ MANAV SOLS",contactSubtitle:"Trao đổi trực tiếp với MANAV SOLS về website, dự án phần mềm hoặc giải pháp số.",contactTitles:["Gọi điện","WhatsApp","Email","LinkedIn","GitHub","Instagram","YouTube","Kênh WhatsApp"],contactTexts:["+91 8376882879","+91 8376882879","manavsolszzz@gmail.com","Hồ sơ nhà sáng lập","Dự án MANAV SOLS","MANAV SOLS","Nội dung MANAV SOLS","Cập nhật MANAV SOLS"],footer:"© 2026 MANAV SOLS — Giải pháp số & Dịch vụ công nghệ. Bảo lưu mọi quyền." },
  es: { name:"Español", popupTitle:"Elige tu idioma", popupSubtitle:"Selecciona un idioma para disfrutar de la mejor experiencia.", continue:"Continuar", detected:"Idioma detectado desde tu navegador", nav:["Inicio","Sobre MANAV SOLS","Servicios","Sitios de ejemplo","Contacto"], heroTagline:"Soluciones Digitales y Servicios Tecnológicos", heroTitle:"Creamos soluciones digitales que generan valor", heroDescription:"<strong>MANAV SOLS</strong> es una marca independiente de soluciones digitales y una plataforma de servicios tecnológicos fundada por <strong>Manav Singh</strong>. Creamos sitios web modernos, productos digitales, automatización y soluciones tecnológicas personalizadas para empresas, profesionales y startups.", heroSamples:"Sitios de ejemplo", heroWork:"Trabaja con MANAV SOLS", aboutTitle:"Sobre MANAV SOLS", aboutP1:"<strong>MANAV SOLS</strong> se enfoca en crear productos digitales útiles, modernos y confiables para necesidades reales.", aboutP2:"Fundada por <strong>Manav Singh</strong>, MANAV SOLS trabaja en desarrollo web, software, automatización y conceptos basados en IA.", aboutBusinessTitle:"💼 Tipo de negocio",aboutBusinessText:"Marca de soluciones digitales • Servicios tecnológicos",aboutDoTitle:"🚀 Qué hacemos",aboutDoText:"Sitios web, software, automatización y soluciones digitales personalizadas.",aboutVisionTitle:"🎯 Visión",aboutVisionText:"Crear una marca tecnológica confiable mediante innovación, calidad y habilidades ilimitadas.",servicesTitle:"Servicios de MANAV SOLS",servicesSubtitle:"Servicios tecnológicos para empresas, profesionales, startups y proyectos personalizados.",services:[["Desarrollo Web","Sitios web modernos, rápidos y adaptables para empresas, marcas, profesionales y portafolios."],["IA y Automatización","Herramientas de automatización y flujos digitales inteligentes basados en ideas prácticas de IA."],["Soluciones Técnicas","Sistemas técnicos, integraciones y flujos digitales diseñados para necesidades reales."],["Software Personalizado","Soluciones de software y programación adaptadas a ideas y necesidades empresariales."]],samplesTitle:"Sitios Web de Ejemplo",samplesSubtitle:"Explora los tipos de sitios web modernos que MANAV SOLS puede diseñar y desarrollar.",samples:[["Negocio","Sitio Web para Negocio","Sitios profesionales para negocios locales, startups y marcas en crecimiento."],["Restaurante","Sitio Web para Restaurante","Sitios modernos con menús, contacto, ofertas y una experiencia móvil excelente."],["Portafolio","Portafolio Personal","Sitios de marca personal para desarrolladores, freelancers, creadores y profesionales."],["Empresa","Sitio Web Corporativo","Sitios adaptables que presentan servicios, proyectos, información y contacto de forma profesional."]],contactTitle:"Contacta con MANAV SOLS",contactSubtitle:"Habla directamente con MANAV SOLS sobre un sitio web, proyecto de software o solución digital.",contactTitles:["Llamar","WhatsApp","Correo","LinkedIn","GitHub","Instagram","YouTube","Canal de WhatsApp"],contactTexts:["+91 8376882879","+91 8376882879","manavsolszzz@gmail.com","Perfil del fundador","Proyectos MANAV SOLS","MANAV SOLS","Contenido MANAV SOLS","Actualizaciones MANAV SOLS"],footer:"© 2026 MANAV SOLS — Soluciones Digitales y Servicios Tecnológicos. Todos los derechos reservados." },
  ru: { name:"Русский", popupTitle:"Выберите язык", popupSubtitle:"Выберите язык для лучшего опыта.", continue:"Продолжить", detected:"Язык определён по браузеру", nav:["Главная","О MANAV SOLS","Услуги","Примеры сайтов","Контакты"], heroTagline:"Цифровые решения и технологические услуги", heroTitle:"Создаём цифровые решения, которые приносят пользу", heroDescription:"<strong>MANAV SOLS</strong> — независимый бренд цифровых решений и технологическая платформа, основанная <strong>Manav Singh</strong>. Мы создаём современные сайты, цифровые продукты, автоматизацию и индивидуальные технологические решения для компаний, специалистов и стартапов.", heroSamples:"Примеры сайтов", heroWork:"Работать с MANAV SOLS", aboutTitle:"О MANAV SOLS", aboutP1:"<strong>MANAV SOLS</strong> создаёт полезные, современные и надёжные цифровые продукты для реальных задач.", aboutP2:"Компания основана <strong>Manav Singh</strong> и работает в области веб-разработки, программного обеспечения, автоматизации и AI-концепций.", aboutBusinessTitle:"💼 Тип бизнеса",aboutBusinessText:"Бренд цифровых решений • Технологические услуги",aboutDoTitle:"🚀 Что мы делаем",aboutDoText:"Сайты, программное обеспечение, автоматизация и индивидуальные цифровые решения.",aboutVisionTitle:"🎯 Видение",aboutVisionText:"Создавать надёжный технологический бренд через инновации, качество и безграничные навыки.",servicesTitle:"Услуги MANAV SOLS",servicesSubtitle:"Технологические услуги для компаний, специалистов, стартапов и индивидуальных проектов.",services:[["Веб-разработка","Современные, быстрые и адаптивные сайты для компаний, брендов, специалистов и портфолио."],["AI и автоматизация","Инструменты автоматизации и интеллектуальные цифровые процессы на основе практических идей AI."],["Технические решения","Технические системы, интеграции и цифровые процессы, созданные под реальные задачи."],["Индивидуальное ПО","Программные и кодовые решения, адаптированные под конкретные идеи и задачи бизнеса."]],samplesTitle:"Примеры сайтов",samplesSubtitle:"Посмотрите, какие современные сайты MANAV SOLS может спроектировать и разработать.",samples:[["Бизнес","Сайт для бизнеса","Профессиональные сайты для местного бизнеса, стартапов и растущих брендов."],["Ресторан","Сайт ресторана","Современные сайты ресторанов с меню, контактами, предложениями и адаптацией для мобильных устройств."],["Портфолио","Личное портфолио","Персональные сайты для разработчиков, фрилансеров, создателей и специалистов."],["Компания","Корпоративный сайт","Адаптивные сайты для профессиональной презентации услуг, проектов, информации и контактов."]],contactTitle:"Связаться с MANAV SOLS",contactSubtitle:"Обсудите с MANAV SOLS сайт, программный проект или цифровое решение.",contactTitles:["Позвонить","WhatsApp","Email","LinkedIn","GitHub","Instagram","YouTube","Канал WhatsApp"],contactTexts:["+91 8376882879","+91 8376882879","manavsolszzz@gmail.com","Профиль основателя","Проекты MANAV SOLS","MANAV SOLS","Контент MANAV SOLS","Обновления MANAV SOLS"],footer:"© 2026 MANAV SOLS — Цифровые решения и технологические услуги. Все права защищены." },
  id: { name:"Bahasa Indonesia", popupTitle:"Pilih bahasa Anda", popupSubtitle:"Pilih bahasa untuk pengalaman terbaik.", continue:"Lanjutkan", detected:"Bahasa terdeteksi dari browser Anda", nav:["Beranda","Tentang MANAV SOLS","Layanan","Contoh Website","Kontak"], heroTagline:"Solusi Digital & Layanan Teknologi", heroTitle:"Membangun solusi digital yang memberikan dampak", heroDescription:"<strong>MANAV SOLS</strong> adalah merek solusi digital independen dan platform layanan teknologi yang didirikan oleh <strong>Manav Singh</strong>. Kami membangun website modern, produk digital, otomasi, dan solusi teknologi khusus untuk bisnis, profesional, dan startup.", heroSamples:"Contoh Website", heroWork:"Bekerja dengan MANAV SOLS", aboutTitle:"Tentang MANAV SOLS", aboutP1:"<strong>MANAV SOLS</strong> berfokus membangun produk digital yang berguna, modern, dan andal untuk kebutuhan nyata.", aboutP2:"Didirikan oleh <strong>Manav Singh</strong>, MANAV SOLS bekerja di bidang pengembangan web, software, otomasi, dan konsep berbasis AI.", aboutBusinessTitle:"💼 Jenis Bisnis",aboutBusinessText:"Merek Solusi Digital • Layanan Teknologi",aboutDoTitle:"🚀 Yang Kami Lakukan",aboutDoText:"Website, software, otomasi, dan solusi digital khusus.",aboutVisionTitle:"🎯 Visi",aboutVisionText:"Membangun merek teknologi tepercaya melalui inovasi, kualitas, dan keterampilan tanpa batas.",servicesTitle:"Layanan MANAV SOLS",servicesSubtitle:"Layanan teknologi untuk bisnis, profesional, startup, dan proyek khusus.",services:[["Pengembangan Web","Website modern, cepat, dan responsif untuk bisnis, merek, profesional, dan portofolio."],["AI & Otomasi","Alat otomasi dan alur kerja digital cerdas berdasarkan ide AI yang praktis."],["Solusi Teknis","Sistem teknis, integrasi, dan alur kerja digital yang dirancang sesuai kebutuhan nyata."],["Software Kustom","Solusi software dan coding yang disesuaikan dengan ide dan kebutuhan bisnis."]],samplesTitle:"Contoh Website",samplesSubtitle:"Jelajahi jenis website modern yang dapat dirancang dan dibangun oleh MANAV SOLS.",samples:[["Bisnis","Website Bisnis","Website profesional untuk bisnis lokal, startup, dan merek yang sedang berkembang."],["Restoran","Website Restoran","Website restoran modern dengan menu, kontak, penawaran, dan pengalaman mobile-friendly."],["Portofolio","Portofolio Pribadi","Website personal branding untuk developer, freelancer, kreator, dan profesional."],["Perusahaan","Website Perusahaan","Website responsif yang menampilkan layanan, proyek, informasi, dan kontak secara profesional."]],contactTitle:"Hubungi MANAV SOLS",contactSubtitle:"Bicarakan langsung dengan MANAV SOLS tentang website, proyek software, atau solusi digital.",contactTitles:["Telepon","WhatsApp","Email","LinkedIn","GitHub","Instagram","YouTube","Kanal WhatsApp"],contactTexts:["+91 8376882879","+91 8376882879","manavsolszzz@gmail.com","Profil Pendiri","Proyek MANAV SOLS","MANAV SOLS","Konten MANAV SOLS","Pembaruan MANAV SOLS"],footer:"© 2026 MANAV SOLS — Solusi Digital & Layanan Teknologi. Semua hak dilindungi." },
  de: { name:"Deutsch", popupTitle:"Sprache auswählen", popupSubtitle:"Wähle eine Sprache für die beste Erfahrung.", continue:"Weiter", detected:"Sprache aus deinem Browser erkannt", nav:["Startseite","Über MANAV SOLS","Services","Beispiel-Websites","Kontakt"], heroTagline:"Digitale Lösungen & Technologiedienstleistungen", heroTitle:"Wir entwickeln digitale Lösungen, die etwas bewegen", heroDescription:"<strong>MANAV SOLS</strong> ist eine unabhängige Marke für digitale Lösungen und eine Technologieplattform, gegründet von <strong>Manav Singh</strong>. Wir entwickeln moderne Websites, digitale Produkte, Automatisierung und individuelle Technologielösungen für Unternehmen, Fachleute und Startups.", heroSamples:"Beispiel-Websites", heroWork:"Mit MANAV SOLS arbeiten", aboutTitle:"Über MANAV SOLS", aboutP1:"<strong>MANAV SOLS</strong> entwickelt nützliche, moderne und zuverlässige digitale Produkte für reale Anforderungen.", aboutP2:"Gegründet von <strong>Manav Singh</strong> arbeitet MANAV SOLS in den Bereichen Webentwicklung, Software, Automatisierung und KI-orientierte Konzepte.", aboutBusinessTitle:"💼 Geschäftsart",aboutBusinessText:"Marke für digitale Lösungen • Technologiedienstleistungen",aboutDoTitle:"🚀 Was wir tun",aboutDoText:"Websites, Software, Automatisierung und individuelle digitale Lösungen.",aboutVisionTitle:"🎯 Vision",aboutVisionText:"Eine vertrauenswürdige Technologiemarke durch Innovation, Qualität und grenzenlose Fähigkeiten aufbauen.",servicesTitle:"MANAV SOLS Services",servicesSubtitle:"Technologiedienstleistungen für Unternehmen, Fachleute, Startups und individuelle Projekte.",services:[["Webentwicklung","Moderne, schnelle und responsive Websites für Unternehmen, Marken, Fachleute und Portfolios."],["KI & Automatisierung","Automatisierungstools und intelligente digitale Abläufe auf Basis praktischer KI-Ideen."],["Technische Lösungen","Technische Systeme, Integrationen und digitale Workflows nach realen Anforderungen."],["Individuelle Software","Software- und Programmierlösungen, angepasst an konkrete Ideen und Geschäftsanforderungen."]],samplesTitle:"Beispiel-Websites",samplesSubtitle:"Entdecke moderne Website-Arten, die MANAV SOLS für unterschiedliche Geschäftsanforderungen entwickeln kann.",samples:[["Business","Business-Website","Professionelle Websites für lokale Unternehmen, Startups und wachsende Marken."],["Restaurant","Restaurant-Website","Moderne Restaurant-Websites mit Speisekarte, Kontakt, Angeboten und mobilem Erlebnis."],["Portfolio","Persönliches Portfolio","Persönliche Marken-Websites für Entwickler, Freelancer, Creator und Fachleute."],["Unternehmen","Unternehmenswebsite","Responsive Websites, die Services, Projekte, Informationen und Kontakte professionell präsentieren."]],contactTitle:"MANAV SOLS kontaktieren",contactSubtitle:"Sprich direkt mit MANAV SOLS über eine Website, ein Softwareprojekt oder eine digitale Lösung.",contactTitles:["Anrufen","WhatsApp","E-Mail","LinkedIn","GitHub","Instagram","YouTube","WhatsApp-Kanal"],contactTexts:["+91 8376882879","+91 8376882879","manavsolszzz@gmail.com","Gründerprofil","MANAV SOLS Projekte","MANAV SOLS","MANAV SOLS Inhalte","MANAV SOLS Updates"],footer:"© 2026 MANAV SOLS — Digitale Lösungen & Technologiedienstleistungen. Alle Rechte vorbehalten." }
};

const languageCodes = Object.keys(translations);
const languageSelect = document.getElementById("languageSelect");
const languageModal = document.getElementById("languageModal");
const languageBtn = document.getElementById("languageBtn");
const languageClose = document.getElementById("languageClose");
const languageContinue = document.getElementById("languageContinue");
const currentLanguageLabel = document.getElementById("currentLanguageLabel");
const languageDetected = document.getElementById("languageDetected");

function detectLanguage() {
  const browserLanguage = (navigator.language || "en").toLowerCase();
  const exact = languageCodes.find((code) => browserLanguage === code || browserLanguage.startsWith(`${code}-`));
  return exact || "en";
}

function populateLanguageSelect() {
  if (!languageSelect) return;
  languageSelect.innerHTML = languageCodes.map((code) => `<option value="${code}">${translations[code].name}</option>`).join("");
}

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.innerHTML = value;
}

function applyLanguage(code) {
  const t = translations[code] || translations.en;
  document.documentElement.lang = code === "hi" ? "hi-IN" : `${code}-${code === "en" ? "IN" : code.toUpperCase()}`;
  localStorage.setItem("manavsols-language", code);
  if (currentLanguageLabel) currentLanguageLabel.textContent = t.name;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const value = t[key];
    if (typeof value === "string") element.innerHTML = value;
  });

  document.querySelectorAll("#main-navigation a").forEach((link, index) => { if (t.nav[index]) link.textContent = t.nav[index]; });
  setText(".hero-tagline", t.heroTagline); setText(".hero-content h2", t.heroTitle); setText(".hero-content > p", t.heroDescription);
  setText(".hero-buttons a:first-child", t.heroSamples); setText(".hero-buttons a:last-child", t.heroWork);
  setText("#about-title", t.aboutTitle); setText("#about .about-text:nth-of-type(1)", t.aboutP1); setText("#about .about-text:nth-of-type(2)", t.aboutP2);
  const aboutCards = document.querySelectorAll("#about .about-card");
  const aboutTitles = [t.aboutBusinessTitle, t.aboutDoTitle, t.aboutVisionTitle]; const aboutTexts = [t.aboutBusinessText, t.aboutDoText, t.aboutVisionText];
  aboutCards.forEach((card, i) => { const h=card.querySelector("h3"),p=card.querySelector("p"); if(h)h.innerHTML=aboutTitles[i]; if(p)p.textContent=aboutTexts[i]; });
  setText("#services-title", t.servicesTitle); setText("#services .service-sub", t.servicesSubtitle);
  document.querySelectorAll("#services .service-card").forEach((card, i) => { const h=card.querySelector("h3"),p=card.querySelector("p"); if(h)h.textContent=t.services[i][0]; if(p)p.textContent=t.services[i][1]; });
  setText("#samples-title", t.samplesTitle); setText("#sample-websites .sample-sub", t.samplesSubtitle);
  document.querySelectorAll("#sample-websites .sample-card").forEach((card, i) => { const tag=card.querySelector(".sample-tag"),h=card.querySelector("h3"),p=card.querySelector("p:not(:last-child)"); if(tag)tag.textContent=t.samples[i][0]; if(h)h.textContent=t.samples[i][1]; if(p)p.textContent=t.samples[i][2]; });
  setText("#contact-title", t.contactTitle); setText("#contact .contact-sub", t.contactSubtitle);
  document.querySelectorAll("#contact .contact-card").forEach((card, i) => { const h=card.querySelector("h3"),p=card.querySelector("p"); if(h)h.textContent=t.contactTitles[i]; if(p)p.textContent=t.contactTexts[i]; });
  setText("footer p:first-child", t.footer);
  document.title = code === "en" ? "MANAV SOLS | Digital Solutions & Technology Services" : `MANAV SOLS | ${t.heroTagline}`;
}

function openLanguageModal(showDetection = false) {
  if (!languageModal) return;
  languageModal.classList.add("open"); languageModal.setAttribute("aria-hidden", "false"); document.body.classList.add("language-open");
  if (showDetection && languageDetected) languageDetected.textContent = `${translations[detectLanguage()].detected}: ${translations[detectLanguage()].name}`;
  setText("#languageTitle", translations[languageSelect?.value || "en"].popupTitle);
  setText("#languageSubtitle", translations[languageSelect?.value || "en"].popupSubtitle);
  setText("#languageContinue", translations[languageSelect?.value || "en"].continue);
}

function closeLanguageModal() { if (!languageModal) return; languageModal.classList.remove("open"); languageModal.setAttribute("aria-hidden", "true"); document.body.classList.remove("language-open"); }

populateLanguageSelect();
const savedLanguage = localStorage.getItem("manavsols-language");
const initialLanguage = savedLanguage && translations[savedLanguage] ? savedLanguage : detectLanguage();
if (languageSelect) languageSelect.value = initialLanguage;
applyLanguage(initialLanguage);

if (languageBtn) languageBtn.addEventListener("click", () => openLanguageModal(false));
if (languageClose) languageClose.addEventListener("click", closeLanguageModal);
if (languageContinue) languageContinue.addEventListener("click", () => { applyLanguage(languageSelect?.value || "en"); closeLanguageModal(); localStorage.setItem("manavsols-language-selected", "1"); });
if (languageSelect) languageSelect.addEventListener("change", () => { const t=translations[languageSelect.value] || translations.en; setText("#languageTitle", t.popupTitle); setText("#languageSubtitle", t.popupSubtitle); setText("#languageContinue", t.continue); });
document.querySelectorAll("[data-close-language]").forEach((element) => element.addEventListener("click", closeLanguageModal));
document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeLanguageModal(); });

if (!localStorage.getItem("manavsols-language-selected")) {
  if (languageSelect) languageSelect.value = initialLanguage;
  const t = translations[initialLanguage] || translations.en;
  if (languageDetected) languageDetected.textContent = `${t.detected}: ${t.name}`;
  setText("#languageTitle", t.popupTitle); setText("#languageSubtitle", t.popupSubtitle); setText("#languageContinue", t.continue);
  setTimeout(() => openLanguageModal(true), 450);
}
