const db = require('../config/connection');
const { User } = require("../models");
const userData = require ("./userSeeds.json");

db.once('open', async () => {
    try {
        console.log('reaching seed try');

        // Delete existing data 
        await User.deleteMany({}); 
        console.log("Seeders successfully deleted");

        // Insert Seed data to respective model 
        await User.create(userData); 

        console.log("Seeders successfully created"); 
        process.exit(0);
    } catch (err) {
        throw err
    }
})