import React from 'react'


const NumBodDisplay = ({num1, num2, numtext1, numtext2, image1=null, image2=null, numname1, numname2,  sound1, sound2}) => {
    return(
        <div className="cons-main">
            <div className="num-content">
                {image1===null?
                   <div className="num-text"onClick={()=>sound1.play()}>
                        {num1}
                        <div className="conspronounce-stuff -num">{numname1}</div>
                    </div> 
                : <img alt="" className='bod-img' src={image1}/>}
                
                <div className="cimage-content" onClick={()=>sound1.play()}>
                    <div className="num-yor">{numtext1}</div>
                    {image1!==null?<p className="bod-txt">{num1}</p>: null}
                </div>
            </div>

            <div className="cons-vertical"></div>
            
            <div className="num-content -right">
                {image2===null?
                    <div className="num-text" onClick={()=>sound2.play()}>
                        {num2}
                        <div className="conspronounce-stuff -num">{numname2}</div>
                    </div>
                : <img alt="" className='bod-img' src={image2}/>}
                
                <div className="cimage-content" onClick={()=>sound2.play()}>
                    <div className="num-yor">{numtext2}</div>
                    {image1!==null?<p className="bod-txt">{num2}</p>: null}
                </div>
            </div>
        </div>
    )
}

export default NumBodDisplay