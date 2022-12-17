import React from 'react'

const ConsDisplay = ({ capital, pronounce, image, example, capital2, pronounce2, image2, example2, examplem, examplem2, sound1, sound2 }) => {
    if(pronounce ==="gbh"){
        return(
            <div className="cons-main">

           <div className="cons-content">
               <div className="cons-text" onClick={()=> sound1.play()}>
                       {capital}
                   <div className="conspronounce-stuff">{pronounce}</div>
               </div>
               <div className="cimage-content" onClick={()=> sound1.play()}>
                   <img src={image} alt="" className="cons-image" />
                   <div className="cexample">{example}<p id ="cons-ex">{capital}</p>{examplem}</div>
               </div>
           </div>
            <div className="cons-vertical"></div>
           <div className="cons-content">
               <div className="cons-text" onClick={()=> sound2.play()}>
                       {capital2}
                   <div className="conspronounce-stuff">{pronounce2}</div>
               </div>
               <div className="cimage-content" onClick={()=> sound2.play()}>
                    <img src={image2} alt="" className="cons-image" />
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
               <div className="cons-text" onClick={()=> sound1.play()}>
                       {capital}
                   <div className="conspronounce-stuff">{pronounce}</div>
               </div>
               <div className="cimage-content" onClick={()=> sound1.play()}>
                   <img src={image} alt="" className="cons-image" />
                   <div className="cexample"><h2 id ="cons-ex">{capital}</h2>{example}</div>
               </div>
           </div>
            <div className="cons-vertical"></div>
           <div className="cons-content">
               <div className="cons-text" onClick={()=> sound2.play()}>
                       {capital2}
                   <div className="conspronounce-stuff">{pronounce2}</div>
               </div>
               <div className="cimage-content" onClick={()=> sound2.play()}>
                   <img src={image2} alt="" className="cons-image" />
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
               <div className="cons-text" onClick={()=> sound1.play()}>
                       {capital}
                   <div className="conspronounce-stuff">{pronounce}</div>
               </div>
               <div className="cimage-content" onClick={()=> sound1.play()}>
                    <img src={image} alt="" className="cons-image" />
                   <div className="cexample"><h2 id ="cons-ex">{capital}</h2>{example}</div>
               </div>
           </div>
            <div className="cons-vertical"></div>
           <div className="cons-content">
               <div className="cons-text" onClick={()=> sound2.play()}>
                       {capital2}
                   <div className="conspronounce-stuff">{pronounce2}</div>
               </div>
               <div className="cimage-content" onClick={()=> sound2.play()}>
                    <img src={image2} alt="" className="cons-image" />
                   <div className="cexample"><h2 id ="cons-ex">{capital2}</h2>{example2}</div>
               </div>
           </div>

        </div>
       )}
    }

export default ConsDisplay