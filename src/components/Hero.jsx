import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
      className="px-4 sm:px-6 md:px-16 min-h-[50vh] py-20 flex flex-col items-center justify-center text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="w-full max-w-6xl bg-white/20 border border-white/20 backdrop-blur-md flex flex-col items-center rounded-[3rem] px-6 sm:px-10 md:px-20 py-20 md:py-28 shadow-xl">

        {/* Brand Name */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-8xl lg:text-[9rem] leading-none font-medium mb-6"
          style={{
            color: "var(--color-primary)",
            fontFamily: "Bonheur Royale, cursive",
            textShadow: "0 4px 20px rgba(0,0,0,0.1)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Samarth Herbal
        </motion.h1>

        {/* Tagline */}
        <motion.p
          // className="text-sm sm:text-base md:text-lg text-gray-700 max-w-xs sm:max-w-xl md:max-w-2xl mx-auto mb-8 leading-relaxed px-2 wrap-break-word"
          className="text-sm sm:text-base md:text-lg text-gray-700 max-w-[18rem] sm:max-w-md md:max-w-2xl mx-auto mb-8 leading-relaxed px-2 wrap-break-word"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Pure herbal care for everyday wellness.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          className="flex gap-4 pt-3 md:pt-7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link to="/products">
            <button
              className="px-7 py-3 md:px-8 rounded-full bg-(--color-primary) text-white font-semibold hover:bg-(--color-accent)/50 backdrop-blur-sm hover:text-(--color-primary) hover:scale-105 transition duration-200"
            >

              Shop Now
            </button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Hero;