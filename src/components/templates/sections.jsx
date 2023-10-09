import React from "react";
import './../styles/styles.scss';


function Sections (props) {
    return(
        <section className="sectionServ">
            <h3 className="sectionTitulo">{props.titulo}</h3>
            <div className="iconos">
                {props.icono}
            </div>
            <p className="sectionDescripcion">
                {props.descripcion}
            </p>
        </section>
    )
}


export default Sections;