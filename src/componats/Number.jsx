import { useState } from "react";
import styles from "./Number.module.css"

function Number({ numberslect, setnumberslect, error, Score }) {
    const arry=["1","2","3","4","5","6"];
    
         
  return (<>
  <div className={styles.container}>
    <div><h1 className={styles.hading}>{Score}</h1>
      <p className={styles.pra}> Total Score</p></div>
         {error}
    <div className={styles.main}>
      
          {arry.map((item,i)=>  (<box 
          
            
          key={i}className={styles.num} onClick={()=>setnumberslect(item)}> {item}</box>))}
    
           
    </div>
  </div >
    </>
  )
}

export default Number
