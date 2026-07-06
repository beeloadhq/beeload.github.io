// ======================================
// BEELOAD
// script.js v1.0
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    // Fade iniziale del contenuto
    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "opacity 0.8s ease";
        document.body.style.opacity = "1";
    }, 100);

});
