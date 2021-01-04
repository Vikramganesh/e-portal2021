const mongoose = require('mongoose');


const RoleSchema = new mongoose.Schema({
    role_name: String,
    descrption: String,
    create_by: String,
    create_date: { type: Date, default: Date.now },
    modify_by: String,
    modify_date:  { type: Date }
})

module.exports = RoleSchema;