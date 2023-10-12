const express = require("express");
const router = express.Router();
const Event = require("../models/Event");
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");

// Route 1 :-fetch all events details Using: GET "/api/auth/".  require login

router.get("/fetchuserallEvent", fetchuser, async (req, res) => {
  try {
    const events = await Event.find({ user: req.user.id });
    res.json(events);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("some error occured");
  }
});
router.get("/fetchallEvent", async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("some error occured");
  }
});

// Route 2 :-add new events  Using: POST "/api/auth/addevent".  require login

router.post(
  "/addEvent",
  fetchuser,
  [
    body("title", "Enter  Valid Title").isLength({ min: 3 }),
    body("description", "Decripiton must be at least 5 chractater").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const { title, description, date_time ,location,price,image} = req.body;
      const errors = validationResult(req);
      //if any  bad request occures , return bad request and the error
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const event = new Event({
        title,
        description,
        date_time,
        location,
        price,
      
      });
      const savedEvent = await event.save();

      res.json(savedEvent);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("some error occured");
    }
  }
);
// Route 3 :-update events details Using: put "/api/auth/updateevent".  require login

router.put("/updateEvent/:id", fetchuser, async (req, res) => {
  const { title, description, date_time ,location,price,image} = req.body;


  try {
    //Create a newEvents object
    const newEvent = {};
    if (title) {
      newEvent.title = title;
    }
    if (description) {
      newEvent.description = description;
    }
    if (location) {
      newEvent.location = location;
    }
    if (date_time) {
      newEvent.date_time = date_time;
    }
    if (price) {
      newEvent.price = price;
    }
    if (image) {
      newEvent.image = image;
    }
    
    //find the  event to be updated and update it
    let event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).send("Not Found");
    }

    if (event.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    event = await Event.findByIdAndUpdate(
      req.params.id,
      { $set: newEvent },
      { new: true }
    );
    res.json({ event });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("some error occured");
  }
});
// Route 4 :- Delete events  Using: DELETE "/api/auth/updateevent".  require login

router.delete("/deleteEvent/:id", fetchuser, async (req, res) => {
 

  try {
    //find the  event to be delete and delete it
    let event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).send("Not Found");
    }
    //allow  deletion  only if  user  owns this Event
    if (event.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }
    event = await Event.findByIdAndDelete(req.params.id);
    res.json({ succes: "Event has been deleted", event: event });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("some error occured");
  }
});

module.exports = router;
