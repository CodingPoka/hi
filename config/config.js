
require('dotenv').config();

const dev={
    app:{
        port: process.env.PORT || 3591
    },
    db:{
        url:process.env.DB_URL || "mongodb://127.0.0.1:27017/userDemoDB",
    }
};

module.exports=dev;