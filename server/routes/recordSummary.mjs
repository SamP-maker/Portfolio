import db from "../db/conn.mjs";
import express from "express";



const router = express.Router();



router.post("/", async (req,res)=>{

    const { Order , Address ,  BillingAddress, CardCredentials } = req.body


    const new_data = new Object({
        Order:Order,
        Address:Address,
        BillingAddress:BillingAddress,
        CardCredentials:CardCredentials,
        user_id: req.session.user.email,
        timestampField: new Date()
    })

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