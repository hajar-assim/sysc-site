import styled from "styled-components";

// title of years
export const yearTitle = styled.h1`
    font-size: 30px;
    font-weight: bold;
    font-family: 'Epilogue', sans-serif;
    text-align: left;
    border-radius: 10px;
    border-color: black;
    margin: 30px;
`

export const courseContainer = styled.div`
    align-items: left;
    margin: 0px;
    display: flex;
    flex-wrap: wrap;
`

// coloured rectangle that surrounds the courses on the engineering tree
export const colourContainer = styled.div`
    border: 6px solid ${props => props.borderColor};
    border-radius: 10px;
    display: flex;
    width: 135px;
    height: 100px;
    margin: 30px;
`

// inner text container
export const textContainer = styled.div`
    display: flex;
    flex-direction:column;
    text-align: center;
    width: 100%;
    gap:4px;
    align-items: center;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
`