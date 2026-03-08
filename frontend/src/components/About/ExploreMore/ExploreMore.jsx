import React from 'react'
import './ExploreMore.css'
import ExploreMoreCard from './ExploreMoreCard'
import exploremore1 from '../../../assets/images/about/exploremore1.png'
import exploremore2 from '../../../assets/images/about/exploremore2.png'
import exploremore3 from '../../../assets/images/about/exploremore3.png'

const ExploreMore = () => {
  return (
    <div className='explore-more-container'>
      <div>More to Explore</div>
      <div className='explore-more-container1'>
        <ExploreMoreCard image={exploremore1} title="OUr Products" />
        <ExploreMoreCard image={exploremore2} title="Our Stores" />
        <ExploreMoreCard image={exploremore3} title="Careers" />
      </div>
    </div>
  )
}

export default ExploreMore