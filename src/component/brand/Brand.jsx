import React from 'react'
import "./brand.css"
import { google, slack, atlassian, dropbox, shopify } from './imports'
const Brand = () => {
  return (
    
      <div className='gpt3__brand section__padding'>
        <div>
          <img data-aos="fade-up" src={google} alt="" />
        </div>
        <div>
          <img data-aos="fade-up" src={slack} alt="" />
          </div>
          <div>
          <img data-aos="fade-up" src={atlassian} alt="" />
          </div>
          <div>
          <img data-aos="fade-up" src={dropbox} alt="" />
          </div>
          <div>
          <img data-aos="fade-up" src={shopify} alt="" />
          </div>
        </div>
      
    
  )
}

export default Brand
