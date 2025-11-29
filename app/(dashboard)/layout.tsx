import type { Metadata } from "next";
import "../globals.css";
import Link from "next/link";
import Menu from "../../components/sidebar-menu/Menu";
import Navbar from "../../components/navbar/Navbar";

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
        <Menu />
      </div>
      <div className="w-5/6 md:w-9/10 lg:w-5/6 bg-slate-50">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
