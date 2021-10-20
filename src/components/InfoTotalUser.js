import React, { Component } from 'react';
class InfoTotalUser extends Component{

    /* --- Aca arrancamos dandole el estado */
    constructor(props){
        super(props);
        this.state= {
            count:"",
            titulo: "Total Users in DB"
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

    showUsers = (data)=>{
        console.log(data);
        
       this.setState(
           {
            count: data.count,
            titulo: "Total de Usuarios"
           }
        )  
    }

    /* Cuando el componente carga, recien ahi llamamos a la API */
    componentDidMount(){
        console.log("Me monté!!");
        this.getUsers() 
    }

    /* Aca va la funcion a la q llamamos desde el componentDidMount */
    getUsers(){
        this.apiCall("https://petitmx.herokuapp.com/api/users", this.showUsers)
    }

    render(){
        return(
            <div className="col-md-4 mb-4">
            <div className="card border-left-warning shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">    
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-dark text-uppercase mb-1">{this.state.titulo}</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.count}</div>
                    </div>
                <div className="col-auto">
                            <i className="fas fa-user-check fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
         </div> 
        )
    }
}

export default InfoTotalUser;