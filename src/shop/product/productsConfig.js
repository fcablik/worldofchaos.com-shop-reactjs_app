const $imageItems = [
    'https://theworldofchaos.com/images/product/gallery/wttch-edition-darktimes-back.png',
    'https://theworldofchaos.com/images/product/gallery/wttch-edition-sand-back.png'
];

const productsArray = [
    {
        id: '1',
        title: 'wttch edition "woch"',
        color: 'dark times',
        price: 
            {
                czk: '4999',
                eur: '179.99',
            },
        stock:
        {
            s: '5',
            m: '5',
            l: '5',
            xl: '5'
        },
        imagePreview: 'https://theworldofchaos.com/images/product/gallery/wttch-edition-darktimes-back.png',
        gallery: $imageItems,
        shortDescription: '',
        description: '',
    },
    {
        id: '2',
        title: 'wttch edition "woch"',
        color: 'sand life',
        price: 
            {
                czk: '4999',
                eur: '179.99',
            },
        stock: '7',
        imagePreview: 'https://theworldofchaos.com/images/product/gallery/wttch-edition-sand-back.png',
        gallery: $imageItems,
        shortDescription: '',
        description: ''
    },
    {
        id: '3',
        title: 'wttch edition "forest fire"',
        color: 'dark times',
        price: 
            {
                czk: '4999',
                eur: '179.99',
            },
        stock: '2',
        imagePreview: 'https://theworldofchaos.com/images/product/gallery/wttc-edition-forestfire-darktimes-back.png',
        gallery: $imageItems,
        shortDescription: '',
        description: ''
    },
    {
        id: '4',
        title: 'wttch edition "forest fire"',
        color: 'sand life',
        price: 
            {
                czk: '4999',
                eur: '179.99',
            },
        stock: '16',
        imagePreview: 'https://theworldofchaos.com/images/product/gallery/wttc-edition-forestfire-sand-back.png',
        gallery: $imageItems,
        shortDescription: '',
        description: ''
    },


    {
        id: '6',
        title: 'nb edition',
        color: 'dark times',
        price: 
            {
                czk: '4999',
                eur: '179.99',
            },
        stock: '16',
        imagePreview: 'https://theworldofchaos.com/images/product/gallery/back-base-darkness.png',
        gallery: $imageItems,
        shortDescription: '',
        description: ''
    },
    {
        id: '8',
        title: 'nb edition',
        color: 'sand life',
        price: 
            {
                czk: '4999',
                eur: '179.99',
            },
        stock: '16',
        imagePreview: 'https://theworldofchaos.com/images/product/gallery/back-base-sand.png',
        gallery: $imageItems,
        shortDescription: '',
        description: ''
    }
];


function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData === undefined) {
        console.log('Product data do not exist for ID: ' + id);
    }

    return productData;
}

export { productsArray, getProductData };
