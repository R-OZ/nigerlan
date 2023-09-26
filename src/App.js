import Main from "./components/Main";

import Lecture from "./components/Lecture/Lecture";
import GrammarLec from "./components/Lecture/Grammar/GrammarLec";
import Loading from "./components/Loading/Loading";

import { HashRouter, Route, Switch } from "react-router-dom";
import React from "react";
import Feedback from "./components/Profile/Feedback";
import Test from "./components/Test";


const App = () => {

  return (
    <HashRouter>
      <Switch>
          <Route exact path="/">
              <Main />
          </Route>
          <Route path="/Alphabetslec">
              <Lecture id="alphabet" />
          </Route>
          <Route path="/Vowelslec">
              <Lecture id="vowel" />
          </Route>
          <Route path="/Consonantslec">
              <Lecture id="consonant" />
          </Route>
          <Route path="/Numberslec">
              <Lecture id="number" />
          </Route>
          <Route path="/Bodylec">
              <Lecture id="body" />
          </Route>
          <Route path="/Grammarlec" >
              <GrammarLec  />
          </Route>
          <Route path="/Feedback">
              <Feedback />
          </Route>
          <Route path="/Loading"> {/*This Component is not yet in use*/}
              <Loading/>
          </Route>
          <Route path="/Test"> {/*This Component is not yet in use*/}
              <Test />
          </Route>
      </Switch>
    </HashRouter>
  )
}
export default App;

