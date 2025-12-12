const { BASE_URL } = require('../config/constants')

const consonant = async (req, res) =>{
    const AUDIO_PATH = "audio/ConsonantPro"
    try {
        const data = {
            lecTxt: "Yoruba alphabets contains eighteen (18) consonants which are:",
            progyColor: "#40c600",
            lecBody:[
                {
                    capital: "B",
                    small: "b",
                    pronounce: "bee",
                    image: `${BASE_URL}/images/shoe.svg`,
                    example: "àtà (Shoe)",
                    sound1: `${BASE_URL}/${AUDIO_PATH}/longb.mp3`,
                    
                    capital2: "D",
                    small2: "d",
                    pronounce2: "dee",
                    image2: `${BASE_URL}/images/mirror.svg`,
                    example2: "ígí (Mirror)",
                    sound2: `${BASE_URL}/${AUDIO_PATH}/longd.mp3`,
                },
                {
                    capital: "F",
                    small: "f",
                    pronounce: "fee",
                    image: `${BASE_URL}/images/flute.svg`,
                    example: "èrè (Flute)",
                    sound1: `${BASE_URL}/${AUDIO_PATH}/longf.mp3`,
                    
                    capital2: "G",
                    small2: "g",
                    pronounce2: "gee",
                    image2: `${BASE_URL}/images/pen.svg`,
                    example2: "ègé (Pen)",
                    sound2: `${BASE_URL}/${AUDIO_PATH}/longg.mp3`
                },
                {
                    capital: "Gb",
                    small: "gb",
                    pronounce: "gbh",
                    image: `${BASE_URL}/images/corn.svg`,
                    example: "À",
                    examplem: "ado (Corn)",
                    sound1: `${BASE_URL}/${AUDIO_PATH}/longgb.mp3`,
                    
                    capital2: "H",
                    small2: "h",
                    pronounce2: "hee",
                    image2: `${BASE_URL}/images/tongue.svg`,
                    example2: "A",
                    examplem2: "ọ́n (Tongue)",
                    sound2: `${BASE_URL}/${AUDIO_PATH}/longh.mp3`,
                },
                {
                    capital: "J",
                    small: "j",
                    pronounce: "jee",
                    image: `${BASE_URL}/images/sunglasses.svg`,
                    example: "igi (Sunglasses)",
                    sound1: `${BASE_URL}/${AUDIO_PATH}/longj.mp3`,
                    
                    capital2: "K",
                    small2: "k",
                    pronounce2: "key",
                    image2: `${BASE_URL}/images/lion.svg`,
                    example2: "ìnìún (Lion)",
                    sound2: `${BASE_URL}/${AUDIO_PATH}/longk.mp3`,
                },
                {
                    capital: "L",
                    small: "l",
                    pronounce: "lee",
                    image: `${BASE_URL}/images/butterfly.svg`,
                    example: "abalábá (Butterfly)",
                    sound1: `${BASE_URL}/${AUDIO_PATH}/longl.mp3`,
                    
                    capital2: "M",
                    small2: "m",
                    pronounce2: "mee",
                    image2: `${BASE_URL}/images/cow.svg`,
                    example2: "àlúù (Cow)",
                    sound2: `${BASE_URL}/${AUDIO_PATH}/longm.mp3`,
                },
                {
                    capital: "N",
                    small: "n",
                    pronounce: "nee",
                    image: `${BASE_URL}/images/nurse.svg`,
                    example: "ọọsi (Nurse)",
                    sound1: `${BASE_URL}/${AUDIO_PATH}/longn.mp3`,

                    capital2: "P",
                    small2: "p",
                    pronounce2: "pee",
                    image2: `${BASE_URL}/images/shout.svg`,
                    example2: "ariwo  (Shout)",
                    sound2: `${BASE_URL}/${AUDIO_PATH}/longp.mp3`,
                },
                {
                    capital: "R",
                    small: "r",
                    pronounce: "ree",
                    image: `${BASE_URL}/images/camel.svg`,
                    example: "àkúnmí (Camel)",
                    sound1: `${BASE_URL}/${AUDIO_PATH}/longr.mp3`,
                    
                    capital2: "S",
                    small2: "s",
                    pronounce2: "see",
                    image2: `${BASE_URL}/images/orange.svg`,
                    example2: "ọ",
                    examplem2: "àn (Orange)",
                    sound2: `${BASE_URL}/${AUDIO_PATH}/longs.mp3`,
                },
                {
                    capital: "Ṣ",
                    small: "ṣ",
                    pronounce: "she",
                    image: `${BASE_URL}/images/trousers.svg`,
                    example: "òkóto (Trousers)",
                    sound1: `${BASE_URL}/${AUDIO_PATH}/longs2.mp3`,
                    
                    capital2: "T",
                    small2: "t",
                    pronounce2: "tea",
                    image2: `${BASE_URL}/images/table.svg`,
                    example2: "ábìlì (Table)",
                    sound2: `${BASE_URL}/${AUDIO_PATH}/longt.mp3`,
                },
                {
                    capital: "W",
                    small: "w",
                    pronounce: "wee",
                    image: `${BASE_URL}/images/milk.svg`,
                    example: "àrà (Milk)",
                    sound1: `${BASE_URL}/${AUDIO_PATH}/longw.mp3`,
                    
                    capital2: "Y",
                    small2: "y",
                    pronounce2: "yee",
                    image2: `${BASE_URL}/images/feather.svg`,
                    example2: "i",
                    examplem2: "é (Feather)",
                    sound2: `${BASE_URL}/${AUDIO_PATH}/longy.mp3`,
                }
            ],
            isTest: true,
            test1Text: "Which of the following is a consonant?",
            test2Text: "What consonant sound do you hear?",
            test1: [
                {question:["Y", "A", "U", "O"].sort(() => Math.random() - 0.5)},
                {question:["I", "Gb", "E", "O"].sort(() => Math.random() - 0.5)},
                {question:["E", "A", "Ẹ", "D"].sort(() => Math.random() - 0.5)},
                {question:["U", "7", "F", "O"].sort(() => Math.random() - 0.5)},
                {question:["5", "Ẹ", "S", "3"].sort(() => Math.random() - 0.5)},
                {question:["Ọ", "I", "L", "O"].sort(() => Math.random() - 0.5)},
                {question:["8", "H", "3", "5"].sort(() => Math.random() - 0.5)},
                {question:["E", "U", "M", "O"].sort(() => Math.random() - 0.5)}
            ],
            test2: [
                { question: ["P", "N", "A", "U"].sort(() => Math.random() - 0.5),
                sound: `${BASE_URL}/audio/AlphabetsPro/p.mp3`},
                { question: ["W", "Y", "Ọ", "M"].sort(() => Math.random() - 0.5),
                sound: `${BASE_URL}/audio/AlphabetsPro/w.mp3`},
                { question: ["J", "F", "H", "Ṣ"].sort(() => Math.random() - 0.5),
                sound: `${BASE_URL}/audio/AlphabetsPro/j.mp3`},

                { question: ["K", "B", "D", "I"].sort(() => Math.random() - 0.5),
                sound: `${BASE_URL}/audio/AlphabetsPro/k.mp3`},
                { question: ["R", "O", "A", "U"].sort(() => Math.random() - 0.5),
                sound: `${BASE_URL}/audio/AlphabetsPro/r.mp3`},
                { question: ["T", "Ẹ", "S", "Gb"].sort(() => Math.random() - 0.5),
                sound: `${BASE_URL}/audio/AlphabetsPro/t.mp3`}
            ],
            answers: ["Y", "Gb", "D", "F", "S", "L", "H", "M","P","W","J","K","R","T"],
        }
        console.log('SUCCESS!! => Consonant Lecture')
        res.json(data);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error})
        
    }
}

module.exports = consonant