import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const FOOTER = styled.div`
    display:flex;
    flex-flow:row wrap;
    justify-content:space-evenly;
    margin:0;
    width:100%;
    height:90px;
    background:#000;
    @media (max-width:500px) {
      height:fit-content;
      padding:10px 0;
    }
    ${props => {
        if (props.style) return `
            position:${props.style.position};
            bottom:${props.style.bottomPos};
            top:${props.style.topPos};
            right:${props.style.rightPos};
            left:${props.style.leftPos};
            padding:${props.style.padding};
            width:${props.style.width};
            text-align:${props.style.textAlign};
            border:${props.style.border};
            background:${props.style.backgroundColor};
            margin:${props.style.margin};
        `
    }}

`

export const LINK = styled.button`
   border:none;
    flex-grow:1;
    width:80%;
    height:100%;
    border-radius:10px;
    font-size:1.8rem;
    background:#000;
    color:white;
    @media (max-width:500px) {
  

        padding-top:20px;
    }
    ${props => {
        if (props.style) {
            return `
                padding:${props.style.padding};
                border:${props.style.border};
                width:${props.style.width};
                border-radius:${props.style.borderRadius};
                background-color:${props.style.backgroundColor};
                color:${props.style.color};
            `
        }

    }}
`

export const LINK_WRAPPER = styled.div`
    border:none;
    display:flex;
    flex-flow:row wrap;
    justify-content:center;
    align-items:center;
    align-content:center;
    width:20%;
    border-radius:10px;
    font-size:1.8rem;
    background:#000;
    color:white;
    height:75px;
    @media (max-width:500px) {
       
        width:100%;
    }
    /* any overriding styles will be displayed here  */
    ${props => {
        if (props.style) {
            return `
                padding:${props.style.padding};
                border:${props.style.border};
                width:${props.style.width};
                border-radius:${props.style.borderRadius};
                background-color:${props.style.backgroundColor};
                color:${props.style.color};
            `
        }

    }}

`


export const EDIT_ICON = styled(FontAwesomeIcon)`
width:5%;
color:lightgrey;
margin:0 10px;
${props => {
        if (props.style) return `
             position:${props.style.position};
            bottom:${props.style.bottomPos};
            top:${props.style.topPos};
            right:${props.style.rightPos};
            left:${props.style.leftPos};
            padding:${props.style.padding};
            width:${props.style.width};
            font-size:${props.style.fontSize};
            color: black;  // this is black as a fallback... 
            -webkit-text-fill-color: ${props.style.textFillColor}; 
            -webkit-text-stroke-width: ${props.style.strokeWidth};
            -webkit-text-stroke-color: ${props.style.strokeColor};
            text-align:${props.style.textAlign};
            border:${props.style.border};
            background:${props.style.backgroundColor};
            margin:${props.style.margin};
    `
    }}
`

export const INPUT = styled.input`
background:transparent;
color: black;
text-align:center;
width:80%;
padding:5px;
border:none;
font-size:1.8rem;
border:1px solid dodgerblue;
margin-top:5px;
color:white;
height:50px;
${props => {
        if (props.style) return `
            position:${props.style.position};
            bottom:${props.style.bottomPos};
            top:${props.style.topPos};
            right:${props.style.rightPos};
            left:${props.style.leftPos};
            padding:${props.style.padding};
            width:${props.style.width};
            font-size:${props.style.fontSize};
            color: black;  // this is black as a fallback... 
            -webkit-text-fill-color: ${props.style.textFillColor}; 
            -webkit-text-stroke-width: ${props.style.strokeWidth};
            -webkit-text-stroke-color: ${props.style.strokeColor};
            text-align:${props.style.textAlign};
            border:${props.style.border};
            background:${props.style.backgroundColor};
            margin:${props.style.margin};
         `
    }}
`