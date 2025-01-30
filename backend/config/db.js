const mongoose = require('mongoose');

// Connect to MongoDB
const connectDB = async(req,res)=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/codeIDE",{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB Connected...");

        

    } catch (error) {
        console.log(error);
    }
}