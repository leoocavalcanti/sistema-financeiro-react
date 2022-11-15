import styled from "styled-components"


export const TableLine = styled.tr`

`

export const TableColumn = styled.td`

    padding: 10px 0;

`

type PropsColor = {

    color: string;
}

export const Category = styled.div(({color}: PropsColor) => (

    `

    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    color: #fff;
    background: ${color ? color : "#ddd"}

    `
))

export const Value = styled.div(({color}: PropsColor) => (

    `
        color: ${color && color};

    `

))