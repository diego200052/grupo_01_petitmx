import React, { Component } from 'react';

class LastUserInDb extends Component {
    /* --- Aca arrancamos dandole el estado */
    constructor(props) {
        super(props);
        this.state = {
            usuario: {first_name: "No hay usuarios registrados.", last_name: "", logins: {email:""}},
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
        if(data.users.length === 0) {
            this.setState(
                {
                    usuario: {first_name: "No hay usuarios registrados.", last_name: "", logins: {email:""}},
                }
            );
        } else {
            let ultimoUsuario = data.users[data.users.length -1];
            this.apiCall("/api/users/" + ultimoUsuario.id_user, this.showUser);
        }
    }

    showUser = (user) => {
        console.log(user);
        this.setState(
            {
                usuario: user
            }
        );
    }

    /* Cuando el componente carga, recien ahi llamamos a la API */
    componentDidMount(){
        console.log("Me monté!!");
        this.getUsers()
    }

    /* Aca va la funcion a la q llamamos desde el componentDidMount */
    getUsers(){
        this.apiCall("/api/users", this.showUsers)
    }

    render(){
        return(
        <div className="col-sm-12 col-lg-5 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Último usuario en la base de datos</h5>
                </div>
                <div className="card-body">
                    <h3 className="text-center">{`${this.state.usuario.first_name} ${this.state.usuario.last_name}`}</h3>
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={`http://localhost:3030${this.state.usuario.avatar}`}/>
                    </div>
                    <h4 className="text-center">Email:</h4><h5 className="text-center">{`${this.state.usuario.logins.email}`}</h5>
                    {/*<a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>*/}
                </div>
            </div>
        </div>
    )}
}

export default LastUserInDb;
