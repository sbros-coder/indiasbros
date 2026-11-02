
"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
// import "./BlogDetails.scss";

type BlogSection = {
  heading: string;
  content: string;
  points: string[];
};

type BlogTopic = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  intro: string;
  sections: BlogSection[];
  conclusion: string;
  tags: string[];
};

const blogTopics: BlogTopic[] = [
  {
    slug: "website-development",
    title: "Modern Web Development Trends Every Business Should Know",
    category: "WEB DEVELOPMENT",
    date: "October 18, 2026",
    readTime: "6 min read",
    image: "/assets/images/website-hosting.jpg",
    intro:
      "Modern website development combines responsive design, speed, accessibility and secure technology. A professional website helps businesses present their services, connect with customers and create a strong digital presence.",
    sections: [
      {
        heading: "1. Responsive and User-Friendly Websites",
        content:
          "Visitors use mobiles, tablets and desktops to access websites. A responsive layout keeps content readable and navigation simple across different screen sizes.",
        points: [
          "Use mobile-first responsive layouts.",
          "Keep navigation and calls to action easy to find.",
          "Test pages across common screen sizes.",
        ],
      },
      {
        heading: "2. Website Speed and Performance",
        content:
          "Fast pages improve the browsing experience and help visitors find information without unnecessary waiting. Optimized images, caching and efficient code can reduce loading time.",
        points: [
          "Compress and resize images appropriately.",
          "Reduce unnecessary scripts and large dependencies.",
          "Monitor loading speed and Core Web Vitals.",
        ],
      },
      {
        heading: "3. Modern Frameworks and Integrations",
        content:
          "Frameworks such as React and Next.js can support structured, maintainable websites. APIs also allow websites to connect with forms, customer systems and other business tools.",
        points: [
          "Choose technology based on project requirements.",
          "Integrate forms and APIs securely.",
          "Keep dependencies maintained and tested.",
        ],
      },
    ],
    conclusion:
      "A successful business website should be attractive, fast, accessible and easy to maintain. Focus on real customer needs and measurable business goals when planning improvements.",
    tags: ["Web Development", "Next.js", "Responsive Design", "Performance"],
  },
  {
    slug: "artificial-intelligence",
    title: "How AI Is Transforming the Future of Business",
    category: "ARTIFICIAL INTELLIGENCE",
    date: "October 15, 2026",
    readTime: "8 min read",
    image: "/assets/images/artificial.jpg",
    intro:
      "Artificial intelligence is helping businesses analyze information, automate repetitive tasks and improve customer experiences. The best results come from using AI to solve clearly defined problems while keeping people involved in important decisions.",
    sections: [
      {
        heading: "1. Automating Repetitive Tasks",
        content:
          "AI-powered tools can assist with document processing, routine enquiries, content drafts and data classification. Automation gives employees more time to focus on work that requires judgment and creativity.",
        points: [
          "Identify repetitive tasks that consume staff time.",
          "Review automated outputs before important use.",
          "Measure time saved and error rates.",
        ],
      },
      {
        heading: "2. Improving Customer Experience",
        content:
          "Chat assistants and recommendation systems can help customers find relevant information and navigate services. Clear escalation to a human team remains important when a question is complex.",
        points: [
          "Use chat support for suitable common questions.",
          "Keep responses accurate and easy to understand.",
          "Provide a route to human assistance.",
        ],
      },
      {
        heading: "3. Data Analysis and Responsible AI",
        content:
          "AI can help teams identify patterns in business data, but results depend on data quality and appropriate review. Privacy, security and transparency should be considered before adopting a tool.",
        points: [
          "Use reliable data and check generated results.",
          "Protect confidential and personal information.",
          "Review outputs for errors and bias.",
        ],
      },
    ],
    conclusion:
      "AI can support productivity and innovation when it is introduced with a clear purpose, responsible data practices and human oversight. Start with a manageable use case and evaluate the results.",
    tags: ["Artificial Intelligence", "Automation", "Business", "Data"],
  },
  {
    slug: "iot-program",
    title: "How IoT Is Connecting Devices and Transforming Businesses",
    category: "IOT PROGRAM",
    date: "October 5, 2026",
    readTime: "4 min read",
    image: "/assets/images/business.jpg",
    intro:
      "The Internet of Things connects sensors, devices and software so they can collect and exchange information. IoT solutions can help businesses monitor equipment, automate tasks and understand conditions in real time.",
    sections: [
      {
        heading: "1. Sensors and Smart Devices",
        content:
          "Sensors measure conditions such as temperature, movement, humidity and distance. Microcontrollers process readings and can trigger actions according to the needs of a project.",
        points: [
          "Select sensors for the required measurement.",
          "Choose suitable microcontrollers and power supplies.",
          "Test hardware in its intended environment.",
        ],
      },
      {
        heading: "2. Connectivity and Real-Time Data",
        content:
          "Devices can send readings through Wi-Fi, Bluetooth or other appropriate networks. A connected platform can display the information and notify users when important conditions occur.",
        points: [
          "Choose connectivity based on range and power needs.",
          "Plan for connection loss and recovery.",
          "Display readings in a clear dashboard.",
        ],
      },
      {
        heading: "3. Automation and IoT Security",
        content:
          "IoT systems can automate routine actions, but connected devices must be protected. Secure credentials, software updates and appropriate access controls reduce avoidable risks.",
        points: [
          "Use authentication and secure communication.",
          "Keep device software updated.",
          "Test alerts and provide manual overrides where needed.",
        ],
      },
    ],
    conclusion:
      "A practical IoT project starts with a specific problem and a small prototype. Reliable hardware, secure connectivity and useful data displays help turn an idea into a maintainable solution.",
    tags: ["IoT", "Sensors", "Embedded Systems", "Automation"],
  },
  {
    slug: "cybersecurity",
    title: "Essential Cybersecurity Practices for Modern Businesses",
    category: "CYBERSECURITY",
    date: "October 10, 2026",
    readTime: "7 min read",
    image: "/assets/images/abstract.jpg",
    intro:
      "Businesses rely on digital systems to manage customer information, communication and everyday operations. Strong cybersecurity practices help reduce the risk of unauthorized access, data loss and service disruption.",
    sections: [
      {
        heading: "1. Passwords and Multi-Factor Authentication",
        content:
          "Weak or reused passwords can expose business accounts. Unique passwords and multi-factor authentication add important protection, especially for email, administration and financial systems.",
        points: [
          "Use unique passwords for important accounts.",
          "Enable multi-factor authentication where available.",
          "Remove access that employees no longer require.",
        ],
      },
      {
        heading: "2. Software Updates and Data Backups",
        content:
          "Outdated software may contain known security weaknesses. Regular updates and tested backups help businesses respond to technical failures, accidental deletion and some cyber incidents.",
        points: [
          "Install security updates promptly.",
          "Keep backups protected and separated from primary systems.",
          "Test recovery procedures periodically.",
        ],
      },
      {
        heading: "3. Employee Awareness and Network Security",
        content:
          "Employees can help prevent incidents by recognizing suspicious messages and reporting unusual activity. Secure Wi-Fi, restricted permissions and monitoring also contribute to safer operations.",
        points: [
          "Train staff to recognize phishing attempts.",
          "Restrict access to sensitive systems.",
          "Maintain an incident response plan.",
        ],
      },
    ],
    conclusion:
      "Cybersecurity is an ongoing process rather than a one-time installation. Combine staff awareness, secure configuration, updates, backups and regular reviews to improve business resilience.",
    tags: ["Cybersecurity", "Data Protection", "Network Security", "Backups"],
  },
  {
    slug: "software-development",
    title: "Choosing the Right Software for Your Business",
    category: "SOFTWARE DEVELOPMENT",
    date: "October 8, 2026",
    readTime: "6 min read",
    image: "/assets/images/side.jpg",
    intro:
      "The right software can reduce manual work, organize business information and help teams make better decisions. Selecting a solution starts with understanding existing workflows, user needs and long-term goals.",
    sections: [
      {
        heading: "1. Identify Business Requirements",
        content:
          "Before selecting software, identify the problems it should solve. Clear requirements help businesses compare products and avoid paying for features that do not support their daily work.",
        points: [
          "Map current workflows and common challenges.",
          "Identify essential features and user roles.",
          "Set a realistic budget and project scope.",
        ],
      },
      {
        heading: "2. Custom Software and Ready-Made Tools",
        content:
          "Ready-made software can be suitable for common tasks, while custom development may help when workflows or integrations are specific. Compare implementation effort, flexibility and ongoing maintenance.",
        points: [
          "Compare existing products before building from scratch.",
          "Consider integrations and future scalability.",
          "Review support, licensing and maintenance costs.",
        ],
      },
      {
        heading: "3. Testing, Security and Improvement",
        content:
          "Software should be tested with real user workflows before launch. Clear permissions, reliable backups, user training and regular maintenance help a solution remain useful over time.",
        points: [
          "Test critical features before release.",
          "Protect sensitive data with suitable access controls.",
          "Collect user feedback and improve gradually.",
        ],
      },
    ],
    conclusion:
      "Good software selection connects technology with real business needs. Define requirements, compare the available options and plan for security, training and ongoing support.",
    tags: ["Software", "Custom Applications", "APIs", "Business Solutions"],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing Strategies That Drive Business Growth",
    category: "DIGITAL MARKETING",
    date: "October 12, 2026",
    readTime: "5 min read",
    image: "/assets/images/futures.jpeg",
    intro:
      "Digital marketing helps businesses reach potential customers through search engines, social media, useful content and online advertising. A focused strategy connects the right audience with the right message and measures meaningful results.",
    sections: [
      {
        heading: "1. Search Engine Optimization",
        content:
          "SEO improves how easily people discover relevant pages through search engines. Useful content, a technically sound website and clear page structure help visitors find the information they need.",
        points: [
          "Research topics and questions your customers search for.",
          "Improve page titles, headings and internal links.",
          "Publish useful content and keep business information accurate.",
        ],
      },
      {
        heading: "2. Social Media and Content Marketing",
        content:
          "Social posts, short videos, guides and customer stories can build awareness and trust. Content works best when it addresses audience questions rather than repeating promotional messages.",
        points: [
          "Choose platforms that fit your audience.",
          "Plan a consistent and realistic content schedule.",
          "Use clear calls to action in relevant posts.",
        ],
      },
      {
        heading: "3. Paid Campaigns and Performance Tracking",
        content:
          "Paid search and social campaigns can reach specific audiences, but results should be evaluated against business objectives. Tracking enquiries and conversions helps teams refine their campaigns.",
        points: [
          "Set campaign goals before spending.",
          "Track qualified leads and conversion rates.",
          "Test messages and landing pages responsibly.",
        ],
      },
    ],
    conclusion:
      "Effective digital marketing combines helpful content, audience understanding and consistent measurement. Improve the strategy using real results rather than relying only on likes or impressions.",
    tags: ["SEO", "Social Media", "Content Marketing", "Advertising"],
  },
  {
    slug: "networking-cctv-security",
    title: "Smart Networking and CCTV Solutions for Better Security",
    category: "NETWORKING & CCTV SECURITY",
    date: "October 12, 2026",
    readTime: "5 min read",
    image: "/assets/images/portrait.jpg",
    intro:
      "Reliable networking and CCTV systems help organizations connect devices, monitor important areas and manage security. Careful planning ensures that network capacity, camera placement and secure access work together.",
    sections: [
      {
        heading: "1. Reliable Network Installation",
        content:
          "A well-designed network supports business devices, internet access and connected security equipment. Appropriate cabling, Wi-Fi coverage and equipment capacity help reduce interruptions.",
        points: [
          "Plan coverage and capacity before installation.",
          "Use suitable cabling, switches and access points.",
          "Document network connections and equipment.",
        ],
      },
      {
        heading: "2. CCTV Camera Selection and Placement",
        content:
          "Camera selection depends on the area being monitored, lighting conditions, viewing distance and recording needs. Proper placement helps capture useful footage while respecting privacy.",
        points: [
          "Choose suitable resolution and field of view.",
          "Check night vision and weather protection where needed.",
          "Plan recording capacity and retention settings.",
        ],
      },
      {
        heading: "3. Secure Monitoring and Maintenance",
        content:
          "Network cameras and recording systems need secure configuration. Regular checks help ensure devices remain available and remote access is limited to authorized users.",
        points: [
          "Replace default passwords and update firmware.",
          "Restrict access to recordings and monitoring tools.",
          "Test storage, alerts and backup power regularly.",
        ],
      },
    ],
    conclusion:
      "A dependable networking and CCTV setup combines good installation, suitable camera coverage, secure access and routine maintenance. Plan around the actual needs of the site.",
    tags: ["CCTV", "Networking", "IP Cameras", "Security"],
  },
  {
    slug: "graphic-design",
    title: "The Power of Graphic Design in Building a Strong Brand",
    category: "GRAPHIC DESIGN",
    date: "October 12, 2026",
    readTime: "5 min read",
    image: "/assets/images/editing.jpg",
    intro:
      "Graphic design helps a business communicate its identity through logos, colours, typography, images and layouts. Consistent visual communication makes a brand easier to recognize across websites, social media and printed materials.",
    sections: [
      {
        heading: "1. Brand Identity and Consistency",
        content:
          "A clear visual identity creates a consistent impression wherever customers encounter a business. Reusable guidelines help teams apply the same design principles across different channels.",
        points: [
          "Choose a consistent colour palette and typography.",
          "Define appropriate logo usage and spacing.",
          "Keep visual materials aligned with the brand.",
        ],
      },
      {
        heading: "2. Social Media and Marketing Creatives",
        content:
          "Well-designed promotional graphics help communicate an offer or idea quickly. Each design should match the platform, audience and message while remaining readable on smaller screens.",
        points: [
          "Use clear visual hierarchy and concise copy.",
          "Prepare the correct sizes for each platform.",
          "Keep important text readable on mobile devices.",
        ],
      },
      {
        heading: "3. Design Tools and Creative Workflows",
        content:
          "Design tools help creators produce logos, illustrations, layouts and digital content. Templates and organized assets improve consistency, while careful review helps maintain quality.",
        points: [
          "Use suitable tools for each design task.",
          "Check image, font and asset usage rights.",
          "Export files in the correct format and resolution.",
        ],
      },
    ],
    conclusion:
      "Effective graphic design brings clarity and consistency to business communication. A strong visual system helps customers recognize a brand and understand its message.",
    tags: ["Branding", "Creative Design", "Social Media", "Visual Identity"],
  },
  {
    slug: "trading",
    title: "Understanding Trading Basics and Market Trends",
    category: "TRADING",
    date: "October 12, 2026",
    readTime: "5 min read",
    image: "/assets/images/trading1.jpg",
    intro:
      "Trading involves buying and selling financial instruments in markets. Learning the basics requires understanding market prices, order types, research, risk and the fact that losses are possible. No strategy can guarantee a profit.",
    sections: [
      {
        heading: "1. Understanding Markets and Price Movements",
        content:
          "Prices change as buyers and sellers respond to information, expectations and market conditions. Charts can help visualize historical movements, but they cannot reliably predict every future change.",
        points: [
          "Learn basic market terminology and order types.",
          "Understand the difference between price and value.",
          "Avoid treating historical performance as a guarantee.",
        ],
      },
      {
        heading: "2. Research and Trading Plans",
        content:
          "A written plan can define the reasons for a trade, the amount of risk and the conditions for exiting. Research should use credible information and account for fees and uncertainty.",
        points: [
          "Set clear goals before making decisions.",
          "Understand fees, liquidity and volatility.",
          "Consider practicing with a simulator before risking money.",
        ],
      },
      {
        heading: "3. Risk Management and Discipline",
        content:
          "Risk management focuses on limiting potential losses rather than promising returns. Emotional decisions, excessive leverage and investing money that cannot be afforded to lose can create serious financial harm.",
        points: [
          "Never assume profits are guaranteed.",
          "Understand leverage and the possibility of rapid losses.",
          "Avoid risking money needed for essential expenses.",
        ],
      },
    ],
    conclusion:
      "Learning about trading takes time and careful research. Understand the risks, use reliable sources and consider qualified financial guidance before making financial decisions.",
    tags: ["Trading Basics", "Market Research", "Risk Management", "Finance"],
  },
];

function BlogDetailsContent() {
  const searchParams = useSearchParams();
  const requestedTopic = searchParams.get("topic");

  const activeTopic =
    blogTopics.find((topic) => topic.slug === requestedTopic) ??
    blogTopics[0];

  return (
    <main className="sbros-blog-details">
      <div className="sbros-blog-hero">
        <div className="sbros-blog-container">
          <span className="sbros-blog-eyebrow">SBROS TECH INSIGHTS</span>
          <h1>Technology, Ideas &amp; Innovation</h1>
          <p>
            Explore practical insights, emerging trends and technology
            strategies that help businesses build, grow and innovate.
          </p>

          <div className="sbros-blog-breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/blog">Blog</Link>
            <span>/</span>
            <span>{activeTopic.title}</span>
          </div>
        </div>
      </div>

      <div className="sbros-blog-container sbros-blog-layout">
        <aside className="sbros-blog-sidebar">
          <div className="sbros-blog-sidebar-card">
            <span className="sbros-blog-eyebrow">EXPLORE TOPICS</span>
            <h2>Technology Categories</h2>

            <nav className="sbros-blog-topic-nav" aria-label="Blog topics">
              {blogTopics.map((topic, index) => (
                <Link
                  key={topic.slug}
                  href={`/blog-details?topic=${topic.slug}`}
                  className={`sbros-blog-topic-link ${
                    activeTopic.slug === topic.slug ? "is-active" : ""
                  }`}
                  aria-current={
                    activeTopic.slug === topic.slug ? "page" : undefined
                  }
                >
                  <span className="sbros-blog-topic-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{topic.title}</span>
                  <span className="sbros-blog-topic-arrow">↗</span>
                </Link>
              ))}
            </nav>

            <div className="sbros-blog-sidebar-cta">
              <span>HAVE A PROJECT IN MIND?</span>
              <h3>Let&apos;s build something valuable.</h3>
              <Link href="/contact-us" className="sbros-blog-cta-link">
                Contact Our Team <span>→</span>
              </Link>
            </div>
          </div>
        </aside>

        <article className="sbros-blog-article" key={activeTopic.slug}>
          <div className="sbros-blog-article-header">
            <span className="sbros-blog-category">
              {activeTopic.category}
            </span>

            <h2>{activeTopic.title}</h2>

            <div className="sbros-blog-meta">
              <span>{activeTopic.date}</span>
              <span className="sbros-blog-meta-dot" />
              <span>{activeTopic.readTime}</span>
              <span className="sbros-blog-meta-dot" />
              <span>SBros Tech Team</span>
            </div>
          </div>

          {/* Topic image and matching introduction */}
          <div className="sbros-blog-feature">
            <div className="sbros-blog-topic-image">
              <img src={activeTopic.image} alt={activeTopic.title} />
            </div>

            <div className="sbros-blog-feature-content">
              <span className="sbros-blog-eyebrow">ARTICLE OVERVIEW</span>
              <h3>{activeTopic.title}</h3>
              <p>{activeTopic.intro}</p>
            </div>
          </div>

          <div className="sbros-blog-highlight">
            <span className="sbros-blog-highlight-icon">✦</span>
            <div>
              <strong>Key takeaway</strong>
              <p>
                Focus on practical solutions, measurable outcomes, user
                experience and security—not technology trends alone.
              </p>
            </div>
          </div>

          <div className="sbros-blog-sections">
            {activeTopic.sections.map((section, index) => (
              <section className="sbros-blog-section" key={section.heading}>
                <div className="sbros-blog-section-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="sbros-blog-section-content">
                  <h3>{section.heading}</h3>
                  <p>{section.content}</p>

                  <ul>
                    {section.points.map((point) => (
                      <li key={point}>
                        <span className="sbros-blog-check">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            ))}
          </div>

          <div className="sbros-blog-conclusion">
            <span className="sbros-blog-eyebrow">FINAL THOUGHTS</span>
            <h3>Turning Technology into Business Value</h3>
            <p>{activeTopic.conclusion}</p>
          </div>

          <div className="sbros-blog-tags">
            <strong>TOPICS:</strong>
            <div>
              {activeTopic.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          <div className="sbros-blog-post-navigation">
            {blogTopics.map((topic) => (
              <Link
                key={topic.slug}
                href={`/blog-details?topic=${topic.slug}`}
                className={topic.slug === activeTopic.slug ? "is-active" : ""}
              >
                {topic.title}
              </Link>
            ))}
          </div>

          <div className="sbros-blog-bottom-cta">
            <div>
              <span>SBROS TECH · TECHNOLOGY PARTNER</span>
              <h3>Have a technology challenge to solve?</h3>
              <p>
                Talk to our team about website development, software,
                digital growth and connected technology solutions.
              </p>
            </div>
            <Link href="/contact-us">
              Let&apos;s Talk <span>→</span>
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}

export default function BlogDetails() {
  return (
    <Suspense
      fallback={
        <div className="sbros-blog-loading">
          Loading technology insights...
        </div>
      }
    >
      <BlogDetailsContent />
    </Suspense>
  );
}
