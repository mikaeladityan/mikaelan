import { IconBrandWhatsapp, IconTriangle } from "@tabler/icons-react";
import { Plus_Jakarta_Sans } from "next/font/google";
import NavLink from "../fragments/Navlink";
import Button from "../elements/Button";

const H1 = Plus_Jakarta_Sans({ weight: "800", subsets: ["latin"], display: "swap" });

const Navbar = () => {
	return (
		<header className="w-8/12 max-w-full mx-auto py-5">
			<nav className="flex items-center justify-between">
				<h1 className={`${H1.className} text-2xl flex items-center justify-start`}>
					M
					<IconTriangle
						size={23}
						stroke={4.5}
					/>
					N
				</h1>

				<NavLink />

				<Button route="https://wa.me/6285608580054">
					<IconBrandWhatsapp
						size={18}
						stroke={2.3}
					/>{" "}
					Contact Me
				</Button>
			</nav>
		</header>
	);
};

export default Navbar;
