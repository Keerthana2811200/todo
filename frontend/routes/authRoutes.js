const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

// 🔧 Change: scopes for user info
router.get('/google', passport.authenticate('google', { scope: ['profile','email'] }));

// 🔧 Change: redirect back to frontend with JWT token
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
  const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
  res.redirect(`${process.env.FRONTEND_URL}/?token=${token}`);
});

module.exports = router;
