import db from "../db/conn.mjs";
import express from "express";



const router = express.Router();



router.post("/recordSummary", async (req,res)=>{

   
    const userEmail = req.session.user.email;
    const data = req.body


 

        const new_data = {
            data,
            user_id: userEmail,
            timestampField: new Date()
        };
        
    

    try{    
    const collection = await db.collection('Record_Summary')
    const result = await collection.insertOne(new_data)


    res.status(200).send(result);


    }catch(err){
        console.error('An error has occured, and this is recordSummary:',err)
        res.status(500).send(`Internal Server Error: ${err.message}`)
    }








});

export default router;