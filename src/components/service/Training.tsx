"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

/* =========================================================
   TYPES
========================================================= */

type Category = "Full Stack" | "Programming" | "Marketing";

interface Course {
  id: number;
  category: Category;
  badge: string;
  title: string;
  description: string;
  features: string[];
  hours: string;
  price: string;
  link: string;
  icon: string;
}

interface TrainingForm {
  name: string;
  email: string;
  phone: string;
  course: string[];
  message: string;
}

/* =========================================================
   EMAILJS CONFIGURATION
========================================================= */

const EMAILJS_SERVICE_ID = "service_te4h95e";
const EMAILJS_TEMPLATE_ID = "template_za9t21s";
const EMAILJS_PUBLIC_KEY = "KyXcPc1wkkbjpjgIo";

// Same reCAPTCHA site key used in the Contact form.
const CAPTCHA_SITE_KEY =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
  "6Ld4tBQuAAAAAP87Y3QFA3Aijr9_1Z9aOQcHzr10";

/* =========================================================
   COURSE DATA
========================================================= */

const courses: Course[] = [
  {
    id: 1,
    category: "Full Stack",
    badge: "Most Popular",
    title: "Full Stack Development in Python",
    description:
      "Master Python programming and build powerful web applications using Django, REST APIs, and modern frontend technologies.",
    features: [
      "Python Core to Advanced",
      "Django & Flask Framework",
      "React.js Integration",
      "Database Management",
      "Live Project Development",
    ],
    hours: "200 Hours",
    price: "₹28,000",
    link: "/python",
    icon: "fa-brands fa-python",
  },
  {
    id: 2,
    category: "Full Stack",
    badge: "Enterprise Ready",
    title: "Full Stack Development in Java",
    description:
      "Become a Java Full Stack Developer with Spring Boot, Microservices, and modern frontend technologies.",
    features: [
      "Core Java & Advanced Java",
      "Spring Boot & Microservices",
      "React.js Frontend",
      "MySQL & MongoDB",
      "Cloud Deployment (AWS)",
    ],
    hours: "200 Hours",
    price: "₹28,000",
    link: "/java",
    icon: "fa-brands fa-java",
  },
  {
    id: 3,
    category: "Full Stack",
    badge: "Trending",
    title: "Full Stack Development in Next.js",
    description:
      "Build modern web applications with Next.js, TypeScript, and Tailwind CSS.",
    features: [
      "Next.js App Router",
      "TypeScript Mastery",
      "Tailwind CSS & UI Libraries",
      "Prisma ORM & Database",
      "Vercel Deployment",
    ],
    hours: "200 Hours",
    price: "₹28,000",
    link: "/Next.js",
    icon: "fa-brands fa-react",
  },
  {
    id: 4,
    category: "Programming",
    badge: "Beginner Friendly",
    title: "Python Programming",
    description:
      "Start your programming journey with Python. Learn fundamentals, data structures, and build real-world projects.",
    features: [
      "Python Basics to Advanced",
      "Data Structures & Algorithms",
      "File Handling & Database",
      "GUI Development with Tkinter",
      "Mini Projects & Assignments",
    ],
    hours: "100 Hours",
    price: "₹12,000",
    link: "/python-programming",
    icon: "fa-light fa-code",
  },
  {
    id: 5,
    category: "Programming",
    badge: "Foundation Course",
    title: "Java Programming",
    description:
      "Master Java programming from scratch. Learn OOP concepts, collections, and build applications.",
    features: [
      "Java Fundamentals",
      "Object-Oriented Programming",
      "Collections Framework",
      "Exception Handling",
      "JDBC & Database Connectivity",
    ],
    hours: "100 Hours",
    price: "₹12,000",
    link: "/java-programming",
    icon: "fa-light fa-laptop-code",
  },
  {
    id: 6,
    category: "Marketing",
    badge: "High Demand",
    title: "Digital Marketing",
    description:
      "Master digital marketing strategies, SEO, Google Ads, and social media marketing to grow businesses online.",
    features: [
      "SEO & Content Marketing",
      "Google Ads & Analytics",
      "Social Media Marketing",
      "Email Marketing Automation",
      "Live Campaign Projects",
    ],
    hours: "100 Hours",
    price: "₹12,000",
    link: "/digital-marketing",
    icon: "fa-light fa-chart-line",
  },
];

const filters: ("All" | Category)[] = [
  "All",
  "Full Stack",
  "Programming",
  "Marketing",
];

const stats = [
  {
    icon: "fa-light fa-user-graduate",
    value: "5000+",
    label: "Students Trained",
  },
  {
    icon: "fa-light fa-book-open",
    value: "6",
    label: "Industry Courses",
  },
  {
    icon: "fa-light fa-laptop-code",
    value: "100%",
    label: "Live Projects",
  },
  {
    icon: "fa-light fa-user-tie",
    value: "Expert",
    label: "Mentors",
  },
];

const steps = [
  {
    icon: "fa-light fa-list-check",
    title: "Choose Your Course",
    text: "Select the course that matches your career goal.",
  },
  {
    icon: "fa-light fa-file-pen",
    title: "Fill the Application",
    text: "Submit the enquiry form with your basic details.",
  },
  {
    icon: "fa-light fa-headset",
    title: "Free Counselling",
    text: "Our team will guide you and discuss your batch.",
  },
  {
    icon: "fa-light fa-rocket",
    title: "Start Learning",
    text: "Join the batch and start building real-world projects.",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

const Training = () => {
  const captchaRef = useRef<ReCAPTCHA>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const [activeFilter, setActiveFilter] =
    useState<"All" | Category>("All");

  const [form, setForm] = useState<TrainingForm>({
    name: "",
    email: "",
    phone: "",
    course: [],
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const visibleCourses =
    activeFilter === "All"
      ? courses
      : courses.filter(
          (course) => course.category === activeFilter
        );

  /* =========================================================
     TOGGLE COURSE CHECKBOX
  ========================================================= */

  const toggleCourse = (title: string) => {
    setForm((previous) => ({
      ...previous,
      course: previous.course.includes(title)
        ? previous.course.filter((item) => item !== title)
        : [...previous.course, title],
    }));

    setSubmitted(false);
    setErrorMessage("");
  };

  /* =========================================================
     SELECT COURSE AND SCROLL TO FORM
  ========================================================= */

  const handleApply = (title: string) => {
    setForm((previous) => ({
      ...previous,
      course: previous.course.includes(title)
        ? previous.course
        : [...previous.course, title],
    }));

    setSubmitted(false);
    setErrorMessage("");

    document.getElementById("apply-now")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  /* =========================================================
     FORM INPUT HANDLER
  ========================================================= */

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
    setErrorMessage("");
  };

  /* =========================================================
     EMAILJS FORM SUBMISSION
  ========================================================= */

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (isSending) return;

    if (!captchaToken) {
      setSubmitted(false);
      setErrorMessage("Please complete the reCAPTCHA verification.");
      return;
    }

    if (form.course.length === 0) {
      setSubmitted(false);
      setErrorMessage("Please select at least one course.");
      return;
    }

    setIsSending(true);
    setSubmitted(false);
    setErrorMessage("");

    try {
      /* Common variable names ellam anuppurom,
         so template-la edhu use pannirundhaalum work aagum */

      const selectedCourses = form.course.join(", ");

      const templateParams = {
        // Name
        name: form.name.trim(),
        from_name: form.name.trim(),
        user_name: form.name.trim(),

        // Email
        email: form.email.trim(),
        from_email: form.email.trim(),
        user_email: form.email.trim(),
        reply_to: form.email.trim(),

        // Phone
        phone: form.phone.trim(),
        user_phone: form.phone.trim(),

        // Service / Course / Subject
        service: selectedCourses,
        course: selectedCourses,
        subject: selectedCourses,

        // Message
        message: form.message.trim() || "No additional message",

        // Google reCAPTCHA response for EmailJS verification
        "g-recaptcha-response": captchaToken,
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      setSubmitted(true);

      setForm({
        name: "",
        email: "",
        phone: "",
        course: [],
        message: "",
      });
    } catch (error) {
      console.error("EmailJS submission error:", error);

      setErrorMessage(
        "Sorry, your application could not be sent. Please try again."
      );
    } finally {
      setIsSending(false);
      captchaRef.current?.reset();
      setCaptchaToken(null);
    }
  };

  return (
    <>
      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="sbros-tr-stats">
        <div className="container">
          <div className="sbros-tr-stats__box">
            <div className="row g-0">
              {stats.map((item) => (
                <div key={item.label} className="col-lg-3 col-6">
                  <div className="sbros-tr-stats__item">
                    <i className={item.icon}></i>

                    <div>
                      <h3>{item.value}</h3>
                      <span>{item.label}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          COURSES
      ===================================================== */}

      <section className="sbros-tr-courses">
        <div className="container">
          <div className="sbros-tr-heading">
            <span className="sbros-tr-heading__sub">
              Our Courses
            </span>

            <h2 className="sbros-tr-heading__title">
              Industry-Relevant Courses To Build Your Career
            </h2>

            <p>
              Practical, project-based training designed by industry
              experts to help you develop career-ready skills.
            </p>
          </div>

          <div className="sbros-tr-filters">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`sbros-tr-filters__btn ${
                  activeFilter === filter ? "active" : ""
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="row">
            {visibleCourses.map((course) => (
              <div
                key={course.id}
                className="col-xl-4 col-md-6"
              >
                <div className="sbros-tr-card">
                  <span className="sbros-tr-card__badge">
                    {course.badge}
                  </span>

                  <div className="sbros-tr-card__icon">
                    <i className={course.icon}></i>
                  </div>

                  <h3 className="sbros-tr-card__title">
                    {course.title}
                  </h3>

                  <p className="sbros-tr-card__desc">
                    {course.description}
                  </p>

                  <ul className="sbros-tr-card__list">
                    {course.features.map((feature) => (
                      <li key={feature}>
                        <i className="fa-solid fa-circle-check"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="sbros-tr-card__meta">
                    <span className="sbros-tr-card__hours">
                      <i className="fa-light fa-clock"></i>
                      {course.hours}
                    </span>

                    <span className="sbros-tr-card__price">
                      {course.price}
                    </span>
                  </div>

                  <div className="sbros-tr-card__actions">
                    <button
                      type="button"
                      className="sbros-tr-btn sbros-tr-btn--fill"
                      onClick={() => handleApply(course.title)}
                    >
                      Apply Now
                    </button>

                    <Link
                      href={course.link}
                      className="sbros-tr-card__link"
                    >
                      View Course Details
                      <i className="fa-light fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW TO APPLY
      ===================================================== */}

      <section className="sbros-tr-steps">
        <div className="container">
          <div className="sbros-tr-heading sbros-tr-heading--light">
            <span className="sbros-tr-heading__sub">
              How To Apply
            </span>

            <h2 className="sbros-tr-heading__title">
              Enroll In 4 Simple Steps
            </h2>
          </div>

          <div className="row">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="col-lg-3 col-md-6"
              >
                <div className="sbros-tr-step">
                  <span className="sbros-tr-step__no">
                    0{index + 1}
                  </span>

                  <div className="sbros-tr-step__icon">
                    <i className={step.icon}></i>
                  </div>

                  <h4>{step.title}</h4>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          APPLY FORM
      ===================================================== */}

      <section
        className="sbros-tr-apply"
        id="apply-now"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="sbros-tr-apply__content">
                <span className="sbros-tr-heading__sub">
                  Apply Now
                </span>

                <h2 className="sbros-tr-heading__title">
                  Reserve Your Seat Today
                </h2>

                <p>
                  Fill in the form and our admission team will contact
                  you with batch timings, fee details and course guidance.
                </p>

                <ul className="sbros-tr-apply__points">
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Free career counselling
                  </li>

                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Weekday &amp; weekend batches
                  </li>

                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Hands-on live project training
                  </li>

                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Certificate on course completion
                  </li>
                </ul>
              </div>
            </div>

            {/* EMAILJS ENQUIRY FORM */}

            <div className="col-lg-7" id="form1">
              <form
                className="sbros-tr-form"
                onSubmit={handleSubmit}
              >
                <h3>Course Enquiry Form</h3>

                <div className="row">
                  <div className="col-md-6">
                    <div className="sbros-tr-form__group">
                      <label htmlFor="name">Full Name</label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        value={form.name}
                        onChange={handleChange}
                        autoComplete="name"
                        maxLength={100}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="sbros-tr-form__group">
                      <label htmlFor="phone">Phone Number</label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={form.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                        maxLength={20}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="sbros-tr-form__group">
                      <label htmlFor="email">Email Address</label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={form.email}
                        onChange={handleChange}
                        autoComplete="email"
                        maxLength={254}
                        required
                      />
                    </div>
                  </div>

                  {/* COURSE PICKER (SIMPLE CHIPS) */}
                  <div className="col-12">
                    <div className="sbros-tr-form__group">
                      <style>{`
                        .sbros-chip{position:relative;display:inline-flex;align-items:center;gap:8px;padding:9px 16px;margin:0;background:#fff;border:1.5px solid #dbe6f0;border-radius:50px;cursor:pointer;font-size:14px;font-weight:500;transition:border-color .15s,background .15s,color .15s}
                        .sbros-chip:hover{border-color:#2ea8f0}
                        .sbros-chip input{position:absolute;opacity:0;pointer-events:none}
                        .sbros-chip:focus-within{outline:2px solid #2ea8f0;outline-offset:2px}
                        .sbros-chip i{display:none;font-size:12px}
                        .sbros-chip.is-on{background:#2ea8f0;border-color:#2ea8f0;color:#fff}
                        .sbros-chip.is-on i{display:inline-block}
                        .sbros-chip-wrap{display:flex;flex-wrap:wrap;gap:10px}
                      `}</style>

                      <label>Choose Your Courses</label>

                      <div
                        className="sbros-chip-wrap"
                        role="group"
                        aria-label="Select courses"
                      >
                        {courses.map((course) => {
                          const checked = form.course.includes(
                            course.title
                          );

                          return (
                            <label
                              key={course.id}
                              htmlFor={`course-${course.id}`}
                              className={`sbros-chip ${
                                checked ? "is-on" : ""
                              }`}
                            >
                              <input
                                id={`course-${course.id}`}
                                type="checkbox"
                                name="course"
                                value={course.title}
                                checked={checked}
                                onChange={() =>
                                  toggleCourse(course.title)
                                }
                              />

                              <i
                                className="fa-solid fa-check"
                                aria-hidden="true"
                              ></i>

                              {course.title}
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="sbros-tr-form__group">
                      <label htmlFor="message">
                        Message (Optional)
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Tell us about your background or questions"
                        value={form.message}
                        onChange={handleChange}
                        maxLength={2000}
                      />
                    </div>
                  </div>

                  {/* GOOGLE RECAPTCHA */}
                  <div className="col-12">
                    <div
                      className="sbros-tr-form__group"
                      style={{ marginBottom: "20px" }}
                    >
                      <ReCAPTCHA
                        ref={captchaRef}
                        sitekey={CAPTCHA_SITE_KEY}
                        onChange={(token: string | null) => {
                          setCaptchaToken(token);
                          setErrorMessage("");
                        }}
                        onExpired={() => setCaptchaToken(null)}
                        onErrored={() => {
                          setCaptchaToken(null);
                          setSubmitted(false);
                          setErrorMessage(
                            "CAPTCHA loading failed. Please refresh and try again."
                          );
                        }}
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="sbros-tr-btn sbros-tr-btn--fill sbros-tr-btn--block"
                  disabled={isSending}
                  aria-busy={isSending}
                >
                  {isSending
                    ? "Sending Application..."
                    : "Submit Application"}
                </button>

                {submitted && (
                  <p
                    className="sbros-tr-form__success"
                    role="status"
                  >
                    <i className="fa-solid fa-circle-check"></i>
                    Thank you! Your application has been sent
                    successfully. Our team will contact you shortly.
                  </p>
                )}

                {errorMessage && (
                  <p
                    className="sbros-tr-form__error"
                    role="alert"
                  >
                    <i className="fa-solid fa-circle-exclamation"></i>{" "}
                    {errorMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="sbros-tr-cta">
        <div className="container">
          <div className="sbros-tr-cta__box">
            <div className="sbros-tr-cta__text">
              <h2>
                Ready to Start Your Learning Journey?
              </h2>

              <p>
                Join students who are building their careers through
                industry-relevant courses and expert guidance.
              </p>
            </div>

            <Link
              href="/contact-us"
              className="sbros-tr-btn sbros-tr-btn--white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Training;