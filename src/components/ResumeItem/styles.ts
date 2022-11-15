import styled from "styled-components";

export const Container = styled.div`

    flex: 1;


`

export const Title = styled.div`

    text-align: center;
    font-weight: bold;
    color: #888;
    margin-bottom: 5px;


`

type Props = {

    color: string;
}

export const Info = styled.div(({color}: Props) => (


    `

    text-align: center;
    font-weight: bold;
    color: ${color ? color : "#000"}

    `

))
