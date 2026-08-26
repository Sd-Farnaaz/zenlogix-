# Zenlogix Solutions — Interactive Portfolio Website

A premium, modern, high-end interactive portfolio website designed and engineered for **Zenlogix Solutions**.

Built with **React**, **Vite**, **GSAP & ScrollTrigger**, **Three.js / WebGL**, **Modern CSS**, and **Lucide Icons**.

---

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Start local development server
```bash
npm run dev
```

### 3. Build for production
```bash
npm run build
```

---

## 🎨 Tech Stack & Architecture

- **React 19 & Vite 8**: Fast modular component architecture.
- **GSAP 3 & ScrollTrigger**: Smooth timeline reveals, scroll-based text animations, menu staggers, and section triggers.
- **Three.js**: Interactive 3D System Architecture visual scene in the Hero section with mouse tilt parallax and concentric orbital rings.
- **Modern CSS & Variables**: Design system enforcing Zenlogix's official color palette (`#071B3A`, `#092A4A`, `#0877DC`, `#1687E8`, `#087F98`, `#12A8CA`, `#F7FAFC`, `#253B57`), fluid typography (`clamp()`), and responsive layouts.
- **Lucide React**: Crisp icon set for UI micro-interactions.

---

## 📁 Project Structure

```
zenlogix/
├── public/
│   ├── favicon.svg             # Official Zenlogix Z logo icon mark
├── src/
│   ├── animations/
│   │   └── gsapUtils.js        # Reusable GSAP reveal & ScrollTrigger hooks
│   ├── assets/                 # Brand assets & images
│   ├── components/
│   │   ├── Button.jsx          # Custom magnetic button component
│   │   ├── BusinessSolutionsDiagram.jsx  # Interactive problem-to-solution pipeline
│   │   ├── CustomCursor.jsx    # Desktop magnetic custom cursor with context labels
│   │   ├── Footer.jsx          # Site footer with brand details & navigation
│   │   ├── Logo.jsx            # Official Zenlogix SVG logo component
│   │   ├── Navbar.jsx          # Minimal header & fullscreen mobile menu overlay
│   │   ├── ProjectCard.jsx     # Editorial case study showcase card
│   │   ├── ProjectMockup.jsx   # Generative fallback mockups for empty image paths
│   │   ├── SectionHeading.jsx  # Reusable section title & eyebrow component
│   │   └── ThreeHeroCanvas.jsx # 3D WebGL System Architecture scene
│   ├── data/
│   │   └── portfolioData.js    # Centralized data for projects, capabilities, tech, principles, & process
│   ├── pages/
│   │   ├── CaseStudy.jsx       # Reusable case study detail page (/work/:id)
│   │   ├── Contact.jsx         # Contact intake page (/contact)
│   │   ├── Home.jsx            # Homepage section orchestrator
│   │   ├── Process.jsx         # 7-Step methodology page (/process)
│   │   └── Work.jsx            # Portfolio work showcase page (/work)
│   ├── App.css                 # Comprehensive design system & responsive styling
│   ├── App.jsx                 # Client-side router & App entry
│   ├── index.css               # Typography imports & CSS root variables
│   └── main.jsx                # React DOM render entry
├── package.json
└── README.md
```

---

## 🖼️ How to Replace Project Images

All project metadata and image paths are centralized in `src/data/portfolioData.js`.

To add real project screenshots later, simply edit the `image` field in `src/data/portfolioData.js`:

```javascript
// src/data/portfolioData.js
{
  id: 'manufacturing-zoho',
  title: 'End-to-End Zoho Implementation for a Manufacturing Enterprise',
  image: '/assets/projects/manufacturing-screenshot.png', // Add image path here
  ...
}
```

When `image: ""` is empty, the website automatically renders a custom generative UI mockup designed specifically for that project!
