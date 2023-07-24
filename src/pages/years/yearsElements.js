import styled from "styled-components";

// title of years
export const yearTitle = styled.h1`
    font-size: 40px;
    font-weight: bold;
    font-family: 'Brygada 1918', serif;
    text-align: left;
    border-radius: 10px;
    border-color: black;
    margin: 20px;
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

    &:hover {
        opacity: 0.7;
        cursor:pointer;
    }
`

// inner text container
export const textContainer = styled.div`
    display: flex;
    flex-direction:column;
    text-align: center;
    width: 100%;
    height: 100%;
    gap:4px;
    align-items: center;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
    
`

// pop up background
export const popUpBackground = styled.div`
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.6);
`

// pop up container
export const popUpCard = styled.div `
    width: 900px;
    height: 400px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    margin-top:9%;
    margin-left:25%;
    padding: 23px;
`



