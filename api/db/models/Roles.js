const mongoose = require("mongoose");
const RolePrivileges = require("./RolePrivileges");

const schema = mongoose.Schema(
  {
    role_name: { type: String, required: true , unique: true},
    is_active: { type: Boolean, default: true },
    created_by: {
      type: mongoose.SchemaTypes.ObjectId,
      // required: true //created_By alanı dolu olmadan bu alana ulaşılamaz.
    },
  },
  {
    versionKey: false, //mongooseda kayıt yaptığımızda bu alan oluşmasın diye.
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
      //veya timestamps: true
    },
  }
);

class Roles extends mongoose.Model {
   static async deleteOne(query) {
  let roleId = query.id || query._id;
  if (roleId) {
    await RolePrivileges.deleteMany({ role_id: roleId });
  }
  await super.deleteOne(query);
}


}

schema.loadClass(Roles);
module.exports = mongoose.model("roles", schema);
