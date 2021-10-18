/* Capturamos el formulario */
const formDeleteProducts =  document.querySelector('form.deleteProduct'); 

var start = 0;

var quantity = 0;

function aumentar(){
quantity = document.getElementById("cantidad").value = ++start; 
}

function disminuir(){
  if(document.getElementById("cantidad").value -1 < 0){
    quantity = document.getElementById("cantidad").value = 0;
  }else{
    quantity = document.getElementById("cantidad").value = --start; 
  }
  
}

formDeleteProducts.addEventListener('submit', function (event) {
  event.preventDefault();

  Swal.fire({
    title: '¿Deseas eliminar le producto?',
    text: "No podrás revertir los cambios!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor:'#008000',
    confirmButtonText: 'Yes, eliminar!',
    cancelButtonColor: '#d33',
    cancelButtonText: 'No, cancelar!',
    reverseButtons: true
  }).then((result) => {
    event.preventDefault();
    if (result.isConfirmed) {
      Swal.fire(
        'Eliminado!',
        'El producto ha sido eliminado.',
        'success'
      )
      formDeleteProducts.submit();
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      Swal.fire(
        'Cancelado',
        'No se realizaron cambios :)',
        'error'
      )
    }
  })

	// Swal.fire({
  //       title: '¿Deseas eliminar el producto?',
  //       showDenyButton: true,
  //       showCancelButton: true,
  //       confirmButtonText: 'Si',
  //       denyButtonText: `No`,
  //     }).then((result) => {
  //       /* Read more about isConfirmed, isDenied below */
  //       if (result.isConfirmed) {
  //         Swal.fire('Eliminado!', '', 'success')
  //         formDeleteProducts.submit();
  //       } else if (result.isDenied) {
  //         Swal.fire('Sin cambios', '', 'info')
  //       }
  //   })

})
