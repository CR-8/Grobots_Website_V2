/**
 * Navbar Functionality
 * Description: Handles navigation bar behavior, mobile menu, and scroll effects
 * Author: Robotics Club SRMCEM
 * Version: 1.0
 */

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const nav = document.getElementById('nav');
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.navlink');

    // Mobile Menu State
    let menuOpen = false;

    /**
     * Toggle mobile menu state and update UI
     */
    function toggleMenu() {
        if (!menuOpen) {
            menuBtn.innerHTML = '<i data-feather="x"></i>';
            navLinks.classList.add('active');
            document.body.style.overflow = 'hidden';
        } else {
            menuBtn.innerHTML = '<i data-feather="menu"></i>';
            navLinks.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        menuOpen = !menuOpen;
        feather.replace();
    }

    // Add click event listener to menu button
    menuBtn.addEventListener('click', toggleMenu);

    /**
     * Close mobile menu when clicking outside
     * @param {Event} e - Click event
     */
    document.addEventListener('click', (e) => {
        if (menuOpen && !nav.contains(e.target)) {
            toggleMenu();
        }
    });

    /**
     * Update active link based on scroll position
     */
    function updateActiveLink() {
        const sections = document.querySelectorAll('section, #page1, #page2, #page3, #page4, #page5');
        const scrollPosition = window.scrollY + window.innerHeight / 3;

        sections.forEach((section) => {
            if (!section) return;

            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                links.forEach((link) => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === section.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Scroll event listeners
    let scrolling = false;
    window.addEventListener('scroll', () => {
        // Update navbar appearance on scroll
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        // Throttle scroll event for better performance
        if (!scrolling) {
            window.requestAnimationFrame(() => {
                updateActiveLink();
                scrolling = false;
            });
            scrolling = true;
        }
    });

    // Initialize active link on page load
    updateActiveLink();

    /**
     * Smooth scroll to section when clicking nav links
     */
    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                if (menuOpen) toggleMenu();
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Add animation delays to nav items
    document.querySelectorAll('.nav-links h4').forEach((item, index) => {
        item.style.setProperty('--i', index);
    });

    // Handle link clicks
    links.forEach(link => {
        link.addEventListener('click', () => {
            // Remove active class from all links
            links.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            link.classList.add('active');

            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
});
