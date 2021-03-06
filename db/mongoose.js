//Handles the mongoDB connection

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/CarManager', { useNewUrlParser: true, useUnifiedTopology: true }).then(() =>{
    console.log("Connected to MongoDB");
}).catch((e) => {
    console.log(e);
})

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

module.exports = {
    mongoose
};

