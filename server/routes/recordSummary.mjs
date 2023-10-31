import db from "../db/conn.mjs";
import express from "express";



const router = express.Router();



router.post("/", async (req,res)=>{


    try{
        let userDetails = await db.collection("records").findOne({ user_id : req.session.user.email})
        let addressDetails = await db.collection("userAddress").findOne({ user_id : req.session.user.email})
        let billingAddress = await db.collection("userBillingAddress").findOne({ user_id : req.session.user.email})
        let billingCard = await db.collection("userBillingCard").findOne({ user_id : req.session.user.email})
        let orderList = await db.collection("userOrderList").findOne({ user_id : req.session.user.email})


    const record_Summary ={
        User_Details: userDetails,
        Address_Details:addressDetails,
        Billing_Address:billingAddress,
        BillingCard:billingCard,
        OrderList:orderList,

        


    }

    const collection = await db.collection('Record_Summary')
    const result = await collection.insertOne(record_Summary)


    res.status(200).send(record_Summary);
    }catch(err){
        console.error('An error has occured, and this is recordSummary:',err)
        res.status(500).send(`Internal Server Error: ${err.message}`)
    }








});

export default router;