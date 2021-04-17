import React from 'react'
import styled from 'styled-components'
import { Body,GridLayout, Image} from '../container/Body'
import { MainButton } from '../styles/Button'
import { colors } from '../styles/Color'
import { BodyText, SectionHeader } from '../styles/TextStyles'

const Grid = () => {
    return (
       <Gridbody>
           <Container>
<Layout>
<Wrapper>
    <Gridimage>
        <Image src="https://res.cloudinary.com/austinogiza/image/upload/v1618650528/Rectangle_7_av2rdm.jpg"/>
    </Gridimage>
    <Gridtext>
        <Header>Integrate our entire system effortlessly.</Header>
        <Texts>While others thrive on complexity, we remain steadfast in our simplicity and our easy to understad documentation. Save hours of development time and focus on other important parts of your business.</Texts>
    </Gridtext>
</Wrapper>
</Layout>
<GreenLayout>
<GreenWrapper>
    
    <GreenGridtext>
        <Header>Build on the world's best platform</Header>
        <Texts>Rely on the most innovative startup for the next generation of identity verification. Build with peace of mind.</Texts>
        <Button>Get Started</Button>
    </GreenGridtext>
    <GreenGridimage>
        <Image src="https://res.cloudinary.com/austinogiza/image/upload/v1618650515/Rectangle_8_cfcdsr.jpg"/>
    </GreenGridimage>
</GreenWrapper>
</GreenLayout>
<Layout>
<Wrapper>
    <Gridimage>
        <Image src="https://res.cloudinary.com/austinogiza/image/upload/v1618619246/Rectangle_7_dea5at.jpg"/>
    </Gridimage>
    <Gridtext>
        <Header>We offer the most identity verification options </Header>
        <Texts>Get a detailed understanding of the identity of your users without having to spend time building things out yourself and worrying about compliance and privacy issues.</Texts>
    </Gridtext>
</Wrapper>
</Layout>

           </Container>
       </Gridbody>
    )
}

const Gridbody = styled(Body)`
min-height: 1300px;

`
const Container = styled.div`

width: 100%;
display: flex;
flex-direction: column;
max-width: 95%;
padding: 10px 15px;
margin: 0 auto;
`
const Layout = styled(GridLayout)`
background: ${colors.lightBlue};
padding: 30px;
@media only screen and (max-width: 650px){
    padding: 15px;
}
`

const GreenLayout = styled(GridLayout)`
background: ${colors.lightGreen};
padding: 30px;
@media only screen and (max-width: 650px){
    padding: 15px;
}
`
const Wrapper = styled.div`
display:grid;
grid-template-columns: repeat(2,1fr);
width: 100%;
height: 100%;
grid-gap: 50px;
@media only screen and (max-width: 650px){
    grid-template-columns: repeat(1,1fr);
}
`
const Gridimage= styled.div`
height: 400px;
max-width: 500px;
width: 100%;
margin: 0 auto;
@media only screen and (max-width: 650px){
    height: 250px;
}

`
const Gridtext = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
`
const Header = styled(SectionHeader)`
margin: 24px 0;
text-align: left;
color: ${colors.black};
`
const Texts = styled(BodyText)`
margin: 0;
color: ${colors.mildBlack};
text-align: left;
`
const GreenWrapper = styled.div`
display:grid;
grid-template-columns: repeat(2,1fr);
grid-template-areas: "Left Right";
width: 100%;
height: 100%;
grid-gap: 50px;
@media only screen and (max-width: 650px){
    grid-template-columns: repeat(1,1fr);
    grid-gap: 24px;
    grid-template-areas: "Right"
    "Left";
}
`
const GreenGridtext = styled.div`
grid-area: Left;
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
`
const GreenGridimage = styled.div`
grid-area:Right;
height: 400px;
max-width: 500px;
width: 100%;
margin: 0 auto;
@media only screen and (max-width: 650px){
    height: 250px;
}
`
const Button = styled(MainButton)`
margin: 40px 0;
`
export default Grid
