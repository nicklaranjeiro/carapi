const express = require('express');
const app = express();

const { mongoose } = require('./db/mongoose');

const bodyParser = require('body-parser');

//Loading in the models

const { Car } = require('./db/models/car.model');

//Loading middleware
app.use(bodyParser.json());

app.use(function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var cors = require('cors')

app.use(cors()) // Use this after the variable declaration


//Get all the cars in the inventory
app.get('/inventory', (req, res) => {
    Car.find({}).then((cars) => {
        res.send(cars);
    });
    
});

app.post('/inventory', (req, res) => {
    let stocknumber = req.body.stocknumber;
    let year = req.body.year;
    let make = req.body.make;
    let model = req.body.model;
    let trim = req.body.trim;
    let status = req.body.status;
    let vin = req.body.vin;
    let instockdate = req.body.instockdate;

    let newCar = new Car({
        stocknumber: stocknumber,
        year: year,
        make: make,
        model: model,
        trim: trim,
        status: status, 
        vin: vin,
        instockdate: instockdate
    })

    newCar.save().then((car) => {
        res.send(car);
    });
});

//Updates the specified item
app.patch('/inventory/:id', (req, res) => {
    Car.findOneAndUpdate({ _id: req.params.id }, {
        $set: req.body
    }).then(() => {
        res.sendStatus(200);
    })
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});