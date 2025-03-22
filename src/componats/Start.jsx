 import styles from "./start.module.css"

function Start({ toggle }) {
  return (
    <div className={styles.container}>
      <img src="./dices.png" alt="" />
            <div><h1>DICE GAME</h1>
        <button onClick={toggle }>Play Game</button>
            </div>   
    </div>
  )
}

export default Start
  
 
