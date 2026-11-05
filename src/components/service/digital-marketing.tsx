
"use client";

import React, { useEffect } from "react";
import Link from "next/link";


const modules = [
  {
    number: "01",
    title: "Introduction to Digital Marketing",
    description: "Digital ecosystem, marketing channels, and career paths.",
  },
  {
    number: "02",
    title: "WordPress Website Designing",
    description: "Create professional websites without coding.",
  },
  {
    number: "03",
    title: "Search Engine Optimization (SEO)",
    description: "On-page, off-page, technical SEO, and keyword research.",
  },
  {
    number: "04",
    title: "Content Marketing",
    description: "Content strategy, blogging, and copywriting techniques.",
  },
  {
    number: "05",
    title: "Social Media Marketing (SMM)",
    description: "Facebook, Instagram, LinkedIn, and social media strategies.",
  },
  {
    number: "06",
    title: "Search Engine Marketing (SEM)",
    description: "Google Ads, PPC campaigns, and ad optimization.",
  },
  {
    number: "07",
    title: "Email Marketing",
    description: "Email campaigns, automation, and list building.",
  },
  {
    number: "08",
    title: "Affiliate & Influencer Marketing",
    description: "Partnership strategies and influencer collaboration.",
  },
  {
    number: "09",
    title: "Web Analytics & Conversion",
    description: "Google Analytics, conversion optimization, and A/B testing.",
  },
  {
    number: "10",
    title: "Digital Marketing Strategy & Tools",
    description: "Campaign planning, marketing tools, and automation.",
  },
  {
    number: "11",
    title: "Emerging Trends",
    description: "AI in marketing, voice search, and video marketing.",
  },
];

const benefits = [
  {
    icon: "↗",
    title: "Huge Career Opportunities",
    description:
      "Explore opportunities across industries with strong career growth potential.",
  },
  {
    icon: "₹",
    title: "High-Paying Jobs",
    description:
      "Build practical skills that can help you pursue competitive digital marketing roles.",
  },
  {
    icon: "◈",
    title: "Boost for Entrepreneurs",
    description:
      "Learn to promote your own brand, products, and business online.",
  },
  {
    icon: "◎",
    title: "In-Demand Skills",
    description:
      "Develop skills in SEO, social media, content, email, and paid advertising.",
  },
  {
    icon: "⌘",
    title: "Hands-On Experience",
    description:
      "Practise campaign planning through live projects and real-world exercises.",
  },
  {
    icon: "🌐",
    title: "Global Opportunities",
    description:
      "Explore remote work and digital marketing opportunities worldwide.",
  },
];

const audience = [
  { icon: "01", title: "Students & Graduates" },
  { icon: "02", title: "Marketing Professionals" },
  { icon: "03", title: "Business Owners" },
  { icon: "04", title: "Freelancers" },
  { icon: "05", title: "Career Switchers" },
  { icon: "06", title: "Content Creators" },
];

const outcomes = [
  "Explore career opportunities across industries.",
  "Build skills for digital marketing roles.",
  "Promote your own brand or business online.",
  "Learn SEO, social media, content, email, and paid ads.",
  "Gain practical experience through projects and campaigns.",
  "Earn an SBros Tech course completion certificate after meeting assessment requirements.",
];

const DigitalMarketing = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".dm-reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("dm-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("dm-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="dm-page">
      {/* HERO */}
      <section className="dm-hero">
        <div className="dm-container dm-hero-grid">
          <div className="dm-hero-content dm-reveal">
            <span className="dm-eyebrow">
              SBROS TECH · PROFESSIONAL TRAINING
            </span>

            <h1>
              Digital Marketing
              <span> Master the Digital World.</span>
            </h1>

            <p className="dm-hero-description">
              Transform your career with in-demand digital skills,
              practical training, and real-world campaign experience.
            </p>

            <div className="dm-hero-stats">
              <div>
                <strong>100</strong>
                <span>Training Hours</span>
              </div>
              <div>
                <strong>11</strong>
                <span>Course Modules</span>
              </div>
              <div>
                <strong>5+</strong>
                <span>Projects</span>
              </div>
              <div>
                <strong>10+</strong>
                <span>Tools</span>
              </div>
            </div>

           <div className="dm-hero-actions">
  <a
    className="dm-btn dm-btn-primary"
    href="/training-services#form1"
  >
    Enroll Now · ₹12,000
    <span aria-hidden="true"> ↗</span>
  </a>

  {/* <a
    className="dm-btn dm-btn-outline"
    href="#dm-curriculum"
  >
    Explore Curriculum
  </a> */}
</div>

            <div className="dm-hero-note">
              <span>✓</span> Practical Learning
              <span>✓</span> Live Projects
              <span>✓</span> Course Certification
            </div>
          </div>

          <div className="dm-hero-visual dm-reveal">
            {/* Replace this image with your preferred course banner */}
            <div className="dm-image-frame">
              <img
                src="/assets/images/happy.jpg"
                alt="Digital marketing and modern technology"
              />

              <div className="dm-image-overlay">
                <span className="dm-image-tag">CAREER-FOCUSED TRAINING</span>
                <h2>Learn. Practise. Grow.</h2>
                <p>Build your digital marketing skills with SBros Tech.</p>
              </div>
            </div>

            <div className="dm-floating-card dm-floating-top">
              <span className="dm-floating-icon">↗</span>
              <div>
                <strong>Real-World Skills</strong>
                <span>Practical campaign experience</span>
              </div>
            </div>

            <div className="dm-floating-card dm-floating-bottom">
              <span className="dm-floating-icon">✓</span>
              <div>
                <strong>11 Learning Modules</strong>
                <span>Structured course curriculum</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY LEARN */}
      <section className="dm-section" id="dm-benefits">
        <div className="dm-container">
          <div className="dm-section-heading dm-reveal">
            <span className="dm-eyebrow">WHY CHOOSE THIS COURSE</span>
            <h2>
              Why Learn <span>Digital Marketing?</span>
            </h2>
            <p>
              Develop relevant digital skills to grow your career,
              strengthen your business, and reach the right audience online.
            </p>
          </div>

          <div className="dm-benefit-grid">
            {benefits.map((item, index) => (
              <article
                className="dm-benefit-card dm-reveal"
                key={item.title}
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <span className="dm-card-icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="dm-card-arrow" aria-hidden="true">
                  ↗
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHO SHOULD JOIN */}
      <section className="dm-section dm-section-soft" id="dm-audience">
        <div className="dm-container dm-two-column">
          <div className="dm-section-heading dm-heading-left dm-reveal">
            <span className="dm-eyebrow">WHO CAN JOIN?</span>
            <h2>
              Designed for Your <span>Next Step</span>
            </h2>
            <p>
              Whether you are starting your career, growing a business,
              or learning a new skill, this course helps you understand
              the digital marketing landscape.
            </p>

            <ul className="dm-check-list">
              <li>Marketing and sales professionals upgrading their skills</li>
              <li>Business owners and entrepreneurs growing online</li>
              <li>Students, higher secondary pass-outs, and graduates</li>
              <li>Career switchers exploring digital roles</li>
              <li>Non-IT professionals exploring digital opportunities</li>
              <li>Content creators and influencers building their brand</li>
            </ul>
          </div>

          <div className="dm-audience-grid dm-reveal">
            {audience.map((item) => (
              <div className="dm-audience-card" key={item.title}>
                <span>{item.icon}</span>
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREREQUISITES */}
      <section className="dm-section">
        <div className="dm-container dm-prereq-panel dm-reveal">
          <div className="dm-prereq-heading">
            <span className="dm-eyebrow">GET READY TO LEARN</span>
            <h2>
              Course <span>Prerequisites</span>
            </h2>
            <p>No advanced technical background is required.</p>
          </div>

          <ul className="dm-check-list">
            <li>Basic computer literacy and internet navigation skills.</li>
            <li>
              School-level mathematics is helpful, but not mandatory.
            </li>
            <li>
              Curiosity and willingness to learn online marketing.
            </li>
            <li>
              A personal laptop is required for hands-on practice.
            </li>
          </ul>
        </div>
      </section>

      {/* CURRICULUM */}
      <section
        className="dm-section dm-section-soft"
        id="dm-curriculum"
      >
        <div className="dm-container">
          <div className="dm-section-heading dm-reveal">
            <span className="dm-eyebrow">YOUR LEARNING JOURNEY</span>
            <h2>
              Course <span>Curriculum</span>
            </h2>
            <p>
              Explore 11 structured modules covering essential digital
              marketing concepts, tools, and campaign techniques.
            </p>
          </div>

          <div className="dm-module-list">
            {modules.map((item, index) => (
              <article
                className="dm-module-card dm-reveal"
                key={item.number}
                style={{ transitionDelay: `${(index % 3) * 65}ms` }}
              >
                <span className="dm-module-number">{item.number}</span>
                <div className="dm-module-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <span className="dm-module-arrow" aria-hidden="true">
                  ↗
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="dm-section">
        <div className="dm-container dm-outcomes-layout">
          <div className="dm-section-heading dm-heading-left dm-reveal">
            <span className="dm-eyebrow">YOUR FUTURE STARTS HERE</span>
            <h2>
              What You&apos;ll <span>Achieve</span>
            </h2>
            <p>
              Gain a foundation in digital marketing through guided learning,
              practical exercises, and project-based experience.
            </p>
          </div>

          <div className="dm-outcome-list dm-reveal">
            {outcomes.map((item, index) => (
              <div className="dm-outcome-item" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="dm-container dm-metric-grid dm-reveal">
          <div><strong>11</strong><span>Modules</span></div>
          <div><strong>100</strong><span>Training Hours</span></div>
          <div><strong>10+</strong><span>Tools Covered</span></div>
          <div><strong>5+</strong><span>Projects</span></div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section className="dm-section dm-section-soft" id="dm-schedule">
        <div className="dm-container">
          <div className="dm-section-heading dm-reveal">
            <span className="dm-eyebrow">LEARN AT YOUR PACE</span>
            <h2>
              Flexible <span>Schedule Options</span>
            </h2>
            <p>Choose a batch that suits your routine.</p>
          </div>

          <div className="dm-schedule-grid">
            <article className="dm-schedule-card dm-reveal">
              <span className="dm-schedule-icon">☀</span>
              <h3>Weekday Batch</h3>
              <strong>Monday to Friday</strong>
              <p>2 hours per day</p>
              <p>10 hours per week</p>
              <div className="dm-schedule-duration">
                Total Duration <strong>10 Weeks</strong>
              </div>
            </article>

            <article className="dm-schedule-card dm-schedule-featured dm-reveal">
              <span className="dm-schedule-icon">✦</span>
              <h3>Weekend Batch</h3>
              <strong>Saturday &amp; Sunday</strong>
              <p>5 hours per day</p>
              <p>10 hours per week</p>
              <div className="dm-schedule-duration">
                Total Duration <strong>10 Weeks</strong>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ASSESSMENT & CERTIFICATION */}
      <section className="dm-section">
        <div className="dm-container dm-two-column dm-assessment">
          <div className="dm-section-heading dm-heading-left dm-reveal">
            <span className="dm-eyebrow">MEASURE YOUR PROGRESS</span>
            <h2>
              Assessment &amp; <span>Certification</span>
            </h2>
            <p>
              Complete the course assessments to demonstrate your knowledge
              and practical understanding of digital marketing.
            </p>
          </div>

          <div className="dm-assessment-card dm-reveal">
            <h3>Assessment Structure</h3>
            <div className="dm-assessment-row">
              <span>01</span>
              <div>
                <strong>Written Assessment</strong>
                <p>2 hours to assess marketing knowledge.</p>
              </div>
            </div>
            <div className="dm-assessment-row">
              <span>02</span>
              <div>
                <strong>Practical Project</strong>
                <p>2 hours for practical campaign creation.</p>
              </div>
            </div>
            <div className="dm-attendance-note">
              <span>✓</span>
              Minimum 75% attendance is required for certification eligibility.
            </div>
            <div className="dm-certificate-note">
              <span className="dm-certificate-icon">★</span>
              <div>
                <strong>SBros Tech Certification</strong>
                <p>
                  Successful students receive a Digital Marketing course
                  completion certificate endorsed by SBros Tech Pvt Ltd,
                  subject to course and assessment requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COURSE INFORMATION */}
      <section className="dm-section dm-section-soft" id="dm-information">
        <div className="dm-container">
          <div className="dm-section-heading dm-reveal">
            <span className="dm-eyebrow">PLAN YOUR LEARNING</span>
            <h2>
              Course <span>Information</span>
            </h2>
          </div>

          <div className="dm-info-grid">
            <article className="dm-info-card dm-reveal">
              <span className="dm-info-icon">▤</span>
              <h3>Course Materials</h3>
              <p>
                Comprehensive study materials, templates, and tools
                will be provided.
              </p>
            </article>

            <article className="dm-info-card dm-reveal">
              <span className="dm-info-icon">Aa</span>
              <h3>Language of Instruction</h3>
              <p>
                English. Tamil can also be used upon request.
              </p>
            </article>

            <article className="dm-info-card dm-reveal">
              <span className="dm-info-icon">✓</span>
              <h3>Attendance Policy</h3>
              <p>
                Minimum 75% attendance is mandatory for certification
                eligibility.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CONTACT / ENROLL */}
      <section className="dm-section dm-contact-section" id="dm-contact">
        <div className="dm-container dm-contact-grid">
          <div className="dm-contact-content dm-reveal">
            <span className="dm-eyebrow">START YOUR JOURNEY</span>
            <h2>
              Build Your Future with <span>SBros Tech</span>
            </h2>
            <p>
              Take the next step toward developing your digital marketing
              skills. Contact our team for course and enrollment details.
            </p>

           <a
  className="dm-btn dm-btn-primary"
  href="/training-services#form1"
>
  Enquire About Enrollment ↗
</a>
          </div>

          <div className="dm-contact-card dm-reveal">
            <span className="dm-eyebrow">TRAINING LOCATION</span>
            <h3>SBros Tech Pvt Ltd</h3>
            <address>
              No. 15/25, Madavilagam,
              <br />
              Kandanvilai Post,
              <br />
              Kanniyakumari District,
              <br />
              Tamil Nadu - PIN 629810
            </address>

            <a href="mailto:info@sbrostech.com">
              info@sbrostech.com
            </a>
            <a href="https://sbrostech.com/">
              www.sbrostech.com
            </a>

            <Link className="dm-contact-link" href="/contact-us">
              Visit Contact Page ↗
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;
