import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/action';

export default function Todo() {
    const [text, setText] = useState("")
    const [err, setErr] = useState("")
    const dispatch = useDispatch()

    const addTask = () => {
        if (text != "") {
            setErr("")
            dispatch(addTodo(text))
            setText("")
        } else {
            setErr("Enter Text !!")
        }
    }

    return (
        <div className="container">
            <input type="text" id="todo-input" value={text} onChange={e => setText(e.target.value)} placeholder="Enter task" />
            <p id="textErr">{err}</p>
            <button id="add-button" onClick={addTask}>Add</button>
        </div>
    );
}