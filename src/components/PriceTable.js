import React from 'react'
import styled from 'styled-components'
import { Image } from '../container/Body'
import { LargeButton, LargeGhostButton } from '../styles/Button'
import { PricingHeader, PricingLight, SubHeader } from '../styles/TextStyles'

const PriceTable = ({bg, img,title,textColor, color,text,subtitle,blue}) => {
    return (
      <Tablecover bg={bg} color={color}>

          <Icon><Image src={img}/></Icon>

          <Subtitle>{subtitle}</Subtitle>
          <Title><span>&#36;</span> {title}
</Title>
<Texts color={textColor}>{text}</Texts>
{blue ? <>
    <Button>Get Started</Button>
</>:
<Light> Contact Sales</Light>
}

      </Tablecover>
    )
}



const Tablecover = styled.div`
height: 450px;
max-width: 350px;
width:100%;
background: ${props=> props.bg};
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 10px 25px;
color: ${props => props.color};
`
const Icon = styled.div`
height: 40px;
width: 40px;
margin: 24px 0 40px 0 ;

`
const Title = styled(PricingHeader)`
margin: 24px 0;
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

span{
    font-family: "Usual Light";
font-size: 18px;
margin: 0 8px;
font-style: normal;
font-weight: 350;
line-height: 18px;

}
`
const Texts = styled(PricingLight)`
margin: 0;

`
const Subtitle = styled(SubHeader)`
margin: 0;
`
const Button = styled(LargeButton)`
margin: 40px 0;
@media only screen and (max-width: 650px){
    margin: 32px 0;
}
`

const Light = styled(LargeGhostButton)`
margin: 40px 0;
@media only screen and (max-width: 650px){
    margin: 32px 0;
}
`
export default PriceTable
