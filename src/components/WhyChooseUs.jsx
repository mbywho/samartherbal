import useFadeIn from "../hooks/useFadeIn";

function WhyChooseUs() {
  const { ref, visible } = useFadeIn();

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

    // <section
    //   ref={ref}
    //   className={`px-6 md:px-16 py-24 text-center fade-in ${visible ? "show" : ""}`}
    // >
    <section
      ref={ref}
      className={`px-6 md:px-16 py-24 text-center fade-in ${visible ? "show" : ""}`}
    // style={{ backgroundColor: "var(--color-secondary)" }}
    >

      <h2
        className="text-3xl font-bold mb-12"
        style={{
          color: "var(--color-primary)",
          fontFamily: "Google Sans, sans-serif"
        }}
      >
        Why Choose Samarth Herbal?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}

      </div>

    </section >
  );
}

export default WhyChooseUs;