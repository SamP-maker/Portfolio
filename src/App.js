
import React, {useEffect} from "react";
import {Routes,Route} from "react-router-dom";
import Signup from "./components/reg/Sign_up";
import Init from "./components/reg/Init";
import Login from "./components/reg/Login";






function App() {

  


  
  return (

   

    <>
    

    <Routes>
          <Route path="/" element={<Init />}/>
          <Route path="/Signup" element={<Signup/>} />
          <Route path="/Login" element={<Login/>} />
    </Routes>
   
    </>

  );
}

export default App;
  