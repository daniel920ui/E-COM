import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, CreditCard, Package } from 'lucide-react';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const totalItems = cartItems.reduce((acc, item) => acc + item.count, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.count, 0);

  if (cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="text-center py-24">
          <Package className="mx-auto h-24 w-24 text-gray-400 mb-8" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
          <p className="text-xl text-gray-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
          <Link
            to="/products"
            className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="lg:w-3/4">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div key={item.product} className="flex space-x-6 bg-white rounded-2xl p-6 shadow-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-xl"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 truncate">
                    {item.name}
                  </h3>
                  <p className="text-2xl font-bold text-gray-900">${item.price}</p>
                  <div className="flex items-center space-x-3 mt-2">
                    <span className="text-sm text-gray-500">Qty: {item.count}</span>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.product)}
                  className="p-3 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-xl transition-colors group"
                  title="Remove item"
                >
                  <Trash2 size={20} className="group-hover:scale-110 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Cart Summary */}
        <div className="lg:w-1/4">
          <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Cart Summary</h2>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-lg">
                <span>Total items:</span>
                <span>{totalItems}</span>
              </div>
              <div className="flex justify-between text-2xl font-bold text-gray-900">
                <span>Total:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>
            <Link
              to="/checkout"
              className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-lg font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 block"
            >
              <CreditCard size={24} />
              <span>Proceed to Checkout</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

