import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SymptomSync – Track Symptoms & Work Productivity",
  description: "Correlate daily symptoms with productivity metrics, identify patterns, and optimize your work schedule around your health."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="71b604ef-07b8-410d-b325-ad6ff5dbca8c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
