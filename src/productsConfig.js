
const productsArray = [
    {
        id: '1',
        title: 'Nike Dunk Low',
        color: 'Black White',
        price: 
            {
                czk: '4999',
                eur: '179.99',
            }
        ,
        stock: '3',
        imgMain: 'https://cdn.shopify.com/s/files/1/0609/4143/5103/products/nike-dunk-low-retro-white-black-2021-1-1000.png?v=1641689123', //test Img,
        images: [
            'firstURL',
            'secondURL'
        ]
    },
    {
        id: '2',
        title: 'Nike Air Force 1 Low',
        color: 'Purple Skeleton Halloween',
        price: 
            {
                czk: '4999',
                eur: '179.99',
            }
        ,
        stock: '2',
        imgMain: 'https://cdn.shopify.com/s/files/1/0609/4143/5103/products/nike-air-force-1-low-purple-skeleton-2-1000_900x.png?v=1641919670'

    },
    {
        id: '3',
        title: 'Nike Air Jordan 1 ELEVATE SE',
        color: 'white/university blue/white onyx',
        price: 
            {
                czk: '4999',
                eur: '179.99',
            }
        ,
        stock: '2',
        imgMain: 'https://cdn.shopify.com/s/files/1/0609/4143/5103/products/air-jordan-1-mid-light-smoke-grey-anthracite-1-1000_900x.png?v=1645623346'

    },
    {
        id: '4',
        title: 'Nike Air Jordan 1 Mid',
        color: 'Light Smoke Grey Anthracite',
        price: 
            {
                czk: '4999',
                eur: '179.99',
            }
        ,
        stock: '2',
        imgMain: 'https://cdn.shopify.com/s/files/1/0609/4143/5103/products/air-jordan-1-mid-light-smoke-grey-anthracite-1-1000_900x.png?v=1645623346'

    },
    {
        id: '5',
        title: 'Nike Air Force 1 Low',
        color: 'Light Smoke Grey Anthracite',
        price: 
            {
                czk: '4999',
                eur: '179.99',
            }
        ,
        imgMain: 'https://cdn.shopify.com/s/files/1/0609/4143/5103/products/nike-air-force-1-low-purple-skeleton-2-1000_900x.png?v=1641919670'

    },
    {
        id: '6',
        title: 'Nike Air Force 1 Low',
        color: 'Light Smoke Grey Anthracite',
        price: 
            {
                czk: '4999',
                eur: '179.99',
            }
        ,
        imgMain: 'https://cdn.shopify.com/s/files/1/0609/4143/5103/products/nike-air-force-1-low-purple-skeleton-2-1000_900x.png?v=1641919670'

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
