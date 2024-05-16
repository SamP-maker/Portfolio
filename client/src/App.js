
import React from "react";
import {Routes,Route} from "react-router-dom";
import Dashboard from "./components/menu/dashboard";
import Menu from "./components/menu/menu";
import Order_Confirm from "./components/Checkout/Order_Confirm";
import BankListSelection from "./components/modal/ModalEdit/BankListSlider";
import Testing from "./components/modal/testing";









function App() {

  


  
  return (

  
    <Routes>
    <Route path="/Dashboard" element={<Dashboard/>}/>
    <Route path="/Testing" element={<Testing/>}/>
 
    <Route path="/Menu/:name" element={<Menu/>}/>
    <Route path="/Menu" element={<Menu/>}/>
    <Route path="/Order_confirm" element={<Order_Confirm/>}/>
    
    <Route path="/BankListSelection" element={<BankListSelection/>}/>
   
   
    
 

  
  </Routes>
  
  
    

  );
}

export default App;
  