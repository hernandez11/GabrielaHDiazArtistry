import React from 'react';
import '../Styling/Featured.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home.js';

function Featured() {
    return (
        <div className='featured'>
            <Router>
            {/* <Navbar /> */}
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/About" element={<About/>} />
                    <Route exact path='/Gallery' element={<Gallery/>} />
                </Routes>
                {/* <Footer /> */}
            </Router>
        </div>
    )
}

export default Featured
