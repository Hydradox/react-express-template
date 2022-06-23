<!-- [![Issues][issues-shield]][issues-url] -->

# React + Express template <!-- omit in toc -->

## Table of contents: <!-- omit in toc -->
- [🌟 Features](#-features)
- [🌍 Project description](#-project-description)
- [🥇 Prerequisites](#-prerequisites)
- [🔰 Instalation](#-instalation)
- [🚥 Getting started](#-getting-started)
- [🔮 Roadmap](#-roadmap)
- [🕷 Bugs to solve](#-bugs-to-solve)
  - [⚠️ Critical](#️-critical)
  - [🟩 Other bugs](#-other-bugs)
- [📫 Contact](#-contact)


## 🌟 Features

- ES6 Modules
- React project based on Create React App
- React Router


## 🌍 Project description

This is a project template for a server which runs React as frontend framework (with a
proxy for development and static build files for production), and NodeJS with Express
for the backend.

**The project was made in NodeJS v18, so the import of the JSON config files could be
diffent depending on your version.**

## 🥇 Prerequisites

- [NodeJS](https://nodejs.org/)
- [Node Package Manager (NPM)](https://www.npmjs.com/)


<!-- GETTING STARTED -->
## 🔰 Instalation

To install this repository, you should clone or download it:
```sh
git clone https://github.com/Hydradox/warehouse.git
```

## 🚥 Getting started

To start, you need to download the dependencies (both for the Node and React servers):
```sh
# Open a console in the root folder of the project and install
# the dependencies of the Node server
npm install

# Go to the React project and install it's dependencies
cd react
npm install
```

To get the application running for development, you need two console instances
(1 for each server):
```sh
# To run Node server
npm run dev

# To run React server with proxy to Node:
# Open console in react directory and run:
npm run start
```

To get the application running for production, you need to build the frontend:
```sh
# From either directory, just run:
npm run build

# And run the server for production in root directory:
npm run start
```

In either mode, you should be able to access the HTTP server from port 3000,
like [http://localhost:3000](http://localhost:3000)


<!-- ROADMAP -->
## 🔮 Roadmap

  - [ ] Next objective

## 🕷 Bugs to solve

### ⚠️ Critical

  - [ ] Important bug

### 🟩 Other bugs

 - [ ] Less important bug

<!-- CONTACT -->
## 📫 Contact

Email - [jaimec326@gmail.com](mailto:jaimec326@gmail.com)