/* ==========================================
   BEELOAD WEBSITE 1.0
   script.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // Scroll Reveal
    // ==========================================

    const elements = document.querySelectorAll(
        ".section, .quote, footer"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    }, {

        threshold: 0.15

    });

    elements.forEach((element) => {

        element.classList.add("hidden");

        observer.observe(element);

    });

    // ==========================================
    // Hero Button Smooth Scroll
    // ==========================================

    const button = document.querySelector(".button");

    if (button) {

        button.addEventListener("click", (event) => {

            event.preventDefault();

            document
                .querySelector("#engineering")
                .scrollIntoView({

                    behavior: "smooth"

                });

        });

    }

    // ==========================================
    // Footer Year
    // ==========================================

    const copyright = document.querySelector("footer small");

    if (copyright) {

        copyright.innerHTML =
            `© ${new Date().getFullYear()} Beeload. All rights reserved.`;

    }

    // ==========================================
    // Logo Hover
    // ==========================================

    const logo = document.querySelector(".logo");

    if (logo) {

        logo.addEventListener("mouseenter", () => {

            logo.style.transform = "scale(1.05)";

        });

        logo.addEventListener("mouseleave", () => {

            logo.style.transform = "scale(1)";

        });

    }

    // ==========================================
    // Active Navigation (per futuro menu)
    // ==========================================

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll("nav a");

    if (navLinks.length > 0) {

        window.addEventListener("scroll", () => {

            let current = "";

            sections.forEach((section) => {

                const top = section.offsetTop - 120;

                if (window.scrollY >= top) {

                    current = section.getAttribute("id");

                }

            });

            navLinks.forEach((link) => {

                link.classList.remove("active");

                const href = link.getAttribute("href");

                if (
                    href &&
                    href.startsWith("#") &&
                    href.substring(1) === current
                ) {
                    link.classList.add("active");
                }

            });

        });

    }

});
