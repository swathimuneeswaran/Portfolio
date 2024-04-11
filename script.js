let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar'); // Assuming navbar is a class
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Function to handle adding and removing 'active' class from navigation links
function setActiveNavLink(id) {
    navLinks.forEach(link => {
        if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Event listener for scroll
window.addEventListener('scroll', () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            setActiveNavLink(id);
        }
    });
});

// Event listener for menu icon click
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

// Event listener for navigation link clicks
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        let targetId = link.getAttribute('href').substring(1); // Get target section id
        let targetSection = document.getElementById(targetId); // Find the target section
        let offsetTop = targetSection.offsetTop; // Calculate the top offset of the target section
        window.scrollTo({
            top: offsetTop - 100, // Adjusted scroll position to consider fixed header
            behavior: 'smooth' // Smooth scrolling animation
        });
        setActiveNavLink(targetId); // Set the clicked link as active
    });
});
