import './style.css'
import heroImg from './assets/hero.png'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<section id="center">
  <div class="hero">
    <img src="${heroImg}" class="base" width="170" height="179" alt="Portfolio avatar">
  </div>
  <div>
    <h1>Alex Morgan</h1>
    <p>Frontend Developer & UI Designer crafting clean, responsive web experiences.</p>
  </div>
  <button type="button" class="counter">View Projects</button>
</section>

<div class="ticks"></div>

<section id="next-steps">
  <div id="docs">
    <h2>About Me</h2>
    <p>I build modern web apps with React, TypeScript, and Tailwind. Passionate about UX and performance.</p>
    <ul>
      <li><a href="#">Resume</a></li>
      <li><a href="#">LinkedIn</a></li>
    </ul>
  </div>
  <div id="social">
    <h2>Featured Projects</h2>
    <p>E‑commerce dashboard, travel planner, real‑time chat app, and design system library.</p>
    <ul>
      <li><a href="#">Dashboard Demo</a></li>
      <li><a href="#">GitHub</a></li>
    </ul>
  </div>
</section>

<div class="ticks"></div>

<section id="skills">
  <h2>Skills & Tools</h2>
  <p>React, TypeScript, Next.js, Node.js, Figma, Vite, Git, Tailwind CSS, Firebase.</p>
  <div class="tags">
    <span class="tag">React</span>
    <span class="tag">TypeScript</span>
    <span class="tag">CSS</span>
    <span class="tag">UI Design</span>
  </div>
</section>

<div class="ticks"></div>
<section id="contact">
  <h2>Get in Touch</h2>
  <p>Let’s build something great together. Reach out for freelance or full‑time opportunities.</p>
  <button type="button" class="counter">Contact Me</button>
</section>

<div class="ticks"></div>
<section id="spacer"></section>
`;
