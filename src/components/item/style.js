import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const WRAPPER = styled.div`
position:relative;
display:flex;
flex-flow:row wrap;
justify-content:center;
border:2px solid black;
/* height: 100%; */
height:648px;
width:95%;
margin:0 auto;

${props => {
        if (props.onsale) return `
            border:3px solid dodgerblue;
        `
        if(props.isdouble) return `
            width:768px; 
        `
        if (props.style) return `
            position:${props.style.position};
            display:${props.style.display};
            flex-flow:row wrap;
            flex-grow:${props.style.flexGrow};
            margin:${props.style.margin};
            height: ${props.style.height};
            width: ${props.style.width};
            max-height:${props.style.maxHeight};
            border-radius:${props.style.borderRadius};
            padding:${props.style.padding};
            box-shadow: ${props.style.boxShadow};
    `
    }}
`

export const TEXT = styled.p`
background:transparent;
color: black;
text-align:center;
width:50%;
padding:5px;
border:none;
font-size:16px;
margin:0;
margin-top:5px;
${props => {
        if (props.isCost) return `
            color:limegreen;
            text-decoration: ${props => props.onSale ? "line-through" : "none"};
        `
        if (props.isDescp) return `
            font-size:18px;
            font-weight:100;

        `
        if (props.isName) return `
            font-size:18px;
            font-weight:600;

        `
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

export const IMAGE = styled.img`
max-width:90%;
height:460px;
object-fit:contain;
margin:0 auto;
user-select: none;
-moz-user-select: none;
-webkit-user-drag: none;
-webkit-user-select: none;
-ms-user-select: none;
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
// plus icon needs to be turned into its own card.. 
export const PLACEHOLDER = styled.div`
    display:flex;
    flex-flow:row wrap;
    justify-content:center;
    align-content:center;
    border:1px solid lightgrey;
    border-radius:10px;
    width:90%;
    height:480px;
    padding:1rem;
    ${props => {
        if (props.item_is_null) return `
            width:15%;
            margin:20px;
            margin-top:110px;
            height:460px;
            border:1px solid dodgerblue;
            &:active{
                opacity:.7;
                box-shadow:6px 6px 5px rgba(0,0,0,.3);
            }
            @media (max-width:500px) {
                width:80%;
            }
        `
        if (props.style) return `
             position:${props.style.position};
            bottom:${props.style.bottomPos};
            top:${props.style.topPos};
            right:${props.style.rightPos};
            left:${props.style.leftPos};
            padding:${props.style.padding};
            width:${props.style.width};
            font-size:${props.style.fontSize};
            text-align:${props.style.textAlign};
            border:${props.style.border};
            background:${props.style.backgroundColor};
            margin:${props.style.margin};
    `
    }}
`


export const PLUS_ICON = styled(FontAwesomeIcon)`
box-sizing:border-box;
background:dodgerblue;
padding:1rem;
border-radius:50%;
color:white;
/* font-size:28px; */
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

export const SALE_FLAG = styled.div`
position:absolute;
top: -40px;
left: 50% - 100px;
font-size:1.4rem;
padding:5px;
width:25%;
text-align:center;
-webkit-text-fill-color: white; 
-webkit-text-stroke-width: 1px;
-webkit-text-stroke-color: black;
color: white;
background:dodgerblue;
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