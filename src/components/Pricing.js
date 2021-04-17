import React from 'react'
import styled from 'styled-components'
import { Body, Image } from '../container/Body'
import { MainButton } from '../styles/Button'
import { colors } from '../styles/Color'
import { BodyText, SectionHeader } from '../styles/TextStyles'

const Pricing = () => {
    return (
        <Herocover>
<Titlesection>

    <Title>With pricing that's just right.
</Title>
<Texts>Companies trust us to handle their identity verifications and maintain their KYC / AML compliance.</Texts>
<Signup>See pricing</Signup>
</Titlesection>

<Noise src="https://res.cloudinary.com/austinogiza/image/upload/v1618619885/Noise_lp6pax.jpg"/>
      </Herocover>
    )
}



const Herocover = styled(Body)`
height: 600px;
width: 100%;
background: ${colors.lightBlue};
justify-content: center;
align-items: center;
 position: relative;
 z-index: 3;
 overflow: hidden;

@media only screen and (max-width: 650px){
    height: 500px;
}
`
const Noise = styled(Image)`
top: 0;
left: 0;
position: absolute;
z-index: 2;
`

const Texts = styled(BodyText)`
color: ${colors.mildBlack};
margin: 0;

`
const Titlesection = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-height: 389px;
max-width: 800px;
margin: 0 auto;
width: 100%;
padding: 10px 25px;
position: relative;
 z-index: 5;
`

const Title = styled(SectionHeader)`
color: ${colors.black};
margin: 24px 0;
`



const Signup = styled(MainButton)`
margin: 40px 0;
@media only screen and (max-width: 650px){
    margin: 32px 0;
}
`



export default Pricing
