import './style.css'
import heroImg from './assets/hero.png'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<section id="center">
  <div class="hero">
    <img src="${heroImg}" class="base" width="170" height="179" alt="Portfolio avatar">
  </div>
  <div>
    <h1>Nihal</h1>
    <p>Software Developer crafting robust, scalable applications with modern technologies.</p>
  </div>
  <button type="button" class="counter">View Projects</button>
</section>

<div class="ticks"></div>

<section id="next-steps">
  <div id="docs">
    <h2>About Me</h2>
    <p>Passionate software developer with experience in building full-stack web applications. Love solving complex problems and writing clean, maintainable code.</p>
    <ul>
      <li><a href="#">Resume</a></li>
      <li><a href="#">LinkedIn</a></li>
    </ul>
  </div>
  <div id="social">
    <h2>Featured Projects</h2>
    <p>E-commerce platform, real-time chat application, task management tool, and RESTful API services.</p>
    <ul>
      <li><a href="#">GitHub</a></li>
      <li><a href="#">Portfolio</a></li>
    </ul>
  </div>
</section>

<div class="ticks"></div>

<section id="skills">
  <h2>Skills & Tools</h2>
  <p>JavaScript, TypeScript, React, Node.js, Python, Git, Docker, PostgreSQL, MongoDB, REST APIs, Tailwind CSS.</p>
  <div class="tags">
    <span class="tag">JavaScript</span>
    <span class="tag">React</span>
    <span class="tag">Node.js</span>
    <span class="tag">Python</span>
    <span class="tag">TypeScript</span>
    <span class="tag">Docker</span>
    <span class="tag">PostgreSQL</span>
    <span class="tag">MongoDB</span>
  </div>
</section>

<div class="ticks"></div>
<section id="contact">
  <h2>Get in Touch</h2>
  <p>Looking for exciting software development opportunities. Let's build something great together!</p>
  <button type="button" class="counter">Contact Me</button>
</section>

<div class="ticks"></div>
<section id="spacer"></section>
`;
