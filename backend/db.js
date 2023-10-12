
const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/TicketTrek";

const connectToMongo = () => {
 mongoose.connect(mongoURI, 
    console.log("Connected to mongo Successful land")
   )
}

module.exports = connectToMongo;