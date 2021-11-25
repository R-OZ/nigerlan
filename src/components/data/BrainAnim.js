import React from 'react'
import Lottie from 'react-lottie'
import brain from "../images/brain.json"

const BrainAnim = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: brain,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
      <div>
        <Lottie 
          options={defaultOptions}
          height={300}
          width={300}
        />
      </div>
    );
}

export default BrainAnim
