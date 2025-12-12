import React from 'react'
import { Link } from 'react-router-dom'
import cancel from '../images/cancel.svg'

const Feedback = () => {
    return (
        <div className="feedback-container">
            <Link ClassName="cancel-form" to="/" exact><img id='cancel-img' alt='' src={cancel} /></Link>
            <div className="google-form">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScUHSvB4x-lCnTuRnoZ-5HUBWXRWJ70Ean63D19h5Hm0Dzftw/viewform?embedded=true" 
                // width="900" 
                height="1511" 
                frameborder="0" 
                marginheight="0" 
                marginwidth="0"
                width={1000}
                title="Feedback Form"
                id='myIframe'
                >
                    Loading…
                </iframe>
            </div>
        </div>
        
    )
}

export default Feedback
