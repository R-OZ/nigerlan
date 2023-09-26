import React from 'react'

const VowelDisplay = ({ capital, pronounce, image, example, example2, sound }) => {
    if (pronounce !== "ooh") {
        return (
            <div className="vowel-content">
                <div className="vowel-text" onClick={() => sound.play()}>
                    <p id="vowel-capital">{capital}</p>
                    <p className="pronounce-stuff">{pronounce}</p>
                </div>
                <div className="vimage-content" onClick={() => sound.play()}>
                    <img src={image} alt="" id="vowel-img" />
                    <div className="vexample"><span id="ex">{capital}</span>{example}</div>
                </div>
  
            </div>
        )
    }
    if (pronounce === "ooh") {
        return (
            <div className="vowel-content">
  
                <div className="vowel-text" onClick={() => sound.play()}>
                    <p id="vowel-capital">{capital}</p>
                    <p className="pronounce-stuff">{pronounce}</p>
                </div>
                <div className="vimage-content" onClick={() => sound.play()}>
                    <img src={image} alt="" id="vowel-img" />
                    <div className="vexample">{example}<h2 id="ex">{capital}</h2>&nbsp;{example2}</div>
                </div>
  
            </div>
        )
    }
  
  }

export default VowelDisplay