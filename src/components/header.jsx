import React from "react";
import './styles/styles.scss';


function Header(props) {
    return(
        <header className="header">
            <h2 className="header__h2">{props.nombre} <span>Freelancer</span></h2>
        </header>
    )
}


export default Header;