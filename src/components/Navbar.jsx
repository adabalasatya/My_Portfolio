import React, { useState, useEffect } from 'react';

const Navbar = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { id: 'about', label: 'About', num: '01' },
    { id: 'skills', label: 'Skills', num: '02' },
    { id: 'projects', label: 'Work', num: '03' },
    { id: 'contact', label: 'Contact', num: '04' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Desktop Nav */}
      <nav
        className={`hidden md:flex justify-between items-center px-10 lg:px-20 fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'py-4 bg-white/85 backdrop-blur-md border-b border-black/10'
            : 'py-6 bg-white border-b border-transparent'
        }`}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 group"
        >
          <span className="w-2 h-2 bg-black rounded-full"></span>
          <span className="text-xl font-bold tracking-[0.25em] text-black">SATYA</span>
        </button>

        <ul className="flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className="group flex items-baseline gap-1.5 text-black"
              >
                <span className="text-[10px] font-mono text-gray-500">{link.num}.</span>
                <span className="text-base font-medium border-b border-transparent group-hover:border-black pb-0.5 transition">
                  {link.label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav
        className={`md:hidden flex justify-between items-center px-6 py-5 fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-md border-b border-black/10' : 'bg-white'
        }`}
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-black rounded-full"></span>
          <span className="text-lg font-bold tracking-[0.25em] text-black">SATYA</span>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col space-y-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-black transition ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black transition ${isOpen ? 'opacity-0' : ''}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black transition ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          ></span>
        </button>

        {isOpen && (
          <ul className="absolute right-6 top-16 bg-white shadow-2xl rounded-xl w-56 py-3 border border-black/10">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => {
                    scrollToSection(link.id);
                    setIsOpen(false);
                  }}
                  className="flex w-full items-baseline gap-3 px-5 py-3 hover:bg-gray-100 transition text-left"
                >
                  <span className="text-[10px] font-mono text-gray-500">{link.num}</span>
                  <span className="text-black font-medium">{link.label}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;
