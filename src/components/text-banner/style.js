import styled from "styled-components";

export const BANNER = styled.div`
box-sizing:border-box;
width:100%;
height:75px;
background:linear-gradient(#fdf771, #e6de0a);
padding:1rem;
margin:0;
${props=>{
    if(props.style) return `
        width:${props.style.width};
        height:${props.style.height};
        background:${props.style.backgroundColor};
        color:${props.style.color};
        font-size:${props.style.fontSize};
    `
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
export const MESSAGE = styled.h2`
width:90%;
margin:0 auto;
color:black;
border:none;
${props=>{
    if(props.style) return `
        width:${props.style.width};
        height:${props.style.height};
        background:${props.style.backgroundColor};
        color:${props.style.color};
        font-size:${props.style.fontSize};
    `
}}
`

export const INPUT = styled.input`
    border:none;
    flex-grow:1;
    width:80%;
    height:100%;
    border-radius:10px;
    font-size:1.8rem;
    background:#000;
    color:white;
    text-align:center;
    border:0.5px solid dodgerblue;

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
