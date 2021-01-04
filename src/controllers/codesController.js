const { async } = require('crypto-random-string')
const mongoose = require('mongoose')
const CodeSchema = require('../models/codeModel')

const Code = mongoose.model('codes', CodeSchema) // import role schema from codesModel.js file


const addNewCode = (req,res) => {
    console.log(req.body);
    let newcode = new Code(req.body);
    newcode.save((err, result) => {
        if(err){
            res.send(err);
        }
        res.send(result);
    });
}


async function getCodes(req,res) {
    result = await Code.find().select({_id:1,status_desc:1})
    res.send(result)
}

async function getCodesById(req,res) {
    id = req.params.id
    result = await Code.findById(id).select({_id:1, status_desc:1})
    res.send(result)
}

async function updateCodesById(req,res) {
    data = req.body;
    result = await Code.updateOne({_id:data._id},{$set:{status_desc:data.status_desc,modify_by:"admin", modify_date:Date.now()}});
    res.send(result);
}


module.exports = { addNewCode, getCodes, getCodesById, updateCodesById }