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
		default: "SOCMA Empilhadeiras Laterais | Projetadas para Manuseio Preciso de Materiais",
		template: "SOCMA Empilhadeiras Laterais"	
	},
	description: "SOCMA, um fabricante confiável de empilhadeiras laterais na China, se especializa em empilhadeiras laterais projetadas para instalações de armazenamento que manipulam aço, tubos, extrusões de PVC e painéis de madeira. Nossas empilhadeiras oferecem eficiência e segurança para indústrias em todo o mundo.",
	openGraph: {
		title: "SOCMA Empilhadeiras Laterais | Projetadas para Manuseio Preciso de Materiais",		
		description: "SOCMA, um fabricante confiável de empilhadeiras laterais na China, se especializa em empilhadeiras laterais projetadas para instalações de armazenamento que manipulam aço, tubos, extrusões de PVC e painéis de madeira. Nossas empilhadeiras oferecem eficiência e segurança para indústrias em todo o mundo.",
		images: [
			{
				url: "/opengraph-image.png",
				width: 1200,
				height: 630,
				alt: "SOCMA Empilhadeiras Laterais"
			}
		],
		locale: "pt_PT",
		type: "website"
	},
	twitter: {
		card: "summary_large_image",
		title: {
			default: "SOCMA Empilhadeiras Laterais",
			template: "SOCMA Empilhadeiras Laterais"
		},
		description: "SOCMA, um fabricante confiável de empilhadeiras laterais na China, se especializa em empilhadeiras laterais projetadas para instalações de armazenamento que manipulam aço, tubos, extrusões de PVC e painéis de madeira. Nossas empilhadeiras oferecem eficiência e segurança para indústrias em todo o mundo.",
		images: [
			{
				url: "/opengraph-image.png",
				alt: "SOCMA Empilhadeiras Laterais"
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
