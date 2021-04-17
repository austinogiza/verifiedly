import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { colors } from '../styles/Color'
import {BsChevronUp} from 'react-icons/bs'
import { motion } from 'framer-motion'
const Top = () => {

    const [clicked, setClicked]= useState(false)

    const handleBackTo =()=>{
window.scrollTo(0,0)
    }

    const checkHeight =()=>{
        if(window.pageYOffset > 200){
            setClicked(true)
        }else{
            setClicked(false)
        }
    }
    useEffect(()=>{

        window.addEventListener("scroll", checkHeight)

    }, [])
    return (
     <Body  initial={{opacity: 0}} transition={{duration: 0.4}} animate={{opacity: 1}} exit={{opacity: 0}}show={clicked} onClick={handleBackTo}>
<Iconwrapper>
    <Icon/>
</Iconwrapper>

     </Body>
    )
}

const Body = styled(motion.div)`
position: fixed;
z-index: 45;
width: 64px;
height: 64px;
bottom: 40px;
right: 30px;
cursor: pointer;
display: ${props=>props.show ?"block": "none"};
border-radius: 50%;
background: ${colors.blue};
`
const Iconwrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`
const Icon = styled(BsChevronUp)`
width: 40px;
color: ${colors.white};
height: 40px;
`
export default Top
