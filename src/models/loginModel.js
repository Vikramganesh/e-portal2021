const mongoose = require('mongoose');

const LoginSchema = mongoose.Schema({
    user_id: String,
    role_id: String,
    user_name: String,
    user_email: String,
    user_dob: {type: Date},
    user_status: String,
    create_by: String,
    create_date: { type: Date, default: Date.now },
    modify_by: String,
    modify_date:  { type: Date }
})

module.exports = LoginSchema;