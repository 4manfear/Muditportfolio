import React from "react";
import "./globals.css";
import Head from "next/head";




export const metadata = {
  title: "Mudit Mamodia portfolio website",
  description: "portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"/>
        <link rel="icon" type="image/jpg" href="./imgs/icon_of_web.jpg" />
    </head>
    <body>{children}</body>
  </html>
  );
}

