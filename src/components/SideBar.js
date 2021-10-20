import React from 'react';
import '../assets/css/mediaqueries.css';
import '../assets/css/style.css';
import image from '../assets/images/versionHorizontal.png';
import image2 from '../assets/images/versionLimpia.png';
// Importamos Link y Router para enlazar y renderizar
import { Link } from 'react-router-dom';

function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="img-fluid d-block d-sm-none" src={image} alt="Digital House"/>
                        <img className="img-fluid d-none d-sm-block" src={image2} alt="Digital House"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-tachometer-alt"></i>
                        <span id="title-dashboard">Dashboard PetItMx </span>
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/genres">
                        <i className="fas fa-users"></i>
                        <span>Users </span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/lastmovie">
                        <i className="fas fa-folder-plus"></i>
                        <span>Last Product</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <Link className="nav-link"  to="/productsList">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Lista de Productos</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <Link className="nav-link"  to="/subcategories">
                        <i className="fas fa-list-alt"></i>
                        <span>Subcategorías</span>
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Functions</div>
            
                <li className="nav-item nav-link">
                    <Link className="nav-link" to="/search">
                        <i className="fas fa-search"></i>
                        <span>Search Product</span></Link>
                </li>

            </ul>
            {/*<!-- End of Sidebar -->*/}
            
            


        </React.Fragment>
    )
}
export default SideBar;