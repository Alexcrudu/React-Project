import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {


  const selectHandler = (evt)=> {
    props.onSetYear(evt.target.value)

  }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filtern Jahr</label>
        <select onChange={selectHandler} value={props.selectedYear}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;