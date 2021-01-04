const mongoose = require('mongoose');
const RoleSchema = require('../models/rolesModel')


const Role = mongoose.model('roles', RoleSchema) // import role schema from rolesModel.js file

const addNewRole = (req,res) => {
    console.log(req.body);
    let newrole = new Role(req.body);
    newrole.save((err, result) => {
        if(err){
            res.send(err);
        }
        res.send(result);
    });
}

async function getRoles(req,res) {
    result = await Role.find().select({_id:1,role_name:1})
    res.send(result)
}

async function getRolesById(req,res) {
    id = req.params.id
    result = await Role.findById(id).select({_id:1, role_name:1, descrption:1})
    res.send(result)
}

async function updateRolesById(req,res) {
    data = req.body;
    result = await Role.updateOne({_id:data._id},{$set:{role_name:data.role_name,modify_date:Date.now()}});
    res.send(result);
}


module.exports = { addNewRole, getRoles, getRolesById, updateRolesById }