import * as C from "./styles"
import React from "react"
import {Item} from "../../types/item"
import {formatDate} from "../../helpers/dateFilter"
import { RefactorTriggerReason } from "typescript"

type Props = {

    onAdd: (item: Item) => void;
}

export const InputArea = ({onAdd}: Props) => {

    const [date, setDate] = React.useState<Date>(new Date(2022, 8, 3));
    const [category, setCategory] = React.useState<string>("Alimentação");
    const [title, setTitle] = React.useState<string>("");
    const [valor, setValor] = React.useState<string>("");


    const valueEvent = (e: React.ChangeEvent<HTMLInputElement>) => {

        setValor(e.target.value);
    }

    const categoryEvent = (e: React.ChangeEvent<HTMLSelectElement>) => {

        let typeCategory = e.target.value;
        setTitle(typeCategory);

        if(typeCategory === "Alimentação") typeCategory = "food"
        else if(typeCategory === "Aluguel") typeCategory = "rent"
        else if(typeCategory === "Salário") typeCategory = "salary"

        setCategory(typeCategory)
        
    }


    const dateEvent = (e: React.ChangeEvent<HTMLInputElement>) => {

        const valor = e.target.value;
        const [year, month, day] = valor.split("-");

        const dayNew = parseInt(day);
        const dia = dayNew.toString();

        const monthNew = parseInt(month);
        const mesN = monthNew + 1;
        const mes = mesN.toString();
        
        const formatedDate = new Date(`${year}/${mes}/${dia}`)
        console.log(formatedDate)
        setDate(formatedDate);
    }

    const handleAddItem = (e: React.FormEvent) => {

        
        e.preventDefault();

        let newItem: Item = {

            date,
            category,
            title,
            value: +valor
        }

        onAdd(newItem);
        setCategory("");
        setTitle("");
        setValor("");
        
    }

    return (

        <C.Container>
            <form onSubmit={handleAddItem}>
            <label>
            Data:
            <input required onChange={dateEvent} type="date"/>
            </label>
            <label>
            Categoria:
            <select required onChange={categoryEvent} name="choice">
                <option selected value="Alimentação">Alimentação</option>
                <option value="Aluguel">Aluguel</option>
                <option value="Salário">Salário</option>
            </select>
            </label>
            
            <label>Valor:<input value={valor} placeholder="1000" onChange={valueEvent} required type="number"/></label>
            <button>Adicionar</button>
            </form>
        </C.Container>
    )

}