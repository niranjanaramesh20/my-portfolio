# My Portfolio

Personal portfolio site built with React and Vite. The site presents a terminal inspired single page layout with sections for an intro, projects, interests, contact links, and a downloadable resume.

## Tech Stack

- React
- Vite
- CSS
- React Icons

## Sections

- `Home`: intro, role tags, and social links
- `Projects`: featured work including bare-metal and web projects
- `Interests`: personal and technical interests
- `Contact`: email, GitHub, LinkedIn, and resume link

## Getting Started

### Prerequisites

- Node.js
- npm

### Install

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Open the local Vite URL shown in the terminal.

## Available Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## Project Structure

```text
.
├── public/
│   └── niranjana.pdf
├── src/
│   ├── components/
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Home.jsx
│   │   ├── Interests.jsx
│   │   ├── Navbar.jsx
│   │   └── Projects.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Customization

To adapt this portfolio for another person:

- Update the text and links in `src/components/`
- Replace `public/niranjana.pdf` with a new resume file
- Adjust styles in the component-level CSS files

## Build

```bash
npm run build
```
