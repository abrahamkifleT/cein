import React, { useState } from 'react'
import CustomerGalleryCard from './CustomerGalleryCard'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useCustomerGallery } from '../../../hooks/customerGallery'

const VISIBLE_COUNT = 5; // cards shown at a time

const CustomerGallery = () => {
  const { customerGallery } = useCustomerGallery();
  const [offset, setOffset] = useState(0);

  const totalItems = customerGallery ? customerGallery.length : 0;
  const canPrev = offset > 0;
  const canNext = offset < totalItems - VISIBLE_COUNT;

  const handlePrev = () => {
    if (canPrev) setOffset(offset - 1);
  };

  const handleNext = () => {
    if (canNext) setOffset(offset + 1);
  };

  return (
    <div style={{ textAlign: 'center', margin: '4rem 0' }}>
      <h3>Everlane On You</h3>
      <p style={{ marginBottom: '1rem' }}>Share your latest look with #EverlaneOnYou for a chance to be featured.</p>
      <p><span style={{ textDecoration: 'underline', cursor: 'pointer', fontWeight: 500 }}>Add Your Photo</span></p>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
        <button
          onClick={handlePrev}
          style={{
            background: 'none',
            border: 'none',
            cursor: canPrev ? 'pointer' : 'not-allowed',
            opacity: canPrev ? 1 : 0.3
          }}
        >
          <ChevronLeft size={32} />
        </button>

        <CustomerGalleryCard offset={offset} />

        <button
          onClick={handleNext}
          style={{
            background: 'none',
            border: 'none',
            cursor: canNext ? 'pointer' : 'not-allowed',
            opacity: canNext ? 1 : 0.3
          }}
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  )
}

export default CustomerGallery