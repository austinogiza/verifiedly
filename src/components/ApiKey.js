import React from 'react'
import styled from 'styled-components'
import { Body } from '../container/Body'
import { MainButton, MainGhostButton } from '../styles/Button'
import { colors } from '../styles/Color'
import { BodyText, SectionHeader } from '../styles/TextStyles'

const ApiKey = () => {
    return (
        <Herocover>
<Titlesection>

    <Title>Get Started with  Verifiedly
</Title>
 <Texts>Get your API Key now
</Texts>



<Herobutton>

<Signup>Get it now</Signup>
<Sales>View docs</Sales>
</Herobutton>
</Titlesection>

      </Herocover>
    )
}



const Herocover = styled(Body)`
height: 490px;
width: 100%;
background: ${colors.lightBlue};
justify-content: flex-end;
 align-items: center;

`
const Titlesection = styled.div`
display: flex;
flex-direction: column;
min-height: 389px;
max-width: 700px;

margin: 0 auto;
width: 100%;
padding: 10px 25px;
`

const Title = styled(SectionHeader)`
color: ${colors.black};
margin: 24px  0;
`
const Texts = styled(BodyText)`
color: ${colors.mildBlack};
margin: 0;
`

const Herobutton = styled.div`
display: flex;
flex-direction: row;
width: 100%;
margin: 40px 0;
justify-content: center;
 align-items: center;
`

const Signup = styled(MainButton)`
margin: 0 20px;
@media only screen and (max-width: 650px){
    margin: 0 8px;
}
`
const Sales = styled(MainGhostButton)`
margin: 0 20px;

@media only screen and (max-width: 650px){
    margin: 0 8px;
}
`


export default ApiKey
