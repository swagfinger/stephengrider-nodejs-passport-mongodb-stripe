const passport = require('passport');

module.exports = (app) => {
  //STEP 1 - DIRECT USER TO GOOGLE FOR AUTHENTICATION
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  //STEP 2 - GOOGLE GRANTS PERMISSION, THEN USER REDIRECTED BACK TO /auth/google/callback url with "code" in message.
  //STEP 3 - PASSPORT STRATEGY SAW CODE IN URL, returns in-exchange user profile/email/accesstoken...
  app.get('/auth/google/callback', passport.authenticate('google'));
};
