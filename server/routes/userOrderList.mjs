import express from 'express';
import db from '../db/conn.mjs';
import session from 'express-session';
import { ObjectId } from 'mongodb';
import { doesNotMatch } from 'assert';

const router  = express.Router()

router.get("/order", async (req,res) =>{


    try{
        let collection = await db.collection('userOrderList');
        let result = await collection.find({ user_id: req.session.user.email})
        .sort({ timestampField: -1 })
        .limit(1)
        .toArray()
    
        res.status(200).json(result);
    }catch(error){
        console.error(`Error occured: ${error}`)
        res.status(500).json({error: 'Internal server error'})
    }


});



router.get("/orderHistory", async (req,res) =>{


    try{
        let collection = await db.collection('userOrderList');
        let result = await collection.find({ user_id: req.session.user.email})
        .sort({timestampField: -1})
        .toArray()
        

        res.status(200).json(result);
    }catch(error){
        console.error(`Error occured: ${error}`)
        res.status(500).json({error: 'Internal server error'})
    }


});



router.post("/postOrder", async (req,res) =>{


 
   
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
            user_id: userEmail,
            timestampField: new Date()
            }
    
    
           //ORDER LIST POSTING
           let result = await collection.insertOne(newDocument)

           if(result.insertedCount === 1){
            res.status(200).json({ message: 'Document inserted successfully.' });
           }else{

            res.status(500).json({ message: 'Insertion failed'});
           }
          
    


}catch(error){
    console.error(`Error occured: ${error}`)
    res.status(500).json({error: error.message})
}














})





router.put("/updateOrder", async (req,res) =>{


 
   
    try{
        if (!req.session.user || !req.session.user.email) {
            res.status(401).json({ message: 'Unauthorized' });
           
            return; // Return early to prevent further execution
        }
           
        const userEmail = req.session.user.email;
            
    
        const {Order,Total,ItemsAmount} = req.body;
        
        let collection = await db.collection('userOrderList');
        const mostRecentOrder = await collection
        .find({ user_id: userEmail })
        .sort({ timestampField: -1 })
        .limit(1)
        .next();
    
        if( mostRecentOrder ){
            const updateFilter = {
                _id: mostRecentOrder._id,
                user_id: userEmail,
            }
        
            const update = {
                $set: {
                    Order: Order,
                    Total: Total,
                    ItemsAmount: ItemsAmount,
                    timestampField: new Date()
                },
            };
    
            let result = await collection.updateOne(updateFilter, update);
    
            if(result.matchedCount === 0){
                res.status(404).json({ message: 'Document not found'});
            }else{
                res.status(200).json({message: 'Document updated successfully'})
            }
        }
    
    }catch(error){
        console.error(`Error occured: ${error}`)
        res.status(500).json({error: error.message})
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    })

export default router