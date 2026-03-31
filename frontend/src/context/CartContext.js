import { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'CART_ADD_ITEM':
      const newItem = action.payload;
      const existItem = state.cartItems.find(x => x.product === newItem.product);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(x => 
            x.product === existItem.product ? newItem : x
          )
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, newItem]
        };
      }
    case 'CART_REMOVE_ITEM':
      return {
        ...state,
        cartItems: state.cartItems.filter(x => x.product !== action.payload)
      };
    case 'CART_SAVE_PAYMENT_METHOD':
      return {
        ...state,
        paymentMethod: action.payload
      };
    case 'CART_CLEAR_ITEMS':
      return {
        ...state,
        cartItems: []
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    cartItems: [],
    paymentMethod: ''
  });

  useEffect(() => {
    const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
    dispatch({ type: 'CART_LOAD_ITEMS', payload: cartItems });
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  const addToCart = (product) => {
    const item = {
      product: product._id,
      name: product.name,
      image: product.image,
      price: product.price,
      count: 1
    };
    dispatch({ type: 'CART_ADD_ITEM', payload: item });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: 'CART_REMOVE_ITEM', payload: productId });
  };

  const savePaymentMethod = (method) => {
    dispatch({ type: 'CART_SAVE_PAYMENT_METHOD', payload: method });
  };

  const clearCart = () => {
    dispatch({ type: 'CART_CLEAR_ITEMS' });
  };

  const value = {
    cartItems: state.cartItems,
    paymentMethod: state.paymentMethod,
    addToCart,
    removeFromCart,
    savePaymentMethod,
    clearCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

