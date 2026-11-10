"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
// import "./career.scss";

/* =========================================================
   EMAILJS CONFIGURATION
========================================================= */

const EMAILJS_SERVICE_ID = "service_te4h95e";
const EMAILJS_TEMPLATE_ID = "template_za9t21s";
const EMAILJS_PUBLIC_KEY = "KyXcPc1wkkbjpjgIo";

// Env variable illaadha pothum crash aagaama irukka fallback key.
const CAPTCHA_SITE_KEY =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
  "6Ld4tBQuAAAAAP87Y3QFA3Aijr9_1Z9aOQcHzr10";

/* =========================================================
   TYPES
========================================================= */

interface CareerForm {
  name: string;
  email: string;
  phone: string;
  appointmentDate: string;
  message: string;
}

const jobPositions = [
  {
    number: "01",
    title: "Python Developer",
    type: "Full Time",
    category: "Software Development",
    description:
      "Build reliable applications, develop backend solutions, and work with our team to deliver quality software.",
    skills: ["Python", "Problem Solving", "Development"],
  },
  {
    number: "02",
    title: "Customer Service Representative",
    type: "Full Time",
    category: "Customer Support",
    description:
      "Assist customers, understand their requirements, and deliver a professional and helpful customer experience.",
    skills: ["Communication", "Customer Care", "Teamwork"],
  },
  {
    number: "03",
    title: "Digital Marketing Executive",
    type: "Full Time",
    category: "Digital Marketing",
    description:
      "Support digital campaigns, create marketing strategies, and help strengthen our clients' online presence.",
    skills: ["Digital Marketing", "Creativity", "Analytics"],
  },
  {
    number: "04",
    title: "CCTV Technician",
    type: "Full Time",
    category: "Security Systems",
    description:
      "Install, configure, and maintain CCTV cameras and security systems while ensuring reliable performance.",
    skills: ["Installation", "Troubleshooting", "Networking"],
  },
];

const Career = () => {
  const captchaRef = useRef<ReCAPTCHA>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [selectedJob, setSelectedJob] = useState("");

  const [form, setForm] = useState<CareerForm>({
    name: "",
    email: "",
    phone: "",
    appointmentDate: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleApply = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setSubmitted(false);
    setErrorMessage("");

    document.getElementById("career-appointment")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  /* =========================================================
     FORM INPUT HANDLER
  ========================================================= */

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
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

    setIsSending(true);
    setSubmitted(false);
    setErrorMessage("");

    try {
      // Appointment date-a message-oda serthu anuppurom,
      // so existing template-laye theriyum
      const fullMessage = [
        form.appointmentDate
          ? `Preferred Appointment Date: ${form.appointmentDate}`
          : "",
        form.message.trim() || "No additional message",
      ]
        .filter(Boolean)
        .join("\n");

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

        // Position (service / subject-kum use aagum)
        service: `Career - ${selectedJob}`,
        course: `Career - ${selectedJob}`,
        position: selectedJob,
        subject: `Career Enquiry - ${selectedJob}`,

        // Date
        appointment_date: form.appointmentDate || "Not specified",

        // Message
        message: fullMessage,

        // Google reCAPTCHA verification token for EmailJS
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
        appointmentDate: "",
        message: "",
      });
      setSelectedJob("");
    } catch (error) {
      console.error("EmailJS submission error:", error);

      setErrorMessage(
        "Sorry, your enquiry could not be sent. Please try again."
      );
    } finally {
      setIsSending(false);
      captchaRef.current?.reset();
      setCaptchaToken(null);
    }
  };

  return (
    <div className="sbros-career-page">
      {/* Introduction */}
      <section className="sbros-career-intro">
        <div className="container">
          <div className="sbros-career-intro-inner">
            <div className="sbros-career-intro-content">
              <span className="sbros-career-eyebrow">
                BUILD YOUR FUTURE WITH US
              </span>

              <h2>
                Join Our Team at{" "}
                <span>SBros Tech Pvt Ltd!</span>
              </h2>

              <p className="sbros-career-lead">
                Turn your passion into progress. Build your skills,
                work on meaningful projects, and grow with a team
                that believes in innovation and collaboration.
              </p>

              <p className="sbros-career-description">
                At SBros Tech Pvt Ltd, we work with a focus on
                innovation, teamwork, and continuous growth. Our
                services include Digital Marketing, Software
                Development, Graphic Design, Web Design and
                Development, CCTV Installation, and Security Systems.
              </p>

              <p className="sbros-career-description">
                We are looking for talented and passionate people
                who are ready to learn, take on new challenges, and
                contribute to exciting projects. If you are ready
                for your next career opportunity, we would love to
                hear from you.
              </p>

              <a href="#career-openings" className="sbros-career-primary-btn">
                Explore Open Positions
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="sbros-career-visual">
              <div className="sbros-career-visual-card">
                <div className="sbros-career-visual-icon">
                  <span aria-hidden="true">✦</span>
                </div>

                <span className="sbros-career-visual-label">
                  YOUR NEXT CHAPTER STARTS HERE
                </span>

                <h3>
                  Grow Your Talent.
                  <br />
                  Shape Your Future.
                </h3>

                <p>
                  Bring your ideas, develop your skills, and make
                  an impact with SBros Tech.
                </p>

                <div className="sbros-career-visual-line" />

                <div className="sbros-career-visual-footer">
                  <span>INNOVATION</span>
                  <span>•</span>
                  <span>TEAMWORK</span>
                  <span>•</span>
                  <span>GROWTH</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="sbros-career-values">
        <div className="container">
          <div className="sbros-career-values-grid">
            <div className="sbros-career-value">
              <span className="sbros-career-value-icon">01</span>
              <div>
                <h3>Continuous Learning</h3>
                <p>Develop your skills and expand your knowledge.</p>
              </div>
            </div>

            <div className="sbros-career-value">
              <span className="sbros-career-value-icon">02</span>
              <div>
                <h3>Team Collaboration</h3>
                <p>Work together and turn great ideas into results.</p>
              </div>
            </div>

            <div className="sbros-career-value">
              <span className="sbros-career-value-icon">03</span>
              <div>
                <h3>Career Development</h3>
                <p>Take on challenges that help you move forward.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section
        className="sbros-career-openings"
        id="career-openings"
      >
        <div className="container">
          <div className="sbros-career-section-heading">
            <span className="sbros-career-eyebrow">
              CAREER OPPORTUNITIES
            </span>

            <h2>
              Find Your <span>Place With Us</span>
            </h2>

            <p>
              Explore our current openings and take the next step
              towards a rewarding career at SBros Tech.
            </p>
          </div>

          <div className="sbros-career-jobs-grid">
            {jobPositions.map((job) => (
              <article
                className="sbros-career-job-card"
                key={job.number}
              >
                <div className="sbros-career-job-top">
                  <span className="sbros-career-job-number">
                    {job.number}
                  </span>

                  <span className="sbros-career-job-type">
                    {job.type}
                  </span>
                </div>

                <span className="sbros-career-job-category">
                  {job.category}
                </span>

                <h3>{job.title}</h3>

                <p className="sbros-career-job-description">
                  {job.description}
                </p>

                <div className="sbros-career-skills">
                  {job.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>

                <button
                  type="button"
                  className="sbros-career-apply-btn"
                  onClick={() => handleApply(job.title)}
                >
                  Apply for this role
                  <span aria-hidden="true">↗</span>
                </button>
              </article>
            ))}
          </div>

          <div className="sbros-career-note">
            <div>
              <h3>Don&apos;t see the right role?</h3>
              <p>
                Tell us about your skills and interests. We would
                be happy to hear from you.
              </p>
            </div>

            <a href="#career-appointment">
              Contact Our Team <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Appointment / Application Form */}
      <section
        className="sbros-career-appointment"
        id="career-appointment"
      >
        <div className="container">
          <div className="sbros-career-form-layout">
            <div className="sbros-career-form-info">
              <span className="sbros-career-eyebrow">
                TAKE THE NEXT STEP
              </span>

              <h2>
                Let&apos;s Talk About Your{" "}
                <span>Future.</span>
              </h2>

              <p>
                Interested in joining SBros Tech? Share your details
                and the role you are interested in. Our team can
                review your enquiry and follow up with you.
              </p>

              <div className="sbros-career-contact-item">
                <span className="sbros-career-contact-icon">01</span>
                <div>
                  <h3>Tell Us About Yourself</h3>
                  <p>Share your contact details and interests.</p>
                </div>
              </div>

              <div className="sbros-career-contact-item">
                <span className="sbros-career-contact-icon">02</span>
                <div>
                  <h3>Choose Your Opportunity</h3>
                  <p>Tell us which position suits your skills.</p>
                </div>
              </div>

              <div className="sbros-career-contact-item">
                <span className="sbros-career-contact-icon">03</span>
                <div>
                  <h3>Start the Conversation</h3>
                  <p>Submit your enquiry to get in touch.</p>
                </div>
              </div>
            </div>

            <div className="sbros-career-form-card">
              <div className="sbros-career-form-heading">
                <span>CAREER ENQUIRY</span>
                <h3>Make an Appointment</h3>
                <p>
                  Fill in the details below to express your interest.
                </p>
              </div>

              <form
                className="sbros-career-form"
                onSubmit={handleSubmit}
              >
                <div className="sbros-career-field">
                  <label htmlFor="career-name">Full Name *</label>
                  <input
                    type="text"
                    id="career-name"
                    name="name"
                    placeholder="Enter your full name"
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    maxLength={100}
                    required
                  />
                </div>

                <div className="sbros-career-field">
                  <label htmlFor="career-email">Email Address *</label>
                  <input
                    type="email"
                    id="career-email"
                    name="email"
                    placeholder="Enter your email address"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    maxLength={254}
                    required
                  />
                </div>

                <div className="sbros-career-field">
                  <label htmlFor="career-phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="career-phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={handleChange}
                    maxLength={20}
                    required
                  />
                </div>

                <div className="sbros-career-field">
                  <label htmlFor="career-position">
                    Position Applying For *
                  </label>
                  <select
                    id="career-position"
                    name="position"
                    value={selectedJob}
                    onChange={(event) => {
                      setSelectedJob(event.target.value);
                      setSubmitted(false);
                      setErrorMessage("");
                    }}
                    required
                  >
                    <option value="">Select a position</option>
                    {jobPositions.map((job) => (
                      <option key={job.number} value={job.title}>
                        {job.title}
                      </option>
                    ))}
                    <option value="Other / General Application">
                      Other / General Application
                    </option>
                  </select>
                </div>

                <div className="sbros-career-field">
                  <label htmlFor="career-date">
                    Preferred Appointment Date
                  </label>
                  <input
                    type="date"
                    id="career-date"
                    name="appointmentDate"
                    value={form.appointmentDate}
                    onChange={handleChange}
                  />
                </div>

                <div className="sbros-career-field">
                  <label htmlFor="career-message">
                    Additional Information
                  </label>
                  <textarea
                    id="career-message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your skills, experience, or availability..."
                    value={form.message}
                    onChange={handleChange}
                    maxLength={2000}
                  />
                </div>

                {/* GOOGLE RECAPTCHA */}
                <div
                  className="sbros-career-recaptcha"
                  style={{ marginBottom: "20px" }}
                >
                  <ReCAPTCHA
                    ref={captchaRef}
                    sitekey={CAPTCHA_SITE_KEY}
                    onChange={(token) => {
                      setCaptchaToken(token);
                      setErrorMessage("");
                    }}
                    onExpired={() => {
                      setCaptchaToken(null);
                    }}
                    onErrored={() => {
                      setCaptchaToken(null);
                      setSubmitted(false);
                      setErrorMessage(
                        "CAPTCHA loading failed. Please refresh and try again."
                      );
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="sbros-career-submit-btn"
                  disabled={isSending}
                  aria-busy={isSending}
                >
                  {isSending ? "Sending Enquiry..." : "Submit Enquiry"}
                  <span aria-hidden="true">→</span>
                </button>

                {submitted && (
                  <p
                    role="status"
                    style={{
                      color: "#16a34a",
                      marginTop: "14px",
                      fontWeight: 500,
                    }}
                  >
                    Thank you! Your enquiry has been sent
                    successfully. Our team will contact you shortly.
                  </p>
                )}

                {errorMessage && (
                  <p
                    role="alert"
                    style={{
                      color: "#dc2626",
                      marginTop: "14px",
                      fontWeight: 500,
                    }}
                  >
                    {errorMessage}
                  </p>
                )}

                <p className="sbros-career-form-disclaimer">
                  Please ensure your contact details are correct
                  before submitting.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;