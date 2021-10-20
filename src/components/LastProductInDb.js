import React, { Component } from 'react';

class LastProductInDb extends Component {
    /* --- Aca arrancamos dandole el estado */
    constructor(props) {
        super(props);
        this.state = {
            producto: undefined,
        }
    }

    /* Funcion para llamar a la API, hacemos una func porq vamos a llamar a varias */

    apiCall(url, consecuencia){
        fetch(url)
            .then( response => response.json() )
            .then( data => consecuencia(data) )
            .catch( error => console.log(error))
    }

    /* Esta es la funcion consecuencia de "apiCall()" */

    showProducts = (data)=>{
        console.log(data);
        if(data.products.length === 0) {
            this.setState(
                {
                    producto: undefined,
                }
            );
        } else {
            let ultimoProducto = data.products[data.products.length -1];
            this.apiCall("https://petitmx.herokuapp.com/api/products/" + ultimoProducto.id_product, this.showProduct);
        }
    }

    showProduct = (product) => {
        console.log(product);
        this.setState(
            {
                producto: product
            }
        );
    }

    /* Cuando el componente carga, recien ahi llamamos a la API */
    componentDidMount(){
        console.log("Me monté!!");
        this.getProducts();
    }

    /* Aca va la funcion a la q llamamos desde el componentDidMount */
    getProducts(){
        this.apiCall("https://petitmx.herokuapp.com/api/products", this.showProducts);
    }

    render() {
        if(this.state.producto !== undefined) {
            return(
                <div className="col-sm-12 col-lg-5 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-gray-800">Último producto en la base de datos</h5>
                        </div>
                        <div className="card-body">
                            <h3 className="text-center">{`${this.state.producto.productName}`}</h3>
                            <div className="text-center">
                                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={`https://petitmx.herokuapp.com${this.state.producto.image}`} alt="{`${this.state.producto.productName}`}"/>
                            </div>
                            <div className="text-center mt-3">
                                <a className="btn btn-primary" target="_blank" rel="nofollow" href={`https://petitmx.herokuapp.com${this.state.producto.detailURL}`}>Ver detalle</a>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return(
                <div className="col-sm-12 col-lg-5 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-gray-800">Último producto en la base de datos</h5>
                        </div>
                        <div className="card-body">
                            <h3 className="text-center">No hay productos en la base de datos.</h3>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default LastProductInDb;
