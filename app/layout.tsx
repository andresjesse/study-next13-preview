/* eslint-disable @next/next/no-head-element */

import Nav from "../components/Nav";

import "./global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
