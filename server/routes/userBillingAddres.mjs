import express from 'express';
import db from '../db/conn.mjs';


const router = express.Router();


 router.get("/", async (req,res) =>{
   try{
      let collection = await db.collection('userBillingAddress');
      let result = await collection.find({}).toArray();
      res.json(result).status(200);
  }catch(error){
      console.error(`Error occured: ${error}`)
      res.status(500).join({error: 'Internal server error'})
  }})



 router.post("/", async (req,res) =>{
 
    try{
        if(!req.session.user || !req.session.user.email){
            res.status(401).json({ message: 'Unauthorized' });
            return; // Return early to prevent further execution
        }

        const userEmail = req.session.user.email
        const { FirstName, lastName, Address, Postal, Country, Zip, City, State} = req.body

        let newDocument ={
         
            FirstName: FirstName,
            lastName: lastName,
            Address: Address,
            Postal: Postal,
            Country: Country,
            Zip: Zip,
            City: City,
            State:State,
            userEmail: userEmail
        }
        let collection = await db.collection("userBillingAddress");
        let result = await collection.insertOne(newDocument)
        res.status(204).json({message: 'Billing Address Recorded'});
    }catch(err){
        console.error(`Error occured: ${err}`)
        res.status(500).json({error: 'Internal server error'})
    }
 })

 export default router