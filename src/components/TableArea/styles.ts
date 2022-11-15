import styled from "styled-components"

export const Table = styled.table`

    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 0 5px #ccc;
    border-radius: 10px;
    margin-top: 20px;

`

type TableProps = {

    width: boolean;
}

export const TableHeadColumn = styled.th(({width}: TableProps) => (

    `

    width: ${width ? width+"px" : "auto"};
    padding: 10px 0;
    text-align: left;

    `


));