import React from 'react'
import DancingAnimal from '../data/DancingAnimal'
import Fireworks from '../data/Fireworks'

const EndLecture = () => {
    return (
        <div className="endlec-container">
                <div className="fireworks"><Fireworks /></div>
                <div className="congrats-container">
                    <p id="congrats">CONGRATULATIONS</p>
                    <p id="congrats-text">You've come to the end of this lecture!!!</p>
                </div>
            <div className="dancing-anim"><DancingAnimal /></div>
        </div>
    )
}

export default EndLecture
