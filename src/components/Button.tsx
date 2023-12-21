import styled, {css} from "styled-components";

type ButtonPropsType = {
    color?: string;
    value?: string;
}
export const Button = styled.button<ButtonPropsType>`
    width: 86px;
    height: 30px;
    border-radius: 5px;
    font-size: 10px;
    font-weight: bold;
    font-family: "Inter", sans-serif;
    

    ${props => props.value === "see more" && css<ButtonPropsType>`
        background-color: ${props => props.color};
        color: snow;
        margin-left: 20px;
        border: none;
        
        &:hover {
            background-color: transparent;
            color: ${props => props.color};
            border: 2px solid ${props => props.color};
            transition: 0.2s;
        }
    `}

    ${props => props.value === "save" && css<ButtonPropsType>`
        color: ${props => props.color};
        background-color: transparent;
        border: 2px solid ${props => props.color};
        margin-left: 12px;

        &:hover {
            color: snow;
            border: none;
            background-color: ${props => props.color};
            transition: 0.2s;
        }
    `}
    `