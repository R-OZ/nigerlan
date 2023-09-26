import React from 'react'
import AlphaDisplay from './Displays/AlphaDisplay'
import VowelDisplay from './Displays/VowelDisplay'
import ConsDisplay from './Displays/ConsDisplay'
import NumBodDisplay from './Displays/NumBodDisplay'
import NumExtra from './Displays/NumExtra'
import EndTest from './EndTest'
import EndLecture from './EndLecture'

const Body = ({data, lectureID, totalCount, bodyCount, test1Count, test2Count, test1ID, correctCount, TestChecker=()=>{}}) => {
  return (
    <div className="lecture-body">
        {totalCount===0 &&lectureID==="alphabet"?
            <div className={lectureID==="alphabet"? "table-alpha-container" : "table-alpha-container -null"}>

            {data.lecBody[totalCount].map((obj, idx)=>{
                return <AlphaDisplay capital={obj.capital} small={obj.small} pronounce={obj.pronounce} sound={new Audio(obj.sound)} key={idx} />
                })}
            </div>

        : totalCount===1 && lectureID==="alphabet"?
            <div className={lectureID==="alphabet"? "table-alpha-container" : "table-alpha-container -null"}>
            {data.lecBody[totalCount].map((obj, idx)=>{
                return <AlphaDisplay capital={obj.capital} small={obj.small} pronounce={obj.pronounce} sound={new Audio(obj.sound)} key={idx} />
                })}
            </div>
        : null }
        
        {totalCount ===bodyCount?<EndLecture/>:null}
        
        {totalCount< bodyCount && lectureID==="vowel"?
        <VowelDisplay 
            capital={data.lecBody[totalCount].capital} 
            pronounce={data.lecBody[totalCount].pronounce} 
            image={data.lecBody[totalCount].image} 
            example={data.lecBody[totalCount].example} 
            example2={data.lecBody[totalCount].example2} 
            sound={new Audio(data.lecBody[totalCount].sound)} 
        />
        :totalCount === bodyCount && lectureID==="vowel" ? 
            null
        : totalCount <=bodyCount +test1Count && lectureID==="vowel"?
            TestChecker(data.test1[test1ID].question, data.answers, 1)
        : totalCount <=bodyCount +test1Count+test2Count && lectureID==="vowel"?
            TestChecker(data.test2[test1ID].question,["Ẹ","O","U"],2, new Audio(data.test2[test1ID].sound) )
        : null
        }

        {totalCount< bodyCount && lectureID==="consonant"?
        <ConsDisplay 
            capital={data.lecBody[totalCount].capital} 
            pronounce={data.lecBody[totalCount].pronounce} 
            image={data.lecBody[totalCount].image}
            capital2={data.lecBody[totalCount].capital2}
            pronounce2={data.lecBody[totalCount].pronounce2}
            image2={data.lecBody[totalCount].image2}
            example={data.lecBody[totalCount].example} 
            example2={data.lecBody[totalCount].example2} 
            examplem={data.lecBody[totalCount].examplem}
            examplem2={data.lecBody[totalCount].examplem2}
            sound1={new Audio(data.lecBody[totalCount].sound1)}
            sound2={new Audio(data.lecBody[totalCount].sound2)} 
        />
        :totalCount === bodyCount && lectureID==="consonant" ? 
            null
        : totalCount <=bodyCount +test1Count && lectureID==="consonant"?
            TestChecker(data.test1[test1ID].question, data.answers, 1)
        : totalCount <=bodyCount +test1Count+test2Count && lectureID==="consonant"?
            TestChecker(data.test2[test1ID].question,["P","W","J","K","R","T"],2, new Audio(data.test2[test1ID].sound) )
        : null
        }

        {totalCount< bodyCount && lectureID==="number"?
        <NumBodDisplay
            num1 = {data.lecBody[totalCount].num1}
            num2 = {data.lecBody[totalCount].num2}
            numname1 = {data.lecBody[totalCount].numname1}
            numname2 = {data.lecBody[totalCount].numname2}
            numtext1 = {data.lecBody[totalCount].numtext1 }
            numtext2 = {data.lecBody[totalCount].numtext2}
            sound1 = {new Audio(data.lecBody[totalCount].sound1)}
            sound2 = {new Audio(data.lecBody[totalCount].sound2)}
        />
        :totalCount === bodyCount && lectureID==="number" ? 
            null
        : totalCount <=bodyCount +test1Count && lectureID==="number"?
            TestChecker(data.test1[test1ID].question, data.answers, 1, data.test1[test1ID].display)
        : totalCount <=bodyCount +test1Count+test2Count && lectureID==="number"?
            TestChecker(data.test2[test1ID].question, data.answers, 2, new Audio(data.test2[test1ID].sound) )
        : null
        }

        {bodyCount-totalCount===2 && lectureID==="number" ? 
        <NumExtra type="addition"/>
        :bodyCount-totalCount===1 && lectureID==="number" ?
        <NumExtra type="subtraction" />
        :null
        }


        {totalCount< bodyCount && lectureID==="body"?
        <NumBodDisplay
            numtext1 = {data.lecBody[totalCount].yor1}
            num1 = {data.lecBody[totalCount].eng1}
            numtext2 = {data.lecBody[totalCount].yor2}
            num2 = {data.lecBody[totalCount].eng2}
            sound1 = {new Audio(data.lecBody[totalCount].sound1)}
            sound2 = {new Audio(data.lecBody[totalCount].sound2)}
            image1 = {data.lecBody[totalCount].image1}
            image2 = {data.lecBody[totalCount].image2}
        />
        :totalCount === bodyCount && lectureID==="body" ? 
            null
        : totalCount <=bodyCount +test1Count && lectureID==="body"?
            TestChecker(data.test1[test1ID].question, data.answers, 1, data.test1[test1ID].display)
        : totalCount <=bodyCount +test1Count+test2Count && lectureID==="body"?
            TestChecker(data.test2[test1ID].question, data.answers, 2, new Audio(data.test2[test1ID].sound) )
        : null
        }

        {totalCount> bodyCount+test1Count+test2Count?
        <EndTest count={correctCount} total={test1Count+test2Count} />
        : null}
        

    </div>
  )
}

export default Body