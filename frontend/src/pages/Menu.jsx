import '../assets/css/all.css'
import '../assets/css/card_food.css'

import React from 'react'

const Menu = () => {
  return (
    <div className="flex flex-col w-100vw items-center">
      <section>
        <h1 className="py-1 font-size-2p5">Appetizers</h1>
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
      </section>

      <section>
        <h1 className="py-1 font-size-2p5">Entrees</h1>
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
      </section>

      <section>
        <h1 className="py-1 font-size-2p5">Beverages</h1>
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
      </section>

      <section>
        <h1 className="py-1 font-size-2p5">Desserts</h1>
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
      </section>
    </div>
  )
}

export default Menu