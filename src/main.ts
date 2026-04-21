import './style.css'
import heroImg from './assets/hero.png'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<section id="center">
  <div class="hero">
    <img src="${heroImg}" class="base" width="170" height="179" alt="Portfolio avatar">
  </div>
  <div>
    <h1>Ponnuchamy Thangavel</h1>
    <p>Full Stack Developer specializing in React, Laravel, and modern web technologies.</p>
  </div>
  <button type="button" class="counter">View Projects</button>
</section>

<div class="ticks"></div>

<section id="next-steps">
  <div id="docs">
    <h2>About Me</h2>
    <p>Experienced developer with expertise in React, PHP/Laravel, and Angular. Passionate about building scalable web applications and portfolio websites.</p>
    <ul>
      <li><a href="#">Resume</a></li>
      <li><a href="#">LinkedIn</a></li>
    </ul>
  </div>
  <div id="social">
    <h2>Featured Projects</h2>
    <p>React portfolio website, hotel landing page, e-commerce platforms, and custom web applications.</p>
    <ul>
      <li><a href="#">Portfolio Demo</a></li>
      <li><a href="#">GitHub</a></li>
    </ul>
  </div>
</section>

<div class="ticks"></div>

<section id="skills">
  <h2>Skills & Tools</h2>
  <p>React, TypeScript, Laravel, PHP, Angular, Node.js, MySQL, Git, Tailwind CSS, Vite.</p>
  <div class="tags">
    <span class="tag">React</span>
    <span class="tag">Laravel</span>
    <span class="tag">PHP</span>
    <span class="tag">Angular</span>
    <span class="tag">TypeScript</span>
    <span class="tag">MySQL</span>
    <span class="tag">Git</span>
    <span class="tag">Tailwind</span>
  </div>
</section>

<div class="ticks"></div>
<section id="contact">
  <h2>Get in Touch</h2>
  <p>Open to freelance projects, full‑time opportunities, and collaborations. Let's discuss your next web project!</p>
  <button type="button" class="counter">Contact Me</button>
</section>

<div class="ticks"></div>
<section id="spacer"></section>
`;
