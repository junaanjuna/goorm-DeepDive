import React from 'react'
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({
    initialExpenses,
    handleDelete,
    handleEdit,
    clearItems
}) => {
  return (
    <>
        <ul>
            {
                initialExpenses.map(expense => {
                    return (
                        <ExpenseItem
                            expense = {expense}
                            key = {expense.id}
                            handleDelete = {handleDelete}
                            handleEdit = {handleEdit}
                        />
                    )
                })
            }
        </ul>

        <button onClick={clearItems}>
            목록 지우기
        </button>
    </>
  )
}

export default ExpenseList