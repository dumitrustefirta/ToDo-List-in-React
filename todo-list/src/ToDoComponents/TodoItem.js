import React from 'react';
import { StyleList } from '../UIElements/ToDoListItem';

export function ToDoItem(props) {
    return (
        <StyleList>
            <input onChange={() => props.handleCheckStatus(props.item)} type="checkbox" />
            <span className={props.item.status ? '.complete' : ''}>{props.item.text}</span>
            <button onClick={(e) => props.handleRemoveItem(props.item)}>X</button>
        </StyleList>
    )
}