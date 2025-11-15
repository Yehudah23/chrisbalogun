---
description: Repository Information Overview
alwaysApply: true
---

# Chris Balogun Portfolio Information

## Summary
This is a Vue.js-based personal portfolio website for Chris Balogun. The application features a responsive design with sections for About Me, CV, Publications, and an Admin panel for content management. The admin section allows authenticated administrators to upload and manage CV files and publications.

## Structure
- **public/**: Contains static assets and the HTML entry point
- **src/**: Main source code directory
  - **assets/**: Images and static resources
  - **components/**: Vue components (AboutMe, LogIn, MyCv, etc.)
  - **router/**: Vue Router configuration
  - **views/**: Page components (Home, Admin)
- **node_modules/**: Dependencies (not tracked in git)

## Language & Runtime
**Language**: JavaScript (Vue.js)
**Version**: Vue 3.2.13
**Build System**: Vue CLI (v5.0.0)
**Package Manager**: npm

## Dependencies
**Main Dependencies**:
- vue: ^3.2.13 - Progressive JavaScript framework
- vue-router: ^4.0.13 - Official router for Vue.js
- axios: ^1.11.0 - Promise-based HTTP client
- pinia: ^3.0.3 - State management for Vue
- vuelidate: ^0.7.7 - Form validation library
- core-js: ^3.8.3 - JavaScript polyfills

**Development Dependencies**:
- @vue/cli-service: ~5.0.0 - Development server and build tools
- @vue/cli-plugin-babel: ~5.0.0 - Babel integration
- @vue/cli-plugin-eslint: ~5.0.0 - ESLint integration
- eslint: ^7.32.0 - Linting utility
- @babel/core: ^7.12.16 - JavaScript compiler

## Build & Installation
```bash
# Install dependencies
npm install

# Serve with hot-reload for development
npm run serve

# Build for production
npm run build

# Lint and fix files
npm run lint
```

## Application Structure
**Entry Point**: src/main.js
**Main Component**: src/App.vue
**Routes**:
- / - Home page
- /about - About Me section
- /contact - Contact information
- /login - Authentication page
- /cv - CV display page
- /publications - Publications display page
- /admin - Admin panel (protected route)

## Features
- **Authentication**: User login with admin role verification
- **Admin Panel**: Protected route for administrators
- **File Management**: Upload and delete CV files and publications
- **API Integration**: Connects to a Laravel backend API (http://127.0.0.1:8000/api/)
- **Responsive Design**: Mobile-friendly layout
- **Social Media Integration**: GitHub, LinkedIn, and Contact Me buttons
- **User Profile Display**: Shows user name, initials, title, and bio
- **Scroll Navigation**: Smooth scrolling to different sections of the page

## Social Media & Profile Features
The application includes a social media component with:
- **Profile Display**: Shows user's name, initials, and professional title
- **Bio Section**: Displays user biography information
- **Social Links**:
  - GitHub profile link
  - LinkedIn profile link
  - Contact Me button
- **Navigation**: "Scroll Down" button for page navigation

## Backend Integration
The frontend connects to a Laravel backend API with endpoints for:
- Authentication
- CV management (upload, list, delete)
- Publications management (upload, list, delete)
- User profile data retrieval

API calls use axios with JWT token authentication stored in localStorage.