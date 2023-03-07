import { NavLink } from 'react-router-dom';
import { t } from 'i18next';

export default function PageNotFound() {
    return (
        <>
            <main id='main'>
                <div className='main-content'>
                    <div id='error404'>
                        <h1 className="-mc-title text-center">{t('page.notfound.title')}</h1>
                        <NavLink className="btn-back-home" to="/">{t('page.notfound.btn.home')}</NavLink>
                        {/* <NavLink className="btn-404" to="/shop">{t('page.notfound.btn.store')}</NavLink> */}
                    </div>
                </div>
            </main>
        </>
    );
}
