# alx_html_css
advance html and css project


# SmileSchool — CSS Advanced Project

## 📖 Overview
The **SmileSchool** project is part of the **ALX Front-End Curriculum**, focused on applying **advanced CSS concepts** to design a fully responsive and visually appealing webpage using only **HTML and CSS**.  

This project builds upon the structure developed in the **HTML Advanced Project**, bringing the design to life with layout, typography, colors, and interactivity inspired by a provided Figma mockup.

---

## 🎯 Objectives
At the end of this project, you should be able to:

- Understand and apply advanced CSS layout techniques (Flexbox, Grid, positioning).
- Style complex page structures using semantic HTML.
- Use color theory, typography, and spacing effectively.
- Implement hover effects, buttons, and responsive components.
- Compute and apply CSS specificity properly.
- Validate your code with the W3C validator.

---

## 🧠 Learning Outcomes
You will demonstrate mastery of:
- **CSS selectors** and **specificity values**
- **Box Model** (margins, borders, padding)
- **Backgrounds and gradients**
- **Responsive design** with media queries
- **Pseudo-classes** and **pseudo-elements**
- **Typography** and **font embedding**
- **Reusable styles** with classes

---

## 🧩 Project Structure
alx_html_css/
└── css_advanced/
├── README.md
├── index.html
├── styles.css
└── images/
├── logo.png
├── 1.png
├── 2.png
├── 3.png
├── 4.png
├── 5.png
├── 6.png
├── 7.png
├── 8.png
├── 9.png
└── smile.svg

markdown
Copy code

---

## 💡 Features Implemented
### **1. Header & Navigation**
- Responsive navigation bar with logo and links (`COURSES`, `PRICING`, `LOGIN`).
- Smooth hover and active link transitions.

### **2. Hero Section**
- Large, bold typography featuring “Get schooled”.
- Subheadings (`SMILES`, `GRIN`, `LAUGH`).
- Prominent call-to-action button: **REGISTER FOR FREE**.
- Full-width background image with gradient overlay.

### **3. “Learn from the Pros” Section**
- Grid layout of four instructors with profile photos and captions.
- Flex alignment for consistent spacing.

### **4. Testimonial Section**
- Center-aligned quote block with image, name, and role.

### **5. Tutorials Section**
- Four tutorial cards with images, ratings, and author info.
- Consistent card design using flex or grid.
- Font Awesome stars for ratings.

### **6. Free Membership Section**
- Four feature icons (smile.svg) with text.
- Secondary CTA button for registration.

### **7. FAQ Section**
- Two-column layout of questions and answers.
- Clean typography and spacing for readability.

### **8. Footer**
- Logo and social media icons (Facebook, Twitter, Instagram).
- Copyright.

---

## 🧰 Technologies Used
- **HTML5** for semantic page structure.
- **CSS3** for layout, styling, and animations.
- **Font Awesome** for icons.
- **Google Fonts** (Source Sans Pro & Spin Cycle OT).




## 🧾 Task 1 — Import the Style
Before implementing any styles, a new CSS file was created and imported into the project.

### ✅ Steps Completed:
1. **Created the CSS file:**
   ```bash
   touch styles.css
Linked the CSS file in index.html:

html
Copy code
<link rel="stylesheet" href="styles.css">
Verified the import by testing a simple rule:

css
Copy code
body {
  background-color: lightgray;
}
✅ Verification:
The CSS file loads correctly in the browser.

The background color changes when testing, confirming a successful import.

🧰 Technologies Used
HTML5 — Semantic markup and structure.

CSS3 — Styling, layout, and responsiveness.

Font Awesome — Icons and symbols.

Google Fonts — Typography (Source Sans Pro, Spin Cycle OT).

💡 Features to Implement
Responsive header and navigation bar.

Hero section with headline and call-to-action button.

Instructor profiles using Flexbox.

Testimonial and tutorial card layouts.

Free membership section with icons.

FAQ grid layout.

Footer with social media icons.



✅ index.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <title>SmileSchool</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <!-- =========================
       HEADER SECTION
  ========================== -->
  <header>
    <a href="#" class="logo">SmileSchool</a>
    <nav>
      <ul>
        <li><a href="#">COURSES</a></li>
        <li><a href="#">PRICING</a></li>
        <li><a href="#">LOGIN</a></li>
      </ul>
    </nav>
  </header>

  <!-- =========================
       HERO / BANNER SECTION
  ========================== -->
  <section class="hero" style="background-image: url('images/banner-bg.jpg');">
    <div class="hero-content">
      <h1>Get schooled</h1>
      <div class="tagline">
        <span>SMILES</span>
        <span>GRIN</span>
        <span>LAUGH</span>
      </div>
      <button class="cta">REGISTER FOR FREE</button>
    </div>

    <!-- =========================
         "LEARN FROM THE PROS"
    ========================== -->
    <div class="learn">
      <h2>Learn from the pros</h2>
      <div class="pros">
        <div class="pro">
          <img src="images/phillip-massey.jpg" alt="Phillip Massey">
          <h3>Phillip Massey</h3>
          <p>&laquo; Smile of the year &raquo; 2018 - 2019</p>
        </div>
        <div class="pro">
          <img src="images/nannie-lawrence.jpg" alt="Nannie Lawrence">
          <h3>Nannie Lawrence</h3>
          <p>&laquo; Best little smile &raquo; 2017</p>
        </div>
        <div class="pro">
          <img src="images/bruce-walters.jpg" alt="Bruce Walters">
          <h3>Bruce Walters</h3>
          <p>&laquo; Best friend smile &raquo; live performance 2019</p>
        </div>
        <div class="pro">
          <img src="images/henry-hughes.jpg" alt="Henry Hughes">
          <h3>Henry Hughes</h3>
          <p>&laquo; 24h smiles &raquo; winner 2016 - 2019</p>
        </div>
      </div>
    </div>
  </section>

</body>
</html>

🖼️ Folder Structure

Make sure your folder looks like this:

alx_html_css/
└── css_advanced/
    ├── index.html
    ├── styles.css
    └── images/
        ├── banner-bg.jpg
        ├── phillip-massey.jpg
        ├── nannie-lawrence.jpg
        ├── bruce-walters.jpg
        └── henry-hughes.jpg


# 🎓 Educational Tutorials Website

A modern, responsive, and elegant website built with **HTML5**, **CSS3**, and **JavaScript** — designed for an educational platform offering tutorials, membership benefits, and an interactive FAQ section.

---

## 🚀 Features

### 🏆 Most Popular Tutorials
A clean and dynamic tutorial section displaying top video tutorials with:
- Course thumbnail images  
- Author details  
- Star ratings  
- Duration tags  
- Hover effects and smooth animations  

### 💜 Free Membership
A beautifully styled dark-themed section that encourages users to register for free:
- Four feature cards with glowing icons  
- Modern purple gradient button  
- Fully responsive layout  

### 💬 F.A.Q. Section
An interactive **accordion-based FAQ** section:
- Smooth open/close animations  
- Auto-close feature for other questions  
- Minimal and elegant typography  
- Responsive grid layout  

---

## 🧱 Folder Structure



project-root/
│
├── index.html
├── styles.css
└── images/
├── Diagonal-Smile.png
├── Natural-Smile.png
├── Happy-Smile.png
├── Sad-Smile.png
├── smile.svg
└── play.png





# SmileSchool Footer

A simple and elegant footer section designed to match the **SmileSchool** branding.  
This footer includes a logo, social media icons, and a copyright notice, styled with a modern dark theme.

---

## 🧩 Features

- Dark navy background with centered layout  
- Left-aligned logo and right-aligned social icons  
- Responsive design for mobile devices  
- Font Awesome icons for social links  
- Clean, minimalist typography  

---

## 📸 Preview

![Footer Preview](./images/footer-preview.png)

---

## 🧱 HTML Structure

```html
<footer>
  <section>
    <div>
      <img src="./images/logo.png" alt="logo">
      <div>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-instagram"></i>
      </div>
    </div>
    <p>©smileschool 2020</p>
  </section>
</footer>





🧑‍💻 Author

Sylvester Kormla Nyadzinnor
🎓 Front-End Developer (ALX Pro)
💼 GitHub Profile

🌍 Passionate about building clean, responsive, and accessible user interfaces.

🪪 License

This project is part of the ALX Software Engineering Program and follows its academic and collaboration guidelines.
© SmileSchool Project — 2025.