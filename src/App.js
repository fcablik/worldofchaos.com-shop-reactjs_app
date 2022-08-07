import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

import './App.css';

import Home from './components/pages/_dev/Home';
import About from './components/pages/_dev/About';
import Contact from './components/pages/_dev/Contact';
import Skills from './components/pages/_dev/Skills';
import FullExperience from './components/pages/_dev/FullExperience';


function App() {
    return (
        <>
            <Router>
                <Header />

                <main id='main'>
                    <div className='container'>

                        <Routes>
                            <Route exact path="/" element={<Home />}/>
                            <Route path='/about' element={<About />} />
                            <Route path='/contact' element={<Contact />} />
                            <Route path='/skill-set' element={<Skills />} />
                            <Route path='/full-experience' element={<FullExperience />} />
                        </Routes>

                    </div>
                </main>

                <Navigation />
                <Footer />
            </Router>
        </>
    )
}

export default App
