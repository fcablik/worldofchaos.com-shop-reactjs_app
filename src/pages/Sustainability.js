import { t } from 'i18next';

export default function Sustainabilty() {
    return (
        <>
            <main id='main'>
                <div className='main-content'>
                    <h1 className="-mc-title text-center">{t('page.sustainability.title')}</h1>

                    <div id='contact'>
                        <div className='-mc-global'>
                            <div className='section'>
                                <h6 className='text-center'>{t('page.sustainability.shortText')}</h6>
                            </div>

                                <br/><br/>

                            <div className='section'>
                                <p>
                                    {t('page.sustainability.text.a1')}
                                        <br/><br/>
                                    {t('page.sustainability.text.a2')}
                                </p>

                                    <br/><br/>

                                <h6 className='text-center'>{t('page.sustainability.text.b1')}</h6>
                                
                                    <br/>

                                <p>{t('page.sustainability.text.b2')}</p>
                                <ul className='highlight-bullets'>
                                    <li>{t('page.sustainability.text.b3._1')}</li>
                                    <li>{t('page.sustainability.text.b3._2')}</li>
                                    <li>{t('page.sustainability.text.b3._3')}</li>
                                    <li>{t('page.sustainability.text.b3._4')}</li>
                                    <li>{t('page.sustainability.text.b3._5')}</li>
                                    <li>{t('page.sustainability.text.b3._6')}</li>
                                    <li>{t('page.sustainability.text.b3._7')}</li>
                                    <li>{t('page.sustainability.text.b3._8')}</li>
                                </ul>

                                    <br/>

                                <p>{t('page.sustainability.text.c1')}
                                    <br/>
                                    
                                </p>{t('page.sustainability.text.c2')}
                                    <br/>
                                <p>{t('page.sustainability.text.c3')}</p>
                                <ul className='highlight-bullets'>
                                    <li>{t('page.sustainability.text.c4._1')}</li>
                                    <li>{t('page.sustainability.text.c4._2')}</li>
                                    <li>{t('page.sustainability.text.c4._3')}</li>
                                    <li>{t('page.sustainability.text.c4._4')}</li>
                                    <li>{t('page.sustainability.text.c4._5')}</li>
                                    <li>{t('page.sustainability.text.c4._6')}</li>
                                    {/* / Store displaying (ye’s ideas - bags instead of re-hanging clothes) */}
                                </ul>

                                <p>{t('page.sustainability.text.d1')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
