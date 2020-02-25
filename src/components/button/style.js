import styled from 'styled-components';

export const BUTTON = styled.button`
    /* this is the default styling of the button */
    border:none;
    width:20%;
    border-radius:10px;
    height:90px;
    margin-top:75px;
    font-size:1.8rem;
    background:#000;
    color:white;
    /* any overriding styles will be displayed here  */
    ${props => {
        if (props.style) {
            return `
                padding:${props.style.padding};
                border:${props.style.border};
                width:${props.style.width};
                border-radius:${props.style.borderRadius};
                background-color:${props.style.backgroundColor};
                color:${props.style.color};
            `
        }

    }}

`
export const INPUT = styled.input`
background:black;
color: white;
text-align:center;
width:20%;
padding:5px;
border:none;
font-size:1.8rem;

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