let currentLang = "vie";

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

function updateLangDisplay() {
  document.getElementById("langText").textContent =
    currentLang === "vie" ? "VIE" : "ENG";
}

document.querySelectorAll(".dropdown-item").forEach(item => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const selectedLang = item.getAttribute("data-lang");
    if (selectedLang && selectedLang !== currentLang) {
      currentLang = selectedLang;
      loadLanguage(currentLang);
      updateLangDisplay();
    }
  });
});
