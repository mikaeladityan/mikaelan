import { FlipWords } from "../ui/flip-words";
import { Plus_Jakarta_Sans } from "next/font/google";
import Button from "../elements/Button";
import ButtonLink from "../elements/Button/link";
import { IconCode, IconUserScan } from "@tabler/icons-react";

const H1 = Plus_Jakarta_Sans({ weight: "600", display: "swap", subsets: ["latin"] });
const Header = () => {
	return (
		<header className="relative w-11/12 md:w-8/12 mx-auto h-screen flex items-center justify-center">
			<div>
				<h1 className="uppercase font-semibold">Mikael Aditya Nugroho</h1>
				<h1 className={`${H1.className} text-white/80 text-4xl`}>
					Hi, Mike is Here <br />
					<FlipWords
						words={["Backend", "Frontend", "Fullstack"]}
						duration={1500}
						className={`${H1.className} text-white text-4xl -ms-2`}
					></FlipWords>
					Developer
				</h1>
				<p className="mt-3 text-white/80">
					Helo Everyone! I hope you have a good mood for today. <br />
					Welcome to my <i>Personal Website</i>, I will explain about me and who {"i'm"} in this site.
					<br />
					So please enjoy for the experience in my site
				</p>
				<div className="flex w-full items-center justify-start gap-5 mt-3">
					<Button route="/#about">
						<IconUserScan
							stroke={2}
							size={18}
						/>{" "}
						About Me
					</Button>
					<ButtonLink route="">
						My Owned Projects{" "}
						<IconCode
							size={18}
							stroke={2}
						/>
					</ButtonLink>
				</div>
			</div>
		</header>
	);
};

export default Header;
