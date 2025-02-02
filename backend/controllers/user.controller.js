const bcrypt = require('bcryptjs');
const userSchema = require('../models/user.model.js');

exports.signup = async(req,res)=>{
    try {
        // extract data from request body
        let {email, password, fullName} = req.body;
        
        // check if email already exists
        let emailExists = await userSchema.findOne({ email: email });
        if(emailExists){
            return res.status(400).json({sucess:false, message:'Email already exists'});
        }

        // bycrypt password
        bcrypt.genSalt(12, function(err, salt) {
            bcrypt.hash(password, salt, async (err, hash) => {
                // Store hash in your password DB.
                let user = await userSchema.create({
                    email: email,
                    password: hash,
                    fullName: fullName
                });
                res.json({sucess:true, message:'User registered successfully'});
            });
        });
        
    } catch (error) {
        // handle error
        console.log(error);
        res.status(500).json({sucess:false, message:'error.message'});
        
    }

}
