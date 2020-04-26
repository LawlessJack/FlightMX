// Dependencies
const mongoose = require("mongoose");

// Global Constant
const Schema = mongoose.Schema;

// Create Schema
const logWriterSchema = new Schema({ userId: String });
const aircraftSchema = new Schema({
    make: { type: String },
    model: { type: String },
    year: { type: Number },
    tail_number: { type: String },
    note: { type: String },
    users: [logWriterSchema],
    created: { type: Date, default: Date.Now },
    modified: { type: Date, default: Date.Now }
})

const Aircraft = mongoose.model("Aircraft", aircraftSchema);
module.exports = Aircraft;