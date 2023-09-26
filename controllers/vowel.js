const { BASE_URL } = require('../config/constants')

const vowel = async (req, res) =>{
    const AUDIO_PATH = "audio/VowelPro"
    try {
        const data = {
            lecTxt: "Yoruba alphabets contains only seven (7) vowels which are:",
            progyColor: "#53a3ec",
            lecBody:[
            {
                capital: "A",
                small: "a",
                pronounce: "ahh",
                image: `${BASE_URL}/images/crown.svg`,
                example: "dé (Crown)",
                sound: `${BASE_URL}/${AUDIO_PATH}/longa.mp3`
            },
            {
                capital: "E",
                small: "e",
                pronounce: "hay",
                image: `${BASE_URL}/images/mouse.svg`,
                example: "kúté (Mouse)",
                sound: `${BASE_URL}/${AUDIO_PATH}/longe.mp3`
            },
        
            {
                capital: "Ẹ",
                small: "ẹ",
                pronounce: "eh",
                image: `${BASE_URL}/images/eggs.svg`,
                example: "yin (Egg)",
                sound: `${BASE_URL}/${AUDIO_PATH}/longe2.mp3` 
            },
        
            {
                capital: "I",
                small: "i",
                pronounce: "ee",
                image: `${BASE_URL}/images/tree.svg`,
                example: "gi (Tree)",
                sound: `${BASE_URL}/${AUDIO_PATH}/longi.mp3`
            },
        
            {
                capital: "O",
                small: "o",
                pronounce: "oh",
                image: `${BASE_URL}/images/water.svg`,
                example: "mi (Water)",
                sound: `${BASE_URL}/${AUDIO_PATH}/longo.mp3`
            },
        
            {
                capital: "Ọ",
                small: "ọ",
                pronounce: "or",
                image: `${BASE_URL}/images/king.svg`,
                example: "ba (King)",
                sound: `${BASE_URL}/${AUDIO_PATH}/longo2.mp3` 
            },
            {
                capital: "U",
                small: "u",
                pronounce: "ooh",
                image: `${BASE_URL}/images/yam.svg`,
                example: "iṣ",
                example2: "(Yam)",
                sound: `${BASE_URL}/${AUDIO_PATH}/longu.mp3`
            }
            ],
            isTest: true,
            test1Text: "Which of the following is a vowel?",
            test2Text: "What vowel sound do you hear?",
            test1: [
                {question:["K", "I", "P", "D"].sort(() => Math.random() - 0.5)},
                {question:["A", "W", "T", "Gb"].sort(() => Math.random() - 0.5)},
                {question:["K", "S", "Ọ", "R"].sort(() => Math.random() - 0.5)},
                {question:["E", "J", "Ṣ", "H"].sort(() => Math.random() - 0.5)}
            ],
            test2: [
                { question: ["U", "B", "A", "E"].sort(() => Math.random() - 0.5),
                sound: `${BASE_URL}/audio/AlphabetsPro/u.mp3`},
                { question: ["O", "Y", "I", "Ọ"].sort(() => Math.random() - 0.5),
                sound: `${BASE_URL}/audio/AlphabetsPro/o.mp3`},
                { question: ["Ẹ", "E", "F", "I"].sort(() => Math.random() - 0.5),
                sound: `${BASE_URL}/audio/AlphabetsPro/e2.mp3`}
            ],
            answers: ["A", "E", "Ẹ", "I", "O", "Ọ", "U"],
        }
        console.log('SUCCESS!! => Vowel Lecture')
        res.json(data);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error})
        
    }
}

module.exports = vowel