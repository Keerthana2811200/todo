const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/auth/google/callback'
}, async (accessToken, refreshToken, profile, done) => {
  // 🔧 Change: store or update Google user
  const user = await User.findOneAndUpdate(
    { googleId: profile.id },
    {
      googleId: profile.id,
      name: profile.displayName,
      email: profile.emails[0].value
    },
    { upsert: true, new: true }
  );
  done(null, user);
}));

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => done(null, user));
});
