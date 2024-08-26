import { Meteors } from "@/components/ui/meteors";
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

			<main className="relative w-8/12 mx-auto border border-white/20 rounded-3xl mt-20 px-14 pt-20 top-10">
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

						<h2 className={`${H2.className} text-2xl mt-10`}>Certification 🌟</h2>
						<div className="mt-10 grid grid-cols-2 gap-10">
							<div className=" w-full relative max-w-full">
								<div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
								<div className="relative shadow-xl bg-black/70 border border-gray-500/50  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
									<div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="currentColor"
											className="h-2 w-2 text-gray-300"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
											/>
										</svg>
									</div>

									<h1 className="font-bold text-xl text-white mb-4 relative z-50">ECS Technical Essentials</h1>

									<Image
										src={"/certif/alibaba_ECS.png"}
										alt="Certification of Mikael"
										width={200}
										height={200}
										className="w-full h-full relative !z-[1]"
									/>
									<Meteors number={20} />
								</div>
							</div>

							<div className=" w-full relative max-w-full">
								<div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
								<div className="relative shadow-xl bg-black/70 border border-gray-500/50  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
									<div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="currentColor"
											className="h-2 w-2 text-gray-300"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
											/>
										</svg>
									</div>

									<h1 className="font-bold text-xl text-white mb-4 relative z-50">Construct a Dynamic Website</h1>

									<Image
										src={"/certif/cloud_computing.png"}
										alt="Certification of Mikael"
										width={200}
										height={200}
										className="w-full h-full relative !z-[1]"
									/>
									<Meteors number={20} />
								</div>
							</div>

							<div className=" w-full relative max-w-full">
								<div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
								<div className="relative shadow-xl bg-black/70 border border-gray-500/50  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
									<div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="currentColor"
											className="h-2 w-2 text-gray-300"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
											/>
										</svg>
									</div>

									<h1 className="font-bold text-xl text-white mb-4 relative z-50">Recloud Indonesia 2021</h1>

									<Image
										src={"/certif/recloud.png"}
										alt="Certification of Mikael"
										width={200}
										height={200}
										className="w-full h-full relative !z-[1]"
									/>
									<Meteors number={20} />
								</div>
							</div>
						</div>
						<h2 className={`${H2.className} text-2xl mt-10`}>My Interest 🌟</h2>
						<h2 className={`${H2.className} text-2xl mt-10`}>Academic Qualification 🌟</h2>
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
