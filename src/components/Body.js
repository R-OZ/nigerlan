import grammar from './images/grammar.svg'
import humanbody2 from "./images/humanbody2.svg"
import humanbody from "./images/humanbody.svg"
import { NavLink } from 'react-router-dom';
import React from "react";
import body from "./Sounds/body.mp3"


const Body = () => {
    let sound = new Audio(body)

    return (
        <NavLink className="module5" activeClassName="module5" to="/Bodylec" onClick={()=>sound.play()}>
            <div className="title"><img src={humanbody} className="image2" />< h2 className="word">Àwọn ẹ̀yà ara</h2></div><br></br>
            <div className="title-content"><h5>PARTS OF THE BODY, get started with learning parts of the body in Yoruba<br></br>Lets GO!</h5></div>
        </NavLink>
    )
}

export default Body
