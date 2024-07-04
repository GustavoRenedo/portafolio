

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

//Scroll suave y animado para PC

document.addEventListener('DOMContentLoaded', () => {
    // Detectar si el dispositivo es móvil
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    if (!isMobile) {
        // Solo aplicar el scroll suave si no es un dispositivo móvil
        document.querySelectorAll('.scroll-link').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const targetID = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetID);

                if (targetElement) {
                    const initialScrollPosition = window.scrollY;
                    const targetScrollPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                    const offset = 20;  // Ajusta este valor para el "scroll mínimo hacia arriba"
                    const durationUp = 300;  // Duración del scroll hacia arriba
                    const durationDown = 800;  // Duración del scroll hacia abajo

                    // Desplazamiento mínimo hacia arriba
                    smoothScroll(initialScrollPosition - offset, durationUp, () => {
                        // Después de un pequeño retraso, desplazarse suavemente hacia abajo
                        smoothScroll(targetScrollPosition, durationDown);
                    });
                }
            });
        });
    }
});

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



