const mongoose = require('mongoose');


const CodeSchema = new mongoose.Schema({
    status_desc: String,
    create_by: String,
    create_date: { type: Date, default: Date.now },
    modify_by: String,
    modify_date:  { type: Date }
})

module.exports = CodeSchema;