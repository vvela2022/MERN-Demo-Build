//DEPENDENCIES

require('dotenv').config()
//this is checking in the packages for dotenv

const {PORT, MONGODB_URI} = process.env;

const express = require('express');
const app = express();

//Add in mongoose
const mongoose = require('mongoose');
mongoose.connect(MONGODB_URI);

//My Controllers
const peopleController = require('./controllers/people-controller')

const cors = require ('cors')
const morgan = require ('morgan')

//Database connection
mongoose.connection
  .on("open", () => console.log("Your are connected to mongoose"))
  .on("close", () => console.log("Your are disconnected from mongoose"))
  .on("error", (error) => console.log(error));

  //Middleware
  app.use(express.json());
  app.use(cors()); //this is what links the front end and back end repos together
  app.use(morgan('dev'));//this shows better error messages


  app.use('/people', peopleController);


  //ROUTES

app.get('/', (req, res) => {
    res.send('Hello World');
})

//Listener
app.listen(PORT, () => {
    console.log(`Listening to you on port ${PORT}`)
})

//cors sets us up so that the front end and back end can talk to each other


