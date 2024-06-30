/*-------*/
let loaded = (eventLoaded) => {

  /* Segunda parte - document API */
  let myform = document.getElementById('formu');
  debugger
  //actua como hanlder del evento submit
  myform.addEventListener('submit', (eventSubmit) => {

    eventSubmit.preventDefault();
    // Elementos
    var elemento1 = document.getElementById('nombre')
    var elemento2 = document.getElementById('email')
    var elemento3 = document.getElementById('sugerencias')
    


    var nombre = elemento1.value.trim();
    var email = elemento2.value.trim();
    var sugerencias = elemento3.value.trim();

    

    if (nombre.length == 0) {
      elemento1.focus();
      alert('Por favor, ingrese un nombre.');
      return;
    }
    if (email.length === 0) {
      elemento2.focus();
      alert('Por favor, ingrese su correo electrónico.');
      return;
    }
    if (sugerencias.length === 0) {
      elemento3.focus();
      alert('Por favor, ingrese una sugerencia.');
      return;
    }
    

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      // Muestra un mensaje de alerta con la validación de correo electrónico
      elemento2.focus();
      alert('Por favor, ingrese un correo electrónico válido.');
      return;
    }

    alert('Formulario válido. Procediendo con el envío...');

    const datos = {
      nombre: nombre,
      email: email,
      sugerencias: sugerencias
      
    };

    fetch("https://emprendimiento-66d26-default-rtdb.firebaseio.com/collection.json",
      {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: { 'Content-Type': 'application/json' }
      }
      /* con el then recibo la respuesta del fetch y con esa respuesta hago mi logica para mostrarla */
    ).then((respuesta) => respuesta.json())
      .then((datos) => {
        console.log(datos);
      }).catch((error) => {
        console.error(error);
      })

    debugger;
  })

}

window.addEventListener("DOMContentLoaded", loaded);
