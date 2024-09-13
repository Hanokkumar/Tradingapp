import React from 'react'
import image from "../../../public/logo.jpg"
import './Homescr.css'
import Button from '@mui/material/Button'
import Link from 'next/link'

function Page() {
  return (
    <div>
         <header>
        <div className="logo">
            {/* <h1> V Power International</h1> */}
        <img 
         src={"https://ideogram.ai/assets/image/lossless/response/LIFGHyoCRUiFtekktngE6Q"}
         
         className='logo'
         width={'50px'}
         height={'0px'}
         
         /> 
         
        </div>
        <nav>
            {/* <a href="#">Home</a> */}
           
        </nav> 
       
     
    </header>
    <section className="hero">
        <div className="hero-text">

        <div className="hero-img">
        <img src='/images/logos/AppLogo.png' style={{height:'80px',width:'80px'}} alt="" />        </div>
            <h1 style={{fontFamily:'serif'}}>Welcome to <img src='/images/logos/vpower.png' style={{height:'30px',width:'30px'}} alt="" />   Power International</h1>
            <p style={{textAlign:'justify'}}>{`It's a simple business method that can earn you a fantastic high income. This business model is created entirely by Indians and is headquartered in Delhi. Currently operating as the fastest growing business in many important cities of India. This human chain business is well received by the people as it is able to generate very high revenue in a short period of time. So we wish you to join this business immediately and earn very high income.`}</p>

            <div className="hero-buttons">
              <Link  href={{pathname:'/Login'}} className="btn" >Get Started</Link>
            </div>
        </div>
        <div className="hero-img">
            <img src="https://i.ibb.co/h8mzVF4/hero-img.png" alt="" />
        </div>
    </section>
    </div>
  )
}

export default Page