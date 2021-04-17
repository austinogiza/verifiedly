import React from 'react'
import ApiKey from '../components/ApiKey'
import Footer from '../components/Footer'
import Grid from '../components/Grid'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Pricing from '../components/Pricing'
import Table from '../components/Table'
import Testimonials from '../components/Testimonials'
import Why from '../components/Why'
import { Body } from '../container/Body'


const Home = () => {
    return (
       <Body>
        <Navbar/>
       <Hero/>
       <Why/>
       <Grid/>
<Pricing/>
<Table/>
<Testimonials/>
<ApiKey/>
<Footer/>
       </Body>
    )
}



export default Home
