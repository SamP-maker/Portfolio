const mongoose = require('mongoose')



const Address = new mongoose.Schema({

Username:{
    type: String,
    required: true,
    unique: true,

},
Address_Line1:{
    type: String,
    required: true,
    unique: true,
},
Address_Line2:{
    type:String,
    required:true,
    unique:true,
},
City:{
    type:Number,
    required:true,
    unique:true,
},
State:{
    type:String,
    required:true,
    unique:true,
    
},
Postal_Code:{
    type:String,
    required:true,
    unique:true,
    
},
Country:{
    type:String,
    required:true,
    unique:true,
    
}






})





module.exports = mongoose.model('Address', Address)