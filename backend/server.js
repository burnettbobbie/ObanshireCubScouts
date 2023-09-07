require('dotenv').config(); // Loads environment variables from .env file
const connectDB = require('./config/db.config'); 
const express = require('express'); 
const cors = require('cors'); 
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser'); 

const path = require("path"); // Imports the path module for handling file paths
const multer = require('multer'); // Imports the multer module for handling file uploads

mongoose.set('strictQuery', true); 

const db = require("./models"); // Imports the models from the ./models directory
const app = express(); // Creates an instance of the Express application
const Role = db.role; // Assigns the Role model from the db module to the Role variable
const crud = require('./routes/api/crudRoutes'); // Imports the CRUD routes from the crudRoutes.js file

const port = process.env.PORT || 5000; // Assigns the port number from environment variables or defaults to 5000
const corsOptions = {
  origin: "http://localhost:3000", // Allows requests from the specified origin
  optionsSuccessStatus: 200,
};

connectDB(); // Connects to the MongoDB database using the connectDB function

app.use(bodyParser.json()); // Parses requests with JSON payloads
app.use(bodyParser.urlencoded({ extended: true })); // Parses URL-encoded requests

app.use(cors(corsOptions, { credentials: true, origin: true })); // Enables CORS with the specified options
app.use(express.json({ extended: false })); // Parses JSON payloads
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded requests
app.use('/api/crudRoutes', crud); // Mounts the CRUD routes under the '/api/crudRoutes' path
app.use("/images", express.static(path.join("backend/images"))); // Serves static files from the "backend/images" directory under the '/images' path
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serves static files from the "uploads" directory under the '/uploads' path

// Login/register routes with authentication
require('./routes/auth.routes')(app); // Mounts the authentication routes
require('./routes/user.routes')(app); // Mounts the user routes

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "volunteer"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'volunteer' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'admin' to roles collection");
      });
    }
  });
}

initial();

module.exports = app; // Exports the Express application as a module
