
"use client";

import React from "react";
import Link from "next/link";

const courseImage = "/assets/images/Training.png";

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

const NextJsCourse = () => {
  const handleEnroll = () => {
    document
      .getElementById("nextjs-enquiry")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="sbros-nx">
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
              <img
                src={courseImage}
                alt="Full Stack Development with Next.js, React and PostgreSQL"
              />
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
