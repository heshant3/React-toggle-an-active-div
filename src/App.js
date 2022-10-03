import { useState } from "react";
import "./styles.css";

export default function App() {

const [appState, changeCState] = useState({
  ActiveXObject:null,
  Object:[{id:1},{id:2},{id:3}]
});

function toggleActive (index){
  changeCState ({...appState,ActiveXObject:appState.Object[index]})
}

function toggleActiveStyle(index){
  if(appState.Object[index] === appState.ActiveXObject){
  return "box active";}
  else{
    return "box inactive";
  }
}
  return (
    <div className="App">
     { appState.Object.map((elements,index)  =>(
       <div key={index} className={toggleActiveStyle(index)} onClick={() => {toggleActive(index)}} > </div>
     )) }
    </div>
  );
}
