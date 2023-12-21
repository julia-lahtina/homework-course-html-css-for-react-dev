import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled, {css} from "styled-components";
import recImg from './rec.png'
import {ImageRec} from "./components/ImageRec";
import {Header} from "./components/Header";
import {Button} from "./components/Button";
import {TextP} from "./components/TextP";



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



const Box = styled.div`
    width: 300px;
    height: 350px;
    border-radius: 15px;
    background: #FFF;
    box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.10);
    margin: 20px 20px;

    button {
        cursor: pointer;
    }
`




