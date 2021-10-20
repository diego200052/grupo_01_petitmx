import React, { Component } from 'react';
import SubcategoriesCard from './SubcategoriesCard';

class SubcategoriesInDb extends Component {
    /* --- Aca arrancamos dandole el estado */
    constructor(props) {
        super(props);
        this.state = {
            productsCategories: undefined,
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
        console.log(data.countByCategory);
        if(data.products.length === 0) {
            this.setState(
                {
                    productsCategories: undefined,
                }
            );
        } else {
            this.setState(
                {
                    productsCategories: data.countByCategory,
                }
            );
        }
    }

    /* Cuando el componente carga, recien ahi llamamos a la API */
    componentDidMount(){
        console.log("Me monté!!");
        this.getProducts();
    }

    /* Aca va la funcion a la q llamamos desde el componentDidMount */
    getProducts(){
        this.apiCall("/api/products", this.showProducts);
    }

    render() {
        if(this.state.productsCategories !== undefined) {
            return(
                <div className="col-lg-11 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-gray-800">
                                Subcategorías de productos
                            </h5>
                            </div>
                            <div className="card-body">
                            <div className="row">
                            {this.state.productsCategories.map( (countByCategory, i) => {
                                return <SubcategoriesCard {...countByCategory} key={i}/>
                            })}
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return(
                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-gray-800">
                                Subcategorías de productos
                            </h5>
                        </div>
                        <div className="card-body">
                            Ninguna
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default SubcategoriesInDb;
