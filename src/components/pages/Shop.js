import ProductCategory from '../productCategory';

export default function Shop() {
    return (
        <>
            <main id='main'>
                <div className='main-content'>
                    <div id='shop'>
                        <h1 className="-mc-title -text-center">
                            welcome to the
                                <br className='xs-mob'/>
                                <span className='xs-none'>&nbsp;</span>
                            woch store
                        </h1>

                        <div className='-mc-shop'>
                            <ProductCategory />

                            <div className='-mc-important-note section -text-center'>
                                <p className='bold capitalize'>important customer note:</p>
                                <p>All our products are brand new &&nbsp;authenticated - we never sell used, fake or damaged goods!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
