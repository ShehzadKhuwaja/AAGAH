console.log('We are starting your application!');
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
const profileRoutes = require('./routes/profileRoutes');
const friendRoutes = require('./routes/friendRoutes');
const groupRoutes = require('./routes/groupRoutes');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { requireAuth, requireAdmin } = require('./middleware/authmiddleware');
const { checkUser } = require('./middleware/authmiddleware');
const savedRoutes = require('./routes/trafficRoutes');
const path = require('path');


const app = express();




// middleware
app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());
// Serve the uploaded images statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
const config = require('./utils/config')

require('dotenv').config();

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then((result) => {
    app.listen(config.PORT, '0.0.0.0', () => {
      console.log('Server is listening on port 3000');
    });
  })
  .catch((err) => console.log(err));

// routes
app.get('*', checkUser);

// API routes
app.use('/users', userRoutes);
app.use(postRoutes);
app.use(authRoutes);
app.use(profileRoutes);
app.use(friendRoutes);
app.use(groupRoutes);

// Remove or comment out view routes if not needed
// app.get('/social', (req, res) => {
//   res.render('social'); // Ensure this is only for rendering the view
// });
// app.get('/login', (req, res) => {
//   res.render('login'); // Render login view
// });
