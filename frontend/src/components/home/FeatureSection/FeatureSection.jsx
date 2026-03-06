import React from 'react'
import FeatureSectionCard from './FeatureSectionCard'
import boxImg from '../../../assets/images/box.png'
import closeHolderImg from '../../../assets/images/closeHolder.png'
import directionImg from '../../../assets/images/direction.png'
import './FeatureSection.css'

const featureData = [
    { image: boxImg, title: 'Free Shipping', description: 'On all orders over $50. Fast, reliable delivery right to your door.' },
    { image: closeHolderImg, title: 'Easy Returns', description: '30-day hassle-free returns. No questions asked.' },
    { image: directionImg, title: 'Customer Support', description: 'Available 24/7 to help you with any questions or concerns.' },
]

const FeatureSection = () => {
    return (
        <div className="feature-section-wrapper">
            <div className="feature-section-container">
                {featureData.map((item, index) => (
                    <FeatureSectionCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    )
}

export default FeatureSection