// Load translations from JSON file
async function loadLang(lang) {
  const res = await fetch(`/resources/translations/${lang}.json`);
  const translations = await res.json();
  document.querySelectorAll("[data-translate]").forEach(element => {
    if (!element) {
        console.error(`Element not found`);
    }
    const key = element.getAttribute("data-translate");
    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.value = translations[key] || key;
    } else {
        element.textContent = translations[key] || key;
    }
  });
}

// Detect language from URL
var lang = location.pathname.startsWith("/en/") ? "en" : "fi";
loadLang(lang);

// Toggle language button functionality
function ToggleLanguage() {
    if (location.pathname.startsWith("/en/")){
        location.pathname = location.pathname.replace("/en/", "/");
    } else {
        location.pathname = "/en" + location.pathname;
    }
}

// Add event listener to the language toggle button
document.getElementById("lang-button").addEventListener("click", ToggleLanguage);