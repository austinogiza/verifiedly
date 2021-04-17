import styled from "styled-components";
import { colors } from "./Color";

export const MainButton = styled.button`
height: 58px;
max-width: 180px;
width: 100%;
background: ${colors.blue};
border-radius: 10px;
color: ${colors.white};
outline: none;
border: none;
font-family: "Usual Bold";
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 1;

display: flex;
justify-content: center;
 align-items: center;

transition: .4s ease-in;
:hover{
    transition: .4s ease-in;
    background: ${colors.lightBlue};
    color: ${colors.dark};
}
`

export const MainGhostButton = styled.button`
height: 58px;
max-width: 180px;
width: 100%;
background: ${colors.white};
border-radius: 10px;
color: ${colors.blue};
outline: none;
border: 1px solid  ${colors.blue};
font-family: "Usual Bold";
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 1;

display: flex;
justify-content: center;
 align-items: center;

transition: .4s ease-in;
:hover{
    transition: .4s ease-in;
    background: ${colors.dark};
    color: ${colors.white};
}
`

export const LargeButton = styled.button`
height: 58px;
max-width: 250px;
width: 100%;
background: ${colors.blue};
border-radius: 10px;
color: ${colors.white};
outline: none;
border: none;

transition: .4s ease-in;
:hover{
    transition: .4s ease-in;
    background: ${colors.lightBlue};
    color: ${colors.dark};
}
`

export const LargeGhostButton = styled.button`
height: 58px;
max-width: 250px;
width: 100%;
background: ${colors.white};
border-radius: 10px;
color: ${colors.blue};
outline: none;
border: 1px solid  ${colors.blue};
font-family: "Usual Bold";
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 1;

display: flex;
justify-content: center;
 align-items: center;

transition: .4s ease-in;
:hover{
    transition: .4s ease-in;
    background: ${colors.dark};
    color: ${colors.white};
}
`