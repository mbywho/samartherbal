import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { CartContext } from "../context/CartContext";
import logo from "../assets/light-logo.svg";

function Navbar() {
  // const { cart } = useContext(CartContext);

  return (
    <nav className="w-full px-8 py-4 flex justify-between items-center backdrop-blur-md shadow-sm sticky top-0 z-50">

      {/* Logo */}
      <Link to="/">
        <img src={logo} className="h-15" />
      </Link>

      {/* Menu */}

      <ul className="flex gap-8 text-gray-700 font-medium">

        <li>
          <Link
            to="/"
            className="relative group transition"
          >
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-(--color-accent) transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>

        <li>
          <Link
            to="/products"
            className="relative group transition"
          >
            Products
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-(--color-accent) transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            className="relative group transition"
          >
            About
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-(--color-accent) transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>

        <li>
          <Link
            to="/contact"
            className="relative group transition"
          >
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-(--color-accent) transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>

        {/* <li>
          <Link to="/cart"
            className="relative group transition">
            {cart.length}
          </Link>
        </li> */}

      </ul>




      <Link to="/profile">
        <button className="px-4 py-1 border-(--color-primary)/50 border rounded-full hover:bg-(--color-primary) hover:text-white transition duration-200">
          Profile
        </button>
      </Link>


    </nav >
  );
}

export default Navbar;