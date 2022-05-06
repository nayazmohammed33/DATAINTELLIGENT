
import './App.css';
import Header from './Components/Header';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./Components/Home";
import Liked from "./Components/Liked";



function App() {
  return (
    <div className="App">
      
    
      <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Header />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Liked" element={<Liked />} />
        </Route>
      </Routes>
    </BrowserRouter>
    

     
    </div>
  );
}

export default App;
