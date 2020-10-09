import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerServices from '../components/BannerServices'
import pic08 from '../assets/images/pic08.jpg'
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
            
                    
                  </section>


        </div>

    </Layout>
)

export default Services
