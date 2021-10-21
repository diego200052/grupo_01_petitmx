import React, {useState, useEffect, useRef}  from 'react';


function SearchProducts(){


    
    // Pasamos como valor inicial el array vacío
	const [product,setProduct] = useState([]);

    console.log("Productos para ID",product);

    const [productCount,setCount] = useState([]);


      // Pasamos como valor inicial un string vacío 
	const [keyword,setKeywords] = useState('');

    let inputSearch = useRef();


	// Búsqueda de productos por id
    const url = `https://petitmx.herokuapp.com/api/products/${keyword}`
	
    

    useEffect(() => {
        // Lanzo el pedido asincrónico a la api
		fetch(url)
            .then( response => response.json()) // Se traduce en formato JSON
            .then( data => {  // Información de la api en data
                if(!data.Error){
                    setCount(data.count)
                } else {				
                    setCount([])
                }
		    })
            .catch(error => console.log(error));
	},[]) // El array vacío es para que se ejecute una vez

	useEffect(() => {
        // Lanzo el pedido asincrónico a la api
		fetch(url)
            .then( response => response.json()) // Se traduce en formato JSON
            .then( data => {  // Información de la api en data
                if(!data.Error){
                    setProduct(data)
                } else {				
                    setProduct([])
                }
		    })
            .catch(error => console.log(error));
	}, [keyword]) // El array vacío es para que se ejecute una vez

    const searchProduct = e => {
        // Evitamos que se recargue la página
		e.preventDefault();
		setKeywords(inputSearch.current.value)
	}

	return(
		<div className="container-fluid">

			<div className="row my-4">
				<div className="col-12 col-md-6">
					{/* Buscador */}
					<form method="GET" onSubmit={ searchProduct } >
						<div className="form-group" >
							<label htmlFor="">Buscar por id:</label>
							<input ref={inputSearch} type="text" className="form-control" />
						</div>
						<button className="btn btn-info">Search</button>
					</form>
				</div>
			</div>
            {
				keyword <= ((productCount*10)-5) && keyword > 0 ?
				<>
                    <div className="row">
                        <div className="col-12">
                            <h2>Producto con el ID: {keyword}</h2>
                        </div>
                        {/* Listado de producto */}
                        
                        <div className="col-sm-12 col-md-12 my-4">
                                <div className="card shadow mb-4">
                                    <div className="card-header py-3">
                                        <h5 className="m-0 font-weight-bold text-gray-800">{product.productName}</h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="text-center">
                                            <img 
                                                className="img-fluid" 
                                                src={`https://petitmx.herokuapp.com${product.image}`}
                                                alt={product.productName} 
                                            />
                                        </div>
                                        <p class="card-text my-4 text-success font-weight-bold">{product.price}</p>
                                        <p class="card-text my-4 text-secondary text-justify">{product.description}</p>
                                    </div>
                                </div>
                        </div>
				       
				
    		        </div>
                </>
				:
				<div className="alert alert-danger text-center my-4 fs-2">No existe el producto o no se ha realizado una búsqueda.</div>
			}

			
			
            {/* { product.length === 0 && <div className="alert alert-warning text-center">No se encontró el producto</div>} */}

		</div>
	)
}

export default SearchProducts;
