import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';

// import Header from './Header';
// import Footer from './Footer';
// import Navigation from './Navigation';

import { Link } from 'react-router-dom';
import AppDev from './components/_dev/_App';
import HomeDev from './components/pages/_dev/HomeDev';

function App() {
    return (
        <>

            <Router>

                <main id='main'>
                    <div className='container'>

                        <Routes>
                            <Route exact path="/" element={<HomeDev />}/>
                            <Route exact path="/dev/" page={<AppDev />}/>
                        </Routes>

                        <Link to="/" className='-cc-text'>
                            <sup>00</sup>HOME
                        </Link>
                        <Link to="/dev/" className='-cc-text'>
                            <sup>00</sup>TEXT HERE
                        </Link>

                    </div>
                </main>

            </Router>

        </>
    )
}

export default App;
