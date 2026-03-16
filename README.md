# 🌌 MH HRIDOY'S 3D Planetary Web

A **stunning interactive 3D solar system** built with **HTML, CSS, and Three.js**. Explore all 8 planets with realistic textures, smooth animations, glowing headers, and a twinkling starry background. Fully responsive and visually immersive.  

---


## 🔹 Features

- **Interactive 3D Planets** – Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune  
- **Saturn with Realistic Rings**  
- **Starry Background** – Animated twinkling stars for immersive effect  
- **Glassmorphism Header** – Floating profile with hover effect and modal popup  
- **Smooth Scroll Animations** – Reveal planet info cards elegantly  
- **Responsive Design** – Works on both desktop and mobile seamlessly  

---

## 🖥️ Preview

Each section includes a **3D spinning planet** and an **info card**:  

```html
<section>
  <div class="info hidden-left">
    <div class="tag">Planet 1</div>
    <h1>Mercury</h1>
    <p>Mercury is the closest planet to the Sun and the fastest orbiting planet.</p>
  </div>
  <div class="canvas-box hidden-right" id="mercury"></div>
</section>
```

⚡ Installation

Clone the repository:

git clone  https://github.com/mhhridoy7907/3D-Planet-Website

Open index.html in your browser.

Make sure all planet textures are in the im/ folder:

m.jpg, v.jpg, EE.jpg, mars.jpg, jup.jpg, stu.jpg, uranus.jpg, nuptune.jpg
🛠️ Tech Stack

HTML5 & CSS3 – Layout, animations, glassmorphism, responsive design

JavaScript (ES6) – Modal popup, scroll reveal animations

Three.js (r128) – 3D planets, textures, lighting, rotations

🎨 Animations & Effects

Scroll reveal animations with .hidden-left & .hidden-right

3D planet rotation with requestAnimationFrame

Twinkling stars animated via CSS @keyframes

Neon glow effects on cards, headers, and modal popup

💡 Customization

Swap planet textures in the im/ folder and update paths in JS createPlanet() calls

Adjust star count or twinkle speed in JS

Modify header logo color, card colors, and glow effects in CSS

Add or remove planets by copying <section> structure

🔗 Live Demo

Host on GitHub Pages or any static web server for a fully interactive experience.

⚖️ License

This project is open-source under the MIT License. Feel free to use, modify, and share it.
