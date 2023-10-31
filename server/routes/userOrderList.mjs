import express from 'express';
import db from '../db/conn.mjs';
import session from 'express-session';

const router  = express.Router()

router.get("/", async (req,res) =>{


    try{
        let collection = await db.collection('userOrderList');
        let result = await collection.findOne({ user_id : req.session.user.email});


        res.status(200).json(result);
    }catch(error){
        console.error(`Error occured: ${error}`)
        res.status(500).json({error: 'Internal server error'})
    }


});



router.post("/", async (req,res) =>{
try{
    if (!req.session.user || !req.session.user.email) {
        res.status(401).json({ message: 'Unauthorized' });
       
        return; // Return early to prevent further execution
    }
       
    const userEmail = req.session.user.email;
        

    const {Order,Total,ItemsAmount} = req.body;

        let collection = await db.collection('userOrderList');
    
        let newDocument = {
        Order: Order,
        Total: Total,
        ItemsAmount: ItemsAmount,
        user_id: userEmail

        }

       let result = await collection.insertOne(newDocument)
       res.status(200).json({ message: 'Data received and processed successfully.' });

}catch(error){
    console.error(`Error occured: ${error}`)
    res.status(500).json({error: 'Internal server error'})
}
})

export default router