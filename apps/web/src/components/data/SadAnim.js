import React from 'react'
import Lottie from 'react-lottie'
import sad from "../images/sad.json"

const SadAnim = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: sad,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
      <div>
        <Lottie 
          options={defaultOptions}
        />
      </div>
    );
}

export default SadAnim
