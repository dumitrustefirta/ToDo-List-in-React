import React from 'react';
import { ToDoItem } from './TodoItem';

export function ToDoList(props) {
    if (!props.todos.length) return null
    return (
        <ul className="todolist" id="todolist">
            {
                props.todos.map((item) => {
                    return (<ToDoItem key={item.id} item={item} handleCheckStatus={props.handleCheckStatus} handleRemoveItem={props.handleRemoveItem}/>)
                })    
            }
        </ul>
    )
}