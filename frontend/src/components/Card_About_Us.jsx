import React from 'react'

const Card_About_Us = ({data}) => {
  const title = data.title;
  const description = data.description;
  const img = data.img;

  return (
    <div>
      <div>{title}</div>
      <img src={img} alt="about us image" />
      <div>{description}</div>
    </div>
  )
}

export default Card_About_Us
