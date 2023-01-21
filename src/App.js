import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.min.css';

// import Cursor from './components/Cursor';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';

import PageNotFound from './pages/404';
import Home from './pages/Home';

import Shop from './shop/Shop';
import Cart from './shop/cart/Cart';

import Contact from './pages/Contact';
import Subscription from './pages/Subscription';
import Sustainability from './pages/Sustainability';
// import TermsConditions from './pages/TermsConditions';

import CartProvider from './shop/cart/cartContext';

import { useTranslation } from 'react-i18next';

const lngs = {
    en: { nativeName: 'en' },
    cs: { nativeName: 'cz' },
    sk: { nativeName: 'sk' }
};

function App() {
    const { i18n } = useTranslation();

    return (
        <>
            <div id='lang-switch'>
                {Object.keys(lngs).map((lng) => (
                    <button
                        key={lng}
                        className='button-px-highlight bold capitalize'
                        style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} 
                        type="submit"
                        onClick={() => {
                            i18n.changeLanguage(lng);
                        }}
                    >
                        {lngs[lng].nativeName}
                    </button>
                ))}
            </div>

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
