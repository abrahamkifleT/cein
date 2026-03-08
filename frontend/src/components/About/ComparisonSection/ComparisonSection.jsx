import React from 'react'
import './ComparisonSection.css'
import chart from '../../../assets/images/about/chart.png'

const ComparisonSection = () => {
    return (
        <div className="ComparisonSection">
            <div className='ComparisonSection-container'>
                <div className='ComparisonSection-container-left'>
                    <img src={chart} alt="Price Comparison Chart" />
                </div>
                <div className='ComparisonSection-container-right'>
                    <div className='ComparisonSection-container-right-heading'>
                        <h4>OUR PRICES</h4>
                        <h3>Radically Transparent</h3>
                    </div>

                    <div className='ComparisonSection-container-right-description'>
                        <p>We spend months finding the best factories around the world—the same ones that produce your favorite designer labels. We visit them often and build strong personal relationships with the owners. Each factory is given a compliance audit to evaluate factors like fair wages, reasonable hours, and environment. Our goal? A score of 90 or above for every factory.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComparisonSection;