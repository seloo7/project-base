const mongoose = require("mongoose");

const schema = mongoose.Schema({
    role_id: {type: mongoose.SchemaTypes.ObjectId, required: true},
    permission: {type: String, required: true},
    created_by: {type: mongoose.SchemaTypes.ObjectId},
},{
    versionKey: false,
    timestamps:{
        createdAt: "created_at",
        updatedAt: "updated_at" 
        //veya timestamps: true
    }
});

class RolePrivileges extends mongoose.Model { //bir classtan başka classlar oluşturmak için extends Users classı mongoose.Model clasının içindekileri kullanabiliyor.

}

schema.loadClass(RolePrivileges);
module.exports = mongoose.model("role_privileges",schema);