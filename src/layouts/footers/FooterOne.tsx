import Link from "next/link";
import React from "react";

const FooterOne = () => {
  return (
    <footer className="sbros-modern-footer">
      {/* FOOTER CTA */}
      <div className="sbros-footer-cta">
        <div className="container">
          <div className="sbros-footer-cta-inner">
            <div className="sbros-footer-cta-content">
              <span className="sbros-footer-small-title">
                LET&apos;S WORK TOGETHER
              </span>

              <h2>
                Have a project in mind?
                <br />
                <span>Let&apos;s build something great.</span>
              </h2>
            </div>

            <Link href="/contact-us" className="sbros-footer-cta-btn">
              Start a Project
              <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="sbros-footer-main">
        <div className="container">
          <div className="row">
            {/* COMPANY */}
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="sbros-footer-company">
                <Link href="/" className="sbros-footer-logo">
                  <img
                    src="/assets/images/SBROS-logo.png"
                    alt="SBros Tech"
                  />
                </Link>

                <p className="sbros-footer-description">
                  SBros Tech delivers innovative IT solutions
                  that help businesses grow, transform and
                  succeed in the digital world.
                </p>

                {/* SOCIAL MEDIA LINKS */}
                <div className="sbros-footer-social">
                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/SBrosTechPvtLtd"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/sbrostech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://www.youtube.com/@SBrosTechPvtLtd"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/company/sbros-tech-private-limited/home/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>

                  {/* Twitter / X */}
                  <a
                    href="https://x.com/sbrostech"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter X"
                    className="sbros-twitter-link"
                  >
                    <svg
                      className="sbros-x-logo"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.4l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93Zm-1.29 19.6h2.04L6.48 3.14H4.29L17.61 20.75Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* QUICK LINKS */}
            <div className="col-xl-2 col-lg-2 col-md-6">
              <div className="sbros-footer-widget">
                <h4 className="sbros-footer-title">Quick Links</h4>

                <ul>
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/about-us">About Us</Link></li>
                  <li><Link href="/services">Services</Link></li>
                  <li><Link href="/career">Career</Link></li>
                  <li><Link href="/contact-us">Contact Us</Link></li>
                </ul>
              </div>
            </div>

            {/* SERVICES */}
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="sbros-footer-widget">
                <h4 className="sbros-footer-title">Our Services</h4>

                <ul>
                  <li>
                    <Link href="/website-development">
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/software-development">
                      Software Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/digital">
                      Digital Marketing
                    </Link>
                  </li>
                  <li>
                    <Link href="/graphic-design">
                      Graphic Design
                    </Link>
                  </li>
                  <li>
                    <Link href="/training-services">
                      Training Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/network-security">
                      Network &amp; Security System
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* CONTACT */}
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="sbros-footer-widget">
                <h4 className="sbros-footer-title">Get In Touch</h4>

                <div className="sbros-contact-list">
                  {/* INDIAN ADDRESS (click -> Google Maps) */}
                  <a
                    href="https://www.google.com/maps/place/SBros+Tech+Pvt+Ltd/@8.2056778,77.3217726,17z/data=!4m12!1m5!3m4!2zOMKwMTInMjAuNCJOIDc3wrAxOScxOC40IkU!8m2!3d8.2056778!4d77.3217726!3m5!1s0x3b04fbaac0db9d55:0xdef8ffd0b62a1f73!8m2!3d8.2056778!4d77.3243475!16s%2Fg%2F11sdxg3g_2?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open SBros Tech Indian office location in Google Maps"
                    className="sbros-contact-item"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      cursor: "pointer",
                    }}
                  >
                    <div className="sbros-contact-icon">
                      <i className="fas fa-location-dot"></i>
                    </div>

                    <div className="sbros-contact-content">
                      <span>India Office</span>
                      <p>
                        No. 15/25, Madavilagam,
                        Kandanvilai Post,
                        Kanniyakumari District,
                        PIN-629810.
                      </p>
                    </div>
                  </a>

                  {/* SINGAPORE ADDRESS (click -> Google Maps) */}
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=SBros+Tech+Singapore+27+Woodlands+Industrial+Park+E1+Singapore"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open SBros Tech Singapore office location in Google Maps"
                    className="sbros-contact-item"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      cursor: "pointer",
                    }}
                  >
                    <div className="sbros-contact-icon">
                      <i className="fas fa-location-dot"></i>
                    </div>

                    <div className="sbros-contact-content">
                      <span>Singapore Office</span>
                      <p>
                        27 Woodlands Industrial Park E1
                        #03-10, Singapore 757718
                      </p>
                    </div>
                  </a>

                  {/* PHONE */}
                  <div className="sbros-contact-item">
                    <div className="sbros-contact-icon">
                      {/* Only this icon is flipped (turned to the other side) */}
                      <i
                        className="fas fa-phone"
                        style={{ transform: "scaleX(-1)" }}
                      ></i>
                    </div>

                    <div className="sbros-contact-content">
                      <span>Call Us</span>
                      <a href="tel:+917811009192">
                        +91 7811009192
                      </a>
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div className="sbros-contact-item">
                    <div className="sbros-contact-icon">
                      <i className="fas fa-envelope"></i>
                    </div>

                    <div className="sbros-contact-content">
                      <span>Email Us</span>
                      <a href="mailto:info@sbrostech.com">
                        info@sbrostech.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="sbros-footer-bottom">
        <div className="container">
          <div className="sbros-footer-bottom-inner">
            <p>
              © {new Date().getFullYear()}{" "}
              <Link
                href="/"
                aria-label="Go to SBros Tech home page"
                style={{
                  color: "inherit",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                <strong>SBros Tech Pvt Ltd.</strong>
              </Link>{" "}
              All Rights Reserved.
            </p>

            <div className="sbros-footer-bottom-links">
              <Link href="/terms-conditions">
                Terms &amp; Conditions
              </Link>

              <span>|</span>

              <Link href="/privacy-policy">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;