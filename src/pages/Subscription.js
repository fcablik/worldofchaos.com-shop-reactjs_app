import SubscriptionForm from '../components/subcriptionForm';
import { t } from 'i18next';

export default function Subscription() {
    return (
        <>
            <main id='main'>
                <div className='main-content'>

                    <div id='subscription'>
                        <h1 id='form-title' className="-mc-title text-center -highlight">{t('page.stayintouch.page_title')}</h1>

                        <div className='-mc-component-area'>
                            <div className='section' id='sub-form'>
                                <SubscriptionForm />
                            </div>
                            
                            <div id='form-text' className='section text-center'>
                                <p>{t('page.stayintouch.info.a')}<br/></p>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </>
    );
}
