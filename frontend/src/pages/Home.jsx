import '..assets/css/all.css';
import '../assets/css/home.css';

import React from 'react'
import hero_section from '../components/hero_section'
import card_about_us from '../components/card_about_us'
// testData for testing rendering multiple about_us cards
import { aboutUsData } from '../utils/about_us_data'
import card_quote from '../components/card_quote'
// quoteData for testing rendering multiple quote cards
import { quoteData } from '../utils/test_quote_data'

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
        <div className="quote-border-left">
          {quoteData.map((data) => (
            <card_quote key={data.id} data={data} />
          ))}
        </div>
      </section>

      <section>
        {/* //// Modify for food card data */}
{/*         {quoteData.map((data) => (
          <card_quote key={data.id} data={data} />
        ))} */}
      </section>

      <section>Restaurant locations</section>

      <section>Contact Us card</section>
    </div>
  )
}

export default Home