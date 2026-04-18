import './style.css'
import heroImg from './assets/hero.png'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<section id="center">
  <div class="hero">
    <img src="${heroImg}" class="base" width="170" height="179" alt="Hotel illustration">
  </div>
  <div>
    <h1>Welcome to BlueWave Hotel</h1>
    <p>Comfortable rooms, warm service, and a peaceful stay in the heart of the city.</p>
  </div>
  <button type="button" class="counter">Book your stay</button>
</section>

<div class="ticks"></div>

<section id="next-steps">
  <div id="docs">
    <h2>Rooms & Suites</h2>
    <p>Choose from deluxe rooms, family suites, and premium city-view stays.</p>
    <ul>
      <li><a href="#">Deluxe Room</a></li>
      <li><a href="#">Executive Suite</a></li>
    </ul>
  </div>
  <div id="social">
    <h2>Hotel Highlights</h2>
    <p>Enjoy complimentary breakfast, free Wi-Fi, airport pickup, and 24/7 support.</p>
    <ul>
      <li><a href="#">Dining</a></li>
      <li><a href="#">Amenities</a></li>
    </ul>
  </div>
</section>

<div class="ticks"></div>
<section id="spacer"></section>
`;
