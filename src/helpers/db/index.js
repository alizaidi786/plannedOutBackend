const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const {createIndexes} = require("./createIndex");

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);

let conn = null;

let dbURL = "mongodb://localhost:27017/PlannedOut";

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

this.connectToDatabase();