import React from 'react';

const SkillsSection = ({ scrollToSection }) => {
  const skills = {
    frontend: [
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'React' },
      { name: 'Next.js 16' },
      { name: 'React Native' },
      { name: 'Expo SDK 55' },
      { name: 'Tailwind CSS 4' },
      { name: 'Framer Motion' },
      { name: 'Zustand' },
      { name: 'Reanimated' },
      { name: 'React Navigation' },
      { name: 'Server Components' },
    ],
    backend: [
      { name: 'Java 17 / 21' },
      { name: 'Spring Boot 3.x' },
      { name: 'Spring Security' },
      { name: 'Spring Data JPA' },
      { name: 'Spring WebFlux' },
      { name: 'JWT (JJWT)' },
      { name: 'MySQL 8' },
      { name: 'Supabase (Postgres / RLS)' },
      { name: 'Flyway' },
      { name: 'Maven' },
      { name: 'Caffeine Cache' },
      { name: 'OpenCV' },
      { name: 'REST APIs' },
    ],
    aiAndIntegrations: [
      { name: 'OpenAI (GPT-4o)' },
      { name: 'Google Gemini' },
      { name: 'Groq (Llama 3.3)' },
      { name: 'Sarvam AI (STT)' },
      { name: 'Multi-Provider Fallback' },
      { name: 'Apple StoreKit 2' },
      { name: 'Google Play Billing' },
      { name: 'Twilio / SMSCountry' },
      { name: 'Google OAuth' },
      { name: 'Apple Sign-In' },
      { name: 'Expo Push / FCM / APNs' },
      { name: 'Mixpanel' },
    ],
    security: [
      { name: 'AES-256-GCM E2E' },
      { name: 'PIN-Derived Keys' },
      { name: 'Biometric Auth' },
      { name: 'HttpOnly Cookie JWT' },
      { name: 'Rate Limiting' },
      { name: 'CORS' },
      { name: 'Soft Deletes + Audit' },
      { name: 'Docker / Compose' },
      { name: 'Vitest + RTL' },
      { name: 'OpenAPI / Swagger' },
      { name: 'Git & GitHub' },
    ],
  };

  const Group = ({ label, items }) => (
    <div>
      <div className="flex items-baseline justify-between border-b border-black/10 pb-3 mb-6">
        <h3 className="text-sm uppercase tracking-[0.2em] font-semibold text-black">
          {label}
        </h3>
        <span className="text-xs text-gray-500 font-mono">
          {String(items.length).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
        </span>
      </div>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3">
        {items.map((skill) => (
          <li
            key={skill.name}
            className="group flex items-center text-[15px] text-gray-800 hover:text-black transition-colors"
          >
            <span className="w-1.5 h-1.5 bg-black rounded-full mr-3 transition-transform group-hover:scale-150"></span>
            <span className="border-b border-transparent group-hover:border-black/40 pb-0.5">
              {skill.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section id="skills" className="py-24 px-6 bg-white relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs text-gray-500 uppercase tracking-[0.3em] font-medium mb-4">
            02 — What I Work With
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
            The toolkit behind <br className="hidden md:block" />
            <span className="italic font-serif font-normal">ten shipped products</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-gray-600 leading-relaxed">
            I work across the whole stack — React Native &amp; Next.js on the
            front, Java Spring Boot on the back, and a layer of AI APIs in between.
            Below is what I reach for daily, grouped the way I actually use it.
          </p>
        </div>

        {/* Skills */}
        <div className="space-y-14">
          <Group label="Frontend & Mobile" items={skills.frontend} />
          <Group label="Backend & Database" items={skills.backend} />
          <Group label="AI / Auth / Integrations" items={skills.aiAndIntegrations} />
          <Group label="Security & Tooling" items={skills.security} />
        </div>

        {/* Footer link */}
        <div className="mt-20 flex items-center justify-between border-t border-black/10 pt-8">
          <p className="text-sm text-gray-500">
            Curious what I've shipped with these?
          </p>
          <button
            onClick={() => scrollToSection('projects')}
            className="group inline-flex items-center gap-2 text-sm font-medium text-black"
          >
            <span className="border-b border-black pb-0.5">View selected work</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
