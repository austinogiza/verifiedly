import React from 'react'
import styled from 'styled-components'
import { Body, Container } from '../container/Body'
import { colors } from '../styles/Color'
import { FooterHead } from '../styles/TextStyles'
import FooterList from './FooterList'
import logo from '../images/logo.svg'

const Footer = () => {
    return (
       <FooterBody>
<Container>
    <FooterTop>
<Footerwrap>

    <Cover>
        <Head>VERIFIEDLY</Head>
        <Lists>
<FooterList text="Partner with us"/>
<FooterList text="Custom solution"/>
<FooterList text="Investors"/>
        </Lists>
    </Cover>
    <Cover>
        <Head>COMPANY</Head>
        <Lists>
<FooterList text="Contact Us"/>
<FooterList text="About"/>
<FooterList text="Careers"/>
        </Lists>
    </Cover>
    <Cover>
        <Head>PRODUCTS</Head>
        <Lists>
<FooterList text="Padle"/>
<FooterList text="Paywella"/>
<FooterList text="IpSecure"/>
        </Lists>
    </Cover>
    <Cover>
        <Head>RESOURCES</Head>
        <Lists>
<FooterList text="My Account"/>
<FooterList text="Branding Resources"/>

        </Lists>
    </Cover>
    <Cover>
        <Head>SUPPORT</Head>
        <Lists>
<FooterList text="Frequently Asked Questions"/>
<FooterList text="Email Us"/>
<FooterList text="Privacy & terms"/>
<FooterList text="Terms of service"/>
        </Lists>
    </Cover>
</Footerwrap>
    </FooterTop>
    <FooterBottom>
        <Bottomwrap>
            <Social>
<SocialCover>
    <Twitter/>
</SocialCover>
<SocialCover>
    <Facebook/>
</SocialCover>
<SocialCover>
    <Github/>
</SocialCover>
<SocialCover>
    <Dribbble/>
</SocialCover>

            </Social>

            <Copyright>
            All rights reserved. &copy; {new Date().getFullYear()} Verifiedly LLC.
            </Copyright>
            <Love>

                <Lovehead>
                MADE WITH LOVE <Loveicon/>
                </Lovehead>
                <Lovelogo>
                    <Logo src={logo}/>
                </Lovelogo>
            </Love>
        </Bottomwrap>
    </FooterBottom>
</Container>

       </FooterBody>
    )
}


const FooterBody = styled(Body)`
min-height: 600px;
background: ${colors.dark};
`

const FooterTop = styled.div`
width: 100%;
padding: 10px 25px;
margin: 80px 0;
`
const FooterBottom = styled.div`
width: 100%;
padding: 10px 25px;
`

const Footerwrap = styled.div`
display:grid;
grid-template-columns: repeat(5,1fr);
width: 100%;
height: 100%;
grid-gap: 50px;
@media only screen and (max-width: 950px){
    grid-template-columns: repeat(3,1fr);
    place-items: center;
}
@media only screen and (max-width: 650px){
    grid-template-columns: repeat(1,1fr);
    place-items: center;
    grid-gap: 24px;
}
`
const Cover = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
width: 100%;
height: 100%;

@media only screen and (max-width: 650px){
    justify-content: center;
align-items: center;
}
`
const Head = styled(FooterHead)`
width: 100%;
min-height: 30px;
color: ${colors.white};
text-align: left;
margin: 40px 0;
@media only screen and (max-width: 650px){
    text-align: center;
    margin: 24px 0;
}
`
const Lists = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;

@media only screen and (max-width: 650px){

align-items: center;
}
`

const Bottomwrap = styled.div`
display:grid;
grid-template-columns: repeat(3,1fr);
width: 100%;
height: 100%;
grid-gap: 50px;
@media only screen and (max-width: 650px){
    grid-template-columns: repeat(1,1fr);
    place-items: center;
    grid-gap: 24px;
}
`
const Social = styled.div`
width: 100%;
display: flex;
flex-direction: row;

`
const SocialCover = styled.div`
width: 40px;
height: 40px;
border-radius:50%;
background: #FCFCFC;
display: flex;
margin: 8px;
justify-content: center;
 align-items: center;
 cursor: pointer;

`
const Twitter = styled.div`
width: 24px;
height: 24px;
color: ${colors.black};
`
const Facebook = styled.div`
width: 24px;
height: 24px;
color: ${colors.black};
`
const Github = styled.div`
width: 24px;
height: 24px;
color: ${colors.black};
`
const Dribbble = styled.div`
width: 24px;
height: 24px;
color: ${colors.black};
`

const Copyright = styled.div`
height: 17px;
max-width: 250px;
width: 100%;
font-family: Usual;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 17px;
letter-spacing: 0em;
text-align: left;
color: ${colors.white};

`
const Love = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-end;
color: ${colors.white};
`
const Lovehead = styled.div`
width: 100%;
display: flex;
flex-direction: row;

`
const Loveicon = styled.img`
width: 32px;
height: 32px;
`
const Lovelogo = styled.div`
width: 100%;
`
const Logo = styled.img`
height: 27px;
max-width: 140px;
width: 100%;
`
export default Footer
