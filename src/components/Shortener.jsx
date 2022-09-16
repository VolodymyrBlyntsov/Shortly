import React from 'react'
import bgDesktop from '../images/bg-shorten-desktop.svg'
import bgMobile from '../images/bg-shorten-mobile.svg'


const Shortener = () => {
  return (
    <>
        <section className="max-width shortener relative">
            <picture>
                <source media="(min-width:768px)" srcSet={bgDesktop} />
                <img src={bgMobile} alt="" />
            </picture>

            <form className="form">
                <div className="flex flex-col md:flex-row">
                    <input type="url" placeholder="Shorten your link here" className="w-full py-2 px-5 rounded-lg mb-2 md:mb-0 md:w-2/3 focus:outline-none focus:ring focus:ring-violet-300" />
                    <button className="btn-cta rounded-lg w-full md:w-40 md:ml-5 focus:outline-none focus:ring focus:ring-violet-300">Shorten It!</button>
                </div>
            </form>
        </section>
    </>
  )
}

export default Shortener