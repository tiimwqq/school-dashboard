import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Link from "next/link";
import Image from "next/image";
import Menu from "../components/menu";
import NavBar from "../components/navBar";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="h-screen flex">
				{/* left */}
				<div className="w-[14%] md:w-[9%] lg:w-[16%] xl:w-[14%] p-4">
					<Link href='/' className="flex items-center justify-center gap-2 lg:justify-start">
						<Image src='/logo.png' alt='logo' width={32} height={32} />
						<span className="hidden lg:block font-semibold">SchoolDashboard</span>
					</Link>
					<Menu/>
				</div>
				{/* right */}
				<div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col">
					<NavBar/>
					{children}
				</div>
		</div>
			
	);
}
