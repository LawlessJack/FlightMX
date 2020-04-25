'use strict'
const fetch = require('node-fetch');
const collectionSeed = []; // seed object

const documentQty = 5; // documents to create

for (let i = 0; i < documentQty; i++) {
    const document = {
        make: "test",
        model: "test",
        year: 1997,
        tail_number: "test",
        note: "NONE",
        created: { type: Date, default: Date.Now },
        modified: { type: Date, default: Date.Now }
    }
    collectionSeed.push(document);
}

module.exports = collectionSeed
