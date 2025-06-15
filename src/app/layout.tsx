import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { homePath, ticketsPath } from "@/paths";
import { Button } from "@/components/ui/button";
import { Kanban, LucideKanban, RocketIcon } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tickets app",
  description: "This is a tickets bounty app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav
          className="fixed top-0 left-0 right-0 z-20 
          flex justify-between items-center gap-2 
          px-5 py-2.5 w-full border-b 
          backdrop-blur bg-background/25 
          supports-[backdrop-blur]:bg-background/60"
        >
          <div>
            <Button asChild variant={"ghost"} size={"lg"}>
              <Link href={homePath()}>
                <Kanban className="size-8" />
                <h1 className="font-semibold text-lg lg">TicketBounty</h1>
              </Link>
            </Button>
          </div>
          <div>
            <Button asChild variant={"default"}>
              <Link href={ticketsPath()}>Tickets</Link>
            </Button>
          </div>
        </nav>
        <main className="min-h-screen flex-1 overflow-y-auto overflow-x-hidden py-24 px-8 bg-secondary/20 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
