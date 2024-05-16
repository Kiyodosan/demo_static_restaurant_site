import React from 'react'

const card_about_us = ({data}) => {
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

export default card_about_us