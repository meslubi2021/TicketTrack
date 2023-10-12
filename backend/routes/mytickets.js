const express = require("express");
const router = express.Router();
const Ticket = require("../models/MyTicket"); // Import your Ticket model
const fetchuser = require("../middleware/fetchuser");

// Route to find tickets for the authenticated user
router.get("/findusertickets", fetchuser, async (req, res) => {
  try {
    // Find tickets for the user
    const tickets = await Ticket.find({ user: req.user.id });

    res.json(tickets);
  } catch (error) {
    
  }
});

// Route to delete a ticket by ID
router.delete("/deleteTicket/:id", fetchuser, async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);

    if (!ticket) {
      return res.status(404).json({ error: "Ticket not found" });
    }

    // Check if the user owns the ticket
    if (ticket.user.toString() !== req.user.id) {
      return res.status(401).json({ error: "Not authorized to delete this ticket" });
    }

    await Ticket.findByIdAndDelete(req.params.id);
    res.json({ success: "Ticket has been deleted" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occurred");
  }
});

module.exports = router;
