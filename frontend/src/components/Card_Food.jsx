import '../assets/css/card_food.css'

import React from 'react'

//// Need to integrate data prop into card info
const Card_Food = ({data}) => {
  return (
    <div className="card_food_container">
      <div className="card">
        <div className="card-image">
          <img src="https://placehold.co/500x500" alt="Delicious Food" />
        </div>
        <div className="card-content">
          <h2>Delicious Pizza</h2>
          <p>A delightful blend of cheese, tomato, and pepperoni.</p>
          <div className="card-footer">
            <span className="price">$12.99</span>
            <button className="order-button">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card_Food