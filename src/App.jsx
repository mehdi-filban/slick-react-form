import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import AuthForm from "./AuthForm.jsx";
import ThemeToggle from "./ThemeToggle.jsx";

function App() {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <ThemeToggle />
      <AuthForm />
    </div>
  );
}

export default App;