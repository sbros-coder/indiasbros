
"use client";

import Link from "next/link";
import React, { useMemo, useState } from "react";

type BlogPost = {
  id: number;
  category: string;
  date: string;
  readTime: string;
  title: string;
  description: string;
  image: string;
  tag: string;
  slug: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    category: "Web Development",
    slug: "website-development",
    date: "Oct 18, 2026",
    readTime: "6 min read",
    title: "Modern Web Development Trends Every Business Should Know",
    description:
      "Explore modern frameworks, responsive design, performance optimization, and the technologies shaping business websites.",
    image: "/assets/images/website-hosting.jpg",
    tag: "TRENDING",
  },
  {
    id: 2,
    category: "Artificial Intelligence",
    slug: "artificial-intelligence",
    date: "Oct 15, 2026",
    readTime: "8 min read",
    title: "How AI Is Transforming the Future of Business",
    description:
      "Discover how artificial intelligence and automation can improve productivity, customer experience, and business operations.",
    image: "/assets/images/artificial.jpg",
    tag: "FEATURED",
  },
  {
    id: 3,
    category: "IOT Program",
    slug: "iot-program",
    date: "Oct 05, 2026",
    readTime: "4 min read",
    title: "How IoT Connects Smart Devices and Businesses",
    description:
      "Learn how connected devices, sensors, and real-time data can support automation and smarter business decisions.",
    image: "/assets/images/business.jpg",
    tag: "",
  },
  {
    id: 4,
    category: "Cybersecurity",
    slug: "cybersecurity",
    date: "Oct 10, 2026",
    readTime: "7 min read",
    title: "Essential Cybersecurity Practices for Modern Businesses",
    description:
      "Understand practical ways to protect business data, secure networks, and reduce common digital security risks.",
    image: "/assets/images/abstract.jpg",
    tag: "",
  },
  {
    id: 5,
    category: "Software Development",
    slug: "software-development",
    date: "Oct 08, 2026",
    readTime: "6 min read",
    title: "Choosing the Right Software for Your Business",
    description:
      "A practical guide to selecting scalable software solutions that support your team's workflow and long-term goals.",
    image: "/assets/images/side.jpg",
    tag: "",
  },
  {
    id: 6,
    category: "Digital Marketing",
    slug: "digital-marketing",
    date: "Oct 12, 2026",
    readTime: "5 min read",
    title: "Digital Marketing Strategies That Drive Business Growth",
    description:
      "Learn how SEO, content marketing, social media, and paid campaigns can strengthen your online presence.",
    image: "/assets/images/futures.jpg",
    tag: "",
  },
  {
    id: 7,
    category: "Networking & CCTV Security",
    slug: "networking-cctv-security",
    date: "Oct 12, 2026",
    readTime: "5 min read",
    title: "Smart Networking and CCTV Solutions for Better Security",
    description:
      "Discover how reliable networks, CCTV cameras, and secure monitoring help protect business environments.",
    image: "/assets/images/portrait.jpg",
    tag: "",
  },
  {
    id: 8,
    category: "Graphic Design",
    slug: "graphic-design",
    date: "Oct 12, 2026",
    readTime: "5 min read",
    title: "The Power of Graphic Design in Building a Strong Brand",
    description:
      "Explore how visual identity, typography, colours, and creative content help businesses build brand recognition.",
    image: "/assets/images/editing.jpg",
    tag: "",
  },
  {
    id: 9,
    category: "Trading",
    slug: "trading",
    date: "Oct 12, 2026",
    readTime: "5 min read",
    title: "Understanding Trading Basics and Market Trends",
    description:
      "Learn about market movements, trading plans, research, and risk management. Trading involves financial risk.",
    image: "/assets/images/trading1.jpg",
    tag: "",
  },
];

const categories = [
  "All",
  "Web Development",
  "Artificial Intelligence",
  "Digital Marketing",
  "Cybersecurity",
  "Software Development",
  "IOT Program",
  "Graphic Design",
  "Networking & CCTV Security",
  "Trading",
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchText, setSearchText] = useState("");

  const filteredPosts = useMemo(() => {
    const searchValue = searchText.toLowerCase().trim();

    return blogPosts.filter((post) => {
      const matchesCategory =
        activeCategory === "All" || post.category === activeCategory;

      const matchesSearch =
        post.title.toLowerCase().includes(searchValue) ||
        post.description.toLowerCase().includes(searchValue) ||
        post.category.toLowerCase().includes(searchValue);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchText]);

  return (
    <section className="sbros-blog-page">
      <div className="container">
        <div className="sbros-blog-heading">
          <span className="sbros-blog-eyebrow">
            <span className="sbros-blog-eyebrow-line" />
            SBROS TECH INSIGHTS
            <span className="sbros-blog-eyebrow-line" />
          </span>

          <h2>
            Explore the Latest
            <br />
            <span>Technology Insights</span>
          </h2>

          <p>
            Discover expert insights, practical guides, and the latest trends
            in technology, software development, digital marketing, and
            business innovation.
          </p>
        </div>

        <div className="sbros-blog-toolbar">
          <div className="sbros-blog-search">
            <i className="fa-solid fa-magnifying-glass" />

            <input
              type="search"
              placeholder="Search articles, topics..."
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
              aria-label="Search blog articles"
            />

            {searchText && (
              <button
                type="button"
                onClick={() => setSearchText("")}
                aria-label="Clear search"
              >
                <i className="fa-solid fa-xmark" />
              </button>
            )}
          </div>

          <span className="sbros-blog-result-count">
            {filteredPosts.length}{" "}
            {filteredPosts.length === 1 ? "Article" : "Articles"}
          </span>
        </div>

        <div
          className="sbros-blog-categories"
          aria-label="Filter blog categories"
        >
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={activeCategory === category ? "active" : ""}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="sbros-blog-grid">
          {filteredPosts.map((post) => {
            const articleUrl = `/blog-details?topic=${post.slug}`;

            return (
              <article className="sbros-blog-card" key={post.id}>
                <Link
                  href={articleUrl}
                  className="sbros-blog-image-link"
                  aria-label={`Read ${post.title}`}
                >
                  <div className="sbros-blog-image">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                    />

                    {post.tag && (
                      <span className="sbros-blog-tag">{post.tag}</span>
                    )}

                    <span className="sbros-blog-image-arrow">
                      <i className="fa-solid fa-arrow-up-right-from-square" />
                    </span>
                  </div>
                </Link>

                <div className="sbros-blog-card-content">
                  <div className="sbros-blog-meta">
                    <span>
                      <i className="fa-regular fa-calendar" />
                      {post.date}
                    </span>

                    <span>
                      <i className="fa-regular fa-clock" />
                      {post.readTime}
                    </span>
                  </div>

                  <span className="sbros-blog-category">{post.category}</span>

                  <h3>
                    <Link href={articleUrl}>{post.title}</Link>
                  </h3>

                  <p>{post.description}</p>

                  <Link
                    href={articleUrl}
                    className="sbros-blog-read-more"
                  >
                    Read Article
                    <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {filteredPosts.length === 0 && (
          <div className="sbros-blog-empty">
            <i className="fa-regular fa-folder-open" />
            <h3>No articles found</h3>
            <p>Try another search term or choose a different category.</p>

            <button
              type="button"
              onClick={() => {
                setSearchText("");
                setActiveCategory("All");
              }}
            >
              View All Articles
            </button>
          </div>
        )}

        <div className="sbros-blog-cta">
          <div>
            <span>HAVE A PROJECT IN MIND?</span>
            <h3>
              Let&apos;s Build Something
              <br />
              Great Together.
            </h3>
            <p>
              Connect with SBros Tech for reliable technology solutions
              tailored to your business.
            </p>
          </div>

          <Link href="/contact-us" className="sbros-blog-cta-button">
            Talk to Our Team
            <i className="fa-solid fa-arrow-right" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
