import React, { useState } from 'react'

export default function Del() {
    const [i, setI] = useState("")

    const deleteNote = (e) => {
        e.preventDefault()
        let record = JSON.parse(localStorage.getItem("notes")).filter((e) => e.id != i)
        record.forEach((e) => {
            if (e.id > i) {
                e.id = e.id - 1;
            }
        })
        localStorage.setItem("notes", JSON.stringify(record))
        setI("")
        alert("Note Deleted")
    }

    return (
        <div id="delete">
            <h1>Delete Note</h1>
            <form onSubmit={e => deleteNote(e)}>
                <input type="text" value={i} onChange={e => setI(e.target.value)} placeholder="Enter no. of note to delete" />
                <br />
                <input type="submit" value="Delete" />
            </form>
        </div>
    )
}
