import React from 'react';

const Footer = ({ scrollToSection }) => {
  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Work' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-black text-white px-6 py-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-white rounded-full"></span>
          <span className="text-lg font-bold tracking-[0.25em]">SATYA</span>
        </div>

        <nav>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm text-gray-400 hover:text-white transition"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-xs text-gray-500 uppercase tracking-widest">
          &copy; 2026 — Built with care
        </p>
      </div>
    </footer>
  );
};

export default Footer;
