import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen overflow-hidden">
            <Navbar />
            <div className="w-full max-w-[1536px] mx-auto flex flex-grow overflow-hidden">
              <Sidebar />

              {/* Main Content Area */}
              <main className="w-full flex-grow overflow-y-auto px-6 py-4">
                {children}
              </main>
            </div>
            <footer className="w-full flex items-center justify-center py-3 border-t border-divider">
              <p className="text-xs text-default-400">© 2024 DevMemo Engine</p>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
