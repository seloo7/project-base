module.exports = {
    "PORT": process.env.PORT || "3000",
    "LOG_LEVEL": process.env.LOG_LEVEL || "debug", //env'ta log leveli oku eğer yoksa debug ismini ata.
    "CONNECTION_STRING": process.env.CONNECTION_STRING || "mongodb://localhost:27017/project_base" //env'ta connection_String oku yoksa default olarak localhosttaki mongodb'ye bağlan ve bu veritabanına bağlan.
}