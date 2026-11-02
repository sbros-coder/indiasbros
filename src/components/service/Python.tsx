"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

/* =========================================================
   DATA
========================================================= */

const heroBadges = [
  { icon: "fa-light fa-clock", text: "200 Hours" },
  { icon: "fa-light fa-robot", text: "AI/ML Ready" },
  { icon: "fa-light fa-briefcase", text: "Portfolio Projects" },
  { icon: "fa-light fa-certificate", text: "Certified Course" },
  { icon: "fa-light fa-rocket", text: "Job Placement Support" },
];

const whyLearn = [
  {
    icon: "fa-light fa-bolt",
    title: "Build Complete Apps Faster",
    text: "Rapid development with Python's simple syntax and powerful libraries.",
  },
  {
    icon: "fa-brands fa-python",
    title: "Leverage Python's Power",
    text: "Tap into Python's vast ecosystem for web, AI, and data science.",
  },
  {
    icon: "fa-light fa-layer-group",
    title: "Django's All-in-One Framework",
    text: "Complete web framework with built-in admin, ORM, and security.",
  },
  {
    icon: "fa-light fa-chart-line",
    title: "Boost Your Career Scope",
    text: "High demand for Python developers across industries.",
  },
  {
    icon: "fa-light fa-folder-open",
    title: "Create a Strong Portfolio",
    text: "Build impressive projects that showcase your skills.",
  },
  {
    icon: "fa-light fa-crystal-ball",
    title: "Future-Proof Your Skills",
    text: "Python leads in AI, ML, and emerging technologies.",
  },
];

const whoFor = [
  "Anyone passionate about Artificial Intelligence and Machine Learning",
  "Students, Higher secondary pass outs, and graduates in any discipline",
  "Software professionals looking to expand their skillset",
  "Non-IT professionals wanting to transition into tech",
  "Entrepreneurs who want to build their own web applications",
  "Freelancers seeking to offer full-stack development services",
];

const prerequisites = [
  "Basic computer literacy",
  "Familiarity with mathematics at school level (logic, simple algebra) is helpful but not mandatory",
  "A curious mindset and willingness to learn the artificial intelligence that is going to rule the world",
  "Personal laptop is required for hands-on practice",
  "No prior programming experience required - we start from the basics!",
];

const modules = [
  {
    icon: "fa-light fa-sitemap",
    title: "Introduction to Fullstack Development",
    topics: [
      "Understanding Web Architecture",
      "Frontend vs Backend vs Full Stack",
      "Development Environment Setup",
      "Version Control with Git & GitHub",
    ],
  },
  {
    icon: "fa-brands fa-python",
    title: "Python for Web Development",
    topics: [
      "Python Fundamentals & Syntax",
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "File Handling & Modules",
      "Error Handling & Debugging",
    ],
  },
  {
    icon: "fa-light fa-palette",
    title: "Frontend Fundamentals",
    topics: [
      "HTML5 & Semantic Markup",
      "CSS3 & Responsive Design",
      "JavaScript ES6+",
      "Bootstrap Framework",
      "DOM Manipulation & Events",
    ],
  },
  {
    icon: "fa-light fa-wrench",
    title: "Django Framework Essentials",
    topics: [
      "Django Installation & Project Setup",
      "Models, Views, Templates (MVT)",
      "URL Routing & Views",
      "Django Admin Interface",
      "Forms & Validations",
      "User Authentication",
    ],
  },
  {
    icon: "fa-light fa-database",
    title: "Database & ORM",
    topics: [
      "Database Design Principles",
      "Django ORM & Migrations",
      "CRUD Operations",
      "Complex Queries & Optimization",
      "PostgreSQL/MySQL Integration",
    ],
  },
  {
    icon: "fa-light fa-building",
    title: "Building Functional Web Applications",
    topics: [
      "E-commerce Application",
      "Blog Platform Development",
      "Social Media Features",
      "Payment Gateway Integration",
      "Email & SMS Integration",
    ],
  },
  {
    icon: "fa-light fa-gears",
    title: "Django Advanced Concepts",
    topics: [
      "Class-Based Views",
      "Middleware & Signals",
      "Caching Strategies",
      "Security Best Practices",
      "Performance Optimization",
    ],
  },
  {
    icon: "fa-light fa-plug",
    title: "RESTful APIs with Django REST Framework",
    topics: [
      "REST Architecture Principles",
      "Django REST Framework Setup",
      "Serializers & ViewSets",
      "API Authentication & Permissions",
      "API Documentation with Swagger",
    ],
  },
  {
    icon: "fa-light fa-arrows-left-right",
    title: "Frontend Integration",
    topics: [
      "AJAX & Fetch API",
      "React.js Basics (Optional)",
      "Connecting Frontend with Django APIs",
      "Real-time Features with WebSockets",
    ],
  },
  {
    icon: "fa-light fa-flask-vial",
    title: "Testing & Debugging Project",
    topics: [
      "Unit Testing with Django",
      "Integration Testing",
      "Debugging Techniques",
      "Deployment on Cloud (AWS/Heroku)",
      "Final Project Presentation",
    ],
  },
];

const outcomes = [
  {
    title: "Fullstack Development Mastery",
    text: "Ability to build complete web applications from frontend to backend.",
  },
  {
    title: "Proficiency in Python & Django",
    text: "Strong command of the most popular language and its powerful framework.",
  },
  {
    title: "Hands-on Project Experience",
    text: "Real-world apps to showcase in a professional portfolio.",
  },
  {
    title: "Scalability Skills",
    text: "Confidence to put applications live and make them production ready.",
  },
  {
    title: "Problem Solving Mindset",
    text: "Deeper understanding of structuring, securing, and optimizing web systems.",
  },
  {
    title: "Career Advancement Edge",
    text: "Readiness for roles in web development, freelancing, or launching own products.",
  },
];

const schedules = [
  {
    icon: "fa-light fa-sun-haze",
    title: "Weekday Batch",
    rows: [
      { label: "Days", value: "Monday to Friday" },
      { label: "Timing", value: "2 hours per day" },
      { label: "Weekly Hours", value: "10 hours per week" },
      { label: "Total Duration", value: "20 weeks" },
    ],
  },
  {
    icon: "fa-light fa-stars",
    title: "Weekend Batch",
    rows: [
      { label: "Days", value: "Saturday & Sunday" },
      { label: "Timing", value: "5 hours per day" },
      { label: "Weekly Hours", value: "10 hours per week" },
      { label: "Total Duration", value: "20 weeks" },
    ],
  },
];

const extraInfo = [
  {
    icon: "fa-light fa-book-open",
    title: "Course Material",
    text: "Comprehensive course materials will be provided to all students.",
  },
  {
    icon: "fa-light fa-language",
    title: "Medium of Instruction",
    text: "English (Tamil also will be used upon request).",
  },
  {
    icon: "fa-light fa-calendar-check",
    title: "Attendance Requirement",
    text: "Minimum 75% attendance is mandatory.",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

const PythonCourse = () => {
  const [openModule, setOpenModule] = useState<number | null>(0);

  const toggleModule = (index: number) => {
    setOpenModule(openModule === index ? null : index);
  };

  return (
    <>
      {/* =====================================================
          HERO  (IMAGE SPACE ON TOP RIGHT)
      ===================================================== */}
      <section className="sbros-cd-hero">
        <div className="container">
          <div className="row align-items-center">
            {/* ---------- Left content ---------- */}
            <div className="col-lg-7">
              <div className="sbros-cd-hero__content">
                <span className="sbros-cd-hero__tag">
                  <i className="fa-light fa-star"></i> Most Popular
                </span>

                <h1 className="sbros-cd-hero__title">
                  Full Stack Development in Python
                </h1>

                <p className="sbros-cd-hero__text">
                  Master Python, Django &amp; Build Complete Web Applications
                  from Frontend to Backend
                </p>

                <ul className="sbros-cd-hero__badges">
                  {heroBadges.map((b) => (
                    <li key={b.text}>
                      <i className={b.icon}></i>
                      {b.text}
                    </li>
                  ))}
                </ul>

                <div className="sbros-cd-hero__actions">
                  <Link
                    href="/training#apply-now"
                    className="sbros-cd-btn sbros-cd-btn--fill"
                  >
                    Enroll Now - ₹28,000
                  </Link>

                  {/* <a
                    href="/assets/brochure/python-fullstack.pdf"
                    className="sbros-cd-btn sbros-cd-btn--outline"
                    download
                  >
                    <i className="fa-light fa-file-arrow-down"></i>
                    Download Brochure
                  </a> */}
                </div>
              </div>
            </div>

            {/* ---------- Right image space ---------- */}
            <div className="col-lg-5">
              <div className="sbros-cd-hero__image">
                {/*
                  IMAGE SPACE:
                  Put your course image in /public/assets/images/course/
                  and change the src below. Recommended size: 800 x 600 px
                */}
                <Image
                  src="/assets/images/us.jpg"
                  alt="Full Stack Development in Python"
                  fill
                  priority
                  sizes="(max-width: 991px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY LEARN
      ===================================================== */}
      <section className="sbros-cd-section sbros-cd-section--white">
        <div className="container">
          <div className="sbros-cd-heading">
            <span className="sbros-cd-heading__sub">Why Python</span>
            <h2 className="sbros-cd-heading__title">
              Why Learn Fullstack Development in Python?
            </h2>
          </div>

          <div className="row">
            {whyLearn.map((item) => (
              <div key={item.title} className="col-xl-4 col-md-6">
                <div className="sbros-cd-why">
                  <div className="sbros-cd-why__icon">
                    <i className={item.icon}></i>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHO IS THIS FOR + PREREQUISITES
      ===================================================== */}
      <section className="sbros-cd-section sbros-cd-section--light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="sbros-cd-panel">
                <div className="sbros-cd-panel__head">
                  <span className="sbros-cd-panel__icon">
                    <i className="fa-light fa-users"></i>
                  </span>
                  <h3>Who Is This Course For?</h3>
                </div>

                <ul className="sbros-cd-check">
                  {whoFor.map((item) => (
                    <li key={item}>
                      <i className="fa-solid fa-circle-check"></i>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="sbros-cd-panel">
                <div className="sbros-cd-panel__head">
                  <span className="sbros-cd-panel__icon">
                    <i className="fa-light fa-clipboard-list"></i>
                  </span>
                  <h3>Prerequisites</h3>
                </div>

                <ul className="sbros-cd-check">
                  {prerequisites.map((item) => (
                    <li key={item}>
                      <i className="fa-solid fa-circle-check"></i>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CURRICULUM
      ===================================================== */}
      <section className="sbros-cd-section sbros-cd-section--white">
        <div className="container">
          <div className="sbros-cd-heading">
            <span className="sbros-cd-heading__sub">Syllabus</span>
            <h2 className="sbros-cd-heading__title">Course Curriculum</h2>
            <p>10 structured modules, from Python basics to cloud deployment.</p>
          </div>

          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="sbros-cd-accordion">
                {modules.map((mod, index) => (
                  <div
                    key={mod.title}
                    className={`sbros-cd-accordion__item ${
                      openModule === index ? "open" : ""
                    }`}
                  >
                    <button
                      type="button"
                      className="sbros-cd-accordion__head"
                      onClick={() => toggleModule(index)}
                      aria-expanded={openModule === index}
                    >
                      <span className="sbros-cd-accordion__no">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="sbros-cd-accordion__icon">
                        <i className={mod.icon}></i>
                      </span>

                      <span className="sbros-cd-accordion__title">
                        <small>Module {index + 1}</small>
                        {mod.title}
                      </span>

                      <i className="fa-light fa-chevron-down sbros-cd-accordion__arrow"></i>
                    </button>

                    <div className="sbros-cd-accordion__body">
                      <div className="sbros-cd-accordion__inner">
                        <ul>
                          {mod.topics.map((topic) => (
                            <li key={topic}>
                              <i className="fa-light fa-angle-right"></i>
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          OUTCOMES
      ===================================================== */}
      <section className="sbros-cd-outcomes">
        <div className="container">
          <div className="sbros-cd-heading sbros-cd-heading--light">
            <span className="sbros-cd-heading__sub">Course Outcome</span>
            <h2 className="sbros-cd-heading__title">
              What You Will Get at the End of the Course
            </h2>
          </div>

          <div className="row">
            {outcomes.map((item, index) => (
              <div key={item.title} className="col-xl-4 col-md-6">
                <div className="sbros-cd-outcome">
                  <span className="sbros-cd-outcome__no">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SCHEDULE
      ===================================================== */}
      <section className="sbros-cd-section sbros-cd-section--white">
        <div className="container">
          <div className="sbros-cd-heading">
            <span className="sbros-cd-heading__sub">Batches</span>
            <h2 className="sbros-cd-heading__title">Schedule Options</h2>
          </div>

          <div className="row justify-content-center">
            {schedules.map((s) => (
              <div key={s.title} className="col-lg-5 col-md-6">
                <div className="sbros-cd-schedule">
                  <div className="sbros-cd-schedule__head">
                    <span>
                      <i className={s.icon}></i>
                    </span>
                    <h3>{s.title}</h3>
                  </div>

                  <ul>
                    {s.rows.map((row) => (
                      <li key={row.label}>
                        <span>{row.label}</span>
                        <strong>{row.value}</strong>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          ASSESSMENT & CERTIFICATION
      ===================================================== */}
      <section className="sbros-cd-section sbros-cd-section--light">
        <div className="container">
          <div className="sbros-cd-heading">
            <span className="sbros-cd-heading__sub">Evaluation</span>
            <h2 className="sbros-cd-heading__title">
              Assessment &amp; Certification
            </h2>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="sbros-cd-panel">
                <div className="sbros-cd-panel__head">
                  <span className="sbros-cd-panel__icon">
                    <i className="fa-light fa-pen-ruler"></i>
                  </span>
                  <h3>Assessment Structure</h3>
                </div>

                <ul className="sbros-cd-check">
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    2 hours of written assessment to test theoretical knowledge
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    6 hours of project execution to demonstrate practical skills
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Minimum 75% attendance required for certification
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="sbros-cd-panel sbros-cd-panel--cert">
                <div className="sbros-cd-panel__head">
                  <span className="sbros-cd-panel__icon">
                    <i className="fa-light fa-award"></i>
                  </span>
                  <h3>Certification</h3>
                </div>

                <p>
                  A certificate of <strong>&quot;Fullstack Development in
                  Python&quot;</strong> endorsed by SBros Tech Pvt. Ltd. will be
                  issued to all successful students upon completion of the
                  course and assessment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ADDITIONAL INFO
      ===================================================== */}
      <section className="sbros-cd-section sbros-cd-section--white">
        <div className="container">
          <div className="sbros-cd-heading">
            <span className="sbros-cd-heading__sub">Good To Know</span>
            <h2 className="sbros-cd-heading__title">Additional Information</h2>
          </div>

          <div className="row">
            {extraInfo.map((item) => (
              <div key={item.title} className="col-lg-4 col-md-6">
                <div className="sbros-cd-info">
                  <div className="sbros-cd-info__icon">
                    <i className={item.icon}></i>
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          VENUE + ENROLL CTA
      ===================================================== */}
      <section className="sbros-cd-venue">
        <div className="container">
          <div className="sbros-cd-venue__box">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="sbros-cd-venue__address">
                  <span className="sbros-cd-venue__icon">
                    <i className="fa-light fa-location-dot"></i>
                  </span>

                  <div>
                    <h3>Training Venue</h3>
                    <address>
                      SBros Tech Pvt. Ltd.
                      <br />
                      No.15/25, Madavilagam,
                      <br />
                      Kandanvilai Post,
                      <br />
                      Kanniyakumari District,
                      <br />
                      PIN - 629810
                    </address>
                  </div>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="sbros-cd-venue__cta">
                  <h3>Ready to Become a Python Full Stack Developer?</h3>

                  <Link
                    href="/training#apply-now"
                    className="sbros-cd-btn sbros-cd-btn--white"
                  >
                    Enroll Now - ₹28,000
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PythonCourse;