import React from 'react'
import styled from 'styled-components'
import { Body, Container } from '../container/Body'
import { colors } from '../styles/Color'
import { BodyText, SectionHeader, SubHeader } from '../styles/TextStyles'
import List from './List'

const Why = () => {
    return (
      <WhyBody>

         <Container>

         <Title>
              <Subtitle>Why Verifiedly</Subtitle>
              <Maintitle>Designed for durability</Maintitle>
              <Text>By developing an easy to under system, multiple document support, we strive to offer a good variety of options to anyone that wants to use our infrastructure without spending a lot of time and money.</Text>
          </Title>

          <Section>
<Sectionwrapper>
<List image="https://res.cloudinary.com/austinogiza/image/upload/v1618619060/Frame_iaydnj.svg" text="99.98% reliability uptime since launch."/>
<List image="https://res.cloudinary.com/austinogiza/image/upload/v1618619060/Frame_iaydnj.svg" text="99.98% reliability uptime since launch."/>
<List image="https://res.cloudinary.com/austinogiza/image/upload/v1618619060/Frame_iaydnj.svg" text="99.98% reliability uptime since launch."/>
<List image="https://res.cloudinary.com/austinogiza/image/upload/v1618619060/Frame_iaydnj.svg" text="99.98% reliability uptime since launch."/>
<List image="https://res.cloudinary.com/austinogiza/image/upload/v1618619060/Frame_iaydnj.svg" text="99.98% reliability uptime since launch."/>
<List image="https://res.cloudinary.com/austinogiza/image/upload/v1618619060/Frame_iaydnj.svg" text="99.98% reliability uptime since launch."/>

</Sectionwrapper>
          </Section>
         </Container>
      </WhyBody>
    )
}

const WhyBody = styled(Body)`
margin: 120px 0;
padding: 10px 25px;
@media only screen and (max-width: 800px){
    margin: 80px 0;
}

@media only screen and (max-width: 650px){
    margin: 40px 0;
}
`
const Title = styled.div`
min-height: 186px;
max-width: 933px;
width: 100%;
justify-content: center;
align-items: center;
`
const Subtitle = styled(SubHeader)`
width: 100%;
margin: 0;
`
const Maintitle = styled(SectionHeader)`
margin: 16px 0 24px 0;
`
const Text = styled(BodyText)`
margin: 0;
color: ${colors.mildBlack};
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
grid-gap: 56px;
@media only screen and (max-width: 650px){
    grid-template-columns: repeat(1,1fr);
    grid-gap: 32px;
}
`
export default Why
