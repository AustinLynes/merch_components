import styled from "styled-components";

export const CAROSEL = styled.div`
        flex-grow:1;
        height:600px;
        position:relative;
        display:flex;
        flex-flow:row wrap;
        ${props => {
                if (props.style) return `
                position:${props.style.position};
                flex-grow:${props.style.flexGrow};
                height:${props.style.height};
                display:${props.style.display};
                flex-flow:${props.style.flexDirection} wrap;    
                `
        }}
`

export const IMAGE = styled.img`
    width:50%;
    max-height:600px;
    margin:0 auto;
    object-fit:contain ;
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
                object-fit:${props.style.objectFit};
                border:${props.style.border};
                margin:${props.style.margin};
    `
        }}
`

