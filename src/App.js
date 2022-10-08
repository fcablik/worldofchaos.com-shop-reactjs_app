import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import Contact from './components/pages/Contact';
import Sustainability from './components/pages/Sustainability';
import TermsConditions from './components/pages/TermsConditions';

function App() {
    return (
        <>
            <Router>
                <Header />
                <ScrollToTop />

                    <Routes>
                        <Route exact path="/" element={<Home />}/>
                        <Route path='/shop' element={<Shop />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/sustainability' element={<Sustainability />} />
                        <Route path='/terms-conditions' element={<TermsConditions />} />
                    </Routes>

                <Footer />
            </Router>
        </>
    )
}

export default App;
