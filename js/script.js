/*INICIO DE TEXTOS DINAMICOS EN PRESENTACION*/
const textos = [
    "HTML.",
    "CSS.",
    "Bootstrap.",
    "SASS.",
    "JavaScript.",
    "PHP.",
    "SQL.",
    "APIs.",
    "Photoshop"
  ];
  
  const introElement = document.getElementById("dynamicText");
  
  let currentIndex = 0;
  let animating = false;
  
  function escribirTexto(texto, elemento, velocidad, callback) {
    let i = 0;
    const intervalo = setInterval(function() {
      elemento.innerHTML += texto[i];
      i++;
      if (i === texto.length) {
        clearInterval(intervalo);
        if (callback) {
          setTimeout(callback, 3000); // Espera 1 segundo antes de borrar el texto
        }
      }
    }, velocidad);
  }
  
  function borrarTexto(texto, elemento, velocidad, callback) {
    let i = texto.length - 1;
    const intervalo = setInterval(function() {
      elemento.innerHTML = texto.slice(0, i);
      i--;
      if (i < 0) {
        clearInterval(intervalo);
        if (callback) {
          callback();
        }
      }
    }, velocidad);
  }
  
  function animarTexto() {
    if (!animating) {
      animating = true;
      const textoActual = textos[currentIndex];
      escribirTexto(textoActual, introElement, 150, function() {
        borrarTexto(textoActual, introElement, 150, function() {
          currentIndex = (currentIndex + 1) % textos.length;
          animating = false;
          setTimeout(animarTexto, 1000); // Espera 1 segundo antes de pasar al siguiente texto
        });
      });
    }
  }
  
  animarTexto(); // Inicia automáticamente de nuevo
  
  /*INICIO DE TEXTOS DINAMICOS EN PRESENTACION*/



  /*INICIO DE RESPONSIVO Y MENU SELECCIONAR*/

//Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
    //en modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}

//función que muestra el menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

/*FINALIZACION DE RESPONSIVO Y MENU SELECCIONAR*/


/*INICIO DE TRANSICIONES*/

const sr = ScrollReveal();

//Bienvenida
sr.reveal('.presentacion', {
    duration: 3000,
    origin: 'left',
    distance: '200px'
});

//Sobre mi
sr.reveal('#sobremi', {
    duration: 3000,
    origin: 'bottom',
    distance: '100px'
});

//Titulo de servicios
sr.reveal('.titulo-seccion', {
    duration: 3000,
    origin: 'left',
    distance: '100px'
});

//filas de servicios
sr.reveal('.fila', {
    duration: 3000,
    origin: 'bottom',
    distance: '100px'
});

//portafolio
sr.reveal('#portafolio', {
    duration: 3000,
    origin: 'bottom',
    distance: '100px'
});

//contacto
sr.reveal('#contacto', {
    duration: 3000,
    origin: 'bottom',
    distance: '100px'
});

/*FINALIZACION DE TRANSICIONES*/