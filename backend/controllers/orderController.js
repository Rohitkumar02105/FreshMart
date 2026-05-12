import Order from '../models/Order.js';

// Create new order
export const addOrder = async (req, res) => {
  const { orderItems, totalPrice } = req.body;

  if (orderItems && orderItems.length === 0) {
    return res.status(400).json({ message: 'No order items' });
  }

  const order = new Order({
    user: req.user._id,
    orderItems,
    totalPrice,
  });

  const createdOrder = await order.save();
  res.status(201).json(createdOrder);
};

// Get user orders
export const getMyOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.json(orders);
};
