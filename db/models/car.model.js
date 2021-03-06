const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
    stocknumber: {
        type: String
    },
    year:{
        type: Number
    },
    make:{
        type: String
    },
    model:{
        type: String
    },
    trim:{
        type: String
    },
    status:{
        type: String
    },
    vin:{
        type: String
    },
    instockdate:{
        type: Date
    },
});

const Car = mongoose.model('Car', CarSchema);
module.exports = { Car }
