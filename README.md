# React Auth Form (Vite + Redux Toolkit)

A simple animated authentication UI built with **React**, **Vite**, and **Redux Toolkit**.  
The app toggles between **Sign In** and **Sign Up** forms using a Redux slice, with smooth transitions.

---

## ✨ Features

- Toggle between **Sign In** and **Sign Up** using Redux state
- Animated form transitions with CSS / utility classes
- Centralized global state using **Redux Toolkit**
- Fast development setup with **Vite**

---

## 🧱 Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Redux](https://react-redux.js.org/)
- Styling: utility-style classes (e.g. Tailwind-like classes such as `min-h-screen`, `flex`, etc.)

---

## 🗂 Project Structure

```bash
src/
  main.jsx        # Entry point, wraps App with Redux Provider
  App.jsx         # Root component, centers the auth form
  AuthForm.jsx    # Sign In / Sign Up UI and toggle logic
  store.js        # Redux store configuration
  formSlice.js    # Redux slice for form state (isSignInForm)
  index.css       # Global styles
