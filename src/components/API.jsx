import React from 'react';
import '../index.js';

const API = () => {
    return(  
        <div>
            <button onclick="getschedules()">Obtener Horarios</button>
            <div id='schedules'></div>
            <button onclick="getdays()">Obtener Dias</button>
            <div id='days'></div>
            <button onclick="getmedicines()">Obtener Medicinas</button>
            <div id='medicines'></div>
            <button onclick="getusers()">Obtener Horarios</button>
            <div id='users'></div>
        </div>
    );
};
export default API;