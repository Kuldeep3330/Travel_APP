import CryptoJS from 'crypto-js';
import jwt from 'jsonwebtoken';
import User from "../model/user.model.js";

const signupHandler = async(req, res)=>{
    
    try {
        const{username, number, email, password} =req.body;

        //check for existing user
        const existingUser= await User.findOne({email});
        if(existingUser)
        {
            return res.status(409).json({message:"Email already exists and please login!"})
        }
        // Encrypt password
        if (!process.env.PASSWORD_SECRET_KEY) {
            throw new Error("PASSWORD_SECRET_KEY is not defined in the environment variables");
        }
        const encryptedPassword = CryptoJS.AES.encrypt(password, process.env.PASSWORD_SECRET_KEY).toString();

        const userObject ={
            username,
            number,
            email,
            password: encryptedPassword
        }

        //saving the user in Database
        const newUser = new User(userObject);
        const savedUser= await newUser.save();
        res.status(201).json(savedUser)

    } catch (err) {
        console.log("signup error", err.message);

        res.status(500).json({message:"registration failed"})
    }
}

const loginHandler = async (req, res)=>{
    try {
        const{number, password}= req.body;

        if (!number || !password) {
            return res.status(400).json({ message: "Mobile number and password are required" });
        }
        
        if (!process.env.PASSWORD_SECRET_KEY || !process.env.ACCESS_TOKEN ) {
            throw new Error("Required environment variables are not defined");
        }

        const user = await User.findOne({number});
        !user && res.status(401).json({message:"Incorrect Mobile Number"});

        const decodePass = CryptoJS.AES.decrypt(user.password, process.env.PASSWORD_SECRET_KEY ).toString(CryptoJS.enc.Utf8);
        (decodePass !== password) && res.status(401).json({message:"Incorrect Password"});
 
        
        //JWT access token
        const accessToken = jwt.sign({username: user.username}, process.env.ACCESS_TOKEN)
        // Exclude sensitive fields like password from the response
        const {password:userPassword, ...rest}= user._doc;
        // Respond with user details and token
        res.json({...rest, accessToken});

        
    } catch (err) {

        console.log("login failed",err.message);
        res.status(500).json({message:"registration failed"})
    }

}

export{ signupHandler, loginHandler} ;