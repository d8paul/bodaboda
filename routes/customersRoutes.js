const express = require("express");
const { check, validationResult} = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const session = require('express-session');
const bodyParser = require('body-parser')
const router = express.Router();
var path = require('path');


router.use(express.static('public'));
router.use(bodyParser.json());
const User = require("../models/customersModel");


// Enpoint for the login page
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/views', 'customers.html'));    
});

// Enpoint for the login page
router.get('/register', (req, res) => {  
  res.sendFile(path.join(__dirname, '../public/views', 'customersregister.html'));   
});

/**
 * @method - POST
 * @param - /signup
 * @description - User SignUp
*/
router.post(
    "/signup",
    [
        check("username", "Please Enter a Valid Username")
        .not()
        .isEmpty(),
        check("password", "Please enter a valid password").isLength({
            min: 6,
            max: 12
        })
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const { 
              name,
              role,
              username,
              email,
              ids,
              phones,
              address,
              password,
              supervisors,
              workingdays,
              dob
        } = req.body;
        try {
            let user = await User.findOne({
                username
            });
            if (user) {
                return res.status(400).json({
                    msg: "User Already Exists"
                });
            }

            user = new User({
                username,
                email,
                password
            });

            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);

            await user.save();

            const payload = {
                user: {
                    id: user.id
                }
            };

            jwt.sign(
                payload,
                "randomString", {
                    expiresIn: 10000
                },
                (err, token) => {
                    if (err) throw err;
                    res.status(200).json({
                        token
                    });
                }
            );

        } catch (err) {
            console.log(err.message);
            res.status(500).send("Error in Saving");
        }
    }
);

module.exports = router;
