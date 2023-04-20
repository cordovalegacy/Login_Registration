const UserModel = require('../models/user.model')
//connect this secret vairable to our .env file
const secret = process.env.SECRET_KEY
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

module.exports = {

    registerUser: async (req, res) => { //use async await when you have a lot of logic
        try { //check if user exists first
            const potentialUser = await UserModel.findOne({ email: req.body.email })
            if (potentialUser) {
                res.status(400).json({ message: "Email Address is taken" })
            }
            else {
                //actually create user if they pass check
                const newUser = await UserModel.create(req.body)

                //generates a jsonwebtoken string
                const userToken = jwt.sign(
                    { _id: newUser._id, email: newUser.email }, //cookie payload for browser
                    secret, //this will be used as a key to verify cookie creation (jwt sign)
                    { expiresIn: '2h' } //browser will clear the cookie after two hours
                )

                res
                    .status(201)
                    .cookie(
                        'userToken',
                        userToken,
                        { httpOnly: true, maxAge: 2 * 60 * 60 * 1000 }) //sets to 72million seconds for cookie age
                    .json(newUser) //succesful creation of user and cookie
            }
        }
        catch (err) { //bad request
            res.status(400).json(err)
        }
    }

}