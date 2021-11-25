import alphabet from './images/alphabet.svg'
import { NavLink } from 'react-router-dom'
import React from "react";
import alphabets from "./Sounds/alphabets.mp3"
import wrong from "./Sounds/wrong.mp3"


const Alphabets = () => {
    let sound = new Audio(alphabets)

    return (
        <NavLink className="module1" activeClassName="module1" to="/Alphabetslec" onClick={()=> sound.play()}>
            <div className="title"><img src={alphabet} className="image2" /><h2 className='word'>Alúfábẹ́ẹ̀tì</h2></div><br></br>
            <div className="title-content"><h5>ALPHABETS, get started with learning alphabets in Yoruba<br></br>Lets GO!</h5></div>
        </NavLink>
    )
}

export default Alphabets