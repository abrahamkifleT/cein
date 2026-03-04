import React from 'react'
import { useProducts } from '../../../hooks/useProduct'
import './ShopByCategory.css'

const CategoryCard = () => {
    const { products } = useProducts();
    console.log(products);
    return (
        <div className='category-card-container'>
            {products.map((product) => (
                <div key={product._id} className='category-item'>
                    <div className="category-image-container">
                        <img src={product.images} alt={product.name} className='category-image' />
                    </div>
                    <h3 className='category-name'>{product.name}</h3>
                </div>
            ))}
        </div>
    )
}

export default CategoryCard