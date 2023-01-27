const $imageItems = [
    'https://theworldofchaos.com/images/product/gallery/wttch-edition-darktimes-back.png',
    'https://theworldofchaos.com/images/product/gallery/wttch-edition-sand-back.png'
];

const productsArray = [
    {
        id: '1',
        title: 'wttch edition "woch"',
        color: 'dark times',
        price: {
            eur: '179.99',
        },
        stock: 8,

        imagePreview: 'https://theworldofchaos.com/images/product/gallery/wttch-edition-darktimes-back.png',
        gallery: $imageItems,

        shortDescription: 'seo',
        description_main: {
            en: 'Welcome To The Chaos collection brings the very first pieces of 100% organic cotton hoodies.',
        },
        description_points: {
            en: [
                'Custom designed',
                'Sustainable fabrics',
                'Made in Europe',
            ],
        },

        variants: [
            {
                code: 11,
                stock: 2,
                name: 'S',
            },
            {
                code: 12,
                stock: 3,
                name: 'M',
            },
            {
                code: 13,
                stock: 4,
                name: 'L',
            },
            {
                code: 14,
                stock: 1,
                name: 'XL',
            },
        ],
    },
];


function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData === undefined) {
        console.log('Product data do not exist for ID: ' + id);
    }

    return productData;
}

export { productsArray, getProductData };
