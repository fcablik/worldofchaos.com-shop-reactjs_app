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

// english EN
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
                            shopOffline: 'The Store is closed at the moment.',
                            firstPart: "“welcome to the chaos”",
                            secondPart: "collection"
                        },
                        note: {
                            header: 'important customer note:',
                            text: 'All our products are brand new -\u00a0we never sell used, fake or damaged goods!'
                        }
                    }
                }
            },

// czech CZ
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
                        welcome: {
                            shopOffline: 'Obchod je nyni uzavren.',
                            firstPart: "“welcome to the chaos”",
                            secondPart: "kolekce"
                        },
                        note: {
                            header: 'dulezita poznamka:',
                            text: 'Vsechny nase produkty jsou zcela nove &\u00a0overeny\u00a0(autentikovany) -\u00a0nikdy neprodavame pouzite, padelane nebo\u00a0poskozene zbozi!'
                        } 
                    }
                }
            },

// slovak SK
            sk: {
                translation: {
                    store: {
                        name: "world of chaos",
                        currency: {
                            code: "eur",
                            shortText: '€'
                        }
                    },
                    header: {
                        cart: "Košík"
                    },
                    shop: {
                        welcome: {
                            secondPart: "kolekcia"
                        },
                        note: {
                            header: 'dôležitá poznámka:',
                            text: 'Vsetko nase zbozi je nove &\u00a0overene\u00a0(autentikovane) -\u00a0nikdy nepredavame pouzite, padelane alebo\u00a0poskozene zbozi!'
                        } 
                    }
                }
            }
        }
    });

export default i18n;
