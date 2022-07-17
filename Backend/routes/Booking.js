const express = request('express');
const Booking = require('../models/Booking')

const router = express.Router();


router.post("/booking", (req, res) => {
    let newBooking = new Booking(req.body);
    
    newBooking.save((err) => {
        if(err) {
            return res.status (400).json({
                error:err
            })
        }
        return res.status(200).json({
            success: "Booking Ok"
        });
    });
});