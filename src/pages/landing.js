import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'
import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>About Us</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding />
    
  
                                <p><span className="image left"><img src={pic08} alt="" /></span>
    <h4>Jillian Blake, Esq.</h4> < /br>
    Jillian Blake is an attorney and owner of Blake Immigration Law since 2015. She grew up in San Francisco, California and earned her bachelor’s degree in international studies from Johns Hopkins University and master’s degree in international relations from the Johns Hopkins School of Advanced International Studies (SAIS). She then obtained her law degree from the University of Michigan Law School. During law school she discovered her passion for immigration and asylum law while interning at Asylum Access—Ecuador and Capital Area Immigrants’ Rights (CAIR) Coalition. Jillian is a member of the Maryland State Bar and the American Immigration Lawyers Association (AILA). She is also currently an adjunct professor of immigration law at George Mason University Law School in Arlington, Virginia. In her free time Jillian enjoys watching movies, writing, watching Cleveland Browns football and Nationals baseball, and spending time with her dog, Cha Cha.</p>
                                <p><span className="image right"><img src={pic09} alt="" /></span>
<h4>Ami Patel, Esq.</h4> < /br>
Ami Patel is an associate attorney at Blake Immigration Law. She has worked at the firm since 2018, starting as a law graduate clerk and becoming an associate attorney in 2019. Ami grew up in Louisville, Kentucky and earned her bachelor’s degree in international relations and affairs from American University. She then obtained her law degree from George Washington University Law School. During law school she participated in the George Washington University Law School Immigration Clinic. She also interned at the Open Society Institute in Cambodia, the American Immigration Council, and the American Bar Association. As the daughter of immigrants, Ami loves that her work helps others find safety in the United States. Ami is a member of the California State Bar and the American Immigration Lawyers Association (AILA). In her free time Ami likes to read, hike, and seek out new restaurants.</p>
 <p><span className="image left"><img src={pic10} alt="" /></span>
    <h4>Jennifer Araujo</h4> < /br>
    Jillian Blake is an attorney and owner of Blake Immigration Law since 2015. She grew up in San Francisco, California and earned her bachelor’s degree in international studies from Johns Hopkins University and master’s degree in international relations from the Johns Hopkins School of Advanced International Studies (SAIS). She then obtained her law degree from the University of Michigan Law School. During law school she discovered her passion for immigration and asylum law while interning at Asylum Access—Ecuador and Capital Area Immigrants’ Rights (CAIR) Coalition. Jillian is a member of the Maryland State Bar and the American Immigration Lawyers Association (AILA). She is also currently an adjunct professor of immigration law at George Mason University Law School in Arlington, Virginia. In her free time Jillian enjoys watching movies, writing, watching Cleveland Browns football and Nationals baseball, and spending time with her dog, Cha Cha.</p>
                                <p><span className="image right"><img src={pic09} alt="" /></span>
<h4>Karina Marchant</h4> < /br>
Ami Patel is an associate attorney at Blake Immigration Law. She has worked at the firm since 2018, starting as a law graduate clerk and becoming an associate attorney in 2019. Ami grew up in Louisville, Kentucky and earned her bachelor’s degree in international relations and affairs from American University. She then obtained her law degree from George Washington University Law School. During law school she participated in the George Washington University Law School Immigration Clinic. She also interned at the Open Society Institute in Cambodia, the American Immigration Council, and the American Bar Association. As the daughter of immigrants, Ami loves that her work helps others find safety in the United States. Ami is a member of the California State Bar and the American Immigration Lawyers Association (AILA). In her free time Ami likes to read, hike, and seek out new restaurants.</p>

           

    </Layout>
)

export default Landing
