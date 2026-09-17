# MovieExplorer

A modern, responsive web application to discover and explore movies and TV shows from around the world. Built with React and powered by the TVMaze API.


## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [API Integration](#api-integration)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Responsive Design](#responsive-design)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

##  About the Project

**MovieExplorer** is a single-page application (SPA) that allows users to browse, search, and view detailed information about movies and TV shows. It leverages the free **TVMaze API** to fetch real-time data, providing an engaging and seamless user experience.

The project is designed with a mobile-first approach, ensuring a fully responsive layout that works flawlessly on desktops, tablets, and mobile devices.

##  Features

### 1. Home Page (Landing Page)
- **Navbar**: Displays the application logo/brand name and a prominent button to navigate to the Movie Listing Page.
- **Hero Banner**: A visually attractive section with a movie-related background, an engaging title/description, and a Call-To-Action (CTA) button.
- **Footer**: Contains the application name and copyright information.

### 2. Movie Listing Page
- **Search Functionality**: A prominent search bar to search for movies by title. The movie grid updates dynamically as the user types.
- **Movie Cards**: Displays movies in a responsive grid layout. Each card includes:
  - Movie poster image
  - Movie title
  - Release year
  - Rating (e.g., 8.5)
  - A "See Details" button
- **All Shows**: Fetches and displays all available TV shows from the API.

### 3. Movie Details Modal
- Clicking the "See Details" button opens a modal overlay with in-depth information:
  - Large poster or backdrop image
  - Movie title
  - Overview/Summary
  - Rating and Release date
  - Additional info like genres
- **Interaction**: Closable via the ✕ button or by clicking outside the modal (on the backdrop).

### 4. Responsive Design
- **Mobile**: Single-column layout, stacked elements, and touch-friendly buttons.
- **Desktop**: 3-4+ column grid for movie cards with optimized spacing.

## Tech Stack

- **Core**: JavaScript, React
- **Styling**: CSS, BootStrap CSS
- **Data**: [TVMaze API](https://www.tvmaze.com/api) (Free Movie Database API)

## API Integration

The application fetches data from the following TVMaze API endpoints:

- **Search Shows**: `GET /search/shows?q=:query`
  - Example: `https://api.tvmaze.com/search/shows?q=girls`
- **All Shows**: `GET /shows`
  - Example: `https://api.tvmaze.com/shows`

##  Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Abid-tech/react_movieExplorer.git
