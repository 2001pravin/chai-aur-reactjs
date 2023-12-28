
import { useState } from 'react';

import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  
//  let counter =3
 const addValue = () =>{
  counter++;
  if (counter<=20){
    
    setCounter(counter);
    console.log(counter);
  }else{
  
  console.log ("stop")

  }

 }
 const removeValue=()=>{
  counter--;
  if(counter>=0){
  setCounter(counter);
  console.log(counter); 
  }else{
    console.log ("stop")

  }
 }

  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter Value :{counter}</h2>
    <button onClick={addValue}>
      
      Add Value</button>
    <br />
    <button onClick={removeValue}>
      Remove Value</button>

    </>
  )
}

export default App
