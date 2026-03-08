import React from 'react'
import './FeatureSection.css'
import image1 from '../../../assets/images/about/image1.png'
import image2 from '../../../assets/images/about/image2.png'
import image3 from '../../../assets/images/about/image3.png'
import image4 from '../../../assets/images/about/image4.png'

const FeatureSection = () => {
  return (
    <div className="about-features">
      <div className='about-feature-row about-feature-row--factories'>
        <img src={image1} alt="Our Factories" className="about-feature-row__image" />

        <div className='about-feature-row__content'>
          <div className='about-feature-row__heading'>
            <h4>OUR FACTORIES</h4>
            <h3>Our ethical approach</h3>
          </div>

          <div className='about-feature-row__description'>
            <p>We spend months finding the best factories around the world—the same ones that produce your favorite designer labels. We visit them often and build strong personal relationships with the owners. Each factory is given a compliance audit to evaluate factors like fair wages, reasonable hours, and environment. Our goal? A score of 90 or above for every factory.</p>
          </div>
        </div>
      </div>

      <div className='about-feature-full about-feature-full--1'>
        <img src={image2} alt="Feature visual 1" className="about-feature-full__image" />
      </div>

      <div className='about-feature-row about-feature-row--quality'>
        <div className='about-feature-row__content'>
          <div className='about-feature-row__heading'>
            <h4>OUR QUALITY</h4>
            <h3>Designed to last</h3>
          </div>

          <div className='about-feature-row__description'>
            <p>We source only the finest materials. We partner with the best mills and suppliers to ensure the highest quality. We test every batch of yarn and fabric to ensure it meets our standards. We also test every finished product to ensure it's free of defects and meets our quality standards.</p>
          </div>
        </div>
        <img src={image3} alt="Our Quality" className="about-feature-row__image" />
      </div>

      <div className='about-feature-full about-feature-full--2'>
        <img src={image4} alt="Feature visual 2" className="about-feature-full__image" />
      </div>
    </div>
  )
}

export default FeatureSection