// //Dependencies
const mongoose = require("mongoose");

// //Global Constant
const Schema = mongoose.Schema;

// // Create Schema 
const logbookSchema = new Schema({
    aircraft_id: { type: String },
    user_id: { type: String },
    entry_date: { type: Date },
    entry_note: { type: String },
    created: { type: Date, default: Date.Now },
    modified: { type: Date, default: Date.Now }
})

const Logbook = mongoose.model("Logbook", logbookSchema);
module.exports = Logbook; s