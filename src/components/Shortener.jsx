import React, {useState} from 'react'
import bgDesktop from '../images/bg-shorten-desktop.svg'
import bgMobile from '../images/bg-shorten-mobile.svg'

const Shortener = () => {
    const [text, setText] = useState("")
    const [links, setLinks] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!text) {
            return
        } else {
            const shortenLink = async () => {
              const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${text}`)
              const data = await response.json()
              console.log(data.result)
              setLinks(data.result)
              setText("")
            }
            shortenLink()
        }
    }

    return (
        <>
            <section className="max-width shortener relative">
                <picture>
                    <source media="(min-width:768px)" srcSet={bgDesktop} />
                    <img src={bgMobile} alt="" />
                </picture>

                <form className="form" onSubmit={handleSubmit}>
                    <div className="flex flex-col md:flex-row">
                        <input onChange={(e) => setText(e.target.value)} value={text} type="url" placeholder="Shorten your link here" className="w-full py-2 px-5 rounded-lg mb-2 md:mb-0 md:w-2/3" />
                        <button onClick={handleSubmit} className="btn-cta rounded-lg w-full md:w-40 md:ml-5">Shorten It!</button>
                    </div>
                </form>

                <div className="flex flex-col items-center justify-center bg-slate-100 rounded-lg text-center md:flex-row md:justify-between p-3 mt-3">
                    <article className="mb-3 md:mb-0">
                        <h6>{links.original_link}</h6>
                    </article>

                    <article>
                        <ul className="md:flex md:items-center">
                            <li className="md:mr-5">
                                <button className="text-[#314ee7]">{links.short_link3}</button>
                            </li>
                            <li>
                                <button className='btn-cta rounded-lg text-sm'>Copy</button>
                            </li>
                        </ul>
                    </article>
                </div>
            </section>
        </>
    )
}

export default Shortener