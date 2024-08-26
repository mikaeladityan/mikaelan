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

const H2 = Plus_Jakarta_Sans({ weight: "600", display: "swap", subsets: ["latin"] });

const AboutPage = () => {
	return (
		<>
			<header className="w-11/12 mx-auto">
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
			<div className="relative left-20 -top-20 w-full text-center">
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

			<section className="relative w-11/12 mx-auto">
				<h3 className="font-semibold text-lg">Fullstack Developer | Backend Developer</h3>
				<h5 className="flex items-center text-cyan-100 font-semibold justify-start gap-1 mt-2 mb-5">
					<IconMapPin size={18} /> Gresik, Indonesia
				</h5>

				<div className="w-5/12 grid grid-cols-3 gap-5">
					<Link
						href={"https://instagram.com/mikaeladityan"}
						className="flex relative items-center justify-center gap-1 w-full px-3 py-2 rounded-xl border border-white text-white"
					>
						<IconBrandInstagram size={22} /> @mikaeladityan
					</Link>

					<Link
						href={"https://id.linkedin.com/in/mikaeladityan"}
						className="flex relative items-center justify-center gap-1 w-full px-3 py-2 rounded-xl border border-white text-white"
					>
						<IconBrandLinkedin size={22} /> mikaeladityann
					</Link>

					<Link
						href={"https://github.com/mikaeladityan"}
						className="flex relative items-center justify-center gap-1 w-full px-3 py-2 rounded-xl border border-white text-white"
					>
						<IconBrandGithub size={22} /> mikaeladityan
					</Link>
				</div>
			</section>

			<main className="relative w-11/12 mx-auto h-screen border border-white/20 rounded-3xl mt-20 px-14 pt-20">
				<div className="absolute -top-4 left-10">
					<div className="px-5 py-2 rounded-full bg-stone-700 text-stone-400 text-[11px] font-bold">ABOUT</div>
				</div>
				<article>
					<h1 className={`${H2.className} text-2xl`}>Hi, welcome to my page! 🤟</h1>
				</article>
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
