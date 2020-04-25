//Dependencies
const mongoose = require("mongoose");

//Global Constant
const Schema = mongoose.Schema;

// Create Schema 
const aircraftSchema = new Schema({
    make: { type: String },
    model: { type: String },
    year: { type: Number },
    tail_number: { type: String },
    note: { type: String },
    created: { type: Date, default: Date.Now },
    modified: { type: Date, default: Date.Now }
})

const Aircraft = mongoose.model("Aircraft", aircraftSchema);
module.exports = Aircraft;