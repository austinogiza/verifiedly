import React from 'react'
import styled from 'styled-components'
import { Body, Image } from '../container/Body'
import { IconsHeader } from '../styles/TextStyles'

const List = ({image, text}) => {
    return (
     <Cover>
         <Coverimage><Image src={image}/></Coverimage>
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
const Coverimage = styled.div`
width: 40px;
height: 40px;
`
const Covertext = styled.div`
width: 100%;
min-height: 40px;
margin: 0;
`
const Coverp  = styled(IconsHeader)`
width: 100%;
text-align: left;
margin: 16px 0;
@media only screen and (max-width: 650px){
    text-align: center;
 
}
`
export default List
