import React from 'react';
import '../assets/styles/components/Menu.scss';

const Menu = ()=>{
    return(
		<div id="header">
			<ul className="nav">
				<li><a href="">Inicio</a></li>
				<li><a href="">Tablas</a>
					<ul>
						<li><a href="">Usuarios</a></li>
						<li><a href="">Medicamentos</a></li>
						<li><a href="">Horarios</a></li>
						<li><a href="">Dias</a>

						</li>
					</ul>
				</li>
				<li><a href="">Contacto</a></li>
                <li><a href="">Cerrar sesión</a></li>

			</ul>
		</div>

);
};

export default Menu;