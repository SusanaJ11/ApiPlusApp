// IMportamos React 
import React, { Component } from 'react';
import axios from 'axios';
import { List, Card } from 'antd';

/* creamos una funcion con una  constante pero este es un return 
  implicito esto significa que no necesito poner el return react por defecto ya sabe que es un return directo
  */
class Schedules extends Component {
  state = {
    scheduleData: [],
    img: []
  }

  componentDidMount () {
    axios.get('http://localhost:8000/api/horario')
      .then( res => {
        var result = res.data;
        var results = result.data;
        console.log( results );

        this.setState( {
            scheduleData: results
        } )

      } )
      .catch( error => {
        console.log( error );
      } );

  }

  render () {

    const { scheduleData } = this.state;
    return (
      <center>
      < div >
        <h1 id="schedules">Horarios</h1>
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
          dataSource={scheduleData}
          renderItem={item => (
            <List.Item>
              <Card > 
                <strong>Hora: </strong>{item.hora_h}
                <br></br>
                <strong>Color: </strong>{item.color}
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
export default Schedules;