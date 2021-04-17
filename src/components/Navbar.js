import React from 'react'
import styled from 'styled-components'
import { Body, Container, Image } from '../container/Body'
import logo from '../images/logo.svg'
import { MainButton } from '../styles/Button'
import { colors } from '../styles/Color'
const Navbar = () => {
    return (
      <Header>

<Container>
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
</Container>
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
`
const Navlinks = styled.div`
width: 100%;
max-width: 600px;
margin: 0 auto;
padding: 10px 20px;
`
const Navul = styled.ul`
display: flex;
width: 100%;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 20px;
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

`
const Navbutton = styled.div`
width: 100%;
max-width: 250px;
display: flex;

justify-content: flex-end;
align-items: center;
`
const Button = styled(MainButton)`

`
export default Navbar
