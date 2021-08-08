/* capturamos el formulario */
const formRegister =  document.querySelector('form'); 

/* Hacemos un array con todos los elementos */
let formCampos = Array.from(formRegister.elements);

/* Borramos el ultimo elemento que es el boton de SUBMIT */
formCampos.pop();
formCampos.pop();

/* Creamos la variable que guardara los errores */
let camposConError = {};

// Generic validate function
function validateInput(message, input, typeOfValidator) {
	// Capturamos el valor del campo
	let valorDelCampo = input.value.trim();
	// trim() es un método que elimina los espacios vacíos al principio y al final

	let validation;
	
	/* definimos los tipos de validacion */
	switch (typeOfValidator) {

		/* verifica que el mail contenga @ y . */
		case 'isEmail':
			validation = !validator[typeOfValidator](valorDelCampo);
			break;

		/* equals es para que compare las cotraseñas */
        case 'equals':
			validation = !validator[typeOfValidator](valorDelCampo);
			break;

		/* El default para todo lo demas */
       	default:
			validation = validator[typeOfValidator](valorDelCampo);
			break;
	}

	// si no se pasa la validación
	if (validation) {
		// Si el campo tiene error, agregamos la clase de boostrap 'is-invalid'
		input.classList.add('is-invalid');
		// Insertamos un mensaje de error en el div 'invalid-feedback'
		input.nextElementSibling.innerHTML = `El campo <b>${input.getAttribute('data-name')}</b> ${message}`;
		// Al objeto literal de errores, la asignamos una prop con el nombre del campo y valor true
		camposConError[input.name] = true;
	} else {
		// Cuando no hay error, eliminamos la clase por si la tuviera
		input.classList.remove('is-invalid');
		input.classList.add('is-valid');
		// Eliminamos el mensaje de error en el div 'invalid-feedback'
		input.nextElementSibling.innerHTML = '';
		// Al objeto literal de errores, le eliminamos la prop del campo que tenía error
		delete camposConError[input.name];
    }
    
}


// Iteramos sobre el array de campos
for (const unCampo of formCampos) {
	// A cada campo le pasamos el evento blur
	unCampo.addEventListener('blur', function () {
		validateInput('es obligatorio', this, 'isEmpty');
	});

	// Si el nombre del campo es 'email'
	if (unCampo.name === 'email') {	
		unCampo.addEventListener('blur', function () {
			if (!validator.isEmpty(unCampo.value)) {
				validateInput('debe contener un formato de correo electrónico', this, 'isEmail');
			}
		})
    }
   /* VERIFICA QUE LOS PASSWORDS SEAN IGUALES */
    let password = document.querySelector('#password');
    
    if (unCampo.name === 'rePassword') {	
        unCampo.addEventListener('blur', function () {
            if (!validator.equals(unCampo.value, password.value)) {              
                validateInput('no coincide con el <b>Campo Contraseña</b>', this, 'equals');
            }
        })
    }
}



formRegister.addEventListener('submit', function (event) {
	// verificamos SI hay campos vacíos
	for (const unCampo of formCampos) {
		let valorDelCampo = unCampo.value.trim();
		if (validator.isEmpty(valorDelCampo)) {
			camposConError[unCampo.name] = true;
		}
	}

	if (Object.keys(camposConError).length > 0) {
		event.preventDefault();
		alert('Hay campos con errores'); 
	}
})