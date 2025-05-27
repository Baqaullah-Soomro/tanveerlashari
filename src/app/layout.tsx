import "@/styles/globals.css";
import React from "react";
import { Inter, Poppins } from "next/font/google";
import { type Metadata } from "next";
import { DevtoolsProvider } from 'creatr-devtools';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true
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
// Font setup
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});
const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins'
});
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <html lang="en" className={`${inter.variable} ${poppins.variable} scroll-smooth`} data-unique-id="1fcb48e4-5916-43f7-86c3-e2af6a98a7a2" data-file-name="app/layout.tsx">
      <body data-unique-id="06df9d42-a808-4892-978f-50cb714a45ae" data-file-name="app/layout.tsx">
        <DevtoolsProvider>
          <Navbar />
          {children}
          <Footer />
        </DevtoolsProvider>
      </body>
    </html>;
}