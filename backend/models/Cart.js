const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: [{
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    name: String,
    price: Number,
    count: {
      type: Number,
      required: true,
      min: 1
    },
    image: String
  }]
}, { timestamps: true });

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
</function_call



<xai:function_call name="create_file">
<parameter name="absolute_path">c:/FULL_STACK_DEV/PRO2/backend/models/Order.js
