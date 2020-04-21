import  React from 'react';
import '../assets/styles/components/Layout.scss';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Schedules from '../components/Schedules';
import Days from '../components/Days';
import Medicines from '../components/Medicines';
import Users from '../components/Users';
import Search from '../components/Search';
import Footer from '../components/Footer';

const Layout = () =>(
    <div className="App">
		<Header/>
		<Menu/>
		<Search/>
		<Schedules/>
		<Days/>
		<Medicines/>
		<Users/>
		<Footer/>
   </div>
);
 export default Layout;