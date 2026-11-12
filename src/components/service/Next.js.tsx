"use client";

import React from "react";
import Link from "next/link";

const courseImage = "/assets/images/Training.jpg";

const benefits = [
  {
    icon: "⚡",
    title: "Modern Fullstack Framework",
    text: "Build complete applications with one powerful framework.",
  },
  {
    icon: "⌕",
    title: "SEO-Friendly & Fast",
    text: "Learn performance optimization and SEO-friendly web development.",
  },
  {
    icon: "🌐",
    title: "SSR & SSG",
    text: "Understand Server-Side Rendering and Static Site Generation.",
  },
  {
    icon: "🔌",
    title: "Seamless API Routes",
    text: "Connect frontend applications with backend APIs and services.",
  },
  {
    icon: "👥",
    title: "Strong Community",
    text: "Learn technologies supported by a growing developer ecosystem.",
  },
  {
    icon: "💼",
    title: "High Job Demand",
    text: "Develop practical skills for modern full stack developer roles.",
  },
];

const audience = [
  "College students and fresh graduates from any discipline",
  "Aspiring full stack developers",
  "Frontend developers wanting backend skills",
  "Freelancers and startup founders building products",
];

const prerequisites = [
  "Basic computer literacy",
  "Understanding of HTML and CSS fundamentals",
  "Willingness to learn web application development",
  "Interest in APIs and databases",
  "Laptop or PC with a reliable internet connection",
];

const curriculum = [
  {
    no: "01",
    title: "JavaScript & TypeScript",
    text: "Learn modern JavaScript, TypeScript fundamentals, variables, functions, types and asynchronous programming.",
  },
  {
    no: "02",
    title: "Frontend with Next.js",
    text: "Build responsive interfaces using Next.js, React components, routing and modern UI development.",
  },
  {
    no: "03",
    title: "Backend with Hono",
    text: "Develop backend services, request handling, middleware and REST APIs using Hono.",
  },
  {
    no: "04",
    title: "Database with PostgreSQL",
    text: "Learn database design, SQL queries, relationships and PostgreSQL data management.",
  },
  {
    no: "05",
    title: "Full Stack Integration",
    text: "Integrate the frontend, backend APIs and database into a complete application.",
  },
  {
    no: "06",
    title: "Real-World Projects",
    text: "Build practical portfolio projects and learn testing, deployment and production workflows.",
  },
];

const technologies = [
  "Next.js",
  "React.js",
  "TypeScript",
  "Tailwind CSS",
  "Hono",
  "PostgreSQL",
  "REST APIs",
  "Git",
  "Docker",
  "AWS Basics",
];

const outcomes = [
  "Master Next.js for full stack development",
  "Build dynamic and SEO-friendly web applications",
  "Integrate backend APIs and databases",
  "Create practical projects for your portfolio",
  "Develop career-ready web development skills",
  "Earn an SBros Tech course completion certificate",
];

const highlights = [
  "Next.js Frontend",
  "6 Comprehensive Modules",
  "Enterprise-Style Projects",
  "Industry Expert Trainers",
  "Interview Preparation",
  "Placement Assistance",
  "Lifetime Support",
];

/* Hero image outer frame styles (only for the image frame) */
const frameCss = `
.sbros-nx-frame {
  position: relative;
  isolation: isolate;
  width: 100%;
  padding: 64px 38px 72px 26px;
}

/* corner bracket, top-left */
.sbros-nx-frame::before {
  content: "";
  position: absolute;
  top: 34px;
  left: 0;
  width: 96px;
  height: 96px;
  border-top: 6px solid #38b6f5;
  border-left: 6px solid #38b6f5;
  border-radius: 28px 0 0 0;
  z-index: -1;
}

/* gradient block, bottom-right */
.sbros-nx-frame::after {
  content: "";
  position: absolute;
  right: 0;
  bottom: 34px;
  width: 82%;
  height: 72%;
  border-radius: 32px;
  background: linear-gradient(135deg, #38b6f5 0%, #14196e 100%);
  z-index: -1;
}

/* dot pattern, top-right */
.sbros-nx-frame__dots {
  position: absolute;
  top: 30px;
  right: 14px;
  width: 92px;
  height: 92px;
  background-image: radial-gradient(#38b6f5 2.2px, transparent 2.7px);
  background-size: 15px 15px;
  opacity: 0.55;
  z-index: -1;
}

.sbros-nx-frame__inner {
  position: relative;
  border-radius: 28px;
  border: 6px solid #ffffff;
  background: #ffffff;
  box-shadow: 0 26px 56px rgba(20, 25, 110, 0.28);
  overflow: hidden;
  transition: transform 0.45s ease, box-shadow 0.45s ease;
}

.sbros-nx-frame__inner img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 22px;
  transition: transform 0.7s ease;
}

/* soft bottom shade on the image */
.sbros-nx-frame__inner::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 38%;
  background: linear-gradient(180deg, rgba(20, 25, 110, 0) 0%, rgba(20, 25, 110, 0.22) 100%);
  border-radius: 0 0 22px 22px;
  pointer-events: none;
}

/* floating chips (placed OUTSIDE the image) */
.sbros-nx-chip {
  position: absolute;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: 50px;
  background: #ffffff;
  color: #14196e;
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  white-space: nowrap;
  box-shadow: 0 14px 30px rgba(20, 25, 110, 0.22);
  animation: sbrosNxFloat 4.5s ease-in-out infinite;
}

.sbros-nx-chip i {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #38b6f5;
  box-shadow: 0 0 0 4px rgba(56, 182, 245, 0.25);
}

/* above the image, top-right */
.sbros-nx-chip--right {
  right: 38px;
  top: 12px;
  animation-delay: 1.2s;
}

/* below the image, bottom-left */
.sbros-nx-chip--left {
  left: 26px;
  bottom: 12px;
}

@keyframes sbrosNxFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}

@media (hover: hover) and (pointer: fine) {
  .sbros-nx-frame__inner:hover {
    transform: translateY(-6px);
    box-shadow: 0 34px 68px rgba(20, 25, 110, 0.36);
  }
  .sbros-nx-frame__inner:hover img {
    transform: scale(1.07);
  }
}

@media (prefers-reduced-motion: reduce) {
  .sbros-nx-chip { animation: none; }
}

@media (max-width: 575px) {
  .sbros-nx-frame { padding: 50px 24px 56px 18px; }
  .sbros-nx-frame::before { top: 26px; width: 64px; height: 64px; border-width: 5px; border-radius: 20px 0 0 0; }
  .sbros-nx-frame::after { bottom: 26px; border-radius: 24px; }
  .sbros-nx-frame__dots { top: 24px; width: 64px; height: 64px; right: 6px; }
  .sbros-nx-frame__inner { border-radius: 22px; border-width: 5px; }
  .sbros-nx-frame__inner img { border-radius: 17px; }
  .sbros-nx-frame__inner::after { border-radius: 0 0 17px 17px; }
  .sbros-nx-chip { padding: 8px 12px; font-size: 12px; }
  .sbros-nx-chip--right { right: 24px; top: 8px; }
  .sbros-nx-chip--left { left: 18px; bottom: 8px; }
}
`;

const NextJsCourse = () => {
  const handleEnroll = () => {
    document
      .getElementById("nextjs-enquiry")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="sbros-nx">
      <style>{frameCss}</style>

      {/* HERO */}
      <section className="sbros-nx-hero">
        <div className="container">
          <div className="sbros-nx-hero__grid">
            <div className="sbros-nx-hero__content">
              <span className="sbros-nx-eyebrow">
                FULL STACK TRAINING
              </span>

              <h1>
                Full Stack Development
                <span> in Next.js</span>
              </h1>

              <p className="sbros-nx-hero__lead">
                Master Modern Web Development with Next.js,
                TypeScript &amp; PostgreSQL.
              </p>

              <div className="sbros-nx-hero__meta">
                <span>📚 200 Hours</span>
                <span>🎯 Industry Ready</span>
                <span>💼 Portfolio Projects</span>
                <span>📜 Certified Course</span>
              </div>

              <div className="sbros-nx-actions">
  <Link
    href="/training-services#form1"
    className="sbros-nx-btn"
  >
    Enroll Now – ₹28,000 <span>→</span>
  </Link>

  {/* <a
    href="mailto:info@sbrostech.com?subject=Next.js%20Course%20Brochure%20Request"
    className="sbros-nx-btn sbros-nx-btn--outline"
  >
    ↓ Download Brochure
  </a> */}
</div>
            </div>

            <div className="sbros-nx-hero__image">
              <div className="sbros-nx-frame">
                <span className="sbros-nx-frame__dots" aria-hidden="true" />

                <div className="sbros-nx-frame__inner">
                  <img
                    src={courseImage}
                    alt="Full Stack Development with Next.js, React and PostgreSQL"
                  />
                </div>

                <span className="sbros-nx-chip sbros-nx-chip--right">
                  <i /> 200 Hours
                </span>
                <span className="sbros-nx-chip sbros-nx-chip--left">
                  <i /> Certified Course
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="sbros-nx-section">
        <div className="container">
          <div className="sbros-nx-panel">
            <div className="sbros-nx-section-heading">
              <span className="sbros-nx-heading-icon">🚀</span>
              <div>
                <span className="sbros-nx-eyebrow">WHY CHOOSE THIS COURSE</span>
                <h2>Why Learn Full Stack Development in Next.js?</h2>
              </div>
            </div>

            <div className="sbros-nx-benefits">
              {benefits.map((item) => (
                <article className="sbros-nx-benefit" key={item.title}>
                  <div className="sbros-nx-icon">{item.icon}</div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AUDIENCE + PREREQUISITES */}
      <section className="sbros-nx-section sbros-nx-section--compact">
        <div className="container">
          <div className="sbros-nx-two-col">
            <div className="sbros-nx-panel sbros-nx-panel--border">
              <h2><span>👥</span> Who Should Take This Course?</h2>
              <ul className="sbros-nx-check-list">
                {audience.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="sbros-nx-panel sbros-nx-panel--border">
              <h2><span>📋</span> Prerequisites</h2>
              <ul className="sbros-nx-check-list">
                {prerequisites.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="sbros-nx-section sbros-nx-section--compact">
        <div className="container">
          <div className="sbros-nx-panel sbros-nx-panel--border">
            <div className="sbros-nx-section-heading">
              <span className="sbros-nx-heading-icon">📚</span>
              <div>
                <span className="sbros-nx-eyebrow">WHAT YOU WILL LEARN</span>
                <h2>Course Curriculum</h2>
              </div>
            </div>

            <div className="sbros-nx-curriculum">
              {curriculum.map((item) => (
                <article className="sbros-nx-module" key={item.no}>
                  <span className="sbros-nx-module__number">{item.no}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES + OUTCOMES */}
      <section className="sbros-nx-section sbros-nx-section--compact">
        <div className="container">
          <div className="sbros-nx-two-col">
            <div className="sbros-nx-panel sbros-nx-panel--border">
              <h2><span>⚙️</span> Technologies You&apos;ll Master</h2>
              <div className="sbros-nx-tech-list">
                {technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>

            <div className="sbros-nx-panel sbros-nx-panel--border">
              <h2><span>🎯</span> What You&apos;ll Achieve</h2>
              <ul className="sbros-nx-check-list">
                {outcomes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SCHEDULE + ASSESSMENT + INFORMATION + FEE */}
      <section className="sbros-nx-section sbros-nx-section--compact">
        <div className="container">
          <div className="sbros-nx-info-grid">
            <div className="sbros-nx-panel sbros-nx-panel--border">
              <h3>📅 Flexible Schedule</h3>
              <div className="sbros-nx-schedule">
                <div>
                  <h4>Weekday Batch</h4>
                  <p>Monday to Friday</p>
                  <p>2 hours per day</p>
                  <p>10 hours per week</p>
                </div>
                <div>
                  <h4>Weekend Batch</h4>
                  <p>Saturday &amp; Sunday</p>
                  <p>5 hours per day</p>
                  <p>10 hours per week</p>
                </div>
              </div>
              <p className="sbros-nx-note">
                Duration: 20 weeks for either schedule.
              </p>
            </div>

            <div className="sbros-nx-panel sbros-nx-panel--border">
              <h3>🏆 Assessment &amp; Certification</h3>
              <ul className="sbros-nx-simple-list">
                <li>2 hours of written assessment</li>
                <li>6 hours of practical project assessment</li>
                <li>Minimum 75% attendance required</li>
              </ul>
              <p>
                Successful students receive a certificate in Full Stack
                Development in Next.js from SBros Tech Pvt. Ltd.
              </p>
            </div>

            <div className="sbros-nx-panel sbros-nx-panel--border">
              <h3>ℹ️ Course Information</h3>
              <p><strong>Materials:</strong> Study resources, code samples and project guidance.</p>
              <p><strong>Language:</strong> English; Tamil upon request.</p>
              <p><strong>Mode:</strong> Classroom training.</p>
              <p><strong>Batch size:</strong> Maximum 15 students.</p>
              <p><strong>Level:</strong> Beginner to advanced.</p>
            </div>

           <div className="sbros-nx-fee">
  <span className="sbros-nx-fee__eyebrow">COURSE INVESTMENT</span>
  <h2>₹28,000</h2>
  <p>200 Hours of Training</p>
  <ul>
    <li>Flexible batch timings</li>
    <li>Hands-on project training</li>
    <li>Certificate on successful completion</li>
  </ul>
  <Link
    href="/training-services#form1"
    className="sbros-nx-btn sbros-nx-btn--white"
  >
    Enroll Now →
  </Link>
</div>
          </div>
        </div>
      </section>

      {/* LOCATION + CONTACT */}
      <section className="sbros-nx-section sbros-nx-section--compact">
        <div className="container">
          <div className="sbros-nx-panel sbros-nx-panel--border sbros-nx-location">
            <div>
              <span className="sbros-nx-eyebrow">VISIT OUR TRAINING CENTRE</span>
              <h2>📍 Training Location</h2>
              <p>
                <strong>SBros Tech Pvt. Ltd.</strong><br />
                No. 15/25, Madavilagam,<br />
                Kandanvilai Post,<br />
                Kanniyakumari District,<br />
                Tamil Nadu – PIN 629810
              </p>
            </div>

            <div className="sbros-nx-location__contact">
              <a href="mailto:info@sbrostech.com">✉ info@sbrostech.com</a>
              <a href="https://sbrostech.com/" target="_blank" rel="noreferrer">
                🌐 www.sbrostech.com
              </a>
              <Link href="/contact-us" className="sbros-nx-btn">
                Contact Us →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ENQUIRY */}
<section
  className="sbros-nx-section sbros-nx-section--compact"
  id="nextjs-enquiry"
>
  <div className="container">
    <div className="sbros-nx-enquiry">
      <div>
        <span className="sbros-nx-eyebrow">START YOUR JOURNEY</span>
        <h2>Ready to Become a Full Stack Developer?</h2>
        <p>
          Contact our team for course details, batch availability,
          counselling and admission guidance.
        </p>
      </div>

      <Link
        href="/contact-us"
        className="sbros-nx-btn sbros-nx-btn--white"
      >
        Enquire Now →
      </Link>
    </div>
  </div>
</section>
      {/* HIGHLIGHTS */}
      <section className="sbros-nx-section sbros-nx-section--compact sbros-nx-bottom">
        <div className="container">
          <div className="sbros-nx-highlights">
            <h3>✨ Course Highlights</h3>
            <div>
              {highlights.map((item) => (
                <span key={item}>✓ {item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NextJsCourse;