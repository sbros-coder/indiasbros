import React from "react";

const Contact = () => {
  return (
    <section className="sbros-contact-page">
      <div className="container">
        {/* =====================================================
            TITLE
        ===================================================== */}

        <h2 className="sbros-contact-main-title">Our Locations</h2>

        {/* =====================================================
            MAP SECTION (SIDE BY SIDE)
        ===================================================== */}

        <div className="row">
          {/* INDIA MAP (light blue + dark blue box) */}
          <div className="col-lg-6 col-md-12">
            <div className="sbros-map-box sbros-map-box-blue">
              <div className="sbros-contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.970927714543!2d77.32177257358536!3d8.205677791826407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04fbaac0db9d55%3A0xdef8ffd0b62a1f73!2sSBros%20Tech%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1789721698692!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="SBros Tech India Location"
                />
              </div>
            </div>
          </div>

          {/* SINGAPORE MAP (red + blue box) */}
          <div className="col-lg-6 col-md-12">
            <div className="sbros-map-box sbros-map-box-red">
              <div className="sbros-contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.5321902439787!2d103.7980744919986!3d1.454839849282296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da132461eced91%3A0xe00c5aebd32c11d8!2sSBros%20Tech(S)%20Pte%20Ltd!5e0!3m2!1sen!2sin!4v1793866530347!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="SBros Tech Singapore Location"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
