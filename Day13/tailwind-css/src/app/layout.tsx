"use client";
import { ThemeProvider } from "@emotion/react";
import "./globals.css";
import { theme } from "@/theme/theme";
import { CssBaseline } from "@mui/material";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-amber-100">
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
