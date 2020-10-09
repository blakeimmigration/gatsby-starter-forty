import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'
import pic11 from '../assets/images/pic11.jpg'

const Elements = (props) => (
    <Layout>
        <Helmet>
            <title>About US</title>
            <meta name="description" content="About Us" />
        </Helmet>

       
                                <h4>Left &amp; Right</h4>
                                <p><span className="image left"><img src={pic08} alt="" /></span>Jillian Blake</p>
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

export default Elements
