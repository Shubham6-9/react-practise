import React, { useState } from 'react'

function Login() {
    const [uname, setUname] = useState("")

    const checkUname = (val) => {
        if (val.length < 6) {
            document.getElementById("err-1").style.visibility = "visible";
        } else {
            document.getElementById("err-1").style.visibility = "hidden";
        }
        setUname(val)
    }

    return (
        <div>
            <form className="w-[250px] m-auto mt-[50px] p-5 rounded-lg">
                <h2 className="text-[25px] text-center font-semibold">Login</h2>
                <input type="text" onKeyUp={e => checkUname(e.target.value)} placeholder="Enter Your Username" className="w-[200px] h-[30px] p-3 mt-5 border rounded-sm" />
                <p id="err-1" className="text-[12px] text-red-500 invisible">Enter more than 6 characters</p>
            </form>
        </div>
    )
}

export default Login