import styled from "styled-components";

export const calculatorPageContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    text-align: left;
    font-family: 'Brygada 1918', serif;
    margin-right: 10%;
`
export const tableContainer = styled.div`
    display: flex;
    justify-content: left;
    text-align: left;
    width: 20%;
    margin-top: 28px;
    margin-right: 340px;
    height: fit-content;
`

export const gradesContainer = styled.div`
    display: flex;
    flex-direction:row;
`

export const gradeDisplay = styled.div`
    font-size: 18ch;
    font-weight: bold;

`

export const buttonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    text-align: left;
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
    opacity: 1;
    backdrop-filter: blur(5px);
`

// pop up container
export const popUpCard = styled.div `
    width: 500px;
    height: 300px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    margin: auto;
    margin-top: 15%;
    backdrop-filter: blur(5px);
    padding: 8px;
`

export const bButton = styled.button`
    background-color: black;
    border-radius: 4px;
    color: white;
    font-family: 'Brygada 1918', serif;
    border: none;
    padding:6px;
    margin: 2px;
    font-size: 15px;

    &:hover {
        cursor: pointer;
        background-color: #272727;
    }

`

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;

`

export const IconContainer = styled.div`
    font-family: FontAwesome;
`