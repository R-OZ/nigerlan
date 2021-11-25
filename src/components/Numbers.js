import number from './images/number.svg'
import React from "react";
import { NavLink } from 'react-router-dom'
import numbers from "./Sounds/number.mp3"

const Numbers = () => {
    let sound = new Audio(numbers)

    return (
        <NavLink className="module4" activeClassName="module4" to="/Numberslec" onClick={()=> sound.play()}>
            <div className="title"><img src={number} className="image2" /><h2 className='word'>Òǹkà</h2></div><br></br>
            <div className="title-content"><h5>NUMBERS, get started with learning counting numbers in Yoruba<br></br>Lets GO!</h5></div>
        </NavLink>
    )
}

export default Numbers
