import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {SessionProvider} from "next-auth/react";
import {auth} from "@/auth";
import "./globals.css";
import {Toaster} from "sonner";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Next Auth App",
  description: "A simple authentication service",
  icons: {
    icon: "./favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en">
      <SessionProvider session={session}>
        <body className={inter.className}>
          <link rel="icon" href="./favicon.ico" sizes="any" />
          {children}
          <Toaster />
        </body>
      </SessionProvider>
    </html>
  );
}
