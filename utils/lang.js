let currentLang = "vie";

const elements = [
  "title",
  "intro",
  "intro_1",
  "section1_title",
  "section2_title",
  "section3_title",
  "section4_title",
];

function loadLanguage(langCode) {
  const filePath = langCode === 'vie' ? '../config/vietnamese.json' : '../config/english.json';
  
  fetch(filePath)
    .then(res => res.json())
    .then(data => {
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const path = el.getAttribute('data-i18n');
        const keys = path.split('.');
        let value = data;

        
        for (const key of keys) {
          value = value?.[key];
          if (value === undefined) break;
        }

        if (value !== undefined) el.textContent = value;
      });
    });
}


loadLanguage(currentLang);

document.getElementById("langToggle").addEventListener("click", () => {
  currentLang = currentLang === "vie" ? "eng" : "vie";
  loadLanguage(currentLang);
  document.getElementById("langToggle").textContent =
    currentLang === "vie" ? "ENG" : "VIE";
});
