let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/code.png') {
      miImage.setAttribute('src','images/code2.png');
    } else {
      miImage.setAttribute('src', 'images/code.png');
    }
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
  let miNombre = prompt('Introduzca su nombre:');
  if(!miNombre) {
    estableceNombreUsuario();
  } else {
    localStorage.setItem('nombre', miNombre);
    miTitulo.innerHTML = 'Bienvenidx, ' + miNombre;
  }
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}


