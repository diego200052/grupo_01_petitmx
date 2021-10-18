/* Capturamos el formulario */
const formProductUpdate =  document.querySelector('form.productUpdate'); 
/* Hacemos un array con todos los elementos */
let formCampos = Array.from(formProductUpdate.elements);

/* Borramos el botón para subir imagen, los check de validación y el botón de registro.*/


// Botón de "Crear producto".
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

		case 'isLength':
			// validation = false -> Si no cumple
			// La longitud del nombre debe ser de mínimo 5 caracteres.
			validation = !validator.isLength(valorDelCampo,5,undefined);
			break;
        
        case 'isPrice':
            // validation = false -> Si no cumple
            // Se comprueba si es un valor positivo y el número de dígitos
            // permitidos despues del decimal (2 dígitos).
            validation = !validator.isCurrency (valorDelCampo,{
                allow_negatives: false,
                digits_after_decimal: [2]
              });
            break;
        
        case 'descLength':
            // validation = false -> Si no cumple
            // La longitud de la descripción debe ser de mínimo 20 caracteres.
			validation = !validator.isLength(valorDelCampo,20,undefined);
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

		// Insertamos un mensaje de error en el span 'helper-text' (Caso de input)
		let auxinput = input.nextElementSibling;
		auxinput.nextElementSibling.innerHTML = `* El campo <b>${input.getAttribute('data-name')}</b> ${message}`;
		
        // Insertamos un mensaje de error en el span 'helper-text' (Caso de select)
        let auxSelect = select.nextElementSibling;
		auxSelect.nextElementSibling.innerHTML = `* El campo <b>${select.getAttribute('data-name')}</b> ${message}`;

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
		if(unCampo.name !== 'ingredients' || unCampo.name !== 'instructions' ){
            validateInput('es obligatorio.', this, 'isEmpty');
        }
	});


	// Verificamos el nombre del producto tenga más de 5 caracteres.
	if (unCampo.name === 'productName') {	
		unCampo.addEventListener('blur', function () {
			// Si el campo no esta vacío
			if (!validator.isEmpty(unCampo.value)) {
				validateInput(' debe contener al menos 5 caracteres.', this, 'isLength');
			}
		})
    }
	
	// Verificamos el campo del precio.
	if (unCampo.name === 'price') {	
		unCampo.addEventListener('blur', function () {
			if (!validator.isEmpty(unCampo.value)) {
				validateInput(' no cumple con el formato. (Ej. 9999.99)', this, 'isPrice');
			}
		})
    }

	// Verificamos la descripción del producto.
	if (unCampo.name === 'description') {	
		unCampo.addEventListener('blur', function () {
			if (!validator.isEmpty(unCampo.value)) {
				validateInput(' debe contener al menos 20 caracteres.', this, 'descLength');
			}
		})
    }	

    // Verificamos los ingredientes ingresados.
	if (unCampo.name === 'ingredients') {	
		unCampo.addEventListener('blur', function () {
			if (!validator.isEmpty(unCampo.value)) {
				validateInput(' debe contener al menos 20 caracteres.', this, 'descLength');
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

    // Verificamos las instrucciones ingresados.
	if (unCampo.name === 'instructions') {	
		unCampo.addEventListener('blur', function () {
			if (!validator.isEmpty(unCampo.value)) {
				validateInput(' debe contener al menos 20 caracteres.', this, 'descLength');
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
	
	// Validamos el formato de la imagen
	if (unCampo.name === 'image-file') {	
        unCampo.addEventListener('change', function () {

            if (!validator.isEmpty(unCampo.value)) {
				validateInput(' debe ser un archivo de imagen válido (JPG,JPGE,PNG,GIF).', this, 'isImage');
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



}



formProductUpdate.addEventListener('submit', function (event) {
	
	camposConError = {};
	// Verificamos SI hay campos vacíos
	formCampos.forEach( (unCampo) =>{
		let valorDelCampo = unCampo.value.trim();
		if( unCampo.name === 'ingredients' ||  unCampo.name === 'instructions' || unCampo.name === 'image-file' || unCampo.name === 'productImage'){
            if (validator.isEmpty(valorDelCampo)) {
                //console.log(valorDelCampo);
				return
            }else{
				// Al objeto literal de errores, le eliminamos la prop del campo que tenía error
                return
			}
        }
		else{
			if (validator.isEmpty(valorDelCampo)) {
                console.log(valorDelCampo);
				camposConError[unCampo.name] = true;
			}
		}	
	} )
	

	console.log(camposConError);
	if (Object.keys(camposConError).length > 0) {
		event.preventDefault();
		alert('Hay campos vacíos o con errores. Por favor verifica.'); 
	}else{
		event.preventDefault();

		Swal.fire({
			icon: 'success',
			title: '¡Producto actualizado!',
			showConfirmButton: true
		  }).then( val => {
			  if (val){
				formProductUpdate.submit();
				return ;
			  }
		  })
	}
})