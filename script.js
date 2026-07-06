/* ==========================================
   BEELOAD V3
   Engineering Intelligent Systems
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // Scroll Reveal Animation
    // ==========================

    const revealElements = document.querySelectorAll(
        ".section, .vision, .card"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    }, {

        threshold: 0.15

    });

    revealElements.forEach(element => {

        element.classList.add("hidden");

        observer.observe(element);

    });

    // ==========================
    // Smooth Button Animation
    // ==========================

    const button = document.querySelector(".button");

    if (button) {

        button.addEventListener("mouseenter", () => {

            button.style.boxShadow =
                "0 0 30px rgba(200,164,93,.35)";

        });

        button.addEventListener("mouseleave", () => {

            button.style.boxShadow = "none";

        });

    }

    // ==========================
    // Logo Hover
    // ==========================

    const logo = document.querySelector(".logo");

    if (logo) {

        logo.addEventListener("mouseenter", () => {

            logo.style.transform = "scale(1.06) rotate(2deg)";

        });

        logo.addEventListener("mouseleave", () => {

            logo.style.transform = "scale(1) rotate(0deg)";

        });

    }

    // ==========================
    // Current Year
    // ==========================

    const footer = document.querySelector("footer p");

    if (footer) {

        footer.innerHTML =
            `© ${new Date().getFullYear()} Beeload. All rights reserved.`;

    }

});
