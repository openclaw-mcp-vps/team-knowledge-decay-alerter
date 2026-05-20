import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Team Knowledge Decay Alerter",
  description: "Alert when team knowledge becomes outdated. Monitor docs, code comments, and knowledge bases for staleness before it costs you."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="9a7129e4-4e02-4fae-9310-f7354a9fc186"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
