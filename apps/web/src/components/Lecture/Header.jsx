import React from 'react'

const Header = ({bodyCount, totalCount, lectureID, data, test1Count, test2Count}) => {
  return (
    <p id="lecture-text">
        {(bodyCount-totalCount===2 || bodyCount-totalCount===1) && lectureID==="number" ?
        data.lecTxt3
        : totalCount>4 && totalCount<bodyCount && lectureID==="number"?
        data.lecTxt2
        :totalCount<bodyCount?
        data.lecTxt
        : totalCount===bodyCount?
            null
        : totalCount <= bodyCount  + test1Count?
            data.test1Text
        : totalCount <= bodyCount  + test1Count +test2Count?
            data.test2Text
        :
        null
        }
    </p>
  )
}

export default Header