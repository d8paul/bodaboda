const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const server = express();


let db = 'mongodb+srv://herlgroup:B0raB0ra@cluster0-aatb8.mongodb.net/test?retryWrites=true&w=majority';
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
connectDB();
const userRoutes = require('./routes/userRoutes');
const customerRoutes = require('./routes/customersRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const bodaRoutes = require('./routes/bodaRoutes');

server.use(bodyParser.json());
server.use(express.static('public'));
var path = require('path');

server.use(bodyParser.urlencoded({ extended: true }))



server.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/views', 'index.html'));  
});


/**
 * Router Middleware
 * Router - /user/*
 * Method - *
 */
server.use("/user", userRoutes);


/**
 * Router Middleware
 * Router - /customers/*
 * Method - *
 */
server.use("/customers", customerRoutes);

// Listener
server.listen(3000, function() {
    console.log('listening on Port: 3000')
});







// server.set('view engine', 'pug');
// server.use(express.static ('public'));
// server.use(bodyParser.json());
// server.use(bodyParser.urlencoded({ extended: true }));
// server.use(passport.initialize());
// server.use(passport.session());
// passport.use(User.createStrategy())
// passport.serializeUser(User.serializeUser())
// passport.deserializeUser(User.deserializeUser)

// Use sessions for tracking logins
// server.use(session({
//     secret: 'thesecret',
//     resave: true,
//     saveUninitialized: false
//  }));

// server.use("/register", registerRoutes);
// server.use("/login", loginRoutes);
// server.use("/", loginRoutes);
// server.use("/user", userRoutes);

// Logout code :- here so that its on '/' instead but can be anywhere
// server.post('/logout', (req, res) => {
//     if (req.session) {
//         req.session.destroy(function (err) {
//             if (err) {
//             } else {
//                return res.redirect('/login');
//             }
//         })
//     }  
// })

// Error Handler
// server.get ('*', (req, res) => {
//     res.send('error');
// })

