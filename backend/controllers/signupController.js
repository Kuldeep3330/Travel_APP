const CryptoJS = require('crypto-js')

const User= require("../model/user.model")

const signupHandler = async(req, res)=>{
    try {
        const userObject ={
            username: req.body.username,
            number: req.body.number,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password, "kuldeepkumar").toString()
        } 
        const newUser = new User(userObject);

        const savedUser= await newUser.save();
        res.status(201).json(savedUser)

    } catch (err) {

        res.status(500).json({message:"registration failed"})
    }
}

module.exports = signupHandler;