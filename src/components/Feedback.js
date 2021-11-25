import React from 'react'
import { NavLink } from 'react-router-dom'
import cancel from "./images/cancel.svg"

const Feedback = () => {
    return (
        <div className="feedback-container">
            <NavLink activeClassName="cancel-form" ClassName="cancel-form" to="/" exact><img id='cancel1' src={cancel} /></NavLink>
            <div className="google-form">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScUHSvB4x-lCnTuRnoZ-5HUBWXRWJ70Ean63D19h5Hm0Dzftw/viewform?embedded=true" width="640" height="1680" scrolling="no" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>

            

        </div>
        
    )
}

export default Feedback
