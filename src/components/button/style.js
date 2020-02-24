import styled from 'styled-components';

export const BUTTON = styled.button`
    /* this is the default styling of the button */
    padding:1rem;
    border:none;
    width:20%;
    border-radius:10px;
    height:90px;
    margin-top:75px;
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