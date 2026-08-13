import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-black text-white relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs text-gray-400 uppercase tracking-[0.3em] font-medium mb-4">
            04 — Let's Talk
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Have a role I'd be a fit for? <br />
            <span className="italic font-serif font-normal text-gray-300">
              I'd love to hear about it.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-gray-400 leading-relaxed">
            Currently open to frontend roles — full-time, contract, or remote.
            The quickest way to reach me is email; LinkedIn works too.
          </p>
        </div>

        {/* Contact rows */}
        <div className="border-t border-white/15">
          <a
            href="mailto:Satya1Adabala@gmail.com"
            className="group flex items-center justify-between py-6 border-b border-white/15 hover:pl-2 transition-all duration-300"
          >
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Email</p>
              <p className="text-xl md:text-2xl font-medium">Satya1Adabala@gmail.com</p>
            </div>
            <span className="text-2xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/satya1adabala/"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between py-6 border-b border-white/15 hover:pl-2 transition-all duration-300"
          >
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">LinkedIn</p>
              <p className="text-xl md:text-2xl font-medium">linkedin.com/in/satya1adabala</p>
            </div>
            <span className="text-2xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </a>

          <a
            href="https://github.com/adabalasatya"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between py-6 border-b border-white/15 hover:pl-2 transition-all duration-300"
          >
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">GitHub</p>
              <p className="text-xl md:text-2xl font-medium">github.com/adabalasatya</p>
            </div>
            <span className="text-2xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </a>
        </div>

        {/* Availability badge */}
        <div className="mt-12 inline-flex items-center gap-3 px-4 py-2 border border-white/20 rounded-full">
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-60 animate-ping"></span>
            <span className="relative inline-flex w-2 h-2 rounded-full bg-white"></span>
          </span>
          <span className="text-sm text-gray-300">Available for new opportunities — 2026</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
