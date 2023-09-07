const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Load models
const Photo = require('../../models/Photo');
const User = require('../../models/user.model');
const Notice = require('../../models/Notice');
const Event = require('../../models/Event');


//multer module to handle multi part data
const multer = require('multer');
//unique id module to be generated for each multipart file
const { v4: uuidv4 } = require('uuid');
let path = require('path');  

//sets location of multer files to be stored (uploads folder)
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads' );
    },
    filename: function(req, file, cb) {   
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});

//sets allowed file types 
const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

//variable to be used for multer file requests inc. file destination and file filter
let upload = multer({ storage, fileFilter });



// //******************************* G E T *****************************

// //Get all volunteer user accounts in alphabetical order (lastname)
router.get('/users', (req, res) => {
  User.find({ roles:'646e402bfeb455d9e1ddd4d8' })
    .sort({
      lastname: 1 
    })
    .then((users) => res.json(users))
    .catch((err) => res.status(404).json({ nousersfound: 'No user accounts found' }));
});


// //Get user by user id
router.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
   
    console.log(user);
    res.status(201).json([user]);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// //Get all notices
router.get('/notices', (req, res) => {
  Notice.find()
    .then((notices) => res.json(notices))
    .catch((err) => res.status(404).json({ nonoticesfound: 'No notices found' }));
});


// //Get a notice by admin ID
router.get("/notice/:id", async (req, res) => {
  try {
    const adminNotice = await Notice.find({created_by:req.params.id})
    res.status(201).json([adminNotice]);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});




// //Get all photos
router.get('/photos', (req, res) => {
  Photo.find()
    .then((photos) => res.json(photos))
    .catch((err) => res.status(404).json({ nophotosfound: 'No photos found' }));
});



// Get all events
router.get('/events', (req, res) => {
    Event.find()
      .then((events) => res.json(events))
      .catch((err) => res.status(500).json({ error: 'Error retrieving events' }));
  });
  

// //Get event by event id
router.get('/events/:id', (req, res) => {
  Event.findById(req.params.id)
    .then((appointment) => res.json(appointment))
    .catch((err) => res.status(404).json({ noeventfound: 'No event found' }));
});


//Get user names from available Users in Event 

router.get('/events/:id/availableUsers', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id).populate('availableUsers');
    
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    
    const availableUsers = event.availableUsers;
    const userNames = [];
    
    for (const userId of availableUsers) {
      const user = await User.findById(userId);
      if (user) {
        userNames.push({
          firstname: user.firstname,
          lastname: user.lastname
        });
      }
    }
    
    res.json([ userNames ]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});



 
// //******************** P O S T ***************************************
// //upload photo
router.route('/photos').post(upload.single('photo'), (req, res) => {
  const photo = req.file.filename;
  const title = req.body.title;
  const description = req.body.description;

  const newPhotoData = {
      photo, title, description
  }

  const newPhoto = new Photo(newPhotoData);

  newPhoto.save()
         .then(() => res.json('Photo Added'))
         .catch(err => res.status(400).json('Error: ' + err));
});



//Post new event
router.post("/events", async (req, res) => {
  const E = new Event({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    description: req.body.description,
    location: req.body.location,
    date: req.body.date,
    availableUsers: req.body.availableUsers
  });
  
  console.log(E);

  try {
    const result = await E.save();
    res.status(201).json({
      createdEvent: {
        _id: result._id,
        name: result.name,
        description: result.description,
        location: result.location,
        date: result.date,
        availableUsers: result.availableUsers
      },
    });
  } catch (err) {
    res.status(500).json(err);    
  }
});



// //post notice
router.post("/notices", async (req, res) =>{
  const notices = new Notice({
    _id: new mongoose.Types.ObjectId(),
    text: req.body.text,
    created: req.body.created,
    created_by: req.body.created_by
  });

  console.log(notices);

  try{

    const result = await notices.save();
    res.status(201).json({
      createdNotice: {
        _id: result._id,
        text: result.text,
        created: result.created,
        created_by: result.created_by
      },
      
    });
  
  } catch (err) {
    res.status(500).json(err);    
  }

});




// //***************************** U P D A T E ******************************************

// // update an event by event id
router.put('/events/:id', (req, res) => { 
  Event.findByIdAndUpdate(req.params.id, req.body)
    .then((event) => res.json({msg: 'Event updated successfully' }))
    .catch((err) =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

router.put('/events/:eventId/availability', async (req, res) => {
  const eventId = req.params.eventId;
  const userId = req.body.userId; // Assuming you send the `userId` in the request body

  try {
    // Find the event by ID
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ success: false, message: 'Event not found' });
    }

    // Update the `availableUsers` array
    event.availableUsers.push(userId);
    await event.save();

    res.status(200).json({ success: true, message: 'Availability updated successfully' });
  } catch (err) {
    console.error('Error updating availability', err);
    res.status(500).json({ success: false, message: 'Error updating availability' });
  }
});



// // update a user by event id
router.put('/users/:id', (req, res) => { 
  User.findByIdAndUpdate(req.params.id, req.body)
    .then((user) => res.json({msg: 'User updated successfully' }))
    .catch((err) =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});




// //******************************** D E L E T E **********************************


// // Delete a notice
router.delete('/notice/:id', (req, res) => {
  Notice.findByIdAndRemove(req.params.id, req.body)
    .then((notice) => res.json({ mgs: 'Notice deleted successfully' }))
    .catch((err) => res.status(404).json({ error: 'No notice!' }));
});

//delete an event by event id
router.delete('/events/:eventId', async (req, res) => {
  try {
    const eventId = req.params.eventId;

    await Event.findByIdAndDelete(eventId);

    res.sendStatus(204); 
  } catch (error) {
    console.log('Error deleting event:', error);
    res.status(500).json({ error: 'Failed to delete event' }); 
  }
});


//Delete user ID from event available users
router.delete('/events/:eventId/availability/:userId', async (req, res) => {
  const eventId = req.params.eventId;
  const userId = req.params.userId;

  try {
    // Find the event by ID
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ success: false, message: 'Event not found' });
    }

    // Remove the user's ID from the `availableUsers` array
    event.availableUsers.pull(userId);
    await event.save();

    res.status(200).json({ success: true, message: 'User ID removed from availability' });
  } catch (err) {
    console.error('Error removing user ID from availability', err);
    res.status(500).json({ success: false, message: 'Error removing user ID from availability' });
  }
});

// // Delete a photo
router.delete('/photo/:id', (req, res) => {
  Photo.findByIdAndRemove(req.params.id, req.body, req.file )
    .then((photo) => res.json({ mgs: 'Photo deleted successfully' }))
    .catch((err) => res.status(404).json({ error: 'No photo!' }));
});


module.exports = router;
