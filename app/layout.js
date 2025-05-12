import ScrollToTop from "@/components/widgets/scroll-to-top";
import Navbar from "@/components/features/navbar";
import Footer from "@/components/features/footer";
import { Toaster } from "@/components/ui/sonner";
import CTA from "@/components/features/cta";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const runtime = "edge";

export const metadata = {
	title: {
		default: "SOCMA Side Loader Forklifts | Engineered for Precision Material Handling",
		template: "SOCMA Side Loader Forklifts"	
	},
	description: "SOCMA, a trusted side loader forklift manufacturer in China, specializes in side loading forklifts designed for stockholding facilities handling steel, tubes, PVC extrusions, and wooden boards. Our forklifts deliver efficiency and safety for industries worldwide.",
	openGraph: {
		title: "SOCMA Side Loader Forklifts | Engineered for Precision Material Handling",		
		description: "SOCMA, a trusted side loader forklift manufacturer in China, specializes in side loading forklifts designed for stockholding facilities handling steel, tubes, PVC extrusions, and wooden boards. Our forklifts deliver efficiency and safety for industries worldwide.",
		images: [
			{
				url: "/opengraph-image.png",
				width: 1200,
				height: 630,
				alt: "SOCMA Side Loader Forklifts"
			}
		],
		locale: "en_US",
		type: "website"
	},
	twitter: {
		card: "summary_large_image",
		title: {
			default: "SOCMA Side Loader Forklifts",
			template: "SOCMA Side Loader Forklifts"
		},
		description: "SOCMA, a trusted side loader forklift manufacturer in China, specializes in side loading forklifts designed for stockholding facilities handling steel, tubes, PVC extrusions, and wooden boards. Our forklifts deliver efficiency and safety for industries worldwide.",
		images: [
			{
				url: "/opengraph-image.png",
				alt: "SOCMA Side Loader Forklifts"
			}
		]
	}
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				{children}
				<CTA />
				<Footer />
				<ScrollToTop />
				<Toaster richColors position="top-right" />
			</body>
		</html>
	);
}
