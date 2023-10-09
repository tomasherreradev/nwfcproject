import React, { useState }  from "react";
import './styles/styles.css';

function Formulario() {

    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [correo, setCorreo] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [errores, setErrores] = useState({});

    const validarFormulario = () => {
        const errores = {};

        if (!nombre) {
            errores.nombre = "El nombre es obligatorio";
        }

        if (!telefono) {
            errores.telefono = "El teléfono es obligatorio";
        }

        if (!correo) {
            errores.correo = "El correo es necesario";
        }
        
        if (!mensaje) {
            errores.mensaje = "Debes escribir un mensaje";
        }
        

        return errores;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errores = validarFormulario();

        if (Object.keys(errores).length === 0) {
            // El formulario es válido, aquí puedes enviar los datos
            const formulario = document.querySelector('.formulario');
            const alertaExito = document.createElement('P');
            alertaExito.classList.add('exitoMensaje');
            alertaExito.textContent = 'Enviando...';

            formulario.appendChild(alertaExito);

            setTimeout(() => {
                alertaExito.remove();
                location.reload();
            }, 2000);
        } else {
            // El formulario tiene errores, muestra los mensajes de error
            setErrores(errores);
        }
    };


    return(
        <section className="formularioContainer">
            <h2 className="formTitulo">Contacto</h2>

            <form className="formulario" action="" onSubmit={handleSubmit}>
                <fieldset>
                    <legend className="formLegend">Contáctame llenando estos campos:</legend>

                    {errores.nombre && <p className="errorMensaje">{errores.nombre}</p>}
                    {errores.telefono && <p className="errorMensaje">{errores.telefono}</p>}
                    {errores.correo && <p className="errorMensaje">{errores.correo}</p>}
                    {errores.mensaje && <p className="errorMensaje">{errores.mensaje}</p>}


                    <div className="contenedorCampos">
                        <div className="campo">
                            <label className="formLabel" htmlFor="nombre">Nombre</label>
                            <input type="text" id="nombre" placeholder="Tu nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                        </div>

                        <div className="campo">
                            <label className="formLabel" htmlFor="telefono">Teléfono</label>
                            <input type="tel" id="telefono" placeholder="Tu teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)}/>
                        </div>

                        <div className="campo">
                            <label className="formLabel" htmlFor="correo">Correo</label>
                            <input type="text" id="correo" placeholder="Tu correo" value={correo} onChange={(e) => setCorreo(e.target.value)}/>
                        </div>

                        <div className="campo">
                            <label className="formLabel" htmlFor="nombre" >Mensaje</label>
                            <textarea value={mensaje} onChange={(e) => setMensaje(e.target.value)}></textarea> 
                        </div>
        
                    </div>

                    <div className="campoSubmit">
                        <input className="formSubmit" type="submit" value={'Enviar'}/>
                    </div>


                </fieldset>
            </form>
        </section>
    )
}


export default Formulario;