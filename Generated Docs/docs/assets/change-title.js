
document.addEventListener("DOMContentLoaded", function () {
    function updateSiteName(theme) {
        document.querySelectorAll(".site-name").forEach(el => {
            el.style.display = el.getAttribute("data-theme-name") === theme ? "inline" : "none";
        });
    }

    // Initialisation
    const savedTheme = localStorage.getItem("theme") || "moos";
    //updateSiteName(savedTheme);

    // Observer les changements de data-theme
    const observer = new MutationObserver(() => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        //updateSiteName(currentTheme);
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
});
