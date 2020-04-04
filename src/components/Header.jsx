import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/plussapp.png';
import userIcon from '../assets/static/user-icon.png'


const Header = () => {
    return(

        <div className='header'>

    <header className="header">

    <img src={logo} className="header__img"  alt="plussapp" />

    <div className="header__menu">

      <div className="header__menu--profile">

        <img src={userIcon} alt="" />

        <p>Perfil</p>

      </div>

      <ul>

        <li><a href="/">Cuenta</a></li>
        <li><a href="/">Cerrar Sesión</a></li>

      </ul>
    </div>

  </header>
        </div>
    );
};
export default Header;