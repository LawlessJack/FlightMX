//Dependencies
const mongoose = require("mongoose");

//Global Constant
const Schema = mongoose.Schema;

// Create Schema 
const activitySchema = new Schema({
    user_id: { type: String, required: true },
    email: { type: String, required: true },
    ip_address: { type: String },
    note: { type: String },
    created: { type: Date, default: Date.Now },
    modified: { type: Date, default: Date.Now }
})

const Activity = mongoose.model("Activity", activitySchema);
module.exports = Activity;