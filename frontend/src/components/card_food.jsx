import '../assets/css/card_food'

import React from 'react'

const card_food = ({data}) => {
  return (
    <div className="card_food_container">
      <div className="card">
        <div className="card-image">
          <img src="https://via.placeholder.com/300x200" alt="Delicious Food" />
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

export default card_food