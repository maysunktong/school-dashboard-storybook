import type { Metadata } from "next";
import "../globals.css";
import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";
import SidebarMenu from "@/components/sidebar-menu/SidebarMenu";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard description",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex">
      <div className="w-1/6 md:w-1/10 lg:w-1/6">
        <Link href="/">Logo</Link>
        <SidebarMenu />
      </div>
      <div className="w-5/6 md:w-9/10 lg:w-5/6 bg-slate-50">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
