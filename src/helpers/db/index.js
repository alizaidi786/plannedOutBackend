const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const {createIndexes} = require("./createIndex");

mongoose.Promise = global.Promise;

let conn = null;

let dbURL = "mongodb://admin:rT0iB4xD7rR5lP2aC2aF7uJ8wV1d@35.154.254.97:27017/appDB?authSource=admin&retryWrites=true&w=majority";

module.exports.connectToDatabase = async () => {
    if (conn == null) {
        conn = await mongoose.createConnection(dbURL, {
            poolSize: 1,
            reconnectTries: Number.MAX_SAFE_INTEGER,
            reconnectInterval: 500,
            useNewUrlParser: true,
            socketTimeoutMS: 5000
        });

        
        console.log('Database connected!');
        let models = path.join(__dirname, '../../', 'model');
        fs.readdirSync(models)
            .forEach(file => require(path.join(models, file)));
    } else {
        //console.log('Already Database connected!');
    }
    return conn;
};

this.connectToDatabase()