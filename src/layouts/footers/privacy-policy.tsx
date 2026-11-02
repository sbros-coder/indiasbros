import React from "react";

const PrivacyPolicy = () => {
  return (
    <>
      {/* HEADING SECTION */}
      <div className="sbros-policy-heading pt-100">
        <div className="container">
          <div className="sbros-policy-heading__wrap">
            <span className="sbros-policy-heading__label">PRIVACY POLICY</span>
            <h2 className="sbros-policy-heading__title">
              Your Privacy Matters <br />
              <span>To Us</span>
            </h2>
            <p className="sbros-policy-heading__desc">
              Learn how SBros Tech collects, uses, and protects your personal
              information when you visit our website and enroll in our courses.
            </p>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="sbros-policy-area pt-60 pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-11">
              <div className="sbros-policy-content">
                <p className="sbros-policy-meta">
                  <strong>Effective Date:</strong> January 1, 2025
                  <br />
                  <strong>Last Updated:</strong> January 1, 2025
                </p>

                <p>
                  At SBros Tech Pvt Ltd, we are committed to protecting your
                  privacy. This Privacy Policy explains how we collect, use,
                  disclose, and safeguard your information when you visit our
                  website and enroll in our courses.
                </p>

                {/* 1 */}
                <h2>1. Information We Collect</h2>

                <h3>1.1 Personal Information</h3>
                <p>
                  We collect information that you provide directly to us,
                  including:
                </p>
                <ul>
                  <li>Full Name</li>
                  <li>Email Address</li>
                  <li>Phone Number</li>
                  <li>Billing Address</li>
                  <li>Payment Information (processed securely via Razorpay)</li>
                  <li>Educational Background (if provided)</li>
                </ul>

                <h3>1.2 Automatically Collected Information</h3>
                <p>When you visit our website, we may automatically collect:</p>
                <ul>
                  <li>IP Address</li>
                  <li>Browser Type and Version</li>
                  <li>Device Information</li>
                  <li>Pages Visited and Time Spent</li>
                  <li>Cookies and Similar Technologies</li>
                </ul>

                {/* 2 */}
                <h2>2. How We Use Your Information</h2>
                <p>
                  We use the collected information for the following purposes:
                </p>
                <ul>
                  <li>
                    <strong>Course Enrollment:</strong> To process your course
                    registrations and payments
                  </li>
                  <li>
                    <strong>Communication:</strong> To send course materials,
                    updates, and support
                  </li>
                  <li>
                    <strong>Customer Service:</strong> To respond to your
                    inquiries and provide assistance
                  </li>
                  <li>
                    <strong>Improvement:</strong> To analyze usage and improve
                    our services
                  </li>
                  <li>
                    <strong>Marketing:</strong> To send promotional offers (with
                    your consent)
                  </li>
                  <li>
                    <strong>Legal Compliance:</strong> To comply with
                    applicable laws and regulations
                  </li>
                </ul>

                {/* 3 */}
                <h2>3. Payment Information</h2>
                <p>
                  All payment transactions are processed through Razorpay, a
                  PCI-DSS compliant payment gateway. We do not store your
                  credit card or banking details on our servers. Payment
                  information is encrypted and securely handled by Razorpay.
                </p>

                {/* 4 */}
                <h2>4. How We Share Your Information</h2>
                <p>
                  We do not sell, trade, or rent your personal information to
                  third parties. We may share information with:
                </p>
                <ul>
                  <li>
                    <strong>Service Providers:</strong> Razorpay (payment
                    processing), email service providers
                  </li>
                  <li>
                    <strong>Legal Authorities:</strong> When required by law or
                    to protect our rights
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> In case of merger,
                    acquisition, or sale of assets
                  </li>
                </ul>

                {/* 5 */}
                <h2>5. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational
                  measures to protect your personal information, including:
                </p>
                <ul>
                  <li>SSL/TLS encryption for data transmission</li>
                  <li>Secure servers and firewalls</li>
                  <li>Regular security audits</li>
                  <li>Access controls and authentication</li>
                </ul>
                <p>
                  However, no method of transmission over the internet is 100%
                  secure, and we cannot guarantee absolute security.
                </p>

                {/* 6 */}
                <h2>6. Cookies and Tracking Technologies</h2>
                <p>
                  We use cookies to enhance your browsing experience. Cookies
                  help us:
                </p>
                <ul>
                  <li>Remember your preferences</li>
                  <li>Understand website usage patterns</li>
                  <li>Provide personalized content</li>
                </ul>
                <p>
                  You can control cookies through your browser settings.
                  Disabling cookies may affect website functionality.
                </p>

                {/* 7 */}
                <h2>7. Your Rights</h2>
                <p>
                  You have the following rights regarding your personal
                  information:
                </p>
                <ul>
                  <li>
                    <strong>Access:</strong> Request a copy of your data
                  </li>
                  <li>
                    <strong>Correction:</strong> Update or correct inaccurate
                    information
                  </li>
                  <li>
                    <strong>Deletion:</strong> Request deletion of your data
                    (subject to legal obligations)
                  </li>
                  <li>
                    <strong>Opt-Out:</strong> Unsubscribe from marketing
                    communications
                  </li>
                  <li>
                    <strong>Data Portability:</strong> Request data in a
                    portable format
                  </li>
                </ul>
                <p>
                  To exercise these rights, contact us at:{" "}
                  <a href="mailto:privacy@sbrostech.com">
                    privacy@sbrostech.com
                  </a>
                </p>

                {/* 8 */}
                <h2>8. Children&apos;s Privacy</h2>
                <p>
                  Our services are not intended for individuals under 18 years
                  of age. We do not knowingly collect personal information from
                  children. If you believe a child has provided us with
                  personal information, please contact us.
                </p>

                {/* 9 */}
                <h2>9. Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party websites. We are
                  not responsible for the privacy practices of these external
                  sites. We encourage you to review their privacy policies.
                </p>

                {/* 10 */}
                <h2>10. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. Changes
                  will be posted on this page with an updated &quot;Last
                  Updated&quot; date. Continued use of our services after
                  changes constitutes acceptance of the updated policy.
                </p>

                {/* CONTACT */}
                <h2>Contact Us</h2>
                <p>
                  If you have any questions or concerns, please contact us:
                </p>

                <div className="sbros-policy-contact">
                  <h4>SBros Tech Pvt Ltd</h4>
                  <p>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:info@sbrostech.com">info@sbrostech.com</a>
                  </p>
                  <p>
                    <strong>Privacy:</strong>{" "}
                    <a href="mailto:info@sbrostech.com">info@sbrostech.com</a>
                  </p>
                  <p>
                    <strong>Refunds:</strong>{" "}
                    <a href="mailto:info@sbrostech.com">info@sbrostech.com</a>
                  </p>
                  <p>
                    <strong>Phone:</strong>{" "}
                    <a href="tel:+918438500543">+91 84385 00543</a>
                  </p>
                  <p>
                    <strong>Address:</strong> No. 15/25, Madavilagam,
                    Kandanvilai Post, Kanniyakumari District, PIN-629810.
                  </p>
                </div>

                <p className="sbros-policy-copy">
                  © 2026 SBros Tech Pvt Ltd. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;