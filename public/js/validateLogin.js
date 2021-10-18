/* Capturamos el formulario */
const formLogin =  document.querySelector('form.login'); 
/* Hacemos un array con todos los elementos */
let formCampos = Array.from(formLogin.elements);

/* Borramos el check de validación y el botón de inicio de sesión.*/

// Check de "Recordar mis datos".
formCampos.pop();

// Botón de "Login".
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
		auxinput.nextElementSibling.innerHTML = `El campo <b>${input.getAttribute('data-name')}</b> ${message}`;
		
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
		validateInput('es obligatorio.', this, 'isEmpty');
	});

	// Verificamos el campo de correo. 'email' es el name de nuestro input.
	if (unCampo.name === 'email') {	
		unCampo.addEventListener('blur', function () {
			if (!validator.isEmpty(unCampo.value)) {
				validateInput(' debe contener un formato de correo electrónico.', this, 'isEmail');
			}
		})
    }	

}



formLogin.addEventListener('submit', function (event) {
	
	camposConError = {};
	// Verificamos SI hay campos vacíos
	formCampos.forEach( (unCampo) =>{
		let valorDelCampo = unCampo.value.trim();
		if (validator.isEmpty(valorDelCampo)) {
			console.log(valorDelCampo);
			camposConError[unCampo.name] = true;
		}
	} )
	

	//console.log(camposConError);
	if (Object.keys(camposConError).length > 0) {
		event.preventDefault();
		alert('Hay campos vacíos o con errores. Por favor verifica.'); 
	}else{
		return; 
	}
})