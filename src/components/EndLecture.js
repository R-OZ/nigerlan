import React from 'react'
import DancingAnimal from './data/DancingAnimal'
import Fireworks from './data/Fireworks'

const EndLecture = () => {
    return (
        <div className="endlec-container">
            <div className="animation-end">
                <div className="fireworks"><Fireworks /></div>
                <div className="congrats-container">
                    <div className="congrats">CONGRATULATIONS</div>
                    <div className="congrats-text">You've come to the end of this lecture!!!</div>
                </div>
            </div>
            <div className="dancing-anim"><DancingAnimal /></div>
        </div>
    )
}

export default EndLecture
