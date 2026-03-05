import React from 'react'
import { useProducts } from '../../../hooks/useProduct'
import { useCollections } from '../../../hooks/useCollection'

const FavoriteCard = ({ scrollRef }) => {
    const { products } = useProducts();
    const { collections } = useCollections();

    // Filter products that are marked as favorites
    const favoriteProducts = products.filter(product => product.isFavorite);

    return (
        <div className="favorite-products-grid" ref={scrollRef}>
            {favoriteProducts.map((product) => {
                // Find the first collection that matches one of the product's collectionIds
                const firstCollectionId = product.collectionIds?.[0];
                const collection = collections.find(col => col._id === firstCollectionId);
                const collectionSlug = collection ? collection.slug : '';

                return (
                    <div key={product._id} className="favorite-card">
                        <div className="favorite-image-container">
                            <img src={product.images[0]} alt={product.name} className="favorite-image" />
                        </div>
                        <div className="favorite-info">
                            <p className="favorite-name">{product.name}</p>
                            <p className="favorite-price">${product.price}</p>
                        </div>
                        <p className="favorite-slug">{collectionSlug}</p>
                    </div>
                );
            })}
        </div>
    )
}

export default FavoriteCard