const mongoose = require("mongoose");

const schema = mongoose.Schema({
    is_active: {type:Boolean, default: True},
    created_by: {type: mongoose.SchemaTypes.ObjectId, required: true}

},{
    versionKey: false,
    timestamps:{
        createdAt: "created_at",
        updatedAt: "updated_at" 
        //veya timestamps: true
    }
});

class Categories extends mongoose.Model { //bir classtan başka classlar oluşturmak için extends Users classı mongoose.Model clasının içindekileri kullanabiliyor.

}

schema.loadClass(Categories);
module.exports = mongoose.Model("categories",schema);