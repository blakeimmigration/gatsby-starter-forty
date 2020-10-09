import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'
import pic11 from '../assets/images/pic11.jpg'


const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>About Us</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding />
    <Layout>
        <Helmet>
            <title>About US</title>
            <meta name="description" content="About Us" />
      

       
                                <h4>Left &amp; Right</h4>
                                <p><span className="image left"><img src={pic08} alt="" /></span><b>Jillian BlakeB/></p></ br>
    Jillian Blake is an attorney and owner of Blake Immigration Law since 2015. She grew up in San Francisco, California and earned her bachelor’s degree in international studies from Johns Hopkins University and master’s degree in international relations from the Johns Hopkins School of Advanced International Studies (SAIS). She then obtained her law degree from the University of Michigan Law School. During law school she discovered her passion for immigration and asylum law while interning at Asylum Access—Ecuador and Capital Area Immigrants’ Rights (CAIR) Coalition. Jillian is a member of the Maryland State Bar and the American Immigration Lawyers Association (AILA). She is also currently an adjunct professor of immigration law at George Mason University Law School in Arlington, Virginia. In her free time Jillian enjoys watching movies, writing, watching Cleveland Browns football and Nationals baseball, and spending time with her dog, Cha Cha.</ br>
                                <p><span className="image right"><img src={pic09} alt="" /></span>Ami Patel</p>

                                <h3>Box</h3>
                                <div className="box">
                                    <p>Felis sagittis eget tempus primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Magna sed etiam ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus lorem ipsum.</p>
                                </div>

                                <h3>Preformatted</h3>
                                <pre><code>i = 0;

                                print 'It took ' + i + ' iterations to sort the deck.';
                                </code></pre>


       

    </Layout>
)

export default Landing
