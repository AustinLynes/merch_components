import styled from 'styled-components'

export const FOOTER = styled.div`
    display:flex;
    flex-flow:row wrap;
    justify-content:space-evenly;
    margin:0;
    width:1440px;
    height:120px;
    background:#000;
    @media (max-width:500px) {
      height:fit-content;
      width:100%;
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


