import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';

 
/*import Header from '../src/components/Header';
ReactDOM.render(<Header/>, document.getElementById('root'));*/


/*import Search from '../src/components/Search';
ReactDOM.render(<Search/>, document.getElementById('root'));*/


/*import Footer from '../src/components/Footer';
ReactDOM.render(<Footer/>, document.getElementById('root'));*/
import Layout from '../src/Containers/Layout';
ReactDOM.render(<Layout/>, document.getElementById('root'));

//import Login from '../src/Containers/Login';
//ReactDOM.render(<Login/>, document.getElementById('root'));

//import Registro from '../src/components/Registro';
//ReactDOM.render(<Registro/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
