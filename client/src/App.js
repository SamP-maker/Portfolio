
import React from "react";
import {Routes,Route} from "react-router-dom";
import Signup from "./components/reg/Sign_up";
import Init from "./components/reg/Init";
import Login from "./components/reg/Login";
import Dashboard from "./components/menu/dashboard";
import Menu from "./components/menu/menu";
import Cart from '../src/components/modal/CartModal';
import Order_Confirm from "./components/Checkout/Order_Confirm";
import Address from "./components/Checkout/Address";
import Phone from './components/modal/PhoneNumberModal';
import BillingModal from './components/modal/BillingAddressModal'







function App() {

  


  
  return (

   
    <Routes>
    <Route path="/" element={<Init/>}/>
    <Route path="/Signup" element={<Signup/>} />
    <Route path="/Login" element={<Login/>} />
    <Route path="/Dashboard" element={<Dashboard/>}/>
    <Route path="/Menu" element={<Menu/>}/>
    <Route path="/Cart" element={<Cart/>}/>
    <Route path="/Order_Confirm" element={<Order_Confirm/>}/>
    <Route path="/Address" element={<Address/>}/>
    <Route path ="/PhoneNumber" element={<Phone/>}/>
    <Route path ="/BillingModal" element={<BillingModal/>}/>

  </Routes>
      
  
    

  );
}

export default App;
  