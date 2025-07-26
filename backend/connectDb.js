const mongoose = require("mongoose");
require("dotenv").config();

const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION_STRING)
        //await - code will wait and as a complete line, it is executed
        const connect = await mongoose.connect(process.env.DB_CONNECTION_STRING);
        console.log(`Database connected ${connect.connection.name}`);
        
    } catch (error) {
        console.error(error);
    }
}

module.exports = connectToDb;