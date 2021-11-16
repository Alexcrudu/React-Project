import React, {useState} from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [clicked, setClicked] = useState(false)

     const saveExpenseDataHandler = (data) => {
         const expenseData = {
             ...data,
             id: Math.random().toString()
         }
         props.onAddExpense(expenseData)
         setClicked(false)
     }

     const addClicked =()=> {
        setClicked(true)
    }

    const removeClicked = () => {
        setClicked(false)
    }

    return (
        <div className="new-expense">
           {!clicked && <button onClick={addClicked}>Neue AusgabeEintragen</button>}
            {clicked && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} removeForm = {removeClicked}></ExpenseForm>}


        </div>
    );
}

export default NewExpense;