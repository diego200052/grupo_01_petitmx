/* Capturamos el formulario */
const formRegister =  document.querySelector('form.register'); 
/* Hacemos un array con todos los elementos */
let formCampos = Array.from(formRegister.elements);

/* Borramos el botón para subir imagen, los check de validación y el botón de registro.*/

// Botón "Upload".
formCampos.pop();

// Check de "Recibir información".
formCampos.pop();

// Check de "Políticas de privacidad".
formCampos.pop();

// Botón de "Registrar".
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

		case 'isName':
			validation = !validator.isAlpha(valorDelCampo,'es-ES');
			break;

		/* Comprueba si la cadena es un correo electrónico*/
		case 'isEmail':
			// validation = false -> Si no cumple
			validation = !validator.isEmail(valorDelCampo);
			break;

		/* Comprueba si la cadena coincide con la comparación */
        case 'equals':
			// validation = false -> Si no cumple
			validation = !validator.equals(valorDelCampo);
			break;
		
		case 'isLength':
			// validation = false -> Si no cumple
			// La longitud del nombre debe ser de mínimo 2 caracteres.
			validation = !validator.isLength(valorDelCampo,2,undefined);
			break;

		case 'isStrongPassword':
			// validation = false -> Si no cumple
			// La longitud de la contraseña debe ser de mínimo 8 caracteres.
			validation = !validator.isStrongPassword(valorDelCampo);
			break;

		case 'isImage':

			console.log(valorDelCampo);
			// Elimanos el path
			let t = valorDelCampo.split('\\').pop().toLowerCase();
			// Eliminamos el nombre del archivo
			t = t.split('.').pop().toLowerCase();
			console.log(t);
			// Verificamos el formato del archivo
			if (t == "jpeg" || t == "jpg" || t == "png" || t == "bmp" || t == "gif") {
				// validation = false -> Si no cumple
				console.log("Formato valido");
				validation = false;
    		}else{
				document.getElementById("image-file").value = '';
				validation = true;
			}
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


	// Verificamos el campo de nombre y apellido tengan más de dos caracteres.
	if (unCampo.name === 'first_name' || unCampo.name === 'last_name') {	
		unCampo.addEventListener('blur', function () {
			// Si el campo no esta vacío
			if (!validator.isEmpty(unCampo.value)) {
				validateInput(' debe contener al menos 2 caracteres.', this, 'isLength');
				validateInput(' debe contener solo letras.', this, 'isName');
			}
		})
    }
	
	// Verificamos el campo de la contraseña.
	if (unCampo.name === 'password') {	
		unCampo.addEventListener('blur', function () {
			if (!validator.isEmpty(unCampo.value)) {
				// validateInput(' debe contener al menos 8 caracteres.', this, 'passLength');
				validateInput(' debe tener al menos 1 letra mayúsculas, un número, un carácter especial y 8 caracteres', this, 'isStrongPassword');
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

	
	// Validamos el formato de la imagen
	if (unCampo.name === 'image-file') {	
        unCampo.addEventListener('change', function () {

            if (!validator.isEmpty(unCampo.value)) {
				validateInput(' debe ser un archivo de imagen válido (JPG,JPGE,PNG,GIF).', this, 'isImage');
			}

        })
    }

    
   // Verifica que las contraseñas coincidan
    let password = document.querySelector('#password');
    
    if (unCampo.name === 'rePassword') {	
        unCampo.addEventListener('blur', function () {
			// Si los password no son iguales
            if (!validator.equals(unCampo.value, password.value)) {              
                validateInput(' no coincide con la <b>Contraseña</b>', this, 'equals');
            }
        })
    } 


}



formRegister.addEventListener('submit', function (event) {
	
	camposConError = {};
	// Verificamos SI hay campos vacíos
	formCampos.forEach( (unCampo) =>{
		let valorDelCampo = unCampo.value.trim();
		if (validator.isEmpty(valorDelCampo)) {
			console.log(valorDelCampo);
			camposConError[unCampo.name] = true;
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
			icon: 'success',
			title: '¡Registrado con éxito!',
			text: 'Ahora puedes iniciar sesión.',
			showConfirmButton: true
		  }).then( val => {
			  if (val){
				formRegister.submit();
				return ;
			  }
		  })
	}
})