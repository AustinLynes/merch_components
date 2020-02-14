import styled from 'styled-components';

const ButtonGroup = styled.div`
    display:flex;
    flex-flow:row wrap;
    justify-content:space-around;
    width:100%;
    padding:${props => props.padding || "15px 0"};
    transition:all 1s ease-in-out;
`

export default ButtonGroup