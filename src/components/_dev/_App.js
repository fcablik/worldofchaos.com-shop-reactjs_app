import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';

import HomeDev from './../pages/_dev/HomeDev';
import About from './../pages/_dev/About';
import Contact from './../pages/_dev/Contact';
import Skills from './../pages/_dev/Skills';
import FullExperience from './../pages/_dev/FullExperience';


function AppDev() {
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

export default AppDev;
