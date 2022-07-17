import React from 'react';
import Header from './components/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Skills from './components/pages/Skills';
import FullExperience from './components/pages/FullExperience';


function App() {
    return (
        <>
            <Router>

                <Header />

                <Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/skill-set' element={<Skills />} />
                    <Route path='/full-experience' element={<FullExperience />} />
                </Routes>

            </Router>
        </>
    )
}

export default App
