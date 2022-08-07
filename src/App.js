import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './components/_dev/Header';
import Footer from './components/_dev/Footer';
import Navigation from './components/_dev/Navigation';

import './App.css';

import HomeDev from './components/pages/_dev/HomeDev';
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
                            <Route exact path="/" element={<HomeDev />}/>
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
