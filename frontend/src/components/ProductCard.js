import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { Star } from 'lucide-react';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const addToCartHandler = () => {
    addToCart(product);
  };

  return (
    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-black bg-opacity-75 text-white px-3 py-1 rounded-full text-xs font-semibold">
          ${product.price}
        </div>
        {product.rating > 0 && (
          <div className="absolute bottom-3 left-3 flex items-center space-x-1 bg-white bg-opacity-90 px-3 py-1 rounded-full">
            <Star fill="currentColor" className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-semibold text-gray-900">
              {product.rating} ({product.numReviews})
            </span>
          </div>
        )}
      </div>
      <div className="p-6">
        <Link to={`/product/${product._id}`} className="block">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 h-12">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 capitalize">{product.category?.name || 'Uncategorized'}</span>
          <div className="flex space-x-2">
            <button
              onClick={addToCartHandler}
              className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1 3h10l-1-3m0 0v6a1 1 0 001 1h2a1 1 0 001-1v-6" />
              </svg>
              <span>Add to cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

