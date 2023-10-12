// eventMiddleware.js
const Order = require('../models/Order'); // Adjust the path

const fetchOrder = async (req, res, next) => {
  try {
    const order = await Order.findOne({ user: req.user.id });

    if (!order) {
      return res.status(400).json({ error: "order not found for this user" });
    }

    req.order = order; // order information
    next();
  } catch (error) {
    res.status(500).json({ error: "Error fetching order data" });
  }
};

module.exports = fetchOrder;
