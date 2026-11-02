
"use client";

import React from "react";
import Image from "next/image";
// import "./website-development.scss";

const webDevelopmentServices = [
  {
    number: "01",
    title: "Business Website Development",
    description:
      "Professional business websites that showcase your brand, communicate your services, and build customer trust.",
  },
  {
    number: "02",
    title: "Responsive Web Design",
    description:
      "Modern, mobile-friendly websites that deliver a smooth experience across desktops, tablets, and smartphones.",
  },
  {
    number: "03",
    title: "Custom Web Solutions",
    description:
      "Tailored website solutions designed around your business goals, customer needs, and future growth.",
  },
  {
    number: "04",
    title: "Website Performance & SEO",
    description:
      "Fast-loading, well-structured websites built to improve usability, performance, and search visibility.",
  },
];

const developmentSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business goals, audience, and website requirements.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We create a clean, modern design that reflects your brand identity.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "We build responsive, reliable websites with a focus on functionality and usability.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We test your website across devices and prepare it for a smooth launch.",
  },
];

const WebsiteDevelopment = () => {
  return (
    <section className="sbros-webdev">
      {/* INTRODUCTION */}
      <div className="sbros-webdev__intro">
        <div className="sbros-webdev__container">
          <div className="sbros-webdev__intro-grid">
            <div className="sbros-webdev__content">
              <span className="sbros-webdev__eyebrow">
                WHAT WE DO
              </span>

              <h2>
                Smart Websites
                <br />
                <span>Powerful Business Solutions</span>
              </h2>

              <p className="sbros-webdev__lead">
                At <strong>SBros Tech</strong>, we create professional
                websites that help businesses grow, improve productivity,
                and build a stronger digital presence.
              </p>

              <p className="sbros-webdev__description">
                From modern business websites to custom web solutions,
                we combine creative design, reliable technology, and
                user-friendly experiences to bring your business vision
                to life.
              </p>

              <a
                href="/contact-us"
                className="sbros-webdev__button"
                aria-label="Contact SBros Tech for website development"
              >
                Get Your Website
                <span aria-hidden="true">↗</span>
              </a>

              <div className="sbros-webdev__highlights">
                <div>
                  <span className="sbros-webdev__check">✓</span>
                  <div>
                    <strong>Responsive Web Design</strong>
                    {/* <p>
                      Seamless experiences across all devices.
                    </p> */}
                  </div>
                </div>

                <div>
                  <span className="sbros-webdev__check">✓</span>
                  <div>
                    <strong>Professional Development</strong>
                    {/* <p>
                      Reliable solutions built around your needs.
                    </p> */}
                  </div>
                </div>

                <div>
                  <span className="sbros-webdev__check">✓</span>
                  <div>
                    <strong>Business-Focused Solutions</strong>
                    {/* <p>
                      Digital experiences designed for growth.
                    </p> */}
                  </div>
                </div>
              </div>
            </div>

            {/* WEBSITE DEVELOPMENT IMAGE */}
            <div className="sbros-webdev__visual">
              <div className="sbros-webdev__image-frame">
                <div className="sbros-webdev__image-label">
                  <span className="sbros-webdev__status-dot" />
                  MODERN WEBSITES. SMARTER SOLUTIONS.
                </div>

                <Image
                  src="/assets/images/Showcase.png"
                  alt="Website development and responsive web design by SBros Tech"
                  width={720}
                  height={600}
                  sizes="(max-width: 991px) 100vw, 50vw"
                  className="sbros-webdev__image"
                />

                <div className="sbros-webdev__image-caption">
                  <span className="sbros-webdev__caption-icon">
                    {"</>"}
                  </span>

                  <div>
                    <strong>Built for Your Business</strong>
                    <p>
                      Creative design. Reliable technology.
                    </p>
                  </div>
                </div>
              </div>

              <div className="sbros-webdev__decor sbros-webdev__decor--one" />
              <div className="sbros-webdev__decor sbros-webdev__decor--two" />
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <div className="sbros-webdev__services">
        <div className="sbros-webdev__container">
          <div className="sbros-webdev__section-heading">
            <span className="sbros-webdev__eyebrow">
              OUR SERVICES
            </span>

            <h2>
              Website Development.
              <br />
              <span>Built for Your Business.</span>
            </h2>

            <p>
              We provide modern, responsive, and reliable website
              solutions that help your business connect with customers
              and establish a professional online presence.
            </p>
          </div>

          <div className="sbros-webdev__service-grid">
            {webDevelopmentServices.map((service) => (
              <article
                className="sbros-webdev__service-card"
                key={service.number}
              >
                <div className="sbros-webdev__card-top">
                  <span className="sbros-webdev__card-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="16"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />

                      <path
                        d="M3 9h18M7 6.5h.1M10 6.5h.1M8 13l-2 2 2 2M12 17h4"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  <span className="sbros-webdev__number">
                    {service.number}
                  </span>
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <span className="sbros-webdev__card-line" />
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* DEVELOPMENT PROCESS */}
      <div className="sbros-webdev__process">
        <div className="sbros-webdev__container">
          <div className="sbros-webdev__section-heading">
            <span className="sbros-webdev__eyebrow">
              HOW WE WORK
            </span>

            <h2>
              From Your Idea to
              <br />
              <span>A Powerful Website.</span>
            </h2>

            <p>
              Our structured development process helps turn your ideas
              into professional digital experiences that support your
              business objectives.
            </p>
          </div>

          <div className="sbros-webdev__process-grid">
            {developmentSteps.map((step) => (
              <article
                className="sbros-webdev__process-item"
                key={step.number}
              >
                <span className="sbros-webdev__process-number">
                  {step.number}
                </span>

                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* FINAL CALL TO ACTION */}
      <div className="sbros-webdev__bottom">
        <div className="sbros-webdev__container">
          <div className="sbros-webdev__bottom-inner">
            <div>
              <span className="sbros-webdev__bottom-label">
                LET&apos;S BUILD YOUR DIGITAL FUTURE
              </span>

              <h2>
                Ready to Grow Your Business Online?
              </h2>

              <p>
                Partner with SBros Tech to create a professional website
                that reflects your brand and supports your business goals.
              </p>
            </div>

            <a
              href="/contact-us"
              className="sbros-webdev__button"
            >
              Get in Touch
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteDevelopment;
