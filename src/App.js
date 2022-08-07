import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

import Home from './components/pages/dev/Home';
import About from './components/pages/dev/About';
import Contact from './components/pages/dev/Contact';
import Skills from './components/pages/dev/Skills';
import FullExperience from './components/pages/dev/FullExperience';


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
