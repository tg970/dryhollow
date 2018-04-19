const express = require('express');
const router = express.Router();

// const Orders   = require('../models/orders.js');

router.post('/', async (req, res) => {
  try {
    console.log(req.body);
    //const comp = await Orders.create(req.body);
    res.status(201).json({});
  } catch (err) {
    //console.log(err);
    res.status(400).json({ err: err.message });
  }
});

router.get('/', async (req, res) => {
  //const comps = await Orders.find();
  res.status(200).json({});
});

module.exports = router;
