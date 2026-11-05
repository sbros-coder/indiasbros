"use client";

import React, { useState } from "react";
import Link from "next/link";

const modules = [
  {
    no: "01",
    title: "Introduction to Java",
    text: "Java basics, JDK setup, IDE configuration, first program",
  },
  {
    no: "02",
    title: "Java Fundamentals",
    text: "Variables, data types, operators, control structures, arrays",
  },
  {
    no: "03",
    title: "OOP Concepts",
    text: "Classes, objects, inheritance, polymorphism, abstraction",
  },
  {
    no: "04",
    title: "Core Web & API Basics",
    text: "HTTP fundamentals, JSON, REST principles",
  },
  {
    no: "05",
    title: "Database & SQL",
    text: "JDBC, MySQL basics, CRUD operations",
  },
  {
    no: "06",
    title: "Build Tools",
    text: "Maven/Gradle basics, dependency management",
  },
  {
    no: "07",
    title: "Spring Boot Introduction",
    text: "Spring Boot setup, annotations, configuration",
  },
  {
    no: "08",
    title: "Spring Boot Core",
    text: "Dependency injection, beans, application context",
  },
  {
    no: "09",
    title: "REST API Development",
    text: "Creating RESTful services, controllers, mapping",
  },
  {
    no: "10",
    title: "Data Handling",
    text: "Spring Data JPA, repositories, transactions",
  },
  {
    no: "11",
    title: "Advanced API Features",
    text: "Validation, exception handling, testing",
  },
  {
    no: "12",
    title: "Security & Authentication",
    text: "Spring Security basics, JWT, authorization",
  },
];

const benefits = [
  {
    icon: "fa-hammer",
    title: "Versatile & Powerful",
    text: "Java powers everything from mobile apps to enterprise systems and even cutting-edge technologies like AI and big data.",
  },
  {
    icon: "fa-globe",
    title: "Platform Independent",
    text: '"Write once, run anywhere" makes Java a go-to choice for cross-platform development.',
  },
  {
    icon: "fa-briefcase",
    title: "High Career Demand",
    text: "Globally recognized by top companies, Java expertise opens doors to excellent job opportunities.",
  },
  {
    icon: "fa-users",
    title: "Strong Community Support",
    text: "With millions of developers worldwide, solutions, libraries, and learning resources are always within reach.",
  },
  {
    icon: "fa-shield",
    title: "Robust & Secure",
    text: "Trusted for mission-critical applications, Java is designed with reliability and security at its core.",
  },
  {
    icon: "fa-rocket",
    title: "Foundation for Future",
    text: "Mastering Java strengthens your understanding of OOPs and makes it easier to pick up other languages.",
  },
];

const audiences = [
  "Students, Higher secondary pass outs, and graduates in any discipline",
  "Software professionals looking to strengthen their foundation",
  "Non-IT professionals wanting to start a tech career",
  "Job seekers aiming for Java developer positions",
  "Anyone interested in building enterprise-level applications",
];

const prerequisites = [
  "Basic computer literacy",
  "Familiarity with mathematics at school level (logic, simple algebra) is helpful but not mandatory",
  "A curious mindset and willingness to learn the platform-independent programming language",
  "Personal laptop is required for hands-on practice",
];

const outcomes = [
  "Solid Java Skills: Ability to confidently write, debug, and optimize Java programs",
  "Project Experience: Practical hands-on projects to showcase in your portfolio",
  "Strong OOPs Knowledge: Deep understanding of object-oriented principles that apply across languages",
  "Job Readiness: Skills aligned with real-world industry requirements and interview scenarios",
  "Spring Boot Expertise: Introduction to enterprise Java development with Spring Boot",
  "Completion Certificate: Official recognition of your Java programming expertise from SBros Tech",
];

const highlights = [
  "Java Programming Fundamentals",
  "Object-Oriented Programming",
  "Spring Boot Framework",
  "REST API Development",
  "Database Integration",
  "Real-World Projects",
  "Industry Experts",
  "Career Support",
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
    <div className="java-programming-course">
      {/* HERO SECTION */}
      <section className="java-hero">
        <div className="container">
          <div className="java-hero__grid">
            <div className="java-hero__content">
              <h1 className="java-hero__title">
Build Powerful Applications with the World&apos;s Most Popular
                <span> Enterprise Language</span>
              </h1>

              <div className="java-hero__facts">
                <div className="java-fact">
                  <i className="fa-solid fa-book" />
                  <span>100 Hours</span>
                </div>
                <div className="java-fact">
                  <i className="fa-solid fa-bullseye" />
                  <span>Spring Boot Included</span>
                </div>
                <div className="java-fact">
                  <i className="fa-solid fa-briefcase" />
                  <span>Industry Projects</span>
                </div>
                <div className="java-fact">
                  <i className="fa-solid fa-certificate" />
                  <span>Certified Course</span>
                </div>
                <div className="java-fact">
                  <i className="fa-solid fa-rocket" />
                  <span>Job Ready</span>
                </div>
              </div>

             <div className="java-hero__actions">
  <Link
    href="/training-services#form1"
    className="java-btn java-btn--primary"
  >
    Enroll Now - ₹12,000
    <i className="fa-solid fa-arrow-right" />
  </Link>

  {/* <button
    type="button"
    className="java-btn java-btn--outline"
    onClick={() => setShowBrochureInfo(!showBrochureInfo)}
  >
    <i className="fa-solid fa-download" />
    Download Brochure
  </button> */}
</div>

              {showBrochureInfo && (
                <div className="java-notice" role="status">
                  <i className="fa-solid fa-check-circle" />
                  <p>Contact info@sbrostech.com to request the course brochure.</p>
                </div>
              )}
            </div>

            <div className="java-hero__image">
              <div className="java-hero__image-wrapper">
                <img
                  src="/assets/images/modern.jpg"
                  alt="Java Programming Course"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY LEARN JAVA SECTION */}
      <section className="java-section java-why-section">
        <div className="container">
          <div className="java-section__heading">
            <h2>Why Learn Java Programming?</h2>
<p>
  Master in-demand skills with the world&apos;s most versatile programming language
</p>
          </div>

          <div className="java-benefits">
            {benefits.map((benefit) => (
              <article className="java-benefit" key={benefit.title}>
                <div className="java-benefit__icon">
                  <i className={`fa-solid ${benefit.icon}`} />
                </div>
                <div className="java-benefit__content">
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIENCE & PREREQUISITES */}
      <section className="java-section java-info-section">
        <div className="container">
          <div className="java-two-col">
            <div className="java-panel">
              <div className="java-panel__header">
                <i className="fa-solid fa-users" />
                <h2>Who Should Take This Course?</h2>
              </div>
              <ul className="java-list">
                {audiences.map((item) => (
                  <li key={item}>
                    <i className="fa-solid fa-check" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="java-panel">
              <div className="java-panel__header">
                <i className="fa-solid fa-checklist" />
                <h2>Prerequisites</h2>
              </div>
              <ul className="java-list">
                {prerequisites.map((item) => (
                  <li key={item}>
                    <i className="fa-solid fa-check" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="java-section java-curriculum-section">
        <div className="container">
          <div className="java-section__heading">
            <h2>Course Curriculum</h2>
            <p>12 comprehensive modules covering Java fundamentals to Spring Boot mastery</p>
          </div>

          <div className="java-modules">
            {modules.map((module) => (
              <div className="java-module" key={module.no}>
                <div className="java-module__number">{module.no}</div>
                <div className="java-module__content">
                  <h3>{module.title}</h3>
                  <p>{module.text}</p>
                </div>
                <i className="fa-solid fa-arrow-right java-module__arrow" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="java-section java-info-section">
        <div className="container">
          <div className="java-outcomes">
            <div className="java-outcomes__header">
              <i className="fa-solid fa-star" />
<h2>What You&apos;ll Achieve</h2>
            </div>
            <ul className="java-list java-list--outcomes">
              {outcomes.map((outcome) => (
                <li key={outcome}>
                  <i className="fa-solid fa-check-circle" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SCHEDULE & ASSESSMENT */}
      <section className="java-section java-schedule-section">
        <div className="container">
          <div className="java-section__heading">
            <h2>Flexible Schedule Options</h2>
            <p>Choose the batch that fits your lifestyle</p>
          </div>

          <div className="java-schedule">
            <div className="java-schedule__item">
              <div className="java-schedule__icon">
                <i className="fa-solid fa-sun" />
              </div>
              <h3>Weekday Batch</h3>
              <p className="java-schedule__days">Monday to Friday</p>
              <p className="java-schedule__hours">2 hours per day</p>
              <p className="java-schedule__weekly">10 hours per week</p>
              <strong className="java-schedule__duration">Total: 10 weeks</strong>
            </div>

            <div className="java-schedule__item">
              <div className="java-schedule__icon">
                <i className="fa-solid fa-star" />
              </div>
              <h3>Weekend Batch</h3>
              <p className="java-schedule__days">Saturday & Sunday</p>
              <p className="java-schedule__hours">5 hours per day</p>
              <p className="java-schedule__weekly">10 hours per week</p>
              <strong className="java-schedule__duration">Total: 10 weeks</strong>
            </div>
          </div>

          <div className="java-assessment">
            <h3>Assessment & Certification</h3>
            <div className="java-assessment__grid">
              <div className="java-assessment__item">
                <div className="java-assessment__number">2 hrs</div>
                <p>Written Assessment</p>
                <small>Theoretical understanding evaluation</small>
              </div>
              <div className="java-assessment__item">
                <div className="java-assessment__number">2 hrs</div>
                <p>Project Execution</p>
                <small>Practical skills demonstration</small>
              </div>
              <div className="java-assessment__item">
                <div className="java-assessment__number">75%</div>
                <p>Attendance Required</p>
                <small>Minimum for certification eligibility</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COURSE INFORMATION */}
      <section className="java-section java-info-section">
        <div className="container">
          <div className="java-course-info">
            <div className="java-course-info__left">
              <h2>Course Information</h2>

              <div className="java-info-item">
                <i className="fa-solid fa-book" />
                <div>
                  <strong>Course Materials</strong>
                  <p>Comprehensive study materials, code samples, and resources will be provided</p>
                </div>
              </div>

              <div className="java-info-item">
                <i className="fa-solid fa-microphone" />
                <div>
                  <strong>Language of Instruction</strong>
                  <p>English (Tamil also will be used upon request)</p>
                </div>
              </div>

              <div className="java-info-item">
                <i className="fa-solid fa-calendar-check" />
                <div>
                  <strong>Attendance Policy</strong>
                  <p>Minimum 75% attendance is mandatory for certification</p>
                </div>
              </div>

              <div className="java-info-item">
                <i className="fa-solid fa-map-pin" />
                <div>
                  <strong>Training Location</strong>
                  <p>
                    SBros Tech Pvt. Ltd.<br />
                    No.15/25, Madavilagam,<br />
                    Kandanvilai Post,<br />
                    Kanniyakumari District,<br />
                    Tamil Nadu - PIN 629810
                  </p>
                </div>
              </div>
            </div>

            <div className="java-course-info__right">
              <div className="java-certificate-box">
                <i className="fa-solid fa-trophy" />
                <h3>Certification</h3>
<p>A certificate of &quot;Java Programming&quot; endorsed by SBros Tech Pvt. Ltd. will be issued to all successful students upon completion of the course and assessment.</p>              </div>

              <div className="java-contact-box">
                <h3>Get in Touch</h3>
                <a href="mailto:info@sbrostech.com" className="java-contact-link">
                  <i className="fa-solid fa-envelope" />
                  info@sbrostech.com
                </a>
                <a href="https://www.sbrostech.com" className="java-contact-link">
                  <i className="fa-solid fa-globe" />
                  www.sbrostech.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="java-section java-highlights-section">
        <div className="container">
          <h2>Course Highlights</h2>
          <div className="java-highlights">
            {highlights.map((highlight) => (
              <div className="java-highlight" key={highlight}>
                <i className="fa-solid fa-check" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="java-section java-cta-section" id="java-enquiry">
        <div className="container">
          <div className="java-cta">
            <div className="java-cta__content">
              <h2>Ready to Start Your Java Journey?</h2>
<p>Join hundreds of students who&apos;ve transformed their careers with our Java programming course</p>
            </div>
            <div className="java-cta__actions">
            <Link
  href="/training-services#form1"
  className="java-btn java-btn--outline java-btn--large"
>
  Enroll Now
  <i className="fa-solid fa-arrow-right" />
</Link>
              <Link href="/contact-us" className="java-btn java-btn--outline java-btn--large">
                Contact Us
                <i className="fa-solid fa-phone" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JavaCourse;