"use client";
import AppLayouts from "@/components/layouts/App-layouts";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<AppLayouts>
			<Head>
				<link
					rel="shortcut icon"
					href="/favicon.ico"
					type="image/x-icon"
				/>
				<title>Mikael Aditya Nugroho</title>
			</Head>
			<Navbar />

			<Component {...pageProps} />
		</AppLayouts>
	);
}
