const express = require("express");
const { check, validationResult} = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const session = require('express-session');
const bodyParser = require('body-parser');
const router = express.Router();
var path = require('path');



router.use(express.static('public'));
router.use(bodyParser.json());
const User = require("../models/userModel");


// Enpoint for the login page
router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/views', 'index.html'));    
});

// Enpoint for the login page
router.get('/register', (req, res) => {  
  res.sendFile(path.join(__dirname, '../public/views', 'register.html'));   
});

// Enpoint for the login page
router.get('/salesteam', (req, res) => {  
  res.sendFile(path.join(__dirname, '../public/views', 'salesteam.html'));   
});


function checkSignIn(req, res){
   if(req.session.user){
      next();     //If session exists, proceed to page
   } else {
      res.redirect(path.join(__dirname, '../public/views', 'index.html'));
      var err = new Error("Not logged in!");
      next(err);  //Error, trying to access unauthorized page!
   }
}



router.post('/login', function(req, res){
   if(!req.body.username || !req.body.password){
      res.render('login', {message: "Please enter both username and password"});
   } else {
      User.filter(function(user){
         if(user.username === req.body.username && user.password === req.body.password){
            req.session.user = user;
            res.redirect('/protected_page');
         }
      });
      res.render('login', {message: "Invalid credentials!"});
   }
});



/**
 * @method - POST
 * @param - /signup
 * @description - User SignUp
*/
router.post('/signup',  async (req, res) => {
   
   const { email, password,username } = req.body;
   console.log(username);


   try {

       let userx = await User.findOne({
           username
        });

      if (userx){
         res.status(200).send(
             {status:"error1", 
              msg: "Username already Exists! choose another username"
            });
      }

   
     // const salt = await bcrypt.genSalt(10);
     // user.password = await bcrypt.hash(req.body.password, salt);


   } catch (error) {
        
       console.log('222error');   
       res.status(200).send( {status:"error1", 
                      msg: error
                     }); 
   }   



   // try {

   //    let userone = await Users.filter(function(user){
   //       if(user.id === req.body.username){
         
   //         res.render('user/register', {
   //            message: "Username Already Exists! choose another username"});
   //       }
   //    });


   //      const user = new User();
   //      user.name = req.body.first_name+' '+req.body.last_name;
   //      user.role = req.body.role;
   //      user.username = req.body.username;
   //      user.email = req.body.email;
   //      user.ids = req.body.ids;
   //      user.phones = req.body.phones;
   //      user.address = req.body.address;
   //      user.password  = req.body.password;
   //      user.supervisors = req.body.supervisors;
   //      user.workingdays = req.body.workingdays;
   //      user.dob = req.body.date_of_birth;
   //      await user.save()
   //      res.redirect('user/salesteam');
   
   // } catch (error) {

   //    res.render('user/register', {
   //        message: "unable to save to database"});


   // }
});


//logout
router.get('/logout', function(req, res){
   req.session.destroy(function(){
      console.log("user logged out.")
   });
   res.redirect('/login');
});

















































































// *
//  * @method - POST
//  * @param - /signup
//  * @description - User SignUp

// router.post(
//     "/signup",
//     [
//         check("username", "Please Enter a Valid Username")
//         .not()
//         .isEmpty(),
//         check("password", "Please enter a valid password").isLength({
//             min: 6
//         })
//     ],
//     async (req, res) => {
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return res.status(400).json({
//                 errors: errors.array()
//             });
//         }

//         const {
//             username,
//             email,
//             password
//         } = req.body;
//         try {
//             let user = await User.findOne({
//                username
//             });
//             if (user) {
//                 return res.status(400).json({
//                     msg: "User Already Exists"
//                 });
//             }

//             user = new User({
//                 username,
//                 email,
//                 password
//             });

//             const salt = await bcrypt.genSalt(10);
//             user.password = await bcrypt.hash(password, salt);

//             await user.save();

//             const payload = {
//                 user: {
//                     id: user.id
//                 }
//             };

//             jwt.sign(
//                 payload,
//                 "randomString", {
//                     expiresIn: 10000
//                 },
//                 (err, token) => {
//                     if (err) throw err;
//                     res.status(200).json({
//                         token
//                     });
//                 }
//             );
//         } catch (err) {
//             console.log(err.message);
//             res.status(500).send("Error in Saving");
//         }
//     }
// );





















// router.post(
//   "/login",
//   [
//     check("email", "Please enter a valid email").isEmail(),
//     check("password", "Please enter a valid password").isLength({
//       min: 6
//     })
//   ],
//   async (req, res) => {
//     const errors = validationResult(req);

//     if (!errors.isEmpty()) {
//       return res.status(400).json({
//         errors: errors.array()
//       });
//     }

//     const { email, password } = req.body;
//     try {
//       let user = await User.findOne({
//         email
//       });
//       if (!user)
//         return res.status(400).json({
//           message: "User Not Exist"
//         });

//       const isMatch = await bcrypt.compare(password, user.password);
//       if (!isMatch)
//         return res.status(400).json({
//           message: "Incorrect Password !"
//         });

//       const payload = {
//         user: {
//           id: user.id
//         }
//       };

//       jwt.sign(
//         payload,
//         "secret",
//         {
//           expiresIn: 3600
//         },
//         (err, token) => {
//           if (err) throw err;
//           res.status(200).json({
//             token
//           });
//         }
//       );
//     } catch (e) {
//       console.error(e);
//       res.status(500).json({
//         message: "Server Error"
//       });
//     }
//   }
// );

// router.get("/me", auth, async (req, res) => {
//   try {
//     // request.user is getting fetched from Middleware after token authentication
//     const user = await User.findById(req.user.id);
//     res.json(user);
//   } catch (e) {
//     res.send({ message: "Error in Fetching user" });
//   }
// });


// router.get("/add/supervisor", auth, async (req, res) => {
//   try {
//     // request.user is getting fetched from Middleware after token authentication
//     const user = await User.findById(req.user.id);
//     res.json(user);
//   } catch (e) {
//     res.send({ message: "Error in Fetching user" });
//   }
// });


module.exports = router;





































// const express = require('express')
// const router = express.Router();
// const User = require('../models/userModel');

// router.get('/customerhome',async (req, res) => {
//     if (req.session.user) {
//         try {
//             const userItem = await User.findById(req.session.user._id)
//             res.render('customerhome', { user: userItem })
//         } catch {
//             res.status(500).send("unable to find item in the database");
//         }
//     } else {
//         res.redirect ('/login')
//     }
//  })

// router.get('/adminhome',async (req, res)=>{
//     if (req.session.user) {
//         res.render('adminhome', {name: req.session.user.fullName});
//     } else {
//         res.redirect('/login')
//     }
// });

// router.get('/userlist', async (req, res) => {
//     if (req.session.user) {
//         try {
//             let items = await User.find()
//             if (req.query.gender) {
//                 items = await User.find({gender: req.query.gender})
//             }
//             res.render('list', { users: items })
//         } catch {
//             res.status(400).send("unable to find items in the database");
//         }
//     } else {
//         res.redirect('/login');
//     }
//  });
 
//  module.exports = router;
//  