import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.min.css';

// import Cursor from './components/Cursor';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';

import PageNotFound from './components/pages/404';
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import Cart from './components/pages/Cart';

import Contact from './components/pages/Contact';
import Subscription from './components/pages/Subscription';
import Sustainability from './components/pages/Sustainability';
// import TermsConditions from './components/pages/TermsConditions';

import CartProvider from './cartContext';

function App() {
    return (
        <>
            <CartProvider>
                    <Router>
                        {/* <Cursor/> */}
                        <ScrollToTop />
                        
                        <Header />

                            <Routes>
                                <Route exact path="/" element={<Home />}/>
                                <Route path='/shop' element={<Shop />} />
                                <Route path='/cart' element={<Cart />} />

                                <Route path='/contact' element={<Contact />} />
                                <Route path='/subscription' element={<Subscription />} />
                                <Route path='/sustainability' element={<Sustainability />} />
                                {/* <Route path='/terms-conditions' element={<TermsConditions />} /> */}

                                <Route path="*" element={<PageNotFound />} />
                            </Routes>

                        <Footer />
                    </Router>
            </CartProvider>
        </>
    )
}

export default App;
