import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppProvider } from "core/providers";
import {App, AppHeader, AppMain, AppMenu, AppWrapper} from "core/components/layouts/app";
import { AppSidebar } from "core/components/layouts/app/app";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "App Boilerplate",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
          <App>
            <AppHeader>
              <div className="logo">a</div>
            </AppHeader>
            <AppWrapper>
              <AppMenu>
                menu bar
              </AppMenu>
              <AppMain>{children}</AppMain>
              <AppSidebar className="invisible">sidebar</AppSidebar>
            </AppWrapper>
          </App>
        </AppProvider>
      </body>
    </html>
  );
}
