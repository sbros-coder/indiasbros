"use client";

import React, { useState } from "react";
import Link from "next/link";

const modules = [
  {
    no: "01",
    title: "Core Java Fundamentals",
    text: "Java basics, OOP concepts, collections, exception handling and multithreading.",
  },
  {
    no: "02",
    title: "Advanced Java Concepts",
    text: "JDBC, Servlets, JSP, design patterns and enterprise Java concepts.",
  },
  {
    no: "03",
    title: "Spring Boot Framework",
    text: "Spring Core, MVC, Security, Data JPA, REST APIs and microservices.",
  },
  {
    no: "04",
    title: "PostgreSQL Database",
    text: "Database design, SQL queries, stored procedures and optimization.",
  },
  {
    no: "05",
    title: "Frontend with Next.js",
    text: "React fundamentals, Next.js, TypeScript and modern UI development.",
  },
  {
    no: "06",
    title: "Full Stack Integration",
    text: "Frontend and backend integration, deployment, testing and real-world projects.",
  },
];

const technologies = [
  "Java 17+",
  "Spring Boot",
  "PostgreSQL",
  "React.js",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Maven",
  "Git",
  "Docker",
  "AWS Basics",
  "REST APIs",
];

const benefits = [
  {
    icon: "fa-chart-line",
    title: "Strong Industry Demand",
    text: "Java developers are sought after across industries worldwide.",
  },
  {
    icon: "fa-code",
    title: "Powerful Programming",
    text: "Build scalable applications with Java and modern technologies.",
  },
  {
    icon: "fa-layer-group",
    title: "Spring Boot Expertise",
    text: "Develop secure, maintainable and enterprise-ready backends.",
  },
  {
    icon: "fa-building",
    title: "Enterprise Opportunities",
    text: "Prepare to work on large-scale applications and business systems.",
  },
  {
    icon: "fa-trophy",
    title: "Career Growth",
    text: "Build practical skills for full stack developer career opportunities.",
  },
  {
    icon: "fa-rocket",
    title: "Modern Development",
    text: "Combine Java backend skills with React and Next.js frontend development.",
  },
];

const audiences = [
  "Beginners in programming",
  "Aspiring web developers",
  "College students and graduates",
  "IT professionals upgrading their skills",
  "Frontend developers learning backend",
  "Backend developers expanding to full stack",
];

const prerequisites = [
  "Basic computer literacy",
  "Familiarity with Core Java concepts",
  "Understanding of OOP concepts",
  "Basic HTML, CSS and JavaScript awareness",
  "Willingness to learn and practise",
];

const outcomes = [
  "Core Java and object-oriented programming proficiency",
  "Backend development with Java and Spring Boot",
  "Database skills using SQL and ORM tools",
  "Full stack application development and deployment",
  "REST APIs and web services understanding",
  "Portfolio projects for showcasing your skills",
  "Preparation for developer roles and interviews",
];

const JavaCourse = () => {
  const [showBrochureInfo, setShowBrochureInfo] = useState(false);

  const handleEnroll = () => {
    document.getElementById("java-enquiry")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="sbros-java">
      {/* HERO */}
      <section className="sbros-java-hero">
        <div className="container">
          <div className="sbros-java-hero__grid">
            <div className="sbros-java-hero__content">
              <span className="sbros-java-eyebrow">
                FULL STACK TRAINING
              </span>

              <h1>
                Full Stack Development
                <span> in Java</span>
              </h1>

              <p className="sbros-java-hero__description">
                Master enterprise-level web development with Java,
                Spring Boot, React and Next.js through practical,
                project-based training.
              </p>

              <div className="sbros-java-hero__facts">
                <span><i className="fa-regular fa-clock" /> 200 Hours</span>
                <span><i className="fa-solid fa-bullseye" /> Enterprise Ready</span>
                <span><i className="fa-solid fa-layer-group" /> 6 Modules</span>
                <span><i className="fa-solid fa-certificate" /> Certified</span>
                <span><i className="fa-solid fa-rocket" /> High Demand</span>
              </div>

              <div className="sbros-java-hero__actions">
                <button
                  type="button"
                  onClick={handleEnroll}
                  className="sbros-java-btn"
                >
                  Enroll Now - ₹28,000
                  <i className="fa-solid fa-arrow-right" />
                </button>

                {/* <button
                  type="button"
                  className="sbros-java-btn sbros-java-btn--outline"
                  onClick={() => setShowBrochureInfo(!showBrochureInfo)}
                >
                  <i className="fa-solid fa-download" />
                  Course Information
                </button> */}
              </div>

              {showBrochureInfo && (
                <p className="sbros-java-notice" role="status">
                  Contact info@sbrostech.com to request the course brochure.
                </p>
              )}
            </div>

            <div className="sbros-java-hero__visual">
              <div className="sbros-java-hero__image">
                <img
                  src="/assets/images/sales.jpg"
                  alt="Java Full Stack Development training"
                />
              </div>

              <div className="sbros-java-tech-tag sbros-java-tech-tag--java">
                <i className="fa-brands fa-java" />
                <span>Java</span>
              </div>

              <div className="sbros-java-tech-tag sbros-java-tech-tag--spring">
                <i className="fa-solid fa-leaf" />
                <span>Spring Boot</span>
              </div>

              <div className="sbros-java-tech-tag sbros-java-tech-tag--next">
                <i className="fa-solid fa-code" />
                <span>Next.js</span>
              </div>

              <div className="sbros-java-tech-tag sbros-java-tech-tag--db">
                <i className="fa-solid fa-database" />
                <span>Database</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE JAVA */}
      <section className="sbros-java-section">
        <div className="container">
          <div className="sbros-java-heading">
            <span className="sbros-java-eyebrow">WHY JAVA</span>
            <h2>Why Learn Full Stack Development in Java?</h2>
            <p>
              Develop in-demand technical skills and learn to build
              complete web applications from frontend to backend.
            </p>
          </div>

          <div className="sbros-java-benefits">
            {benefits.map((item) => (
              <article className="sbros-java-benefit" key={item.title}>
                <div className="sbros-java-icon">
                  <i className={`fa-solid ${item.icon}`} />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIENCE AND PREREQUISITES */}
      <section className="sbros-java-section sbros-java-section--soft">
        <div className="container">
          <div className="sbros-java-two-col">
            <div className="sbros-java-panel">
              <div className="sbros-java-panel__heading">
                <i className="fa-solid fa-users" />
                <h2>Who Should Take This Course?</h2>
              </div>

              <ul className="sbros-java-checklist">
                {audiences.map((item) => (
                  <li key={item}>
                    <i className="fa-solid fa-circle-check" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="sbros-java-panel">
              <div className="sbros-java-panel__heading">
                <i className="fa-solid fa-clipboard-list" />
                <h2>Prerequisites</h2>
              </div>

              <ul className="sbros-java-checklist">
                {prerequisites.map((item) => (
                  <li key={item}>
                    <i className="fa-solid fa-circle-check" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="sbros-java-section">
        <div className="container">
          <div className="sbros-java-heading">
            <span className="sbros-java-eyebrow">LEARNING PATH</span>
            <h2>Course Curriculum</h2>
            <p>
              Six structured modules designed to build your full stack
              development knowledge step by step.
            </p>
          </div>

          <div className="sbros-java-modules">
            {modules.map((item) => (
              <article className="sbros-java-module" key={item.no}>
                <span className="sbros-java-module__number">
                  {item.no}
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <i className="fa-solid fa-arrow-up-right-from-square sbros-java-module__arrow" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES AND OUTCOMES */}
      <section className="sbros-java-section sbros-java-section--soft">
        <div className="container">
          <div className="sbros-java-two-col sbros-java-two-col--wide">
            <div className="sbros-java-panel">
              <div className="sbros-java-panel__heading">
                <i className="fa-solid fa-laptop-code" />
                <h2>Technologies You&apos;ll Master</h2>
              </div>

              <div className="sbros-java-tech-list">
                {technologies.map((tech) => (
                  <span key={tech}>
                    <i className="fa-solid fa-check" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="sbros-java-panel">
              <div className="sbros-java-panel__heading">
                <i className="fa-solid fa-bullseye" />
                <h2>What You&apos;ll Achieve</h2>
              </div>

              <ul className="sbros-java-checklist">
                {outcomes.map((item) => (
                  <li key={item}>
                    <i className="fa-solid fa-circle-check" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SCHEDULE AND ASSESSMENT */}
      <section className="sbros-java-section">
        <div className="container">
          <div className="sbros-java-heading">
            <span className="sbros-java-eyebrow">PLAN YOUR LEARNING</span>
            <h2>Flexible Schedule & Certification</h2>
          </div>

          <div className="sbros-java-info-grid">
            <article className="sbros-java-info-card">
              <div className="sbros-java-panel__heading">
                <i className="fa-regular fa-calendar-days" />
                <h3>Weekday Batch</h3>
              </div>
              <p>Monday to Friday</p>
              <p>2 hours per day · 10 hours per week</p>
              <strong>Duration: 20 weeks</strong>
            </article>

            <article className="sbros-java-info-card">
              <div className="sbros-java-panel__heading">
                <i className="fa-solid fa-calendar-check" />
                <h3>Weekend Batch</h3>
              </div>
              <p>Saturday and Sunday</p>
              <p>5 hours per day · 10 hours per week</p>
              <strong>Duration: 20 weeks</strong>
            </article>

            <article className="sbros-java-info-card">
              <div className="sbros-java-panel__heading">
                <i className="fa-solid fa-file-circle-check" />
                <h3>Assessment</h3>
              </div>
              <p>2 hours written assessment</p>
              <p>6 hours practical project assessment</p>
              <strong>75% minimum attendance required</strong>
            </article>

            <article className="sbros-java-info-card">
              <div className="sbros-java-panel__heading">
                <i className="fa-solid fa-award" />
                <h3>Certification</h3>
              </div>
              <p>
                Successful students receive a Full Stack Development in
                Java certificate from SBros Tech Pvt. Ltd., upon meeting
                course and assessment requirements.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* COURSE INFORMATION AND INVESTMENT */}
      <section className="sbros-java-section sbros-java-section--soft">
        <div className="container">
          <div className="sbros-java-two-col sbros-java-bottom">
            <div className="sbros-java-panel">
              <div className="sbros-java-panel__heading">
                <i className="fa-solid fa-circle-info" />
                <h2>Course Information</h2>
              </div>

              <div className="sbros-java-detail">
                <strong>Course Materials</strong>
                <p>Study materials, code samples and project resources.</p>
              </div>

              <div className="sbros-java-detail">
                <strong>Language of Instruction</strong>
                <p>English; Tamil support upon request.</p>
              </div>

              <div className="sbros-java-detail">
                <strong>Training Mode</strong>
                <p>Classroom training · Maximum 15 students per batch.</p>
              </div>

              <div className="sbros-java-detail">
                <strong>Training Location</strong>
                <p>
                  SBros Tech Pvt. Ltd.,
                  <br />
                  No. 15/25, Madavilagam,
                  <br />
                  Kandanvilai Post, Kanniyakumari District,
                  <br />
                  Tamil Nadu - PIN 629810.
                </p>
              </div>

              <div className="sbros-java-contact">
                <a href="mailto:info@sbrostech.com">
                  <i className="fa-regular fa-envelope" />
                  info@sbrostech.com
                </a>
                <a href="https://wa.me/918667052911" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-whatsapp" />
                  WhatsApp: +91 8667 052911
                </a>
                <a href="tel:+914651239543">
                  <i className="fa-solid fa-phone" />
                  +91 4651 239543
                </a>
              </div>
            </div>

            <div className="sbros-java-investment">
              <span className="sbros-java-investment__label">
                COURSE INVESTMENT
              </span>
              <h2>₹28,000</h2>
              <p>Complete 200-hour training program</p>

              <div className="sbros-java-investment__line">
                <span><i className="fa-regular fa-clock" /> Duration</span>
                <strong>200 Hours</strong>
              </div>
              <div className="sbros-java-investment__line">
                <span><i className="fa-solid fa-users" /> Batch Size</span>
                <strong>Max 15 Students</strong>
              </div>
              <div className="sbros-java-investment__line">
                <span><i className="fa-solid fa-signal" /> Skill Level</span>
                <strong>Beginner to Pro</strong>
              </div>
              <div className="sbros-java-investment__line">
                <span><i className="fa-solid fa-award" /> Certificate</span>
                <strong>On Completion</strong>
              </div>

              <button
                type="button"
                onClick={handleEnroll}
                className="sbros-java-btn sbros-java-btn--white"
              >
                Enroll Now
                <i className="fa-solid fa-arrow-right" />
              </button>

              <p className="sbros-java-investment__note">
                Contact our team for payment options, upcoming batch
                dates and enrolment confirmation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="sbros-java-section">
        <div className="container">
          <div className="sbros-java-highlights">
            <h2>
              <i className="fa-solid fa-star" />
              Course Highlights
            </h2>
            <div className="sbros-java-highlights__list">
              {[
                "Java + Spring Boot",
                "Next.js Frontend",
                "6 Comprehensive Modules",
                "Enterprise Projects",
                "Expert Trainers",
                "Interview Preparation",
                "Placement Assistance",
                "Learning Support",
              ].map((item) => (
                <span key={item}>
                  <i className="fa-solid fa-check" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ENQUIRY CTA */}
      <section className="sbros-java-section sbros-java-enquiry-section" id="java-enquiry">
        <div className="container">
          <div className="sbros-java-enquiry">
            <div>
              <span className="sbros-java-eyebrow">START YOUR JOURNEY</span>
              <h2>Ready to Build Your Future with Java?</h2>
              <p>
                Contact SBros Tech to discuss course details, batch
                availability and the right learning path for you.
              </p>
            </div>

            <Link href="/contact-us" className="sbros-java-btn">
              Enquire Now
              <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JavaCourse;