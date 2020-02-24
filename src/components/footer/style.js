import styled from 'styled-components'

export const FOOTER = styled.div`
    display:flex;
    justify-content:space-evenly;
    margin:0;
    width:100%;
    height:90px;
    max-height:90px;
    background:#000;
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

