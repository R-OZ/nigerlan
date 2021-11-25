import vowel from './images/vowel.svg'
import React from "react";
import { NavLink } from 'react-router-dom';
import vowels from "./Sounds/vowel.mp3"

const Vowels = () => {
    let sound = new Audio(vowels)

    return (
        <NavLink className="module2" activeClassName="module2" to="/Vowelslec" onClick={()=>sound.play()}>
            <div className="title"><img src={vowel} className="image2" /><h2 className='word'>Fáwẹ̀lì</h2></div><br></br>
            <div className="title-content"><h5>VOWELS, get started with learning vowels in Yoruba<br></br>Lets GO!</h5></div>
        </NavLink>
    )
}

export default Vowels
