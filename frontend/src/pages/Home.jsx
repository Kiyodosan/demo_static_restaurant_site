import '..assets/css/all.css';

import React from 'react'
import hero_section from '../components/hero_section'

import card_about_us from '../components/card_about_us'
import card_quote from '../components/card_quote'
import card_food from '../components/card_food'

//// Test data for rendering multiple components
import { aboutUsData } from '../utils/about_us_data'
import { quoteData } from '../utils/test_quote_data'
import { foodData } from '../utils/food_data'

const Home = () => {
  return (
    <div className="bg-black">
      <section>
        <hero_section />
      </section>

      <section>
        {aboutUsData.map((data) => (
          <card_about_us key={data.id} data={data} />
        ))}
      </section>

      <section>
        {quoteData.map((data) => (
          <card_quote key={data.id} data={data} />
        ))}
      </section>

      <section>
        {foodData.map((data) => (
          <card_food key={data.id} data={data} />
        ))}
      </section>

      <section>Restaurant locations</section>

      <section>Contact Us card</section>
    </div>
  )
}

export default Home