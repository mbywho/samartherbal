import { motion } from "framer-motion";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../context/cart-context";

function Cart() {

  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
  } = useContext(CartContext);

  return (
    <motion.section
      className="px-4 sm:px-6 md:px-16 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h1
          className="text-4xl font-semibold mb-12"
          style={{
            color: "var(--color-primary)",
            fontFamily: "Google Sans, sans-serif",
          }}
        >
          Your Cart
        </h1>

        <div className="grid lg:grid-cols-[1fr_380px] gap-8">

          {/* LEFT — Cart Items */}
          <div className="flex flex-col gap-6">

            {cart.length === 0 && (
              <div className="bg-white/20 border border-(--primary) backdrop-blur-xl rounded-3xl p-10 text-center">

                <h2 className="text-2xl font-semibold text-(--color-primary)">
                  Your cart is empty
                </h2>

                <p className="text-gray-500 mt-3">
                  Add some herbal essentials to continue shopping.
                </p>

              </div>
            )}

            {/* Item */}
            {cart.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 border border-(--primary) backdrop-blur-xl rounded-3xl p-4 sm:p-5 flex items-center gap-4 sm:gap-5"
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-25 h-25 sm:w-36 sm:h-36 object-cover rounded-2xl shrink-0"
                />

                <div className="flex-1 flex flex-col justify-between">

                  <div>
                    <h2 className="text-base sm:text-xl font-semibold text-(--color-primary)">
                      {item.name}
                    </h2>

                    <button
                      onClick={() => removeFromCart(item.name)}
                      className="flex items-center gap-2 text-sm text-red-900 mt-3 hover:opacity-70 transition"
                    >

                      <Trash2 size={16} />

                      Remove

                    </button>

                  </div>

                  <div className="flex items-center justify-between mt-4">



                    <div className="flex items-center gap-3 bg-white/40 rounded-full px-3 py-2">

                      <button
                        onClick={() => decreaseQty(item.name)}
                        className="hover:scale-110 transition"
                      >
                        <Minus
                          size={16}
                          strokeWidth={2}
                          color="var(--color-primary)"
                        />
                      </button>

                      <span className="min-w-5 text-center font-medium">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQty(item.name)}
                        className="hover:scale-110 transition"
                      >
                        <Plus
                          size={16}
                          strokeWidth={2}
                          color="var(--color-primary)"
                        />
                      </button>

                    </div>



                    <div className="text-lg font-semibold text-(--color-primary)">
                      ₹{item.price * item.quantity}
                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>




          {/* RIGHT — Summary */}
          <div className="h-fit sticky top-28 bg-white/20 border border-(--primary) backdrop-blur-xl rounded-3xl p-7">

            <h2 className="text-2xl font-semibold text-(--color-primary) mb-8">
              Order Summary
            </h2>

            <div className="flex flex-col gap-5">

              <div className="flex justify-between text-gray-600">

                <span>Subtotal</span>

                <span>
                  ₹{cart.reduce(
                    (total, item) =>
                      total + item.price * item.quantity,
                    0
                  )}
                </span>

              </div>

              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <div className="border-t border-(--border) pt-5 flex justify-between text-lg font-semibold text-(--color-primary)">

                <span>Total</span>

                <span>
                  ₹{cart.reduce(
                    (total, item) =>
                      total + item.price * item.quantity,
                    0
                  )}
                </span>

              </div>

              <button
                className="mt-4 w-full py-4 rounded-full text-white font-medium transition hover:scale-[1.02]"
                style={{
                  backgroundColor: "var(--color-primary)",
                }}
              >
                Proceed to Checkout
              </button>

            </div>

          </div>
        </div>

      </div>
    </motion.section>
  );
}

export default Cart;