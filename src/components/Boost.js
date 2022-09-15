import React from 'react'
import bgDesktop from '../images/bg-boost-desktop.svg'
import bgMobile from '../images/bg-boost-mobile.svg'

const Boost = () => {
  return (
    <>
        <section className="boost relative">
            <picture>
                <source media="{mix-width: 768px} srcSet={bgDesktop}" />
                <img src={bgMobile} alt=""/>
            </picture> 

            <h2>Boost your links today</h2>
            button  
        </section> 
    </>
  )
}

export default Boost