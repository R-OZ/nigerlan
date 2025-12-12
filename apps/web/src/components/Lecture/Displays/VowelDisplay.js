import React, {useRef} from 'react'
import { toggleClick } from '../Body';

const VowelDisplay = ({ capital, pronounce, image, example, example2, sound }) => {
    const iconRef = useRef();
    const capitalRef = useRef();
    const iconRef2 = useRef();
    const capitalRef2 = useRef();

    if (pronounce !== "ooh") {
        return (
            <div className="vowel-content">
                <div className="vowel-text" onClick={() => {sound.play(); toggleClick(capitalRef)}}>
                    <p ref={capitalRef} className="vowel-capital">{capital}</p>
                    <p className="pronounce-stuff">{pronounce}</p>
                </div>
                <div className="vimage-content" onClick={() => {sound.play(); toggleClick(iconRef)}}>
                    <img src={image} alt="" ref={iconRef} className="vowel-img" />
                    <div className="vexample"><span id="ex">{capital}</span>{example}</div>
                </div>
  
            </div>
        )
    }
    if (pronounce === "ooh") {
        return (
            <div className="vowel-content">
  
                <div className="vowel-text" onClick={() => {sound.play(); toggleClick(capitalRef2)}}>
                    <p ref={capitalRef2} className="vowel-capital">{capital}</p>
                    <p className="pronounce-stuff">{pronounce}</p>
                </div>
                <div className="vimage-content" onClick={() => {sound.play(); toggleClick(iconRef2)}}>
                    <img ref={iconRef2} src={image} alt="" className="vowel-img" />
                    <div className="vexample">{example}<h2 id="ex">{capital}</h2>&nbsp;{example2}</div>
                </div>
  
            </div>
        )
    }
  
  }

export default VowelDisplay