import {
	IconBrandGithub,
	IconBrandInstagram,
	IconBrandLinkedin,
	IconMapPin,
	IconPlus,
	IconRosetteDiscountCheckFilled,
} from "@tabler/icons-react";
import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const H2 = Plus_Jakarta_Sans({ weight: "700", display: "swap", subsets: ["latin"] });
const P = Plus_Jakarta_Sans({ weight: "500", display: "swap", subsets: ["latin"] });

const AboutPage = () => {
	return (
		<>
			<header className="w-8/12 mx-auto">
				<div className="bg-gradient-to-b from-cyan-800 to-black w-full text-center py-14 rounded-3xl relative">
					<h1 className="font-black text-8xl tracking-widest text-black">ABOUT PAGE</h1>
					<div className="absolute top-5 right-5">
						<div className="flex items-center justify-end gap-5">
							<IconPlus
								stroke={3}
								className="animate-spin text-black"
							/>
							<IconPlus
								stroke={3}
								className="animate-spin text-black"
							/>
							<IconPlus
								stroke={3}
								className="animate-spin text-black"
							/>
						</div>
					</div>
				</div>
			</header>
			{/* Photos */}
			<div className="relative left-5 -top-10 w-8/12 mx-auto text-center">
				<div className="w-48 h-48 text-center">
					<Image
						src={"/images/img_01.jpg"}
						alt="Photo of Mikael Aditya Nugroho"
						width={200}
						height={200}
						className="w-full h-full object-cover rounded-3xl border border-white"
					/>
					<h2 className="text-2xl font-semibold mt-2 flex items-center justify-center gap-2">
						Mikael{" "}
						<IconRosetteDiscountCheckFilled
							size={22}
							className="text-blue-600"
						/>
					</h2>
				</div>
			</div>

			<section className="relative w-8/12 mx-auto top-10">
				<h3 className="font-semibold text-lg">Fullstack Developer | Backend Developer</h3>
				<h5 className="flex items-center text-cyan-100 font-semibold justify-start gap-1 mt-2 mb-5">
					<IconMapPin size={18} /> Gresik, Indonesia
				</h5>

				<div className="w-7/12 grid grid-cols-3 gap-5">
					<Link
						href={"https://instagram.com/mikaeladityan"}
						className={`flex relative items-center justify-center gap-1 w-full px-3 py-2 rounded-xl border border-white text-white ${P.className}`}
					>
						<IconBrandInstagram size={22} /> @mikaeladityan
					</Link>

					<Link
						href={"https://id.linkedin.com/in/mikaeladityan"}
						className={`flex relative items-center justify-center gap-1 w-full px-3 py-2 rounded-xl border border-white text-white ${P.className}`}
					>
						<IconBrandLinkedin size={22} /> mikaeladityann
					</Link>

					<Link
						href={"https://github.com/mikaeladityan"}
						className={`flex relative items-center justify-center gap-1 w-full px-3 py-2 rounded-xl border border-white text-white ${P.className}`}
					>
						<IconBrandGithub size={22} /> mikaeladityan
					</Link>
				</div>
			</section>

			<main className="relative w-8/12 mx-auto h-screen border border-white/20 rounded-3xl mt-20 px-14 pt-20 top-10">
				<div className="absolute -top-4 left-10">
					<div className="px-5 py-2 rounded-full bg-stone-700 text-stone-400 text-[11px] font-bold">ABOUT</div>
				</div>
				<div className="h-full w-full bg-black  bg-grid-white/[0.1] relative">
					{/* Radial gradient for the container to give a faded look */}
					<div className="absolute pointer-events-none inset-0 z-10 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
					<article className="relative !z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
						<h1 className={`${H2.className} text-2xl`}>Hi, welcome to my page! 🤟</h1>
						<p className={`${P.className} mt-5`}>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci veritatis odit facere iusto doloremque
							eligendi fuga necessitatibus sit veniam magnam, iste, ut dignissimos sequi incidunt at. Ullam placeat
							suscipit earum.
						</p>
					</article>
				</div>
			</main>
		</>
		// <div className="w-full h-[40rem] flex items-center justify-center">
		// 	<div>
		// 		<h1 className="text-center">{"I'm"} so sorry This Page is Updating...</h1>
		// 		<Link
		// 			href={"/"}
		// 			className="flex items-center justify-start gap-1"
		// 		>
		// 			{" "}
		// 			<IconArrowBarLeft />
		// 			{" Back"}
		// 		</Link>
		// 	</div>
		// </div>
	);
};

export default AboutPage;
