import React from 'react'
import styled from 'styled-components'
import { colors } from '../styles/Color'
import { FooterText } from '../styles/TextStyles'

const FooterList = ({text}) => {
    return (
       <>
       <Footer>

           {text}
       </Footer>
       </>
    )
}

const Footer = styled(FooterText)`
margin: 8px 0;
width: 100%;
text-align: left;
color: ${colors.white};
cursor: pointer;
transition: .4s ease-in;
:hover{
    transition: .4s ease-in;

    color: ${colors.blue};
}

@media only screen and (max-width: 650px){
   
    text-align:  center;
 
}
`
export default FooterList
