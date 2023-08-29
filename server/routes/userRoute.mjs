import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

// This section will help you get a list of all the records.
router.get("/", async (req, res) => {
  let collection = await db.collection("Users");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

// This section will help you create a new record.
router.post("/", async (req, res) => {
  let newDocument = {
    Username: req.body.name,
    Email: req.body.email,
    Password: req.body.password,
  };
  let collection = await db.collection("Users");
  let result = await collection.insertOne(newDocument);
  res.send(result).status(204);
});


export default router;