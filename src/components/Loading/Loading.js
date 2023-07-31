import React from 'react'
import logo from '../images/nigeria.png'
import './loading.css'

const Loading = () => {
  return (
    <div className='loading-container'>
        <div className='loading-img'>
          <img src={logo} alt="" id='loading-img'/>
          <div className="loadbar1"></div>
          <div className="loadbar2"></div>
        </div>
    </div>
  )
}

export default Loading