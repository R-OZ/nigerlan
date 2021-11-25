import React from 'react'
import Lottie from 'react-lottie'
import boy from "../images/boy.json"

const BoyWave = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: boy,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
      <div>
        <Lottie 
          options={defaultOptions}
          height={200}
          width={200}
        />
      </div>
    );
}

export default BoyWave
