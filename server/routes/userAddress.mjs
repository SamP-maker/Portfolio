import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();


router.get("/", async(req,res) =>{
    let collection = await db.collection("userAddress");
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
})



router.post("/", async (req,res) =>{
    try{
        if (!req.session.user || !req.session.user.email) {
            res.status(401).json({ message: 'Unauthorized' });
           
            return; // Return early to prevent further execution
        }
           
        const userEmail = req.session.user.email;

        let newDocument = {
            FirstName:req.body.firstName,
            LastName :req.body.lastName,
            Address : req.body.Address,
            Postal : req.body.Postal,
            District : req.body.District,
            Phone : req.body.Phone,
            user_id: userEmail,
        }
    
    
        let collection = await db.collection("userAddress");
        let result = await collection.insertOne(newDocument);
    
        res.status(204).json({message: 'Address recorded'});

    }catch(err){
        console.error(`Error occured: ${err}`)
        res.status(500).json({error: 'Internal server error'})
    }
    




})


export default router