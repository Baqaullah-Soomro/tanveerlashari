import "@/styles/globals.css";
import React from "react";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { DevtoolsProvider } from 'creatr-devtools';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1
};
export const metadata: Metadata = {
  title: {
    default: "Tanveer Lashari | Portfolio",
    template: "%s | Tanveer Lashari"
  },
  description: "Portfolio of Tanveer Lashari - Library and Information Science Graduate from the University of Sindh",
  applicationName: "Tanveer Lashari Portfolio",
  keywords: ["tanveer lashari", "library science", "portfolio", "information science", "university of sindh", "koha", "library management"],
  authors: [{
    name: "Tanveer Lashari"
  }],
  creator: "Tanveer Lashari",
  publisher: "Tanveer Lashari",
  icons: {
    icon: [{
      url: "/favicon-16x16.png",
      sizes: "16x16",
      type: "image/png"
    }, {
      url: "/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png"
    }, {
      url: "/favicon.ico",
      sizes: "48x48",
      type: "image/x-icon"
    }],
    apple: [{
      url: "/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png"
    }]
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Tanveer Lashari"
  },
  formatDetection: {
    telephone: false
  }
};
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <html lang="en" className={`${GeistSans.variable} scroll-smooth`} data-unique-id="e17eef96-e96a-4acb-b57d-110a8e0f2f34" data-file-name="app/layout.tsx">
      <body data-unique-id="ceb6e958-8002-4170-9345-468db91c627c" data-file-name="app/layout.tsx">
        <DevtoolsProvider>
          <Navbar />
          {children}
          <Footer />
        </DevtoolsProvider>
      </body>
    </html>;
}