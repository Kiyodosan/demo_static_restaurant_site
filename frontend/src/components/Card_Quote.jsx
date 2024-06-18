import '../assets/css/all.css'
import '../assets/css/card_quote.css'

import React from 'react'

const Card_Quote = ({data}) => {
  const img = data?.img;
  const quote = data.quote;
  const name = data.name;

  //// May need an outer div to include a bg image
  if (img) {
    return (
      <div className="flex content-center">
        <div className="px-1 w-max-35">
          <div className="quote-border-left px-1">
            <div className="flex content-center py-1">
              <img src={img} alt="quote image" />
            </div>
            <div>
              <h2 className="font-size-2">{quote}</h2>
            </div>
            <div className="py-quote-name">
              <p className="font-size-1">{name}</p>
            </div>
          </div>
        </div>
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