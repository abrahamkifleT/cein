import React from 'react'
import './FeatureSectionCard.css'

const FeatureSectionCard = ({ image, title, description }) => {
    return (
        <div className="feature-card">
            <img className="feature-card-image" src={image} alt={title} />

            <h4 className="feature-card-title">{title}</h4>
            <p className="feature-card-description">{description}</p>
        </div>
    )
}

export default FeatureSectionCard