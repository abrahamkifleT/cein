import React from 'react'
import { useCustomerGallery } from '../../../hooks/customerGallery'
import { ShoppingBag } from 'lucide-react'
import './CustomerGalleryCard.css'

const CARD_WIDTH = 225.6; // px - matches Figma design
const CARD_GAP = 16;       // gap: 1rem = 16px

const CustomerGalleryCard = ({ offset = 0 }) => {
  const { customerGallery } = useCustomerGallery();
  const allGallery = customerGallery || [];

  return (
    <div className="customer-gallery-viewport">
      <div
        className="customer-gallery-track"
        style={{
          transform: `translateX(-${offset * (CARD_WIDTH + CARD_GAP)}px)`,
          transition: 'transform 0.4s ease'
        }}
      >
        {allGallery.map((gallery, index) => (
          <div key={gallery._id || index} className="customer-gallery-card-item">
            <img className="customer-gallery-image" src={gallery.image} alt="Customer Gallery" />
            <div className="customer-gallery-chart-icon">
              <ShoppingBag size={18} color="#fff" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CustomerGalleryCard