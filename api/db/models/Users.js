const mongoose = require("mongoose");

const schema = mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    is_active: {type: Boolean, default: true},
    first_name: String,
    last_name: String,
    phone_number: String
},{
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