---
permalink: /
title: "Jonghyun Shin"
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<style>
:root {
  --jh-bg: #ffffff;
  --jh-surface: #f7f8fa;
  --jh-surface-2: #eef1f4;
  --jh-text: #1f2933;
  --jh-muted: #64707d;
  --jh-border: #dde2e7;
  --jh-accent: #305f8d;
  --jh-accent-soft: #e9f0f7;
  --jh-shadow: 0 10px 30px rgba(20, 30, 45, 0.06);
}

html[data-theme="dark"] {
  --jh-bg: #111f36;
  --jh-surface: #151a21;
  --jh-surface-2: #1c232c;
  --jh-text: #e7ebef;
  --jh-muted: #a9b2bc;
  --jh-border: #2a333d;
  --jh-accent: #8bb8e3;
  --jh-accent-soft: #18293a;
  --jh-shadow: none;
}

html {
  scroll-behavior: smooth;
}

body,
.masthead,
.greedy-nav,
.page,
.page__inner-wrap,
.page__content,
.page__footer {
  background: var(--jh-bg) !important;
  color: var(--jh-text) !important;
}

.masthead {
  border-bottom: 1px solid var(--jh-border) !important;
}

.masthead a,
.greedy-nav a,
.page__footer a {
  color: var(--jh-text) !important;
}

.greedy-nav .visible-links a:before {
  background: var(--jh-accent) !important;
}

.page__title {
  display: none;
}

.page {
  float: none !important;
  width: 100% !important;
  padding-right: 0 !important;
}

.page__inner-wrap {
  max-width: 980px;
  margin: 0 auto;
}

.page__content {
  font-size: 1rem;
  line-height: 1.72;
}

.jh-wrap {
  max-width: 900px;
  margin: 0 auto;
  padding: 1.5rem 0 4rem;
}

.jh-hero {
  padding: 4.8rem 0 3.3rem;
  border-bottom: 1px solid var(--jh-border);
}

.jh-kicker {
  margin: 0 0 0.65rem;
  color: var(--jh-muted);
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.jh-hero h1 {
  margin: 0;
  color: var(--jh-text);
  font-size: clamp(2.4rem, 6vw, 4.4rem);
  line-height: 1.02;
  letter-spacing: -0.045em;
}

.jh-korean-name {
  margin-left: 0.4rem;
  color: var(--jh-muted);
  font-size: 0.42em;
  font-weight: 500;
  letter-spacing: -0.01em;
  vertical-align: middle;
}

.jh-subtitle {
  max-width: 740px;
  margin: 1.2rem 0 0;
  color: var(--jh-muted);
  font-size: 1.18rem;
}

.jh-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 1.6rem;
}

.jh-link,
.jh-theme-toggle {
  display: inline-flex;
  align-items: center;
  min-height: 2.35rem;
  padding: 0.42rem 0.78rem;
  border: 1px solid var(--jh-border);
  border-radius: 999px;
  background: var(--jh-surface);
  color: var(--jh-text) !important;
  font-size: 0.88rem;
  font-weight: 600;
  text-decoration: none !important;
  cursor: pointer;
  transition: transform 120ms ease, border-color 120ms ease, background 120ms ease;
}

.jh-link:hover,
.jh-theme-toggle:hover {
  transform: translateY(-1px);
  border-color: var(--jh-accent);
  background: var(--jh-accent-soft);
}

.jh-section {
  padding: 3rem 0 0;
  scroll-margin-top: 5rem;
}

.jh-section h2 {
  margin: 0 0 1.15rem;
  padding-bottom: 0.55rem;
  border-bottom: 1px solid var(--jh-border);
  color: var(--jh-text);
  font-size: 1.45rem;
  letter-spacing: -0.02em;
}

.jh-section p {
  color: var(--jh-text);
}

.jh-muted {
  color: var(--jh-muted);
}

.jh-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin-top: 1.1rem;
}

.jh-tag {
  padding: 0.38rem 0.72rem;
  border-radius: 999px;
  background: var(--jh-accent-soft);
  color: var(--jh-accent);
  font-size: 0.88rem;
  font-weight: 650;
}

.jh-news {
  display: grid;
  gap: 0.2rem;
}

.jh-news-item {
  display: grid;
  grid-template-columns: 7.2rem 1fr;
  gap: 1rem;
  padding: 0.78rem 0;
  border-bottom: 1px solid var(--jh-border);
}

.jh-date {
  color: var(--jh-muted);
  font-variant-numeric: tabular-nums;
  font-weight: 600;
}

.jh-publication {
  margin: 1rem 0;
  padding: 1.25rem 1.35rem;
  border: 1px solid var(--jh-border);
  border-radius: 14px;
  background: var(--jh-surface);
  box-shadow: var(--jh-shadow);
}

.jh-publication h3 {
  margin: 0 0 0.4rem;
  color: var(--jh-text);
  font-size: 1.06rem;
  line-height: 1.42;
}

.jh-publication p {
  margin: 0.3rem 0;
}

.jh-venue {
  color: var(--jh-accent);
  font-weight: 700;
}

.jh-pub-links {
  margin-top: 0.7rem !important;
}

.jh-pub-links a,
.jh-section a {
  color: var(--jh-accent);
  text-decoration-thickness: 1px;
  text-underline-offset: 0.15em;
}

.jh-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.jh-list li {
  padding: 0.78rem 0;
  border-bottom: 1px solid var(--jh-border);
}

.jh-item-title {
  font-weight: 700;
  color: var(--jh-text);
}

.jh-item-meta {
  margin-top: 0.15rem;
  color: var(--jh-muted);
  font-size: 0.94rem;
}

.jh-footer-note {
  margin-top: 3.5rem;
  padding-top: 1.2rem;
  border-top: 1px solid var(--jh-border);
  color: var(--jh-muted);
  font-size: 0.86rem;
}

@media (max-width: 700px) {
  .jh-wrap {
    padding-top: 0.5rem;
  }

  .jh-hero {
    padding-top: 3rem;
  }

  .jh-news-item {
    grid-template-columns: 1fr;
    gap: 0.15rem;
  }
}
</style>

<div class="jh-wrap">

<section class="jh-hero" id="about">
  <h1>Jonghyun Shin <span class="jh-korean-name">신종현</span></h1>
  <p class="jh-subtitle">
  </p>

  <div class="jh-links">
    <a class="jh-link" href="mailto:uenjgieonj5448@korea.ac.kr">Email</a>
    <a class="jh-link" href="https://scholar.google.com/citations?user=JGHbuDUAAAAJ" target="_blank" rel="noopener">Google Scholar</a>
    <a class="jh-link" href="https://github.com/jong-hyun-shin" target="_blank" rel="noopener">GitHub</a>
    <a class="jh-link" href="https://www.linkedin.com/in/jonghyun-shin-545927346" target="_blank" rel="noopener">LinkedIn</a>
    <a class="jh-link" href="/files/CV1.pdf" target="_blank" rel="noopener">CV</a>
    <button class="jh-theme-toggle" id="jh-theme-toggle" type="button" aria-label="Toggle color theme">Dark mode</button>
  </div>
</section>

<section class="jh-section" id="research">
  <p>
    I am a second-year M.S.–Ph.D. integrated student in Artificial Intelligence at Korea University, advised by <a href="https://eil-research.github.io/index.html" target="_blank" rel="noopener">Prof. Sejun Park</a>. Before starting my graduate studies, I double-majored in Mathematics Education and Statistics at Korea University.
  </p>
  <p>
My research focuses on how finite numerical precision and finite randomness alter the theoretical behavior of machine learning algorithms. I am particularly interested in their implications for generalization, expressivity, and differential privacy. More broadly, I study learning and optimization when computation is carried out over discrete or fixed-point parameter spaces, rather than with idealized real-valued arithmetic. My goal is to understand which classical guarantees of machine learning remain valid under such computational constraints, how they change, and what new phenomena emerge as a result.
  </p>
</section>

<section class="jh-section" id="news">
  <h2>News</h2>
  <div class="jh-news">
    <div class="jh-news-item">
      <div class="jh-date">Jun. 2026</div>
      <div>
        Posted our preprint
        <a href="https://arxiv.org/abs/2606.06934" target="_blank" rel="noopener">
          “Uniform Stability and Generalization Error of GD and SGD on Fixed-Point Parameters”
        </a>.
      </div>
    </div>
    <div class="jh-news-item">
      <div class="jh-date">Sep. 2025</div>
      <div>
        Started working with Prof. Sejun Park at Korea University.
      </div>
    </div>
    <div class="jh-news-item">
      <div class="jh-date">Apr. 2025</div>
      <div>
        Our work on minimum width for universal approximation appeared at
        <strong>ICML 2025</strong>.
      </div>
    </div>
  </div>
</section>

<section class="jh-section" id="publications">
  <h2>Publications & Preprints</h2>

  <article class="jh-publication">
    <h3>Uniform Stability and Generalization Error of GD and SGD on Fixed-Point Parameters</h3>
    <p><strong>Jonghyun Shin</strong>, Sejun Park</p>
    <p class="jh-venue">Preprint, 2026</p>
    <p class="jh-pub-links">
      <a href="https://arxiv.org/abs/2606.06934" target="_blank" rel="noopener">arXiv</a>
    </p>
  </article>

  <article class="jh-publication">
    <h3>Minimum Width for Universal Approximation using Squashable Activation Functions</h3>
    <p><strong>Jonghyun Shin</strong>, Namjun Kim, Geonho Hwang, Sejun Park</p>
    <p class="jh-venue">International Conference on Machine Learning (ICML), 2025</p>
    <p class="jh-pub-links">
      <a href="https://arxiv.org/abs/2504.07371" target="_blank" rel="noopener">arXiv</a>
      ·
      <a href="https://proceedings.mlr.press/v267/shin25b.html" target="_blank" rel="noopener">PMLR</a>
    </p>
  </article>
</section>

<section class="jh-section" id="experience">
  <h2>Education</h2>
  <ul class="jh-list">
    <li>
      <div class="jh-item-title">Korea University</div>
      <div>B.Sc. in Mathematical Education & Statistics</div>
      <div class="jh-item-meta">Mar. 2019 – Aug. 2025 · GPA: 4.32 / 4.5</div>
    </li>
  </ul>
</section>

<section class="jh-section" id="honors">
  <h2>Honors & Awards</h2>
  <ul class="jh-list">
    <li>
      <div class="jh-item-title">Master's Excellence Scholarship in Science and Engineering</div>
      <div class="jh-item-meta">Korea Student Aid Foundation · Sep. 2025 – Aug. 2027</div>
    </li>
    <li>
      <div class="jh-item-title">Dean's List</div>
      <div class="jh-item-meta">Korea University · Mar. 2021, Sep. 2023</div>
    </li>
  </ul>
</section>

<section class="jh-section" id="teaching">
  <h2>Teaching</h2>
  <ul class="jh-list">
    <li>
      <div class="jh-item-title">Teaching Assistant — Calculus</div>
      <div class="jh-item-meta">Korea University · Fall 2025</div>
    </li>
    <li>
      <div class="jh-item-title">Teaching Assistant — Discrete Mathematics</div>
      <div class="jh-item-meta">Korea University · Spring 2025</div>
    </li>
    <li>
      <div class="jh-item-title">Teaching Practicum</div>
      <div class="jh-item-meta">Daeshin High School, Seoul · Apr. 2025</div>
    </li>
  </ul>
</section>

<section class="jh-section" id="service">
  <h2>Academic Service</h2>
  <ul class="jh-list">
    <li>
      <div class="jh-item-title">Reviewer, NeurIPS 2026</div>
    </li>
  </ul>
</section>

</div>

<script>
(function () {
  const root = document.documentElement;
  const button = document.getElementById("jh-theme-toggle");
  const saved = localStorage.getItem("jh-theme");
  const systemDark = window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const initial = saved || (systemDark ? "dark" : "light");
  root.setAttribute("data-theme", initial);

  function updateLabel() {
    button.textContent =
      root.getAttribute("data-theme") === "dark" ? "Light mode" : "Dark mode";
  }

  updateLabel();

  button.addEventListener("click", function () {
    const next =
      root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("jh-theme", next);
    updateLabel();
  });
})();
</script>
