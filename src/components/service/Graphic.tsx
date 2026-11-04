"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import "./graphic.scss";

/* =========================================================
   DATA
========================================================= */

const services = [
  {
    number: "01",
    icon: "✦",
    title: "Logo Design",
    description:
      "Create a distinctive logo that reflects your business identity and makes your brand memorable.",
  },
  {
    number: "02",
    icon: "◈",
    title: "Brand Identity",
    description:
      "Build a consistent brand with carefully selected colours, typography and visual elements.",
  },
  {
    number: "03",
    icon: "▧",
    title: "Social Media Design",
    description:
      "Engage your audience with professional posts, campaign creatives and promotional graphics.",
  },
  {
    number: "04",
    icon: "▤",
    title: "Brochure & Flyer",
    description:
      "Present your products and services through polished, easy-to-understand marketing materials.",
  },
  {
    number: "05",
    icon: "▣",
    title: "Poster & Banner",
    description:
      "Promote your business, events and offers with impactful print and digital designs.",
  },
  {
    number: "06",
    icon: "⌘",
    title: "Digital Ad Creatives",
    description:
      "Create attention-grabbing advertising graphics for websites and digital campaigns.",
  },
  {
    number: "07",
    icon: "❖",
    title: "Business Cards & Stationery",
    description:
      "Letterheads, business cards, envelopes and ID cards that present your company professionally.",
  },
  {
    number: "08",
    icon: "◉",
    title: "Packaging & Label Design",
    description:
      "Product packaging and label designs that attract attention and communicate quality.",
  },
];

const pillars = [
  {
    title: "Tell Your Story",
    description:
      "Every colour, shape and typeface is chosen to communicate who you are and what you stand for.",
  },
  {
    title: "Build Recognition",
    description:
      "Consistent visuals help customers recognise and remember your business everywhere they see it.",
  },
  {
    title: "Create Trust",
    description:
      "Professional design builds credibility and gives customers confidence in your brand.",
  },
];

const deliverables = [
  {
    title: "Source Files",
    description: "Editable working files of your approved designs.",
  },
  {
    title: "Print-Ready Artwork",
    description: "High-resolution files prepared for professional printing.",
  },
  {
    title: "Web & Social Formats",
    description: "Optimised sizes for websites and social media platforms.",
  },
  {
    title: "Brand Guidelines",
    description: "Colours, fonts and usage rules to keep your brand consistent.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We learn about your business, target audience and design goals.",
  },
  {
    number: "02",
    title: "Create",
    description:
      "We develop creative concepts that communicate your brand message.",
  },
  {
    number: "03",
    title: "Refine",
    description:
      "We use your feedback to improve the design and final details.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "We prepare your approved design for digital or print use.",
  },
];

/* Colour themes for the brand panel (one per swatch, in swatch order) */
const panelThemes = [
  {
    name: "Sky Blue",
    swatch: "#3cb4f0",
    background: "linear-gradient(135deg, #3cb4f0 0%, #1f86c8 100%)",
    label: "#ffffff",
    text: "#ffffff",
    highlight: "#0f1650",
    markBg: "#ffffff",
    markColor: "#3cb4f0",
    line: "#ffffff",
  },
  {
    name: "Dark Maroon",
    swatch: "#7a1020",
    background: "linear-gradient(135deg, #8b1a2b 0%, #4a0a14 100%)",
    label: "#fbbf24",
    text: "#ffffff",
    highlight: "#fbbf24",
    markBg: "#fbbf24",
    markColor: "#5a0f1b",
    line: "#fbbf24",
  },
  {
    name: "Dark Yellow",
    swatch: "#b8860b",
    background: "linear-gradient(135deg, #c9950c 0%, #8a6508 100%)",
    label: "#ffffff",
    text: "#ffffff",
    highlight: "#2b1a00",
    markBg: "#ffffff",
    markColor: "#8a6508",
    line: "#ffffff",
  },
  {
    name: "Midnight Navy",
    swatch: "#111a5a",
    background: "linear-gradient(135deg, #1a2270 0%, #0d1347 100%)",
    label: "#3cb4f0",
    text: "#ffffff",
    highlight: "#3cb4f0",
    markBg: "#3cb4f0",
    markColor: "#ffffff",
    line: "#3cb4f0",
  },
  {
    name: "Dark Pink",
    swatch: "#be185d",
    background: "linear-gradient(135deg, #be185d 0%, #831843 100%)",
    label: "#ffffff",
    text: "#ffffff",
    highlight: "#fbcfe8",
    markBg: "#ffffff",
    markColor: "#9d174d",
    line: "#ffffff",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function Graphic() {
  // null = default look. Clicking a swatch applies that theme,
  // clicking the same swatch again goes back to the default look.
  const [activeTheme, setActiveTheme] = useState<number | null>(null);

  const theme = activeTheme !== null ? panelThemes[activeTheme] : null;

  const handleSwatchClick = (index: number) => {
    setActiveTheme((prev) => (prev === index ? null : index));
  };

  return (
    <div className="sbros-graphic-page">
      {/* HERO */}
      <section className="sbros-graphic-hero">
        <div className="sbros-graphic-container">
          <div className="sbros-graphic-hero-grid">
            <div className="sbros-graphic-hero-content">
              <span className="sbros-graphic-eyebrow">
                CREATIVE DESIGN SOLUTIONS
              </span>

              <h1>
                Design That Defines
                <span> Your Brand Identity</span>
              </h1>

              <p className="sbros-graphic-lead">
                At <strong>SBros Tech</strong>, we transform ideas into
                meaningful visual experiences. From logo design to
                digital creatives, we help your business communicate
                clearly, build recognition and stand out from the
                competition.
              </p>

              <p className="sbros-graphic-sub">
                Whether you are launching a new brand or refreshing an
                existing one, our designs are created around your
                audience, your message and your business goals.
              </p>

              <div className="sbros-graphic-actions">
                <Link
                  href="/contact-us"
                  className="sbros-graphic-btn sbros-graphic-btn-primary"
                >
                  Start Your Project <span>↗</span>
                </Link>
              </div>

              <div className="sbros-graphic-features">
  <div className="sbros-graphic-feature">
    <span className="sbros-graphic-check">✓</span>
    <div className="sbros-graphic-feature-content">
      <h4>Brand-Focused Creativity</h4>
      <p>Designs aligned with your identity.</p>
    </div>
  </div>

  <div className="sbros-graphic-feature">
    <span className="sbros-graphic-check">✓</span>
    <div className="sbros-graphic-feature-content">
      <h4>Professional Execution</h4>
      <p>Clean layouts and fine details.</p>
    </div>
  </div>

  <div className="sbros-graphic-feature">
    <span className="sbros-graphic-check">✓</span>
    <div className="sbros-graphic-feature-content">
      <h4>Digital &amp; Print Ready</h4>
      <p>Artwork prepared for every use.</p>
    </div>
  </div>
</div>
            </div>

            <div className="sbros-graphic-hero-visual">
              <div className="sbros-graphic-image-frame">
                <div className="sbros-graphic-image-label">
                  <span className="sbros-graphic-status-dot" />
                  CREATIVE BY DESIGN
                </div>

                <Image
                  src="/assets/images/strategy.jpg"
                  alt="Graphic design, branding and creative visual identity"
                  width={900}
                  height={700}
                  priority
                  className="sbros-graphic-main-image"
                  sizes="(max-width: 991px) 100vw, 50vw"
                />

                <div className="sbros-graphic-image-caption">
                  <span className="sbros-graphic-caption-icon">✦</span>
                  <div>
                    <strong>Creative by Design</strong>
                    <p>Visuals with a purpose</p>
                  </div>
                </div>
              </div>

              <span className="sbros-graphic-orb sbros-graphic-orb-one" />
              <span className="sbros-graphic-orb sbros-graphic-orb-two" />
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="sbros-graphic-intro">
        <div className="sbros-graphic-container">
          <div className="sbros-graphic-intro-grid">
            <div>
              <span className="sbros-graphic-eyebrow">
                DESIGN WITH PURPOSE
              </span>
              <h2>
                More Than Design
                <span> a Stronger Brand</span>
              </h2>
            </div>

            <p>
              Great design is more than appearance. It tells your
              story, builds recognition and creates a consistent
              experience across every place your customers see your
              brand.
            </p>
          </div>

          <div className="sbros-graphic-pillars">
            {pillars.map((item, index) => (
              <div className="sbros-graphic-pillar" key={item.title}>
                <span className="sbros-graphic-pillar-number">
                  0{index + 1}
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="sbros-graphic-services" id="graphic-services">
        <div className="sbros-graphic-container">
          <div className="sbros-graphic-section-heading">
            <div>
              <span className="sbros-graphic-eyebrow">WHAT WE CREATE</span>
              <h2>
                Graphic Design Services
                <span> For Your Business</span>
              </h2>
            </div>

            <p>
              From the first concept to the final artwork, our
              creative solutions help your business look professional
              and communicate with confidence.
            </p>
          </div>

          <div className="sbros-graphic-service-grid">
            {services.map((service) => (
              <article
                className="sbros-graphic-service-card"
                key={service.number}
              >
                <div className="sbros-graphic-card-top">
                  <span className="sbros-graphic-service-icon">
                    {service.icon}
                  </span>
                  <span className="sbros-graphic-service-number">
                    {service.number}
                  </span>
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="sbros-graphic-card-line" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="sbros-graphic-why">
        <div className="sbros-graphic-container">
          <div className="sbros-graphic-why-grid">
            <div className="sbros-graphic-why-visual">
              <div
                className="sbros-graphic-brand-panel"
                style={{
                  transition: "background 0.4s ease",
                  ...(theme ? { background: theme.background } : {}),
                }}
              >
                <span
                  className="sbros-graphic-panel-label"
                  style={{
                    transition: "color 0.4s ease",
                    ...(theme ? { color: theme.label } : {}),
                  }}
                >
                  SBROS TECH · CREATIVE STUDIO
                </span>

                <div
                  className="sbros-graphic-brand-mark"
                  style={{
                    transition: "background 0.4s ease, color 0.4s ease",
                    ...(theme
                      ? { background: theme.markBg, color: theme.markColor }
                      : {}),
                  }}
                >
                  B
                </div>

                <span
                  className="sbros-graphic-panel-line"
                  style={{
                    transition: "background 0.4s ease",
                    ...(theme ? { background: theme.line } : {}),
                  }}
                />

                <h3
                  style={{
                    transition: "color 0.4s ease",
                    ...(theme ? { color: theme.text } : {}),
                  }}
                >
                  Make Your Brand
                </h3>
                <h3
                  className="sbros-graphic-panel-highlight"
                  style={{
                    transition: "color 0.4s ease",
                    ...(theme ? { color: theme.highlight } : {}),
                  }}
                >
                  Impossible to Ignore.
                </h3>

                <div className="sbros-graphic-colour-swatches">
                  {panelThemes.map((item, index) => (
                    <span
                      key={item.name}
                      role="button"
                      tabIndex={0}
                      aria-label={`Change colour theme to ${item.name}`}
                      aria-pressed={activeTheme === index}
                      onClick={() => handleSwatchClick(index)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          handleSwatchClick(index);
                        }
                      }}
                      style={{
                        cursor: "pointer",
                        background: item.swatch,
                        transition: "transform 0.2s ease, box-shadow 0.2s ease",
                        transform:
                          activeTheme === index ? "scale(1.12)" : undefined,
                        boxShadow:
                          activeTheme === index
                            ? "0 0 0 3px rgba(60, 180, 240, 0.9)"
                            : undefined,
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="sbros-graphic-floating-label">
                <span>✦</span> Ideas Made Visual
              </div>
            </div>

            <div className="sbros-graphic-why-content">
              <span className="sbros-graphic-eyebrow">WHY SBROS TECH</span>

              <h2>
                Creative Solutions.
                <span> Consistent Quality.</span>
              </h2>

              <p>
                We combine creativity, attention to detail and your
                business objectives to produce designs that represent
                your brand professionally.
              </p>

              <div className="sbros-graphic-benefits">
                <div className="sbros-graphic-benefit">
                  <span>✓</span>
                  <div>
                    <h3>Brand-Focused Creativity</h3>
                    <p>Designs aligned with your identity and goals.</p>
                  </div>
                </div>

                <div className="sbros-graphic-benefit">
                  <span>✓</span>
                  <div>
                    <h3>Professional Visual Quality</h3>
                    <p>Clean layouts and thoughtful design details.</p>
                  </div>
                </div>

                <div className="sbros-graphic-benefit">
                  <span>✓</span>
                  <div>
                    <h3>Digital &amp; Print Designs</h3>
                    <p>Artwork prepared for your intended use.</p>
                  </div>
                </div>

                <div className="sbros-graphic-benefit">
                  <span>✓</span>
                  <div>
                    <h3>Collaborative Approach</h3>
                    <p>Your feedback remains part of the process.</p>
                  </div>
                </div>
              </div>

              <Link
                href="/contact-us"
                className="sbros-graphic-btn sbros-graphic-btn-primary"
              >
                Work With Us <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="sbros-graphic-deliver">
        <div className="sbros-graphic-container">
          <div className="sbros-graphic-section-heading sbros-graphic-center">
            <div>
              <span className="sbros-graphic-eyebrow">WHAT YOU GET</span>
              <h2>
                Everything You Need,
                <span> Ready To Use</span>
              </h2>
            </div>

            <p>
              Every project is delivered in the right formats so you
              can use your designs immediately, online or in print.
            </p>
          </div>

          <div className="sbros-graphic-deliver-grid">
            {deliverables.map((item) => (
              <div className="sbros-graphic-deliver-item" key={item.title}>
                <span className="sbros-graphic-deliver-icon">✓</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="sbros-graphic-process">
        <div className="sbros-graphic-container">
          <div className="sbros-graphic-process-heading">
            <span className="sbros-graphic-eyebrow">
              OUR CREATIVE WORKFLOW
            </span>

            <h2>
              From Your Idea
              <span> To The Final Design</span>
            </h2>

            <p>
              A clear, collaborative process helps keep your project
              organised from the initial discussion to delivery.
            </p>
          </div>

          <div className="sbros-graphic-process-grid">
            {process.map((step) => (
              <article
                className="sbros-graphic-process-card"
                key={step.number}
              >
                <span className="sbros-graphic-process-number">
                  {step.number}
                </span>

                <span className="sbros-graphic-process-dot" />

                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="sbros-graphic-cta">
        <div className="sbros-graphic-container">
          <div className="sbros-graphic-cta-inner">
            <div className="sbros-graphic-cta-decoration">✳</div>

            <div className="sbros-graphic-cta-content">
              <span className="sbros-graphic-eyebrow">
                LET&apos;S CREATE SOMETHING GREAT
              </span>

              <h2>
                Ready to Elevate
                <span> Your Brand Identity?</span>
              </h2>

              <p>
                Share your ideas with SBros Tech. Let&apos;s create
                thoughtful, professional visuals that help your
                business make a lasting impression.
              </p>
            </div>

            <Link
              href="/contact-us"
              className="sbros-graphic-btn sbros-graphic-btn-light"
            >
              Get In Touch <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}