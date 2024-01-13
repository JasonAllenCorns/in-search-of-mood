"use client";

import ThemeProvider from "./ThemeProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      {/* Import and wrap other providers this way */}
      {children}
    </ThemeProvider>
  );
}
