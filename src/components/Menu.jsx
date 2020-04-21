import React from 'react';
import '../assets/styles/components/Menu.scss';

const Menu = ()=>{
    return(
		<div id="header">
			<ul className="nav">
				<li><a href="">Inicio</a></li>
				<li><a href="">Tablas</a>
					<ul>
						<li><a href="#users">Usuarios</a></li>
						<li><a href="#medicines">Medicamentos</a></li>
						<li><a href="#schedules">Horarios</a></li>
						<li><a href="#days">Dias</a>

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