// Import environment variables
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
require('./config/passport'); // Strategy setup

const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

// 🔧 Change: allow frontend origin and credentials
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));

// Parse JSON bodies
app.use(express.json());

// 🔧 Change: session required for Passport OAuth
app.use(session({
  secret: process.env.JWT_SECRET,
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

// 🔧 Change: use your own DB URI
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('DB error', err));

// Register routes
app.use('/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// 🔧 Change: You can configure port via env
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
