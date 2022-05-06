import React from 'react'
import styles from './Profile.module.css'
import ReactCardFlip from "react-card-flip";
import Btn from "./Btn";

const CardStyle = {
  border: "1px solid black",
  padding: "20px",
  margin: "20px",
  width: "100px",
  height: "300px",
  margin: "auto",
  width:"30%",
  marginBottom: "20px",
  marginTop: "10px"
  

  
};


const Profiles=({name , status , gender, species,userimg})=>{
  const [isFlipped, setIsFlipped] = React.useState(false);
  
  return(
    <div className={styles.container}>

    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
    <div
      style={CardStyle} className={styles.body}
      onMouseEnter={() => setIsFlipped((prev) => !prev)}
      >
      <div className={styles.profiles}>
      
        <img width="200" height="200" src={userimg} alt="user" />
  
      </div>
      
      
      
    </div>
    
    <div
        style={CardStyle}
        onMouseLeave={() => setIsFlipped((prev) => !prev)}
        className="CardBack"
      >
        <div className={styles.name}>{name}</div>
        <div>{status}</div>
        <div>{gender}</div>
        <div>{species}</div>
      </div>
    </ReactCardFlip>




      <Btn/>
    </div>
  )

}
export default Profiles;