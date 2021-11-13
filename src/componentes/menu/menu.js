import React from 'react';

const navmenu = () => {
    return(
        <div id="menu">
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-rigth">
                <li><a href="/index.html" className="nav-link px-2">Inicio</a></li>
                <li><a href="/educacion.html" className="nav-link px-2">Educación</a></li>
                <li><a href="/experiencia.html" className="nav-link px-2">Experiencia</a></li>
            </ul>
        </div>
    );
}

export default navmenu;