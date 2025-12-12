import React, {useRef} from 'react'
import { toggleClick } from '../Body'

const ConsDisplay = ({ capital, pronounce, image, example, capital2, pronounce2, image2, example2, examplem, examplem2, sound1, sound2 }) => {
    const iconRef = useRef();
    const capitalRef = useRef();
    const iconRef2 = useRef();
    const capitalRef2 = useRef();

    if(pronounce ==="gbh"){
        return(
            <div className="cons-main">

           <div className="cons-content">
               <div ref={capitalRef} className="cons-text" onClick={()=> {sound1.play(); toggleClick(capitalRef)}}>
                       {capital}
                   <div className="conspronounce-stuff">{pronounce}</div>
               </div>
               <div className="cimage-content" onClick={()=> {sound1.play(); toggleClick(iconRef)}}>
                   <img ref={iconRef} src={image} alt="" className="cons-image" />
                   <div className="cexample">{example}<p id ="cons-ex">{capital}</p>{examplem}</div>
               </div>
           </div>
            <div className="cons-vertical"></div>
           <div className="cons-content">
               <div ref={capitalRef2} className="cons-text" onClick={()=> {sound2.play(); toggleClick(capitalRef2)}}>
                       {capital2}
                   <div className="conspronounce-stuff">{pronounce2}</div>
               </div>
               <div className="cimage-content" onClick={()=> {sound2.play(); toggleClick(iconRef2)}}>
                    <img ref={iconRef2} src={image2} alt="" className="cons-image" />
                   <div className="cexample">{example2}<h2 id ="cons-ex">{capital2}</h2>{examplem2}</div>
               </div>
           </div>

        </div>
        )
    }

    else if(pronounce2 ==="see" | pronounce2 === "yee"){
        return(
            <div className="cons-main">

           <div className="cons-content">
               <div ref={capitalRef} className="cons-text" onClick={()=> {sound1.play(); toggleClick(capitalRef)}}>
                       {capital}
                   <div className="conspronounce-stuff">{pronounce}</div>
               </div>
               <div className="cimage-content" onClick={()=> {sound1.play(); toggleClick(iconRef)}}>
                   <img ref={iconRef} src={image} alt="" className="cons-image" />
                   <div className="cexample"><h2 id ="cons-ex">{capital}</h2>{example}</div>
               </div>
           </div>
            <div className="cons-vertical"></div>
           <div className="cons-content">
               <div ref={capitalRef2} className="cons-text" onClick={()=> {sound2.play(); toggleClick(capitalRef2)}}>
                       {capital2}
                   <div className="conspronounce-stuff">{pronounce2}</div>
               </div>
               <div className="cimage-content" onClick={()=> {sound2.play(); toggleClick(iconRef2)}}>
                   <img ref={iconRef2} src={image2} alt="" className="cons-image" />
                   <div className="cexample">{example2}<h2 id ="cons-ex">{capital2}</h2>{examplem2}</div>
               </div>
           </div>

        </div>
        )
    }

    else {
    return(
        <div className="cons-main">

           <div className="cons-content">
               <div ref={capitalRef} className="cons-text" onClick={()=> {sound1.play(); toggleClick(capitalRef)}}>
                       {capital}
                   <div className="conspronounce-stuff">{pronounce}</div>
               </div>
               <div className="cimage-content" onClick={()=> {sound1.play(); toggleClick(iconRef)}}>
                    <img ref={iconRef} src={image} alt="" className="cons-image" />
                   <div className="cexample"><h2 id ="cons-ex">{capital}</h2>{example}</div>
               </div>
           </div>
            <div className="cons-vertical"></div>
           <div className="cons-content">
               <div ref={capitalRef2} className="cons-text" onClick={()=> {sound2.play(); toggleClick(capitalRef2)}}>
                       {capital2}
                   <div className="conspronounce-stuff">{pronounce2}</div>
               </div>
               <div className="cimage-content" onClick={()=> {sound2.play(); toggleClick(iconRef2)}}>
                    <img ref={iconRef2} src={image2} alt="" className="cons-image" />
                   <div className="cexample"><h2 id ="cons-ex">{capital2}</h2>{example2}</div>
               </div>
           </div>

        </div>
       )}
    }

export default ConsDisplay