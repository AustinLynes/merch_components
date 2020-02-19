import styled from "styled-components";

export const BANNER = styled.div`
width:100%;
height:125px;
background:yellow;
padding:1rem;
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