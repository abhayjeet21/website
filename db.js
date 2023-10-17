const mongoose = require('mongoose');
// const mongoURI = "mongodb://127.0.0.1:27017/massgyan";

const connectToMongo = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected");
    } catch (error) {
        console.log("ERror occured in mongodb Connection  : ", Error);
    }
}

module.exports = connectToMongo;
