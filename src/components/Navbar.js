import { motion } from 'framer-motion'
import React, { useState } from 'react'
import styled from 'styled-components'
import { Body, Container, Image } from '../container/Body'
import logo from '../images/logo.svg'
import { MainButton } from '../styles/Button'
import { colors } from '../styles/Color'
const Navbar = () => {

  const [menu, setMenu] =useState(false)

  const handleToggle = ()=>{
    setMenu(!menu)
  }
    return (
      <Header>

<BodyContainer>
<Nav>
  <Logo>
    <Image src={logo}/>
  </Logo>
  <Navlinks>
    <Navul><Navli>Partners</Navli>
    
    <Navli>Coverage</Navli>
    <Navli>Company</Navli>
    <Navli>Customers</Navli>
    <Navli>Documentation</Navli>
    </Navul>
  </Navlinks>
  <Navbutton>
    <Button>Get a demo</Button>
  </Navbutton>
</Nav>


<Mobiletoggle>
  <Mobilewrap onClick={handleToggle}>
    <Top toggle={menu}/>
    <Bottom toggle={menu}/>
  </Mobilewrap>
</Mobiletoggle>
<Mobilemenu initial={{opacity: 0}} transition={{duration: 0.6}} animate={{opacity: 1}} exit={{opacity: 0}} toggle={menu}>
<Navul><Navli>Partners</Navli>
    
    <Navli>Coverage</Navli>
    <Navli>Company</Navli>
    <Navli>Customers</Navli>
    <Navli>Documentation</Navli>
    <Button>Get a demo</Button>
    </Navul>


</Mobilemenu>
</BodyContainer>
      </Header>
    )
}


const Header = styled(Body)`
height: 110px;
position: sticky;
background: ${colors.dark};
display: flex;
justify-content: center;
align-items: center;
padding: 10px 15px;
`
const BodyContainer = styled(Container)`
position: relative;
`
const Nav = styled.nav`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;


`
const Logo = styled.div`
height: 27px;
max-width: 140px;
width: 100%;
padding: 5px;
margin: 0 auto;

@media only screen and (max-width: 800px){
  padding: 0px;
  display: flex;
justify-content: flex-start;
align-items: flex-start;
margin: 0 24px;
   
   }
`
const Navlinks = styled.div`
width: 100%;
max-width: 600px;
margin: 0 auto;
padding: 10px 20px;
@media only screen and (max-width: 800px){
   
 display: none;

}
`
const Navul = styled.ul`
display: flex;
width: 100%;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 20px;

@media only screen and (max-width: 800px){
  flex-direction: column;
  
  }
`
const Navli = styled.li`
color: ${colors.white};
font-family: "Usual Bold";
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 1.2;
text-align: center;
cursor: pointer;
margin: 0 16px;
transition: .4s ease-in;
:hover{
    transition: .4s ease-in;

    color: ${colors.blue};
}

@media only screen and (max-width: 800px){
  margin: 8px 0;
  color: ${colors.black};
  
  }

`
const Navbutton = styled.div`
width: 100%;
max-width: 250px;
display: flex;

justify-content: flex-end;
align-items: center;
@media only screen and (max-width: 800px){
   
   display: none;
  
  }
`
const Button = styled(MainButton)`
@media only screen and (max-width: 800px){
  margin: 32px 0;

  
  }
`

const Mobilemenu = styled(motion.div)`
   display: none;
   position: fixed;
top: 0;
left: 0;
z-index: 30;
width: 100%;
height: 100vh;
background: ${colors.white};
overflow-y: hidden;
transition: 0.4s ease-in;
backface-visibility: hidden;
opacity: 0;

transform: ${props => props.toggle ? "translateX(0)": "translateX(-150%)"};
@media only screen and (max-width: 800px){
  display: flex;
  opacity: 1;
  transition: 0.4s ease-in;
flex-direction: column;
justify-content: center;
align-items: center;
  }
`

const Mobiletoggle = styled.div`
position: fixed;
top: 3px;
right: 10px;
z-index: 40;
width: 40px;
height: 40px;
display: none;

@media only screen and (max-width: 800px){
  display: block;
 
  }
`
const Mobilewrap = styled.div`
cursor: pointer;
  display: flex;
  width: 100%;
height: 100%;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Top = styled.span`
 width: 40px;
  height: 3px;
  background: ${props => props.toggle ? "#000": "#fff"};
  transform: ${props => props.toggle ? "rotate(45deg) translate(-5px, 8px)": "rotate(0deg)"};
margin: 4px 0;
transition: 0.4s ease-in;
`
const Bottom = styled.span`
width: 40px;
  height: 3px;
  margin: 4px 0;
  transition: 0.4s ease-in;
  background: ${props => props.toggle ? "#000": "#fff"};
  transform: ${props => props.toggle ? "rotate(-45deg) translate(-3px, -9px)": "rotate(0deg)"};
`
export default Navbar
