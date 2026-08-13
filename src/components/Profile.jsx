import React from 'react';
import DP1 from '../../assets/DP.png';
import Resume from '../../assets/Resume.pdf';

const Profile = ({ scrollToSection }) => {
  return (
    <section className="min-h-screen flex items-center bg-white pt-24 pb-16 px-6 md:px-16 relative overflow-hidden">
      {/* Subtle grid backdrop */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      ></div>

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-12 gap-12 md:gap-16 items-center relative z-10">
        {/* Left — Text */}
        <div className="md:col-span-7 order-2 md:order-1">
          {/* Status line */}
          <div className="inline-flex items-center gap-2 mb-8 px-3 py-1 border border-black/15 rounded-full">
            <span className="w-1.5 h-1.5 bg-black rounded-full animate-pulse"></span>
            <span className="text-xs text-gray-700 uppercase tracking-widest">
              Currently @ AppSpace · Full-Stack
            </span>
          </div>

          <p className="text-gray-600 text-sm uppercase tracking-[0.25em] mb-4">
            01 — Hello
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-[1.05] tracking-tight">
            I'm Satya, <br />
            a <span className="italic font-serif font-normal">full-stack</span>{' '}
            developer.
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl leading-relaxed">
            Three months into my role at AppSpace, I've shipped seven production
            apps end-to-end — React Native on the front, Java Spring Boot on
            the back, Next.js admin panels and marketing sites in between. I
            care about the small details — the empty state, the offline edge
            case, the auth flow — because that's where products feel solid.
          </p>

          {/* Quick facts */}
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-gray-700">
            <span>
              <span className="text-black font-semibold">7</span> production apps
              shipped
            </span>
            <span className="hidden md:inline text-gray-300">/</span>
            <span>
              <span className="text-black font-semibold">120+</span> REST endpoints
            </span>
            <span className="hidden md:inline text-gray-300">/</span>
            <span>Based in India · Remote-friendly</span>
          </div>

          {/* Actions */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={Resume}
              download
              className="group inline-flex items-center justify-center gap-2 px-7 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition font-medium"
            >
              <span>Download CV</span>
              <span className="transition-transform group-hover:translate-y-0.5">↓</span>
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="group inline-flex items-center justify-center gap-2 px-7 py-3 border border-black text-black rounded-full hover:bg-black hover:text-white transition font-medium"
            >
              <span>Get in touch</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>

          {/* Socials */}
          <div className="mt-10 flex items-center gap-5">
            <span className="text-xs text-gray-500 uppercase tracking-widest">
              Find me
            </span>
            <div className="h-px w-8 bg-black/20"></div>
            <a
              href="https://www.linkedin.com/in/satya1adabala/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-gray-700 hover:text-black transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.063 2.063 0 1 1 0-4.126 2.063 2.063 0 0 1 0 4.126zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://github.com/adabalasatya"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-gray-700 hover:text-black transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 0 1 6.009 0c2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="mailto:Satya1Adabala@gmail.com"
              aria-label="Email"
              className="text-gray-700 hover:text-black transition text-sm border-b border-black/30 hover:border-black"
            >
              Satya1Adabala@gmail.com
            </a>
          </div>
        </div>

        {/* Right — Portrait */}
        <div className="md:col-span-5 order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative">
            {/* Geometric frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-black rounded-2xl"></div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-black/5 rounded-2xl"></div>
            <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden bg-gray-200">
              <img
                src={DP1}
                alt="Satya Adabala — Frontend Developer"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700"
              />
            </div>
            {/* Bottom caption */}
            <div className="mt-5 flex items-center justify-between text-[11px] text-gray-500 uppercase tracking-widest px-1">
              <span>Satya Adabala</span>
              <span>· 2026</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-gray-500">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="w-px h-8 bg-black/30 animate-pulse"></span>
      </div>
    </section>
  );
};

export default Profile;
