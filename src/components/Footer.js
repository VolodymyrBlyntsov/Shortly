import React from 'react'
import logo from '../images/footer-logo.svg'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import pinterest from '../images/icon-pinterest.svg'
import instagram from '../images/icon-instagram.svg'

const Footer = () => {
  return (
    <>
        <footer className="bg-slate-600">
            <div className='max-width'>
                <article>
                    <img src={logo} alt="" />
                </article>

                <article>
                    <h3>Features</h3>
                    <ul>
                        <li>
                            <button>
                                Link Shortening
                            </button>
                        </li>
                        <li>
                            <button>
                                Branded Links
                            </button>
                        </li>
                        <li>
                            <button>
                                Analytics
                            </button>
                        </li>
                    </ul>
                </article>

                <article>
                    <h3>Resources</h3>
                    <ul>
                        <li>
                            <button>
                                Blog
                            </button>
                        </li>
                        <li>
                            <button>
                                Developers
                            </button>
                        </li>
                        <li>
                            <button>
                                Support
                            </button>
                        </li>
                    </ul>
                </article>

                <article>
                    <h3>Company</h3>
                    <ul>
                        <li>
                            <button>
                                About
                            </button>
                        </li>
                        <li>
                            <button>
                                Careers
                            </button>
                        </li>
                        <li>
                            <button>
                                Contact
                            </button>
                        </li>
                    </ul>
                </article>

                <article>
                    <ul>
                        <li>
                            <img src={facebook} alt="facebook" />
                        </li>
                        <li>
                            <img src={twitter} alt="twitter" />
                        </li>
                        <li>
                            <img src={pinterest} alt="pinterest" />
                        </li>
                        <li>
                            <img src={instagram} alt="instagram" />
                        </li>
                    </ul>
                </article>

            </div>

        </footer>
    </>
  )
}

export default Footer