const mongoose = require('mongoose');


const VerificationSchema = new mongoose.Schema({
    user_email: String,
    auth_otp: Number,
    auth_status: Number,
    auth_count: Number,
    create_by: String,
    create_date: { type: Date, default: Date.now },
    modify_by: String,
    modify_date:  { type: Date }
})

module.exports = VerificationSchema;