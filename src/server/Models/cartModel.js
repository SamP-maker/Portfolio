const mongoose = require('mongoose')



const orderHistory = new mongoose.Schema({

Username:{
    type: String,
    required: true,
    unique: true,

},
Order_History:{
    type: String,
    required: true,
    unique: true,
},
Payment_type:{
    type:String,
    required:true,
    unique:true,
},
Amount:{
    type:Number,
    required:true,
    unique:true,
},
Date:{
    type:Date,
    required:true,
    unique:true,

}






})





module.exports = mongoose.model('Order_History', orderHistory)