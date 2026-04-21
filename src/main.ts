import './style.css'
import heroImg from './assets/hero.png'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<section id="center">
  <div class="hero">
    <img src="${heroImg}" class="base" width="170" height="179" alt="Portfolio avatar">
  </div>
  <div>
    <h1>Suhani Sharma</h1>
    <p>UI/UX Designer & Frontend Developer creating beautiful, user-centered digital experiences.</p>
  </div>
  <button type="button" class="counter">View Projects</button>
</section>

<div class="ticks"></div>

<section id="next-steps">
  <div id="docs">
    <h2>About Me</h2>
    <p>Creative designer with 3+ years of experience in UI/UX design and frontend development. Passionate about creating intuitive, accessible, and visually stunning digital products.</p>
    <ul>
      <li><a href="#">Resume</a></li>
      <li><a href="#">LinkedIn</a></li>
    </ul>
  </div>
  <div id="social">
    <h2>Featured Projects</h2>
    <p>E-commerce UI redesign, mobile banking app, healthcare dashboard, and design system for SaaS platform.</p>
    <ul>
      <li><a href="#">Behance</a></li>
      <li><a href="#">Dribbble</a></li>
    </ul>
  </div>
</section>

<div class="ticks"></div>

<section id="skills">
  <h2>Skills & Tools</h2>
  <p>Figma, Adobe XD, React, TypeScript, HTML/CSS, JavaScript, User Research, Wireframing, Prototyping, Design Systems.</p>
  <div class="tags">
    <span class="tag">Figma</span>
    <span class="tag">Adobe XD</span>
    <span class="tag">React</span>
    <span class="tag">TypeScript</span>
    <span class="tag">UI Design</span>
    <span class="tag">UX Research</span>
    <span class="tag">Prototyping</span>
    <span class="tag">CSS</span>
  </div>
</section>

<div class="ticks"></div>
<section id="contact">
  <h2>Get in Touch</h2>
  <p>Looking for design collaborations, freelance projects, or full‑time UI/UX roles. Let's create something amazing together!</p>
  <button type="button" class="counter">Contact Me</button>
</section>

<div class="ticks"></div>
<section id="spacer"></section>
`;
