import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerServices from '../components/BannerServices'
import pic08 from '../assets/images/pic13.jpg'
import pic09 from '../assets/images/pic14.jpg'
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
                            <p> <b>Asylum/Witholding of Removal</b> For those who fear return persecution in their home country<br />
<b>Convention Against Torture (CAT) Protection</b> For those who fear torture in their home country<br />
<b>Cancellation of Removal</b>For those with significant ties to the United States, whose removal would create hardship for themselves and/or their families<br />
Bond Hearings<br />
Prosecutorial Discretion<br />
Immigration Appeals<br /></p>
                           
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic09} alt="" />
                    </Link>
                    <div className="content">
                        <div className="outer">
                            <header className="major">
                                <h3>Humanitarian Visas</h3>
                            </header>
                            <p>Special Immigrant Juvenile Status (SIJS)<br />
Temporary Protected Status (TPS)<br />
U and T Visas<br />
Violence Against Women Act (VAWA)<br />
Deferred Action for Childhood Arrivals (DACA)</p>
                            
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
                                <h3>Family-based Immigration and Naturalization</h3>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                            
                        </div>
                    </div>
                </section>
                  </section>


        </div>

    </Layout>
)

export default Services
