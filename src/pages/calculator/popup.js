import styled from "styled-components";
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
    height: 600px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    margin-top:9%;
    margin-left:25%;
`
