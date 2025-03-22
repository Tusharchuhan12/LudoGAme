
import './App.css'
import Start from './componats/Start'
import Game from './componats/Game'
import { useState } from 'react'
function App() {
     let [start, setstart]=useState()

            let toggle=()=>{
              
              setstart(!start);
            }
  return (
    <>
      {!start ? <Start toggle={toggle}></Start> : <Game /> }

    </>
  )
}

export default App
