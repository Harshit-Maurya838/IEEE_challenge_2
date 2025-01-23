const navCheck = document.querySelector('.switcher');
const navbar = document.querySelector('.navbar');

navCheck.addEventListener('change', (e) => {
    if (e.target.checked) {
        navbar.style.transform = 'translateX(-2px)';
        navbar.style.opacity = '1';
    } else {
        navbar.style.transform = 'translateX(0px)';
        navbar.style.opacity = '0';
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768){
        navbar.style.opacity = '1';
    }else{
        navbar.style.opacity = '0';
    }
});
