const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const {  validationResult } = require("express-validator");
const fetchuser = require("../middleware/fetchuser");
const fetchevent = require("../middleware/eventMiddleware");
const Event = require("../models/Event")
const Ticket = require("../models/MyTicket"); // Import your Ticket model

// Route 1: Fetch all orders details using GET "/api/auth/fetchallorders". Require login.
router.get("/fetchallorders", fetchuser, fetchevent, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id });
    res.json(orders);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occurred");
  }
});

// Route 2: Add new order using POST "/api/auth/addorder". Require login.


router.post("/addorder", fetchuser, async (req, res) => {
  try {
    const { eventId } = req.body;

    // Check if the event exists
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }

    const order = new Order({
      user: req.user.id,
      event: eventId,
      status: "true",
    });

    // Save the order
    const savedOrder = await order.save();

    // Create a ticket associated with the order's event
    const ticket = new Ticket({
      user: req.user.id,
      event: event._id,
      title: event.title,
      description: event.description,
      location: event.location,
      date_time: event.date_time,
      payment: savedOrder.status,
    });

    // Save the ticket
    const savedTicket = await ticket.save();

    res.json({ order: savedOrder, ticket: savedTicket });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occurred");
  }
});




// Route 4: Delete order using DELETE "/api/auth/deleteorder/:id". Require login.
router.delete("/deleteorder/:id", fetchuser, async (req, res) => {
  try {
    const { eventId } = req.body; // Assuming eventId is sent from the client-side

    let order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).send("Not Found");
    }

    if (order.user.toString() !== req.user.id || order.event.toString() !== eventId) {
      return res.status(401).send("Not Allowed");
    }

    order = await Order.findByIdAndDelete(req.params.id);
    res.json({ success: "Order has been deleted", order: order });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occurred");
  }
});


module.exports = router;
