import React from 'react';
import imagenFondo from '../assets/images/404.png';

function NotFound(){
    return(
        <div className="text-center">
            <br/>
            <center>
                <img className="img-fluid justify-content-center" style={{width: 40 +'rem'}} src={imagenFondo} alt="404 - Not Found"/>
            </center>
        </div>
        
    )
}


export default NotFound;