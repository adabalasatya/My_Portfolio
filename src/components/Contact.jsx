import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-8 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm text-gray-600 uppercase tracking-wider">Get in Touch</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2">Contact Me</h1>

        <div className="mt-12 flex flex-col md:flex-row justify-center gap-12">
          <div className="flex items-center gap-4">
            <img src="/assets/email.png" alt="Email" className="w-10 h-10" />
            <a href="mailto:Adabala1Satya@gmail.com" className="text-lg text-blue-600 hover:underline">
              Adabala1Satya@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <img src="/assets/linkedin.svg" alt="LinkedIn" className="w-10 h-8" />
            <a
              href="https://www.linkedin.com/in/satya1adabala/"
              target="_blank"
              rel="noreferrer"
              className="text-lg text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;