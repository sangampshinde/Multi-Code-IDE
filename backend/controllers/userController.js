const userModel = require('../models/userModel.js');


exports.signup = (req,res)=>{
    try {
        // getting data from request.body
        let {email,password,fullName} = req.body;

        // check email is already in database or user already exists
        // 







    } catch (error) {
        return res.status(500).json({
            sucess: false,
            msg: error.message
        })
        
    }
};