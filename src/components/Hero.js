import React from 'react'
import styled from 'styled-components'
import { Body, Image } from '../container/Body'
import { MainButton, MainGhostButton } from '../styles/Button'
import { colors } from '../styles/Color'
import { BodyText, Header, SubHeader } from '../styles/TextStyles'


const Hero = () => {
    return (
    <Herocover>
<Titlesection>
<Subtitle>Meet Verifiedly</Subtitle>
    <Title>Automate your identity verification</Title>
<Texts>Companies trust us to handle their identity verifications and maintain their KYC / AML compliance.</Texts>
<Herobutton>

<Signup>Sign Up</Signup>
<Sales>Contact Sales</Sales>
</Herobutton>
</Titlesection>
<Heroimage>
    <Image src="https://res.cloudinary.com/austinogiza/image/upload/v1618621522/ezgif.com-gif-maker_svisq2.gif"/>
</Heroimage>

      </Herocover>
    )
}



const Herocover = styled(Body)`
height: 1050px;
width: 100%;
background: ${colors.dark};
justify-content: flex-end;
 align-items: center;

 @media only screen and (max-width: 650px){
    height: 880px;
}

@media only screen and (max-width: 380px){
    min-height: 900px;
}
`
const Titlesection = styled.div`
display: flex;
flex-direction: column;
min-height: 389px;
max-width: 670px;
margin: 0 auto;
width: 100%;
padding: 10px 25px;

`

const Title = styled(Header)`
color: ${colors.white};
margin: 16px 0 24px 0;
`
const Subtitle = styled(SubHeader)`
color: ${colors.white};
margin: 0;
`
const Texts = styled(BodyText)`
color: ${colors.offWhite};
margin: 0;
`
const Herobutton = styled.div`
display: flex;
flex-direction: row;
width: 100%;
margin: 40px 0;
justify-content: center;
 align-items: center;
 @media only screen and (max-width: 380px){
    flex-direction: column;
    margin: 40px 0 56px 0;
}

`

const Signup = styled(MainButton)`
margin: 0 20px;
@media only screen and (max-width: 650px){
    margin: 0 8px;
}

@media only screen and (max-width: 380px){
    margin: 8px 0;
}
`
const Sales = styled(MainGhostButton)`
margin: 0 20px;

@media only screen and (max-width: 650px){
    margin: 0 8px;
}
@media only screen and (max-width: 380px){
    margin: 8px 0;
}
`

const Heroimage = styled.div`
height: 478px;
max-width: 1000px;
width: 100%;
margin: 0 auto;

@media only screen and (max-width: 650px){
    height: 350px;
}
`
export default Hero
