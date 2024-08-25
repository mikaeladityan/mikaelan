import Image from "next/image";
import ShammerButton from "../elements/Button/shammer";
import Skills from "./Skills";
const AboutSection = () => {
	const title = "About";
	const titles = [];
	for (let i = 0; i < 5; i++) {
		titles.push(`${title}`);
	}
	return (
		<div
			id="about"
			className="pb-20 relative overflow-x-hidden"
		>
			<h2 className="sr-only">About</h2>
			<div className="flex items-center justify-center gap-5 uppercase text-5xl md:text-9xl font-black relative left-36">
				{titles.map((t, index) => (
					<p key={index}>{t}</p>
				))}
			</div>
			<div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-3 group">
				<Image
					src={"/images/img_01.jpg"}
					alt="First Photo of Mikael Aditya Nugroho"
					width={200}
					height={200}
					className="w-8/12 mx-auto grayscale group-hover:grayscale-0 -rotate-12 group-hover:scale-90 transition-all ease-in-out duration-300 rounded-3xl group-hover:rotate-0"
				/>

				<div>
					<Skills />

					<ShammerButton />
				</div>
			</div>
		</div>
	);
};

export default AboutSection;
