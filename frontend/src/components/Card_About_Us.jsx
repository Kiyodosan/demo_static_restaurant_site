import '../assets/css/all.css'

import React from 'react'

const Card_About_Us = ({data}) => {
  const title = data.title;
  const description = data.description;
  const img = data.img;

  return (
    <div className="flex content-center">
      <div className="px-1 w-max-35">
        <div className="py-1">
          <h2 className="font-size-2">{title}</h2>
        </div>
        <div>
          <img src={img} alt="about us image" className="border-round" />
        </div>
        <div className="py-1">
          <p className="font-size-1">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Card_About_Us
