import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import products from "../data/products";
import useFadeIn from "../hooks/useFadeIn";

function Products() {
  const { addToCart } = useContext(CartContext);
  const { ref, visible } = useFadeIn();

  return (
    <section
      ref={ref}
      className={`px-6 md:px-16 py-24 hero-in ${visible ? "show" : ""}`}
    // style={{
    //   backgroundImage: "url('/src/assets/bg-light.png')",
    //   backgroundSize: "contain",
    //   backgroundPosition: "center",
    // }}
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {products.map((product, index) => (
          <div
            key={index}
            className={`bg-(--color-secondary)/50 backdrop-blue-sm rounded-2xl p-5 border border-(--color-primary)-100 hover:shadow-xl transition duration-300 stagger-item ${visible ? "show" : ""
              }`}
            style={{ transitionDelay: `${index * 0.12}s` }}
          >
            <Link to={`/product/${index}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-100 object-cover rounded-xl mb-4"
              />

              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600 mb-3 text-sm py-1 font-medium">{product.price}</p>
            </Link>

            <button
              onClick={() => addToCart(product)}
              className="w-full py-2 rounded-lg font-medium text-white bg-(--color-primary) hover:bg-(--color-accent)/30 hover:text-(--color-primary) duration-100"
            // className="w-full py-2 rounded-lg font-medium text-white bg-(--color-primary) hover:opacity-80 duration-100"
            >
              Add to Cart
            </button>
          </div>
        ))}


        {/* {products.map((product, index) => (

          <div className="bg-white rounded-2xl shadow-sm p-4 hover:shadow-2xl hover:-translate-y-3 transition duration-300">
            <Link to={`/product/${index}`} key={index}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-55 object-cover rounded-xl mb-4"
              />

              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600 mb-3">{product.price}</p>
            </Link>
            <button
              onClick={() => addToCart(product)}
              className="w-full py-2 rounded-lg text-white hover:scale-105 transition duration-300"
              style={{ backgroundColor: "var(--color-primary)" }}
            >
              Add to Cart
            </button>
          </div>
        ))} */}

      </div>

    </section>
  );
}

export default Products;