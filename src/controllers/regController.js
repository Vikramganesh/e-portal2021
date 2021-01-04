const VerificationSchema = require('../models/verificationModel')
const RegisterSchema = require('../models/registrationModel')
const mongoose = require('mongoose')
const OtpGen = require('../auth/otpgen')

const Register = new mongoose.model('register', RegisterSchema);

const Verification = new mongoose.model('verification', VerificationSchema);


const RegUsers = (req,res,next) => {
    // console.log(req.body);
    otp = OtpGen();
    let newuser = new Register(req.body);
    newuser.save((err,result)=>{
        if(err){
            res.send(err);
            console.log("Error",err)
        }
        //res.send(result);
        console.log("Data inserted into users table")
    });
    next()
    Verification.collection.insertOne({
        user_email: req.body.user_email,
        auth_otp: otp,
        create_by:'admin'
    }).then(() => { 
        // send email here to verification user.
        console.log("Data inserted into verification table")  // Success 
    }).catch((error) => { 
        console.log(error)      // Failure 
    });
}

module.exports = RegUsers;