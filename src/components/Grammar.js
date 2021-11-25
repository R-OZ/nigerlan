import React from "react";
import grammar from "./images/grammar.svg"
import { NavLink } from 'react-router-dom';
import grammars from "./Sounds/Grammar (2).mp3"
const Grammar = () => {
    let sound = new Audio(grammars)

    return (
        <NavLink className="module6" activeClassName="module6" to="/Grammarlec" onClick={()=> sound.play()}>
            <div className="title"><img src={grammar} className="image2" /><h2 className='word'>Gírámà</h2></div><br/>
            <div className="title-content"><h5>GRAMMAR, get started with learning grammar in Yoruba<br></br>Lets GO!</h5></div>
        </NavLink>
    )
}

export default Grammar
