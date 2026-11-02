"use client";

import React from "react";
import Image from "next/image";
// import "./software-development.scss";

/* =========================================================
   SERVICE ICONS
========================================================= */

const icons: Record<string, React.ReactNode> = {
  erp: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  ),
  hrm: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="9" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M16 5.5a3 3 0 0 1 0 5.5M18 14.3c1.8.8 3 2.5 3 4.7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  crm: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 20V10M9 20V4M15 20v-7M21 20V8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  web: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 9h18M7 6.5h.1M10 6.5h.1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  ai: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="6" y="6" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="12" r="1.8" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  ),
  mobile: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="7" y="2.5" width="10" height="19" rx="2.2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M11 18.5h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  api: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  support: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4 2.6-2.6Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  ),
};

/* =========================================================
   SERVICES DATA
========================================================= */

type Service = {
  number: string;
  title: string;
  description: string;
  icon: keyof typeof icons;
  points?: string[];
};

const softwareServices: Service[] = [
  {
    number: "01",
    title: "Custom ERP Development",
    description:
      "Complete ERP solutions for large business projects and long-term clients.",
    icon: "erp",
  },
  {
    number: "02",
    title: "HRM & Payroll Solutions",
    description:
      "Employee, attendance, leave, and payroll systems in one place.",
    icon: "hrm",
  },
  {
    number: "03",
    title: "CRM & Workflow Automation",
    description:
      "Lead management, sales, and operational automation for your team.",
    icon: "crm",
  },
  {
    number: "04",
    title: "Custom Web Application Development",
    description:
      "Business portals and tailored web applications built around your needs.",
    icon: "web",
  },
  {
    number: "05",
    title: "AI & Business Automation",
    description:
      "AI integration and automation of repetitive business tasks.",
    icon: "ai",
  },
  {
    number: "06",
    title: "Mobile App Development",
    description:
      "Modern mobile applications that keep your business and customers connected.",
    icon: "mobile",
  },
  {
    number: "07",
    title: "Cloud, API & System Integration",
    description:   "ERP and CRM integration",
    icon: "api",
    
  },
  {
    number: "08",
    title: "Software Maintenance & Support",
    description:     "Existing software bug fixes",
    icon: "support",
    
  },
];

/* =========================================================
   PROCESS DATA
========================================================= */

const softwareProcess = [
  {
    number: "01",
    title: "Understand",
    description:
      "We learn about your business challenges, requirements, and project objectives.",
  },
  {
    number: "02",
    title: "Plan & Design",
    description:
      "We define the solution and plan a clear, user-friendly software experience.",
  },
  {
    number: "03",
    title: "Build & Test",
    description:
      "We develop, test, and refine the software to meet your requirements.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "We help prepare your solution for launch and support its ongoing improvement.",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

const SoftwareDevelopment = () => {
  return (
    <section className="sbros-software">
      {/* INTRODUCTION */}
      <div className="sbros-software__intro">
        <div className="sbros-software__container">
          <div className="sbros-software__intro-grid">
            <div className="sbros-software__content">
              <span className="sbros-software__eyebrow">WHAT WE DO</span>

              <h2>
                Smart Software.
                <br />
                <span>Powerful Business Solutions.</span>
              </h2>

              <p className="sbros-software__lead">
                At <strong>SBros Tech</strong>, we develop software
                solutions that help businesses simplify operations,
                improve productivity, and move forward with confidence.
              </p>

              <p className="sbros-software__description">
                From custom ERP, HRM, and CRM systems to web and mobile
                applications, we combine practical thinking, reliable
                technology, and user-focused design to build solutions
                around your business requirements.
              </p>

              <a
                href="/contact-us"
                className="sbros-software__button"
                aria-label="Contact SBros Tech about software development"
              >
                Discuss Your Project
                <span aria-hidden="true">↗</span>
              </a>

              <div className="sbros-software__highlights">
                <div className="sbros-software__highlight">
                  <span className="sbros-software__check">✓</span>
                  <div>
                    <strong>Custom-Built Solutions</strong>
                    <p>Designed around your business needs.</p>
                  </div>
                </div>

                <div className="sbros-software__highlight">
                  <span className="sbros-software__check">✓</span>
                  <div>
                    <strong>Reliable Development</strong>
                    <p>Built with usability and quality in mind.</p>
                  </div>
                </div>

                <div className="sbros-software__highlight">
                  <span className="sbros-software__check">✓</span>
                  <div>
                    <strong>Business-Focused Technology</strong>
                    <p>Solutions designed to support growth.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* SOFTWARE DEVELOPMENT IMAGE */}
            <div className="sbros-software__visual">
              <div className="sbros-software__image-frame">
                <div className="sbros-software__image-label">
                  <span className="sbros-software__status-dot" />
                  TECHNOLOGY THAT WORKS FOR YOU
                </div>

                <Image
                  src="/assets/images/lifestyle.jpg"
                  alt="Software development solutions by SBros Tech"
                  width={720}
                  height={600}
                  priority={false}
                  sizes="(max-width: 991px) 100vw, 50vw"
                  className="sbros-software__image"
                />

                <div className="sbros-software__image-caption">
                  <span className="sbros-software__caption-icon">
                    {"</>"}
                  </span>

                  <div>
                    <strong>Software Built Around You</strong>
                    <p>Smarter systems. Better workflows.</p>
                  </div>
                </div>
              </div>

              <div className="sbros-software__decor sbros-software__decor--one" />
              <div className="sbros-software__decor sbros-software__decor--two" />
            </div>
          </div>
        </div>
      </div>

      {/* SOFTWARE SERVICES */}
      <div className="sbros-software__services">
        <div className="sbros-software__container">
          <div className="sbros-software__section-heading">
            <span className="sbros-software__eyebrow">OUR SERVICES</span>

            <h2>
              Software Solutions.
              <br />
              <span>Built for Your Business.</span>
            </h2>

            <p>
              We deliver practical software development services that
              help businesses improve workflows, serve customers, and
              manage everyday operations more effectively.
            </p>
          </div>

          <div className="sbros-software__service-grid">
            {softwareServices.map((service) => (
              <article
                className="sbros-software__service-card"
                key={service.number}
              >
                <div className="sbros-software__card-top">
                  <span className="sbros-software__card-icon">
                    {icons[service.icon]}
                  </span>

                  <span className="sbros-software__number">
                    {service.number}
                  </span>
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                {service.points && (
                  <ul className="sbros-software__card-list">
                    {service.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}

                <span className="sbros-software__card-line" />
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* DEVELOPMENT PROCESS */}
      <div className="sbros-software__process">
        <div className="sbros-software__container">
          <div className="sbros-software__section-heading">
            <span className="sbros-software__eyebrow">OUR APPROACH</span>

            <h2>
              From Business Challenge
              <br />
              <span>to Software Solution.</span>
            </h2>

            <p>
              Our structured development process keeps your project
              focused on its goals, usability, and practical business
              value.
            </p>
          </div>

          <div className="sbros-software__process-grid">
            {softwareProcess.map((step) => (
              <article
                className="sbros-software__process-item"
                key={step.number}
              >
                <span className="sbros-software__process-number">
                  {step.number}
                </span>

                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="sbros-software__bottom">
        <div className="sbros-software__container">
          <div className="sbros-software__bottom-inner">
            <div>
              <span className="sbros-software__bottom-label">
                LET&apos;S BUILD SOMETHING BETTER
              </span>

              <h2>Ready to Turn Your Idea into Software?</h2>

              <p>
                Tell us about your business requirements. Let&apos;s
                explore a software solution that works for you.
              </p>
            </div>

            <a href="/contact-us" className="sbros-software__button">
              Get in Touch
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareDevelopment;