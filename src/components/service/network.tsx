import React from "react";
import Image from "next/image";
import Link from "next/link";
// import "./cctv-security.scss";

const securityServices = [
  {
    number: "01",
    title: "CCTV Camera Installation",
    description:
      "Professional camera installation for homes, offices, shops, and commercial properties, planned around your security requirements.",
    icon: "camera",
  },
  {
    number: "02",
    title: "Remote Video Monitoring",
    description:
      "Monitor your property remotely using compatible security cameras and mobile viewing applications.",
    icon: "monitor",
  },
  {
    number: "03",
    title: "Smart Security Systems",
    description:
      "Explore integrated surveillance solutions with recording, motion detection, and compatible smart security features.",
    icon: "shield",
  },
  {
    number: "04",
    title: "Maintenance & Support",
    description:
      "Keep your security system working reliably with installation assistance, troubleshooting, and maintenance support.",
    icon: "settings",
  },
];

/* NETWORK & SECURITY SYSTEM - range of solutions */
const networkSolutions = [
  {
    title: "CCTV Installation and Maintenance",
    description:
      "Professional camera setup with regular servicing to keep your surveillance running reliably.",
    icon: "camera",
  },
  {
    title: "Home Automation",
    description:
      "Control lighting, appliances, and devices from your phone for comfort and convenience.",
    icon: "home",
  },
  {
    title: "Gate Automation",
    description:
      "Automatic gate systems that provide safe, convenient, and controlled entry to your property.",
    icon: "gate",
  },
  {
    title: "Access Control System",
    description:
      "Restrict entry to authorised people using card, biometric, or code-based access.",
    icon: "lock",
  },
  {
    title: "Intercom",
    description:
      "Clear and reliable communication across your home, office, or premises.",
    icon: "intercom",
  },
  {
    title: "Video Door Phone",
    description:
      "See and speak to visitors before granting entry for added safety and peace of mind.",
    icon: "video",
  },
];

/* OUR SERVICES - detailed solution groups */
const solutionGroups = [
  {
    title: "Network Design and Implementation",
    description:
      "We design and implement efficient and scalable network solutions tailored to your business needs. Our network design and implementation services include:",
    icon: "network",
    items: [
      "Network Architecture Design",
      "LAN/WAN Setup",
      "Wireless Network Solutions",
      "Network Configuration",
      "Network Upgrades",
    ],
  },
  {
    title: "Cybersecurity Solutions",
    description:
      "Protect your business from cyber threats with our advanced cybersecurity solutions. Our cybersecurity services include:",
    icon: "shield",
    items: [
      "Vulnerability Assessments",
      "Firewall Installation and Management",
      "Intrusion Detection and Prevention",
      "Endpoint Security",
      "Security Audits and Compliance",
    ],
  },
  {
    title: "IT Infrastructure Management",
    description:
      "Ensure the smooth operation of your IT infrastructure with our management services. Our IT infrastructure management services include:",
    icon: "server",
    items: [
      "Network Monitoring",
      "Performance Optimization",
      "Troubleshooting and Support",
      "Backup and Disaster Recovery",
      "IT Asset Management",
    ],
  },
  {
    title: "Cloud Networking Solutions",
    description:
      "Leverage the power of the cloud for flexible and scalable networking solutions. Our cloud networking services include:",
    icon: "cloud",
    items: [
      "Cloud Network Design",
      "Cloud Security",
      "Virtual Private Networks (VPNs)",
      "Hybrid Cloud Solutions",
      "Cloud Migration Services",
    ],
  },
  {
    title: "Security System Installation",
    description:
      "Enhance the physical security of your premises with our advanced security systems. Our security system installation services include:",
    icon: "camera",
    items: [
      "CCTV Installation & Maintenance",
      "Access Control Systems",
      "Alarm Systems",
      "Intercom and Paging Systems",
      "Security System Integration",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Security Assessment",
    description:
      "We understand your property, identify coverage requirements, and discuss your security priorities.",
  },
  {
    number: "02",
    title: "System Planning",
    description:
      "We recommend suitable camera locations, equipment, and recording options for your needs.",
  },
  {
    number: "03",
    title: "Installation",
    description:
      "Our installation process focuses on proper positioning, neat cabling, and reliable configuration.",
  },
  {
    number: "04",
    title: "Testing & Guidance",
    description:
      "We check the installed system and guide you through its essential monitoring features.",
  },
];

function ServiceIcon({ type }: { type: string }) {
  const common = {
    width: 30,
    height: 30,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (type) {
    case "camera":
      return (
        <svg {...common}>
          <path d="M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v9H3V9a1 1 0 0 1 1-1Z" />
          <circle cx="12" cy="12.5" r="3.5" />
        </svg>
      );

    case "monitor":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="13" rx="2" />
          <path d="M8 21h8M12 17v4M7 8h10" />
        </svg>
      );

    case "shield":
      return (
        <svg {...common}>
          <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );

    case "home":
      return (
        <svg {...common}>
          <path d="M3 11 12 3l9 8" />
          <path d="M5 10v10h14V10" />
          <path d="M10 20v-6h4v6" />
        </svg>
      );

    case "gate":
      return (
        <svg {...common}>
          <path d="M3 5v15M21 5v15" />
          <path d="M3 9h18M3 15h18" />
          <path d="M9 9v6M15 9v6" />
        </svg>
      );

    case "lock":
      return (
        <svg {...common}>
          <rect x="5" y="11" width="14" height="10" rx="2" />
          <path d="M8 11V8a4 4 0 0 1 8 0v3" />
          <path d="M12 15v2" />
        </svg>
      );

    case "intercom":
      return (
        <svg {...common}>
          <rect x="6" y="3" width="12" height="18" rx="2" />
          <circle cx="12" cy="9" r="2" />
          <path d="M10 15h4M10 18h4" />
        </svg>
      );

    case "video":
      return (
        <svg {...common}>
          <rect x="2" y="6" width="14" height="12" rx="2" />
          <path d="m16 10 6-3v10l-6-3" />
        </svg>
      );

    case "network":
      return (
        <svg {...common}>
          <circle cx="12" cy="5" r="2" />
          <circle cx="5" cy="19" r="2" />
          <circle cx="19" cy="19" r="2" />
          <path d="M12 7v5M12 12 6 17.5M12 12l6 5.5" />
        </svg>
      );

    case "server":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="6" rx="1.5" />
          <rect x="3" y="14" width="18" height="6" rx="1.5" />
          <path d="M7 7h.01M7 17h.01" />
        </svg>
      );

    case "cloud":
      return (
        <svg {...common}>
          <path d="M7 18a4 4 0 0 1-.5-7.97A5.5 5.5 0 0 1 17 9a4.5 4.5 0 0 1 .5 9H7Z" />
        </svg>
      );

    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3" />
          <path d="m19.4 15 .1.1 1.4 1.1-1.5 2.6-1.7-.6a8 8 0 0 1-1.8 1l-.3 1.8h-3l-.3-1.8a8 8 0 0 1-1.8-1l-1.7.6-1.5-2.6L7 15a8 8 0 0 1 0-2l-1.7-1.1 1.5-2.6 1.7.6a8 8 0 0 1 1.8-1l.3-1.8h3l.3 1.8a8 8 0 0 1 1.8 1l1.7-.6 1.5 2.6-1.5 1.1a8 8 0 0 1 0 2Z" />
        </svg>
      );
  }
}

export default function CctvSecurity() {
  return (
    <section className="sbros-security">
      {/* INTRODUCTION */}
      <div className="sbros-security__intro">
        <div className="sbros-security__container">
          <div className="sbros-security__intro-grid">
            <div className="sbros-security__content">
              <span className="sbros-security__eyebrow">
                <span />
                WHAT WE DO
              </span>

              <h2>
                Smarter Security.
                <br />
                <span>Greater Peace of Mind.</span>
              </h2>

              <p className="sbros-security__lead">
                Protect what matters with reliable CCTV and smart security
                solutions from SBros Tech.
              </p>

              <p className="sbros-security__description">
                We provide security camera installation and surveillance
                solutions for homes, offices, shops, and businesses. From
                selecting suitable camera locations to configuring remote
                viewing, we help you build a security system around your
                property and everyday needs.
              </p>

              <div className="sbros-security__highlights">
                <div className="sbros-security__highlight">
                  <span className="sbros-security__check">✓</span>
                  <div>
                    <h3>Professional Installation</h3>
                    <p>Planned camera placement and neat installation.</p>
                  </div>
                </div>

                <div className="sbros-security__highlight">
                  <span className="sbros-security__check">✓</span>
                  <div>
                    <h3>Remote Monitoring Options</h3>
                    <p>View compatible cameras from supported devices.</p>
                  </div>
                </div>

                <div className="sbros-security__highlight">
                  <span className="sbros-security__check">✓</span>
                  <div>
                    <h3>Solutions for Every Property</h3>
                    <p>Security options tailored to your requirements.</p>
                  </div>
                </div>
              </div>

              <Link
                href="/contact-us"
                className="sbros-security__button"
              >
                Secure Your Property
                <span aria-hidden="true">↗</span>
              </Link>
            </div>

            {/* MAIN IMAGE */}
            <div className="sbros-security__visual">
              <div className="sbros-security__image-frame">
                <div className="sbros-security__image-label">
                  <span />
                  CCTV & SECURITY SOLUTIONS
                </div>

                <Image
                  src="/assets/images/cam.jpeg"
                  alt="CCTV camera and security surveillance solutions by SBros Tech"
                  width={720}
                  height={600}
                  priority
                  sizes="(max-width: 991px) 100vw, 50vw"
                  className="sbros-security__image"
                />

                <div className="sbros-security__image-caption">
                  <span className="sbros-security__caption-icon">
                    <ServiceIcon type="shield" />
                  </span>

                  <div>
                    <strong>Security You Can Plan For</strong>
                    <p>Smart monitoring. Reliable protection.</p>
                  </div>
                </div>
              </div>

              <span className="sbros-security__decor sbros-security__decor--one" />
              <span className="sbros-security__decor sbros-security__decor--two" />
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <div className="sbros-security__services">
        <div className="sbros-security__container">
          <div className="sbros-security__section-heading">
            <span className="sbros-security__eyebrow">
              <span />
              OUR SECURITY SERVICES
              <span />
            </span>

            <h2>
              Complete Security Solutions
              <br />
              <span>Designed Around You.</span>
            </h2>

            <p>
              From camera installation to ongoing support, we help you choose
              and manage security solutions that suit your property.
            </p>
          </div>

          <div className="sbros-security__service-grid">
            {securityServices.map((service) => (
              <article
                className="sbros-security__service-card"
                key={service.number}
              >
                <div className="sbros-security__card-top">
                  <span className="sbros-security__card-icon">
                    <ServiceIcon type={service.icon} />
                  </span>

                  <span className="sbros-security__number">
                    {service.number}
                  </span>
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                {/* <Link
                  href="/contact"
                  className="sbros-security__card-link"
                  aria-label={`Enquire about ${service.title}`}
                >
                  Explore Service <span aria-hidden="true">↗</span>
                </Link> */}
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* NETWORK & SECURITY SYSTEM */}
      <div className="sbros-security__network">
        <div className="sbros-security__container">
          <div className="sbros-security__section-heading">
            <span className="sbros-security__eyebrow">
              <span />
              NETWORK &amp; SECURITY SYSTEM
              <span />
            </span>

            <h2>
              Integrated Surveillance,
              <br />
              <span>Security &amp; Safety Solutions.</span>
            </h2>

            <p>
              SBros Tech provides integrated surveillance, security, and
              safety solutions. Our experts design, implement, and maintain
              systems tailored to your needs. We offer the following
              solutions:
            </p>
          </div>

          <div className="sbros-security__network-grid">
            {networkSolutions.map((item) => (
              <article
                className="sbros-security__network-item"
                key={item.title}
              >
                <span className="sbros-security__network-icon">
                  <ServiceIcon type={item.icon} />
                </span>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* NETWORKING & SECURITY SOLUTIONS */}
      <div className="sbros-security__solutions">
        <div className="sbros-security__container">
          <div className="sbros-security__section-heading">
            <span className="sbros-security__eyebrow">
              <span />
              OUR SERVICES
              <span />
            </span>

            <h2>
              Networking &amp; Security
              <br />
              <span>For Your Business.</span>
            </h2>

            <p>
              In an increasingly connected world, robust CCTV installation
              and security systems are essential to protect your data and
              ensure seamless communication. At SBros Tech, we offer
              comprehensive networking and security solutions to safeguard
              your infrastructure and enhance your business operations.
            </p>
          </div>

          <div className="sbros-security__solution-grid">
            {solutionGroups.map((group) => (
              <article
                className="sbros-security__solution-card"
                key={group.title}
              >
                <div className="sbros-security__solution-top">
                  <span className="sbros-security__solution-icon">
                    <ServiceIcon type={group.icon} />
                  </span>

                  <h3>{group.title}</h3>
                </div>

                <p>{group.description}</p>

                <ul className="sbros-security__solution-list">
                  {group.items.map((item) => (
                    <li key={item}>
                      <span aria-hidden="true">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* INSTALLATION PROCESS */}
      <div className="sbros-security__process">
        <div className="sbros-security__container">
          <div className="sbros-security__section-heading">
            <span className="sbros-security__eyebrow">
              <span />
              HOW WE WORK
              <span />
            </span>

            <h2>
              A Simple Path to
              <br />
              <span>Better Security.</span>
            </h2>

            <p>
              Our step-by-step approach helps make your security installation
              clear, organised, and suited to your needs.
            </p>
          </div>

          <div className="sbros-security__process-grid">
            {processSteps.map((step) => (
              <article
                className="sbros-security__process-item"
                key={step.number}
              >
                <span className="sbros-security__process-number">
                  {step.number}
                </span>

                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="sbros-security__bottom">
        <div className="sbros-security__container">
          <div className="sbros-security__bottom-inner">
            <div>
              <span className="sbros-security__bottom-label">
                LET'S TALK SECURITY
              </span>

              <h2>Ready to Improve Your Property Security?</h2>

              <p>
                Tell us about your home or business. We’ll help you explore
                suitable CCTV and security system options.
              </p>
            </div>

            <Link
              href="/contact-us"
              className="sbros-security__button sbros-security__button--light"
            >
              Contact SBros Tech
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}