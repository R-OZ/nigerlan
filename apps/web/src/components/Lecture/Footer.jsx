import React from 'react'
import info from '../images/info.svg'

const Footer = ({totalCount, bodyCount, isCaptionLarge, lectureID, isTest, togglePDF=()=>{}}) => {
  return (
    totalCount < bodyCount?
        <div className= {!isCaptionLarge? "lecture-caption -scale-caption": "lecture-caption"}>
        {
            totalCount < bodyCount && lectureID!=="number"?
                <span>
                    *Click on the icon or image to hear pronunciation* 
                    {lectureID==="alphabet"? <span id="spanner"><br />*Scroll down to see more*</span>: null}
                </span>
            : bodyCount -totalCount>2 && lectureID === "number"?
                <span>*Click on the icon or image to hear pronunciation*</span>
            : (bodyCount -totalCount ===2 || bodyCount-totalCount===1) && lectureID === "number"?
                <div className='num-footer'>
                <img onClick={togglePDF} src={info} alt="" id="num-info" />
                <span id="num-footer-txt">*Click on info icon for further information*</span>
                </div>
            : null
        }
        </div>
    : totalCount === bodyCount && isTest ?
        <div className= {!isCaptionLarge? "lecture-caption -scale-caption": "lecture-caption"}>
            <span>*Next will be an assessment*</span>
        </div>
    : null
  )
}

export default Footer