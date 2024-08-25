import { FlipWords } from "../ui/flip-words";
import { Plus_Jakarta_Sans } from "next/font/google";
import Button from "../elements/Button";
import ButtonLink from "../elements/Button/link";
import { IconCode, IconUserScan } from "@tabler/icons-react";

const H1 = Plus_Jakarta_Sans({ weight: "600", display: "swap", subsets: ["latin"] });
const Header = () => {
	return (
		<header className="relative w-11/12 md:w-5/12 mx-auto h-screen flex items-center justify-center">
			<div>
				<h1 className="uppercase font-semibold">Mikael Aditya Nugroho</h1>
				<h1 className={`${H1.className} text-white/80 text-4xl`}>
					Hi, Mike is Here <br />
					<FlipWords
						words={["Backend Developer", "Frontend Developer", "Fullstack Developer"]}
						duration={1500}
						className={`${H1.className} text-white text-4xl -ms-2`}
					></FlipWords>
				</h1>
				<p className="mt-3 text-white/80">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque optio dolor minus quam ipsa sint cupiditate,
					consectetur dignissimos, ut explicabo dolore esse recusandae id vitae nobis officiis sunt! Ex, porro.
				</p>
				<div className="flex w-6/12 items-center justify-start gap-5 mt-3">
					<Button route="/#about">
						<IconUserScan
							stroke={2}
							size={18}
						/>{" "}
						Tentang Saya
					</Button>
					<ButtonLink route="">
						Yang Saya Kerjakan{" "}
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
