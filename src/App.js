import Main from "./components/Main";

import Lecture from "./components/Lecture/Lecture";
import GrammarLec from "./components/Lecture/Grammar/GrammarLec";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Feedback from "./components/Profile/Feedback";


const App = () => {

  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/Alphabetslec" element={<Lecture id="alphabet" />} />
          <Route path="/Vowelslec" element= {<Lecture id="vowel" />} />
          <Route path="/Consonantslec" element={<Lecture id="consonant" />} />
          <Route path="/Numberslec" element={<Lecture id="number" />} />
          <Route path="/Bodylec" element={<Lecture id="body" />} />
          <Route path="/Grammarlec"  element={<GrammarLec  />} />
          <Route path="/Feedback"  element={<Feedback />} />
        </Routes>
    </BrowserRouter>
  )
}
export default App;

