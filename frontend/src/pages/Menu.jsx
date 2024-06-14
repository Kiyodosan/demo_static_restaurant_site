import '../assets/css/all.css'
import '../assets/css/card_food.css'

import React from 'react'

import Card_Food from '../components/Card_Food'

const Menu = () => {
  return (
    <div className="flex flex-col w-100vw items-center">
      <section>
        <h1 className="py-1 font-size-2p5">Appetizers</h1>
        <Card_Food />
      </section>

      <section>
        <h1 className="py-1 font-size-2p5">Entrees</h1>
        <Card_Food />
      </section>

      <section>
        <h1 className="py-1 font-size-2p5">Beverages</h1>
        <Card_Food />
      </section>

      <section>
        <h1 className="py-1 font-size-2p5">Desserts</h1>
        <Card_Food />
      </section>
    </div>
  )
}

export default Menu