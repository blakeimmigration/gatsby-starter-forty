import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerServices from '../components/BannerServices'
import pic08 from '../assets/images/pic13.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Services = (props) => (
    <Layout>
        <Helmet>
            <title>Services</title>
            <meta name="description" content="Services Page" />
        </Helmet>

        <BannerServices />
            <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                    </header>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic08} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Removal Defense</h3>
                            </header>
                            <p> Asylum/Witholding of Removal<br />
Convention Against Torture (CAT) Protection<br />
Cancellation of Removal<br />
Bond Hearings<br />
Prosecutorial Discretion<br />
Immigration Appeals<br /></p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">E-mail Jillian</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic09} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Humanitarian Visas</h3>
                            </header>
                            <p>Ami Patel is an associate attorney at Blake Immigration Law. She has worked at the firm since 2018, starting as a law graduate clerk and becoming an associate attorney in 2019. Ami grew up in Louisville, Kentucky and earned her bachelor’s degree in international relations and affairs from American University. She then obtained her law degree from George Washington University Law School. During law school she participated in the George Washington University Law School Immigration Clinic. She also interned at the Open Society Institute in Cambodia, the American Immigration Council, and the American Bar Association. As the daughter of immigrants, Ami loves that her work helps others find safety in the United States. Ami is a member of the California State Bar and the American Immigration Lawyers Association (AILA). In her free time Ami likes to read, hike, and seek out new restaurants.</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic10} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Jennifer Araujo</h3>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">E-mail Jennifer</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                  </section>


        </div>

    </Layout>
)

export default Services
