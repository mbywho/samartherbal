import { useState } from "react";
import { CartContext } from "./cart-context";

function CartProvider({ children }) {

  const [cart, setCart] = useState([]);

  // ADD TO CART
  const addToCart = (product) => {

    const existingItem = cart.find(
      (item) => item.name === product.name
    );

    if (existingItem) {

      setCart(
        cart.map((item) =>
          item.name === product.name
            ? {
              ...item,
              quantity: item.quantity + 1,
            }
            : item
        )
      );

    } else {

      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);

    }
  };

  // REMOVE
  const removeFromCart = (name) => {
    setCart(
      cart.filter((item) => item.name !== name)
    );
  };

  // INCREASE
  const increaseQty = (name) => {
    setCart(
      cart.map((item) =>
        item.name === name
          ? {
            ...item,
            quantity: item.quantity + 1,
          }
          : item
      )
    );
  };

  // DECREASE
  const decreaseQty = (name) => {
    setCart(
      cart.map((item) =>
        item.name === name
          ? {
            ...item,
            quantity:
              item.quantity > 1
                ? item.quantity - 1
                : 1,
          }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;