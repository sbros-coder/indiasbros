import React from "react";
import Image from "next/image";
import Link from "next/link";

/* ------------- STYLES (indha file ulla mattum) ------------- */
const css = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Montserrat:wght@600;700;800&display=swap');

/* ---------- THEME: website screenshot-ku match ---------- */
.pyc-page {
  --primary: #38b6f5;        /* sky blue (buttons, icons, accents) */
  --primary-dark: #1d95d6;   /* hover / text-on-white blue */
  --navy: #14196e;           /* headings, dark sections */
  --navy-dark: #0d114f;
  --accent: #f23b3b;         /* red (scroll-top button colour) */
  --heading: #14196e;
  --text: #596277;
  --light-bg: #f5f9fe;
  --tint: #e6f5fe;           /* light sky tint for pills / icon circles */
  --border: #e8eef7;
  --radius: 10px;
  --shadow: 0 8px 28px rgba(20, 25, 110, 0.07);

  font-family: 'DM Sans', sans-serif;
  color: var(--text);
  font-size: 16px;
  line-height: 1.7;
}

.pyc-page h1,
.pyc-page h2,
.pyc-page h3,
.pyc-page h4 {
  font-family: 'Montserrat', sans-serif;
  color: var(--heading);
  font-weight: 700;
  line-height: 1.3;
  margin: 0;
}

.pyc-page p { margin: 0; }

/* ---------- Sections ---------- */
.pyc-section { padding: 90px 0; }
.pyc-altBg { background: var(--light-bg); }

.pyc-sectionHead {
  text-align: center;
  max-width: 760px;
  margin: 0 auto 52px;
}

.pyc-pill {
  display: inline-block;
  padding: 7px 20px;
  border-radius: 50px;
  background: var(--tint);
  color: var(--primary-dark);
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 18px;
}

.pyc-sectionHead h2 {
  font-size: 38px;
  font-weight: 700;
}

.pyc-sectionHead p {
  margin-top: 14px;
}

/* ---------- Hero ---------- */
.pyc-hero {
  padding: 100px 0 90px;
  background: linear-gradient(135deg, var(--light-bg) 0%, #ffffff 65%);
  border-bottom: 1px solid var(--border);
}

.pyc-heroTitle {
  font-size: 42px;
  font-weight: 800;
  line-height: 1.25;
  margin-bottom: 26px;
}

.pyc-heroTitle em {
  font-style: normal;
  color: var(--primary-dark);
}

.pyc-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 34px;
}

.pyc-badges span {
  padding: 7px 18px;
  border: 1px solid var(--border);
  background: #fff;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 500;
  color: var(--heading);
}

.pyc-badges span:first-child {
  background: var(--tint);
  border-color: var(--tint);
  color: var(--primary-dark);
  font-weight: 600;
}

.pyc-btnRow {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.pyc-btnPrimary,
.pyc-btnOutline,
.pyc-btnWhite {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 15px 32px;
  border-radius: 2px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.25s ease;
}

.pyc-btnPrimary {
  background: var(--primary);
  color: #fff;
  border: 2px solid var(--primary);
}

.pyc-btnPrimary:hover {
  background: var(--navy);
  border-color: var(--navy);
  color: #fff;
}

.pyc-btnOutline {
  border: 2px solid var(--navy);
  color: var(--navy);
  background: transparent;
}

.pyc-btnOutline:hover {
  background: var(--navy);
  color: #fff;
}

.pyc-btnWhite {
  background: var(--primary);
  color: #fff;
  border: 2px solid var(--primary);
}

.pyc-btnWhite:hover {
  background: #fff;
  border-color: #fff;
  color: var(--navy);
}

/* ---- Hero image: NEW OUTER FRAME (navy block + corner bracket + dots) ---- */
.pyc-heroWrap {
  position: relative;
  isolation: isolate;
  padding: 26px;
}

/* navy block, bottom-left */
.pyc-heroWrap::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 62%;
  height: 62%;
  border-radius: 26px;
  background: linear-gradient(135deg, var(--navy) 0%, var(--navy-dark) 100%);
  z-index: -1;
}

/* sky-blue corner bracket, top-right */
.pyc-heroWrap::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 42%;
  height: 42%;
  border-top: 7px solid var(--primary);
  border-right: 7px solid var(--primary);
  border-radius: 0 26px 0 0;
  z-index: -1;
}

.pyc-heroFrame {
  position: relative;
  border-radius: 24px;
}

/* dot pattern, bottom-right */
.pyc-heroFrame::after {
  content: "";
  position: absolute;
  right: -34px;
  bottom: -34px;
  width: 96px;
  height: 96px;
  background-image: radial-gradient(var(--primary) 2px, transparent 2.5px);
  background-size: 16px 16px;
  opacity: 0.6;
  z-index: -1;
}

.pyc-heroImage {
  border-radius: 24px;
  overflow: hidden;
  border: 8px solid #ffffff;
  background: #ffffff;
  box-shadow: 0 24px 54px rgba(20, 25, 110, 0.22);
}

.pyc-heroImage img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  border-radius: 16px;
}

/* ---------- Why Learn cards ---------- */
.pyc-card {
  height: 100%;
  background: #fff;
  border: 1px solid var(--border);
  border-bottom: 4px solid transparent;
  border-radius: var(--radius);
  padding: 36px 32px 34px;
  box-shadow: 0 4px 18px rgba(20, 25, 110, 0.04);
  transition: all 0.3s ease;
}

.pyc-card:hover {
  border-bottom-color: var(--primary);
  box-shadow: var(--shadow);
  transform: translateY(-4px);
}

.pyc-cardIcon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: var(--tint);
  color: var(--primary-dark);
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 24px;
  transition: all 0.3s ease;
}

.pyc-card:hover .pyc-cardIcon {
  background: var(--primary);
  color: #fff;
}

.pyc-card h4 {
  font-size: 21px;
  margin-bottom: 10px;
}

/* ---------- Panels & check lists ---------- */
.pyc-panel {
  height: 100%;
  background: #fff;
  border: 1px solid var(--border);
  border-top: 4px solid var(--primary);
  border-radius: var(--radius);
  padding: 38px 36px;
  box-shadow: var(--shadow);
}

.pyc-panel h3 {
  font-size: 24px;
  margin-bottom: 24px;
}

.pyc-panelWide {
  background: #fff;
  border: 1px solid var(--border);
  border-top: 4px solid var(--primary);
  border-radius: var(--radius);
  padding: 40px 44px;
  box-shadow: var(--shadow);
}

.pyc-twoCol ul {
  columns: 2;
  column-gap: 56px;
}

.pyc-checkList {
  list-style: none;
  padding: 0;
  margin: 0;
}

.pyc-checkList li {
  position: relative;
  padding-left: 36px;
  margin-bottom: 16px;
  break-inside: avoid;
}

.pyc-checkList li:last-child { margin-bottom: 0; }

.pyc-checkList li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 4px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--tint);
}

.pyc-checkList li::after {
  content: "";
  position: absolute;
  left: 8px;
  top: 8px;
  width: 6px;
  height: 11px;
  border: solid var(--primary-dark);
  border-width: 0 2px 2px 0;
  transform: rotate(45deg) scale(0.85);
  margin-top: -2px;
}

.pyc-certPanel {
  border-top-color: var(--navy);
  background: linear-gradient(160deg, #fff 55%, var(--light-bg) 100%);
}

/* ---------- Curriculum ---------- */
.pyc-module {
  height: 100%;
  display: flex;
  gap: 20px;
  align-items: flex-start;
  background: #fff;
  border: 1px solid var(--border);
  border-bottom: 4px solid transparent;
  border-radius: var(--radius);
  padding: 28px 26px;
  box-shadow: 0 4px 18px rgba(20, 25, 110, 0.04);
  transition: all 0.3s ease;
}

.pyc-module:hover {
  border-bottom-color: var(--primary);
  box-shadow: var(--shadow);
  transform: translateY(-4px);
}

.pyc-moduleNo {
  flex: 0 0 auto;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary);
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 17px;
}

.pyc-module h4 {
  font-size: 18px;
  margin-bottom: 6px;
}

.pyc-module p { font-size: 15px; }

/* ---------- Learning journey ---------- */
.pyc-journeySection {
  background: linear-gradient(135deg, var(--navy) 0%, var(--navy-dark) 100%);
}

.pyc-journeySection .pyc-sectionHead h2 { color: #fff; }

.pyc-journeySection .pyc-pill {
  background: rgba(56, 182, 245, 0.18);
  color: var(--primary);
}

.pyc-journey {
  display: flex;
  justify-content: space-between;
  position: relative;
  gap: 10px;
}

.pyc-journey::before {
  content: "";
  position: absolute;
  top: 27px;
  left: 8%;
  right: 8%;
  height: 2px;
  background: rgba(255, 255, 255, 0.25);
}

.pyc-step {
  position: relative;
  flex: 1;
  text-align: center;
}

.pyc-stepDot {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background: var(--primary);
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 18px;
  box-shadow: 0 0 0 6px rgba(56, 182, 245, 0.25);
}

.pyc-step:last-child .pyc-stepDot {
  background: #fff;
  color: var(--navy);
}

.pyc-step p {
  margin-top: 18px;
  color: #fff;
  font-weight: 600;
  font-size: 15px;
}

/* ---------- Batches ---------- */
.pyc-batch {
  height: 100%;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
}

.pyc-batch h4 {
  background: var(--navy);
  color: #fff;
  padding: 20px 32px;
  font-size: 20px;
}

.pyc-batch ul {
  list-style: none;
  margin: 0;
  padding: 12px 32px 20px;
}

.pyc-batch li {
  padding: 13px 0;
  border-bottom: 1px dashed var(--border);
}

.pyc-batch li:last-child {
  border-bottom: 0;
  font-weight: 600;
  color: var(--primary-dark);
}

/* ---------- Info cards ---------- */
.pyc-infoCard {
  height: 100%;
  background: #fff;
  border: 1px solid var(--border);
  border-left: 4px solid var(--primary);
  border-radius: var(--radius);
  padding: 30px 30px;
  box-shadow: 0 4px 18px rgba(20, 25, 110, 0.04);
}

.pyc-infoCard h4 {
  font-size: 19px;
  margin-bottom: 10px;
}

/* ---------- Location ---------- */
.pyc-location {
  background: linear-gradient(135deg, var(--navy) 0%, var(--navy-dark) 100%);
  border-radius: 16px;
  padding: 56px 52px;
  color: #d5dcf5;
}

.pyc-location h3 {
  color: #fff;
  font-size: 28px;
  margin-bottom: 18px;
}

.pyc-location address {
  margin: 0 0 20px;
  line-height: 1.8;
}

.pyc-location address strong { color: #fff; }

.pyc-contactLine {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}

.pyc-contactLine a {
  color: var(--primary);
  text-decoration: none;
  font-weight: 500;
}

.pyc-contactLine a:hover { text-decoration: underline; }
.pyc-contactLine span { opacity: 0.4; }

/* ---------- HOVER / MOUSE INTERACTIONS ---------- */
.pyc-page {
  --ease: cubic-bezier(0.22, 0.61, 0.36, 1);
}

.pyc-badges span,
.pyc-pill,
.pyc-heroImage,
.pyc-heroImage img,
.pyc-panel,
.pyc-panelWide,
.pyc-batch,
.pyc-batch h4,
.pyc-infoCard,
.pyc-checkList li,
.pyc-checkList li::before,
.pyc-checkList li::after,
.pyc-moduleNo,
.pyc-stepDot,
.pyc-step p,
.pyc-card h4,
.pyc-module h4,
.pyc-contactLine a {
  transition: all 0.35s var(--ease);
}

.pyc-btnPrimary,
.pyc-btnOutline,
.pyc-btnWhite {
  transition: transform 0.3s var(--ease), box-shadow 0.3s var(--ease),
    background 0.3s var(--ease), color 0.3s var(--ease), border-color 0.3s var(--ease);
}

@media (hover: hover) and (pointer: fine) {
  /* Buttons: lift + glow, press effect on click */
  .pyc-btnPrimary:hover,
  .pyc-btnOutline:hover,
  .pyc-btnWhite:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(56, 182, 245, 0.35);
  }
  .pyc-btnPrimary:active,
  .pyc-btnOutline:active,
  .pyc-btnWhite:active {
    transform: translateY(-1px) scale(0.98);
    box-shadow: 0 4px 10px rgba(56, 182, 245, 0.3);
  }

  /* Hero badges */
  .pyc-badges span:hover {
    background: var(--primary);
    border-color: var(--primary);
    color: #fff;
    transform: translateY(-3px);
    box-shadow: 0 8px 16px rgba(56, 182, 245, 0.3);
  }
  .pyc-pill:hover {
    background: var(--primary);
    color: #fff;
    transform: scale(1.05);
  }

  /* Hero image: soft zoom + lift */
  .pyc-heroImage:hover {
    transform: translateY(-6px);
    box-shadow: 0 32px 64px rgba(20, 25, 110, 0.28);
  }
  .pyc-heroImage:hover img {
    transform: scale(1.06);
  }

  /* Why-learn cards: lift, icon pops and tilts, title colour change */
  .pyc-card:hover {
    transform: translateY(-10px);
  }
  .pyc-card:hover .pyc-cardIcon {
    transform: scale(1.12) rotate(-8deg);
    box-shadow: 0 10px 20px rgba(56, 182, 245, 0.4);
  }
  .pyc-card:hover h4 {
    color: var(--primary-dark);
  }

  /* Panels */
  .pyc-panel:hover,
  .pyc-panelWide:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 40px rgba(20, 25, 110, 0.12);
  }

  /* Check list rows: slide right, tick fills */
  .pyc-checkList li:hover {
    transform: translateX(8px);
    color: var(--heading);
  }
  .pyc-checkList li:hover::before {
    background: var(--primary);
    transform: scale(1.15);
  }
  .pyc-checkList li:hover::after {
    border-color: #fff;
  }

  /* Curriculum modules: lift, tint, number badge spins in */
  .pyc-module:hover {
    transform: translateY(-8px);
    background: var(--light-bg);
  }
  .pyc-module:hover .pyc-moduleNo {
    background: var(--navy);
    transform: rotate(360deg) scale(1.1);
  }
  .pyc-module:hover h4 {
    color: var(--primary-dark);
  }

  /* Journey steps */
  .pyc-step:hover .pyc-stepDot {
    transform: translateY(-6px) scale(1.15);
    box-shadow: 0 0 0 10px rgba(56, 182, 245, 0.3);
  }
  .pyc-step:hover p {
    color: var(--primary);
    transform: translateY(-2px);
  }

  /* Batches */
  .pyc-batch:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 44px rgba(20, 25, 110, 0.14);
  }
  .pyc-batch:hover h4 {
    background: var(--primary);
  }
  .pyc-batch li:not(:last-child):hover {
    padding-left: 10px;
    color: var(--heading);
  }

  /* Info cards: lift + thicker accent edge */
  .pyc-infoCard:hover {
    transform: translateY(-6px);
    box-shadow: inset 4px 0 0 var(--primary), 0 16px 36px rgba(20, 25, 110, 0.12);
  }

  /* Location links */
  .pyc-contactLine a:hover {
    color: #fff;
    letter-spacing: 0.3px;
  }
}

/* Respect users who prefer less motion */
@media (prefers-reduced-motion: reduce) {
  .pyc-page *,
  .pyc-page *::before,
  .pyc-page *::after {
    transition: none !important;
    transform: none !important;
  }
}

/* ---------- Responsive ---------- */
@media (max-width: 991px) {
  .pyc-section { padding: 64px 0; }
  .pyc-hero { padding: 70px 0 60px; }
  .pyc-heroTitle { font-size: 34px; }
  .pyc-sectionHead h2 { font-size: 32px; }
  .pyc-twoCol ul { columns: 1; }
  .pyc-journey {
    flex-direction: column;
    gap: 24px;
    align-items: flex-start;
  }
  .pyc-journey::before {
    top: 0;
    bottom: 0;
    left: 26px;
    right: auto;
    width: 2px;
    height: auto;
  }
  .pyc-step {
    display: flex;
    align-items: center;
    gap: 18px;
    text-align: left;
  }
  .pyc-step p { margin-top: 0; }
}

@media (max-width: 575px) {
  .pyc-heroTitle { font-size: 28px; }
  .pyc-sectionHead h2 { font-size: 26px; }
  .pyc-sectionHead { margin-bottom: 36px; }
  .pyc-location { padding: 38px 24px; }
  .pyc-panelWide,
  .pyc-panel { padding: 28px 22px; }
  .pyc-btnPrimary,
  .pyc-btnOutline,
  .pyc-btnWhite { width: 100%; }

  /* hero frame: slightly smaller on mobile */
  .pyc-heroWrap { padding: 16px; }
  .pyc-heroWrap::before { border-radius: 20px; }
  .pyc-heroWrap::after { border-width: 5px; border-radius: 0 20px 0 0; }
  .pyc-heroFrame::after { right: -22px; bottom: -22px; width: 64px; height: 64px; }
  .pyc-heroImage { border-radius: 18px; border-width: 6px; }
  .pyc-heroImage img { border-radius: 12px; }
}
`;

/* ------------------------------------------------------------------ */
/*  CONFIG – inga mattum maathina podhum                               */
/* ------------------------------------------------------------------ */
const HERO_IMAGE = "/assets/images/girl.jpg"; // <-- unga image path
const BROCHURE_LINK = "#"; // <-- brochure PDF link
const ENROLL_LINK = "/contact-us";

const highlights = [
  "100 Hours",
  "AI/ML Ready",
  "9 Modules",
  "Beginner Friendly",
  "Certified",
];

const whyLearn = [
  { title: "Easy to Learn", text: "Simple and beginner-friendly syntax makes Python perfect for first-time programmers." },
  { title: "Versatile", text: "Used in web development, AI, data science, automation, and more applications." },
  { title: "High Demand", text: "Widely sought-after skill across all industries worldwide." },
  { title: "Fast Development", text: "Write less, achieve more with powerful libraries and frameworks." },
  { title: "Future-Proof", text: "Powers cutting-edge fields like machine learning and robotics." },
  { title: "Massive Community", text: "Huge global community with extensive resources and support." },
];

const whoShouldTake = [
  "Anyone passionate about Artificial Intelligence and Machine Learning",
  "Students, Higher secondary pass outs, and graduates in any discipline",
  "Software professionals looking to add Python skills",
  "Non-IT professionals wanting to transition into tech",
];

const prerequisites = [
  "Basic computer literacy and ability to use a computer",
  "Familiarity with mathematics at school level (logic, simple algebra) is helpful but not mandatory",
  "A curious mindset and willingness to learn the artificial intelligence that is going to rule the world",
  "Personal laptop is required for hands-on practice",
];

const curriculum = [
  { title: "Introduction to Python", text: "Python setup, IDE configuration, first program, syntax basics" },
  { title: "Python Basics", text: "Variables, data types, operators, control flow, loops" },
  { title: "Data Structures", text: "Lists, tuples, sets, dictionaries, string manipulation" },
  { title: "Functions & Modules", text: "Function definition, parameters, modules, packages, libraries" },
  { title: "Object-Oriented Programming", text: "Classes, objects, inheritance, polymorphism, encapsulation" },
  { title: "Error & File Handling", text: "Exception handling, file operations, CSV, JSON processing" },
  { title: "Advanced Python Concepts", text: "Decorators, generators, regular expressions, threading" },
  { title: "Working with Databases", text: "SQL basics, SQLite, MySQL connectivity, CRUD operations" },
  { title: "Introduction to Django", text: "Web framework basics, MVT pattern, simple web application" },
];

const journey = [
  "Python Basics",
  "Data Handling",
  "OOP Concepts",
  "Database",
  "Web Development",
  "AI/ML Ready",
];

const achieve = [
  "Solid foundation in Python programming concepts and best practices",
  "Hands-on experience through real-world coding exercises and projects",
  "Ability to build applications in areas like web development, data analysis, and automation",
  "Problem-solving and logical thinking skills using Python",
  "Certificate of Completion from SBros Tech Pvt Ltd",
  "Preparation for advanced topics like AI, Machine Learning, and Data Science",
];

const batches = [
  { title: "Weekday Batch", rows: ["Monday to Friday", "2 hours per day", "10 hours per week", "Total: 10 weeks"] },
  { title: "Weekend Batch", rows: ["Saturday & Sunday", "5 hours per day", "10 hours per week", "Total: 10 weeks"] },
];

const assessment = [
  "2 hours of written assessment to test Python concepts",
  "2 hours of project execution to demonstrate coding skills",
  "Total 4 hours of comprehensive evaluation",
  "Minimum 75% attendance required for certification eligibility",
];

const courseInfo = [
  { title: "Course Materials", text: "Comprehensive study materials, code examples, and practice exercises will be provided" },
  { title: "Language of Instruction", text: "English (Tamil also will be used upon request)" },
  { title: "Attendance Policy", text: "Minimum 75% attendance is mandatory for certification" },
];

/* ------------------------------------------------------------------ */
/*  Small reusable pieces                                              */
/* ------------------------------------------------------------------ */
const SectionHead = ({
  tag,
  title,
  sub,
}: {
  tag: string;
  title: string;
  sub?: string;
}) => (
  <div className="pyc-sectionHead">
    <span className="pyc-pill">{tag}</span>
    <h2>{title}</h2>
    {sub && <p>{sub}</p>}
  </div>
);

const CheckList = ({ items }: { items: string[] }) => (
  <ul className="pyc-checkList">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */
const PythonCourse = () => {
  return (
    <div className="pyc-page">
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {/* ============ HERO ============ */}
      <section className="pyc-hero">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="pyc-pill">Python Programming</span>
              <h1 className="pyc-heroTitle">
                Start Your Journey into <em>AI, Data Science,</em> Web Development
                &amp; Automation
              </h1>

              <div className="pyc-badges">
                {highlights.map((h) => (
                  <span key={h}>{h}</span>
                ))}
              </div>

              <div className="pyc-btnRow">
                <Link
  href="/training-services#form1"
  className="pyc-btnPrimary"
>
  Enroll Now - ₹12,000
</Link>
                {/* <a href={BROCHURE_LINK} className="pyc-btnOutline" download>
                  Download Brochure
                </a> */}
              </div>
            </div>

            {/* ---- IMAGE PLACE ---- */}
            <div className="col-lg-6">
              <div className="pyc-heroWrap">
                <div className="pyc-heroFrame">
                  <div className="pyc-heroImage">
                    <Image
                      src={HERO_IMAGE}
                      alt="Python Programming Course - SBros Tech"
                      width={640}
                      height={480}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHY LEARN ============ */}
      <section className="pyc-section">
        <div className="container">
          <SectionHead tag="Why Python" title="Why Learn Python?" />
          <div className="row g-4">
            {whyLearn.map((item, i) => (
              <div className="col-lg-4 col-md-6" key={item.title}>
                <div className="pyc-card">
                  <span className="pyc-cardIcon">{i + 1}</span>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHO + PREREQUISITES ============ */}
      <section className="pyc-section pyc-altBg">
        <div className="container">
          <SectionHead tag="Eligibility" title="Is This Course Right for You?" />
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="pyc-panel">
                <h3>Who Should Take This Course?</h3>
                <CheckList items={whoShouldTake} />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="pyc-panel">
                <h3>Prerequisites</h3>
                <CheckList items={prerequisites} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CURRICULUM ============ */}
      <section className="pyc-section">
        <div className="container">
          <SectionHead
            tag="Curriculum"
            title="Course Curriculum"
            sub="9 structured modules designed to take you from zero to job-ready."
          />
          <div className="row g-4">
            {curriculum.map((m, i) => (
              <div className="col-lg-4 col-md-6" key={m.title}>
                <div className="pyc-module">
                  <span className="pyc-moduleNo">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4>{m.title}</h4>
                    <p>{m.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ LEARNING JOURNEY ============ */}
      <section className="pyc-section pyc-journeySection">
        <div className="container">
          <SectionHead tag="Roadmap" title="Your Learning Journey" />
          <div className="pyc-journey">
            {journey.map((step, i) => (
              <div className="pyc-step" key={step}>
                <span className="pyc-stepDot">{i + 1}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ACHIEVE ============ */}
      <section className="pyc-section">
        <div className="container">
          <SectionHead tag="Outcomes" title="What You'll Achieve" />
          <div className="pyc-panelWide">
            <div className="pyc-twoCol">
              <CheckList items={achieve} />
            </div>
          </div>
        </div>
      </section>

      {/* ============ SCHEDULE ============ */}
      <section className="pyc-section pyc-altBg">
        <div className="container">
          <SectionHead tag="Schedule" title="Flexible Schedule Options" />
          <div className="row g-4 justify-content-center">
            {batches.map((b) => (
              <div className="col-lg-5 col-md-6" key={b.title}>
                <div className="pyc-batch">
                  <h4>{b.title}</h4>
                  <ul>
                    {b.rows.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ASSESSMENT + CERTIFICATION ============ */}
      <section className="pyc-section">
        <div className="container">
          <SectionHead tag="Evaluation" title="Assessment & Certification" />
          <div className="row g-4">
            <div className="col-lg-7">
              <div className="pyc-panel">
                <h3>Assessment Structure</h3>
                <CheckList items={assessment} />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="pyc-panel pyc-certPanel">
                <h3>Certification</h3>
                <p>
                  A certificate of <strong>&quot;Python Programming&quot;</strong>{" "}
                  endorsed by SBros Tech Pvt Ltd will be issued to all successful
                  students upon completion of the course and assessment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ COURSE INFORMATION ============ */}
      <section className="pyc-section pyc-altBg">
        <div className="container">
          <SectionHead tag="Details" title="Course Information" />
          <div className="row g-4">
            {courseInfo.map((c) => (
              <div className="col-lg-4 col-md-6" key={c.title}>
                <div className="pyc-infoCard">
                  <h4>{c.title}</h4>
                  <p>{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ LOCATION + CTA ============ */}
      <section className="pyc-section">
        <div className="container">
          <div className="pyc-location">
            <div className="row align-items-center g-4">
              <div className="col-lg-7">
                <h3>Training Location</h3>
                <address>
                  <strong>SBros Tech Pvt Ltd</strong>
                  <br />
                  No.15/25, Madavilagam,
                  <br />
                  Kandanvilai Post,
                  <br />
                  Kanniyakumari District,
                  <br />
                  Tamil Nadu - PIN 629810
                </address>
                <p className="pyc-contactLine">
                  <a href="mailto:info@sbrostech.com">info@sbrostech.com</a>
                  <span>|</span>
                  <a
                    href="https://www.sbrostech.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.sbrostech.com
                  </a>
                </p>
              </div>
              <div className="col-lg-5 text-lg-end">
               <Link
  href="/training-services#form1"
  className="pyc-btnPrimary"
>
  Enroll Now - ₹12,000
</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PythonCourse;