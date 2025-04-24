import { React, useEffect, useRef, useState } from 'react'
import ph from '../assets/ph.mp4'

function Video() {
    const [dark, setDark] = useState(false)
    const phsya = useRef();
    const [play, setPlay] = useState(false)
    const [mute, setMute] = useState(false)

    const hdlPlay = () => {
        setPlay(!play)
        if (play == true) {
            phsya.current.pause()
        } else {
            phsya.current.play()
        }
    }

    const hdlMute = () => {
        setMute(!mute)
        if (mute == true) {
            phsya.current.muted = false
        } else {
            phsya.current.muted = true
        }
    }

    const mode = () => {
        setDark(!dark)
        if (dark == false) {
            document.querySelectorAll('*').forEach((e) => {
                e.style.backgroundColor = "black"
                e.style.color = "white"
            })
        } else {
            document.querySelectorAll('*').forEach((e) => {
                e.style.backgroundColor = "white"
                e.style.color = "black"
            })
        }
    }

    return (
        <div id="video">
            <h1>Ph</h1>
            <button onClick={() => mode()}>{dark ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i> }</button>
            <video ref={phsya} >
                <source src={ph} type="video/mp4"></source>
            </video>
            <div id="controls">
                <button onClick={() => hdlPlay()}> {play ? <i className="fa-solid fa-pause"></i> : <i className="fa-solid fa-play"></i>} </button>
                <button onClick={() => phsya.current.currentTime -= 5}>{"<< 5 s"}</button>
                <button onClick={() => phsya.current.currentTime += 5}>{"5 s >>"}</button>
                <button onClick={() => hdlMute()}> {mute ? <i className="fa-solid fa-volume-high"></i> : <i className="fa-solid fa-volume-xmark"></i>} </button>
            </div>
        </div>
    )
}

export default Video