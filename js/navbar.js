// navbar.js

function highlightActiveNav() {
    const currentPage = window.location.pathname.split("/").pop();
    const allLinks = document.querySelectorAll(".nav-links a, .dropdown-menu a");

    allLinks.forEach(link => {
        const linkPage = link.getAttribute("href").split("/").pop();
        link.classList.toggle("active", linkPage === currentPage);
    });

}

function hamburgerAction(){
    const hamburger = document.getElementById('hamburger');
    const dropdown = document.getElementById('dropdownMenu');
    
    hamburger.addEventListener('click', () => {
        dropdown.classList.toggle('hidden');
    });

    document.addEventListener('click', (event) => {
        if (!hamburger.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.classList.add('hidden');
        }
    });
}

// Run the function on page load
document.addEventListener('DOMContentLoaded', () => {
  highlightActiveNav();
  hamburgerAction();
});

