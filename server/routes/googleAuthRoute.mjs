import { google } from 'googleapis';
import express from 'express';
import '../loadEnvironment.mjs';
import { googleOauthError } from '../errorHandle.mjs';
const router = express.Router();

/*AUTHENTICATION PROCESS*/
//Collecting the email and profile
router.get("/auth/google", async (req, res) => {

  const scopes = ['https://www.googleapis.com/auth/userinfo.email',
                  'https://www.googleapis.com/auth/userinfo.profile'
                ];

  const oAuth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
  );

  const authorizationUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scopes,
  });


  res.redirect(authorizationUrl);
});


// Receiving the callback
router.get('/oauth2callback', async (req, res) => {

  const { code } = req.query;
  if (!code) {
    res.status(400).send('Authorization Token not found');
    return;
  }

  googleOauthError(res,req,code);
});


export default router;