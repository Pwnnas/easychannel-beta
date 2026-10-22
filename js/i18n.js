/* ==========================================================
   EasyChannel IPTV — Closed beta site
   Language handling (EN / SV):
     1. saved preference (localStorage)
     2. IP geolocation — Swedish IP => Swedish
     3. browser language as a fallback
   ========================================================== */
(function () {
  "use strict";

  var STORAGE_KEY = "easychannel-beta-lang";

  var I18N = {
    en: {
      "meta.title": "EasyChannel IPTV — Closed Beta",
      "meta.description":
        "Join the closed beta of EasyChannel IPTV — a fast, modern IPTV experience for Android. Join our tester group, accept the beta on Google Play, and help shape the app.",
      "art.alt": "EasyChannel IPTV feature graphic",

      "nav.how": "How to join",
      "nav.app": "In the app",
      "nav.faq": "FAQ",
      "nav.join": "Become a tester",

      "hero.badge": "Closed beta — now open",
      "hero.titleA": "Help shape the future of",
      "hero.titleB": "IPTV",
      "hero.lede":
        "EasyChannel is a fast, modern IPTV experience for Android — live TV, a full TV guide with catch-up, and a movie & series library. We're opening a closed beta and we want your eyes on it.",
      "hero.cta1": "Join the tester group",
      "hero.cta2": "Open on Google Play",
      "hero.note": "Free to join · Android · Updates through the Play Store",

      "steps.title": "How to join the beta",
      "steps.sub": "Four quick steps and you're in — it takes about two minutes.",

      "step1.title": "Join the tester group",
      "step1.text":
        "Sign in with your Google account and join the closed tester group. Build announcements and beta news are posted there first.",
      "step1.cta": "Join the group",

      "step2.title": "Accept the beta on Google Play",
      "step2.text":
        "Open the EasyChannel IPTV listing on Google Play and tap “Become a tester”. Use the same Google account you joined the group with.",
      "step2.cta": "Open Google Play",

      "step3.title": "Install the beta build",
      "step3.text":
        "Once you've opted in, the beta version appears in the Play Store listing. Tap install — that's it, you're in.",
      "step3.cta": "Get the app",

      "step4.title": "Test & share your feedback",
      "step4.text":
        "Watch live TV, browse the guide and the movie library — and tell us what works and what doesn't. Everything you post in the group lands directly in the developer's inbox.",
      "step4.cta": "Go to the group",

      "know.title": "What we're looking for",
      "know.sub": "You don't need to be a developer — just an honest viewer.",

      "know1.title": "Bug reports",
      "know1.text":
        "Found something broken? Post it in the group with your device model, Android version and the steps to reproduce it. A screenshot or screen recording makes it much easier to fix.",

      "know2.title": "Feature ideas",
      "know2.text":
        "Missing something you'd love? Tell us about it — the most requested features make it onto the roadmap.",

      "know3.title": "Regular updates",
      "know3.text":
        "Beta builds ship often. Expect new features and fixes to land in the Play Store regularly — and the group always hears about them first.",

      "show.title": "A first look at the app",
      "show.sub": "Everything runs in one clean, dark interface — built for the couch.",

      "show1.title": "Live TV",
      "show1.text":
        "Full-screen playback with one-tap channel switching, volume, subtitles and audio tracks.",

      "show2.title": "TV guide & catch-up",
      "show2.text":
        "The full programme schedule — filter by favorites, browse day by day, and catch up on what you missed.",

      "show3.title": "Channel guide",
      "show3.text": "Search your channels and keep your favorites close at hand.",

      "show4.title": "Movies & series",
      "show4.text": "A browsable VOD library with search, filters and sorting.",

      "chip1": "Live TV",
      "chip2": "TV guide & catch-up",
      "chip3": "Favorites",
      "chip4": "Movies & series",
      "chip5": "Cast to your TV",
      "chip6": "Subtitles & audio tracks",

      "faq.title": "Frequently asked questions",
      "faq1.q": "Is the beta free?",
      "faq1.a": "Yes — joining the closed beta is completely free while it lasts.",
      "faq2.q": "What happens after the beta?",
      "faq2.a":
        "Everything you report helps shape the final release. When the app goes public, you'll get an update in the Play Store — and testers will always be first to know.",
      "faq3.q": "How do I get updates?",
      "faq3.a":
        "Updates roll out automatically through Google Play, and new beta builds are announced in the tester group.",
      "faq4.q": "How do I report a bug?",
      "faq4.a":
        "Post it in the tester group: your device model, Android version, the steps to reproduce the issue, and a screenshot if you can. Every post is emailed straight to the developer, so nothing slips through the cracks.",

      "cta.title": "Ready to try it?",
      "cta.sub": "Join the group, opt in on Google Play, and be one of the first to watch.",
      "cta.btn1": "Join the tester group",
      "cta.btn2": "Open on Google Play",

      "footer.tag": "A fast, modern IPTV experience for Android.",
      "footer.l1": "Tester group",
      "footer.l2": "Google Play",
      "footer.right": "Built with care by Pwnnas.",
      "footer.legal": "© 2026 EasyChannel IPTV"
    },

    sv: {
      "meta.title": "EasyChannel IPTV — Stängd beta",
      "meta.description":
        "Gå med i den stängda betan av EasyChannel IPTV – en snabb och modern IPTV-upplevelse för Android. Gå med i testargruppen, acceptera betan i Google Play och hjälp oss forma appen.",
      "art.alt": "Presentation av EasyChannel IPTV",

      "nav.how": "Gå med i betan",
      "nav.app": "I appen",
      "nav.faq": "FAQ",
      "nav.join": "Bli testare",

      "hero.badge": "Stängd beta — nu öppen",
      "hero.titleA": "Hjälp till med att forma",
      "hero.titleB": "IPTV",
      "hero.lede":
        "EasyChannel är en snabb och modern IPTV-upplevelse för Android – live-TV, en komplett TV-guide med catch-up samt ett bibliotek med film och serier. Nu öppnar vi en stängd beta, och vi vill ha dina ögon på appen.",
      "hero.cta1": "Gå med i testargruppen",
      "hero.cta2": "Öppna i Google Play",
      "hero.note": "Gratis att delta · Android · Uppdateringar via Play-butiken",

      "steps.title": "Så går du med i betan",
      "steps.sub": "Fyra snabba steg och du är med – det tar cirka två minuter.",

      "step1.title": "Gå med i testargruppen",
      "step1.text":
        "Logga in med ditt Google-konto och gå med i den stängda testargruppen. Nya versioner och betanyheter publiceras där först.",
      "step1.cta": "Gå med i gruppen",

      "step2.title": "Acceptera betan i Google Play",
      "step2.text":
        "Öppna EasyChannel IPTV i Google Play och tryck på ”Bli testare”. Använd samma Google-konto som du gick med i gruppen med.",
      "step2.cta": "Öppna Google Play",

      "step3.title": "Installera betaversionen",
      "step3.text":
        "När du valt att delta visas betaversionen i butikslistan. Tryck på installera – så är du igång.",
      "step3.cta": "Hämta appen",

      "step4.title": "Testa och dela din feedback",
      "step4.text":
        "Kolla live-TV, bläddra i guiden och filmbiblioteket – och berätta vad som fungerar och vad som inte gör det. Allt du skriver i gruppen hamnar direkt i utvecklarens inkorg.",
      "step4.cta": "Gå till gruppen",

      "know.title": "Det här hjälper oss med",
      "know.sub": "Du behöver inte vara utvecklare – bara en ärlig tittare.",

      "know1.title": "Buggar",
      "know1.text":
        "Hittat något som inte fungerar? Skriv ett inlägg i gruppen med din enhetsmodell, Android-version och stegen för att återskapa felet. En skärmdump eller inspelning gör det mycket lättare att fixa.",

      "know2.title": "Funktioner",
      "know2.text":
        "Saknar du något du gärna vill ha? Berätta – de funktioner som efterfrågas mest hamnar på utvecklingsplanen.",

      "know3.title": "Regelbundna uppdateringar",
      "know3.text":
        "Betaversioner släpps ofta. Förvänta dig nya funktioner och fixar i Play-butiken med jämna mellanrum – och gruppen får alltid veta först.",

      "show.title": "En försmak av appen",
      "show.sub": "Allt finns i ett rent, mörkt gränssnitt – byggt för soffan.",

      "show1.title": "Live-TV",
      "show1.text":
        "Fullskärmsavspelning med kanalbyte, volym, undertexter och ljudval i ett tryck.",

      "show2.title": "TV-guide & catch-up",
      "show2.text":
        "Den kompletta programguiden – filtrera på favoriter, bläddra dag för dag och kolla upp det du missat.",

      "show3.title": "Kanalguide",
      "show3.text": "Sök bland dina kanaler och håll favoriter nära till hands.",

      "show4.title": "Film & serier",
      "show4.text": "Ett VOD-bibliotek med sökning, filter och sortering.",

      "chip1": "Live-TV",
      "chip2": "TV-guide & catch-up",
      "chip3": "Favoriter",
      "chip4": "Film & serier",
      "chip5": "Skicka till TV:n",
      "chip6": "Undertexter & ljudval",

      "faq.title": "Vanliga frågor",
      "faq1.q": "Är betan gratis?",
      "faq1.a": "Ja – att delta i den stängda betan är helt gratis.",
      "faq2.q": "Vad händer efter betan?",
      "faq2.a":
        "Allt du rapporterar hjälper till att forma den slutliga versionen. När appen släpps offentligt får du en uppdatering i Play-butiken – och testarna får alltid veta först.",
      "faq3.q": "Hur får jag uppdateringar?",
      "faq3.a":
        "Uppdateringar kommer automatiskt via Google Play, och nya betaversioner annonaseras i testargruppen.",
      "faq4.q": "Hur rapporterar jag en bugg?",
      "faq4.a":
        "Skicka ett inlägg i testargruppen: din enhetsmodell, Android-version, stegen för att återskapa felet och en skärmdump om du kan. Varje inlägg mejlas rakt in i utvecklarens inkorg – så inget glöms.",

      "cta.title": "Klar att testa?",
      "cta.sub": "Gå med i gruppen, acceptera betan i Google Play och var en av de första att titta.",
      "cta.btn1": "Gå med i testargruppen",
      "cta.btn2": "Öppna i Google Play",

      "footer.tag": "En snabb och modern IPTV-upplevelse för Android.",
      "footer.l1": "Testargrupp",
      "footer.l2": "Google Play",
      "footer.right": "Byggd med omsorg av Pwnnas.",
      "footer.legal": "© 2026 EasyChannel IPTV"
    }
  };

  var current = "en";

  /* ---------- helpers ---------- */

  function t(lang, key) {
    var dict = I18N[lang] || I18N.en;
    if (dict[key] !== undefined) return dict[key];
    return I18N.en[key] !== undefined ? I18N.en[key] : null;
  }

  function applyLang(lang) {
    if (!I18N[lang]) lang = "en";
    current = lang;

    document.documentElement.setAttribute("lang", lang);

    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute("data-i18n");
      var val = t(lang, key);
      if (val !== null) nodes[i].textContent = val;
    }

    var altNodes = document.querySelectorAll("[data-i18n-alt]");
    for (var j = 0; j < altNodes.length; j++) {
      var altKey = altNodes[j].getAttribute("data-i18n-alt");
      var altVal = t(lang, altKey);
      if (altVal !== null) altNodes[j].setAttribute("alt", altVal);
    }

    var btns = document.querySelectorAll(".lang-btn");
    for (var k = 0; k < btns.length; k++) {
      var active = btns[k].getAttribute("data-lang") === lang;
      btns[k].classList.toggle("active", active);
      btns[k].setAttribute("aria-pressed", active ? "true" : "false");
    }

    document.title = t(lang, "meta.title") || document.title;
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute("content", t(lang, "meta.description") || md.getAttribute("content"));
    var og = document.querySelector('meta[property="og:description"]');
    if (og) og.setAttribute("content", t(lang, "meta.description") || og.getAttribute("content"));

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* private mode etc. — fine */
    }
  }

  /* ---------- language detection ---------- */

  function fetchCountry() {
    var endpoints = ["https://ipwho.is/", "https://ipapi.co/json/"];

    function attempt(idx) {
      if (idx >= endpoints.length) return Promise.resolve(null);
      return new Promise(function (resolve) {
        var done = false;
        var timer = null;
        try {
          var req;
          if (typeof AbortController !== "undefined") {
            var ctrl = new AbortController();
            timer = setTimeout(function () {
              ctrl.abort();
            }, 3500);
            req = fetch(endpoints[idx], { signal: ctrl.signal });
          } else {
            req = fetch(endpoints[idx]);
          }
          req
            .then(function (res) {
              if (!res.ok) throw new Error("bad status");
              return res.json();
            })
            .then(function (data) {
              if (done) return;
              done = true;
              if (timer) clearTimeout(timer);
              var cc = data.country_code || data.country;
              if (typeof cc === "string" && cc.length >= 2) {
                resolve(cc.toUpperCase().slice(0, 2));
              } else {
                return attempt(idx + 1).then(resolve);
              }
            })
            .catch(function () {
              if (done) return;
              done = true;
              if (timer) clearTimeout(timer);
              attempt(idx + 1).then(resolve);
            });
        } catch (err) {
          if (timer) clearTimeout(timer);
          resolve(null);
        }
      });
    }

    return attempt(0);
  }

  function detectInitialLang() {
    return fetchCountry().then(function (cc) {
      if (cc === "SE") return "sv";
      var nav = (navigator.language || "").toLowerCase();
      return nav.indexOf("sv") === 0 ? "sv" : "en";
    });
  }

  /* ---------- init ---------- */

  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLang(btn.getAttribute("data-lang"));
    });
  });

  var saved = null;
  try {
    saved = localStorage.getItem(STORAGE_KEY);
  } catch (e) {
    /* ignore */
  }

  if (saved && I18N[saved]) {
    // explicit choice from a previous visit wins
    applyLang(saved);
  } else {
    // paint instantly in English, then refine with detection
    applyLang("en");
    detectInitialLang().then(function (lang) {
      applyLang(lang);
    });
  }

  /* ---------- scroll reveal ----------
     .reveal elements are only hidden while <html class="js"> is set (see
     styles.css), so content can never be stuck invisible: no JavaScript,
     no IntersectionObserver, and no JS errors all still yield a readable
     page. We arm the class right here, once the reveal machinery is in
     place. */

  var revealEls = document.querySelectorAll(".reveal");
  document.documentElement.classList.add("js");

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) {
      io.observe(el);
    });

    // Safety net: after load, anything already in the viewport that the
    // observer somehow missed is revealed anyway.
    window.addEventListener("load", function () {
      setTimeout(function () {
        revealEls.forEach(function (el) {
          if (el.classList.contains("visible")) return;
          var rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight) el.classList.add("visible");
        });
      }, 1500);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("visible");
    });
  }

  /* ---------- header state on scroll ---------- */

  var header = document.getElementById("site-header");
  function onScroll() {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 10);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
