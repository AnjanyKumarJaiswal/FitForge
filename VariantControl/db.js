const mongoose = require('mongoose');

async function connectoMongoDB(url){
    return mongoose.connect(url)
    .then((err,data)=>{
        console.log("Successfully connected to Mongodb!!")
    }).catch((err)=>{
        console.log("MongoDB did not connect DB Server Offline!")
    })
}

module.exports = {connectoMongoDB};