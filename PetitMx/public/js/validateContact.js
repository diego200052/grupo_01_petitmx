/* Capturamos el formulario */
const formContact =  document.querySelector('form.contact'); 
/* Hacemos un array con todos los elementos */
let formCampos = Array.from(formContact.elements);

/* Borramos el botón de enviar.*/

// Botón de "Enviar".
formCampos.pop();

console.log(formCampos);


/* Creamos la variable que guardara los errores */
var camposConError = {};


// Función para validar el campo.
function validateInput(message, input, typeOfValidator) {

	// Eliminamos los espacios vacíos al principio y al final del campo
	// y capturamos su valor.
	let valorDelCampo = input.value.trim();

	let validation;
	
	/* definimos los tipos de validacion */
	switch (typeOfValidator) {

		/* Comprueba si la cadena es un correo electrónico*/
		case 'isEmail':
			// validation = false -> Si no cumple
			validation = !validator.isEmail(valorDelCampo);
			break;

		case 'isLength':
			// validation = false -> Si no cumple
			// La longitud del nombre debe ser de mínimo 2 caracteres.
			validation = !validator.isLength(valorDelCampo,2,undefined);
			break;

        case 'messageLength':
            // validation = false -> Si no cumple
            // La longitud del nombre debe ser de mínimo 8 caracteres y máximo de 200.
            validation = !validator.isLength(valorDelCampo,8,200);
            break;
        

        case 'isMobilePhone':
            validation = !validator.isMobilePhone(valorDelCampo,'es-MX');
            break;

		/* El default para los campos vacios */
       	default:
			validation = validator.isEmpty(valorDelCampo);
			break;
	}

	// si no se pasa la validación quiere decir que validation = true.
	if (validation) {
		// Si el campo tiene error, agregamos la clase de materialize 'invalid'
		input.classList.add('invalid');

		// Insertamos un mensaje de error en el span 'helper-text'
		let auxinput = input.nextElementSibling;
		auxinput.nextElementSibling.innerHTML = `* El campo <b>${input.getAttribute('data-name')}</b> ${message}`;
		
		// Al objeto literal de errores, la asignamos una prop con el nombre del campo y valor true
		camposConError[input.name] = true;
	} else {
		// Cuando no hay error, eliminamos la clase por si la tuviera
		input.classList.remove('invalid');
		input.classList.add('valid');
		// Eliminamos el mensaje de error en el div 'invalid-feedback'
		input.nextElementSibling.nextElementSibling.innerHTML = '';
		// Al objeto literal de errores, le eliminamos la prop del campo que tenía error
		delete camposConError[input.name];
    }
    
}


/* Ciclo que recorre cada uno de los campos y los verifica 
   Se utilizará el evento onblur para detectar cuando el usuario
   haga clic fuera del input
*/

for (const unCampo of formCampos) {
	// A cada campo le pasamos el evento blur y verificamos si esta vacío.
	unCampo.addEventListener('blur', function () {
        if(unCampo.name !== 'telephone'){
            validateInput('es obligatorio.', this, 'isEmpty');
        }
	});


	// Verificamos el campo de nombre y apellido tengan más de dos caracteres.
	if (unCampo.name === 'first_name' || unCampo.name === 'last_name') {	
		unCampo.addEventListener('blur', function () {
			// Si el campo no esta vacío
			if (!validator.isEmpty(unCampo.value)) {
				validateInput(' debe contener al menos 2 caracteres.', this, 'isLength');
			}
		})
    }
	

	// Verificamos el campo de correo. 'email' es el name de nuestro input.
	if (unCampo.name === 'email') {	
		unCampo.addEventListener('blur', function () {
			if (!validator.isEmpty(unCampo.value)) {
				validateInput(' debe contener un formato de correo electrónico.', this, 'isEmail');
			}
		})
    }	

    // Verificamos el teléfono ingresado.
	if (unCampo.name === 'telephone') {	
		unCampo.addEventListener('blur', function () {
			if (!validator.isEmpty(unCampo.value)) {
				validateInput(' no cumple con el formato. 10 dígitos', this, 'isMobilePhone');
			}
            else{
                unCampo.classList.remove('invalid');
                unCampo.classList.add('valid');
                // Eliminamos el mensaje de error en el span 'invalid'
                unCampo.nextElementSibling.nextElementSibling.innerHTML = '';
                // Al objeto literal de errores, le eliminamos la prop del campo que tenía error
                delete camposConError[unCampo.name];
            }
		})
    }

    // Verificamos la longitu del mensaje

    if (unCampo.name === 'textarea2') {	
		unCampo.addEventListener('blur', function () {
			if (!validator.isEmpty(unCampo.value)) {
				validateInput(' solo puede contener de <b>8</b> a <b>200</b> caracteres', this, 'messageLength');
			}
		})
    }	


}



formContact.addEventListener('submit', function (event) {
	
	camposConError = {};
	// Verificamos SI hay campos vacíos
	formCampos.forEach( (unCampo) =>{
		let valorDelCampo = unCampo.value.trim();
        // console.log("Soy el campo ",unCampo)
        if( unCampo.name !== 'telephone'){
            if (validator.isEmpty(valorDelCampo)) {
                //console.log(valorDelCampo);
                camposConError[unCampo.name] = true;
            }
        }	
	} )
	

	console.log(camposConError);
	if (Object.keys(camposConError).length > 0) {
		event.preventDefault();
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Hay campos vacíos o con errores. Por favor verifica.',
		  })
	}else{
		event.preventDefault();

		Swal.fire({
			title: 'Gracias por tu mensaje!!',
			text: 'Nosotros te contactaremos!',
			imageUrl: '/img/message-image.jpg',
			imageWidth: 450,
			imageHeight: 305,
			imageAlt: 'Message Image',
		  }).then( val => {
			  if (val){
				formContact.submit();
				return ;
			  }
		  })
	}
})