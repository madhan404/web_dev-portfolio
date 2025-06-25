# Madhanraj S - Portfolio

A modern, responsive portfolio website with a space theme and green glow effects. Built with HTML, CSS, and JavaScript.

## Features

- 🌌 Space-themed design with animated stars
- 💚 Green glow effects on interactive elements
- 🌓 Light/Dark mode toggle
- 📱 Fully responsive design
- ⚡ Smooth animations and transitions
- 📝 Contact form (frontend only - needs backend integration)

## Technologies Used

- HTML5
- CSS3 (with CSS Variables for theming)
- JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts (Poppins)

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code, Sublime Text, etc.)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/madhan404/portfolio.git
   cd portfolio
   ```

2. Open `index.html` in your preferred web browser.

## Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── css/                # CSS styles
│   ├── style.css       # Base styles and variables
│   ├── style2.css      # About and Skills sections
│   ├── style3.css      # Projects and Experience sections
│   └── style4.css      # Contact, Footer, and responsive styles
├── js/
│   └── main.js        # Main JavaScript file
└── README.md           # This file
```

## Customization

### Colors

You can customize the color scheme by modifying the CSS variables in `css/style.css`:

```css
:root {
    --bg-color: #0a0e17;
    --bg-secondary: #0f1624;
    --text-color: #e6f1ff;
    --text-secondary: #8892b0;
    --primary-color: #64ffda;  /* Green accent color */
    --primary-dark: #52dbb7;
    --accent-color: #1e90ff;
    /* ... */
}
```

### Content

Update the following sections in `index.html` with your personal information:

1. Hero section (name, title, description)
2. About section (bio, personal info)
3. Skills section (skills and proficiency levels)
4. Projects section (your projects with descriptions and links)
5. Experience section (work experience and education)
6. Contact section (contact information and social media links)

## Adding Projects

To add a new project, copy and paste the following template inside the `projects__container` div:

```html
<div class="project__card">
    <div class="project__image">
        <img src="path/to/project-image.jpg" alt="Project Name">
    </div>
    <div class="project__content">
        <h3 class="project__title">Project Name</h3>
        <p class="project__description">
            A brief description of your project goes here. 
            Highlight the key features and technologies used.
        </p>
        <div class="project__tech">
            <span>HTML</span>
            <span>CSS</n            <span>JavaScript</span>
        </div>
        <div class="project__links">
            <a href="#" class="btn btn--small">Live Demo</a>
            <a href="#" class="btn btn--small btn--outline">Source Code</a>
        </div>
    </div>
</div>
```

## Adding Experience

To add a new experience or education item, use the following template inside the `timeline` div:

```html
<div class="timeline__item">
    <div class="timeline__header">
        <h3 class="timeline__title">Job Title / Degree</h3>
        <span class="timeline__period">Year - Year</span>
    </div>
    <div class="timeline__content">
        <h4 class="timeline__subtitle">Company / Institution Name</h4>
        <p class="timeline__description">
            • Description of your role or achievements
            • Another point about your experience
            • Any other relevant information
        </p>
    </div>
    <div class="timeline__dot"></div>
</div>
```

## Deploying Your Portfolio

### GitHub Pages

1. Create a new repository on GitHub
2. Push your code to the repository
3. Go to Settings > Pages
4. Select the main branch and click Save
5. Your portfolio will be live at `https://<username>.github.io/<repository-name>`

### Netlify

1. Sign up for a Netlify account
2. Drag and drop your project folder to the Netlify dashboard
3. Your site will be deployed automatically

## Browser Support

This portfolio is built with modern web standards and works best in the latest versions of:

- Google Chrome
- Mozilla Firefox
- Safari
- Microsoft Edge

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [Font Awesome](https://fontawesome.com/) for icons
- [Google Fonts](https://fonts.google.com/) for the Poppins font
- Inspiration from various portfolio designs

## Contact

Madhanraj S - madhanrajs047@gmail.com

Project Link: [https://github.com/madhan404/web_dev-portfolio](https://github.com/madhan404/web_dev-portfolio)
Live preview: [https://portfolio-contact-4ca82.web.app/](https://portfolio-contact-4ca82.web.app/)
