import React from 'react'

export default function View() {
    const record = JSON.parse(localStorage.getItem("notes"))

    return (
        <div>
            <h1>Present Notes</h1>
            <div id="cards">
                {record != "" ? (
                    record.map((e, i) => {
                        return <div key={i}>
                            <p>Sr. No. : {e.id}</p>
                            <p>Title: {e.title}</p>
                            <p>Description: {e.des}</p>
                            <p>Date: {e.date}</p>
                        </div>
                    })
                ) : (<p>No record Found</p>)}
            </div>
        </div>
    )
}
