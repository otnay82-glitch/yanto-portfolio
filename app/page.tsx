
"use client";

import { useState } from "react";

export default function Home() {
  const [language, setLanguage] = useState<"EN" | "ID">("EN");

  const content = {
    EN: {
      menu: ["About", "Expertise", "Experience", "Projects", "Contact"],
      greeting: "HELLO, I'M",
      role: "Information Security, Data Privacy & AI Professional",
      description:
        "Helping organizations strengthen digital trust through information security, privacy governance, cloud security, and responsible AI.",
      explore: "EXPLORE MY PORTFOLIO",
      contact: "CONTACT ME",
      location: "Based in Indonesia",
    },
    ID: {
      menu: ["Tentang", "Keahlian", "Pengalaman", "Proyek", "Kontak"],
      greeting: "HALO, SAYA",
      role: "Profesional Keamanan Informasi, Privasi Data & AI",
      description:
        "Membantu organisasi memperkuat kepercayaan digital melalui keamanan informasi, tata kelola privasi, keamanan cloud, dan AI yang bertanggung jawab.",
      explore: "JELAJAHI PORTFOLIO",
      contact: "HUBUNGI SAYA",
      location: "Berbasis di Indonesia",
    },
  };

  const t = content[language];

  return (
    <main>
      <header className="navbar">
        <a href="#" className="logo">YANTO<span>.</span></a>

        <nav>
          {t.menu.map((item, index) => (
            <a key={item} href={`#${["about", "expertise", "experience", "projects", "contact"][index]}`}>
              {item}
            </a>
          ))}
        </nav>

        <button
          className="language"
          onClick={() =>
            setLanguage(language === "EN" ? "ID" : "EN")
          }
        >
          {language === "EN" ? "ID" : "EN"} ↗
        </button>
      </header>

      <section className="hero">
        <div className="hero-content">
          <div className="status">
            <span /> DIGITAL TRUST PROFESSIONAL
          </div>

          <p className="greeting">{t.greeting}</p>

          <h1>
            YANTO<span>.</span>
          </h1>

          <h2>{t.role}</h2>

          <p className="description">
            {t.description}
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              {t.explore} →
            </a>

            <a href="#contact" className="secondary-button">
              {t.contact} ↗
            </a>
          </div>

          <p className="location">
            ─── {t.location}
          </p>
        </div>

        <div className="hero-visual">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />

          <div className="core">
            <div className="shield">⬡</div>
            <h3>DIGITAL TRUST</h3>
            <p>SECURITY · PRIVACY · AI</p>
          </div>

          <span className="visual-label">
            TRUST BY DESIGN
          </span>
        </div>
      </section>
      
      {/* ABOUT ME SECTION */}
      <section className="about-section" id="about">
        <div className="section-label">
          01 / ABOUT ME
        </div>

        <div className="about-container">
          <div className="about-heading">
            <h2>
              {language === "EN"
                ? "Building Digital Trust Through Technology & Governance."
                : "Membangun Kepercayaan Digital Melalui Teknologi & Tata Kelola."}
            </h2>
          </div>

          <div className="about-description">
            <p>
              {language === "EN"
                ? "I am an Information Security and Data Privacy professional with experience in auditing, consulting, professional training, and higher education."
                : "Saya adalah profesional Keamanan Informasi dan Privasi Data dengan pengalaman di bidang audit, konsultasi, pelatihan profesional, dan pendidikan tinggi."}
            </p>

            <p>
              {language === "EN"
                ? "My professional journey combines digital trust assurance at BSI Group Indonesia and academic experience as a university lecturer."
                : "Perjalanan profesional saya menggabungkan assurance digital trust di BSI Group Indonesia dan pengalaman akademis sebagai dosen universitas."}
            </p>

            <p>
              {language === "EN"
                ? "I am also expanding my expertise in Artificial Intelligence, AI Engineering, Cloud Security, and emerging technology governance."
                : "Saya juga terus mengembangkan kompetensi di bidang Artificial Intelligence, AI Engineering, Cloud Security, dan tata kelola teknologi baru."}
            </p>

            <div className="about-highlight">
              <div>
                <strong>2021</strong>
                <span>BSI Group Indonesia</span>
              </div>

              <div>
                <strong>2015</strong>
                <span>University Lecturer</span>
              </div>

              <div>
                <strong>ISO</strong>
                <span>Lead Auditor & Lead Tutor</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL EXPERTISE */}
      <section className="expertise-section" id="expertise">

        <div className="section-label">
          02 / PROFESSIONAL EXPERTISE
        </div>

        <div className="expertise-heading">
          <h2>
            {language === "EN"
              ? "Areas of Expertise."
              : "Bidang Keahlian."}
          </h2>

          <p>
            {language === "EN"
              ? "Combining professional assurance, technical knowledge, and emerging technology."
              : "Menggabungkan assurance profesional, pengetahuan teknis, dan teknologi baru."}
          </p>
        </div>

        <div className="expertise-grid">

          <div className="expertise-card">
            <span>01</span>
            <h3>Information Security</h3>
            <p>ISO/IEC 27001 · Security Auditing · Risk Management</p>
          </div>

          <div className="expertise-card">
            <span>02</span>
            <h3>Data Privacy</h3>
            <p>ISO/IEC 27701 · GDPR · Indonesia PDP Law</p>
          </div>

          <div className="expertise-card">
            <span>03</span>
            <h3>Cloud Security</h3>
            <p>ISO/IEC 27017 · ISO/IEC 27018 · CCSK</p>
          </div>

          <div className="expertise-card">
            <span>04</span>
            <h3>AI & Governance</h3>
            <p>ISO/IEC 42001 · AI Security · AI Risk Management</p>
          </div>

          <div className="expertise-card">
            <span>05</span>
            <h3>IT Service Management</h3>
            <p>ISO/IEC 20000 · ITIL · COBIT</p>
          </div>

          <div className="expertise-card">
            <span>06</span>
            <h3>Professional Training</h3>
            <p>Lead Auditor · Lead Tutor · Higher Education</p>
          </div>

        </div>
      </section>

      {/* PROFESSIONAL EXPERIENCE */}
      <section className="experience-section" id="experience">

        <div className="section-label">
          03 / PROFESSIONAL EXPERIENCE
        </div>

        <div className="experience-heading">
          <h2>
            {language === "EN"
              ? "Professional Journey."
              : "Perjalanan Profesional."}
          </h2>

          <p>
            {language === "EN"
              ? "Industry experience, professional assurance, and academic contribution."
              : "Pengalaman industri, assurance profesional, dan kontribusi akademis."}
          </p>
        </div>

        <div className="experience-timeline">

          <div className="experience-item">
            <div className="experience-date">
              JULY 2021 — PRESENT
            </div>

            <div className="experience-content">
              <span className="experience-dot" />

              <h3>Digital Trust Client Manager</h3>

              <h4>PT BSI Group Indonesia</h4>

              <p>
                {language === "EN"
                  ? "Conducting client audits and delivering professional training across information security, data privacy, cloud security, and management system standards."
                  : "Melaksanakan audit klien dan memberikan pelatihan profesional di bidang keamanan informasi, privasi data, keamanan cloud, dan standar sistem manajemen."}
              </p>

              <div className="experience-tags">
                <span>ISO 27001</span>
                <span>ISO 27701</span>
                <span>ISO 27017</span>
                <span>ISO 27018</span>
                <span>ISO 20000</span>
              </div>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-date">
              2015 — PRESENT
            </div>

            <div className="experience-content">
              <span className="experience-dot" />

              <h3>University Lecturer</h3>

              <h4>Universitas Indraprasta PGRI</h4>

              <p>
                {language === "EN"
                  ? "Teaching computer security, software engineering, database systems, and programming. Supporting academic development and technology education."
                  : "Mengajar keamanan komputer, rekayasa perangkat lunak, sistem basis data, dan pemrograman. Mendukung pengembangan akademis dan pendidikan teknologi."}
              </p>

              <div className="experience-tags">
                <span>Computer Security</span>
                <span>Software Engineering</span>
                <span>Database</span>
                <span>Programming</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CERTIFICATIONS & CREDENTIALS */}
      <section className="certifications-section" id="certifications">

        <div className="section-label">
          04 / CERTIFICATIONS & CREDENTIALS
        </div>

        <div className="certifications-heading">
          <h2>
            {language === "EN"
              ? "Professional Credentials."
              : "Sertifikasi Profesional."}
          </h2>

          <p>
            {language === "EN"
              ? "Professional certifications, technical qualifications, and continuous learning."
              : "Sertifikasi profesional, kualifikasi teknis, dan pengembangan kompetensi berkelanjutan."}
          </p>
        </div>

        {/* ISO PROFESSIONAL CREDENTIALS */}
        <div className="credential-group">
          <h3>
            {language === "EN"
              ? "ISO Lead Auditor & Lead Tutor"
              : "ISO Lead Auditor & Lead Tutor"}
          </h3>

          <div className="credential-grid">

            {[
              "ISO/IEC 27001",
              "ISO/IEC 27701",
              "ISO/IEC 27017",
              "ISO/IEC 27018",
              "ISO/IEC 20000",
              "CSA STAR"
            ].map((item) => (
              <div className="credential-card" key={item}>
                <span>PROFESSIONAL QUALIFICATION</span>
                <h4>{item}</h4>
                <p>Lead Auditor & Lead Tutor</p>
              </div>
            ))}

          </div>
        </div>

        {/* CYBERSECURITY & CLOUD */}
        <div className="credential-group">
          <h3>
            {language === "EN"
              ? "Cybersecurity & Cloud Security"
              : "Keamanan Siber & Keamanan Cloud"}
          </h3>

          <div className="credential-grid">

            {[
              {
                name: "Certified Ethical Hacker",
                short: "CEH",
                issuer: "EC-Council"
              },
              {
                name: "Certified in Cybersecurity",
                short: "CC",
                issuer: "ISC2"
              },
              {
                name: "Certificate of Cloud Security Knowledge",
                short: "CCSK v5",
                issuer: "Cloud Security Alliance"
              }
            ].map((item) => (
              <div className="credential-card" key={item.short}>
                <span>TECHNICAL CERTIFICATION</span>
                <h4>{item.short}</h4>
                <p>{item.name}</p>
                <small>{item.issuer}</small>
              </div>
            ))}

          </div>
        </div>

        {/* GOVERNANCE & COURSES */}
        <div className="credential-group">
          <h3>
            {language === "EN"
              ? "Governance & Professional Development"
              : "Tata Kelola & Pengembangan Profesional"}
          </h3>

          <div className="credential-grid">

            {[
              "COBIT",
              "ITIL",
              "GDPR and Data Privacy Fundamentals",
              "EU AI Act Literacy",
              "AI Fundamentals"
            ].map((item) => (
              <div className="credential-card" key={item}>
                <span>GOVERNANCE & LEARNING</span>
                <h4>{item}</h4>
                <p>
                  {language === "EN"
                    ? "Professional development"
                    : "Pengembangan kompetensi"}
                </p>
              </div>
            ))}

          </div>
        </div>

      </section>

      {/* PROJECTS & PORTFOLIO */}
      <section className="projects-section" id="projects">

        <div className="section-label">
          05 / SELECTED PROJECTS
        </div>

        <div className="projects-heading">
          <h2>
            {language === "EN"
              ? "Projects & Portfolio."
              : "Proyek & Portfolio."}
          </h2>

          <p>
            {language === "EN"
              ? "Exploring technology, strengthening security, and building digital trust."
              : "Mengeksplorasi teknologi, memperkuat keamanan, dan membangun kepercayaan digital."}
          </p>
        </div>

        <div className="projects-grid">

          {/* PROJECT 01 */}
          <article className="project-card">
            <div className="project-top">
              <span>01 / AI ENGINEERING</span>
              <span>01</span>
            </div>

            <h3>Omnichannel Retail NL2SQL</h3>

            <p>
              {language === "EN"
                ? "An AI-powered natural language to SQL solution for querying omnichannel retail data using a structured data pipeline."
                : "Solusi AI Natural Language to SQL untuk melakukan query data retail omnichannel menggunakan pipeline data terstruktur."}
            </p>

            <div className="project-tags">
              <span>Python</span>
              <span>PostgreSQL</span>
              <span>NL2SQL</span>
              <span>Data Pipeline</span>
            </div>

<div className="project-footer">
  <span>HACKTIV8 · MILESTONE 1</span>
  <a
    href="https://github.com/otnay82-glitch/milestone1-omnichannel_retail"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="View Milestone 1 on GitHub"
  >
    ↗
  </a>
</div>
          </article>

          {/* PROJECT 02 */}
          <article className="project-card">
            <div className="project-top">
              <span>02 / AI ENGINEERING</span>
              <span>02</span>
            </div>

            <h3>Analytics Agent</h3>

            <p>
              {language === "EN"
                ? "An AI agent project focused on analytics workflows, data interaction, and intelligent assistance."
                : "Proyek AI Agent yang berfokus pada workflow analitik, interaksi data, dan intelligent assistance."}
            </p>

            <div className="project-tags">
              <span>Python</span>
              <span>AI Agent</span>
              <span>Analytics</span>
            </div>

<div className="project-footer">
  <span>HACKTIV8 · MILESTONE 2</span>
  <a
    href="https://github.com/otnay82-glitch/milestone2-analytics-agent"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="View Milestone 2 on GitHub"
  >
    ↗
  </a>
</div>
          </article>

          {/* PROJECT 03 */}
          <article className="project-card">
            <div className="project-top">
              <span>03 / AI ENGINEERING</span>
              <span>03</span>
            </div>

            <h3>AI Chatbot & API Integration</h3>

            <p>
              {language === "EN"
                ? "Exploring AI-powered chatbot applications for customer service, education, and digital assistance."
                : "Pengembangan aplikasi chatbot berbasis AI untuk layanan pelanggan, pendidikan, dan asisten digital."}
            </p>

            <div className="project-tags">
              <span>LLM</span>
              <span>API Integration</span>
              <span>Python</span>
            </div>

            <div className="project-footer">
              <span>AI DEVELOPMENT</span>
              <span>↗</span>
            </div>
          </article>

          {/* PROJECT 04 */}
          <article className="project-card">
            <div className="project-top">
              <span>04 / CYBERSECURITY</span>
              <span>04</span>
            </div>

            <h3>Information Security Assessment</h3>

            <p>
              {language === "EN"
                ? "Security assessment and audit methodologies based on international information security standards and risk management practices."
                : "Metodologi assessment dan audit keamanan berdasarkan standar keamanan informasi internasional dan praktik manajemen risiko."}
            </p>

            <div className="project-tags">
              <span>ISO 27001</span>
              <span>Risk Assessment</span>
              <span>NIST CSF</span>
            </div>

            <div className="project-footer">
              <span>CYBERSECURITY</span>
              <span>↗</span>
            </div>
          </article>

          {/* PROJECT 05 */}
          <article className="project-card">
            <div className="project-top">
              <span>05 / DIGITAL TRUST</span>
              <span>05</span>
            </div>

            <h3>Data Privacy Compliance Framework</h3>

            <p>
              {language === "EN"
                ? "Privacy compliance assessment and documentation framework covering data inventory, ROPA, DPIA, and privacy risk management."
                : "Framework assessment dan dokumentasi kepatuhan privasi yang mencakup data inventory, ROPA, DPIA, dan manajemen risiko privasi."}
            </p>

            <div className="project-tags">
              <span>ISO 27701</span>
              <span>GDPR</span>
              <span>PDP Law</span>
            </div>

            <div className="project-footer">
              <span>DATA PRIVACY</span>
              <span>↗</span>
            </div>
          </article>

          {/* PROJECT 06 */}
          <article className="project-card">
            <div className="project-top">
              <span>06 / AI GOVERNANCE</span>
              <span>06</span>
            </div>

            <h3>AI Governance & Security</h3>

            <p>
              {language === "EN"
                ? "Exploring AI management systems, AI risk assessment, and security frameworks for responsible AI adoption."
                : "Eksplorasi sistem manajemen AI, penilaian risiko AI, dan framework keamanan untuk adopsi AI yang bertanggung jawab."}
            </p>

            <div className="project-tags">
              <span>ISO 42001</span>
              <span>NIST AI RMF</span>
              <span>OWASP LLM</span>
            </div>

            <div className="project-footer">
              <span>AI GOVERNANCE</span>
              <span>↗</span>
            </div>
          </article>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section" id="contact">

        <div className="section-label">
          06 / GET IN TOUCH
        </div>

        <div className="contact-container">

          <div className="contact-heading">
            <h2>
              {language === "EN"
                ? "Let's Build Digital Trust Together."
                : "Mari Membangun Digital Trust Bersama."}
            </h2>

            <p>
              {language === "EN"
                ? "Open to professional collaboration, consulting, auditing, training, and AI engineering opportunities."
                : "Terbuka untuk kolaborasi profesional, konsultasi, audit, pelatihan, dan peluang AI Engineering."}
            </p>

            <a
              href="mailto:otnay82@gmail.com"
              className="contact-email-button"
            >
              {language === "EN"
                ? "CONTACT ME"
                : "HUBUNGI SAYA"}
              ↗
            </a>
          </div>

          <div className="contact-links">

            <a
              href="mailto:otnay82@gmail.com"
              className="contact-link"
            >
              <span>EMAIL</span>
              <strong>otnay82@gmail.com</strong>
              <span>↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/yanto-m-kom-m-m-4901627"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span>LINKEDIN</span>
              <strong>Professional Profile</strong>
              <span>↗</span>
            </a>

            <a
              href="https://github.com/otnay82-glitch"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span>GITHUB</span>
              <strong>Technical Portfolio</strong>
              <span>↗</span>
            </a>

          </div>

        </div>

        <div className="contact-bottom">
          <span>YANTO. / DIGITAL TRUST PROFESSIONAL</span>
          <span>INDONESIA</span>
        </div>

      </section>

    </main>
  );
}
