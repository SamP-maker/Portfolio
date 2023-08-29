import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs"
import routes from "./routes/userRoute.mjs"
import googleAuthRoute from './routes/googleAuthRoute.mjs'


const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/auth/google", googleAuthRoute)
app.use("/api", routes);


app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`)
})