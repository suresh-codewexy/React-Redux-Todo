import './todo.css'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { addTodo , deleteTodo, removeTodo } from '../Services/Actions/action';

const Todo = () => {
   const [inputData,setInputData] = useState('')
   const list = useSelector((state)=> state.todoReducer.list)
   const dispatch = useDispatch();
   return (
      <div className="main_wrapper">
         <div className="todo_wrapper">
            <h1>Add Your Todo List Here... 🤟</h1>
            <div className="todo_input">
               <input type="text" placeholder='✍ Add list here..'
                  value={inputData}
                  onChange={(e) => setInputData(e.target.value)}
               />
               <Button className="icon_box"
                  onClick={() => dispatch(addTodo(inputData),
                  setInputData(''))}
               >
                  <i className="fa fa-plus" aria-hidden="true"></i>
               </Button>
            </div>
            <div className="each_list">
            {
               list.map((elem) => {
                  return(
                     <div className="todo_list" key= {elem.id}>
                        <span>{elem.data}</span>
                        <Button className="icon_box"
                           onClick={() => dispatch(deleteTodo(elem.id))}
                        >
                           <i className="fa fa-trash-o" title='delete item' aria-hidden="true"></i>
                        </Button>
                     </div>
                  )
               })
            }
               
            </div>
            <div className="clear_all_btn">
               <Button variant="contained" onClick={() => dispatch(removeTodo())}>Clear All</Button>
            </div>
         </div>
      </div>

   )
}

export default Todo