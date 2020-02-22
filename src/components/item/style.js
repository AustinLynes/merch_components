import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const WRAPPER = styled.div`
flex-grow:1;
display:flex;
height: 300px;
border:2px solid black;
flex-flow:row wrap;

${props => {
        if (props.style) return `
            position:${props.style.position};
            display:${props.style.display};
            flex-flow:row wrap;
            flex-grow:${props.style.flexGrow};
            margin:${props.style.margin};
            height: ${props.style.height};
            max-width:${props.style.maxWidth};
            max-height:${props.style.maxHeight};
            border-radius:${props.style.borderRadius};
            padding:${props.style.padding};
            box-shadow: ${props.style.boxShadow};
    `
    }}
`

export const IMAGE = styled.img`
max-width:100%;
object-fit:contain;
margin:0 auto;
${props => {
        if (props.style) return `
            max-width:${props.style.maxWidth};
            max-height:${props.style.maxHeight};
            object-fit:${props.style.objectFit};
            margin:${props.style.margin};
            padding:${props.style.padding};
         `
    }}
`
export const PLUS_ICON = styled(FontAwesomeIcon)`
background:dodgerblue;
padding:1rem;
width:50px;
height:50px;
border-radius:50%;
color:white;
font-size:2rem;
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
export const CLOSE_BUTTON = styled(FontAwesomeIcon)`
position:absolute;
top: 5px;
right:5px;
border-radius:50%;
font-size:1.4rem;
padding:5px;
width:20px;
height:20px;
text-align:center;
border:none;
color: grey;
text-align:center;
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