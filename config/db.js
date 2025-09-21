const mongoose = require("mongoose");

const connectDB = async ()=>{

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB successfully connected"); 
    } catch (error) {
        console.log("MongoDB connection failed");
        process.exit(1);
    }

}

module.exports = connectDB;