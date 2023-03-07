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
                    shop: {
                        title: 'shop',
                        welcome: {
                            shopOffline: 'The Store is closed at the moment.',
                            firstPart: "“welcome to the chaos”",
                            secondPart: "collection"
                        },
                        note: {
                            header: 'important customer note:',
                            text: 'All our products are always brand new -\u00a0we never sell used or damaged goods!'
                        }
                    },
                    page: {
                        contact: {
                            title: 'Contact',
                            shortText: 'World Of Chaos is about responsibility.',
                            text: {
                                intro: {
                                    a: 'If you find yourself having any problems, you can',
                                    b: 'contact us',
                                    c: 'through:'
                                },
                                mail: {
                                    title: 'Mail:',
                                    info: {
                                        holder: 'info@wochlife.com',
                                        href: 'mailto:info@wochlife.com',
                                    },
                                    filip: {
                                        holder: 'filip@wochlife.com',
                                        href: 'mailto:filip@wochlife.com',
                                    }
                                }, 
                                tiktok: {
                                    title: 'TikTok:',
                                    url: 'https://tiktok.com/@wochlife'
                                },
                                insta: {
                                    title: 'Instagram:',
                                    url: 'https://instagram.com/wochlife',
                                    owner_url: 'https://www.instagram.com/husslephil/',
                                },
                                ytb: {
                                    title: 'YouTube:',
                                    url: 'https://youtube.com/@wochlife'
                                },
                                global: {
                                    text: 'Global information:',
                                    company: 'World Of Chaos',
                                    reg_no: {
                                        text: 'CZ Business Reg. No.:',
                                        number: '17460913'
                                    },
                                    iban: {
                                        title: 'IBAN:',
                                        number: 'LT023250086995759630'
                                    },
                                    operated: 'Operated by:',
                                    based: {
                                        title: 'Based in:',
                                        country: 'Czech Republic'
                                    },
                                },
                            },
                            socials_holder: '@wochlife',
                            socials_owner: '@husslephil'
                        },
                        stayintouch: {
                            title: 'stay in touch',
                            page_title: 'subscribe to stay in touch!',
                            info: {
                                a: "Sign in to make sure you don't miss",
                                b: 'any important updates or drops. :-)',
                            },
                            form: {
                                mail: 'your mail address',
                                country: 'select your country',
                                send: 'submit',
                                success: "<p>Thanks for subscribing! Now you won't miss anything. :-)</p>"
                            }
                        },
                        terms: {
                            title: 'Terms & Conditions',
                        },
                        sustainability: {
                            title: 'sustainability',
                            shortText: 'Why do we encourage our customers to look for more sustainable ways to style?',
                            text: {
                                a1: 'The world is getting faster & chaotic, and so are the industries. The fashion industry is unfortunately one of those that have lost its sustainability and ethical values. As these values are very important, we want the sustainable fashion to grow and therefor we spread awareness of these core problems - which can be fixed.',
                                a2: 'We are on a journey to help eliminate the chaos in the world. Be a part of this!',
                                b1: 'Good To Know',
                                b2: 'Ethics and sustainability values roadmap:',
                                b3: {
                                    _1: '1. Cotton growing',
                                    _2: '2. Cotton - processing',
                                    _3: '3. Cotton - Fabric manufacturing',
                                    _4: '4. Fabric - processing',
                                    _5: '5. Shipping Fabrics',
                                    _6: '6. Manufacturing products',
                                    _7: '7. Printing',
                                    _8: '8. Customer delivery',
                                },
                                c1: 'It is an approach which guards the whole process. In an ideal world, everybody would do their best to maximize the benefits to the industry and society, and at the same time, minimize the impact on the environment and humanity.',
                                c2: 'And that is exactly what society should aim for.',
                                c3: 'Namely:',
                                c4: {
                                    _1: 'Designing',
                                    _2: 'Sourcing',
                                    _3: 'Manufacturing',
                                    _4: 'Storing',
                                    _5: 'Shipping',
                                    _6: 'Store manipulation & storage',

                                },
                                d1: "Ethical means morally right and acceptable. Therefore, ethical and sustainable fashion does not start from manufacturing clothes. It starts from the cotton fields and ends in consumer's wardrobe.",
                            }
                        },
                        notfound: {
                            title: '404 not found',
                            btn: {
                                home: 'Go back Home',
                                store: 'Go to Store',
                            },
                        },
                        closed: {
                            title: 'closed atm.',
                        },
                    },
                    component: {
                        header: {
                            cart: 'Cart',
                        },
                        footer: {
                            message: 'The Store is closed ATM.',
                        },
                        cart: {
                            checkout: 'go to checkout',
                            total: 'Total:',
                            backtoshop: 'Back to shop',
                            items: {
                                info: 'items in your cart:',
                                empty: 'no items in cart :-(',
                            },

                            product: {

                            },
                        },
                        product: {
                            quantity: {
                                limit: "can't add more",
                                remove: {
                                    symbol: '-',
                                    text: 'remove',
                                    cart: 'remove from cart',
                                },
                                add: {
                                    symbol: '+',
                                    text: 'add',
                                    cart: 'add to cart',
                                },
                            },
                            detail: {
                                color: 'color:',
                                description: 'description',
                                close: 'close',
                                variant: 'Variant Choice',
                                cart: 'In Cart:',

                            }
                        },
                    },
                }
            },

        // czech CZ
            // cs: {
            //     translation: {
            //         store: {
            //             name: "world of chaos",
            //             currency: {
            //                 code: "czk",
            //                 shortText: 'Kč'
            //             }
            //         },
            //         header: {
            //             cart: "Košík"
            //         },
            //         shop: {
            //             welcome: {
            //                 shopOffline: 'Obchod je nyni uzavren.',
            //                 firstPart: "“welcome to the chaos”",
            //                 secondPart: "kolekce"
            //             },
            //             note: {
            //                 header: 'dulezita poznamka:',
            //                 text: 'Vsechny nase produkty jsou vzdy zcela nove &\u00a0overeny\u00a0(autentikovany) -\u00a0nikdy neprodavame pouzite nebo\u00a0poskozene zbozi!'
            //             } 
            //         }
            //     }
            // },

        // slovak SK
            // sk: {
            //     translation: {
            //         store: {
            //             name: "world of chaos",
            //             currency: {
            //                 code: "eur",
            //                 shortText: '€'
            //             }
            //         },
            //         header: {
            //             cart: "Košík"
            //         },
            //         shop: {
            //             welcome: {
            //                 shopOffline: 'Obchod je teraz uzatvoreny.',
            //                 firstPart: "“welcome to the chaos”",
            //                 secondPart: "kolekcia"
            //             },
            //             note: {
            //                 header: 'dôležitá poznámka:',
            //                 text: 'Vsetko nase zbozi je vzdy nove &\u00a0overene\u00a0(autentikovane) -\u00a0nikdy nepredavame pouzite alebo\u00a0poskodene zbozi!'
            //             } 
            //         }
            //     }
            // }
        }
    });

export default i18n;
