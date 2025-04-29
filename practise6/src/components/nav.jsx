import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {

    return (
        <div className='p-5 flex justify-center gap-[25px] sticky top-0 bg-white'>
            <Link to="/" className='text-[20px]'>Login</Link>
            <Link to="/movie" className='text-[20px]'>Movie</Link>
        </div>
    )
}

export default Nav