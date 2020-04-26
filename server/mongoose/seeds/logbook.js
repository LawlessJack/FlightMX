// Dependencies
const faker = require('faker'); // fake data API
const planes = require("./aircraft"); // aircraft seed data

// Global Constants
const collectionSeed = []; // seed object for export
const entryQty = 5; // documents per aircraft to create

// Load seed data
planes.forEach(plane => {
    for (let i = 0; i < entryQty; i++) {
        const document = {
            aircraft_id: "TBD",
            tail_number: plane.tail_number,
            entry_date: faker.date.past(),
            entry_note: faker.lorem.paragraph(),
        }
        collectionSeed.push(document);
    };
});

module.exports = collectionSeed;