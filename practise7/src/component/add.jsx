import React, { useState } from 'react'

function Add() {
    const [tit, setTit] = useState("")
    const [des, setDes] = useState("")
    const [err, setErr] = useState("")
    const old = JSON.parse(localStorage.getItem("notes")) || []

    const saveNote = (e) => {
        e.preventDefault();
        let len = old.length
        if (des.length > 100) {
            setErr("Description should be more than 100 characters")
        } else {
            setErr("")
            let obj = {}
            const today = new Date()
            if (len == 0) {
                obj.id = 1;
            } else {
                obj.id = len + 1
            }
            obj.title = tit
            obj.des = des
            obj.date = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`

            let record = [...old, obj]
            localStorage.setItem("notes", JSON.stringify(record))
            setTit("")
            setDes("")
            alert("Note Added")
        }
    }

    return (
        <div id="add">
            <h1>Add Note</h1>
            <form onSubmit={e => saveNote(e)}>
                <input type="text" value={tit} onChange={e => setTit(e.target.value)} placeholder="Enter Title" />
                <input type="text" value={des} onChange={e => setDes(e.target.value)} placeholder="Enter Description" />
                <p id="err">{err}</p>
                <input type="submit" value="Save" />
            </form>
        </div>
    )
}

export default Add