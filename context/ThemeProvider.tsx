"use client";
import React, { createContext, useState } from "react";

const ThemeContext = createContext("light");

export default function ThemeProvider ({ 
    children,
  }: {
    children: React.ReactNode;
  }) {
    const [theme, setTheme] = useState("dark");
    return (
      <ThemeContext.Provider value={theme}>
        {children}
      </ThemeContext.Provider>
    )
  }