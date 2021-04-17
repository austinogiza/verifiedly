
import React from 'react'
import styled from 'styled-components'
import { Body} from '../container/Body'
import { colors } from '../styles/Color'
import { BodyText, SectionHeader, SubHeader, Testimonial } from '../styles/TextStyles'

const Testimonials = () => {
    return (
        <Herocover>
<Titlesection>
<Subcover><Subtitle>Here’s what the best say about us</Subtitle></Subcover>
    <Title>Trusted by the best companies
</Title>

<Review>
    <Texts>"Verifiedly has been an integral component in helping our business scale and get to the next platou through their comprehensive systems integration strategy."
</Texts>
<Name><span>Hanif Salam,</span>  Founder at Nxgn</Name>
</Review>
</Titlesection>


      </Herocover>
    )
}



const Herocover = styled(Body)`
min-height: 400px;
width: 100%;
background: ${colors.white};
justify-content: center;
align-items: center;
margin: 120px 0 0 0;
@media only screen and (max-width: 770px){
    margin: 40px auto;
}

`

const Texts = styled(Testimonial)`
color: ${colors.mildBlack};
margin: 0;
width: 100%;
text-align: left;
@media only screen and (max-width: 650px){
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: center;
}
`

const Review = styled.div`
width: 100%;
min-height: 300px;
max-width: 800px;
margin: 80px auto;
display: flex;
flex-direction: column;
align-items: flex-start;
@media only screen and (max-width: 770px){
    margin: 60px auto;
    align-items: flex-start;
    justify-content: center;
}

@media only screen and (max-width: 650px){
    margin: 40px auto;
}
`
const Name = styled(BodyText)`
text-align: left;
  margin: 24px 0;
span{
    font-weight: 600;
  
}

`
const Titlesection = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-height: 389px;
max-width: 900px;
margin: 0 auto;
width: 100%;
padding: 10px 25px;

`

const Title = styled(SectionHeader)`
color: ${colors.black};
margin: 24px 0;
`





const Subtitle = styled(SubHeader)`
width: 100%;
margin: 0;
color: ${colors.blue};
`
const Subcover = styled.div`
min-height: 40px;
max-width: 400px;
margin: 0 auto;
border-radius: 20px;
width: 100%;
background: ${colors.lightBlue};
display: flex;
justify-content: center;
align-items: center;

`

export default Testimonials
