//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

import React from 'react'
import Navbar from './Components/Navbar'
//import Home from './Components/Home';
import { Outlet } from 'react-router-dom';

const App = () => {
    return (
        <>
        <div className='bg-[#576a86]'>
        <Navbar></Navbar>
        <Outlet></Outlet>
        </div>
       </>
    );
}

export default App
