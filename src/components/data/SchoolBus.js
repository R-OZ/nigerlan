import React from 'react'
import Lottie from 'react-lottie'
import schoolbus from "../images/schoolbus.json"

const SchoolBus = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: schoolbus,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
      <div>
        <Lottie 
          options={defaultOptions}
          // height={330}
          // width={330}
        />
      </div>
    );
}

export default SchoolBus
