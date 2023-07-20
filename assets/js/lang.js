document.addEventListener("DOMContentLoaded", function() {
    var currentLang = localStorage.getItem("lang") || "en";
    changeLang(currentLang);
    document.getElementById("lang-switch").addEventListener("click", function() {
        currentLang = currentLang == "en" ? "fr" : "en";
        changeLang(currentLang);
    });
});

function changeLang(lang) {
    fetch(`lang/${lang}.json`)
        .then(response => response.json())
        .then(data => {
            var allLangKeys = document.querySelectorAll("[data-lang-key]");
            allLangKeys.forEach(element => {
                element.textContent = data[element.getAttribute("data-lang-key")];
            });
            document.getElementById("lang-switch").textContent = lang.toUpperCase();
            localStorage.setItem("lang", lang);
        });
}
