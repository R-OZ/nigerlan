import React from 'react'

const AlphaDisplay = ({ capital, small, pronounce, sound}) => {
    return (
        <div className="alpha-item" onClick={()=> sound.play()}>
          <p className="alpha-item-txt">{capital}</p>
          <p className="alpha-item-txt">{small}</p>
          <p className="alpha-item-txt -pronounce">{pronounce}</p>
        </div>
    )
  }

export default AlphaDisplay