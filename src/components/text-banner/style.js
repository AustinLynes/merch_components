import styled from "styled-components";

export const BANNER = styled.div`
width:100%;
height:75px;
background:yellow;
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

export const MESSEGE = styled.h2`
width:100%;
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