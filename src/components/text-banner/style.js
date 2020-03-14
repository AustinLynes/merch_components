import styled from "styled-components";

export const BANNER = styled.div`
display:flex;
flex-flow:row wrap;
justify-content:center;
align-content:center;
align-items:center;
box-sizing:border-box;
width:1200px;
height:75px;
background:linear-gradient(#fdf771, #e6de0a);
padding:1rem;
margin:0;
${props => {
        if (props.style) return `
        width:${props.style.width};
        height:${props.style.height};
        background:${props.style.backgroundColor};
        color:${props.style.color};
        font-size:${props.style.fontSize};
    `
    }}
`

export const MESSAGE = styled.h2`
width:80%;
color:black;
flex-grow:1;
height:100%;
border:none;
margin:0;
${props => {
        if (props.style) return `
        width:${props.style.width};
        height:${props.style.height};
        background:${props.style.backgroundColor};
        color:${props.style.color};
        font-size:${props.style.fontSize};
    `
    }}
`


