import React from 'react';
import { StyleList } from '../UIElements/ToDoListItem';
import { BsTrash } from "react-icons/bs";

export function ToDoItem(props) {
    return (
        <StyleList>
            <input onChange={() => props.handleCheckStatus(props.item)} checked={props.item.status} type="checkbox" />
            <span className={props.item.status ? 'complete' : ''}>{props.item.text}</span>
            <BsTrash onClick={(e) => props.handleRemoveItem(props.item)} />
        </StyleList>
    )
}