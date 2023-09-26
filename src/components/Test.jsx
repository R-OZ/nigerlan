import React, { useEffect, useState } from 'react';

const Test = () => {
    const [data, setData] = useState(null)

    useEffect(()=>{
        fetch('http://localhost:4000/lecture/alphabet')
        .then((res)=> res.json())
        .then((resData)=> { setData(resData); console.log(resData) })
        .catch((err)=> console.error(err))
    }, [])

  return (
    <div style={{ background: 'blue', height: '100vh' }}>
        {
            data?
            <div>
                <img src={data.lecBody[0][0].avatar}alt="" />
                <h1>{data.lecBody[0][0].pronounce}</h1>
                <button
                    onClick={()=> new Audio(data.lecBody[0][0].sound).play()}
                >
                    PLAY MEE
                </button>
            </div>
            :
            <h1>Loading...</h1>
        }
    </div>
  );
};

export default Test;
