import React from "react";
import './styles/styles.css';


function Nav() {
    return(
        <div className="navContainer">
            <nav className="nav">
                <a className="enlace" href="#">Inicio</a>
                <a className="enlace" href="#">Sobre Mi</a>
                <a className="enlace" href="#">Clientes</a>
                <a className="enlace" href="#">Contacto</a>
            </nav>
        </div>
    )
}

export default Nav;