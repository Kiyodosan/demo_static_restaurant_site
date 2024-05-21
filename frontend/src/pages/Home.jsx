import '../assets/css/all.css'

import React from 'react'
import Hero_Section from '../components/hero_section'

import Card_About_Us from '../components/Card_About_Us'
import Card_Quote from '../components/Card_Quote'
import Card_Food from '../components/Card_Food'

//// Test data for rendering multiple components
import { aboutUsData } from '../utils/test_about_us_data'
import { quoteData } from '../utils/test_quote_data'
import { foodData } from '../utils/test_food_data'

const Home = () => {
  return (
    <div className="flex flex-col bg-black">
      <section>
        <Hero_Section />
      </section>

      <section>
        {aboutUsData.map((data) => (
          <Card_About_Us key={data.id} data={data} />
        ))}
      </section>

      <section>
        {quoteData.map((data) => (
          <Card_Quote key={data.id} data={data} />
        ))}
      </section>

      <section>
        {foodData.map((data) => (
          <Card_Food key={data.id} data={data} />
        ))}
      </section>

{/*       <section>Restaurant locations</section>

      <section>Contact Us card</section> */}
    </div>
  )
}

export default Home