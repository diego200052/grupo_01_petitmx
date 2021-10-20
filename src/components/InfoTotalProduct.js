import React, { Component } from 'react';
class InfoTotalProduct extends Component{

    /* --- Inicio del estado --- */
    constructor(props){
        super(props);
        this.state= {
            count:"",
            titulo: "Products in DB"
        }
    }

    /* Funcion para llamar a la API */

    apiCall(url, consecuencia){
        fetch(url)
            .then( response => response.json() )
            .then( data => consecuencia(data) )
            .catch( error => console.log(error))
    }

    /* Esta es la funcion consecuencia de "apiCall()" */

    mostrarProductos = (data)=>{
        console.log(data);
        
       this.setState(
           {
            count: data.count,
            titulo: "Total de Productos"
           }
        ) 
        
        
        
    }

    /* Cuando el componente carga, recien ahi llamamos a la API */
    componentDidMount(){
        console.log("Me monté!!");
        this.traerProductos() 
    }

    /* Aca va la funcion a la q llamamos desde el componentDidMount */
    traerProductos(){
        this.apiCall("https://petitmx.herokuapp.com/api/products", this.mostrarProductos)
    }

    render(){
        return(
            <div className="col-md-4 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">    
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-dark text-uppercase mb-1">{this.state.titulo}</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.count}</div>
                    </div>
                <div className="col-auto">
                            <i className="fas fa-fw fa-table fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
         </div> 
        )
    }
}

export default InfoTotalProduct;