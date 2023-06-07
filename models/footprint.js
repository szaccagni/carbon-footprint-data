const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const footprintSchema = new Schema({
    zipCode : String,
    personsPerHousehold : Number,
    incomePerHousehold : Number,
    state : String,
    stateFullName : String,
    city: String, 
    transport: Number,
    housing: Number,
    food: Number,
    goods: Number,
    services: Number,
    householdFootPrint : Number,
})

module.exports = mongoose.models.Footprint || mongoose.model('Footprint', footprintSchema);
