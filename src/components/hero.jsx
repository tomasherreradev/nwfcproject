import React from 'react';
import './styles/styles.scss';


function Hero(props) {
    const { titulo } = props; // Destructuramos el prop titulo
    const tituloMostrar = titulo || "Título Predeterminado"; // Usamos un valor predeterminado si no se proporciona titulo

    return(
        <section className='heroContainer'>
            <div className='backgroundImage '>
                <div className='heroInfo'>
                    <h2 className='heroTitulo'>{tituloMostrar}</h2>
                    <p className='heroLoc'>
                    <svg className='heroIcon'
                    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#ff9300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#ff9300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g>
                    </svg>
                    La Rioja, Argentina
                    </p>
                    <a className='heroBtn' href="#">Contacto</a>
                </div>
            </div>
        </section>
    );
}

export default Hero;