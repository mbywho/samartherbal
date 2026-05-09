function Footer() {
  return (
    <footer className="bg-white px-10 py-10 mt-10">

      <div className="flex flex-col md:flex-row justify-between items-center">

        {/* Logo */}
        <h1
          className="text-xl font-bold mb-4 md:mb-0"
          style={{ color: "var(--color-primary)" }}
        >
          🌿 Samarth Herbal
        </h1>

        {/* Links */}
        <ul className="flex gap-6 text-gray-600">
          <li className="cursor-pointer hover:text-green-700">Home</li>
          <li className="cursor-pointer hover:text-green-700">Products</li>
          <li className="cursor-pointer hover:text-green-700">About</li>
          <li className="cursor-pointer hover:text-green-700">Contact</li>
        </ul>

      </div>

      {/* Bottom */}
      <p className="text-center text-gray-500 mt-6 text-sm">
        © 2026 Samarth Herbal. All rights reserved.
      </p>

    </footer>
  );
}

export default Footer;