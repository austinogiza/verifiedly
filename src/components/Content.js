import React from 'react'
import styled from 'styled-components'
import { Body} from '../container/Body'
import { BodyText } from '../styles/TextStyles'

const Content = ({header, text}) => {
    return (
     <Cover>
         <Coverheader><Headertext>{header}</Headertext></Coverheader>
         <Covertext><Coverp>{text}</Coverp></Covertext>
     </Cover>
    )
}

const Cover = styled(Body)`
align-items: flex-start;
justify-content: center;
min-height: 110px;

@media only screen and (max-width: 650px){

    align-items: center;
}
`
const Coverheader = styled.div`
width: 100%;
min-height: 40px;
`
const Covertext = styled.div`
width: 100%;
min-height: 40px;
margin: 0;
`
const Headertext  = styled(BodyText)`
width: 100%;
text-align: left;
margin: 16px 0;
@media only screen and (max-width: 650px){
    text-align: center;
 
}
`
const Coverp  = styled(BodyText)`
width: 100%;
text-align: left;
margin: 16px 0;
@media only screen and (max-width: 650px){
    text-align: center;
 
}
`
export default Content
