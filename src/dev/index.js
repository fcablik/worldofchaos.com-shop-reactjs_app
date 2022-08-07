import React from 'react';
import Header from './dev/components/Header';
import Footer from './dev/components/Footer';
import Navigation from './dev/components/Navigation';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

import Home from './dev/components/pages/Home';
import About from './dev/components/pages/About';
import Contact from './dev/components/pages/Contact';
import Skills from './dev/components/pages/Skills';
import FullExperience from './dev/components/pages/FullExperience';


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
