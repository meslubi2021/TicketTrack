// eventMiddleware.js
const Event = require('../models/Event'); // Adjust the path

const fetchEvent = async (req, res, next) => {
  try {
    const event = await Event.findOne({ user: req.user.id });

    if (!event) {
      return res.status(400).json({ error: "Event not found for this user" });
    }

    req.event = event; // Event information
    next();
  } catch (error) {
    res.status(500).json({ error: "Error fetching event data" });
  }
};

module.exports = fetchEvent;
