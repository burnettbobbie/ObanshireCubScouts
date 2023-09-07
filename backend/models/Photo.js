const mongoose = require('mongoose');


const Photo = mongoose.model(
  "photo",
  new mongoose.Schema({
    photo: {
        type: String
    },
    title:{
      type: String
    },
    description:{
      type: String
    }
})
);

module.exports = Photo; 