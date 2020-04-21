// IMportamos React 
import React, { Component } from 'react';
import axios from 'axios';
import { List, Card } from 'antd';

/* creamos una funcion con una  constante pero este es un return 
  implicito esto significa que no necesito poner el return react por defecto ya sabe que es un return directo
  */
class Users extends Component {
  state = {
    userData: [],
    img: []
  }

  componentDidMount () {
    axios.get('http://localhost:8000/api/usuario')
      .then( res => {
        var result = res.data;
        var results = result.data;
        console.log( results );

        this.setState( {
            userData: results
        } )

      } )
      .catch( error => {
        console.log( error );
      } );

  }

  render () {

    const { userData } = this.state;
    return (
      <center>
      < div >
        <h1 id="users">Usuarios</h1>
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 6,
            xxl: 3,
          }}
          dataSource={userData}
          renderItem={item => (
            <List.Item>
              <Card > 
                <strong>Nombre: </strong>{item.nom_u}
                <br></br>
                <strong>Apellido Paterno: </strong>{item.app_u}
                <br></br>
                <strong>Apellido Materno: </strong>{item.apm_u}
                <br></br>
                <strong>Fecha de Nacimiento: </strong>{item.fn_u}
                <br></br>
                <strong>Genero: </strong>{item.genero_u}
                <br></br>
                <strong>Calle: </strong>{item.calle_u}
                <br></br>
                <strong>Correo: </strong>{item.correo}
                <br></br>
                <strong>Password: </strong>{item.password}
                <br></br>
                <strong>Tipo de Usuario: </strong>{item.typeuser}
                <br></br><br></br>
              </Card>
            </List.Item>
          )}
        />,
        {/* <ul>
          {this.state.scheduleData.map( schedule =>
            <li key={schedule.id}>
              {schedule.hora_h}
            </li>
          )}
          </ul> */}
      </div >
      </center>

    );

  }
};

/** exportamos el componente presentational aquellos que solo tienen una parte pequeÃ±a que solo se 
 * ve en el navegador de html
 */
export default Users;