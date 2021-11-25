import consonant from './images/consonant.svg'
import React from "react";
import { NavLink } from 'react-router-dom';
import consonanti from "./Sounds/consonanti.mp3"

const Consonants = () => {
    let sound = new Audio(consonanti)
    return (
        <NavLink className="module3" activeClassName="module3" to="/Consonantslec" onClick={()=> sound.play()}>
            <div className="title"><img src={consonant} className="image2"  alt=""/><h2 className='word'>Kọ́ńsónántì</h2></div><br></br>
            <div className="title-content"><h5>CONSONANTS, get started with learning the consonants in Yoruba<br></br>Lets GO!</h5></div>
        </NavLink>
    )
}

export default Consonants
