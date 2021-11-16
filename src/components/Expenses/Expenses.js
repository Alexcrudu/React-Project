import React, {useState} from 'react';

import ExpenseItem from "./ExpenseItem"
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from '../Filter/ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses (props) {
  const [yearFilter, setYearFilter] = useState('2020')

  const selectYearHandler = (year) => {
    setYearFilter(year)
  }

  const filtredItems = props.items.filter((ele)=> {
    return ele.date.getFullYear() == yearFilter
  })


  return(

    <Card className ="expenses">
      <ExpensesFilter onSetYear={selectYearHandler} selectedYear={yearFilter}></ExpensesFilter>
      <ExpensesChart items={filtredItems}></ExpensesChart>
      <ExpensesList items={filtredItems} ></ExpensesList>
    </Card>

  )
}

export default Expenses