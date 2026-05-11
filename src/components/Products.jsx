import { useContext } from "react";
import { CartContext } from "../context/cart-context.jsx";
import { Link } from "react-router-dom";
import products from "../data/products";
import { motion } from "framer-motion";

function Products() {
  const { addToCart } = useContext(CartContext);

  return (
    <section
      className={`px-6 md:px-16 py-24`}
    >

      <h2
        className="text-4xl font-medium text-center mb-16"
        style={{
          color: "var(--color-primary)",
          fontFamily: "Google Sans, sans-serif"
        }}
      >
        Products
      </h2>
      <div className="w-40 h-1 bg-(--color-primary) mx-auto mb-10 rounded"></div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >

        {products.map((product, index) => (
          <motion.div
            key={index}
            className="bg-white/20 backdrop-blur-sm rounded-2xl overflow-hidden p-4 md:p-5 border border-(--color-primary)-100 hover:-translate-y-1 hover:shadow-xl transition duration-300"
            variants={{
              hidden: {
                opacity: 0,
                y: 30,
              },
              show: {
                opacity: 1,
                y: 0,
              },
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            <Link to={`/product/${index}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full aspect-4/5 object-cover rounded-xl mb-4"
              />

              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600 mb-3 text-sm py-1 font-medium">₹{product.price}</p>
            </Link>

            <button
              onClick={() => addToCart(product)}
              className="w-full py-2 rounded-lg font-medium text-white bg-(--color-primary) hover:bg-(--color-accent)/30 hover:text-(--color-primary) duration-100"
            >
              Add to Cart
            </button>
          </motion.div>
        ))}

      </motion.div>

    </section >
  );
}

export default Products;