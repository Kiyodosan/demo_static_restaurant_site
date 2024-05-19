import '../assets/css/card_quote.css'

import React from 'react'

const Card_Quote = ({data}) => {
  const img = data?.img;
  const quote = data.quote;
  const name = data.name;

  //// Testing to see if this will still render regardless of whether an image exists or not
  if (img) {
    return (
      <div className="quote-border-left">
        <img src={img} alt="quote image" />
        <div>{quote}</div>
        <div>{name}</div>
      </div>
    )
  }

  return (
    <div className="quote-border-left">
      <div>{quote}</div>
      <div>{name}</div>
    </div>
  )
}

export default Card_Quote
