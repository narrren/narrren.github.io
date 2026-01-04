# 📘 Project Digest: Personal Portfolio Website

## 1. Project Overview
**Project Name**: Naren Dey Portfolio
**Live URL**: [https://narrren.github.io/](https://narrren.github.io/)
**Repository**: [github.com/narrren/narrren.github.io](https://github.com/narrren/narrren.github.io)

This project is a personal portfolio website designed to showcase your skills, projects, and professional identity. It serves as a digital resume and a central hub for your online presence. The design philosophy focuses on **modern aesthetics**, **minimalism**, and **interactivity** using the "Glassmorphism" trend.

---

## 2. Architecture & Tech Stack

The application is built as a **Static Web Application**. This means it does not require a dynamic backend server (like Node.js or Python) to render pages. Instead, the browser downloads the HTML, CSS, and JS files directly.

### **Tech Stack**
| Component | Technology | Description |
| :--- | :--- | :--- |
| **Structure** | **HTML5** | Semantic markup for accessibility and SEO. |
| **Styling** | **CSS3 (Vanilla)** | Custom styling variables, flexbox/grid, and animations. No heavy frameworks (like Bootstrap) were used to ensure maximum performance. |
| **Logic** | **JavaScript (ES6)** | DOM manipulation, event listening, and interactive effects. |
| **Icons** | **FontAwesome** | Vector icons for social links and UI elements. |
| **Fonts** | **Google Fonts** | `Outfit` (Headings) and `Space Grotesk` (Body) for a tech-focused look. |
| **Hosting** | **GitHub Pages** | Free static hosting directly from the repository. |

---

## 3. Frontend Implementation Details

### **A. HTML Structure (`index.html`)**
The HTML is organized into semantic sections to ensure good SEO and readability:
1.  **`<head>` Metadata**: Includes SEO meta tags, viewports for mobile responsiveness, and resource links.
2.  **Navigation (`<nav>`)**: Fixed top bar with a glass effect. Contains the logo and links. Includes a hidden "hamburger" menu that triggers on mobile devices.
3.  **Hero Section (`<header>`)**: The landing area. Features a split layout:
    *   **Left**: Introduction text, animated typewriter effect, and Call-to-Action (CTA) buttons.
    *   **Right**: A glass-card visual component displaying high-level stats (Years Coding, Projects).
4.  **About Section**: A grid layout detailing your specific roles (Innovator, Student, Tech Enthusiast).
5.  **Tech Stack**: Categorized lists of skills (Frontend, Backend, Tools) using icons from `skillicons.dev`.
6.  **Projects**: A grid of cards serving as placeholders for your work. Each card has a hover lift effect.
7.  **Contact**: Simple links to Email, LinkedIn, and GitHub, along with a live profile view counter.

### **B. CSS Styling & Design System (`style.css`)**
We used a **CSS Variable** approach (`:root`) to maintain consistency and allow for easy theming (e.g., changing colors later).

*   **Color Palette**:
    *   **Background**: Deep Navy (`#0f172a`) to varying shades of Slate (`#1e293b`).
    *   **Accents**: Violet (`#8b5cf6`) and Sky Blue (`#0ea5e9`) gradients.
*   **Glassmorphism**: Achieved using `backdrop-filter: blur()`, semi-transparent backgrounds (`rgba`), and subtle white borders. This gives elements a "frosted glass" look.
*   **Animations**:
    *   **Floating Blobs**: Background gradients that move slowly to create a "living" background.
    *   **Hover Effects**: Buttons and cards lift up (`transform: translateY`) and glow on hover.
    *   **Scroll Behavior**: `scroll-behavior: smooth` allows for elegant navigation when clicking menu links.
*   **Responsive Design**: Media queries (`@media`) adjust font sizes and switch the layout from Row -> Column on smaller screens (tablets/phones).

### **C. JavaScript Logic (`script.js`)**
The JavaScript layer adds the "wow" factor without slowing down the site:
1.  **Typewriter Effect**: A custom function cycles through an array of strings (`["Software Developer", "Student", ...]`), simulating typing and deleting characters.
2.  **Mobile Menu**: A toggle event listener on the "Hamburger" icon adds/removes an `.active` class to show or hide the mobile navigation menu.
3.  **Scroll Reveal (Intersection Observer)**: The script watches for elements coming into the viewport. As you scroll down, sections "fade in" and slide up, making the page feel dynamic.

---

## 4. Backend & Hosting (GitHub Pages)

Since this is a static site, the "Backend" is effectively the **GitHub infrastructure**.

*   **Repository**: Stores your code version history.
*   **GitHub Pages**: A built-in service that takes your `index.html` and serves it on a public URL (`narrren.github.io`).
*   **Deployment**: Every time you `git push` changes to the `main` branch, GitHub detects the update and automatically redeploys your site within minutes.

---

## 5. File Structure Analysis

```text
NarenPortfolio/
│
├── index.html       # The main entry point. Contains all content.
├── style.css        # All visual styling and animations.
├── script.js        # All client-side logic.
├── .git/            # Hidden Git directory (version control history).
└── PROJECT_DIGEST.md # This documentation file.
```

---

## 6. Future Enhancements / scalability
If you want to upgrade this project later, here is the roadmap:

1.  **Contact Form Backend**: Currently, the "Contact" button is a `mailto:` link. You could use a service like **EmailJS** or **Formspree** to add a real contact form that sends you emails without needing a backend server.
2.  **Blog Section**: You can add a blog content system. For a static site, this would usually involve using a Static Site Generator (SSG) like **Jekyll**, **Next.js**, or **Gatsby** to turn Markdown files into HTML blog posts.
3.  **Dynamic Data**: If you want to fetch your latest GitHub repos automatically, you could use the **GitHub API** in your `script.js` to populate the "Projects" section dynamically.

---
*Generated by Antigravity Assistant*
