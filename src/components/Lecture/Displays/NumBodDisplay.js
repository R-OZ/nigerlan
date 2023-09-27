import React, {useRef} from 'react'
import { toggleClick } from '../Body'


const NumBodDisplay = ({num1, num2, numtext1, numtext2, image1=null, image2=null, numname1, numname2,  sound1, sound2}) => {
    const iconRef = useRef();
    const capitalRef = useRef();
    const iconRef2 = useRef();
    const capitalRef2 = useRef();

    return(
        <div className="cons-main">
            <div className="num-content">
                {image1===null?
                   <div ref={iconRef} className="num-text"onClick={()=>{sound1.play(); toggleClick(iconRef)}}>
                        {num1}
                        <div className="conspronounce-stuff -num">{numname1}</div>
                    </div> 
                : <img ref={iconRef} alt="" className='bod-img' src={image1} onClick={()=> {sound1.play(); toggleClick(iconRef)}}/>}
                
                <div className="cimage-content" onClick={()=>{sound1.play(); toggleClick(capitalRef)}}>
                    <div ref={capitalRef} className="num-yor">{numtext1}</div>
                    {image1!==null?<p className="bod-txt">{num1}</p>: null}
                </div>
            </div>

            <div className="cons-vertical"></div>
            
            <div className="num-content -right">
                {image2===null?
                    <div ref={iconRef2} className="num-text" onClick={()=>{sound2.play(); toggleClick(iconRef2)}}>
                        {num2}
                        <div className="conspronounce-stuff -num">{numname2}</div>
                    </div>
                : <img ref={iconRef2} alt="" className='bod-img' src={image2} onClick={()=> {sound2.play(); toggleClick(iconRef2)}}/>}
                
                <div className="cimage-content" onClick={()=>{sound2.play(); toggleClick(capitalRef2)}}>
                    <div ref={capitalRef2} className="num-yor">{numtext2}</div>
                    {image1!==null?<p className="bod-txt">{num2}</p>: null}
                </div>
            </div>
        </div>
    )
}

export default NumBodDisplay