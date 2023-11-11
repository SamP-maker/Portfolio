import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();


router.get("/getAddress", async(req,res) =>{
    try{
    let collection = await db.collection("userAddress");
    let result = await collection.find({ user_id: req.session.user.email})
        .sort({ timestampField: -1 })
        .limit(1)
        .toArray()
    res.status(200).json(result);
}catch(err){
    console.log(err)
}
   
})





  
router.get("/getAddressHistory", async (req,res) =>{


    try{
        let collection = await db.collection('userAddress');
        let result = await collection.find({ user_id: req.session.user.email})
        .sort({timestampField: -1})
        .toArray()
        

        res.status(200).json(result);
    }catch(error){
        console.error(`Error occured: ${error}`)
        res.status(500).json({error: 'Internal server error'})
    }


});




router.post("/postAddress", async (req,res) =>{
    try{
        if (!req.session.user || !req.session.user.email) {
            res.status(401).json({ message: 'Unauthorized' });
           
            return; // Return early to prevent further execution
        }
           
        const userEmail = req.session.user.email;
        let collection = await db.collection("userAddress");
        


            
        let newDocument = {
            FirstName:req.body.firstName,
            LastName :req.body.lastName,
            Address : req.body.Address,
            Postal : req.body.Postal,
            District : req.body.District,
            Phone : req.body.Phone,
            user_id: userEmail,
            timestampField: new Date()
        }

        let result = await collection.insertOne(newDocument)

        if(result.insertedCount === 1){
            res.status(200).json({message: 'Document inserted successfully'});
        }else{
            res.status(500).json({error: 'Insertion failed'});
        }
    
        



    }catch(err){
        console.error(`Error occured: ${err}`)
        res.status(500).json({error: 'Internal server error'})
    }
    




})






router.post("/updateAddress", async (req,res) =>{
    try{
        if (!req.session.user || !req.session.user.email) {
            res.status(401).json({ message: 'Unauthorized' });
           
            return; // Return early to prevent further execution
        }
           
        const userEmail = req.session.user.email;
        let collection = await db.collection("userAddress");
        const mostRecentAddress = await collection
        .find({ user_id: userEmail})
        .sort({timestampField: -1})
        .limit(1)
        .next();



        if( mostRecentAddress){
            const updateFilter ={
                _id: mostRecentAddress._id,
                user_id: userEmail
            }

            const update ={
                $set:{
                    FirstName:req.body.firstName,
                    LastName :req.body.lastName,
                    Address : req.body.Address,
                    Postal : req.body.Postal,
                    District : req.body.District,
                    Phone : req.body.Phone,
                    user_id: userEmail,
                    timestampField: new Date()
                }
            }
            let result = await collection.updateOne(updateFilter,update)
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