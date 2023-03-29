
const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItems = [nav1, nav2, nav3, nav4, nav5];

// Control navigation animation
function navAnimation() {
    navItems.forEach((nav, i) => {
        nav.classList.toggle(`slide-in-${i +1}`);
    })
}

// Function for toggling overlay with mobile nav
function toggleNav() {
    // Toggle Menu Bars Open/Closed
    menuBars.classList.toggle('change');
    overlay.classList.toggle('overlay-slide-right'); 
    navAnimation(); 
}

// Event Listeners
menuBars.addEventListener('click', toggleNav);
navItems.forEach((nav) => {
    nav.addEventListener('click', toggleNav);
});
