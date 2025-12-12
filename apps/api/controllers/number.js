const { BASE_URL } = require('../config/constants')

const number = async (req, res) =>{
    const AUDIO_PATH = "audio/NumberPro"
    try {
        const data = {
            lecTxt: "Lets start with the basic number set 1 to 10.",
            lecTxt2: "Now lets learn our Tens in Yoruba.",
            lecTxt3: "But wait there's more!!",
            progyColor: "#1d0df9",
            lecBody:[
                {
                    num1: "1",
                    numtext1: "ọ̀kan",
                    numname1:"One",
                    sound1: `${BASE_URL}/${AUDIO_PATH}/long1.mp3`,
            
                    num2: "2",
                    numtext2: "méjì",
                    numname2:"Two",
                    sound2: `${BASE_URL}/${AUDIO_PATH}/long2.mp3`
                },
                {
                    num1: "3",
                    numtext1: "mẹ́ta",
                    numname1:"Three",
                    sound1: `${BASE_URL}/${AUDIO_PATH}/long3.mp3`,
            
                    num2: "4",
                    numtext2: "mẹ́rin",
                    numname2:"Four",
                    sound2: `${BASE_URL}/${AUDIO_PATH}/long4.mp3`,
                },
                {
                    num1: "5",
                    numtext1: "márùn",
                    numname1:"Five",
                    sound1: `${BASE_URL}/${AUDIO_PATH}/long5.mp3`,
            
                    num2: "6",
                    numtext2: "mẹ́fà",
                    numname2:"Six",
                    sound2: `${BASE_URL}/${AUDIO_PATH}/long6.mp3`,
            
                },
                {
                    num1: "7",
                    numtext1: "méje",
                    numname1:"Seven",
                    sound1: `${BASE_URL}/${AUDIO_PATH}/long7.mp3`,
            
            
                    num2: "8",
                    numtext2: "mẹ́jọ",
                    numname2:"Eight",
                    sound2: `${BASE_URL}/${AUDIO_PATH}/long8.mp3`,
                },
                {
                    num1: "9",
                    numtext1: "mẹ́sán",
                    numname1:"Nine",
                    sound1: `${BASE_URL}/${AUDIO_PATH}/long9.mp3`,
            
                    num2: "10",
                    numtext2: "mẹ́wàá",
                    numname2:"Ten",
                    sound2: `${BASE_URL}/${AUDIO_PATH}/long10.mp3`,
                },
                {
                    num1: "20",
                    numtext1: "Ogún",
                    numname1:"Twenty",
                    sound1: `${BASE_URL}/${AUDIO_PATH}/long20.mp3`,
            
                    num2: "30",
                    numtext2: "Ọgbọ̀n",
                    numname2:"Thirty",
                    sound2: `${BASE_URL}/${AUDIO_PATH}/long30.mp3`,
                },
                {
                    num1: "40",
                    numtext1: "Ogójì",
                    numname1:"Forty",
                    sound1: `${BASE_URL}/${AUDIO_PATH}/long40.mp3`,
            
                    num2: "50",
                    numtext2: "Àádọ́ta",
                    numname2:"Fifty",
                    sound2: `${BASE_URL}/${AUDIO_PATH}/long50.mp3`,
            
                },
                {
                    num1: "60",
                    numtext1: "Ọgọ́ta",
                    numname1:"Sixty",
                    sound1: `${BASE_URL}/${AUDIO_PATH}/long60.mp3`,
            
            
                    num2: "70",
                    numtext2: "Àádọ́rin",
                    numname2:"Seventy",
                    sound2: `${BASE_URL}/${AUDIO_PATH}/long70.mp3`,
                },
                {
                    num1: "80",
                    numtext1: "Ọgọ́rin",
                    numname1:"Eighty",
                    sound1: `${BASE_URL}/${AUDIO_PATH}/long80.mp3`,
            
                    num2: "90",
                    numtext2: "Àádọ́rùn",
                    numname2:"Ninety",
                    sound2: `${BASE_URL}/${AUDIO_PATH}/long90.mp3`,
                },
                {
                    num1: null,
                    numtext1: null,
                    numname1:null,
                    sound1: null,
                    
                    num2: null,
                    numtext2: null,
                    numname2:null,
                    sound2: null,
                },
                {
                    num1: null,
                    numtext1: null,
                    numname1:null,
                    sound1: null,
            
                    num2: null,
                    numtext2: null,
                    numname2:null,
                    sound2: null,
                }
            ],
            isTest: true,
            test1Text: "What is the number in Yoruba?",
            test2Text: "What number do you hear?",
            test1: [
            { question:["mẹ́ta", "mẹ́fà", "mẹ́wàá"].sort(() => Math.random() - 0.5),
                display: "3"},
            { question:["mẹ́jọ", "méje", "Ogún"].sort(() => Math.random() - 0.5),
                display: "7"},
            { question:["méjì", "ọ̀kan", "mẹ́rin"].sort(() => Math.random() - 0.5),
                display: "2"},
            { question:["ọ̀kanleogójì", "mẹ́fà", "mẹ́wàá"].sort(() => Math.random() - 0.5),
                display: "41"},
            { question:["màrúndinàádọ́rin", "mẹ̀tadinàádọ́rin", "mèjìdinọgọ́rin"].sort(() => Math.random() - 0.5),
                display: "65"}
            ],
            test2: [
            { question: ["8", "20", "7", "3"].sort(() => Math.random() - 0.5),
                sound: `${BASE_URL}/${AUDIO_PATH}/8.mp3`},
            { question: ["1", "2", "5", "6"].sort(() => Math.random() - 0.5),
                sound: `${BASE_URL}/${AUDIO_PATH}/1.mp3`},
            { question: ["50", "40", "30", "80"].sort(() => Math.random() - 0.5),
                sound: `${BASE_URL}/${AUDIO_PATH}/50.mp3`},
            { question: ["90", "9", "19", "4"].sort(() => Math.random() - 0.5),
                sound: `${BASE_URL}/${AUDIO_PATH}/90.mp3`},
            { question: ["10", "20", "60", "30"].sort(() => Math.random() - 0.5),
                sound: `${BASE_URL}/${AUDIO_PATH}/10.mp3`}
            ],
            answers: ["8", "1", "50", "90", "10","mẹ́ta", "méje", "méjì", "ọ̀kanleogójì", "màrúndinàádọ́rin"],
        }
        console.log('SUCCESS!! => Number Lecture')
        res.json(data);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error})
        
    }
}

module.exports = number