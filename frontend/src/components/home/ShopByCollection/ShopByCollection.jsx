import React from 'react';
import { useCollections } from '../../../hooks/useCollection';
import { useProducts } from '../../../hooks/useProduct';
import Button from '../../ui/Button/Button';
import './ShopByCollection.css';

const ShopByCollection = () => {
  const { collections, loading: collLoading } = useCollections();
  const { products, loading: prodLoading } = useProducts();

  if (collLoading || prodLoading) {
    return <div className="shop-by-collection--loading">Loading Collections...</div>;
  }

  const getCollectionLabel = (collectionId) => {
    const collectionProducts = products.filter(p => p.collectionIds?.includes(collectionId));

    if (collectionProducts.some(p => p.isNew)) return "NEW ARRIVALS";
    if (collectionProducts.some(p => p.isBestSeller)) return "BEST SELLERS";
    if (collectionProducts.some(p => p.isTrending)) return "TRENDING NOW";

    return null;
  };

  return (
    <section className="shop-by-collection">
      <div className="collection-row">
        {collections.map((collection) => {
          const label = getCollectionLabel(collection._id);
          return (
            <div key={collection._id} className="collection-item">
              <div className="collection-image-wrapper">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="collection-image"
                />
                <div className="collection-overlay">
                  {label && <h1 className="collection-label">{label}</h1>}
                  <Button
                    name={`Shop ${collection.name}`}
                    className="collection-btn"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ShopByCollection;