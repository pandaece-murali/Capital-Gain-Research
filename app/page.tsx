"use client";

import React, { useState } from "react";

// Telegram link configuration - fallback safe
const TELEGRAM_LINK = "https://t.me/cpgainsresearch";

// Fallback SVG graphic if external images are ever unreachable
const fallbackSvg =
  "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect fill='%230E441F' width='800' height='400'/%3E%3Ccircle cx='400' cy='200' r='120' fill='%23166A31' opacity='0.5'/%3E%3Cpath d='M300 240 L360 180 L420 220 L500 130' stroke='%2322C55E' stroke-width='8' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3Ccircle cx='500' cy='130' r='8' fill='%2322C55E'/%3E%3Ctext x='400' y='320' font-family='sans-serif' font-size='20' font-weight='bold' fill='%23ffffff' text-anchor='middle'%3ECAPITAL GAINS RESEARCH%3C/text%3E%3C/svg%3E";

const coverageItems = [
  {
    tag: "Market Trends",
    title: "Indian Stock Market Updates",
    desc: "Follow important developments, market news and updates related to Indian equity markets.",
    footer: "Regular Telegram Updates",
    img: "https://images.openai.com/static-rsc-4/Lt7LeQUaNbi7NY6om_7xJ-ljtwF93XyDBX7ZdVCPnecYHl2JDKvFsAODkw8ZEWTjl3YR_dYjZ1PvUnQj_GRlKgE9aChTA3B5sx9NOgGjzvRFJ-Na2F09J0YbUTu4hIcQPdadJa1UxMNumfP7W3ZQAgbDkj0AG8gF78V4E8D9f7hrUFA2lpYAN0iH_C_CjU0r?purpose=inline",
    alt: "Indian Stock Market Updates",
  },
  {
    tag: "Corporate Earnings",
    title: "Company Earnings & Announcements",
    desc: "Explore quarterly results, corporate announcements and company-related financial developments.",
    footer: "Quarterly & Financial Analysis",
    img: "https://images.openai.com/static-rsc-4/0tdWYgOliXtg9KhwlbhEgwtQ4gE4d3y5VENyGnECwuk_1EzWa0hSmajfFhYcgDVWz1U3LGSLpgN3SFCAJq_CBSp5Xbq_fKbeU1HGV6f0DB-RI00qd6uN6r0lDcVzfgW6x49ZMBBUXAG-ZdtDpA3AooQ-3XzM8iFsTwbzQNauFYc?purpose=inline",
    alt: "Company Earnings and Announcements",
  },
  {
    tag: "Primary Market",
    title: "IPO Information",
    desc: "Understand IPO announcements, company information and developments in the primary market.",
    footer: "Prospectus & Issue Details",
    img: "https://images.openai.com/static-rsc-4/ZGVOE87HdsM1WDU3wwSRRRtCxuNDcaA8zT_Ssr-xq_iSVOuaishBa61UHSGmOJZBpmPzzf3KIp87TSgXz5-xKdqK8oPqhCB4oHdMjG05XCc4utJfcgZ0mAe4Ir-3N65p2x9RHYeWs9gmNs0NI_TfP0wxw6iWRe6avcgOelMlsWE?purpose=inline",
    alt: "IPO Information and Prospectus",
  },
  {
    tag: "Price Action & Charts",
    title: "Technical Analysis Education",
    desc: "Explore price action, chart-reading methods, technical indicators and market analysis concepts.",
    footer: "Educational Insights",
    img: "https://images.openai.com/static-rsc-4/jrBsBTESip75aWHOMaudrhwIihigizF56hfNv7CRCEQhZNF2m4w3_UqEHaCkKyEhVGPs6kdf8w6htwH95snzXDVBzOwbZ6BmnwYUs-M3JnhhefcKCGAAff0YTQ-Pe-dXs-KGlPobLz5yY2Gi0510lzfhkP28XOWwrEyiSId-Npk?purpose=inline",
    alt: "Technical Analysis and Chart Education",
  },
  {
    tag: "Core Foundations",
    title: "Market Learning",
    desc: "Learn about financial market terminology, concepts and research-related topics through simplified explanations.",
    footer: "Simplified Explanations",
    img: "https://images.openai.com/static-rsc-4/DLmh9IVGFLBcYBToUK09Hov49PDu8qtLZIYMpOp99kmrqitDKeitmcUvKwqQKzMAviAWHhvE4dDXQtQ-Amllx1Sx-KE0duIFtjXg-fMYHwrPTkwuISeFBeqUXLRPskO5YQe2J0QNJ8q1hzg_JisiYH-LQjbDzh0uBQPAw84r-08?purpose=inline",
    alt: "Market Learning and Financial Education",
  },
];

const whyPoints = [
  "Indian stock market news and developments.",
  "Company earnings and corporate announcements.",
  "IPO-related information.",
  "Educational chart-reading content.",
  "Price action and technical analysis concepts.",
  "Simplified explanations of financial market topics.",
];

const approachItems = [
  {
    num: "01",
    title: "Research & Information",
    desc: "Review relevant market developments, company announcements and financial information.",
    tag: "Fact-Checked Data",
  },
  {
    num: "02",
    title: "Market Analysis",
    desc: "Explore financial market data, price action and technical analysis concepts.",
    tag: "Technical & Fundamental",
  },
  {
    num: "03",
    title: "Educational Insights",
    desc: "Understand market-related topics through accessible and informative content.",
    tag: "Simple & Accessible",
  },
];

export default function CapitalGainsLandingPage() {
  const [copied, setCopied] = useState(false);

  // Outbound tracking helper for Meta Pixel
  const handleTelegramClick = () => {
    if (
      typeof window !== "undefined" &&
      (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq
    ) {
      try {
        (window as unknown as { fbq: (...args: unknown[]) => void }).fbq(
          "track",
          "Lead",
          {
            content_name: "Telegram Channel Join",
            status: "clicked",
          }
        );
      } catch (err) {
        console.warn("Meta Pixel track error:", err);
      }
    }
  };

  const copyRegNumber = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText("INH000030986");
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFDFB] text-[#141A16] font-sans antialiased selection:bg-[#0E441F] selection:text-white pb-20 sm:pb-0">
      {/* Top Regulatory Compliance Banner */}
      <aside
        aria-label="SEBI Regulatory Status"
        className="bg-[#0E441F] text-white text-xs sm:text-sm py-1.5 px-4 text-center font-medium border-b border-[#166A31] flex flex-wrap items-center justify-center gap-2"
      >
        <span className="inline-flex items-center gap-1.5 bg-[#166A31] px-2 py-0.5 rounded-full text-[11px] uppercase tracking-wider font-semibold">
          <svg
            className="w-3.5 h-3.5 text-emerald-300"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z"
              clipRule="evenodd"
            />
          </svg>
          Official Disclosure
        </span>
        <span>
          SEBI Registered Research Analyst • Reg. No.:{" "}
          <strong className="tracking-wide text-emerald-200">INH000030986</strong>
        </span>
      </aside>

      {/* Main Navigation with Official Logo */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/Logo.jpeg"
              alt="Capital Gains Research Logo"
              className="h-10 sm:h-12 w-auto max-w-[130px] sm:max-w-[170px] object-contain rounded-lg shadow-2xs group-hover:scale-105 transition-transform"
            />
            <div className="hidden sm:flex flex-col">
              <span className="font-extrabold text-base lg:text-lg tracking-tight text-gray-950 leading-tight">
                CAPITAL GAINS
              </span>
              <span className="text-[11px] font-semibold tracking-widest text-[#0E441F] uppercase">
                RESEARCH
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-semibold text-gray-700">
            <a href="#about" className="hover:text-[#0E441F] transition-colors">
              About Us
            </a>
            <a href="#coverage" className="hover:text-[#0E441F] transition-colors">
              What We Cover
            </a>
            <a href="#why-us" className="hover:text-[#0E441F] transition-colors">
              Why Follow Us
            </a>
            <a href="#approach" className="hover:text-[#0E441F] transition-colors">
              Our Approach
            </a>
            <a href="#registration" className="hover:text-[#0E441F] transition-colors">
              SEBI Details
            </a>
          </nav>

          {/* Right Action: Direct Join Button */}
          <div className="flex items-center gap-3">
            <a
              href={TELEGRAM_LINK}
              onClick={handleTelegramClick}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0E441F] hover:bg-[#166A31] text-white text-xs sm:text-sm font-bold px-4 sm:px-5 py-2 rounded-xl transition-all shadow-sm hover:shadow active:scale-95 cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.3-.6.3l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.458c.538-.196 1.006.128.832.96z" />
              </svg>
              <span>Join Free Telegram Group</span>
            </a>
          </div>
        </div>
      </header>

      {/* 1. HERO SECTION (Compact spacing, logo badge removed) */}
      <section className="relative overflow-hidden pt-6 pb-8 sm:pt-8 sm:pb-12 bg-gradient-to-b from-[#F2F7F3] via-white to-[#FBFDFB]">
        {/* Subtle decorative grid background */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(#0E441F 1px, transparent 1px), radial-gradient(#0E441F 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            backgroundPosition: "0 0, 12px 12px",
          }}
        />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* SEBI Registered Research Analyst Badge */}
          <div className="inline-flex items-center gap-2 bg-[#E7F3E9] border border-[#BBDCBF] px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-[#0E441F] mb-4 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#0E441F] animate-ping" />
            <span className="uppercase tracking-wider">SEBI REGISTERED RESEARCH ANALYST</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight leading-[1.18] mb-3 max-w-4xl mx-auto">
            Indian Stock Market Updates, Explained Simply.
          </h1>

          {/* Subheading & Explanation */}
          <p className="text-sm sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-2 font-normal">
            Explore Indian stock market developments, company earnings, IPO announcements and educational insights into technical analysis.
          </p>

          <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto mb-6 leading-relaxed">
            Follow Capital Gains Research on Telegram for informative market updates and simplified explanations of important developments.
          </p>

          {/* Section 1 CTA: Hero Primary Action */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-5">
            <a
              href={TELEGRAM_LINK}
              onClick={handleTelegramClick}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0E441F] hover:bg-[#166A31] text-white text-sm sm:text-base font-bold px-7 py-3 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all group cursor-pointer"
            >
              <svg
                className="w-5 h-5 fill-white group-hover:scale-110 transition-transform"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.3-.6.3l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.458c.538-.196 1.006.128.832.96z" />
              </svg>
              <span>JOIN FREE TELEGRAM GROUP</span>
              <svg
                className="w-4 h-4 text-emerald-300 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>

          {/* Trust Credential Line */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-gray-600 bg-white/70 py-1.5 px-3 rounded-full border border-gray-200/80 w-fit mx-auto">
            <svg
              className="w-3.5 h-3.5 text-[#0E441F]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <span>SEBI Registered Research Analyst | Reg. No.: INH000030986</span>
            <button
              onClick={copyRegNumber}
              className="ml-1 text-[11px] text-[#0E441F] underline hover:text-[#166A31] font-bold cursor-pointer"
              title="Copy Registration Number"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>

          {/* Quick Stats / Highlights Bar */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 max-w-4xl mx-auto">
            <div className="bg-white p-3 rounded-xl border border-gray-200/90 shadow-2xs">
              <div className="text-lg sm:text-xl font-extrabold text-[#0E441F]">100% Free</div>
              <div className="text-[11px] sm:text-xs text-gray-600 font-medium">Educational Focus</div>
            </div>
            <div className="bg-white p-3 rounded-xl border border-gray-200/90 shadow-2xs">
              <div className="text-lg sm:text-xl font-extrabold text-[#0E441F]">Daily</div>
              <div className="text-[11px] sm:text-xs text-gray-600 font-medium">Market Updates</div>
            </div>
            <div className="bg-white p-3 rounded-xl border border-gray-200/90 shadow-2xs">
              <div className="text-lg sm:text-xl font-extrabold text-[#0E441F]">Primary</div>
              <div className="text-[11px] sm:text-xs text-gray-600 font-medium">IPO Research</div>
            </div>
            <div className="bg-white p-3 rounded-xl border border-gray-200/90 shadow-2xs">
              <div className="text-lg sm:text-xl font-extrabold text-[#0E441F]">Official</div>
              <div className="text-[11px] sm:text-xs text-gray-600 font-medium">SEBI Registered</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT US SECTION */}
      <section id="about" className="py-6 sm:py-10 bg-white border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-5">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#0E441F] bg-[#E7F3E9] px-2.5 py-0.5 rounded-full">
              About Capital Gains Research
            </span>
            <h2 className="text-xl sm:text-3xl font-extrabold text-gray-950 mt-2 tracking-tight">
              Making Market Information Easier to Understand.
            </h2>
          </div>

          <div className="bg-[#F8FAF8] rounded-xl p-5 sm:p-7 border border-[#E1EAE2] shadow-xs space-y-3.5 text-sm sm:text-base text-gray-700 leading-relaxed">
            <p className="font-semibold text-gray-900 text-base sm:text-lg">
              Capital Gains Research focuses on providing informative research and educational content related to the Indian stock market.
            </p>
            <p>
              We cover company announcements, quarterly earnings, IPO developments, market trends and technical analysis concepts to help readers better understand financial market information.
            </p>
            <p>
              Our approach focuses on research, information and simplified explanations of market-related developments.
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-3 text-xs sm:text-sm font-semibold text-gray-800 border-t border-gray-200">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#0E441F]" />
                SEBI Registered Research Analyst (Individual)
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#0E441F]" />
                Educational Research & Market Insights
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#0E441F]" />
                Policy & Regulations Conscious
              </div>
            </div>

            {/* Section 2 CTA: About Us */}
            <div className="pt-2 flex justify-center sm:justify-start">
              <a
                href={TELEGRAM_LINK}
                onClick={handleTelegramClick}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0E441F] hover:bg-[#166A31] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl shadow-sm hover:shadow transition-all cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.3-.6.3l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.458c.538-.196 1.006.128.832.96z" />
                </svg>
                <span>JOIN FREE TELEGRAM GROUP</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE COVER SECTION */}
      <section id="coverage" className="py-6 sm:py-10 bg-[#FAFBFA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-6">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#0E441F] bg-[#E7F3E9] px-2.5 py-0.5 rounded-full">
              What We Cover
            </span>
            <h2 className="text-xl sm:text-3xl font-extrabold text-gray-950 mt-2 tracking-tight">
              Explore Our Market Research & Educational Content.
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1.5">
              Structured breakdowns designed to make complex market data simple and accessible for everyone.
            </p>
          </div>

          {/* 5 Content Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {coverageItems.map((item, idx) => (
              <article
                key={idx}
                className={`bg-white rounded-xl overflow-hidden border border-gray-200/90 shadow-2xs hover:shadow-xs transition-all flex flex-col group ${idx === 4 ? "md:col-span-2 lg:col-span-2" : ""
                  }`}
              >
                <div className="relative h-40 sm:h-44 w-full overflow-hidden bg-gray-100">
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = fallbackSvg;
                    }}
                  />
                  <span className="absolute top-2.5 left-2.5 bg-[#0E441F] text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-2xs">
                    {item.tag}
                  </span>
                </div>
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-950 mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-[#0E441F] font-bold">
                    <span>{item.footer}</span>
                    <a
                      href={TELEGRAM_LINK}
                      onClick={handleTelegramClick}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:underline cursor-pointer"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Section 3 CTA: What We Cover */}
          <div className="mt-6 sm:mt-8 text-center">
            <a
              href={TELEGRAM_LINK}
              onClick={handleTelegramClick}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#0E441F] hover:bg-[#166A31] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl shadow-sm hover:shadow transition-all cursor-pointer"
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.3-.6.3l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.458c.538-.196 1.006.128.832.96z" />
              </svg>
              <span>JOIN FREE TELEGRAM GROUP FOR ALL UPDATES</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4. WHY FOLLOW CAPITAL GAINS RESEARCH */}
      <section id="why-us" className="py-6 sm:py-10 bg-white border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-6">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#0E441F] bg-[#E7F3E9] px-2.5 py-0.5 rounded-full">
              Value for Followers
            </span>
            <h2 className="text-xl sm:text-3xl font-extrabold text-gray-950 mt-2 tracking-tight">
              Market Information. Simplified for Better Understanding.
            </h2>
            <p className="text-xs sm:text-sm text-gray-700 mt-2 leading-relaxed">
              Our Telegram channel brings together informative content and market-related developments in one place.
            </p>
          </div>

          {/* Key Checklist Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5 mb-6">
            {whyPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F8FAF8] border border-gray-200/80 hover:border-[#BBDCBF] transition-colors"
              >
                <div className="w-5 h-5 rounded-full bg-[#0E441F] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-xs sm:text-sm font-semibold text-gray-900 leading-snug">
                  {point}
                </span>
              </div>
            ))}
          </div>

          {/* Section 4 CTA: Why Follow Us */}
          <div className="text-center">
            <a
              href={TELEGRAM_LINK}
              onClick={handleTelegramClick}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#0E441F] hover:bg-[#166A31] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl shadow-sm hover:shadow transition-all active:scale-98 cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.3-.6.3l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.458c.538-.196 1.006.128.832.96z" />
              </svg>
              <span>EXPLORE OUR FREE TELEGRAM GROUP</span>
            </a>
          </div>
        </div>
      </section>

      {/* 5. OUR APPROACH */}
      <section id="approach" className="py-6 sm:py-10 bg-[#F8FAF8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-6">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#0E441F] bg-[#E7F3E9] px-2.5 py-0.5 rounded-full">
              Our Methodology
            </span>
            <h2 className="text-xl sm:text-3xl font-extrabold text-gray-950 mt-2 tracking-tight">
              Research. Understand. Stay Informed.
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1.5">
              A structured, educational-first methodology designed for transparency and long-term financial awareness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-6">
            {approachItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-5 sm:p-6 rounded-xl border border-gray-200/90 shadow-2xs relative flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#E7F3E9] text-[#0E441F] flex items-center justify-center font-extrabold text-base mb-3">
                    {item.num}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-950 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-xs font-semibold text-[#0E441F]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0E441F]" />
                  {item.tag}
                </div>
              </div>
            ))}
          </div>

          {/* Section 5 CTA: Our Approach */}
          <div className="text-center">
            <a
              href={TELEGRAM_LINK}
              onClick={handleTelegramClick}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#0E441F] hover:bg-[#166A31] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl shadow-sm hover:shadow transition-all cursor-pointer"
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.3-.6.3l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.458c.538-.196 1.006.128.832.96z" />
              </svg>
              <span>JOIN OUR FREE TELEGRAM GROUP</span>
            </a>
          </div>
        </div>
      </section>

      {/* 6. CONNECT WITH US ON TELEGRAM (PRIMARY CONVERSION SECTION) */}
      <section className="py-8 sm:py-12 bg-gradient-to-br from-[#0E441F] via-[#092C14] to-[#0E441F] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3 backdrop-blur-xs">
            <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.3-.6.3l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.458c.538-.196 1.006.128.832.96z" />
            </svg>
          </div>

          <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight mb-2">
            Stay Connected With Capital Gains Research.
          </h2>

          <p className="text-xs sm:text-base text-emerald-100/90 max-w-2xl mx-auto mb-2 leading-relaxed">
            Explore market-related information, company updates and educational insights through our official Telegram channel.
          </p>
          <p className="text-xs sm:text-sm text-emerald-200/80 max-w-xl mx-auto mb-4">
            Join the channel to access our latest published content.
          </p>

          <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-3 py-1.5 text-xs text-emerald-200 mb-5 font-medium">
            Telegram channel: <strong className="text-white">Official Capital Gains Research channel</strong>
          </div>

          {/* Section 6 CTA: Connect With Us */}
          <div>
            <a
              href={TELEGRAM_LINK}
              onClick={handleTelegramClick}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-white text-[#0E441F] hover:bg-emerald-50 text-sm sm:text-base font-extrabold px-7 sm:px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-95 group cursor-pointer"
            >
              <svg className="w-5 h-5 fill-[#0E441F]" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.3-.6.3l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.458c.538-.196 1.006.128.832.96z" />
              </svg>
              <span>JOIN OUR TELEGRAM CHANNEL</span>
              <svg
                className="w-4 h-4 text-[#0E441F] group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>

          <div className="mt-4 text-[11px] sm:text-xs text-emerald-200/70">
            Free Educational Content • No Unsolicited Spam • Direct Market Insights
          </div>
        </div>
      </section>

      {/* 7. REGISTRATION DETAILS (NO PHONE, EMAIL, OR ADDRESS) */}
      <section id="registration" className="py-6 sm:py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-5">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#0E441F] bg-[#E7F3E9] px-2.5 py-0.5 rounded-full">
              Verified Regulatory Credentials
            </span>
            <h2 className="text-xl sm:text-3xl font-extrabold text-gray-950 mt-2">
              Registration Information
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Official entity records for Capital Gains Research under SEBI (Research Analysts) Regulations.
            </p>
          </div>

          <div className="border border-gray-300 rounded-xl overflow-hidden shadow-2xs bg-white mb-5">
            <div className="bg-[#0E441F] text-white p-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <img
                  src="/Logo.jpeg"
                  alt="Capital Gains Research"
                  className="h-9 w-auto rounded-lg bg-white p-0.5 object-contain"
                />
                <div>
                  <h3 className="font-extrabold text-base sm:text-lg">
                    Capital Gains Research
                  </h3>
                  <p className="text-[10px] sm:text-xs uppercase tracking-wider text-emerald-200 font-semibold">
                    SEBI REGISTERED RESEARCH ANALYST
                  </p>
                </div>
              </div>
              <div className="bg-[#166A31] px-2.5 py-1 rounded-md text-xs font-mono font-bold tracking-wider">
                INH000030986
              </div>
            </div>

            <div className="divide-y divide-gray-200">
              <div className="grid grid-cols-1 sm:grid-cols-3 p-3 sm:px-5 text-xs sm:text-sm bg-gray-50/50">
                <span className="font-bold text-gray-700">Details</span>
                <span className="sm:col-span-2 font-bold text-gray-900">Information</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 p-3 sm:px-5 text-xs sm:text-sm hover:bg-gray-50/50 transition-colors">
                <span className="font-semibold text-gray-600">Registration No.</span>
                <span className="sm:col-span-2 font-mono font-bold text-gray-950 flex items-center gap-2">
                  <span>INH000030986</span>
                  <button
                    onClick={copyRegNumber}
                    className="text-xs text-[#0E441F] underline font-sans font-bold hover:text-[#166A31] cursor-pointer"
                  >
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 p-3 sm:px-5 text-xs sm:text-sm hover:bg-gray-50/50 transition-colors">
                <span className="font-semibold text-gray-600">Registration Type</span>
                <span className="sm:col-span-2 text-gray-900 font-medium">Individual</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 p-3 sm:px-5 text-xs sm:text-sm hover:bg-gray-50/50 transition-colors">
                <span className="font-semibold text-gray-600">Regulatory Body</span>
                <span className="sm:col-span-2 text-gray-900 font-medium">
                  Securities and Exchange Board of India (SEBI)
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 p-3 sm:px-5 text-xs sm:text-sm hover:bg-gray-50/50 transition-colors">
                <span className="font-semibold text-gray-600">Compliance Category</span>
                <span className="sm:col-span-2 text-gray-900 font-medium">
                  Research Analyst (Regulations, 2014)
                </span>
              </div>
            </div>
          </div>

          {/* Section 7 CTA: Registration */}
          <div className="text-center">
            <a
              href={TELEGRAM_LINK}
              onClick={handleTelegramClick}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0E441F] hover:bg-[#166A31] text-white text-xs sm:text-sm font-bold px-6 py-2.5 rounded-xl shadow-sm hover:shadow transition-all cursor-pointer"
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.3-.6.3l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.458c.538-.196 1.006.128.832.96z" />
              </svg>
              <span>JOIN OFFICIAL TELEGRAM CHANNEL</span>
            </a>
          </div>
        </div>
      </section>

      {/* 8. REGULATORY DISCLAIMER */}
      <section className="py-6 sm:py-8 bg-[#F4F6F4] border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-4 sm:p-6 rounded-xl border border-gray-200 shadow-2xs space-y-3 mb-5">
            <div className="flex items-center gap-2 text-[#0E441F]">
              <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              <h3 className="font-extrabold text-sm sm:text-base text-gray-950 uppercase tracking-wider">
                Important Disclaimer
              </h3>
            </div>

            <div className="text-[11px] sm:text-xs text-gray-600 space-y-2 leading-relaxed">
              <p>
                Capital Gains Research is a SEBI Registered Research Analyst (Registration No.: INH000030986).
              </p>
              <p>
                The information and research content shared through this platform are subject to applicable SEBI regulations and are intended for informational and educational purposes.
              </p>
              <p>
                Market-related information, research and analysis should not be considered a guarantee of future performance. Investments in securities markets are subject to market risks. Past performance is not indicative of future results.
              </p>
              <p>
                Investors should read all relevant documents carefully and consider their financial objectives and risk tolerance before making investment decisions.
              </p>
              <p>
                SEBI registration does not guarantee the performance of the Research Analyst or assure returns to investors. Please refer to the applicable terms, disclosures and research-related disclaimers before relying on any published research.
              </p>
            </div>
          </div>

          {/* Section 8 CTA: Disclaimer Area */}
          <div className="text-center">
            <a
              href={TELEGRAM_LINK}
              onClick={handleTelegramClick}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0E441F] hover:bg-[#166A31] text-white text-xs sm:text-sm font-bold px-6 py-2.5 rounded-xl shadow-2xs hover:shadow-xs transition-all cursor-pointer"
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.3-.6.3l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.458c.538-.196 1.006.128.832.96z" />
              </svg>
              <span>JOIN FREE TELEGRAM GROUP</span>
            </a>
          </div>
        </div>
      </section>

      {/* 9. FOOTER (NO PHONE, EMAIL, OR ADDRESS) */}
      <footer className="bg-[#092C14] text-gray-300 py-6 sm:py-8 border-t border-[#166A31]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
            {/* Col 1: Identity & Logo */}
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <img
                  src="/Logo.jpeg"
                  alt="Capital Gains Research Logo"
                  className="h-9 w-auto rounded-lg bg-white p-0.5 object-contain"
                />
                <span className="font-extrabold text-base sm:text-lg text-white tracking-tight">
                  CAPITAL GAINS RESEARCH
                </span>
              </div>
              <p className="text-xs text-gray-400 font-semibold mb-0.5">
                SEBI Registered Research Analyst
              </p>
              <p className="text-xs text-emerald-400 font-mono font-medium">
                Reg. No.: INH000030986
              </p>
              <p className="text-xs text-gray-400 mt-1.5">
                Educational Market Insights & Research
              </p>
            </div>

            {/* Col 2: Official Telegram Channel */}
            <div>
              <h4 className="font-bold text-xs sm:text-sm text-white uppercase tracking-wider mb-2">
                Official Telegram
              </h4>
              <p className="text-xs text-gray-300 leading-relaxed mb-3">
                Access market updates, earnings breakdowns, IPO observations, and educational chart analysis.
              </p>
              <a
                href={TELEGRAM_LINK}
                onClick={handleTelegramClick}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#166A31] hover:bg-[#0E441F] text-white text-xs sm:text-sm font-bold px-3.5 py-2 rounded-lg border border-emerald-500/30 transition-all shadow-2xs cursor-pointer"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.3-.6.3l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.458c.538-.196 1.006.128.832.96z" />
                </svg>
                <span>Join Official Telegram Channel</span>
              </a>
            </div>

            {/* Col 3: Quick Navigation */}
            <div>
              <h4 className="font-bold text-xs sm:text-sm text-white uppercase tracking-wider mb-2">
                Quick Navigation
              </h4>
              <div className="flex flex-wrap gap-1.5 text-xs">
                <a
                  href="#about"
                  className="bg-white/10 hover:bg-white/20 text-gray-200 px-2.5 py-1 rounded-md transition-colors"
                >
                  About Us
                </a>
                <a
                  href="#coverage"
                  className="bg-white/10 hover:bg-white/20 text-gray-200 px-2.5 py-1 rounded-md transition-colors"
                >
                  What We Cover
                </a>
                <a
                  href="#why-us"
                  className="bg-white/10 hover:bg-white/20 text-gray-200 px-2.5 py-1 rounded-md transition-colors"
                >
                  Why Follow Us
                </a>
                <a
                  href="#approach"
                  className="bg-white/10 hover:bg-white/20 text-gray-200 px-2.5 py-1 rounded-md transition-colors"
                >
                  Our Approach
                </a>
                <a
                  href="#registration"
                  className="bg-white/10 hover:bg-white/20 text-gray-200 px-2.5 py-1 rounded-md transition-colors"
                >
                  SEBI Details
                </a>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 text-center text-xs text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p>© 2026 Capital Gains Research. All Rights Reserved.</p>
            <p className="text-[11px] text-gray-500">
              Compliant Educational Content • Meta Ads Ready • Regulated Financial Research
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky Telegram Conversion Bar (Desktop & Mobile) */}
      <aside
        aria-label="Join Telegram conversion bar"
        className="fixed bottom-0 inset-x-0 z-50 bg-[#0E441F]/95 backdrop-blur-md border-t border-[#166A31] py-2.5 px-4 shadow-2xl flex items-center justify-between gap-3 text-white"
      >
        <div className="flex items-center gap-3 min-w-0">
          <img
            src="/Logo.jpeg"
            alt="Capital Gains Research"
            className="h-8 w-auto rounded-md bg-white p-0.5 object-contain shrink-0 hidden xs:block"
          />
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span className="text-[11px] sm:text-xs font-bold text-emerald-300 uppercase tracking-wider truncate">
                SEBI: INH000030986
              </span>
            </div>
            <span className="text-xs text-gray-200 truncate font-medium hidden sm:block">
              Daily Indian Stock Market Updates & Educational Insights
            </span>
          </div>
        </div>

        {/* Sticky Button: Join Free Telegram Group */}
        <a
          href={TELEGRAM_LINK}
          onClick={handleTelegramClick}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-2 bg-white text-[#0E441F] hover:bg-emerald-50 active:scale-95 text-xs sm:text-sm font-extrabold px-4 sm:px-6 py-2 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-[#0E441F]" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.3-.6.3l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.458c.538-.196 1.006.128.832.96z" />
          </svg>
          <span className="whitespace-nowrap">Join Free Telegram Group</span>
        </a>
      </aside>
    </div>
  );
}
