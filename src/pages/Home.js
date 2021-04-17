import React from 'react'
import ApiKey from '../components/ApiKey'
import Grid from '../components/Grid'
import Hero from '../components/Hero'
import Pricing from '../components/Pricing'
import Table from '../components/Table'
import Testimonials from '../components/Testimonials'
import Why from '../components/Why'
import { Body } from '../container/Body'


const Home = () => {
    return (
       <Body>
       <Hero/>
       <Why/>
       <Grid/>
<Pricing/>
<Table/>
<Testimonials/>
<ApiKey/>
       </Body>
    )
}



export default Home
