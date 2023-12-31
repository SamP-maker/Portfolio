import express from "express";
import db from "../db/conn.mjs";


const router = express.Router();

// This section will help you get a list of all the records.
router.get('/', async (req, res) => {
 
  try {
    let collection = await db.collection("records");
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

export default router;