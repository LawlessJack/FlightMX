'use strict'
const faker = require('faker'); // fake data API

const collectionSeed = []; // seed object
const documentQty = 5; // documents to create

for (let i = 0; i < documentQty; i++) {
    const document = {
        // seed object goes here
        aircraft_id: "test",
        user_id: "test",
        entry_date: "test",
        entry_note: "test",
        created: { type: Date, default: Date.Now },
        modified: { type: Date, default: Date.Now }
    }
    collectionSeed.push(document);
};

module.exports = collectionSeed;