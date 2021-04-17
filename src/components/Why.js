import React from 'react'
import styled from 'styled-components'
import { Body, Container, Image} from '../container/Body'
import { MainGhostButton } from '../styles/Button'
import { colors } from '../styles/Color'
import { BodyText, SectionHeader, SubHeader } from '../styles/TextStyles'
import List from './List'

const Why = () => {
    return (
      <WhyBody>

        

         <Title>
          <First>
          <Subcover><Subtitle>Why Verifiedly</Subtitle></Subcover>
              <Maintitle>Designed for <span>durability</span></Maintitle>
              <Mark><Image src="https://res.cloudinary.com/austinogiza/image/upload/v1618653095/Vector_ivou17.svg"/></Mark>
          </First>
           <Middle>   <Text>By developing an easy to under system, multiple document support, we strive to offer a good variety of options to anyone that wants to use our infrastructure without spending a lot of time and money.</Text></Middle>
           <End>
               <Started>Get Started</Started>
           </End>

          </Title>

<Container>
<Section>
<Sectionwrapper>
<Sectioncover>
<List image="https://res.cloudinary.com/austinogiza/image/upload/v1618650200/Hearts_o37nxm.svg" text="99.98% reliability uptime since launch."/>
<List image="https://res.cloudinary.com/austinogiza/image/upload/v1618650200/Hearts-1_nlwrdl.svg" text="Fastest request and response rate in the industry."/>
<List image="https://res.cloudinary.com/austinogiza/image/upload/v1618650200/Hearts-2_djkyo3.svg" text="Built-in fraud detection systems for protection."/>
</Sectioncover>
<Sectioncovermiddle>
    <MiddleImage src="https://res.cloudinary.com/austinogiza/image/upload/v1618650526/Rectangle_19_vaiqd1.jpg"/>
</Sectioncovermiddle>
<Sectioncover>
<List image="https://res.cloudinary.com/austinogiza/image/upload/v1618650199/Hearts-3_q8uu2j.svg" text="Advanced integrations with enterprise softwares."/>
<List image="https://res.cloudinary.com/austinogiza/image/upload/v1618650200/Hearts-4_a0pffj.svg" text="50% or more in savings compared to other services."/>
<List image="https://res.cloudinary.com/austinogiza/image/upload/v1618650199/Hearts-5_sgjlzn.svg" text="Fastest and friendliest customer support in the industry."/>
</Sectioncover>
</Sectionwrapper>
          </Section>

</Container>  
      </WhyBody>
    )
}

const WhyBody = styled(Body)`
margin: 120px 0;
padding: 10px 25px;
width: 100%;
@media only screen and (max-width: 800px){
    margin: 80px 0;
}

@media only screen and (max-width: 650px){
    margin: 40px 0;
}
`
const Title = styled.div`
min-height: 186px;
max-width: 1200px;
margin: 0 auto;
width: 100%;
display: grid;
grid-template-columns: 1.4fr 1.5fr 1fr;
grid-gap: 50px; 

@media only screen and (max-width: 770px){
    grid-template-columns: repeat(1,1fr);
}
`

const First = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
width: 100%;
margin: 0 auto;
max-width: 400px;

@media only screen and (max-width: 650px){
    align-items: center;
}
`
const Middle = styled.div`
width: 100%;
margin: 0 auto;
max-width: 450px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
`
const End = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
width: 100%;
margin: 0 auto;
max-width: 200px;
`
const Started = styled(MainGhostButton)`

`

const Subcover = styled.div`
min-height: 40px;
max-width: 175px;
border-radius: 20px;
width: 100%;
background: ${colors.lightBlue};
display: flex;
justify-content: center;
align-items: center;

`
const Subtitle = styled(SubHeader)`
width: 100%;
margin: 0;
color: ${colors.blue};
`
const Maintitle = styled(SectionHeader)`
margin: 16px 0 24px 0;
text-align: left;
width: 100%;

span{
    color: ${colors.blue};

}
`

const Mark= styled.div`

`
const Text = styled(BodyText)`
margin: 0;
color: ${colors.mildBlack};
text-align: left;
width: 100%;
margin: 0 auto;
max-width: 450px;
`
const Section = styled.section`
min-height: 317px;
width: 100%;
margin: 106px 0 0 0 ;
@media only screen and (max-width: 650px){
    margin: 56px 0 0 0 ;
}
`
const Sectionwrapper = styled.div`
display:grid;
grid-template-columns: repeat(3,1fr);
width: 100%;
height: 100%;
grid-gap: 30px;
@media only screen and (max-width: 770px){
    grid-template-columns: repeat(1,1fr);
}
`

const Sectioncover = styled.div`
min-height: 386px;
max-width: 300px;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0 auto;

`
const Sectioncovermiddle = styled.div`
min-height:  500px;
max-width: 400px;
width: 100%;
margin: 0 auto;
@media only screen and (max-width: 650px){
    min-height:  400px;
}

`
const MiddleImage = styled(Image)`

`
export default Why
