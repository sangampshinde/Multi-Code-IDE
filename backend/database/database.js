const mongoose = require('mongoose');

const connectDatabase = async() => {
    try {
        // Connect to MongoDB database
        await mongoose.connect('mongodb://127.0.0.1:27017/idedb');
        // Check if connection is successful
        console.log("MongoDB connected successfully");
        
    } catch (error) {
        
        // Log error if connection fails
        console.log(error);
    }
}

module.exports = connectDatabase;

