import Footer from "@/components/footer";
import Header from "@/components/Header";
import AboutSection from "@/components/Section/About";
import Project from "@/components/Section/Projects";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";

export default function Home() {
	return (
		<>
			<Header />

			<section className="h-full w-full  bg-black  bg-grid-white/[0.1] relative flex items-center justify-center">
				<div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
				<AboutSection />
			</section>

			<Project />

			<Footer />
		</>
	);
}
