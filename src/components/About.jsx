import React from 'react';
import DP1 from '../../assets/DP1.png'

const About = ({ scrollToSection }) => {
  const experienceData = [
    {
      title: "Full-Stack Developer",
      company: "Techub – ImpactSuite.AI (AppSpace)",
      period: "Mar 2026 – Present",
      achievements: [
        "Shipped 10 production releases end-to-end in 3 months — 6 full-stack mobile apps (React Native + Spring Boot + Next.js admin panels) and 4 Next.js marketing sites — across food-tech, spiritual-tech, wellness, fintech, sales-CRM, and productivity verticals",
        "Built 120+ REST endpoints across 5 Spring Boot 3.x backends (Java 17 & 21) with JWT auth, Flyway versioned migrations, and a layered Controller→Service→Repository→Mapper architecture",
        "Delivered ~65 mobile screens across React Native + Expo (SDK 54/55) apps with offline-first design, biometric authentication, push notifications, and in-app purchase subscriptions",
        "Integrated 5 AI/ML providers (OpenAI GPT-4o, Google Gemini 2.5 Flash, Groq Llama 3.3 70B, Sarvam AI, custom OpenCV OCR) with multi-provider fallback chains for resilience",
        "Engineered Velocity CRM's voice-to-structured-data pipeline — Sarvam AI transcribes a sales agent's spoken daily report and Gemini 2.5 Flash parses the free-form transcript into typed CRM metrics, per-metric commentary and a summary, including bilingual English/Hindi spelled-out number resolution for Indian field-sales users",
        "Built AI receipt scanning for the expense tracker — a Google Gemini vision pipeline that turns a photographed bill or PDF into strict structured JSON (vendor, invoice date, tax, totals, line items) and auto-fills the expense form, backed by dynamic JPA Criteria Specification filtering, duplicate-bill detection, and CSV export",
        "Implemented end-to-end AES-256-GCM encryption with PIN-derived keys for Talk2Diary — the server stores only ciphertext (IV + auth tag) and never sees plaintext journal entries",
        "Built localization for 11 Indian languages via Sarvam Saaras v3 voice STT, plus 6-language UI translations across React Native i18n",
        "Integrated Apple StoreKit 2 and Google Play Billing with backend signed-JWS receipt verification, including TestFlight ↔ Production environment handling",
        "Designed MySQL 8 schemas with Flyway migrations, JPA/Hibernate entities, soft deletes, audit columns, and 15-char public unique-key identifiers",
        "Built 5 Next.js 16 admin dashboards (App Router + Server Components + Server Actions + Turbopack) with HttpOnly-cookie JWT auth, user CRUD, plan management, and analytics views",
        "Implemented role-based access control across Admin / Manager / Agent tiers with Spring Security — gating both API endpoints and distinct in-app navigation stacks — over a timeline-audited reporting domain with a read-optimised database view for aggregate queries",
        "Shipped 4 Next.js 16 marketing and compliance sites (React 19, Tailwind v4, Framer Motion) totalling 20+ static-rendered pages — per-route typed Metadata API SEO with OpenGraph cards, flash-free pre-paint dark/light theming, route-level Suspense skeleton loaders, and theme-aware screenshot/video media",
        "Set up Expo Geofencing for real-time darshan-arrival notifications in DarshanMitra, plus Mixpanel analytics with no-PII device-hash tracking"
      ]
    },
    {
      title: "Frontend Developer (Intern)",
      company: "Remote",
      period: "Jan 2025 – Oct 2025",
      achievements: [
        "Architected scalable, high-performance frontend components for CRM and LMS platforms using ReactJS and Tailwind CSS",
        "Leveraged React Hooks (useState, useEffect, useContext) for optimized state management, component reusability, and lifecycle handling",
        "Delivered key business modules — Leads, Study Scheduler, HR Interviews, Service Exchange — enhancing overall workflow efficiency",
        "Built interactive, data-driven dashboards, calendars, and dynamic forms supporting real-time updates and user feedback",
        "Designed mobile-first, fully responsive UI layouts ensuring seamless performance across devices and screen sizes",
        "Integrated RESTful APIs in collaboration with backend teams via Figma and Postman, aligning design with functionality",
        "Implemented robust form validation, structured error handling, and conditional rendering for a smooth user experience",
        "Integrated omnichannel communication tools (Email, SMS, WhatsApp, Calls, Meets) directly within the CRM interface",
        "Contributed to Agile development cycles through code reviews, sprint planning, and continuous UI/UX refinements using GitHub"
      ]
    },
    {
      title: "Frontend Developer (Intern)",
      company: "Remote",
      period: "May 2024 – Nov 2024",
      achievements: [
        "Provided ongoing frontend support and maintenance for multiple web projects built with ReactJS and Tailwind CSS",
        "Identified, debugged, and resolved UI and functional issues across applications",
        "Collaborated cross-functionally to reproduce, document, and fix bugs reported by QA or end users",
        "Refactored and modularized legacy components to improve readability, accessibility, and cross-browser compatibility",
        "Used React Hooks (useState, useEffect, useRef) to troubleshoot state-related issues and enhance component reliability",
        "Worked closely with designers via Figma to align frontend changes with updated design specifications",
        "Participated in code reviews, bug-tracking sessions, and sprint discussions to maintain code quality"
      ]
    }
  ];

  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech) in Electronics and Communication Engineering",
      institution: "B.V.C Engineering College",
      location: "Odalarevu",
      score: "CGPA: 6.3",
      period: ""
    },
    {
      degree: "Higher Secondary (Intermediate)",
      institution: "Narayana Junior College",
      location: "Razole",
      score: "Percentage: 64%",
      period: ""
    },
    {
      degree: "High School",
      institution: "Z.P.H School",
      location: "Kesanapalli",
      score: "CGPA: 9.5",
      period: ""
    }
  ];

  const certifications = [
    {
      name: "Meta Front End Developer Professional Certificate",
      issuer: "Meta",
      year: "2024"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gray-200/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-gray-200/30 rounded-full blur-xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm text-black uppercase tracking-wider font-semibold mb-2">Get To Know More</p>
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            About Me
          </h1>
          <div className="w-20 h-1 bg-black mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left Sidebar - Profile, Education & Certifications */}
          <div className="lg:col-span-1 space-y-8">
            {/* Profile Image & Basic Info */}
            <div className="flex flex-col items-center">
              <div className="relative group">
                <div className="absolute -inset-4 overflow-hidden bg-gray-200 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <img 
                  src={DP1}
                  alt="Profile" 
                  className="relative w-64 h-64 rounded-full object-cover shadow-2xl border-4 border-white z-10 transform group-hover:scale-105 transition duration-300"
                />
              </div>
              
              <div className="mt-8 text-center">
                <h2 className="text-2xl font-bold text-black mb-2">Satya</h2>
                <p className="text-black font-medium mb-4">Frontend Developer</p>
                <p className="text-gray-700 leading-relaxed max-w-md">
                  Passionate about creating intuitive, visually appealing, and user-friendly web experiences.
                  Transforming ideas into dynamic digital solutions with creativity and technical expertise.
                </p>
              </div>
            </div>

            {/* Education Section */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-black mb-4 flex items-center">
                <span className="w-2 h-6 bg-black rounded-full mr-3"></span>
                Education
              </h3>
              <div className="space-y-4">
                {educationData.map((edu, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-4 border border-gray-200 transition-all duration-300 hover:shadow-md">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-black text-sm leading-tight">{edu.degree}</h4>
                      <div className="flex items-center text-xs text-gray-700">
                        <span className="font-medium">{edu.institution}</span>
                        <span className="mx-2">•</span>
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-white text-black rounded-full text-xs font-medium border border-gray-300">
                          {edu.score}
                        </span>
                        <span className="px-2 py-1 bg-white text-black rounded-full text-xs font-medium border border-gray-300">
                          {edu.period}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-black mb-4 flex items-center">
                <span className="w-2 h-6 bg-black rounded-full mr-3"></span>
                Certifications
              </h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-xs">✓</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-black text-sm leading-tight">{cert.name}</h4>
                        <p className="text-gray-700 text-xs">{cert.issuer} • {cert.year}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content Area - Experience Only */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-black mb-8 flex items-center">
                <span className="w-3 h-8 bg-black rounded-full mr-3"></span>
                Work Experience
              </h2>

              <div className="space-y-8">
                {experienceData.map((job, index) => (
                  <div key={index} className="group">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-black group-hover:text-gray-700 transition-colors">
                          {job.title}
                        </h3>
                        <p className="text-gray-700 font-medium">{job.company}</p>
                      </div>
                      <span className="inline-block mt-2 md:mt-0 px-3 py-1 bg-black text-white rounded-full text-sm font-medium">
                        {job.period}
                      </span>
                    </div>
                    <ul className="space-y-3">
                      {job.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start text-gray-700 leading-relaxed">
                          <span className="text-black mr-3 mt-1.5 flex-shrink-0">•</span>
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    {index < experienceData.length - 1 && (
                      <div className="border-b border-gray-200 my-6"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Arrow */}
        <div className="text-center mt-16">
          <button
            onClick={() => scrollToSection('skills')}
            className="group inline-flex flex-col items-center text-black hover:text-gray-700 transition-all duration-300 transform hover:-translate-y-1"
          >
            <span className="text-sm font-medium mb-2">View Skills</span>
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
              <svg className="w-4 h-4 text-white transform group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
