import React from 'react';
import '../assets/styles/Registro.scss';

const Registro = () =>(
    <>
  <header className="header">
    <img className="header__img" src="../assets/logo-platzi-video-BW2.png" alt="Platzi Video"/>
  </header>
  <section className="register">
    <section className="register__container">
      <h2>Regístrate</h2>
      <form className="register__container--form"/>
        <input className="input" type="text" placeholder="Nombre"/>
        <input className="input" type="text" placeholder="Correo"/>
        <input className="input" type="password" placeholder="Contraseña"/>
        <button className="button">Registrarme</button>
    
      <a href="">Iniciar sesión</a>
    </section>
  </section>
  <footer className="footer">
    <a href="/">Terminos de uso</a>
    <a href="/">Declaración de privacidad</a>
    <a href="/">Centro de ayuda</a>
  </footer>
  </>
);
export default Registro;