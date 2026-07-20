

//Loader
window.addEventListener('load', function () {
    // Oculta el loader una vez que la página ha cargado
    document.getElementById('loader').style.display = 'none';
});




//Menu responsive
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
//Navbar select

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            //active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            //Seccciones activadas para animacion de scroll
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        }

    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    //remove toggle al hacer clic en scroll

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    //Animacion del footer
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

function smoothScroll(target, duration, callback) {
    const start = window.scrollY;
    const change = target - start;
    const increment = 20;
    let currentTime = 0;

    function animateScroll() {
        currentTime += increment;
        const val = easeInOutQuad(currentTime, start, change, duration);
        window.scrollTo(0, val);
        if (currentTime < duration) {
            setTimeout(animateScroll, increment);
        } else if (callback) {
            callback();
        }
    }

    animateScroll();
}

// Función de easing para una animación suave
function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
}



