import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled, {css} from "styled-components";
import recImg from './rec.png'

function App() {
    return (
        <div className="App">
            <Box>
                <ImageRec src={recImg}></ImageRec>
                <Header color={"black"}>Headline</Header>
                <TextP color={"#ABB3BA"}>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in
                    venen.</TextP>
                <Button value={"see more"} color={"#4E71FE"}>See more</Button>
                <Button value={"save"} color={"#4E71FE"}>Save</Button>
            </Box>
        </div>
    );
}

export default App;

type PropsType = {
    color?: string;
    value?: string;
}


const ImageRec = styled.img`
    width: 280px;
    height: 170px;
    border-radius: 10px;
    margin: 10px 10px 10px;
   
`

const Box = styled.div`
    width: 300px;
    height: 350px;
    border-radius: 15px;
    background: #FFF;
    box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.10);
    margin: 20px 20px;
`


const Header = styled.h1`
    color: ${props => props.color};
    font-family: sans-serif;
    font-size: 16px;
    padding-left: 20px;
`

const TextP = styled.p`
    color: ${props => props.color};
    font-size: 12px;
    padding-left: 20px;

`

const Button = styled.button<PropsType>`
    width: 86px;
    height: 30px;
    border-radius: 5px;
    font-size: 10px;
    font-weight: bold;

    
    ${props => props.value === "see more" && css<PropsType>`
    background-color: ${props => props.color};
        color: snow;
        border: none;
        margin-left: 20px;
    `}

    ${props => props.value === "save" && css<PropsType>`
    color: ${props => props.color};
        background-color: transparent;
        border-color: ${props => props.color};
        margin-left: 12px;
    `}

`