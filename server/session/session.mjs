import express from "express";
import db from "../db/conn.mjs";

import bcrypt from 'bcrypt';

const router = express();

async function comparePassword(plainTextPassword, hashedPassword) {
    return await bcrypt.compare(plainTextPassword, hashedPassword);
  }




  router.post("/login", async (req,res)=>{
    const {Identifier, Password} = req.body;

    try{
        let user = await db.collection('records').findOne({
            $or: [{ Email: Identifier }, { Username: Identifier }]
          });
          
        if(!user){
            res.status(401).json({ message: 'Login failed' });
            return;
        }else{

        const passwordMatch = await comparePassword(Password,user.Password);
          
        if(passwordMatch){
            req.session.user = { id: user._id, email: user.Email};
            res.cookie('sessionId', req.session.id, {
              httpOnly: true,
              secure: false, // Ensure this is set to false during development
              maxAge: 2.16e+7,
          });
            const responseData = {
              id: user._id,
              username: user.Username,
            };
            console.log(req.session)
            console.log(req.session.user.email)
            res.status(200).send(responseData)
        }else{
            res.status(401).json({message: 'Login failed'});
        }
    }}catch(err){
        res.status(500).send(`An error occured: ${err}`)
    }
})



router.post("/signup", async(req,res)=>{

    try {
        let newDocument = {
          Username: req.body.name,
          Email: req.body.email,
          Password: req.body.password,
          
        };
        let collection = await db.collection("records");
        const user = await collection.findOne({
          $or: [
            { Username: newDocument.Username},
            { Email: newDocument.Email},
    
          ],
        });
    
       if(user){
          if(user.Username == newDocument.Username){
            res.status(409).json('Username already Exist')
            
          }else if(user.Email === newDocument.Email){
            res.status(409).json('Email already Exist')
          }else if(user.Email === newDocument.Email && user.Username == newDocument.Username){
            res.status(409).json('Error, Both Username and Password already Exist')
          }
       }else{
        
        let result = await collection.insertOne(newDocument);
        req.session.user = { id: result.insertedId , email: newDocument.Email};
        res.cookie('sessionId', req.session.id, {
          httpOnly: true,
          secure: false, // Ensure this is set to false during development
          maxAge: 2.16e+7,
      });

      const responseData = {
        id: result.insertedId,
        username: newDocument.Username,
      };
        console.log(newDocument)
        console.log(req.session.user.email)
        
        res.status(200).send(responseData)


       }
         
        
    
        
     
      } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
      }
});


router.post("/logout", async(req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            console.error(`Error destroying session:`, err);
            res.status(500).json( {message: 'Server error'});

        }else{
            res.clearCookie('sessionId');
            res.status(200).json( {message: 'Logged out'});
        }
    });
});








export default router;
