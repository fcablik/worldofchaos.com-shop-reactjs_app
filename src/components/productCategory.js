import { productsArray } from '../productsConfig';
import ProductCard from '../components/productCard';

export default function ProductCategory() {
    return (
        <div id='product-category' className='product-category-content'>
            {productsArray.map((product, idx) => (
                <div key={idx}>
                    <ProductCard product={product} />
                </div>
            ))}
        </div>
    );
}
