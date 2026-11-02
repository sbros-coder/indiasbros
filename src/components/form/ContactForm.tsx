
"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current || isSending) return;

    setIsSending(true);
    setStatusMessage("");

    try {
      const result = await emailjs.sendForm(
        "service_te4h95e",
        "template_za9t21s",
        formRef.current,
        {
          publicKey: "KyXcPc1wkkbjpjgIo",
        }
      );

      if (result.status === 200) {
        setIsSuccess(true);
        setStatusMessage(
          "Your message has been sent successfully! We will contact you soon."
        );

        formRef.current.reset();
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      setIsSuccess(false);
      setStatusMessage(
        "Failed to send your message. Please try again later."
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="sbros-contact-form-area">
      <div className="container">
        <div className="sbros-contact-page-title">
          <span className="sbros-contact-page-subtitle">
            CONNECT WITH US
          </span>

          <h2 className="sbros-contact-page-heading">
            Let's Talk About <span>Your Project</span>
          </h2>

          <p className="sbros-contact-page-text">
            Reach out to our team for any enquiry, support or a free
            consultation. We are always happy to help.
          </p>
        </div>

        <div className="sbros-contact-form-wrapper">
          <div className="row align-items-stretch">
            {/* LEFT CONTACT INFORMATION */}
            <div className="col-xl-5 col-lg-5">
              <div className="sbros-contact-info">
                <span className="sbros-contact-subtitle">
                  GET IN TOUCH
                </span>

                <p className="sbros-contact-description">
                  We’re proud to have a global presence with offices in
                  key locations to serve you better.
                </p>

                <h2 className="sbros-contact-title">
                  Contact Info
                </h2>

                <a
                  href="https://www.google.com/maps/place/SBros+Tech+Pvt+Ltd/@8.2056778,77.3217726,17z/data=!4m12!1m5!3m4!2zOMKwMTInMjAuNCJOIDc3wrAxOScxOC40IkU!8m2!3d8.2056778!4d77.3217726!3m5!1s0x3b04fbaac0db9d55:0xdef8ffd0b62a1f73!8m2!3d8.2056778!4d77.3243475!16s%2Fg%2F11sdxg3g_2?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open SBros Tech location in Google Maps"
                  className="sbros-contact-info-item"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    cursor: "pointer",
                  }}
                >
                  <div className="sbros-contact-info-icon">
                    <i className="fa-regular fa-location-dot"></i>
                  </div>

                  <div>
                    <small>ADDRESS</small>
                    <p>
                      No. 15/25, Madavilagam, Kandanvilai Post,
                      Kanniyakumari District, PIN-629810.
                    </p>
                  </div>
                </a>

                <div className="sbros-contact-info-item">
                  <div className="sbros-contact-info-icon">
                    <i className="fa-regular fa-phone"></i>
                  </div>

                  <div>
                    <small>PHONE</small>
                    <a href="tel:+914651239543">
                      +91 4651239543
                    </a>
                  </div>
                </div>

                <div className="sbros-contact-info-item">
                  <div className="sbros-contact-info-icon">
                    <i className="fa-regular fa-envelope"></i>
                  </div>

                  <div>
                    <small>EMAIL</small>
                    <a href="mailto:info@sbrostech.com">
                      info@sbrostech.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT CONTACT FORM */}
            <div className="col-xl-7 col-lg-7">
              <div className="sbros-contact-form-card">
                <div className="sbros-form-heading">
                  <span>CONTACT US</span>
                  <h3>Have Any Question?</h3>

                  <p>
                    Fill out the form below and our team will
                    get back to you shortly.
                  </p>
                </div>

                <form ref={formRef} onSubmit={sendEmail}>
                  <div className="row">
                    {/* NAME */}
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="sbros-form-group">
                        <label htmlFor="user_name">
                          Your Name
                        </label>

                        <div className="sbros-input-box">
                          <i className="fa-regular fa-user"></i>

                          <input
                            id="user_name"
                            type="text"
                            name="user_name"
                            placeholder="Enter your name"
                            autoComplete="name"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* EMAIL */}
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="sbros-form-group">
                        <label htmlFor="user_email">
                          Email Address
                        </label>

                        <div className="sbros-input-box">
                          <i className="fa-regular fa-envelope"></i>

                          <input
                            id="user_email"
                            type="email"
                            name="user_email"
                            placeholder="Enter your email"
                            autoComplete="email"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* PHONE */}
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="sbros-form-group">
                        <label htmlFor="user_phone">
                          Phone Number
                        </label>

                        <div className="sbros-input-box">
                          <i className="fa-regular fa-phone"></i>

                          <input
                            id="user_phone"
                            type="tel"
                            name="user_phone"
                            placeholder="Enter phone number"
                            autoComplete="tel"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* SERVICE */}
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="sbros-form-group">
                        <label htmlFor="service">
                          Service
                        </label>

                        <div className="sbros-input-box">
                          <i className="fa-regular fa-layer-group"></i>

                          <select
                            id="service"
                            name="service"
                            defaultValue=""
                            required
                          >
                            <option value="" disabled>
                              Select a service
                            </option>

                            <option value="Website Development">
                              Website Development
                            </option>

                            <option value="Software Development">
                              Software Development
                            </option>

                            <option value="Digital Marketing">
                              Digital Marketing
                            </option>

                            <option value="Graphic Design">
                              Graphic Design
                            </option>

                            <option value="Training Program">
                              Training Program
                            </option>

                            <option value="CCTV & Security">
                              CCTV & Security
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* MESSAGE */}
                    <div className="col-12">
                      <div className="sbros-form-group">
                        <label htmlFor="message">
                          Your Message
                        </label>

                        <div className="sbros-textarea-box">
                          <i className="fa-regular fa-message"></i>

                          <textarea
                            id="message"
                            name="message"
                            placeholder="Tell us about your project..."
                            rows={5}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* STATUS MESSAGE */}
                    {statusMessage && (
                      <div className="col-12">
                        <p
                          role="status"
                          aria-live="polite"
                          style={{
                            color: isSuccess ? "green" : "#d93025",
                            marginBottom: "15px",
                          }}
                        >
                          {statusMessage}
                        </p>
                      </div>
                    )}

                    {/* SUBMIT BUTTON */}
                    <div className="col-12">
                      <button
                        type="submit"
                        className="sbros-contact-submit"
                        disabled={isSending}
                        aria-busy={isSending}
                      >
                        <span>
                          {isSending
                            ? "Sending..."
                            : "Send Your Message"}
                        </span>

                        <i className="fa-regular fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default ContactForm;
