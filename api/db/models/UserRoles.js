const mongoose = require("mongoose");

const schema = mongoose.Schema({
    role_id: {type: mongoose.SchemaTypes.ObjectId, required: true},
    user_id: {type: mongoose.SchemaTypes.ObjectId, required: true}
},{
    versionKey: false,
    timestamps:{
        createdAt: "created_at",
        updatedAt: "updated_at" 
        //veya timestamps: true
    }
});

class Users extends mongoose.Model { //bir classtan başka classlar oluşturmak için extends Users classı mongoose.Model clasının içindekileri kullanabiliyor.

}

schema.loadClass(Users);
module.exports = mongoose.Model("users",schema);