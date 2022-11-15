import React from 'react'
import "./App.css"
import * as C from "./App.styles"
import {Item} from "./types/item"
import { categories } from "./data/categories"
import { items } from './data/items'
import { getCurrentMonth } from './helpers/dateFilter'
import { filterListByMonth } from './helpers/dateFilter'
import { TableArea } from './components/TableArea'
import { InfoArea } from './components/InfoArea'
import { InputArea } from './components/InputArea'

const App = () => {

  const [list, setList] = React.useState<Item[]>(items);
  const [filteredList, setFilteredList] = React.useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = React.useState(getCurrentMonth())
  const [income, setIncome] = React.useState(0);
  const [expense, setExpense] = React.useState(0);

  React.useEffect(() => {

    let incomeList = 0;
    let expenseList = 0;

    for(let i in filteredList){

      if(categories[filteredList[i].category].expense){

        expenseList += filteredList[i].value
      }

      else{

        incomeList += filteredList[i].value
      }
    }

    setIncome(incomeList);
    setExpense(expenseList);


  }, [filteredList])

  React.useEffect(() => {

      setFilteredList(filterListByMonth(list, currentMonth));

  }, [list, currentMonth]);

  const handleMonthChange = (newMonth: string) => {

    setCurrentMonth(newMonth);
    
  }

  const handleAddItem = (item: Item) => {

    let newList = [...list];
    newList.push(item);
    setList(newList);
  }

  return (

    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>

          <InfoArea 
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
          />

          <InputArea onAdd={handleAddItem}/>

          <TableArea list={filteredList}/>
      </C.Body>
    </C.Container>
  )
}

export default App