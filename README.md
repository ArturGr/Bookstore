# 📚 Bookstore UI - Data Persistence & DOM Study

![Bookstore Preview](https://repository-images.githubusercontent.com/1091052277/01fdaff7-1e78-449a-a384-b2682231644a)

**Bookstore** is a dynamic web application designed to browse and interact with a digital library. This was my first project where I implemented **Data Persistence**, allowing the application to remember user interactions even after a page reload.

## 🚀 Live Demo
👉 [View Bookstore Live](https://artur-groblicki.developerakademie.net/Bookstore/index.html)

## 🎯 Educational Goals
This project was a major turning point in my learning path, focusing on:
* **Local Storage Integration:** My first implementation of persistent data. I learned how to `setItem` and `getItem` to save the state of the application (e.g., likes, comments, or cart status) in the user's browser.
* **JSON Serialization:** Understanding how to use `JSON.stringify()` and `JSON.parse()` to store complex objects and arrays in a string-based storage.
* **Complex Data Mapping:** Handling nested data structures (titles, authors, prices, and reviews).
* **DOM Synchronization:** Ensuring that the UI correctly reflects the data stored in Local Storage immediately upon page load.

## ✨ Key Features
* **Persistent Interactions:** User actions (like adding a comment or a like) stay saved thanks to Local Storage.
* **Dynamic Content Rendering:** The book catalog is generated programmatically from a JavaScript data structure.
* **Review System:** A dedicated section for user feedback, showcasing how to handle multiple entries for a single item.
* **Responsive Book Grid:** A clean, mobile-friendly layout that adapts to any screen size.

## 🧠 Technical Challenges

### 1. Data Persistence Logic
The biggest challenge was creating a bridge between the JavaScript state and the browser's Local Storage. I had to ensure that every time a user modified the data, it was correctly saved and retrieved without losing information.

### 2. Handling the Initial Load
I implemented a check to see if data already exists in Local Storage. If it does, the app loads the saved version; otherwise, it initializes with the default dataset. This is a fundamental concept in modern web apps.

### 3. Layout Stability
Ensuring that dynamically injected content (like reviews of varying lengths) didn't break the visual grid was a great exercise in using CSS Flexbox and overflow management.

## 🛠️ Built With
* **JavaScript (ES6+):** Focusing on **Local Storage API**, JSON handling, and DOM manipulation.
* **HTML5:** Semantic structure for a professional bookstore feel.
* **CSS3:** Responsive Grid systems and polished typography.

---
**Author:** Artur Groblicki  
**Portfolio:** Working on it 🏗️
