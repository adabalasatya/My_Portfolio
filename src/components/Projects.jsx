import React, { useState } from 'react';

const Projects = ({ scrollToSection }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: 'CheckEat — AI Food Nutrition Scanner',
      tech: 'React Native, Spring Boot, Next.js, MySQL, Multi-Provider AI',
      link: '#',
      category: 'production',
      description: 'Personalized food-label scanner for Indian users. Scans packaged food and scores it against the user\'s health profile (allergies, diabetes, pregnancy, RDA targets) using ICMR-NIN nutrition standards and FSSAI additive safety data.',
      features: [
        '17-screen Expo mobile app with 13-step health onboarding',
        '22 REST endpoints + 3-provider AI fallback (Gemini, Groq, GPT-4o)',
        'OpenCV background removal + Twilio OTP + StoreKit / Play Billing',
        'Next.js 16 admin panel with HttpOnly-cookie JWT'
      ],
      icon: '🥗'
    },
    {
      title: 'DarshanMitra — Hindu Pilgrimage Platform',
      tech: 'React Native, Spring Boot WebFlux, Next.js, MySQL, Geofencing',
      link: '#',
      category: 'production',
      description: 'Plan-Pray-Preserve app for Hindu temple pilgrims — itinerary planning, group trips with invite codes, location-based darshan alerts, and AI spiritual guidance in 6 Indian languages.',
      features: [
        '20-screen app with React Native Maps + Expo Geofencing',
        '57 REST endpoints, 23 JPA entities, 15 Flyway migrations',
        '6-language i18n + Sarvam AI voice STT for 22 Indian languages',
        '3-provider AI chat fallback (Gemini → OpenAI → Groq)'
      ],
      icon: '🛕'
    },
    {
      title: 'Talk2Diary — Privacy-First Voice AI Journal',
      tech: 'React Native, Spring Boot (Java 21), Next.js, AES-256-GCM',
      link: '#',
      category: 'production',
      description: 'Voice-first journaling app where users speak entries that are transcribed, mood-analyzed by AI, and stored end-to-end encrypted. The server never sees plaintext — only ciphertext, IV, and auth tag.',
      features: [
        '28-screen Expo SDK 55 app with biometric + PIN gate',
        'AES-256-GCM E2E encryption with PIN-derived keys',
        '11-language Sarvam Saaras v3 STT + GPT-4o mood analysis',
        'StoreKit 2 + Apple App Store Server API JWS verification'
      ],
      icon: '📔'
    },
    {
      title: 'Zen Notes — Voice-First Note Taking',
      tech: 'React Native, Expo, Sarvam AI STT, On-Device Storage',
      link: '#',
      category: 'production',
      description: 'Voice-first note-taking app — speak, and it becomes a written note. Built for calm, friction-free capture without the tap-tap of a keyboard.',
      features: [
        'One-tap voice capture with Sarvam AI speech-to-text',
        'Offline-first with on-device storage & sync',
        'Biometric + PIN lock for private notes',
        'Notes + tasks hybrid with quick tagging'
      ],
      icon: '🎙️'
    },
    {
      title: 'AI Receipt & Expense Tracker',
      tech: 'React Native (Expo), TypeScript, Spring Boot 3, Java 21, MySQL, Google Gemini',
      link: '#',
      category: 'production',
      description: 'Cross-platform expense manager where users photograph a bill and a Gemini vision pipeline extracts vendor, date, tax, totals and line items as structured JSON — removing manual entry entirely.',
      features: [
        'Gemini receipt OCR (image / PDF) → auto-filled expense form',
        'JWT + refresh tokens with SMS-OTP login (SMSCountry)',
        'Dynamic JPA Specification filtering, Flyway migrations, Docker',
        'Custom SVG donut / bar analytics across 3 ledgers + CSV export'
      ],
      icon: '🧾'
    },
    {
      title: 'Velocity CRM — Voice-Driven Sales Tracking',
      tech: 'React Native (Expo), TypeScript, Spring Boot, Java 21, MySQL, Sarvam AI, Google Gemini',
      link: '#',
      category: 'production',
      description: 'Sales activity CRM where agents speak their daily report — Sarvam AI transcribes and Gemini 2.5 Flash parses the free-form speech into structured metrics, per-metric commentary and a summary, replacing a multi-field form with one spoken sentence.',
      features: [
        'Voice → structured CRM fields (calls, interested, follow-ups)',
        'Bilingual number parsing — "twenty five" / "पच्चीस" → 25',
        '3-tier RBAC (Admin / Manager / Agent) + JWT & SMS-OTP auth',
        'Period-filtered analytics on custom SVG charts, no chart lib'
      ],
      icon: '📞'
    },
    {
      title: 'CheckEat.com — Product Marketing Site',
      tech: 'Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion',
      link: 'https://checkeat-app.vercel.app/',
      category: 'websites',
      description: '11-page marketing and compliance site (~3.8K LOC) for the CheckEat mobile app — home, features, pricing, help, status, plus the privacy / terms / data-deletion set — fully static-rendered on the Next.js 16 App Router.',
      features: [
        'Flash-free dark / light theming via a pre-paint boot script',
        'Theme-aware screenshots & MP4 demos (ThemedScreen)',
        'Typed Metadata API SEO + OpenGraph / Twitter cards',
        'Route-level skeleton loaders + Framer Motion scroll reveals'
      ],
      icon: '🖥️'
    },
    {
      title: 'InnerGuide.app — Product Marketing Site',
      tech: 'Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4',
      link: 'https://innerguide-app.vercel.app/',
      category: 'websites',
      description: '9-page editorial site (~2.3K LOC) for an AI reflection companion, with a calm typography-led system on Playfair Display + Inter. Content architecture covers the six scripture traditions, the daily practice, and how the product relates to therapy.',
      features: [
        'Per-route metadata exports — unique SEO title per page',
        'Zero-flash theme persistence, try/catch-guarded storage',
        'Scroll-aware sticky header with blurred surface past 8px',
        'CSS-only page-veil transitions — no extra dependencies'
      ],
      icon: '🪔'
    },
    {
      title: 'Talk2Diary — Product Website',
      tech: 'Next.js, React, TypeScript, Tailwind CSS',
      link: 'https://talk2diary.vercel.app/',
      category: 'websites',
      description: 'Marketing site for the voice-first journaling app — speak your day, get an automatic transcript in your own language, tag it with a mood, and read it back as diary pages.',
      features: [
        'Responsive, SEO-optimised marketing pages',
        'Product story: record → transcribe → mood-tag → read back',
        'Pricing, privacy, terms and support sections',
        'Next.js + TypeScript + Tailwind CSS'
      ],
      icon: '🌐'
    },
    {
      title: 'NodesMap — Offline-First Notes & Productivity Workspace',
      tech: 'Next.js 16, React 19, TypeScript, Tailwind v4, Supabase, Vitest',
      link: 'https://nodesmap.vercel.app/',
      category: 'personal',
      description: 'Full-stack hierarchical notes workspace (~13K LOC TypeScript) with nested folders, a custom rich-text / markdown editor, drag-and-drop organisation, daily planner, Pomodoro timer, and a radial SVG mind-map.',
      features: [
        '1,200-line typed useReducer store, 40+ union actions',
        'Offline-first with field-level Supabase merge — no data loss',
        'Email + Google OAuth (manual PKCE) with per-user RLS',
        '369 Vitest / RTL tests; folder analytics O(n²) → O(n)'
      ],
      icon: '🗺️'
    },
    {
      title: 'Margda Workplace — CRM + LMS Platform',
      tech: 'React, Tailwind CSS, JavaScript, REST APIs',
      link: 'https://margda-old-desgin-react-js.vercel.app/',
      category: 'personal',
      description: 'Comprehensive CRM and LMS platform with multiple interactive modules built during my internship.',
      features: ['Secure authentication', 'Leads management', 'Study scheduler', 'HR interview module'],
      icon: '🚀'
    },
    {
      title: 'Suby — Food Delivery Clone',
      tech: 'React, Node.js, MongoDB, Express',
      link: 'https://swiggy-clone-frontend-react.vercel.app/',
      category: 'personal',
      description: 'Full-stack food delivery platform with restaurant listings, cart, and order tracking.',
      features: ['Restaurant listings', 'User authentication', 'Cart system', 'Order tracking'],
      icon: '🍕'
    },
    {
      title: 'Little Lemon Restaurant',
      tech: 'React, CSS3, JavaScript',
      link: 'https://little-lemon-restuarant-website.vercel.app/',
      category: 'personal',
      description: 'Modern restaurant website with responsive design and a clean, performance-tuned UI.',
      features: ['Fully responsive', 'Modern components', 'Clean UI', 'Performance optimized'],
      icon: '🍋'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'production', name: 'Production @ AppSpace' },
    { id: 'websites', name: 'Websites' },
    { id: 'personal', name: 'Personal / Earlier' }
  ];

  const categoryLabels = {
    production: 'Production',
    websites: 'Website',
    personal: 'Personal'
  };

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-6 bg-white relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-gray-100/40 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gray-100/40 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs text-gray-500 uppercase tracking-[0.3em] font-medium mb-4">
            03 — Selected Work
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              Ten products <br className="hidden md:block" />
              <span className="italic font-serif font-normal">shipped</span> in three months.
            </h1>
            <p className="text-gray-600 max-w-md leading-relaxed">
              Production work from my role at AppSpace — full-stack apps with
              React Native and Spring Boot, plus the Next.js marketing sites
              that ship alongside them — and a few personal builds.
            </p>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-black/10 pb-6">
          <span className="text-xs uppercase tracking-widest text-gray-500 mr-4">Filter</span>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeFilter === category.id
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-black hover:text-black'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid - Equal height cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-200 overflow-hidden flex flex-col h-full"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-xl mb-3">
                    {project.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-black text-white">
                    {categoryLabels[project.category]}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-black mb-3 leading-tight group-hover:text-gray-700 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="px-6 mb-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.split(', ').slice(0, 3).map(tech => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-gray-100 text-black rounded-lg text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.split(', ').length > 3 && (
                    <span className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-medium">
                      +{project.tech.split(', ').length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Features List - This section will grow to fill space */}
              <div className="px-6 mb-4 flex-grow">
                <ul className="space-y-2">
                  {project.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <svg className="w-4 h-4 text-black mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button - Fixed at bottom */}
              <div className="px-6 pb-6 mt-auto">
                {project.link && project.link !== '#' ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-20 w-full bg-black text-white text-center py-3 rounded-xl font-medium hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <span>View Project</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ) : (
                  <div className="relative z-20 w-full text-center py-3 rounded-xl font-medium border border-dashed border-black/30 text-gray-600 text-sm flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-black rounded-full"></span>
                    <span>Internal company product</span>
                  </div>
                )}
              </div>

              {/* Hover overlay - non-interactive so clicks pass through */}
              <div
                className={`absolute inset-0 bg-black/5 rounded-2xl transition-opacity duration-500 pointer-events-none ${
                  hoveredProject === index ? 'opacity-100' : 'opacity-0'
                }`}
              ></div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-20 border-t border-black/10 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-gray-600">
            More work on GitHub — including older experiments and ongoing builds.
          </p>
          <a
            href="https://github.com/adabalasatya"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-medium text-black"
          >
            <span className="border-b border-black pb-0.5">Visit GitHub</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
