const $imageItems = [
    '/images/gallery/tees/tee.png',
    '/images/gallery/tees/tee2.png',
    '/images/gallery/tees/tee3.png',
    '/images/gallery/tees/shorts.png',
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

        imagePreview: '/images/gallery/tees/tee.png',
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
        console.log('Product data for ID: ' + id + 'not found.');
    }

    return productData;
}

export { productsArray, getProductData };
