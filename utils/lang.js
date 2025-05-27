let currentLang = getLocalStorage() || "vie";

function loadLanguage(langCode) {
  const filePath = langCode === 'vie' ? '../lang/vietnamese.json' : '../lang/english.json';
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

function updateLangDisplay() {
  document.getElementById("langText").textContent =
    currentLang === "vie" ? "VIE" : "ENG";
}

function updateLocalStorage(lang) {
  localStorage.setItem("lang", lang);
}

function getLocalStorage() {
  return localStorage.getItem("lang");
}

document.querySelectorAll(".dropdown-item lang").forEach(item => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const selectedLang = item.getAttribute("data-lang");
    if (selectedLang && selectedLang !== currentLang) {
      currentLang = selectedLang;
      updateLocalStorage(currentLang); 
      loadLanguage(currentLang);
      updateLangDisplay();
    }
  });
});

loadLanguage(currentLang);
updateLangDisplay();