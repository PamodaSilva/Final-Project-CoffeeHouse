const express = request('express');
const Register = require('../models/SignUp')

const router = express.Router();

router.post("/Register", (req, res) => {
    let newRegister = new Register(req.body);
    
    newRegister.save((err) => {
        if(err) {
            return res.status (400).json({
                error:err
            })
        }
        return res.status(200).json({
            success: "Register Ok"
        });
    });
});