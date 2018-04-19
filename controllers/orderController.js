const express = require('express');
const router = express.Router();

const Order   = require('../models/orders.js');

router.post('/', async (req, res) => {
  try {
    console.log(req.body);
    const order = await Order.create(req.body);
    res.status(201).json(order);
  } catch (err) {
    //console.log(err);
    res.status(400).json({ err: err.message });
  }
});

router.get('/', async (req, res) => {
  const orders = await Order.find();
  res.status(200).json(orders);
});

module.exports = router;
