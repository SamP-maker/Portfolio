import express from 'express';
import db from '../db/conn.mjs';


const router = express.Router();


 router.get("/getBillingAddress", async (req,res) =>{
    console.log('fetch successful')
   try{
      let collection = await db.collection('userBillingAddress');
      let result = await collection.find({ user_id: req.session.user.email})
        .sort({timestampField: -1})
        .limit(1)
        .toArray()
        
       
      res.json(result).status(200);
      
  }catch(error){
      console.error(`Error occured: ${error}`)
      res.status(500).json({error: 'Internal server error'})
  }})




  
router.get("/getBillingAddressHistory", async (req,res) =>{

    console.log('fetch successful')
    try{
        let collection = await db.collection('userBillingAddress');
        let result = await collection.find({ user_id: req.session.user.email})
        .sort({timestampField: -1})
        .toArray()
        
   
        res.status(200).json(result);
       
    }catch(error){
        console.error(`Error occured: ${error}`)
        res.status(500).json({error: 'Internal server error'})
    }


});



 router.post("/postBillingAddress", async (req,res) =>{

   
 
    try{
        if(!req.session.user || !req.session.user.email){
            res.status(401).json({ message: 'Unauthorized' });
            return; // Return early to prevent further execution
        }

        const userEmail = req.session.user.email
        const { FirstName, LastName, Address, Postal, Country, Zip, City, State} = req.body

        let collection = await db.collection("userBillingAddress");
        
      

            let newDocument ={
                FirstName: FirstName,
                LastName: LastName,
                Address: Address,
                Postal: Postal,
                Country: Country,
                Zip: Zip,
                City: City,
                State:State,
                user_id: userEmail,
                timestampField: new Date()
            }
           
            let result = await collection.insertOne(newDocument)
            
            if(result.insertedCount === 1){
                res.status(200).json({message: 'Document inserted successfully.' });


            }else{
                res.status(500).json({error: 'Insertion failed'})
            }

            
        


      
    }catch(err){
        console.error(`Error occured: ${err}`)
        res.status(500).json({error: 'Internal server error'})
    }
 })





 router.put("/updateBillingAddress", async (req,res) =>{

   
 
    try{
        if(!req.session.user || !req.session.user.email){
            res.status(401).json({ message: 'Unauthorized' });
            return; // Return early to prevent further execution
        }

        const userEmail = req.session.user.email
        const { FirstName, lastName, Address, Postal, Country, Zip, City, State} = req.body

        let collection = await db.collection("userBillingAddress");
        
       const mostRecentAddress = await collection
       .find({ user_id: userEmail })
       .sort({timestampField: -1 })
       .limit(1)
       .next();

       if(mostRecentAddress){
        const updateFilter ={
            _id: mostRecentAddress._id,
            user_id: userEmail,
        }

        const update = {


            $set:{
                FirstName: FirstName,
                lastName: lastName,
                Address: Address,
                Postal: Postal,
                Country: Country,
                Zip: Zip,
                City: City,
                State:State,
                user_id: userEmail,
                timestampField: new Date()

            }
        }

      
    


            let result = await collection.updateOne(updateFilter, update);

            if(result.matchedCount === 0){
                res.status(404).json({message : 'Document not found'})
            }else{
                res.status(200).json({message : 'Document updated successfully'})
            }
        }

    }catch(err){
        console.error(`Error occured: ${err}`)
        res.status(500).json({error: 'Internal server error'})
    }
 })

 export default router