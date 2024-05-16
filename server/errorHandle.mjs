import { google } from 'googleapis';
import './loadEnvironment.mjs';
import db from "./db/conn.mjs";



const googleOauthError = async (res,req,code) =>{


    
  try {
    const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
    const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
    const REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI;

    const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

    const { tokens } = await oAuth2Client.getToken(code);
    const accessToken = tokens.access_token;

    // You can now use the `accessToken` to make requests on behalf of the user.

    oAuth2Client.setCredentials({ access_token: accessToken });

    const {data} = await google.oauth2('v2').userinfo.get({ auth: oAuth2Client });
    const { email, name, id } = data;


    let newDocument = {
      Username: name,
      Email: email,
      Password: '',
      
    };

    const collection = await db.collection('records').findOne({
      $or:[
        {Username: name},
        {Email: email}
      ]
    })

    if(!collection){
      let result = await db.collection('records').insertOne(newDocument);
    }else{
      

    req.session.user = {id: id, email: email}

    res.cookie('sessionId', req.session.id, {
      httpOnly: true,
      secure: false, // Ensure this is set to false during development
      maxAge: 2.16e+7,
  });

  const responseData = {
    success:true,
    message: 'Authentication successful',
    username: name,
    email: email,
    id: id,

  }

  res.send(`
  <script>
    window.opener.postMessage(${JSON.stringify(responseData)}, '*');
    window.close();
  </script>
`);
    }
    
  }catch (err) {
    console.error('Error while getting access token: ', err.message);
    res.status(500).send('Error while getting access token. ');
  }
}


export {googleOauthError};

