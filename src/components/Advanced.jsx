import React from 'react'
import brand from '../images/icon-brand-recognition.svg'
import detailed from '../images/icon-detailed-records.svg'
import fully from '../images/icon-fully-customizable.svg'

const Advanced = () => {
  return (
    <>
        <section className="bg-white pt-32 pb-10 lg:pb-40">
          <div className="max-width">
            <h2 className="text-4xl pt-10 font-bold text-slate-800 mb-3 text-center">Advanced Statistics</h2>
            <p className="text-slate-400 text-center mb-10 lg:mb-20"> Track how your links are performing across the web <br /> with our advanced statistics dashboard.</p>

            <div className="relative card grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              <div className="line"></div>

              <article className="bg-slate-100 p-5 rounded-lg mt-5 relative">
                <img src={brand} alt="brand" className="p-4 -mt-14 bg-slate-100 rounded-full" />
                <h3 className="text-slate-800 text-lg mt-5 mb-2 font-bold">Brand Recognition</h3>
                <p className="text-slate-400 text-sm">
                  Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.
                </p>
              </article>

              <article className="bg-slate-100 p-5 rounded mt-12 relative">
                <img src={detailed} alt="detailed" className="p-4 -mt-14 bg-slate-100 rounded-full" />
                <h3 className="text-slate-800 text-lg mt-5 mb-2 font-bold">Detailed Records</h3>
                <p className="text-slate-400 text-sm">
                  Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.
                </p>
              </article>

              <article className="bg-slate-100 p-5 rounded mt-12 relative">
                <img src={fully} alt="fully" className="p-4 -mt-14 bg-slate-100 rounded-full" />
                <h3 className="text-slate-800 text-lg mt-5 mb-2 font-bold">Fully Customizable</h3>
                <p className="text-slate-400 text-sm">
                  Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
                </p>
              </article>

            </div>
          </div>
        </section>
    </>
  )
}

export default Advanced