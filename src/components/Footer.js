import React from 'react'
import styled from 'styled-components'
import { Body, Container } from '../container/Body'
import { colors } from '../styles/Color'
import { FooterHead } from '../styles/TextStyles'
import FooterList from './FooterList'
import logo from '../images/logo.svg'
import {AiOutlineTwitter, AiOutlineDribbble} from 'react-icons/ai'
import {FiFacebook, FiGithub} from 'react-icons/fi'

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
                MADE WITH LOVE <Loveicon src="https://res.cloudinary.com/austinogiza/image/upload/v1618675823/image_1770_pzwtn5.svg"/>
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
    grid-gap: 32px;
}
`
const Social = styled.div`
width: 100%;
display: flex;
flex-direction: row;
height: 100%;
justify-content: flex-start;
 align-items: center;

 @media only screen and (max-width: 650px){
    justify-content: center;
}
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
 transition: .4s ease-in;

 :hover{
    transition: .4s ease-in;
     opacity: 1;
     transform: translateY(-5px) scale(1.05);
 }

`
const Twitter = styled(AiOutlineTwitter)`
width: 24px;
height: 24px;
color: ${colors.black};
`
const Facebook = styled(FiFacebook)`
width: 24px;
height: 24px;
color: ${colors.black};
`
const Github = styled(FiGithub)`
width: 24px;
height: 24px;
color: ${colors.black};
`
const Dribbble = styled(AiOutlineDribbble)`
width: 24px;
height: 24px;
color: ${colors.black};
`

const Copyright = styled.div`
height: 17px;
max-width: 300px;
width: 100%;
height: 100%;
font-family: Usual;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 17px;
letter-spacing: 0em;
text-align: center;
color: ${colors.white};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`
const Love = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
color: ${colors.white};

@media only screen and (max-width: 650px){
    align-items: center;
}
`
const Lovehead = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: row;
font-family: "Usual Bold";
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: 1.3;
margin:  0 0 32px 0;
text-align: left;
justify-content: flex-start;
align-items: flex-start;
@media only screen and (max-width: 650px){
    text-align:  center;
    align-items: center;
    justify-content: center;
}

`
const Loveicon = styled.img`
width: 32px;
height: 32px;
margin: 0 0 0 21px;
`
const Lovelogo = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: flex-start;
align-items: center;
color: ${colors.white};

@media only screen and (max-width: 650px){
    align-items: center;
}
`
const Logo = styled.img`
height: 27px;

@media only screen and (max-width: 650px){
    max-width: 140px;
width: 100%;
margin: 0 auto;
}
`
export default Footer
