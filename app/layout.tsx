import type { Metadata } from "next";
import { Lora } from "next/font/google";
import { Gradient } from "./components/gradient";
import { Navbar } from "./components/nav";
import { Footer } from "./components/footer";
import "./globals.css";

const lora = Lora({
	variable: "--font-lora",
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"]
});

export const metadata: Metadata = {
	title: "amanda yap",
	description: "amanda yap",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={lora.variable}>
			<body className="max-w-3xl mx-4 mt-8 lg:mx-auto">
				<main className="flex-auto mt-6 flex flex-col px-2">
					<Gradient />
					<Navbar />
					{children}
					<Footer />
				</main>
			</body>
		</html>
	);
}