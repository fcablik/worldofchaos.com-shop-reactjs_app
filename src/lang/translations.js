import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    // detect user language (learn more: https://github.com/i18next/i18next-browser-languageDetector)
    .use(LanguageDetector)

    // pass the i18n instance to react-i18next.
    .use(initReactI18next)

    // init i18next (for all options read: https://www.i18next.com/overview/configuration-options)
    .init({
        debug: true,
        fallbackLng: 'en',
        resources: {
            en: {
                translation: {
                    store: {
                        name: "world of chaos",
                        currency: {
                            code: "eur",
                            shortText: '€'
                        }
                    },
                    header: {
                        cart: "Cart"
                    },
                    shop: {
                        welcome: {
                            firstPart: "welcome to the",
                            secondPart: "woch store"
                        },
                        note: {
                            header: 'important customer note:',
                            text: 'All our products are brand new &\u00a0authenticated -\u00a0we never sell used, fake or damaged goods!'
                        }
                    }
                }
            },
            cs: {
                translation: {
                    store: {
                        name: "world of chaos",
                        currency: {
                            code: "czk",
                            shortText: 'Kč'
                        }
                    },
                    header: {
                        cart: "Košík"
                    },
                    shop: {
                        note: {
                            header: 'dulezita poznamka:',
                            text: 'Vsechny nase produkty jsou zcela nove &\u00a0overeny\u00a0(autentikovany) -\u00a0nikdy neprodavame pouzite, padelane nebo\u00a0poskozene zbozi!'
                        } 
                    }
                }
            }
        }
    });

export default i18n;