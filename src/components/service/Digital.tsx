"use client";

import React from "react";
import Link from "next/link";

const services = [
  {
    id: 1,
    icon: "fa-magnifying-glass",
    title: "Search Engine Optimization",
    description:
      "Improve your search engine rankings, increase organic traffic, and make your website easier to discover.",
  },
  {
    id: 2,
    icon: "fa-share-nodes",
    title: "Social Media Marketing",
    description:
      "Build your brand presence and connect with your customers through engaging social media campaigns.",
  },
  {
    id: 3,
    icon: "fa-bullseye",
    title: "Google Ads & PPC",
    description:
      "Reach potential customers at the right time with targeted paid advertising campaigns.",
  },
  {
    id: 4,
    icon: "fa-pen-nib",
    title: "Content Marketing",
    description:
      "Create meaningful and engaging content that attracts your audience and builds trust around your brand.",
  },
  {
    id: 5,
    icon: "fa-lightbulb",
    title: "Online Branding",
    description:
      "Develop a consistent digital identity that makes your business stand out from competitors.",
  },
  {
    id: 6,
    icon: "fa-chart-line",
    title: "Analytics & Reporting",
    description:
      "Track campaign performance and use valuable insights to continuously improve your marketing strategy.",
  },
];

const digitalOffers = [
  {
    icon: "fa-solid fa-magnifying-glass",
    title: "SEO (On-Page and Off-Page)",
    description:
      "Optimize your website content and build quality backlinks to rank higher on search engines.",
  },
  {
    icon: "fa-solid fa-location-dot",
    title: "Local SEO",
    description:
      "Get found by nearby customers on Google Search and Google Maps.",
  },
  {
    icon: "fa-solid fa-hashtag",
    title: "Organic Social Media Optimisation",
    description:
      "Grow your reach and engagement naturally across social media platforms.",
  },
  {
    icon: "fa-brands fa-google",
    title: "Search Engine Marketing (Google)",
    description:
      "Targeted Google campaigns that put your business in front of ready-to-buy customers.",
  },
  {
    icon: "fa-solid fa-calendar-check",
    title: "Social Media Page Maintenance",
    description:
      "Regular posts and updates that keep your social media pages active and consistent.",
  },
  {
    icon: "fa-solid fa-star",
    title: "Online Reputation Management",
    description:
      "Monitor reviews and customer feedback to build a positive, trustworthy brand image online.",
  },
  {
    icon: "fa-brands fa-youtube",
    title: "Video Ads (YouTube)",
    description:
      "Engaging video advertisements that capture attention and build brand awareness.",
  },
  {
    icon: "fa-solid fa-envelope-open-text",
    title: "Email Marketing",
    description:
      "Personalized email campaigns that nurture leads and bring customers back.",
  },
  {
    icon: "fa-solid fa-handshake",
    title: "Affiliate Marketing",
    description:
      "Partner programs that expand your reach and reward you with results.",
  },
];

const benefits = [
  "Customized marketing strategies",
  "Data-driven campaign management",
  "Experienced digital marketing team",
  "Transparent performance reporting",
];

const process = [
  { num: "01", text: "Strategy" },
  { num: "02", text: "Execution" },
  { num: "03", text: "Optimization" },
  { num: "04", text: "Growth" },
];

const DigitalPage = () => {
  return (
    <main className="sbros-digital-page">
      {/* HERO SECTION */}
      {/* <section className="sbros-digital-hero">
        <div className="sbros-digital-overlay" />

        <div className="container sbros-digital-container">
          <div className="sbros-digital-hero-content">
            <span className="sbros-digital-subtitle">
              DIGITAL MARKETING
            </span>

            <h1>
              Turn Your Digital Presence
              <br className="desktop-break" />
              Into Business Growth
            </h1>

            <p>
              We create result-driven digital marketing strategies that
              increase your online visibility, attract the right audience,
              and help your business grow.
            </p>

            <div className="sbros-digital-buttons">
              <Link
                href="/contact"
                className="sbros-digital-btn"
              >
                Get Started
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                href="/about-us"
                className="sbros-digital-outline-btn"
              >
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </section> */}

      {/* INTRODUCTION SECTION */}
      <section className="sbros-digital-intro">
        <div className="container sbros-digital-container">
          <div className="row align-items-center sbros-digital-intro-row">
            <div className="col-lg-6">
              <div className="sbros-digital-image">
                <img
                  src="/assets/images/view.jpeg"
                  alt="Digital marketing and online business promotion"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="sbros-digital-content">
                <span className="sbros-section-label">
                  WHAT WE DO
                </span>

                <h2>
                  Digital Marketing Solutions
                  <br className="desktop-break" />
                  That Drive Real Growth
                </h2>

                <p>
                  At SBros Tech, we provide comprehensive digital marketing
                  solutions designed to help businesses build a strong
                  online presence and reach their target audience.
                </p>

                <p>
                  From search engine optimization and social media marketing
                  to paid advertising and content strategies, our team
                  focuses on creating campaigns that deliver measurable
                  results.
                </p>

                <Link
                  href="/contact-us"
                  className="sbros-common-btn"
                >
                  Start Your Project
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIGITAL MARKETING SERVICES */}
      <section className="sbros-digital-services">
        <div className="container sbros-digital-container">
          <div className="sbros-digital-heading">
            <span className="sbros-section-label">
              OUR SERVICES
            </span>

            <h2>
              Complete Digital Marketing
              <br className="desktop-break" />
              Services For Your Business
            </h2>

            <p>
              Everything you need to strengthen your brand and grow your
              business in the digital world.
            </p>
          </div>

          <div className="row g-4 sbros-digital-grid">
            {services.map((service) => (
              <div
                key={service.id}
                className="col-lg-4 col-md-6"
              >
                <article className="sbros-digital-card">
                  <div className="sbros-card-header">
                    <span className="sbros-card-number">
                      {String(service.id).padStart(2, "0")}
                    </span>

                    <div className="sbros-card-icon">
                      <i
                        className={`fa-solid ${service.icon}`}
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  <div className="sbros-card-body">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>

                  {/* <div className="sbros-card-bottom">
                    <span>Digital Growth</span>
                    <span aria-hidden="true">↗</span>
                  </div> */}
                </article>
              </div>
            ))}
          </div>

          {/* DIGITAL MARKETING RANGE OF SERVICES */}
          <div className="sbros-digital-offer">
            <div className="sbros-digital-offer__head">
              <h3>DIGITAL MARKETING</h3>
              <p>
                We offer the following range of digital marketing services
                to help businesses of all sizes achieve their online
                marketing goals.
              </p>
            </div>

            <div className="row g-4">
              {digitalOffers.map((offer) => (
                <div
                  key={offer.title}
                  className="col-lg-4 col-md-6"
                >
                  <div className="sbros-digital-offer__item">
                    <span
                      className="sbros-digital-offer__arrow"
                      aria-hidden="true"
                    >
                      <i className={offer.icon} />
                    </span>

                    <div>
                      <h4>{offer.title}</h4>
                      <p>{offer.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE SBROS TECH */}
      <section className="sbros-digital-why">
        <div className="container sbros-digital-container">
          <div className="row align-items-center sbros-digital-why-row">
            <div className="col-lg-6">
              <div className="sbros-digital-why-content">
                <span className="sbros-section-label">
                  WHY SBROS TECH
                </span>

                <h2>
                  Smart Strategies.
                  <br />
                  Measurable Results.
                </h2>

                <p>
                  We combine creativity, technology, data, and strategy
                  to create digital marketing campaigns that support
                  your business goals.
                </p>

                <div className="sbros-check-list">
                  {benefits.map((item) => (
                    <div
                      key={item}
                      className="sbros-check-item"
                    >
                      <span
                        className="sbros-check-icon"
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="sbros-digital-stat-box">
                {process.map((item) => (
                  <div
                    key={item.num}
                    className="sbros-stat-item"
                  >
                    <strong>{item.num}</strong>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="sbros-digital-cta">
        <div className="container sbros-digital-container">
          <div className="sbros-digital-cta-content">
            <span className="sbros-section-label">
              LET&apos;S GROW TOGETHER
            </span>

            <h2>
              Ready To Take Your
              <br className="desktop-break" />
              Business To The Next Level?
            </h2>

            <p>
              Let&apos;s create a powerful digital marketing strategy
              for your business.
            </p>

            <Link
              href="/contact-us"
              className="sbros-digital-btn"
            >
              Contact Us
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DigitalPage;