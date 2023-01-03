import { NavLink } from 'react-router-dom';
import wochLogo from '../img/logo-woch_full-grey.svg';

import { CartContext } from '../cartContext';
import { useContext } from 'react';

import { t } from 'i18next';

function Header() {
    const cart = useContext(CartContext);
    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

    return (
        <>
            <nav className='header' id='header'>
                <div className='-hdr-column'>
                    <NavLink to='/' className='-hdr-logo'>
                        <img className='logo-full' src={wochLogo} alt={t("store.name")} height='50' />
                    </NavLink>
                </div>

                <div className='-hdr-column'>
                    <div>
                        <NavLink to='/cart'>
                            <span>{t('header.cart')} ({productsCount})</span>
                        </NavLink>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
