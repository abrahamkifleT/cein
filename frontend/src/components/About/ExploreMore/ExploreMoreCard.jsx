import React from 'react'
import './ExploreMore.css'

const ExploreMoreCard = ({ image, title }) => {
  return (
    <div className='explore-more-card'>
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  )
}

export default ExploreMoreCard