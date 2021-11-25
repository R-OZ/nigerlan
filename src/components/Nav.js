import React from "react";
import PlaySound from "./PlaySound";
const Nav = (props) => {
    return (
        <nav className='nav-bar'>
            <div className="welcome">
                Welcome to NigerLan
            </div>
            <PlaySound music={props.music} />
        </nav>
    )
}

export default Nav
