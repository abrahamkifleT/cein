import React from 'react'
import Button from '../../ui/Button/Button'
import './LearnMore.css'
import impactBanner from '../../../assets/images/impact-banner.png'

const LearnMore = () => {
    return (
        <section className="learn-more">
            <div className="learn-more-container">
                <img src={impactBanner} alt="Our Impact" className="learn-more-image" />
                <div className="learn-more-content">
                    <h1 className="learn-more-title">We're on a Mission To Clean Up the industry</h1>
                    <p className="learn-more-description">Read about our progress in our latest impact report.</p>
                    <Button name="Learn More" className="learn-more-btn" />
                </div>
            </div>
        </section>
    )
}

export default LearnMore