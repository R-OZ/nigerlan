import React from 'react'
import { Link } from 'react-router-dom';
import './module.css'
import { Rating } from '@mui/material';

import alphabet_img from '../images/alphabet.svg'
import vowel_img from '../images/vowel.svg'
import consonant_img from '../images/consonant.svg'
import number_img from '../images/number.svg'
import body_img from "../images/body.png"
import grammar_img from "../images/grammar.svg"

import alphabet_sound from "../Sounds/alphabets.mp3"
import vowel_sound from "../Sounds/vowel.mp3"
import consonant_sound from "../Sounds/consonanti.mp3"
import number_sound from "../Sounds/number.mp3"
import body_sound from "../Sounds/body.mp3"
import grammar_sound from "../Sounds/Grammar (2).mp3"


const Module = ({id, rating}) => {

  const data = {
    alphabet: {
      to: '/Alphabetslec',
      image: alphabet_img,
      title: 'Alúfábẹ́ẹ̀tì',
      text: 'alphabets',
      color: {backgroundColor: "#EE2929"},
      sound: new Audio(alphabet_sound)
    },

    vowel: {
      to: '/Vowelslec',
      image: vowel_img,
      title: 'Fáwẹ̀lì',
      text: 'vowels',
      color: {backgroundColor: "#53a3ec"},
      sound: new Audio(vowel_sound)
    },

    consonant: {
      to: '/Consonantslec',
      image: consonant_img,
      title: 'Kọ́ńsónántì',
      text: 'consonants',
      color: {backgroundColor: "#40c600"},
      sound: new Audio(consonant_sound)
    },

    number: {
      to: '/Numberslec',
      image: number_img,
      title: 'Òǹkà',
      text: 'numbers',
      color: {backgroundColor: "#1d0df9"},
      sound: new Audio(number_sound)
    },

    body: {
      to: '/Bodylec',
      image: body_img,
      title: 'Àwọn ẹ̀yà ara',
      text: 'the body',
      color: {backgroundColor: "#524b7a"},
      sound: new Audio(body_sound)
    },

    grammar: {
      to: '/Grammarlec',
      image: grammar_img,
      title: 'Gírámà',
      text: 'grammar',
      color: {backgroundColor: "#ff0099"},
      sound: new Audio(grammar_sound)
    }

  }

  return (
    <Link className="module" style={data[id].color} to={data[id].to} onClick={()=>data[id].sound.play()}>
        
        <div className="module-title-container" >
            <img src={data[id].image} id="module-img" />
            <h2 id='module-title'>{data[id].title}</h2>
        </div>

        <div className="module-content">
            <p id="module-text">{data[id].text.toUpperCase()} , get started with learning your {data[id].text} in Yoruba<br/>Lets GO!</p>
        </div>

        <div id="module-line"></div>

       <div className="module-rating-container">
        <Rating name='half-rating' size='large' max={5} defaultValue={rating} precision={0.5} readOnly/>
      </div>
    
    </Link>
  )
}

export default Module