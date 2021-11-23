import { createContext, useState, useContext } from "react";

const CartContext = createContext({
  cartItems: [],
  addToCart: (item) => {},
});
CartContext.displayName = "CartContext";

function CartProvider(props) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems(cartItems.concat(item));
  };

  const cartCtx = {
    cartItems: cartItems,
    addToCart: addToCart,
  };
  return (
    <CartContext.Provider value={cartCtx}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;

// custom hook
export function useCartCtx() {
  return useContext(CartContext);
}
