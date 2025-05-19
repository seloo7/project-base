const mongoose = require("mongoose");
let instance = null;

class Database {

    constructor(){
        if (!instance){
            this.mongoConnection = null;
            instance = this; //classın instancesini ata
        }
            return instance;
    }
    async connect(options){ // bu fonks.mongodb connectionunu sağlayacak.
        try{
        console.log("DB Connecting...")
        let db = await mongoose.connect(options.CONNECTION_STRING);

        this.mongoConnection = db;
        console.log("DB Connected!")
        } catch(err){
            console.error(err);
            process.exit(1);
        }
        
    }
}

module.exports = Database;