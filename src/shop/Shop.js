import ProductCategory from './product/category/productCategory';
import { t } from 'i18next';

export default function Shop() {
    return (
        <>
            <main id='main'>
                <div className='main-content'>
                    <div id='shop'>
                        <h1 className="-mc-title text-center">
                            {t('shop.welcome.firstPart')}
                                <br className='xs-mob'/>
                                <span className='xs-none'>&nbsp;</span>
                            {t('shop.welcome.secondPart')}
                        </h1>

                        <div className='-mc-shop'>
                            {/* <ProductCategory /> */}

                            <div className='-mc-important-note section text-center'>
                                <p className='bold capitalize'>{t('shop.note.header')}</p>
                                <p>{t('shop.note.text')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
