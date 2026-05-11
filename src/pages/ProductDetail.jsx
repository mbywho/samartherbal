import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetail() {
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div className="p-10">Product not found</div>;
  }

  return (
    <div className="px-10 py-20 flex flex-col md:flex-row gap-10 items-center">

      <img
        src={product.image}
        alt={product.name}
        className="w-100 h-full object-cover rounded-xl shadow-md"
      />

      <div>
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-xl font-semibold mb-6">{product.price}</p>

        <button
          className="px-6 py-3 rounded-lg text-white hover:scale-105 transition"
          style={{ backgroundColor: "var(--color-primary)" }}
        >
          Add to Cart
        </button>
      </div>

    </div>
  );
}

export default ProductDetail;