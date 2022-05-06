
import { useState } from "react";


const strdata =()=>{
  let saveData = () =>{
    localStorage.setItem('Object 1', "test object");
  
}
}

export default function App() {
  const [buttonText, setButtonText] = useState("LIKE");
  let saveData = () =>{
    localStorage.setItem('Object 1', "test object");
  
}
  return (
    <div className="App">
      <button
        type="submit"
        onClick={() => {
          setButtonText("DISLIKE") }}
        onChange={saveData}
      >
        {buttonText}
      </button>
    </div>
  );
}
