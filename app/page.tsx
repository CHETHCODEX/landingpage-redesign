"use client";

import { useEffect } from "react";

export default function Home() {

  // 🌙 Auto-detect system dark mode
  useEffect(() => {
    const html = document.documentElement;
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      html.classList.add("dark");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-black relative overflow-hidden fade-in">

      {/* Floating Background Blobs */}
      <div className="absolute top-0 left-20 w-72 h-72 bg-purple-300 opacity-30 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-pink-300 opacity-30 rounded-full blur-3xl animate-float-fast"></div>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 shadow-sm bg-white/70 backdrop-blur-md dark:bg-gray-800/70 z-10 relative transition">
        <h1 className="text-2xl font-bold text-purple-700 dark:text-purple-400">
          MyWebsite
        </h1>

        <div className="flex items-center space-x-6 text-gray-700 dark:text-gray-200 font-medium">

          {/* Nav Links with Underline Hover */}
          {["Home", "About", "Contact"].map((name) => (
            <a key={name} href="#" className="relative group transition">
              {name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}

          {/* 🌙 Dark Mode Toggle */}
          <button
            onClick={() => {
              const html = document.documentElement;
              if (html.classList.contains("dark")) html.classList.remove("dark");
              else html.classList.add("dark");
            }}
            className="px-3 py-1 border rounded-full text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            🌙
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center mt-24 px-5 relative z-10" data-aos="fade-up">
        <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
          Modern Landing Page
        </h2>

        <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          Redesigned with animations, gradients, glass effects, and responsive layout using Tailwind CSS + Next.js.
        </p>

        <button
          className="mt-8 px-8 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-purple-600 to-pink-500 shadow-lg hover:scale-110 transition-all animate-pulse-custom"
          onClick={() => {
            document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Explore More
        </button>
      </section>

      {/* Features Section */}
      <section id="features" className="mt-28 px-6">
        <h3 className="text-center text-3xl font-bold text-gray-800 dark:text-gray-200 mb-10">
          Features
        </h3>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Fast Performance", desc: "Optimized & blazing fast.", icon: "⚡" },
            { title: "Beautiful UI", desc: "Modern, clean & attractive.", icon: "🎨" },
            { title: "Responsive Design", desc: "Looks great on all devices.", icon: "📱" },
          ].map((f, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              className="p-6 rounded-xl shadow-md bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm hover:shadow-xl hover:scale-105 transition border-2 border-transparent hover:border-purple-500 hover:dark:border-pink-400"
            >
              <div className="text-4xl">{f.icon}</div>
              <h4 className="text-xl font-semibold text-purple-700 dark:text-purple-400 mt-2">
                {f.title}
              </h4>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mt-24 px-6" data-aos="fade-up">
        <h3 className="text-center text-3xl font-bold text-gray-800 dark:text-gray-200 mb-10">
          Why Choose Us?
        </h3>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "High Quality Standards",
            "Secure & Reliable System",
            "Built Using Modern Technologies",
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-white/80 dark:bg-gray-800/80 shadow-lg rounded-xl border hover:scale-105 transition"
            >
              <h4 className="text-xl font-semibold text-purple-700 dark:text-purple-400">
                {item}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mt-24 px-6" data-aos="fade-up">
        <h3 className="text-center text-3xl font-bold text-gray-800 dark:text-gray-200 mb-10">
          Testimonials
        </h3>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: "Rahul M.",
              feedback: "This landing page looks absolutely stunning! Clean and modern.",
            },
            {
              name: "Aisha K.",
              feedback: "Amazing redesign with smooth animations and perfect layout!",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl border"
            >
              <p className="text-gray-700 dark:text-gray-300 italic">
                “{t.feedback}”
              </p>
              <h4 className="mt-4 font-semibold text-purple-700 dark:text-purple-400">
                - {t.name}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 mt-20 text-gray-600 dark:text-gray-300 border-t dark:border-gray-700">
        <p>© {new Date().getFullYear()} MyWebsite. All rights reserved.</p>

        <div className="flex justify-center space-x-6 mt-4 text-2xl">
          <a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition">💼</a>
          <a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition">🐦</a>
          <a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition">📸</a>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-pink-500 text-white p-3 rounded-full shadow-xl hover:scale-110 transition z-50"
      >
        ⬆️
      </button>

    </div>
  );
}
