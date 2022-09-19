import React, {useEffect, useState} from 'react'
import bgDesktop from '../images/bg-shorten-desktop.svg'
import bgMobile from '../images/bg-shorten-mobile.svg'

const getStoreLinks = () => {
    let links = localStorage.getItem("links")

    if (links) {
        return JSON.parse(localStorage.getItem("links"))
    } else {
        return []
    }
}

const Shortener = () => {
    const [text, setText] = useState("")
    const [links, setLinks] = useState(getStoreLinks())
    const [buttonText, setButtonText] = useState("Copy")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!text) {
            console.log("Please, put the link into the input field.")
        } else {
            const shortenLink = async () => {
              const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${text}`)
              const data = await response.json()
              setLinks(data.result)
              setText("")
            }
            shortenLink()
        }
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(links.short_link3)
        setButtonText("Copied!")
    }

    useEffect(() => {
        localStorage.setItem("links", JSON.stringify(links))
    }, [links])

    return (
        <>
            <section className="max-width shortener relative">
                <picture>
                    <source media="(min-width:768px)" srcSet={bgDesktop} />
                    <img src={bgMobile} alt="mobile-background-shortener" />
                </picture>

                <form className="form" onSubmit={handleSubmit}>
                    <div className="flex flex-col md:flex-row">
                        <input onChange={(e) => setText(e.target.value)} value={text} type="url" placeholder="Shorten your link here" className="w-full py-2 px-5 rounded-lg mb-2 md:mb-0 md:w-2/3" />
                        <button onClick={handleSubmit} className="btn-cta rounded-lg w-full md:w-40 md:ml-5">Shorten It!</button>                    </div>
                </form>

                <div className="flex flex-col items-center justify-center md:bg-slate-100 bg-white rounded-lg text-center md:flex-row md:justify-between p-3 mt-3">
                    <article className="mb-3 md:mb-0">
                        <h6>{links.original_link}</h6>
                    </article>

                    <article>
                        <ul className="md:flex md:items-center">
                            <li className="md:mr-5">
                                <button className="text-[#314ee7]">{links.short_link3}</button>
                            </li>
                            <li>
                                <button onClick={handleCopy} className="btn-cta rounded-lg text-sm focus:bg-[#314ee7]">{buttonText}</button>
                            </li>
                        </ul>
                    </article>
                </div>
            </section>
        </>
    )
}

export default Shortener