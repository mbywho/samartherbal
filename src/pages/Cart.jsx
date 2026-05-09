import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce(
    (acc, item) => acc + item.qty * Number(item.price.replace("₹", "")),
    0
  );

  return (
    <div className="px-10 py-20">
      <h1 className="text-3xl font-bold mb-10">Your Cart 🛒</h1>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-white p-4 rounded-lg shadow"
            >
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p>Qty: {item.qty}</p>
                <p>{item.price}</p>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Remove
              </button>
            </div>
          ))}

          <h2 className="text-xl font-bold mt-6">
            Total: ₹{total}
          </h2>
        </div>
      )}
    </div>
  );
}

export default Cart;