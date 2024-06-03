# Photolabs Project
PhotoLabs is a React-based single-page application (SPA) designed to provide users with an interactive experience for viewing photos in various contexts. The project involves building a client-side application using React, integrated with a backend consisting of a Node Express.js server and a PostgreSQL database. Users can browse photos from the homepage, navigate through different photo categories, view larger versions of photos along with similar images, and like photos, which are indicated by a heart icon in the navigation bar. The application communicates with the API server over HTTP using JSON, with mock data used during initial development before API integration. Technical implementation includes tools like Create React App, Webpack, Babel, and Express. The goal is to create a seamless and engaging user experience for interacting with stock photos.

## Setup

Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

## [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

## [Backend] Running Backend Servier

Read `backend/readme` for further setup details.

```sh
cd backend
npm start
```

## Screenshots

<b>Main Screen</b>

!["Main Screen"](https://github.com/TrevorJohnSullivan/photoLabs/blob/main/docs/mainscreenshot.png)

<b>Modal Open</b>

!["Modal Open"](https://github.com/TrevorJohnSullivan/photoLabs/blob/main/docs/modalscreenshot.png)

<b>Similar Photos</b>

!["Similar Photos"](https://github.com/TrevorJohnSullivan/photoLabs/blob/main/docs/similarphotosscreenshot.png)