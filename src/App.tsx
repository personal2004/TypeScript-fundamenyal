import React from 'react';
import './App.scss';
import StringPasser from './components/passing-string/StringPasser';
import { Arrayofobject } from './components/ArrayofObjects/Arrayofobject';
import {ArrrayofObjects} from "./constants/constant"
import Sender from './components/Children-prop/Sender';
import JSXSender from './components/jsx-child/JSXSender';
import ButtonEventSender from './components/eventprops/buttonEvent/ButtonEventSender';
import { Inputsender } from './components/eventprops/inputEvent/Inputssender';
import { StyleSender } from './components/style-props/StyleSender';
 
function App() {
  return (
    <div className="App">
      <h2>I. Passing Specific String</h2>
      <StringPasser/>
      <h2>II. Passing Array of Objects</h2>
      <Arrayofobject names={ArrrayofObjects}/>
      <h2>III. Passing string child</h2>
      <Sender/>
      <h2>IV. Passing JSX as a child</h2>
      <JSXSender/>
      <h2>V. Passing Events</h2>
      <ButtonEventSender/>
      <Inputsender/>
      <h2>VI. Passing CSS Styles</h2>
      <StyleSender/>
    </div>
  );
}

export default App;
