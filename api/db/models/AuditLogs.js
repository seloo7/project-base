const mongoose = require("mongoose");

const schema = mongoose.Schema({
    level: String,
    email: String,
    location: String,
    proc_type: String,
    log: String
},{
    versionKey: false,
    timestamps:{
        createdAt: "created_at",
        updatedAt: "updated_at" 
        //veya timestamps: true
    }
});

class AuditLogs extends mongoose.Model { //bir classtan başka classlar oluşturmak için extends Users classı mongoose.Model clasının içindekileri kullanabiliyor.

}

schema.loadClass(AuditLogs);
module.exports = mongoose.Model("audit_logs",schema);