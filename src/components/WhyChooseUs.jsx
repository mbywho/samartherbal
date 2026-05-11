import { motion } from "framer-motion";
import { useState } from "react";


function WhyChooseUs() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const [activeIndex, setActiveIndex] = useState(null);

  const features = [
    {
      title: "100% Natural",
      desc: "All our products are made from pure herbal ingredients.",
    },
    {
      title: "Trusted Ayurveda",
      desc: "Backed by traditional Ayurvedic knowledge.",
    },
    {
      title: "No Chemicals",
      desc: "Free from harmful chemicals and additives.",
    },
  ];

  return (
    <motion.section
      className="px-6 md:px-16 py-24 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-3xl font-bold mb-12"
        style={{
          color: "var(--color-primary)",
          fontFamily: "Google Sans, sans-serif",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        Why Choose Samarth Herbal?
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {features.map((item, index) => (
          <motion.div
            key={index}
            className="group relative p-8 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/20 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"

            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setMousePos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
              });
              setActiveIndex(index);
            }}

            onMouseLeave={() => setActiveIndex(null)}

            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >

            {/* Glow */}
            <span className="absolute inset-0 rounded-2xl bg-(--color-primary) opacity-0 group-hover:opacity-10 blur-2xl transition duration-300"></span>

            {/* Mouse tracking glow */}
            {activeIndex === index && (
              <span
                className="absolute w-32 h-32 rounded-full pointer-events-none blur-3xl opacity-5 bg-(--color-primary)"
                style={{
                  left: mousePos.x - 80,
                  top: mousePos.y - 80,
                  position: "absolute",
                }}
              />
            )}

            <div className="relative z-10">
              {/* Icon badge */}
              <div className="w-12 h-12 mx-auto mb-5 rounded-full flex items-center justify-center bg-white/30 border border-white/30 group-hover:scale-110 transition">
                <span className="text-(--color-primary) font-bold">
                  {index + 1}
                </span>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>

          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default WhyChooseUs;