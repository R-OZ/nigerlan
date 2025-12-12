import React from 'react'
import Lottie from 'react-lottie'
import celebration from "../images/celebration.json"

const DancingAnimal = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: celebration,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
      <div>
        <Lottie 
          options={defaultOptions}
          height={150}
          width={150}
        />
      </div>
    );
}

export default DancingAnimal
