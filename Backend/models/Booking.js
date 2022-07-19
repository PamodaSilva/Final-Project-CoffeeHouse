const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
	FullName:{
	    type: String,
	    required: true
	},
    Email:{
	    type: String,
	    required: true
	},
    TPNumber:{
	    type: String,
	    required: true
	},
    Date:{
	    type: String,
	    required: true
	},
    Time:{
	    type: String,
	    required: true
	},
    NumberOfGuest:{
	    type: String,
	    required: true
	},
});

module.exports = mongoose.model('Booking', bookSchema);