import React from "react";
import './../styles/styles.css';

function Footer(props) {
    return(
        <div className="footer">
            <p className="footerCopy">Todos los derechos reservados a <span className="footerSpan" >{props.nombre}</span></p>
        </div>
    )
}


export default Footer;