require('dotenv').config();
const mongoose = require('mongoose');
const dbURL = process.env.DB_URL;



const connectdb = async () => {
    try {
        await mongoose.connect(dbURL);
        console.log("Mongo Atlas is connected");
    } catch (error) {
        console.log("Mongo Atlas is not connected");
        console.log(error.message);
        process.exit(1);
    }
};

module.exports = connectdb;

/*

mongoose.connect(dbURL).then(()=>{
    console.log("Database is connected");
}).catch((error)=>{
    console.log("database is not connected");
    console.log(error.message);
    process.exit(1);
})


*/