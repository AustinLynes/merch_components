import styled from 'styled-components'

export const FOOTER = styled.div`
    display:flex;
    justify-content:space-evenly;
    padding:10px 0;
    margin:0;
    width:100%;
    max-height:75px;
    background:#333;
    ${props =>{
        if(props.style) return`
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

