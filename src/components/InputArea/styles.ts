import styled from "styled-components"

export const Container = styled.div`

    background-color: #fff;
    box-shadow: 0 0 5px #CCC;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;

    input, select{

        padding: 8px;
        margin-left: .5rem;
        cursor: pointer;
        outline: 0;
    }

    label {

        font-weight: bold;
        margin-right: 2rem;
    }

    button {

        padding: 10px;
        font-weight: bold;
        outline: none;
        border: 1px solid #222;
        background-color: blue;
        border-radius: 5px;
        color: #fff;
        transition: .2s;
        cursor: pointer;
    }

    button:hover{

        opacity: 0.7;
    }

`