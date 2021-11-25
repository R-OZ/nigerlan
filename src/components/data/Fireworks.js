import React from 'react'
import Lottie from 'react-lottie'
import sparks from "../images/sparks.json"

const Fireworks = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: sparks,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
      <div>
        <Lottie 
          options={defaultOptions}
          height={300}
          width={500}
        />
      </div>
    );
}

export default Fireworks
