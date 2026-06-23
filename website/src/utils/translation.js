const response = await fetch('../src/translations/en.json');
const en = await response.json();

const fiResponse = await fetch('../src/translations/fi.json');
const fi = await fiResponse.json();

// Helper function for displaying the translated text on the page
function Translate (elementId, translationKey) {
    const element = document.getElementById(elementId);
    if (!element) {
        console.error(`Element with id '${elementId}' not found`);
    }
    
    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.value = translationKey;
    } else {
        element.textContent = translationKey;
    }
};

var lang = {}; // Default language is Finnish

// Language button toggle function
document.querySelector('button').addEventListener('click', ToggleLanguage);

function ToggleLanguage() {
    if (lang.language === "fi") {
        Translate('lang-button', 'FI');
        lang = en;
    }
    else {
        Translate('lang-button', 'EN');
        lang = fi;
    }
    TranslateAll();
}

// Functions to translate each site
// 1. Home page
function TranslateAll() {
    Translate('hero-title', lang.hero.title);
    Translate('nav-home', lang.nav.home);
    Translate('nav-board', lang.nav.board);
    Translate('nav-partners', lang.nav.partners);
}

window.onload = TranslateAll;