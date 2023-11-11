
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
import Payment from './components/Checkout/Payment';
import BillingAddress from './components/modal/BillingAddressModal';
import Status from './components/Status/Status';
import BillingEdit from './components/modal/BillingAddressEdit';
import AddressEdit from './components/modal/AddressEdit';
import OrderEdit from './components/modal/OrderEdit';







function App() {

  


  
  return (

   
    <Routes>
    <Route path="/" element={<Init/>}/>
    <Route path="/Signup" element={<Signup/>} />
    <Route path="/login" element={<Login/>} />
 
    <Route path="/Menu/:name" element={<Menu/>}/>
    <Route path="/Menu" element={<Menu/>}/>
    <Route path="/Order_confirm" element={<Order_Confirm/>}/>
    <Route path="/Address" element={<Address/>}/>
    <Route path="/Status" element={<Status/>}/>
    <Route path="/Payment" element={<Payment/>}/>
    <Route path="/Dashboard" element={<Dashboard/>}/>
    <Route path ="/BillingModal" element={<CardNumber/>}/>
    <Route path ="/BillingAddress" element={<BillingAddress/>}/>
    <Route path ="/Status" element={<Status/>}/>
    
  {/*Testing*/} 
    <Route path ="/BillingEdit" element={<BillingEdit/>}/>
    <Route path ="/AddressEdit" element={<AddressEdit/>}/>
    <Route path ="/OrderEdit" element={<OrderEdit/>}/>

  
  </Routes>
      
  
    

  );
}

export default App;
  