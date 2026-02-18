---
title: "Getting Started with React"
description: "Learn the basics of React and how to set up your first project"
date: "2025-03-15"
slug: "getting-started-with-react"
---

# Getting Started with React

React is a powerful JavaScript library for building user interfaces, especially for single-page applications. In this guide, we'll walk through the basics of setting up your first React project.

## What is React?

React was created by Facebook (now Meta) and is now maintained by the community. It allows you to build complex UIs from small, reusable pieces called components.

## Prerequisites

Before you start, make sure you have:
- Node.js installed on your computer
- A basic understanding of HTML, CSS, and JavaScript
- A code editor (VS Code is recommended)

## Setting Up Your First React Project

The easiest way to create a new React project is using Create React App:

```bash
npx create-react-app my-first-app
cd my-first-app
npm start
```

This will create a new React application and start the development server. You should see your app running at `http://localhost:3000`.

## Understanding Components

In React, everything is a component. A component is a JavaScript function that returns HTML:

```jsx
function Welcome() {
  return <h1>Hello, World!</h1>;
}
```

## JSX

JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. It makes your code more readable and easier to write.

## State and Props

- **State**: Data that belongs to a component and can change over time
- **Props**: Data passed down from parent components

## Next Steps

Now that you have a basic understanding of React, you can:
1. Learn about hooks (useState, useEffect)
2. Explore component lifecycle
3. Build more complex applications
4. Learn about routing with React Router

Happy coding! 🚀
