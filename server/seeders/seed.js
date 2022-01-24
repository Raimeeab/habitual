const db = require('../config/connection');
const { User, Habit } = require("../models");
const userData = require ("./userSeeds.json");



db.once('open', async () => {
    try {
        console.log('reaching seed try');

        // Delete existing data 
        await User.deleteMany({}); 

        // Insert Seed data to respective model 
        await User.insertMany(userData); 
        console.log("Seeder data being inserted successfully"); 

        console.log("Seeders successfully created"); 
        process.exit(0);
    } catch (err) {
        throw err
    }
})