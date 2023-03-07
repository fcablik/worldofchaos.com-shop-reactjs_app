import { t } from 'i18next';

export default function Contact() {
    return (
        <>
            <main id='main'>
                <div className='main-content'>

                    <div id='contact'>
                        <h1 className="-mc-title text-center">{t('page.contact.title')}</h1>

                        <div className='-mc-global'>
                            <div className='section'>
                                <h4 className='text-center'>
                                    {t('page.contact.shortText')}<br/>
                                </h4>
                            </div>

                                <br/><br/>

                            <div className='section'>
                                <p>{t('page.contact.text.intro.a')}<span className='highlight'> {t('page.contact.text.intro.b')} </span>{t('page.contact.text.intro.c')}</p>

                                <ul className='highlight-bullets'>
                                    <li>
                                        {t('page.contact.text.mail.title')}&nbsp;
                                        <a className='highlight' href={t('page.contact.text.mail.info.href')}>{t('page.contact.text.mail.info.holder')}</a>
                                    </li>
                                    <li>
                                        {t('page.contact.text.tiktok.title')}&nbsp;
                                        <a target='_blank' rel='noreferrer' className='highlight' href={t('page.contact.text.tiktok.url')}>{t('page.contact.socials_holder')}</a>
                                    </li>
                                    <li>
                                        {t('page.contact.text.insta.title')}&nbsp;
                                        <a target='_blank' rel='noreferrer' className="highlight" href={t('page.contact.text.insta.url')}>{t('page.contact.socials_holder')}</a>
                                    </li>
                                </ul>
                            </div>

                                <br/>

                            <div className='section'>
                                <p className='highlight'>{t('page.contact.text.global.text')}</p>

                                <ul className='highlight-bullets'>
                                    <li>{t('page.contact.text.global.company')}</li>
                                    <li>{t('page.contact.text.global.reg_no.text')} {t('page.contact.text.global.reg_no.number')}</li>
                                    <li>{t('page.contact.text.global.iban.title')} {t('page.contact.text.global.iban.number')}</li>
                                    <li>
                                        {t('page.contact.text.global.operated')}&nbsp;
                                        <a target='_blank' rel='noreferrer' href={t('page.contact.text.insta.owner_url')}>{t('page.contact.socials_owner')}</a>
                                    </li>
                                    <li>
                                    {t('page.contact.text.global.based.title')} {t('page.contact.text.global.based.country')}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </>
    );
}
