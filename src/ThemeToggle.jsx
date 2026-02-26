import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./themeSlice";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="fixed top-4 right-4 z-50 p-3 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
      aria-label="Toggle theme"
    >
      <span className="text-xl transform group-hover:scale-110 inline-block transition-transform duration-300">
        {isDarkMode ? '☀️' : '🌙'}
      </span>
    </button>
  );
};

export default ThemeToggle;