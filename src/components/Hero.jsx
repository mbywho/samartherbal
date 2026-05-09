import { Link } from "react-router-dom";
import useFadeIn from "../hooks/useFadeIn";
// import sh_hero from "../assets/hero.svg";

function Hero() {
  const { ref, visible } = useFadeIn();

  return (
    <section
      ref={ref}
      className={`px-6 md:px-16 py-28 flex flex-col items-center text-center hero-in ${visible ? " show" : ""}`}
    // style={{
    //   backgroundImage: "url('/src/assets/bg-light.png')",
    //   backgroundSize: "cover",
    //   backgroundPosition: "center",
    // }}
    >

      {/* Brand Name */}
      <h1
        className="text-5xl md:text-9xl font-medium mb-6"
        style={{
          color: "var(--color-primary)",
          fontFamily: "Bonheur Royale, cursive"
        }
        }
      >
        Samarth Herbal
      </h1>

      {/* Tagline */}
      < p className="text-gray-600 text-lg max-w-2xl mb-8" >
        Handcrafted herbal care rooted in tradition and designed for modern wellness.
      </p >

      {/* CTA Buttons */}
      < div className="flex gap-4" >
        <Link to={'/products'}>
          <button
            className="px-8 py-3 rounded-full bg-(--color-primary) text-white font-semibold hover:scale-105 hover:shadow- hover:bg-(--color-accent)/50 hover:text-(--color-primary) transition duration-300"
          >

            Shop Now

          </button>
        </Link>

        {/* <button className="px-8 py-3 rounded-full border border-gray-300 hover:bg-gray-100 transition">
          Learn More
        </button> */}
      </div >

    </section >
  );
}

export default Hero;