import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import route from "./routes/userRoute.mjs";
import googleAuthRoute from './routes/googleAuthRoute.mjs';
import userAddress from './routes/userAddress.mjs';
import userCreditCredentials from './routes/userCreditCredentials.mjs';
import userBillingAddress from './routes/userBillingAddres.mjs';
import userOrderList from './routes/userOrderList.mjs';
import recordSummary from './routes/recordSummary.mjs'; 
import User_session from './session/session.mjs';
import session from 'express-session';

const PORT = process.env.PORT || 5000;

const app = express();


app.use(session({
    secret: 'my-secret-key',
    resave:false,
    saveUninitialized:true,
    cookie: {
        secure: false,
    maxAge: 2.16e+7,}

}));


app.use(cors({  
    origin: 'http://localhost:3000', // Replace with the actual origin of your frontend
    credentials: true,  }));
app.use(express.json());

app.use(User_session);
app.use(userAddress);
app.use("/userRoute", route);
app.use(googleAuthRoute);
app.use(recordSummary);
app.use(userOrderList);
app.use(userCreditCredentials);
app.use(userBillingAddress);


app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`)
})