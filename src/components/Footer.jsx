

import { FaInstagram, FaFacebook } from "react-icons/fa";
import { Mail } from "lucide-react";
import logo from "../assets/light-logo.svg";

function Footer() {

  return (
    <footer className="mt-20 border-t border-white/20 bg-white/20 backdrop-blur-xl">

      <div className="max-w-7xl mx-auto px-6 md:px-16 py-14 flex flex-col items-center text-center">

        {/* Logo */}
        <img
          src={logo}
          alt="Samarth Herbal"
          className="h-16 mb-6 transition duration-300"
        />

        {/* Brand Line */}
        <p className="text-(--text)/70 max-w-sm leading-relaxed mb-10">
          Handcrafted herbal wellness rooted in tradition, designed for modern living.
        </p>

        {/* Socials */}
        <div className="flex items-center gap-6 mb-10">

          {/* Instagram */}
          <a
            href={"https://www.instagram.com/samarth_herbal_/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="group relative p-3 rounded-full transition-all duration-300 hover:-translate-y-1 hover:scale-110 animate-[floatIcon_4s_ease-in-out_infinite]">

              <FaInstagram
                size={22}
                color="var(--color-primary)"
                className="relative z-10"
              />

              {/* Glow */}
              <span className="absolute inset-0 rounded-full bg-(--color-primary) opacity-0 group-hover:opacity-15 blur-3xl transition duration-300">
              </span>
            </button>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/SaritaHerbalcure"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="group relative p-3 rounded-full transition-all duration-300 hover:-translate-y-1 hover:scale-110 animate-[floatIcon_4s_ease-in-out_infinite]">

              <FaFacebook
                size={22}
                color="var(--color-primary)"
                className="relative z-10"
              />

              <span className="absolute inset-0 rounded-full bg-(--color-primary) opacity-0 group-hover:opacity-20 blur-2xl transition duration-300">
              </span>
            </button>
          </a>

          {/* Mail */}
          <button className="group relative p-3 rounded-full transition-all duration-300 hover:-translate-y-1 hover:scale-110 animate-[floatIcon_4s_ease-in-out_infinite]">

            <Mail
              size={22}
              color="var(--color-primary)"
              className="relative z-10"
            />

            <span className="absolute inset-0 rounded-full bg-(--color-primary) opacity-0 group-hover:opacity-20 blur-2xl transition duration-300">
            </span>
          </button>

        </div>

        {/* Bottom */}
        <div className="w-full pt-6 text-sm text-(--text)/50">
          © 2026 Samarth Herbal. All rights reserved.
        </div>

      </div>
    </footer >
  );
}

export default Footer;