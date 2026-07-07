/* =======================================================
   BEELOAD WEBSITE 1.0
   Official JavaScript
======================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* ======================================
       NAVBAR SCROLL EFFECT
    ====================================== */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            navbar.style.background = "rgba(5,5,5,.88)";
            navbar.style.borderBottom = "1px solid rgba(200,164,93,.20)";
            navbar.style.backdropFilter = "blur(18px)";

        } else {

            navbar.style.background = "rgba(5,5,5,.60)";
            navbar.style.borderBottom = "1px solid rgba(255,255,255,.05)";
            navbar.style.backdropFilter = "blur(14px)";

        }

    });

    /* ======================================
       SMOOTH SCROLL
    ====================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        });

    });

    /* ======================================
       SCROLL ANIMATION
    ====================================== */

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    }, {

        threshold: 0.15

    });

    document.querySelectorAll(".section, .card, .cta, .footer").forEach(el => {

        el.classList.add("hidden");

        observer.observe(el);

    });

    /* ======================================
       ACTIVE NAV LINK
    ====================================== */

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 180;

            if (window.scrollY >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

    /* ======================================
       MOBILE MENU
    ====================================== */

    const menuButton = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-links");

    if (menuButton && navMenu) {

        menuButton.addEventListener("click", () => {

            navMenu.classList.toggle("open");

        });

    }

    /* ======================================
       YEAR
    ====================================== */

    const year = new Date().getFullYear();

    const footerText = document.querySelector(".footer-bottom p");

    if (footerText) {

        footerText.textContent =
            `© ${year} Beeload. All rights reserved.`;

    }

});