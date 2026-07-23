// All routes for the navbar links
const locations = {
    "home": "/",
    "partners": "/partners",
    "events": "/events",
    "titelan": "/titelan",
    "students": "/students",
    "board": "/board",
    "contact": "/contact"
};

// Toggle active when hamburger is clicked
function toggleActive() {
    document.querySelector('.nav-links').classList.toggle('active');
    document.getElementById('nav-hamburger').classList.toggle('active');
}

// Load the navbar HTML and insert it into the page
fetch (`/resources/components/navbar.html`)
    .then(response => response.text())
    .then(html => {
        // Insert the navbar HTML into the page
        document.getElementById('nav-header').innerHTML = html;

        // Add links to the navbar elements based on the current language
        document.querySelectorAll("[data-route]").forEach(element => {
            if (!element) {
                console.error(`Element not found`);
            }
            const key = element.getAttribute("data-route");
            if (location.pathname.startsWith("/en/")) {
                element.href = `${window.location.origin}/en${locations[key]}`;
            }
            else {
                element.href = `${window.location.origin}${locations[key]}`;
            }
        });

        // Add event listener to the hamburger menu
        document.getElementById('nav-hamburger').addEventListener('click', toggleActive);

        // Add event when navbar completes loading to trigger translation
        document.dispatchEvent(
            new Event("navbarLoaded")
        );
    });