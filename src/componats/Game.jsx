import Number from "./Number"
import styles from "./Game.module.css"
import Dice from "./Dice"
import { useState } from "react";
function Game() {
  const[Score, setcore]=useState(0)
    const [numberslect, setnumberslect]=useState();
  const [RandomNumber, setRandomNumber] = useState(null);
  const[error,seterror]=useState("")


  const min = 1;
  const max = 6;

  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomNumber(number);
    if(!numberslect) {
      seterror("You have not selected any number")
      return

      
    }
      
       seterror("")

    if (numberslect== RandomNumber){
      setcore((prev)=>prev+RandomNumber);
    }
    else{
      setcore((prev)=>prev-1);
    }
    
  };
  
  const reset=()=>{
    setcore(0);
  }
  return (<>
  <div className={styles.container}>
    <div className={styles.main}>
      
    </div>
      <Number numberslect={numberslect}
        setnumberslect={setnumberslect}
        error={error}
        Score={Score}
        
      />
       
    </div>
    <div>
      <Dice RandomNumber={RandomNumber}
        generateRandomNumber={generateRandomNumber}
        setcore={setcore}
        Score={Score}
        reset={reset}
      />
    </div>
    
  </>
  )
}

export default Game
  