import type { Metadata } from "next";
import { ClerkProvider} from "@clerk/nextjs";
import Navbar from "./components/navigation/Navbar";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "Welcome to the app",
  description: "Explore the app and manage your account.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <ClerkProvider>
          <main className="content">{children}</main>
          <Navbar />
          
          <Toaster position="bottom-right" richColors />
        </ClerkProvider>
      </body>
    </html>
  );
}
