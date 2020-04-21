import  React from 'react';
import '../assets/styles/components/Layout.scss';
import Header from '../components/Header';
import Search from '../components/Search';
//import API from '../components/API';
import Footer from '../components/Footer';

const Layout = () =>(
    <div className="App">
	<Header/>
	<Search/>
	<Footer/>

   </div>
);
 export default Layout;