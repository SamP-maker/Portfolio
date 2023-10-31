import express from "express";
import db from '../db/conn.mjs';


const router = express.Router();


router.get("/", async (req,res)=>{
    let collection = await db.collection("userBillingCard");
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
});


router.post("/", async (req,res) =>{
    try{
        const { CardNumber, FullName, CCV, Month, Year} = req.body

        if (!req.session.user || !req.session.user.email) {
            res.status(401).json({ message: 'Unauthorized' });
        }

        const userEmail = req.session.user.email;
           
        let newDocument ={
            CardNumber: CardNumber,
            FullName: FullName,
            CCV:CCV,
            Month: Month,
            Year: Year,
            user_id: userEmail,
        }
        let collection = await db.collection("userBillingCard");
        let result = await collection.insertOne(newDocument)
        res.status(204).json({message: 'Billing Recorded'});
    }catch(err){
        console.error(`Error occured: ${err}`)
        res.status(500).json({error: 'Internal server error'})
    }
})


export default router