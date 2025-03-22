import React, { useState ,useEffect } from 'react'
import Rules from './Rules';

function Dice({ RandomNumber, generateRandomNumber, setcore, Score, reset }) {
 const [showrules, setshowrules]=useState(false) ;

  useEffect(()=>{
    generateRandomNumber();
  },[])

  return (
    <>
    <div>
      <center>
        <div onClick={generateRandomNumber} >
          <img  className='Dice-img' src={`./dice_${RandomNumber}.png`} alt="" />
          <p>Click on Dice to roll</p>
       
        
        </div>

        <button onClick={reset}>Reset</button>


        <button onClick={()=>setshowrules((prev)=>!prev)}>{ showrules?"hide":"show"   } Rules</button>
      </center> 

    </div>
    <center>
        {showrules&&<Rules/>}
    </center>
    </>

  )
}

export default Dice
