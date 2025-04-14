import PropTypes from 'prop-types';
import { createContext, useState } from 'react';
import { products1 as products } from '../assets/assets';
// import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = '₹';
  const delivery_fee = 10;

  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({}); // Flat structure: { itemId: quantity }
  const [orders, setOrders] = useState([]); // New state to hold orders
  const navigate = useNavigate(); // to navigate to different pages

  // addToCart now only takes the itemId and increments its quantity.
  const addToCart = async (itemId) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }
    setCartItems(cartData);
  };

  // addOrder creates orders based on the flat cartItems structure.
  const addOrder = () => {
    let tempOrders = structuredClone(orders);
    let newOrder = [];

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        newOrder.push({
          _id: item,
          quantity: cartItems[item],
        });
      }
    }
    setOrders([...tempOrders, ...newOrder]);
    // Optionally clear the cart after placing the order:
    // setCartItems({});
  };

  // getCartCount sums all quantities.
  const getCartCount = () => {
    let totalCount = 0;
    for (const item in cartItems) {
      totalCount += cartItems[item];
    }
    return totalCount;
  };

  // updateQuantity now only requires itemId and quantity.
  const updateQuantity = async (itemId, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId] = quantity;
    setCartItems(cartData);
  };

  // getCartAmount calculates the total based on the flat quantity.
  const getCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      const productInfo = products.find((product) => product._id === item);
      if (cartItems[item] > 0) {
        totalAmount += productInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    addOrder,
    orders,
    navigate,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

ShopContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ShopContextProvider;
