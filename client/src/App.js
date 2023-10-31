
import React from "react";
import {Routes,Route} from "react-router-dom";
import Signup from "./components/reg/Sign_up";
import Init from "./components/reg/Init";
import Login from "./components/reg/Login";
import Dashboard from "./components/menu/dashboard";
import Menu from "./components/menu/menu";
import Order_Confirm from "./components/Checkout/Order_Confirm";
import Address from "./components/Checkout/Address";
import CardNumber from './components/modal/BillingCardNumber';
import Status from './components/Status/Status';
import Payment from './components/Checkout/Payment';
import BillingAddress from './components/modal/BillingAddressModal';
import CreditCard from '../src/components/modal/CreditCard'








function App() {

  


  
  return (

   
    <Routes>
    <Route path="/" element={<Init/>}/>
    <Route path="/Signup" element={<Signup/>} />
    <Route path="/login" element={<Login/>} />
 
    <Route path="/Menu" element={<Menu/>}/>
    <Route path="/Order_confirm" element={<Order_Confirm/>}/>
    <Route path="/Address" element={<Address/>}/>
    <Route path="/Status" element={<Status/>}/>
    <Route path="/Payment" element={<Payment/>}/>
    <Route path="/Dashboard" element={<Dashboard/>}/>
    <Route path ="/BillingModal" element={<CardNumber/>}/>
    <Route path ="/BillingAddress" element={<BillingAddress/>}/>
    
  {/*Testing*/} 
  <Route path="/CreditCard" element={<CreditCard/>}/>

  
  </Routes>
      
  
    

  );
}

export default App;
  