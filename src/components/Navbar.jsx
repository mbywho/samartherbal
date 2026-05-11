import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// import { useContext } from "react";
// import { CartContext } from "../context/CartContext";
import logo from "../assets/light-logo.svg";
import { useState } from "react";

import { Menu, X, User, ShoppingCart } from "lucide-react";

function Navbar() {
  // const { cart } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      < motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        onClick={() => {
          if (menuOpen) setMenuOpen(false);
        }}
        className="w-full px-4 sm:px-6 md:px-16 py-4 flex items-center justify-between sticky top-0 z-50 bg-(--color-secondary)/50 backdrop-blur-xl border-b border-white/20"
      >

        {/* Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          <Link
            to="/"
            style={{
              color: "var(--color-primary)",
              fontFamily: "Bonheur Royale, cursive",
            }}
          >
            <img src={logo} className="h-15" />
          </Link>
        </div>


        {/* CENTER — Desktop Links */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium items-center absolute left-1/2 -translate-x-1/2">

          <li>
            <Link to="/" className="relative group transition">
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-(--color-accent) transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

          <li>
            <Link to="/products" className="relative group transition">
              Products
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-(--color-accent) transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

          <li>
            <Link to="/about" className="relative group transition">
              About
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-(--color-accent) transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

          <li>
            <Link to="/contact" className="relative group transition">
              Contact
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-(--color-accent) transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

        </ul>

        {/* Mobile Menu */}
        <button
          className="md:hidden"
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(!menuOpen);
          }}
          style={{ color: "var(--color-primary)" }}
        >
          {menuOpen
            ? <X size={30} strokeWidth={1.5} />
            : <Menu size={30} strokeWidth={1.5} />
          }
        </button>

        {/* RIGHT SIDE */}


        <div className="flex items-center gap-4">

          {/* CART (always visible) */}
          <Link to="/cart">
            <button style={{ color: "var(--color-primary)" }}>
              <ShoppingCart size={26} strokeWidth={1.5} />
            </button>
          </Link>

          {/* PROFILE (always visible) */}
          <Link to="/profile">
            <button style={{ color: "var(--color-primary)" }}>
              <User size={28} strokeWidth={1.5} />
            </button>
          </Link>

        </div>


      </motion.nav>


      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{
                opacity: 0,
                y: -10,
                transition: {
                  duration: 0.2,
                },
              }}
              transition={{ duration: 0.25 }}
              className="md:hidden fixed top-22 left-4 right-4 rounded-3xl bg-white/50 backdrop-blur-xl border border-white/20 shadow-xl px-6 py-6 flex flex-col gap-5 z-40"
            >
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="text-lg text-(--color-primary)"
              >
                Home
              </Link>

              <Link
                to="/products"
                onClick={() => setMenuOpen(false)}
                className="text-lg text-(--color-primary)"
              >
                Products
              </Link>

              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
                className="text-lg text-(--color-primary)"
              >
                About
              </Link>

              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="text-lg text-(--color-primary)"
              >
                Contact
              </Link>

              <Link
                to="/cart"
                onClick={() => setMenuOpen(false)}
                className="text-lg text-(--color-primary)"
              >
                Cart
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              className="md:hidden fixed inset-0 z-30"
            />

          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;