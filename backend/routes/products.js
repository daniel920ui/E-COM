const express = require('express');
const Joi = require('joi');
const Product = require('../models/Product.js');
const Category = require('../models/Category.js');
const { protect, authorize } = require('../middleware/auth.js');

const router = express.Router();

// Validation
const productSchema = Joi.object({
  name: Joi.string().min(2).required(),
  description: Joi.string().min(10).required(),
  price: Joi.number().min(0).required(),
  countInStock: Joi.number().min(0).required(),
  category: Joi.string().required()
});

// @desc Fetch all products
// @route GET /api/products
// @access Public
router.get('/', async (req, res) => {
  try {
    const keyword = req.query.keyword ? {
      name: {
        $regex: req.query.keyword,
        $options: 'i'
      }
    } : {};

    const products = await Product.find({ ...keyword }).populate('category', 'name');
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc Fetch single product
// @route GET /api/products/:id
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate('category', 'name');
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc Create product
// @route POST /api/products
// @access Private/Admin
router.post('/', protect, authorize('admin'), async (req, res) => {
  try {
    const { error } = productSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const category = await Category.findById(req.body.category);
    if (!category) return res.status(400).json({ message: 'Invalid category' });

    const product = new Product({
      ...req.body,
      category: req.body.category,
      user: req.user._id
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc Update product
// @route PUT /api/products/:id
// @access Private/Admin
router.put('/:id', protect, authorize('admin'), async (req, res) => {
  try {
    const { error } = productSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    let product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc Delete product
// @route DELETE /api/products/:id
// @access Private/Admin
router.delete('/:id', protect, authorize('admin'), async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    await product.remove();
    res.json({ message: 'Product removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

