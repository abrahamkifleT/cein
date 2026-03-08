import React from 'react'

const ExploreMoreCard = ({image, title}) => {
  return (
    <div className='explore-more-card'>
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  )
}

export default ExploreMoreCard