var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

const nav = document.getElementById('header-main');
const toggle = document.getElementById('toggle');
const toggleBars = document.getElementById('fa-bars');
const toggleTimes = document.getElementById('fa-times');

toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    toggleBars.classList.toggle('active');
    toggleTimes.classList.toggle('active');
});

var typed = new Typed(".auto-type", {
    strings: ["Developer", "Maker", "Freelancer", "Student"],
    typeSpeed: 100,
    backSpeed: 85,
    loop: true
})
