const textos = [
    "HTML.",
    "CSS.",
    "Bootstrap.",
    "SASS.",
    "JavaScript.",
    "PHP.",
    "SQL.",
    "APIs."
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
  