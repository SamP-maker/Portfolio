import { google } from 'googleapis';
import express from 'express';
import '../loadEnvironment.mjs';

const router = express.Router();

router.get("/auth/google", async (req, res) => {
  console.log('Received request for /auth/google'); // Log to see if the route is accessed

  const scopes = ['https://www.googleapis.com/auth/userinfo.email'];

  const oAuth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
  );

  const authorizationUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scopes,
  });

  console.log('Redirecting to authorizationUrl:', authorizationUrl); // Log the generated URL
  res.redirect(authorizationUrl);
});

// Creating a new Google authentication
router.get('/oauth2callback', async (req, res) => {
  console.log('Received request for /oauth2callback'); // Log to see if the route is accessed

  const { code } = req.query;

  if (!code) {
    res.status(400).send('Authorization Token not found');
    return;
  }

  try {
    const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
    const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
    const REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI;

    const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

    const { tokens } = await oAuth2Client.getToken(code);
    const accessToken = tokens.access_token;

    // You can now use the `accessToken` to make requests on behalf of the user.

    res.send(`Access Token: ${accessToken}`);
  } catch (err) {
    console.error('Error while getting access token: ', err.message);
    res.status(500).send('Error while getting access token. ');
  }
});

export default router;