import React from 'react'
import styled from 'styled-components'
import { Body } from '../container/Body'
import { colors } from '../styles/Color'
import { BodyText, SectionHeader } from '../styles/TextStyles'
import PriceTable from './PriceTable'

const Table = () => {
    return (
        <Herocover>
<Titlesection>

    <Title> <span>Fair pricing</span> for everyone.
</Title>
<Texts>Whether you plan on working on a small project or large, we got you covered</Texts>
</Titlesection>

<Tables>
<Tablewrap>
<PriceTable 
bg="#FAFDFF"
img="https://res.cloudinary.com/austinogiza/image/upload/v1618619054/Group-1_ztuypg.svg"
title="0.25"
text="Only pay for what you use. No monthly fees, nothing!"
subtitle="Pay as you go" 
color="#000"
textColor="#999999"
blue={true}/>

<PriceTable 
bg="#1F2C73"
color="#fff"
textColor="#FAFAFA"
img="https://res.cloudinary.com/austinogiza/image/upload/v1618619051/Frame-5_kpocef.svg"
title="0.10"
text="If you need something on the larger scale of things and require some arrangements."
subtitle="Enterprise" 
blue={false}/>

</Tablewrap>

</Tables>
      </Herocover>
    )
}



const Herocover = styled(Body)`
min-height: 600px;
width: 100%;
background: ${colors.white};
justify-content: center;
align-items: center;
 z-index: 3;
 overflow: hidden
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
min-height: 150px;
max-width: 700px;
margin: 0 auto;
width: 100%;
padding: 10px 25px;

 z-index: 5;
`

const Title = styled(SectionHeader)`
color: ${colors.black};
margin: 24px 0;

span{
    color: ${colors.blue};
}
`


const Tables = styled.div`
max-width: 760px;
margin: 80px auto;
width: 100%;
min-height: 400px;
`
const Tablewrap = styled.div`
display:grid;
grid-template-columns: repeat(2,1fr);
width: 100%;
height: 100%;
grid-gap: 40px;
@media only screen and (max-width: 650px){
    grid-template-columns: repeat(1,1fr);
    place-items: center;
}
`

export default Table
