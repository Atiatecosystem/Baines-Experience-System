import { useState, useEffect } from "react"

const NAV = [
  { id: "cover", num: "00", label: "Cover" },
  { id: "intro", num: "01", label: "Introduction" },
  { id: "strategic-idea", num: "02", label: "Strategic Idea" },
  { id: "creative-territory", num: "03", label: "Creative Territory" },
  { id: "principles", num: "04", label: "Experience Principles" },
  { id: "visual-dna", num: "05", label: "Visual DNA" },
  { id: "colour", num: "06", label: "Colour System" },
  { id: "typography", num: "07", label: "Typography" },
  { id: "grid", num: "08", label: "Grid & Layout" },
  { id: "graphic-language", num: "09", label: "Graphic Language" },
  { id: "photography", num: "10", label: "Photography" },
  { id: "iconography", num: "11", label: "Iconography" },
  { id: "illustration", num: "12", label: "Illustration" },
  { id: "motion", num: "13", label: "Motion" },
  { id: "voice", num: "14", label: "Voice & Tone" },
  { id: "product", num: "15", label: "Product Experience" },
  { id: "applications", num: "16", label: "Brand Applications" },
  { id: "everywhere", num: "17", label: "One Baines" },
  { id: "content", num: "18", label: "Content System" },
  { id: "quality", num: "19", label: "Quality Bar" },
  { id: "governance", num: "20", label: "Governance" },
  { id: "manifesto", num: "21", label: "Final Standard" },
]

const BLUE = "#1A56DB"
const NAVY = "#0B1629"
const NEAR_BLACK = "#080D18"
const OFF_WHITE = "#F7F5F0"
const COOL_GREY = "#94A3B8"
const CHARCOAL = "#1C2333"

export default function App() {
  const [active, setActive] = useState("cover")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: "-40% 0px -55% 0px" }
    )
    NAV.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div
      className="size-full flex overflow-hidden"
      style={{ fontFamily: "'Satoshi', sans-serif" }}
    >
      {/* ── Sidebar ── */}
      <nav
        className="hidden lg:flex flex-col w-52 shrink-0 h-full overflow-y-auto py-10 px-5"
        style={{ background: NEAR_BLACK }}
      >
        <div className="mb-10 px-3">
          <p
            className="text-white text-xs font-bold tracking-[0.22em] uppercase mb-1"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            BAINES
          </p>
          <p
            className="text-[10px] tracking-[0.16em] uppercase"
            style={{ color: BLUE }}
          >
            Brand Experience System
          </p>
        </div>
        <ul className="space-y-px">
          {NAV.map(({ id, num, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                className="w-full text-left flex items-center gap-3 py-2 px-3 rounded transition-all text-[11px] tracking-wide"
                style={{
                  color: active === id ? BLUE : COOL_GREY,
                  background:
                    active === id ? `${BLUE}18` : "transparent",
                }}
              >
                <span
                  className="font-mono text-[10px] opacity-50 shrink-0"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {num}
                </span>
                <span>{label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* ── Main scroll ── */}
      <main className="flex-1 overflow-y-auto">

        {/* ─────────── 00 COVER ─────────── */}
        <section
          id="cover"
          className="relative min-h-screen flex flex-col justify-between overflow-hidden"
          style={{ background: NEAR_BLACK }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(${BLUE}06 1px, transparent 1px), linear-gradient(90deg, ${BLUE}06 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
          <div
            className="absolute left-0 top-0 w-[2px] h-full"
            style={{ background: BLUE }}
          />
          <div className="absolute right-0 top-0 w-1/2 h-full overflow-hidden opacity-25">
            <img
              src="https://images.unsplash.com/photo-1784652951090-faffc6417c0f?w=900&h=1200&fit=crop&auto=format"
              alt="Modern professional"
              className="w-full h-full object-cover object-top"
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(90deg, ${NEAR_BLACK} 0%, transparent 60%)`,
              }}
            />
          </div>

          <div className="relative z-10 p-12 lg:p-20">
            <p
              className="text-xs tracking-[0.3em] uppercase"
              style={{
                color: BLUE,
                fontFamily: "'DM Mono', monospace",
              }}
            >
              2025 · Master Document
            </p>
          </div>

          <div className="relative z-10 px-12 lg:px-20 pb-4">
            <h1
              className="text-white font-black leading-[0.85] tracking-tight mb-10"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(5rem, 14vw, 12rem)",
              }}
            >
              BAINES
            </h1>
            <div className="flex items-start gap-6 max-w-xl">
              <div
                className="w-16 shrink-0 mt-4"
                style={{ height: 2, background: BLUE }}
              />
              <div>
                <p className="text-white text-xl lg:text-2xl font-light tracking-[0.2em] uppercase mb-4">
                  Brand Experience System
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: COOL_GREY }}
                >
                  Building a premium, modern and consistent experience around
                  the identity we already have.
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-10 p-12 lg:p-20 flex items-end justify-between flex-wrap gap-4">
            <div>
              <p
                className="text-[11px] tracking-[0.2em] uppercase"
                style={{ color: COOL_GREY }}
              >
                Baines Credit Microfinance Bank
              </p>
              <p
                className="text-[11px] tracking-[0.2em] uppercase mt-1"
                style={{ color: COOL_GREY }}
              >
                Version 1.0
              </p>
            </div>
            <div className="flex gap-4 flex-wrap">
              {["LIVE", "EARN", "SPEND", "SAVE", "BUILD", "GROW"].map((w) => (
                <span
                  key={w}
                  className="text-[10px] tracking-[0.2em] uppercase"
                  style={{ color: `${BLUE}50` }}
                >
                  {w}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────── 01 INTRODUCTION ─────────── */}
        <section
          id="intro"
          className="min-h-screen"
          style={{ background: OFF_WHITE }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
            <div
              className="flex flex-col justify-center p-12 lg:p-20"
              style={{ borderRight: `1px solid ${CHARCOAL}15` }}
            >
              <p
                className="text-xs tracking-[0.3em] uppercase mb-10"
                style={{ color: BLUE, fontFamily: "'DM Mono', monospace" }}
              >
                Section 01 — Introduction
              </p>
              <h2
                className="font-bold leading-tight mb-10"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  color: NAVY,
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                }}
              >
                This is not a Rebrand<br />
              </h2>
              <p
                className="text-base leading-relaxed max-w-sm mb-6"
                style={{ color: `${CHARCOAL}b0` }}
              >
                This document is the Baines Brand Experience System — a
                practical, living reference for every person and team
                responsible for creating, designing, or communicating on
                behalf of Baines Credit Microfinance Bank.
              </p>
              <p
                className="text-base leading-relaxed max-w-sm"
                style={{ color: `${CHARCOAL}b0` }}
              >
                The objective is not to replace the existing identity. The
                objective is to build a sophisticated, consistent, and premium
                experience around it — one that reflects what Baines truly is.
              </p>
            </div>
            <div
              className="flex flex-col justify-between p-12 lg:p-20"
              style={{ background: NAVY }}
            >
              <p
                className="text-xs tracking-[0.3em] uppercase"
                style={{ color: COOL_GREY, fontFamily: "'DM Mono', monospace" }}
              >
                Purpose
              </p>
              <div className="space-y-8">
                {[
                  {
                    n: "01",
                    t: "To create consistency across every Baines touchpoint.",
                  },
                  {
                    n: "02",
                    t: "To elevate the quality of every experience.",
                  },
                  {
                    n: "03",
                    t: "To give designers, marketers, and partners a shared visual language.",
                  },
                  {
                    n: "04",
                    t: "To ensure the Baines identity grows stronger with every interaction.",
                  },
                ].map(({ n, t }) => (
                  <div key={n} className="flex gap-5">
                    <span
                      className="text-sm shrink-0 mt-0.5"
                      style={{ color: BLUE, fontFamily: "'DM Mono', monospace" }}
                    >
                      {n}
                    </span>
                    <p className="text-white text-base leading-relaxed">{t}</p>
                  </div>
                ))}
              </div>
              <div
                className="pt-6"
                style={{ borderTop: `1px solid ${OFF_WHITE}15` }}
              >
                <p
                  className="text-white text-2xl font-semibold leading-tight"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  KEEP THE IDENTITY.<br />ELEVATE THE EXPERIENCE.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────── 02 STRATEGIC IDEA ─────────── */}
        <section
          id="strategic-idea"
          className="min-h-screen relative overflow-hidden"
          style={{ background: BLUE }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(${OFF_WHITE}06 1px, transparent 1px), linear-gradient(90deg, ${OFF_WHITE}06 1px, transparent 1px)`,
              backgroundSize: "80px 80px",
            }}
          />
          <div
            className="absolute top-0 right-0 w-px h-full"
            style={{ background: `${OFF_WHITE}20` }}
          />
          <div
            className="absolute bottom-0 right-0 w-80 h-80 translate-x-16 translate-y-16"
            style={{ border: `2px solid ${OFF_WHITE}12` }}
          />
          <div
            className="absolute bottom-20 right-20 w-48 h-48"
            style={{ background: `${OFF_WHITE}06` }}
          />

          <div className="relative z-10 min-h-screen flex flex-col justify-between p-12 lg:p-24">
            <div>
              <p
                className="text-xs tracking-[0.3em] uppercase mb-1"
                style={{ color: `${OFF_WHITE}60`, fontFamily: "'DM Mono', monospace" }}
              >
                Section 02
              </p>
              <p
                className="text-xs tracking-[0.3em] uppercase"
                style={{ color: `${OFF_WHITE}60`, fontFamily: "'DM Mono', monospace" }}
              >
                The Strategic Idea
              </p>
            </div>
            <div>
              <p
                className="text-sm tracking-widest uppercase mb-6"
                style={{ color: `${OFF_WHITE}80` }}
              >
                Central Idea
              </p>
              <h2
                className="text-white font-black leading-[0.88] tracking-tight mb-10 max-w-4xl"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "clamp(3rem, 9vw, 9rem)",
                }}
              >
                BUILDING<br />THE BANK<br />OF YOU.
              </h2>
              <p
                className="text-base max-w-md leading-relaxed"
                style={{ color: `${OFF_WHITE}80` }}
              >
                Every product, every interaction, every communication should
                feel designed around one person: the person in front of it.
                Not a segment. Not a demographic. You.
              </p>
            </div>
            <div className="flex gap-8 flex-wrap">
              {["LIVE", "EARN", "SPEND", "SAVE", "BUILD", "GROW"].map(
                (w, i) => (
                  <div key={w} className="flex flex-col gap-2">
                    <span
                      className="font-mono text-[10px]"
                      style={{
                        color: `${OFF_WHITE}40`,
                        fontFamily: "'DM Mono', monospace",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-white text-lg font-semibold tracking-wide">
                      {w}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* ─────────── 03 CREATIVE TERRITORY ─────────── */}
        <section
          id="creative-territory"
          className="min-h-screen"
          style={{ background: OFF_WHITE }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 min-h-screen">
            <div className="lg:col-span-2 relative overflow-hidden min-h-[50vh] lg:min-h-0"
              style={{ background: NAVY }}>
              <img
                src="https://images.unsplash.com/photo-1784652951070-9cb1a374132f?w=600&h=900&fit=crop&auto=format"
                alt="Modern Nigerian professional"
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to top, ${NAVY}cc, transparent)`,
                }}
              />
              <div className="absolute bottom-8 left-8 right-8">
                <div
                  className="w-12 mb-4"
                  style={{ height: 2, background: BLUE }}
                />
                <p className="text-white text-sm tracking-widest uppercase opacity-80">
                  Modern Nigerian.
                </p>
                <p className="text-white text-sm tracking-widest uppercase opacity-80">
                  Real Ambition.
                </p>
              </div>
            </div>
            <div className="lg:col-span-3 flex flex-col justify-center p-12 lg:p-20">
              <p
                className="text-xs tracking-[0.3em] uppercase mb-10"
                style={{ color: BLUE, fontFamily: "'DM Mono', monospace" }}
              >
                Section 03 — Creative Territory
              </p>
              <h2
                className="font-bold leading-tight mb-12"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  color: NAVY,
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                }}
              >
                Modern<br />Financial<br />Confidence.
              </h2>
              <div className="space-y-0 max-w-sm">
                {[
                  ["MODERN", "NOT TRENDY"],
                  ["PREMIUM", "NOT EXCLUSIVE"],
                  ["PROFESSIONAL", "NOT CORPORATE"],
                  ["DIGITAL", "BUT HUMAN"],
                  ["NIGERIAN", "WITH GLOBAL STANDARDS"],
                ].map(([a, b]) => (
                  <div
                    key={a}
                    className="flex items-center gap-4 py-3"
                    style={{ borderBottom: `1px solid ${CHARCOAL}12` }}
                  >
                    <span
                      className="font-semibold text-sm tracking-wide w-40"
                      style={{ color: NAVY }}
                    >
                      {a}
                    </span>
                    <span
                      className="font-mono text-xs"
                      style={{ color: BLUE, fontFamily: "'DM Mono', monospace" }}
                    >
                      ×
                    </span>
                    <span className="text-sm tracking-wide" style={{ color: COOL_GREY }}>
                      {b}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─────────── 04 EXPERIENCE PRINCIPLES ─────────── */}
        <section
          id="principles"
          className="min-h-screen"
          style={{ background: NAVY }}
        >
          <div className="p-12 lg:p-20">
            <p
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: BLUE, fontFamily: "'DM Mono', monospace" }}
            >
              Section 04 — Experience Principles
            </p>
            <h2
              className="text-white font-bold mb-4"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
              }}
            >
              The Five Principles.
            </h2>
            <p
              className="text-sm mb-16 max-w-md"
              style={{ color: COOL_GREY }}
            >
              Every design decision connects back to at least one of these.
              They are non-negotiable.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-px" style={{ background: `${OFF_WHITE}08` }}>
              {[
                {
                  n: "01",
                  name: "PERSONAL",
                  desc: "Designed around people.",
                  detail:
                    "Every interaction adapts to the individual. Names, history, behaviour — Baines uses what it knows to serve better.",
                },
                {
                  n: "02",
                  name: "EFFORTLESS",
                  desc: "Designed to reduce friction.",
                  detail:
                    "The best interaction is the one the customer doesn't notice. Speed, simplicity, and fewer steps.",
                },
                {
                  n: "03",
                  name: "CLEAR",
                  desc: "Designed to be understood.",
                  detail:
                    "Financial language is often opaque. Baines translates. Plain language, honest numbers, transparent processes.",
                },
                {
                  n: "04",
                  name: "SECURE",
                  desc: "Designed to inspire confidence.",
                  detail:
                    "Trust is earned through consistency. Visual stability, calm feedback, and honest communication.",
                },
                {
                  n: "05",
                  name: "REFINED",
                  desc: "Designed with intention.",
                  detail:
                    "No accidents. Every detail — spacing, type, colour, copy — is chosen with care and purpose.",
                },
              ].map(({ n, name, desc, detail }) => (
                <div
                  key={n}
                  className="flex flex-col justify-between p-8 min-h-64 group transition-colors"
                  style={{
                    background: NAVY,
                    border: `1px solid ${OFF_WHITE}08`,
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLDivElement).style.borderColor = `${BLUE}40`
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLDivElement).style.borderColor = `${OFF_WHITE}08`
                  }}
                >
                  <div>
                    <span
                      className="text-xs block mb-6 opacity-60"
                      style={{ color: BLUE, fontFamily: "'DM Mono', monospace" }}
                    >
                      {n}
                    </span>
                    <h3
                      className="text-white text-2xl font-bold mb-2"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      {name}
                    </h3>
                    <p className="text-sm" style={{ color: COOL_GREY }}>
                      {desc}
                    </p>
                  </div>
                  <p
                    className="text-xs leading-relaxed mt-6"
                    style={{ color: `${COOL_GREY}80` }}
                  >
                    {detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────── 05 VISUAL DNA ─────────── */}
        <section
          id="visual-dna"
          className="min-h-screen"
          style={{ background: OFF_WHITE }}
        >
          <div className="p-12 lg:p-20">
            <p
              className="text-xs tracking-[0.3em] uppercase mb-20"
              style={{ color: BLUE, fontFamily: "'DM Mono', monospace" }}
            >
              Section 05 — The Baines Visual DNA
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
              <div>
                <h2
                  className="font-bold leading-tight mb-8"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    color: NAVY,
                    fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  }}
                >
                  The logo stays.<br />The world around<br />it evolves.
                </h2>
                <p
                  className="text-base leading-relaxed max-w-sm mb-6"
                  style={{ color: `${CHARCOAL}b0` }}
                >
                  The Baines mark contains a complete visual vocabulary.
                  Instead of altering the logo, we extract its inherent
                  principles and build an entire graphic language from them.
                </p>
                <p
                  className="text-sm leading-relaxed max-w-sm"
                  style={{ color: `${CHARCOAL}70` }}
                >
                  Do not manipulate the logo itself to create graphic assets.
                  Extract the <em>principles</em> from the identity.
                </p>
              </div>
              {/* Logo placeholder */}
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div
                    className="w-64 h-64 relative flex items-center justify-center"
                    style={{ border: `2px solid ${NAVY}` }}
                  >
                    <div
                      className="absolute inset-5"
                      style={{ border: `1px solid ${BLUE}` }}
                    />
                    <div
                      className="absolute inset-10"
                      style={{ background: NAVY }}
                    />
                    <p
                      className="relative z-10 text-white text-5xl font-black"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      B
                    </p>
                  </div>
                  <p
                    className="absolute -bottom-7 left-0 right-0 text-center text-[10px] tracking-widest uppercase"
                    style={{ color: COOL_GREY }}
                  >
                    Logo placement — do not alter
                  </p>
                </div>
              </div>
            </div>

            <div style={{ borderTop: `1px solid ${CHARCOAL}12` }} className="pt-12">
              <p
                className="text-[10px] tracking-[0.25em] uppercase mb-8"
                style={{ color: `${CHARCOAL}50` }}
              >
                DNA characteristics extracted from the mark
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
                {[
                  { name: "Square Geometry", v: "box" },
                  { name: "Offset Structure", v: "offset" },
                  { name: "Layering", v: "layer" },
                  { name: "Proportion", v: "proportion" },
                  { name: "Interlocking Forms", v: "interlock" },
                  { name: "Directional Movement", v: "direction" },
                ].map(({ name, v }) => (
                  <div key={name} className="flex flex-col items-start gap-4">
                    <div
                      className="w-full aspect-square flex items-center justify-center relative overflow-hidden"
                      style={{
                        background: "white",
                        border: `1px solid ${CHARCOAL}12`,
                      }}
                    >
                      {v === "box" && (
                        <div
                          className="w-12 h-12"
                          style={{ border: `2px solid ${NAVY}` }}
                        />
                      )}
                      {v === "offset" && (
                        <>
                          <div
                            className="absolute top-4 left-4 w-10 h-10"
                            style={{ border: `1px solid ${NAVY}` }}
                          />
                          <div
                            className="absolute bottom-4 right-4 w-10 h-10"
                            style={{ background: BLUE }}
                          />
                        </>
                      )}
                      {v === "layer" && (
                        <>
                          <div
                            className="absolute inset-3"
                            style={{ border: `1px solid ${NAVY}20` }}
                          />
                          <div
                            className="absolute inset-6"
                            style={{ border: `1px solid ${NAVY}50` }}
                          />
                          <div
                            className="absolute inset-9"
                            style={{ background: NAVY }}
                          />
                        </>
                      )}
                      {v === "proportion" && (
                        <div className="w-full h-full flex flex-col">
                          <div className="flex-[3]" style={{ background: NAVY }} />
                          <div className="flex-[1]" style={{ background: BLUE }} />
                        </div>
                      )}
                      {v === "interlock" && (
                        <>
                          <div
                            className="absolute left-4 top-4 bottom-4 w-10"
                            style={{ border: `2px solid ${NAVY}` }}
                          />
                          <div
                            className="absolute right-4 top-8 bottom-8 w-8"
                            style={{
                              border: `1px solid ${BLUE}`,
                              background: `${BLUE}18`,
                            }}
                          />
                        </>
                      )}
                      {v === "direction" && (
                        <div className="flex items-end gap-1 pb-2">
                          {[1, 2, 3, 4].map((i) => (
                            <div
                              key={i}
                              style={{
                                width: 5 + i * 4,
                                height: 5 + i * 5,
                                background: i === 4 ? BLUE : NAVY,
                                opacity: i === 4 ? 1 : 0.3 + i * 0.15,
                              }}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                    <p
                      className="text-[11px] font-medium leading-tight"
                      style={{ color: CHARCOAL }}
                    >
                      {name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─────────── 06 COLOUR SYSTEM ─────────── */}
        <section
          id="colour"
          className="min-h-screen"
          style={{ background: NAVY }}
        >
          <div className="p-12 lg:p-20">
            <p
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: BLUE, fontFamily: "'DM Mono', monospace" }}
            >
              Section 06 — Colour System
            </p>
            <h2
              className="text-white font-bold mb-4"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
              }}
            >
              The Palette.
            </h2>
            <p
              className="text-sm mb-16 max-w-lg"
              style={{ color: COOL_GREY }}
            >
              Blue signals the brand. Navy and off-white create the premium
              environment. Use colour with restraint and purpose.
            </p>

            {/* Primary */}
            <div className="mb-8">
              <p
                className="text-[10px] tracking-[0.25em] uppercase mb-3"
                style={{ color: `${OFF_WHITE}35`, fontFamily: "'DM Mono', monospace" }}
              >
                Primary
              </p>
              <div
                className="flex items-end gap-6 p-8"
                style={{ background: BLUE }}
              >
                <div>
                  <p className="text-white font-semibold text-lg tracking-wide mb-1">
                    Baines Blue
                  </p>
                  <p
                    className="text-white font-mono text-sm mb-1"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    #1A56DB
                  </p>
                  <p
                    className="font-mono text-xs"
                    style={{ color: `${OFF_WHITE}60`, fontFamily: "'DM Mono', monospace" }}
                  >
                    RGB 26 · 86 · 219
                  </p>
                </div>
                <div className="ml-auto text-right">
                  <p
                    className="text-xs"
                    style={{ color: `${OFF_WHITE}70` }}
                  >
                    Brand signal. Use with intention.
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: `${OFF_WHITE}70` }}
                  >
                    Interactive · Accent · Highlight
                  </p>
                </div>
              </div>
            </div>

            {/* Depth */}
            <div className="mb-8">
              <p
                className="text-[10px] tracking-[0.25em] uppercase mb-3"
                style={{ color: `${OFF_WHITE}35`, fontFamily: "'DM Mono', monospace" }}
              >
                Depth
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { name: "Deep Navy", hex: "#0B1629", rgb: "11 · 22 · 41", note: "Primary dark surface" },
                  { name: "Near Black", hex: "#080D18", rgb: "8 · 13 · 24", note: "Deepest backgrounds" },
                ].map((c) => (
                  <div
                    key={c.hex}
                    className="p-6 flex flex-col justify-between min-h-28"
                    style={{
                      background: c.hex,
                      border: `1px solid ${OFF_WHITE}08`,
                    }}
                  >
                    <p className="text-white font-semibold text-sm">{c.name}</p>
                    <div>
                      <p
                        className="font-mono text-xs"
                        style={{ color: `${OFF_WHITE}60`, fontFamily: "'DM Mono', monospace" }}
                      >
                        {c.hex}
                      </p>
                      <p
                        className="font-mono text-xs"
                        style={{ color: `${OFF_WHITE}35`, fontFamily: "'DM Mono', monospace" }}
                      >
                        RGB {c.rgb}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Light & Neutral */}
            <div className="mb-8">
              <p
                className="text-[10px] tracking-[0.25em] uppercase mb-3"
                style={{ color: `${OFF_WHITE}35`, fontFamily: "'DM Mono', monospace" }}
              >
                Light & Neutral
              </p>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { name: "Soft Ice", hex: "#EDF2FF", rgb: "237 · 242 · 255", note: "Tinted surfaces" },
                  { name: "Cool Grey", hex: "#94A3B8", rgb: "148 · 163 · 184", note: "Secondary text" },
                  { name: "Warm Off-White", hex: "#F7F5F0", rgb: "247 · 245 · 240", note: "Page ground" },
                ].map((c) => (
                  <div
                    key={c.hex}
                    className="p-6 flex flex-col justify-between min-h-28"
                    style={{
                      background: c.hex,
                      border: `1px solid ${CHARCOAL}18`,
                    }}
                  >
                    <p
                      className="font-semibold text-xs"
                      style={{ color: NAVY }}
                    >
                      {c.name}
                    </p>
                    <div>
                      <p
                        className="font-mono text-xs"
                        style={{ color: `${CHARCOAL}60`, fontFamily: "'DM Mono', monospace" }}
                      >
                        {c.hex}
                      </p>
                      <p
                        className="font-mono text-[10px]"
                        style={{ color: `${CHARCOAL}40`, fontFamily: "'DM Mono', monospace" }}
                      >
                        RGB {c.rgb}
                      </p>
                      <p
                        className="text-[10px] mt-1"
                        style={{ color: `${CHARCOAL}50` }}
                      >
                        {c.note}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Functional */}
            <div>
              <p
                className="text-[10px] tracking-[0.25em] uppercase mb-3"
                style={{ color: `${OFF_WHITE}35`, fontFamily: "'DM Mono', monospace" }}
              >
                Functional
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                {[
                  { name: "Success", hex: "#16A34A", note: "Positive confirmation" },
                  { name: "Warning", hex: "#D97706", note: "Proceed with caution" },
                  { name: "Error", hex: "#DC2626", note: "Critical issue" },
                  { name: "Information", hex: "#0EA5E9", note: "Neutral guidance" },
                ].map((c) => (
                  <div
                    key={c.hex}
                    className="p-5 flex flex-col gap-2"
                    style={{
                      background: c.hex,
                      border: `1px solid ${OFF_WHITE}10`,
                    }}
                  >
                    <p className="text-white font-semibold text-sm">
                      {c.name}
                    </p>
                    <p
                      className="text-white font-mono text-xs"
                      style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                      {c.hex}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: `${OFF_WHITE}70` }}
                    >
                      {c.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─────────── 07 TYPOGRAPHY ─────────── */}
        <section
          id="typography"
          className="min-h-screen"
          style={{ background: OFF_WHITE }}
        >
          <div className="p-12 lg:p-20">
            <p
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: BLUE, fontFamily: "'DM Mono', monospace" }}
            >
              Section 07 — Typography
            </p>
            <h2
              className="font-bold mb-16"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                color: NAVY,
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
              }}
            >
              Type System.
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
              {/* Brand / Display */}
              <div
                className="pl-8"
                style={{ borderLeft: `2px solid ${BLUE}` }}
              >
                <p
                  className="text-xs tracking-[0.25em] uppercase mb-4"
                  style={{ color: BLUE, fontFamily: "'DM Mono', monospace" }}
                >
                  Brand / Display
                </p>
                <p
                  className="text-xs mb-6 max-w-xs leading-relaxed"
                  style={{ color: COOL_GREY }}
                >
                  Bold. Editorial. Confident. Used for campaigns, headlines, brand statements, and website hero sections.
                </p>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  <p
                    className="font-black leading-none mb-4"
                    style={{ color: NAVY, fontSize: "clamp(4rem, 10vw, 7rem)" }}
                  >
                    Aa
                  </p>
                  <div
                    className="space-y-3 pt-4"
                    style={{ borderTop: `1px solid ${CHARCOAL}12` }}
                  >
                    {[
                      { label: "Display · 80px", text: "The Bank of You", sz: "2.8rem", w: "900" },
                      { label: "Heading · 48px", text: "Your money, moving.", sz: "1.8rem", w: "700" },
                      { label: "Sub · 28px", text: "Building financial confidence", sz: "1.2rem", w: "400" },
                    ].map(({ label, text, sz, w }) => (
                      <div
                        key={label}
                        className="flex items-baseline justify-between gap-4 pb-3"
                        style={{ borderBottom: `1px solid ${CHARCOAL}10` }}
                      >
                        <p
                          style={{
                            fontFamily: "'Barlow Condensed', sans-serif",
                            color: NAVY,
                            fontWeight: w,
                            fontSize: sz,
                            lineHeight: 1.1,
                          }}
                        >
                          {text}
                        </p>
                        <span
                          className="font-mono text-[10px] shrink-0"
                          style={{ color: COOL_GREY, fontFamily: "'DM Mono', monospace" }}
                        >
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p
                    className="text-xs mt-3 font-mono"
                    style={{ color: COOL_GREY, fontFamily: "'DM Mono', monospace" }}
                  >
                    Barlow Condensed — Google Fonts
                  </p>
                </div>
              </div>

              {/* Functional / Product */}
              <div
                className="pl-8"
                style={{ borderLeft: `2px solid ${CHARCOAL}18` }}
              >
                <p
                  className="text-xs tracking-[0.25em] uppercase mb-4"
                  style={{ color: BLUE, fontFamily: "'DM Mono', monospace" }}
                >
                  Functional / Product
                </p>
                <p
                  className="text-xs mb-6 max-w-xs leading-relaxed"
                  style={{ color: COOL_GREY }}
                >
                  Clear. Precise. Highly legible. Used for mobile banking, transactions, forms, navigation.
                </p>
                <div>
                  <p
                    className="font-bold leading-none mb-4"
                    style={{ color: NAVY, fontSize: "clamp(4rem, 10vw, 7rem)" }}
                  >
                    Aa
                  </p>
                  <div
                    className="space-y-3 pt-4"
                    style={{ borderTop: `1px solid ${CHARCOAL}12` }}
                  >
                    {[
                      { label: "Heading · 20px", text: "Account Balance", sz: "1.15rem", w: "600" },
                      { label: "Body · 16px", text: "Transfer successful. Your funds are on their way.", sz: "0.92rem", w: "400" },
                      { label: "Caption · 13px", text: "Transaction reference: TXN2025081234", sz: "0.78rem", w: "400" },
                    ].map(({ label, text, sz, w }) => (
                      <div
                        key={label}
                        className="flex items-start justify-between gap-4 pb-3"
                        style={{ borderBottom: `1px solid ${CHARCOAL}10` }}
                      >
                        <p
                          style={{
                            color: NAVY,
                            fontWeight: w,
                            fontSize: sz,
                            lineHeight: 1.5,
                          }}
                        >
                          {text}
                        </p>
                        <span
                          className="font-mono text-[10px] shrink-0 mt-1"
                          style={{ color: COOL_GREY, fontFamily: "'DM Mono', monospace" }}
                        >
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p
                    className="text-xs mt-3 font-mono"
                    style={{ color: COOL_GREY, fontFamily: "'DM Mono', monospace" }}
                  >
                    Satoshi — 400 / 500 / 700
                  </p>
                </div>
              </div>
            </div>

            {/* Data / Mono */}
            <div className="p-8" style={{ background: NAVY }}>
              <p
                className="text-xs tracking-[0.25em] uppercase mb-6"
                style={{ color: BLUE, fontFamily: "'DM Mono', monospace" }}
              >
                Data & Financial Figures — DM Mono
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div>
                  <p
                    className="text-xs mb-2 tracking-widest uppercase"
                    style={{ color: `${OFF_WHITE}40` }}
                  >
                    Balance
                  </p>
                  <p
                    className="text-white text-4xl font-bold"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    ₦1,250,000.00
                  </p>
                </div>
                <div>
                  <p
                    className="text-xs mb-2 tracking-widest uppercase"
                    style={{ color: `${OFF_WHITE}40` }}
                  >
                    Transactions
                  </p>
                  <p
                    className="text-2xl"
                    style={{ color: "#16A34A", fontFamily: "'DM Mono', monospace" }}
                  >
                    + ₦85,000.00
                  </p>
                  <p
                    className="text-2xl"
                    style={{ color: "#DC2626", fontFamily: "'DM Mono', monospace" }}
                  >
                    − ₦12,400.00
                  </p>
                </div>
                <div>
                  <p
                    className="text-xs mb-2 tracking-widest uppercase"
                    style={{ color: `${OFF_WHITE}40` }}
                  >
                    Reference
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: COOL_GREY, fontFamily: "'DM Mono', monospace" }}
                  >
                    TXN · 2025 · 08 · 1234
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: COOL_GREY, fontFamily: "'DM Mono', monospace" }}
                  >
                    02 Sep 2025 · 14:32
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────── 08 GRID & LAYOUT ─────────── */}
        <section
          id="grid"
          className="min-h-screen"
          style={{ background: NEAR_BLACK }}
        >
          <div className="p-12 lg:p-20">
            <p
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: BLUE, fontFamily: "'DM Mono', monospace" }}
            >
              Section 08 — Grid & Layout System
            </p>
            <h2
              className="text-white font-bold mb-4"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
              }}
            >
              Layout.
            </h2>
            <p
              className="text-sm mb-16 max-w-md"
              style={{ color: COOL_GREY }}
            >
              A recognisable Baines composition built on asymmetry, editorial
              intent, and generous whitespace. Avoid generic centred layouts.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
              {[
                { label: "Desktop", cols: 12, gutter: "24px", margin: "80px", max: "1440px" },
                { label: "Tablet", cols: 8, gutter: "16px", margin: "40px", max: "1024px" },
                { label: "Mobile", cols: 4, gutter: "12px", margin: "20px", max: "390px" },
              ].map(({ label, cols, gutter, margin, max }) => (
                <div
                  key={label}
                  className="p-6"
                  style={{ border: `1px solid ${OFF_WHITE}10` }}
                >
                  <p
                    className="text-xs font-mono tracking-widest uppercase mb-4"
                    style={{ color: BLUE, fontFamily: "'DM Mono', monospace" }}
                  >
                    {label} Grid
                  </p>
                  <div className="space-y-3 mb-6">
                    {[
                      ["Columns", String(cols)],
                      ["Gutter", gutter],
                      ["Margin", margin],
                      ["Max Width", max],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between">
                        <span className="text-xs" style={{ color: COOL_GREY }}>
                          {k}
                        </span>
                        <span
                          className="font-mono text-xs text-white"
                          style={{ fontFamily: "'DM Mono', monospace" }}
                        >
                          {v}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-0.5 h-8">
                    {Array.from({ length: cols }).map((_, i) => (
                      <div
                        key={i}
                        className="flex-1"
                        style={{
                          background: `${BLUE}18`,
                          border: `1px solid ${BLUE}25`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Spacing */}
            <div style={{ borderTop: `1px solid ${OFF_WHITE}10` }} className="pt-12">
              <p
                className="text-[10px] tracking-[0.25em] uppercase mb-6"
                style={{ color: `${OFF_WHITE}35`, fontFamily: "'DM Mono', monospace" }}
              >
                Spacing Scale
              </p>
              <div className="flex items-end gap-3 flex-wrap">
                {[4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128].map(
                  (s) => (
                    <div key={s} className="flex flex-col items-center gap-2">
                      <div
                        className="w-4"
                        style={{
                          height: Math.min(s * 0.7, 70),
                          background: `${BLUE}40`,
                        }}
                      />
                      <p
                        className="font-mono text-[9px]"
                        style={{
                          color: COOL_GREY,
                          fontFamily: "'DM Mono', monospace",
                        }}
                      >
                        {s}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Layout patterns */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 mt-16">
              <p
                className="lg:col-span-5 text-[10px] tracking-[0.25em] uppercase mb-2"
                style={{ color: `${OFF_WHITE}35`, fontFamily: "'DM Mono', monospace" }}
              >
                Composition Patterns
              </p>
              {[
                { name: "Split — 2/3 · 1/3", cols: ["flex-[2]", "flex-[1]"] },
                { name: "Asymmetric — 3/5 · 2/5", cols: ["flex-[3]", "flex-[2]"] },
                { name: "Edge-anchor — full bleed left", cols: ["flex-[3]", "flex-[2]"] },
              ].map(({ name, cols }) => (
                <div key={name} className="lg:col-span-5">
                  <p className="text-[10px] mb-2" style={{ color: COOL_GREY }}>
                    {name}
                  </p>
                  <div className="flex h-10 gap-0.5">
                    {cols.map((cls, i) => (
                      <div
                        key={i}
                        className={cls}
                        style={{
                          background: i === 0 ? `${BLUE}30` : `${BLUE}15`,
                          border: `1px solid ${BLUE}25`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────── 09 GRAPHIC LANGUAGE ─────────── */}
        <section
          id="graphic-language"
          className="min-h-screen"
          style={{ background: OFF_WHITE }}
        >
          <div className="p-12 lg:p-20">
            <p
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: BLUE, fontFamily: "'DM Mono', monospace" }}
            >
              Section 09 — Graphic Language
            </p>
            <h2
              className="font-bold mb-4"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                color: NAVY,
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
              }}
            >
              Six Devices.
            </h2>
            <p
              className="text-sm mb-16 max-w-md"
              style={{ color: COOL_GREY }}
            >
              Every element derives from the visual DNA. Restrained.
              Purposeful. No decoration without function.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {[
                {
                  n: "01",
                  name: "THE FRAME",
                  desc: "A rectangular border derived from the logo's outer geometry. Used to contain, highlight, or crop content with intention.",
                  usage: "Campaign headers · Image crops · Highlight areas",
                  v: "frame",
                },
                {
                  n: "02",
                  name: "THE OFFSET",
                  desc: "Two elements displaced from each other — creating depth, rhythm, and visual tension without complexity.",
                  usage: "Photography compositions · Card layouts",
                  v: "offset",
                },
                {
                  n: "03",
                  name: "THE CROP",
                  desc: "Images and elements cut with decisive geometric precision. Never floating — always anchored to an edge.",
                  usage: "Photography framing · Hero sections · Social crops",
                  v: "crop",
                },
                {
                  n: "04",
                  name: "THE LINE",
                  desc: "A single 2px rule used to separate, guide, and create hierarchy. Always purposeful, never decorative.",
                  usage: "Section dividers · Emphasis marks · Accent elements",
                  v: "line",
                },
                {
                  n: "05",
                  name: "THE BLOCK",
                  desc: "Solid rectangles of brand colour used as backgrounds, pull-quotes, and emphasis. Confident and direct.",
                  usage: "Background accents · Callout blocks · Data visuals",
                  v: "block",
                },
                {
                  n: "06",
                  name: "THE DATA FORM",
                  desc: "Structured visual representations of financial data — progress bars, rings, charts — always clean and purposeful.",
                  usage: "Savings progress · Spending charts · Reports",
                  v: "data",
                },
              ].map(({ n, name, desc, usage, v }) => (
                <div
                  key={n}
                  className="bg-white"
                  style={{ border: `1px solid ${CHARCOAL}10` }}
                >
                  <div
                    className="h-44 relative overflow-hidden flex items-center justify-center"
                    style={{ background: OFF_WHITE, borderBottom: `1px solid ${CHARCOAL}10` }}
                  >
                    {v === "frame" && (
                      <div
                        className="w-32 h-24"
                        style={{ border: `2px solid ${NAVY}` }}
                      >
                        <div
                          className="m-3 h-full"
                          style={{ background: `${BLUE}12` }}
                        />
                      </div>
                    )}
                    {v === "offset" && (
                      <>
                        <div
                          className="absolute top-6 left-8 w-24 h-16"
                          style={{ background: NAVY }}
                        />
                        <div
                          className="absolute bottom-6 right-8 w-24 h-16"
                          style={{ border: `2px solid ${BLUE}` }}
                        />
                      </>
                    )}
                    {v === "crop" && (
                      <div className="absolute top-0 left-0 w-2/3 h-full overflow-hidden">
                        <div
                          className="w-full h-full"
                          style={{
                            background: `${NAVY}14`,
                            borderRight: `2px solid ${BLUE}`,
                          }}
                        />
                      </div>
                    )}
                    {v === "line" && (
                      <div className="w-full px-8">
                        <div
                          className="w-12 mb-4"
                          style={{ height: 2, background: BLUE }}
                        />
                        {[1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className="w-full mb-2"
                            style={{ height: 1, background: `${CHARCOAL}12` }}
                          />
                        ))}
                      </div>
                    )}
                    {v === "block" && (
                      <div className="flex items-end gap-2 h-full w-full px-8 pb-4 pt-10">
                        {[55, 80, 40, 90, 65].map((h, i) => (
                          <div
                            key={i}
                            className="flex-1"
                            style={{
                              height: `${h}%`,
                              background: i === 3 ? BLUE : `${NAVY}22`,
                            }}
                          />
                        ))}
                      </div>
                    )}
                    {v === "data" && (
                      <div className="relative w-24 h-24">
                        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                          <circle
                            cx="50" cy="50" r="40"
                            fill="none"
                            stroke={`${NAVY}18`}
                            strokeWidth="8"
                          />
                          <circle
                            cx="50" cy="50" r="40"
                            fill="none"
                            stroke={BLUE}
                            strokeWidth="8"
                            strokeDasharray="251"
                            strokeDashoffset="63"
                            strokeLinecap="round"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span
                            className="font-mono text-sm font-bold"
                            style={{ color: NAVY, fontFamily: "'DM Mono', monospace" }}
                          >
                            75%
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="font-mono text-xs"
                        style={{ color: BLUE, fontFamily: "'DM Mono', monospace" }}
                      >
                        {n}
                      </span>
                      <h3
                        className="font-semibold text-sm tracking-wide"
                        style={{ color: NAVY }}
                      >
                        {name}
                      </h3>
                    </div>
                    <p
                      className="text-xs leading-relaxed mb-3"
                      style={{ color: `${CHARCOAL}80` }}
                    >
                      {desc}
                    </p>
                    <p
                      className="text-[10px] font-mono tracking-wide"
                      style={{ color: BLUE, fontFamily: "'DM Mono', monospace" }}
                    >
                      ↳ {usage}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────── 10 PHOTOGRAPHY ─────────── */}
        <section
          id="photography"
          className="min-h-screen"
          style={{ background: NAVY }}
        >
          <div className="p-12 lg:p-20">
            <p
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: BLUE, fontFamily: "'DM Mono', monospace" }}
            >
              Section 10 — Photography
            </p>
            <h2
              className="text-white font-bold mb-4"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
              }}
            >
              Art Direction.
            </h2>
            <p
              className="text-sm mb-2 max-w-md"
              style={{ color: COOL_GREY }}
            >
              Modern Nigerians. Real Lives. Real Ambition.
            </p>
            <p
              className="text-sm mb-16 max-w-md"
              style={{ color: COOL_GREY }}
            >
              Photography should feel editorial, cinematic, authentic, and
              sophisticated. It must communicate confidence, ambition, progress,
              control, and possibility.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
              {[
                { url: "https://images.unsplash.com/photo-1784652951070-9cb1a374132f?w=400&h=520&fit=crop&auto=format", label: "Portrait", alt: "Professional portrait" },
                { url: "https://images.unsplash.com/photo-1770662368022-0665169d45f5?w=400&h=520&fit=crop&auto=format", label: "Lifestyle", alt: "Modern lifestyle" },
                { url: "https://images.unsplash.com/photo-1578758760917-e36305c1b872?w=400&h=520&fit=crop&auto=format", label: "Business", alt: "Business professional" },
                { url: "https://images.unsplash.com/photo-1563132337-f159f484226c?w=400&h=520&fit=crop&auto=format", label: "Detail", alt: "Detail shot" },
              ].map(({ url, label, alt }) => (
                <div
                  key={label}
                  className="relative overflow-hidden group"
                  style={{ aspectRatio: "4/5", background: NEAR_BLACK }}
                >
                  <img
                    src={url}
                    alt={alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to top, ${NEAR_BLACK}cc, transparent 50%)`,
                    }}
                  />
                  <p
                    className="absolute bottom-3 left-3 text-white text-xs tracking-widest uppercase"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-10"
              style={{ borderTop: `1px solid ${OFF_WHITE}10` }}
            >
              <div>
                <p
                  className="text-xs font-mono tracking-[0.25em] uppercase mb-4"
                  style={{ color: "#16A34A", fontFamily: "'DM Mono', monospace" }}
                >
                  ✓ Direct
                </p>
                <ul className="space-y-2">
                  {[
                    "Editorial, cinematic framing",
                    "Real expressions — not forced smiles",
                    "Authentic Nigerian environments",
                    "Confident, natural body language",
                    "Contemporary lifestyle contexts",
                    "Interesting, directional light",
                  ].map((item) => (
                    <li
                      key={item}
                      className="text-sm flex gap-3"
                      style={{ color: COOL_GREY }}
                    >
                      <span style={{ color: "#16A34A" }}>—</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p
                  className="text-xs font-mono tracking-[0.25em] uppercase mb-4"
                  style={{ color: "#DC2626", fontFamily: "'DM Mono', monospace" }}
                >
                  ✕ Avoid
                </p>
                <ul className="space-y-2">
                  {[
                    "Generic stock photography",
                    "Fake handshakes and staged greetings",
                    "People pointing at laptops",
                    "Forced office smiles",
                    "Overly staged corporate environments",
                    "Diversity box-ticking compositions",
                  ].map((item) => (
                    <li
                      key={item}
                      className="text-sm flex gap-3"
                      style={{ color: COOL_GREY }}
                    >
                      <span style={{ color: "#DC2626" }}>—</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────── 11 ICONOGRAPHY ─────────── */}
        <section
          id="iconography"
          className="min-h-screen"
          style={{ background: OFF_WHITE }}
        >
          <div className="p-12 lg:p-20">
            <p
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: BLUE, fontFamily: "'DM Mono', monospace" }}
            >
              Section 11 — Iconography
            </p>
            <h2
              className="font-bold mb-4"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                color: NAVY,
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
              }}
            >
              Icon System.
            </h2>
            <p
              className="text-sm mb-16 max-w-md"
              style={{ color: COOL_GREY }}
            >
              Precise. Light. Modern. Functional. Every icon must work at 20px
              and 40px. Do not mix styles.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
              {[
                { spec: "Stroke Weight", value: "1.5px" },
                { spec: "Corner Radius", value: "2px" },
                { spec: "Grid", value: "24 × 24px" },
                { spec: "Style", value: "Outline" },
              ].map(({ spec, value }) => (
                <div
                  key={spec}
                  className="p-5"
                  style={{ border: `1px solid ${CHARCOAL}12` }}
                >
                  <p
                    className="text-[10px] tracking-widest uppercase mb-2"
                    style={{ color: COOL_GREY }}
                  >
                    {spec}
                  </p>
                  <p
                    className="font-mono font-semibold text-lg"
                    style={{ color: NAVY, fontFamily: "'DM Mono', monospace" }}
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <p
              className="text-[10px] tracking-[0.25em] uppercase mb-6"
              style={{ color: `${CHARCOAL}40` }}
            >
              Core Icon Set — 24px grid
            </p>
            <div className="grid grid-cols-6 lg:grid-cols-12 gap-4">
              {[
                { label: "Home", d: "M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" },
                { label: "Transfer", d: "M7 16l-4-4m0 0l4-4m-4 4h18M17 8l4 4m0 0l-4 4m4-4H3" },
                { label: "Save", d: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" },
                { label: "Card", d: "M3 7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7zm0 4h18" },
                { label: "Bell", d: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" },
                { label: "User", d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
                { label: "History", d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
                { label: "Lock", d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
                { label: "Settings", d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z" },
                { label: "Chart", d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
                { label: "Plus", d: "M12 5v14M5 12h14" },
                { label: "Arrow", d: "M17 8l4 4m0 0l-4 4m4-4H3" },
              ].map(({ label, d }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-2 group cursor-pointer"
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center transition-all"
                    style={{
                      border: `1px solid ${CHARCOAL}12`,
                      background: "white",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLDivElement
                      el.style.borderColor = BLUE
                      el.style.background = `${BLUE}0e`
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLDivElement
                      el.style.borderColor = `${CHARCOAL}12`
                      el.style.background = "white"
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={CHARCOAL}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d={d} />
                    </svg>
                  </div>
                  <p
                    className="text-[9px] text-center"
                    style={{ color: COOL_GREY }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────── 12 ILLUSTRATION ─────────── */}
        <section
          id="illustration"
          className="min-h-[60vh]"
          style={{ background: NEAR_BLACK }}
        >
          <div className="p-12 lg:p-20">
            <p
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: BLUE, fontFamily: "'DM Mono', monospace" }}
            >
              Section 12 — Illustration
            </p>
            <h2
              className="text-white font-bold mb-4"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
              }}
            >
              Illustration.
            </h2>
            <p
              className="text-sm mb-12 max-w-md"
              style={{ color: COOL_GREY }}
            >
              Illustration supports photography — it never replaces it. Minimal,
              geometric, human, and sophisticated. Used for empty states,
              onboarding, and education.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {[
                { context: "Empty State", ex: "No transactions yet. Make your first transfer to get started.", shape: "circle" },
                { context: "Onboarding", ex: "Complete your profile to unlock all Baines features.", shape: "diamond" },
                { context: "Financial Education", ex: "How compound interest works for your savings.", shape: "triangle" },
                { context: "Error / Fallback", ex: "Something went wrong. Your money is safe.", shape: "square" },
              ].map(({ context, ex, shape }) => (
                <div
                  key={context}
                  className="p-6"
                  style={{ border: `1px solid ${OFF_WHITE}10` }}
                >
                  <div
                    className="w-full aspect-square flex items-center justify-center mb-4"
                    style={{ background: "#0D1828" }}
                  >
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                      {shape === "circle" && (
                        <circle cx="30" cy="30" r="22" stroke={BLUE} strokeWidth="1.5" />
                      )}
                      {shape === "diamond" && (
                        <path d="M30 6 L54 30 L30 54 L6 30 Z" stroke={BLUE} strokeWidth="1.5" />
                      )}
                      {shape === "triangle" && (
                        <path d="M30 8 L54 52 L6 52 Z" stroke={BLUE} strokeWidth="1.5" />
                      )}
                      {shape === "square" && (
                        <rect x="8" y="8" width="44" height="44" stroke={BLUE} strokeWidth="1.5" />
                      )}
                    </svg>
                  </div>
                  <p
                    className="text-xs font-mono tracking-widest uppercase mb-2"
                    style={{ color: BLUE, fontFamily: "'DM Mono', monospace" }}
                  >
                    {context}
                  </p>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: COOL_GREY }}
                  >
                    {ex}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="mt-10 pt-8 flex gap-8 flex-wrap"
              style={{ borderTop: `1px solid ${OFF_WHITE}10` }}
            >
              {["Minimal", "Geometric", "Human", "Sophisticated", "Monochrome-led", "Never Generic"].map(
                (p) => (
                  <span
                    key={p}
                    className="text-sm pl-3"
                    style={{
                      color: COOL_GREY,
                      borderLeft: `2px solid ${BLUE}`,
                    }}
                  >
                    {p}
                  </span>
                )
              )}
            </div>
          </div>
        </section>

        {/* ─────────── 13 MOTION ─────────── */}
        <section
          id="motion"
          className="min-h-[70vh]"
          style={{ background: OFF_WHITE }}
        >
          <div className="p-12 lg:p-20">
            <p
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: BLUE, fontFamily: "'DM Mono', monospace" }}
            >
              Section 13 — Motion
            </p>
            <h2
              className="font-bold mb-4"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                color: NAVY,
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
              }}
            >
              Motion Language.
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  p: "CALM",
                  desc: "Motion should never feel frantic. Easing curves are smooth and measured. Durations give the eye time to follow.",
                },
                {
                  p: "PURPOSEFUL",
                  desc: "Every animation communicates something — state change, hierarchy, completion. Motion carries meaning.",
                },
                {
                  p: "RESPONSIVE",
                  desc: "Animations respond immediately to input. No lag, no hesitation. The system acknowledges every action instantly.",
                },
              ].map(({ p, desc }) => (
                <div
                  key={p}
                  className="pt-6"
                  style={{ borderTop: `2px solid ${BLUE}` }}
                >
                  <h3
                    className="text-2xl font-bold mb-3"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", color: NAVY }}
                  >
                    {p}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: COOL_GREY }}
                  >
                    {desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { type: "Entrance", dur: "300ms", ease: "ease-out", note: "Slide + fade in" },
                { type: "Exit", dur: "200ms", ease: "ease-in", note: "Fade out" },
                { type: "Transition", dur: "250ms", ease: "ease-in-out", note: "Page / view change" },
                { type: "Micro-interaction", dur: "150ms", ease: "ease-out", note: "Button, toggle" },
                { type: "Loading", dur: "∞", ease: "linear", note: "Continuous pulse" },
                { type: "Success", dur: "400ms", ease: "spring", note: "Checkmark reveal" },
                { type: "Error", dur: "300ms", ease: "ease-out", note: "Subtle horizontal shake" },
                { type: "Transaction", dur: "500ms", ease: "ease-out", note: "Sequential reveal" },
              ].map(({ type, dur, ease, note }) => (
                <div
                  key={type}
                  className="p-4 bg-white"
                  style={{ border: `1px solid ${CHARCOAL}10` }}
                >
                  <p
                    className="font-semibold text-sm mb-2"
                    style={{ color: NAVY }}
                  >
                    {type}
                  </p>
                  <p
                    className="font-mono text-xs mb-1"
                    style={{ color: BLUE, fontFamily: "'DM Mono', monospace" }}
                  >
                    {dur}
                  </p>
                  <p className="text-xs" style={{ color: COOL_GREY }}>
                    {ease}
                  </p>
                  <p
                    className="font-mono text-[10px] mt-1"
                    style={{ color: `${CHARCOAL}50`, fontFamily: "'DM Mono', monospace" }}
                  >
                    {note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────── 14 VOICE & TONE ─────────── */}
        <section
          id="voice"
          className="min-h-screen"
          style={{ background: NAVY }}
        >
          <div className="p-12 lg:p-20">
            <p
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: BLUE, fontFamily: "'DM Mono', monospace" }}
            >
              Section 14 — Voice & Tone
            </p>
            <h2
              className="text-white font-bold mb-4"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
              }}
            >
              How Baines Sounds.
            </h2>
            <p
              className="text-sm mb-16 max-w-md"
              style={{ color: COOL_GREY }}
            >
              Clear. Confident. Human. Calm. Helpful. Never corporate,
              robotic, overly formal, or jargon-heavy.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <p
                  className="text-xs font-mono tracking-widest uppercase mb-4"
                  style={{ color: "#16A34A", fontFamily: "'DM Mono', monospace" }}
                >
                  Baines Sounds
                </p>
                {[
                  ["Clear", "No confusion, no ambiguity"],
                  ["Confident", "Direct and assured"],
                  ["Human", "Warm, not cold or transactional"],
                  ["Calm", "Never panicked or alarmist"],
                  ["Helpful", "Always offers a next step"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex gap-4 py-2.5"
                    style={{ borderBottom: `1px solid ${OFF_WHITE}06` }}
                  >
                    <span style={{ color: "#16A34A" }}>✓</span>
                    <span className="text-white text-sm font-medium">{k}</span>
                    <span
                      className="text-sm"
                      style={{ color: `${COOL_GREY}80` }}
                    >
                      — {v}
                    </span>
                  </div>
                ))}
              </div>
              <div>
                <p
                  className="text-xs font-mono tracking-widest uppercase mb-4"
                  style={{ color: "#DC2626", fontFamily: "'DM Mono', monospace" }}
                >
                  Baines Does Not Sound
                </p>
                {[
                  ["Corporate", "Stiff, formal, distant"],
                  ["Robotic", "Cold, generic, automated"],
                  ["Overly formal", "Condescending or stuffy"],
                  ["Overly playful", "Flippant about money"],
                  ["Jargon-heavy", "Confusing and exclusive"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex gap-4 py-2.5"
                    style={{ borderBottom: `1px solid ${OFF_WHITE}06` }}
                  >
                    <span style={{ color: "#DC2626" }}>✕</span>
                    <span
                      className="text-sm font-medium"
                      style={{ color: COOL_GREY }}
                    >
                      {k}
                    </span>
                    <span
                      className="text-sm"
                      style={{ color: `${COOL_GREY}60` }}
                    >
                      — {v}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <p
                className="text-[10px] tracking-[0.25em] uppercase"
                style={{ color: `${OFF_WHITE}35`, fontFamily: "'DM Mono', monospace" }}
              >
                Copy Examples
              </p>
              {[
                {
                  ctx: "Error Message",
                  before: "TRANSACTION FAILED",
                  after: "We couldn't complete your transfer. Your money is safe. Please try again.",
                },
                {
                  ctx: "Success",
                  before: "TRANSFER SUCCESSFUL",
                  after: "Done. ₦50,000 is on its way to Adaeze.",
                },
                {
                  ctx: "Push Notification",
                  before: "Your account has been credited.",
                  after: "Your ₦25,000 from Chukwuemeka just landed.",
                },
                {
                  ctx: "Button Label",
                  before: "SUBMIT",
                  after: "Send money",
                },
                {
                  ctx: "Empty State",
                  before: "No transactions found.",
                  after: "Nothing here yet. Make a transfer and it will show up here.",
                },
              ].map(({ ctx, before, after }) => (
                <div
                  key={ctx}
                  className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-start p-5"
                  style={{ border: `1px solid ${OFF_WHITE}10` }}
                >
                  <p
                    className="text-xs font-mono tracking-wide lg:col-span-1"
                    style={{ color: BLUE, fontFamily: "'DM Mono', monospace" }}
                  >
                    {ctx}
                  </p>
                  <div className="lg:col-span-2">
                    <p
                      className="text-[10px] tracking-widest uppercase mb-1"
                      style={{ color: `${OFF_WHITE}30` }}
                    >
                      Before
                    </p>
                    <p
                      className="text-sm italic"
                      style={{ color: `${COOL_GREY}80` }}
                    >
                      &ldquo;{before}&rdquo;
                    </p>
                  </div>
                  <div className="lg:col-span-2">
                    <p
                      className="text-[10px] tracking-widest uppercase mb-1"
                      style={{ color: "#16A34A" }}
                    >
                      Baines
                    </p>
                    <p className="text-white text-sm">
                      &ldquo;{after}&rdquo;
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────── 15 PRODUCT EXPERIENCE ─────────── */}
        <section
          id="product"
          className="min-h-screen"
          style={{ background: OFF_WHITE }}
        >
          <div className="p-12 lg:p-20">
            <p
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: BLUE, fontFamily: "'DM Mono', monospace" }}
            >
              Section 15 — Product Experience
            </p>
            <h2
              className="font-bold mb-4"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                color: NAVY,
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
              }}
            >
              The App.
            </h2>
            <p
              className="text-sm mb-16 max-w-md"
              style={{ color: COOL_GREY }}
            >
              The first expression of the new Baines. Every screen embodies
              the five principles: Personal · Effortless · Clear · Secure ·
              Refined.
            </p>

            <div className="flex gap-6 overflow-x-auto pb-4">
              {/* Home screen */}
              <div className="shrink-0 w-48">
                <div
                  className="rounded-2xl p-1.5 shadow-2xl"
                  style={{ background: NEAR_BLACK }}
                >
                  <div
                    className="rounded-xl overflow-hidden h-96"
                    style={{ background: NAVY }}
                  >
                    <div className="p-4 h-full flex flex-col text-[9px]">
                      <div className="flex justify-between items-start mb-5">
                        <div>
                          <p style={{ color: `${OFF_WHITE}50` }}>Good morning,</p>
                          <p className="font-semibold text-sm text-white">Adaeze ✦</p>
                        </div>
                        <div
                          className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] text-white"
                          style={{ background: BLUE }}
                        >
                          A
                        </div>
                      </div>
                      <div
                        className="p-3 mb-4 rounded"
                        style={{ background: BLUE }}
                      >
                        <p style={{ color: `${OFF_WHITE}70` }} className="text-[8px] mb-1">
                          Total Balance
                        </p>
                        <p
                          className="text-white font-bold text-xl"
                          style={{ fontFamily: "'DM Mono', monospace" }}
                        >
                          ₦1,250,000
                        </p>
                        <p style={{ color: `${OFF_WHITE}50` }} className="text-[8px] mt-1">
                          Savings · **** 4412
                        </p>
                      </div>
                      <div className="grid grid-cols-4 gap-2 mb-4">
                        {["Transfer", "Airtime", "Bills", "More"].map((a) => (
                          <div key={a} className="flex flex-col items-center gap-1">
                            <div
                              className="w-8 h-8 flex items-center justify-center"
                              style={{ background: `${OFF_WHITE}10` }}
                            >
                              <div
                                className="w-3 h-3"
                                style={{ border: `1px solid ${OFF_WHITE}40` }}
                              />
                            </div>
                            <p style={{ color: `${OFF_WHITE}60` }} className="text-[7px]">
                              {a}
                            </p>
                          </div>
                        ))}
                      </div>
                      <p
                        className="text-[8px] mb-2"
                        style={{ color: `${OFF_WHITE}40` }}
                      >
                        Recent
                      </p>
                      {[
                        { name: "Chukwuemeka O.", amt: "+₦25,000", d: "Today" },
                        { name: "Netflix", amt: "−₦4,900", d: "Yesterday" },
                        { name: "Kemi Adesanya", amt: "+₦50,000", d: "Mon" },
                      ].map(({ name, amt, d }) => (
                        <div
                          key={name}
                          className="flex justify-between items-center py-1.5"
                          style={{ borderBottom: `1px solid ${OFF_WHITE}06` }}
                        >
                          <div>
                            <p className="text-white font-medium text-[8px]">
                              {name}
                            </p>
                            <p className="text-[7px]" style={{ color: `${OFF_WHITE}40` }}>
                              {d}
                            </p>
                          </div>
                          <p
                            className="font-mono text-[8px]"
                            style={{
                              color: amt.startsWith("+") ? "#16A34A" : `${OFF_WHITE}70`,
                              fontFamily: "'DM Mono', monospace",
                            }}
                          >
                            {amt}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <p
                  className="text-center text-xs mt-3 font-mono tracking-widest uppercase"
                  style={{ color: COOL_GREY, fontFamily: "'DM Mono', monospace" }}
                >
                  Home
                </p>
              </div>

              {/* Transfer screen */}
              <div className="shrink-0 w-48">
                <div
                  className="rounded-2xl p-1.5 shadow-2xl"
                  style={{ background: NEAR_BLACK }}
                >
                  <div className="rounded-xl overflow-hidden h-96 bg-white">
                    <div className="p-4 h-full flex flex-col text-[9px]">
                      <div className="flex items-center gap-2 mb-5">
                        <div
                          className="w-5 h-5 flex items-center justify-center"
                          style={{ border: `1px solid ${CHARCOAL}20` }}
                        >
                          <span className="text-[8px]">←</span>
                        </div>
                        <p
                          className="font-semibold text-sm"
                          style={{ color: NAVY }}
                        >
                          Send money
                        </p>
                      </div>
                      <div
                        className="p-3 mb-3"
                        style={{ border: `1px solid ${CHARCOAL}12` }}
                      >
                        <p className="text-[8px] mb-1" style={{ color: COOL_GREY }}>
                          To
                        </p>
                        <p
                          className="font-medium text-[9px]"
                          style={{ color: NAVY }}
                        >
                          Adaeze Okonkwo
                        </p>
                        <p
                          className="font-mono text-[8px]"
                          style={{ color: COOL_GREY, fontFamily: "'DM Mono', monospace" }}
                        >
                          Access · **** 7821
                        </p>
                      </div>
                      <div
                        className="p-3 mb-3"
                        style={{ border: `1px solid ${BLUE}` }}
                      >
                        <p className="text-[8px] mb-1" style={{ color: COOL_GREY }}>
                          Amount
                        </p>
                        <p
                          className="font-bold text-xl"
                          style={{ color: NAVY, fontFamily: "'DM Mono', monospace" }}
                        >
                          ₦50,000
                        </p>
                      </div>
                      <p
                        className="text-[8px] mb-3"
                        style={{ color: COOL_GREY }}
                      >
                        Fee: ₦10.75 · You send ₦50,010.75
                      </p>
                      <div
                        className="p-3 mb-4"
                        style={{ border: `1px solid ${CHARCOAL}12` }}
                      >
                        <p className="text-[8px] mb-1" style={{ color: COOL_GREY }}>
                          Note (optional)
                        </p>
                        <p className="text-[8px]" style={{ color: NAVY }}>
                          November rent payment
                        </p>
                      </div>
                      <div
                        className="mt-auto p-3 text-center"
                        style={{ background: NAVY }}
                      >
                        <p className="text-white text-[9px] font-semibold">
                          Confirm transfer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <p
                  className="text-center text-xs mt-3 font-mono tracking-widest uppercase"
                  style={{ color: COOL_GREY, fontFamily: "'DM Mono', monospace" }}
                >
                  Transfer
                </p>
              </div>

              {/* Success screen */}
              <div className="shrink-0 w-48">
                <div
                  className="rounded-2xl p-1.5 shadow-2xl"
                  style={{ background: NEAR_BLACK }}
                >
                  <div
                    className="rounded-xl overflow-hidden h-96 flex flex-col items-center justify-center p-4 text-center"
                    style={{ background: OFF_WHITE }}
                  >
                    <div
                      className="w-14 h-14 flex items-center justify-center mb-4"
                      style={{ background: "#16A34A" }}
                    >
                      <span className="text-white text-xl">✓</span>
                    </div>
                    <p
                      className="font-semibold text-sm mb-1"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif", color: NAVY }}
                    >
                      Done.
                    </p>
                    <p
                      className="text-[9px] mb-6 leading-relaxed max-w-[120px]"
                      style={{ color: `${CHARCOAL}70` }}
                    >
                      ₦50,000 is on its way to Adaeze Okonkwo.
                    </p>
                    <div
                      className="bg-white p-3 w-full mb-4"
                      style={{ border: `1px solid ${CHARCOAL}10` }}
                    >
                      <div className="flex justify-between mb-1">
                        <span className="text-[8px]" style={{ color: COOL_GREY }}>
                          Reference
                        </span>
                        <span
                          className="font-mono text-[8px]"
                          style={{ color: NAVY, fontFamily: "'DM Mono', monospace" }}
                        >
                          TXN·2025·0124
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[8px]" style={{ color: COOL_GREY }}>
                          Time
                        </span>
                        <span
                          className="font-mono text-[8px]"
                          style={{ color: NAVY, fontFamily: "'DM Mono', monospace" }}
                        >
                          14:32 · 02 Sep
                        </span>
                      </div>
                    </div>
                    <p className="text-[9px]" style={{ color: BLUE }}>
                      Share receipt
                    </p>
                  </div>
                </div>
                <p
                  className="text-center text-xs mt-3 font-mono tracking-widest uppercase"
                  style={{ color: COOL_GREY, fontFamily: "'DM Mono', monospace" }}
                >
                  Success
                </p>
              </div>

              {/* Savings screen */}
              <div className="shrink-0 w-48">
                <div
                  className="rounded-2xl p-1.5 shadow-2xl"
                  style={{ background: NEAR_BLACK }}
                >
                  <div
                    className="rounded-xl overflow-hidden h-96"
                    style={{ background: NAVY }}
                  >
                    <div className="p-4 h-full flex flex-col">
                      <p className="text-white font-semibold text-sm mb-1">
                        Savings
                      </p>
                      <p
                        className="text-[8px] mb-4"
                        style={{ color: `${OFF_WHITE}50` }}
                      >
                        Your goals, in progress.
                      </p>
                      {[
                        { name: "School fees", target: "₦300,000", saved: "₦210,000", pct: 70 },
                        { name: "New phone", target: "₦150,000", saved: "₦45,000", pct: 30 },
                        { name: "Emergency", target: "₦500,000", saved: "₦500,000", pct: 100 },
                      ].map(({ name, target, saved, pct }) => (
                        <div
                          key={name}
                          className="p-3 mb-2"
                          style={{ background: "#1C2B45" }}
                        >
                          <div className="flex justify-between mb-2">
                            <p
                              className="text-white font-medium text-[9px]"
                            >
                              {name}
                            </p>
                            <p
                              className="font-mono text-[8px]"
                              style={{ color: BLUE, fontFamily: "'DM Mono', monospace" }}
                            >
                              {pct}%
                            </p>
                          </div>
                          <div
                            className="w-full h-1 mb-2"
                            style={{ background: `${OFF_WHITE}10` }}
                          >
                            <div
                              className="h-full"
                              style={{
                                width: `${pct}%`,
                                background: pct === 100 ? "#16A34A" : BLUE,
                              }}
                            />
                          </div>
                          <div className="flex justify-between">
                            <span
                              className="font-mono text-[8px]"
                              style={{ color: COOL_GREY, fontFamily: "'DM Mono', monospace" }}
                            >
                              {saved}
                            </span>
                            <span
                              className="font-mono text-[8px]"
                              style={{ color: `${COOL_GREY}60`, fontFamily: "'DM Mono', monospace" }}
                            >
                              {target}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <p
                  className="text-center text-xs mt-3 font-mono tracking-widest uppercase"
                  style={{ color: COOL_GREY, fontFamily: "'DM Mono', monospace" }}
                >
                  Savings
                </p>
              </div>

              {/* Cards screen */}
              <div className="shrink-0 w-48">
                <div
                  className="rounded-2xl p-1.5 shadow-2xl"
                  style={{ background: NEAR_BLACK }}
                >
                  <div
                    className="rounded-xl overflow-hidden h-96"
                    style={{ background: OFF_WHITE }}
                  >
                    <div className="p-4 h-full flex flex-col text-[9px]">
                      <p
                        className="font-semibold text-sm mb-4"
                        style={{ color: NAVY }}
                      >
                        My Cards
                      </p>
                      <div
                        className="p-3 mb-4 relative overflow-hidden"
                        style={{ background: NAVY, aspectRatio: "1.586/1" }}
                      >
                        <div
                          className="absolute bottom-0 right-0 w-16 h-16 translate-x-4 translate-y-4"
                          style={{ border: `1px solid ${OFF_WHITE}12` }}
                        />
                        <div
                          className="absolute bottom-4 right-4 w-10 h-10"
                          style={{ border: `1px solid ${BLUE}30` }}
                        />
                        <p
                          className="text-white font-black text-[10px] mb-1"
                          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                        >
                          BAINES
                        </p>
                        <p
                          className="text-white font-mono text-[8px] mt-auto"
                          style={{ fontFamily: "'DM Mono', monospace" }}
                        >
                          **** **** **** 4412
                        </p>
                        <p
                          className="text-white text-[8px]"
                          style={{ color: `${OFF_WHITE}60` }}
                        >
                          ADAEZE O. OKONKWO
                        </p>
                      </div>
                      <div className="space-y-2">
                        {[
                          ["Card status", "Active"],
                          ["Daily limit", "₦500,000"],
                          ["Spending today", "₦12,400"],
                        ].map(([k, v]) => (
                          <div key={k} className="flex justify-between">
                            <span style={{ color: COOL_GREY }}>{k}</span>
                            <span
                              className="font-mono font-medium"
                              style={{ color: NAVY, fontFamily: "'DM Mono', monospace" }}
                            >
                              {v}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <p
                  className="text-center text-xs mt-3 font-mono tracking-widest uppercase"
                  style={{ color: COOL_GREY, fontFamily: "'DM Mono', monospace" }}
                >
                  Cards
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────── 16 BRAND APPLICATIONS ─────────── */}
        <section
          id="applications"
          className="min-h-screen"
          style={{ background: NEAR_BLACK }}
        >
          <div className="p-12 lg:p-20">
            <p
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: BLUE, fontFamily: "'DM Mono', monospace" }}
            >
              Section 16 — Brand Applications
            </p>
            <h2
              className="text-white font-bold mb-4"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
              }}
            >
              Real World.
            </h2>
            <p
              className="text-sm mb-16 max-w-md"
              style={{ color: COOL_GREY }}
            >
              One brand, applied consistently across every surface and medium.
              Every application must answer the five quality questions.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Debit Card */}
              <div>
                <p
                  className="text-[10px] tracking-widest uppercase mb-3"
                  style={{ color: `${OFF_WHITE}35`, fontFamily: "'DM Mono', monospace" }}
                >
                  08 — Debit Card
                </p>
                <div
                  className="relative overflow-hidden flex flex-col justify-between p-5"
                  style={{
                    background: NAVY,
                    border: `1px solid ${OFF_WHITE}08`,
                    aspectRatio: "1.586/1",
                  }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, ${BLUE}25 0%, transparent 60%)`,
                    }}
                  />
                  <div
                    className="absolute bottom-0 right-0 w-32 h-32 translate-x-8 translate-y-8"
                    style={{ border: `1px solid ${OFF_WHITE}08` }}
                  />
                  <div
                    className="absolute bottom-8 right-8 w-20 h-20"
                    style={{ border: `1px solid ${BLUE}20` }}
                  />
                  <div className="relative z-10 flex justify-between items-start">
                    <div>
                      <p
                        className="text-white font-black text-base tracking-wider"
                        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                      >
                        BAINES
                      </p>
                      <p
                        className="text-[8px] tracking-widest"
                        style={{ color: BLUE }}
                      >
                        CREDIT MICROFINANCE BANK
                      </p>
                    </div>
                    <div
                      className="w-8 h-6 rounded-sm"
                      style={{ background: "#D97706cc" }}
                    />
                  </div>
                  <div className="relative z-10">
                    <p
                      className="font-mono text-xs tracking-widest mb-2"
                      style={{ color: `${OFF_WHITE}60`, fontFamily: "'DM Mono', monospace" }}
                    >
                      4412 •••• •••• 7821
                    </p>
                    <div className="flex justify-between">
                      <div>
                        <p
                          className="text-[7px]"
                          style={{ color: `${OFF_WHITE}35` }}
                        >
                          CARD HOLDER
                        </p>
                        <p className="text-white text-[9px] font-medium">
                          ADAEZE O. OKONKWO
                        </p>
                      </div>
                      <div>
                        <p
                          className="text-[7px]"
                          style={{ color: `${OFF_WHITE}35` }}
                        >
                          EXPIRES
                        </p>
                        <p
                          className="text-white text-[9px] font-mono"
                          style={{ fontFamily: "'DM Mono', monospace" }}
                        >
                          09/29
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instagram Post */}
              <div>
                <p
                  className="text-[10px] tracking-widest uppercase mb-3"
                  style={{ color: `${OFF_WHITE}35`, fontFamily: "'DM Mono', monospace" }}
                >
                  03 — Instagram Post
                </p>
                <div
                  className="relative overflow-hidden"
                  style={{ aspectRatio: "1/1", background: NAVY }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1784652951090-faffc6417c0f?w=400&h=400&fit=crop&auto=format"
                    alt="Campaign visual"
                    className="w-full h-full object-cover opacity-55"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to top, ${NEAR_BLACK}e0, transparent 50%)`,
                    }}
                  />
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <div
                      className="w-px h-12"
                      style={{ background: BLUE }}
                    />
                    <p
                      className="font-mono text-[9px] text-white"
                      style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                      @bainesbank
                    </p>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <p
                      className="text-white text-2xl font-bold leading-tight mb-2"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      Your money.<br />Your plan.
                    </p>
                    <p
                      className="text-[10px] tracking-widest uppercase"
                      style={{ color: BLUE }}
                    >
                      BAINES SAVINGS ↗
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <p
                  className="text-[10px] tracking-widest uppercase mb-3"
                  style={{ color: `${OFF_WHITE}35`, fontFamily: "'DM Mono', monospace" }}
                >
                  06 — Email
                </p>
                <div
                  className="bg-white overflow-hidden"
                  style={{ border: `1px solid ${CHARCOAL}12` }}
                >
                  <div className="p-4" style={{ background: NAVY }}>
                    <p
                      className="text-white font-black text-sm"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      BAINES
                    </p>
                  </div>
                  <div className="p-5">
                    <p
                      className="font-semibold text-sm mb-1"
                      style={{ color: NAVY }}
                    >
                      Your transfer is on its way.
                    </p>
                    <p
                      className="text-xs leading-relaxed mb-4"
                      style={{ color: COOL_GREY }}
                    >
                      Hi Adaeze, your transfer of ₦50,000 to Chukwuemeka Obi was processed successfully at 14:32 today.
                    </p>
                    <div
                      className="p-3 mb-4"
                      style={{ border: `1px solid ${CHARCOAL}10` }}
                    >
                      {[
                        ["Amount", "₦50,000"],
                        ["To", "Chukwuemeka Obi"],
                        ["Reference", "TXN2025-0124"],
                      ].map(([k, v]) => (
                        <div
                          key={k}
                          className="flex justify-between text-[10px] mb-1"
                        >
                          <span style={{ color: COOL_GREY }}>{k}</span>
                          <span
                            className="font-mono font-semibold"
                            style={{ color: NAVY, fontFamily: "'DM Mono', monospace" }}
                          >
                            {v}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="p-2 text-center" style={{ background: NAVY }}>
                      <p className="text-white text-[10px]">
                        View full receipt
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Billboard */}
              <div className="lg:col-span-2">
                <p
                  className="text-[10px] tracking-widest uppercase mb-3"
                  style={{ color: `${OFF_WHITE}35`, fontFamily: "'DM Mono', monospace" }}
                >
                  11 — Billboard / OOH
                </p>
                <div
                  className="relative overflow-hidden flex items-center"
                  style={{ aspectRatio: "3/1", background: BLUE }}
                >
                  <div
                    className="absolute right-0 top-0 h-full w-1/2 overflow-hidden opacity-40"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1784652952096-ea98d4601d7a?w=600&h=200&fit=crop&auto=format"
                      alt="Campaign"
                      className="h-full w-full object-cover"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(90deg, ${BLUE} 0%, transparent 60%)`,
                      }}
                    />
                  </div>
                  <div className="relative z-10 px-8">
                    <p
                      className="text-white text-3xl lg:text-4xl font-black leading-none mb-2"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      Building the<br />Bank of You.
                    </p>
                    <p
                      className="text-xs tracking-widest"
                      style={{ color: `${OFF_WHITE}70` }}
                    >
                      BAINES CREDIT MICROFINANCE BANK
                    </p>
                  </div>
                </div>
              </div>

              {/* SMS */}
              <div>
                <p
                  className="text-[10px] tracking-widest uppercase mb-3"
                  style={{ color: `${OFF_WHITE}35`, fontFamily: "'DM Mono', monospace" }}
                >
                  07 — SMS
                </p>
                <div className="p-4 space-y-3" style={{ background: "#1C2333" }}>
                  {[
                    "Adaeze, your Baines account has been credited with ₦85,000 from CHUKWUEMEKA OBI. Balance: ₦1,335,000. 02 Sep 14:32.",
                    "Your savings target for School Fees is 70% complete. ₦90,000 to go. Keep building. — BAINES",
                  ].map((msg, i) => (
                    <div
                      key={i}
                      className="p-3 max-w-[85%]"
                      style={{ background: "#2C3A50" }}
                    >
                      <p
                        className="text-white text-xs leading-relaxed"
                      >
                        {msg}
                      </p>
                      <p
                        className="text-[9px] mt-1"
                        style={{ color: COOL_GREY, fontFamily: "'DM Mono', monospace" }}
                      >
                        BAINES · {i === 0 ? "14:32" : "09:00"}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────── 17 ONE BAINES EVERYWHERE ─────────── */}
        <section
          id="everywhere"
          className="min-h-screen relative overflow-hidden"
          style={{ background: OFF_WHITE }}
        >
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{ border: `1px solid ${CHARCOAL}06` }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{ border: `1px solid ${CHARCOAL}06` }}
          />

          <div className="relative z-10 p-12 lg:p-20">
            <p
              className="text-xs tracking-[0.3em] uppercase mb-20"
              style={{ color: BLUE, fontFamily: "'DM Mono', monospace" }}
            >
              Section 17 — One Baines, Everywhere
            </p>

            <div className="text-center mb-20">
              <h2
                className="font-black leading-tight"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  color: NAVY,
                  fontSize: "clamp(2.5rem, 7vw, 6rem)",
                }}
              >
                ONE IDENTITY.<br />
                <span style={{ color: BLUE }}>ONE EXPERIENCE.</span><br />
                EVERYWHERE.
              </h2>
            </div>

            <div className="grid grid-cols-3 lg:grid-cols-9 gap-3">
              {[
                { label: "Mobile", icon: "M" },
                { label: "Website", icon: "W" },
                { label: "Social", icon: "S" },
                { label: "Card", icon: "C" },
                { label: "Email", icon: "E" },
                { label: "SMS", icon: "T" },
                { label: "Campaigns", icon: "K" },
                { label: "Banking Hall", icon: "B" },
                { label: "Support", icon: "P" },
              ].map(({ label, icon }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-3 p-4 bg-white transition-all cursor-default"
                  style={{ border: `1px solid ${CHARCOAL}10` }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLDivElement).style.borderColor = BLUE
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLDivElement).style.borderColor = `${CHARCOAL}10`
                  }}
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center text-white text-sm font-bold"
                    style={{ background: NAVY, fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {icon}
                  </div>
                  <p
                    className="text-[10px] text-center tracking-widest uppercase"
                    style={{ color: `${CHARCOAL}60` }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────── 18 CONTENT SYSTEM ─────────── */}
        <section
          id="content"
          className="min-h-screen"
          style={{ background: NAVY }}
        >
          <div className="p-12 lg:p-20">
            <p
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: BLUE, fontFamily: "'DM Mono', monospace" }}
            >
              Section 18 — Content System
            </p>
            <h2
              className="text-white font-bold mb-4"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
              }}
            >
              Five Territories.
            </h2>
            <p
              className="text-sm mb-16 max-w-md"
              style={{ color: COOL_GREY }}
            >
              What Baines talks about and how. Every piece of content should
              sit clearly within one of these territories.
            </p>

            <div className="space-y-2">
              {[
                {
                  n: "01",
                  name: "MONEY × LIFE",
                  tone: "Warm, relatable",
                  audience: "All customers",
                  ex: '"Your salary just landed. Now what?"',
                  visual: "Real lifestyle photography. People in their environments.",
                  purpose: "Connects banking to everyday life decisions.",
                },
                {
                  n: "02",
                  name: "BUILD × GROW",
                  tone: "Ambitious, energising",
                  audience: "Entrepreneurs, business owners",
                  ex: '"Your business account works as hard as you do."',
                  visual: "Aspirational. Progress imagery. Business in motion.",
                  purpose: "Speaks to customers who are building something.",
                },
                {
                  n: "03",
                  name: "FINANCIAL CLARITY",
                  tone: "Clear, educational",
                  audience: "All customers",
                  ex: '"Here\'s what your savings interest actually means."',
                  visual: "Clean, minimal. Data visualisations. Diagram-led.",
                  purpose: "Makes the complex feel simple and honest.",
                },
                {
                  n: "04",
                  name: "PRODUCT IN CONTEXT",
                  tone: "Functional, clear",
                  audience: "New and existing customers",
                  ex: '"Transfer money in under 30 seconds."',
                  visual: "App screens. Product features. Demonstrations.",
                  purpose: "Shows what Baines does and how.",
                },
                {
                  n: "05",
                  name: "THE BANK OF YOU",
                  tone: "Personal, empowering",
                  audience: "All customers",
                  ex: '"You decide. We build the tools around it."',
                  visual: "Portraits. Confident individuals. Individual stories.",
                  purpose: "The brand idea made visible.",
                },
              ].map(({ n, name, tone, audience, ex, visual, purpose }) => (
                <details
                  key={n}
                  className="group"
                  style={{ border: `1px solid ${OFF_WHITE}10` }}
                >
                  <summary
                    className="flex items-center gap-6 p-5 cursor-pointer"
                    style={{ listStyle: "none" }}
                  >
                    <span
                      className="font-mono text-sm shrink-0"
                      style={{ color: BLUE, fontFamily: "'DM Mono', monospace" }}
                    >
                      {n}
                    </span>
                    <h3
                      className="text-white text-lg font-semibold flex-1"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      {name}
                    </h3>
                    <span className="text-xs" style={{ color: COOL_GREY }}>
                      {audience}
                    </span>
                    <span style={{ color: BLUE }} className="shrink-0">
                      ↓
                    </span>
                  </summary>
                  <div
                    className="px-5 pb-5 grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4"
                    style={{ borderTop: `1px solid ${OFF_WHITE}08` }}
                  >
                    <div>
                      <p
                        className="text-[10px] tracking-widests uppercase mb-2"
                        style={{ color: BLUE, fontFamily: "'DM Mono', monospace" }}
                      >
                        Purpose
                      </p>
                      <p className="text-sm" style={{ color: COOL_GREY }}>
                        {purpose}
                      </p>
                    </div>
                    <div>
                      <p
                        className="text-[10px] tracking-widests uppercase mb-2"
                        style={{ color: BLUE, fontFamily: "'DM Mono', monospace" }}
                      >
                        Tone & Visual
                      </p>
                      <p className="text-sm" style={{ color: COOL_GREY }}>
                        {tone} · {visual}
                      </p>
                    </div>
                    <div>
                      <p
                        className="text-[10px] tracking-widests uppercase mb-2"
                        style={{ color: BLUE, fontFamily: "'DM Mono', monospace" }}
                      >
                        Example Headline
                      </p>
                      <p className="text-white text-sm italic">{ex}</p>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────── 19 QUALITY BAR ─────────── */}
        <section
          id="quality"
          className="min-h-screen"
          style={{ background: BLUE }}
        >
          <div className="p-12 lg:p-20 min-h-screen flex flex-col justify-between">
            <p
              className="text-xs tracking-[0.3em] uppercase"
              style={{ color: `${OFF_WHITE}60`, fontFamily: "'DM Mono', monospace" }}
            >
              Section 19 — Creative Quality Bar
            </p>
            <div>
              <h2
                className="text-white font-black mb-12 leading-tight"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "clamp(2.5rem, 6vw, 5rem)",
                }}
              >
                Five Questions.<br />Every Time.
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
                {[
                  { n: "01", q: "IS IT BAINES?", note: "Does it look and feel like us?" },
                  { n: "02", q: "IS IT PREMIUM?", note: "Does it reflect our quality standard?" },
                  { n: "03", q: "IS IT CLEAR?", note: "Can everyone understand it immediately?" },
                  { n: "04", q: "IS IT HUMAN?", note: "Does it speak to a real person?" },
                  { n: "05", q: "IS IT CONSISTENT?", note: "Does it connect to everything else?" },
                ].map(({ n, q, note }) => (
                  <div
                    key={n}
                    className="p-6 transition-colors"
                    style={{ border: `1px solid ${OFF_WHITE}22` }}
                    onMouseEnter={(e) => {
                      ;(e.currentTarget as HTMLDivElement).style.background = `${OFF_WHITE}12`
                    }}
                    onMouseLeave={(e) => {
                      ;(e.currentTarget as HTMLDivElement).style.background = "transparent"
                    }}
                  >
                    <p
                      className="font-mono text-xs mb-4"
                      style={{ color: `${OFF_WHITE}50`, fontFamily: "'DM Mono', monospace" }}
                    >
                      {n}
                    </p>
                    <h3 className="text-white font-bold text-base mb-3 leading-tight">
                      {q}
                    </h3>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: `${OFF_WHITE}60` }}
                    >
                      {note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ borderTop: `1px solid ${OFF_WHITE}20` }} className="pt-6">
              <p className="text-white text-sm">
                If the answer is NO to two or more —
              </p>
              <p
                className="text-white text-2xl font-black"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                REWORK IT.
              </p>
            </div>
          </div>
        </section>

        {/* ─────────── 20 GOVERNANCE ─────────── */}
        <section
          id="governance"
          className="min-h-[70vh]"
          style={{ background: OFF_WHITE }}
        >
          <div className="p-12 lg:p-20">
            <p
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: BLUE, fontFamily: "'DM Mono', monospace" }}
            >
              Section 20 — Governance
            </p>
            <h2
              className="font-bold mb-12"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                color: NAVY,
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
              }}
            >
              Three Levels.
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {[
                {
                  level: "LEVEL 01",
                  name: "SYSTEM",
                  desc: "Core brand elements that never change without formal approval. Fixed, protected, and owned by the brand team.",
                  items: ["Logo mark", "Baines Blue", "Barlow Condensed + Satoshi", "Core grid", "Experience principles"],
                  bg: NAVY,
                  fg: "white",
                  accent: BLUE,
                },
                {
                  level: "LEVEL 02",
                  name: "EXPERIENCE",
                  desc: "Product, marketing and communication applications. Consistent but adaptable within the system.",
                  items: ["Campaign layouts", "UI components", "Email templates", "Social formats", "Customer comms"],
                  bg: BLUE,
                  fg: "white",
                  accent: `${OFF_WHITE}80`,
                },
                {
                  level: "LEVEL 03",
                  name: "EXPERIMENTATION",
                  desc: "Campaigns and creative exploration. Can push further — but must never compromise recognition or consistency.",
                  items: ["Seasonal campaigns", "Partner activations", "Event materials", "Limited executions"],
                  bg: "white",
                  fg: NAVY,
                  accent: BLUE,
                },
              ].map(({ level, name, desc, items, bg, fg, accent }) => (
                <div
                  key={level}
                  className="p-8"
                  style={{ background: bg, border: `1px solid ${CHARCOAL}12` }}
                >
                  <p
                    className="font-mono text-xs tracking-widest uppercase mb-2"
                    style={{ color: accent, fontFamily: "'DM Mono', monospace" }}
                  >
                    {level}
                  </p>
                  <h3
                    className="text-2xl font-bold mb-4"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", color: fg }}
                  >
                    {name}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{ color: fg === "white" ? `${OFF_WHITE}70` : `${CHARCOAL}70` }}
                  >
                    {desc}
                  </p>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="text-xs flex gap-2"
                        style={{
                          color: fg === "white" ? `${OFF_WHITE}50` : `${CHARCOAL}50`,
                        }}
                      >
                        <span>—</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────── 21 FINAL MANIFESTO ─────────── */}
        <section
          id="manifesto"
          className="min-h-screen relative overflow-hidden"
          style={{ background: NEAR_BLACK }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(${BLUE}04 1px, transparent 1px), linear-gradient(90deg, ${BLUE}04 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
          <div
            className="absolute left-0 top-0 w-[2px] h-full"
            style={{ background: BLUE }}
          />

          <div className="relative z-10 min-h-screen flex flex-col justify-between p-12 lg:p-24">
            <p
              className="text-xs tracking-[0.3em] uppercase"
              style={{ color: BLUE, fontFamily: "'DM Mono', monospace" }}
            >
              Section 21 — The Final Standard
            </p>

            <div>
              <div className="mb-16">
                <h2
                  className="text-white font-black leading-[0.85] tracking-tight"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "clamp(2.5rem, 7vw, 7.5rem)",
                  }}
                >
                  KEEP THE<br />IDENTITY.
                </h2>
                <h2
                  className="font-black leading-[0.85] tracking-tight"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    color: BLUE,
                    fontSize: "clamp(2.5rem, 7vw, 7.5rem)",
                  }}
                >
                  ELEVATE THE<br />EXPERIENCE.
                </h2>
                <h2
                  className="text-white font-black leading-[0.85] tracking-tight"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "clamp(2.5rem, 7vw, 7.5rem)",
                  }}
                >
                  BUILD THE<br />BANK OF YOU.
                </h2>
              </div>

              <div className="flex items-start gap-8 mb-16">
                <div
                  className="w-12 shrink-0 mt-3"
                  style={{ height: 1, background: BLUE }}
                />
                <p
                  className="text-base leading-relaxed max-w-lg"
                  style={{ color: COOL_GREY }}
                >
                  This system does not exist to impose limitations. It exists
                  to ensure that every person who creates something for Baines
                  — whether a push notification, a billboard, a product screen,
                  or a banking hall wall — creates something that makes Baines
                  stronger, not weaker.
                </p>
              </div>

              <div
                className="p-8 max-w-2xl"
                style={{ border: `1px solid ${BLUE}35` }}
              >
                <p
                  className="text-xs tracking-[0.3em] uppercase mb-6"
                  style={{ color: BLUE, fontFamily: "'DM Mono', monospace" }}
                >
                  THE BAINES STANDARD
                </p>
                <div className="space-y-4">
                  {[
                    "Every interaction feels intentional.",
                    "Every communication is clear.",
                    "Every experience is effortless.",
                    "Every design reflects the people it serves.",
                    "Every decision makes Baines stronger.",
                  ].map((line, i) => (
                    <div key={i} className="flex gap-4">
                      <span
                        className="font-mono text-xs mt-1 shrink-0"
                        style={{ color: BLUE, fontFamily: "'DM Mono', monospace" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-white text-sm leading-relaxed">
                        {line}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-end justify-between flex-wrap gap-4">
              <div>
                <p
                  className="text-[10px] tracking-[0.3em] uppercase"
                  style={{ color: `${OFF_WHITE}20` }}
                >
                  Baines Credit Microfinance Bank
                </p>
                <p
                  className="text-[10px] tracking-[0.3em] uppercase"
                  style={{ color: `${OFF_WHITE}20` }}
                >
                  Brand Experience System · Master Document · 2025
                </p>
              </div>
              <p
                className="text-6xl font-black"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  color: BLUE,
                  opacity: 0.15,
                }}
              >
                B
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
