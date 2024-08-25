import { IconTriangle } from "@tabler/icons-react";
import { Plus_Jakarta_Sans } from "next/font/google";
import NavLink from "../fragments/Navlink";

const H1 = Plus_Jakarta_Sans({ weight: "800", subsets: ["latin"], display: "swap" });

const Navbar = () => {
	return (
		<header className="w-10/12 max-w-full mx-auto p-3">
			<nav className="flex items-center justify-between">
				<h1 className={`${H1.className} flex items-center justify-start`}>
					M
					<IconTriangle
						size={14}
						stroke={4.5}
					/>
					N
				</h1>

				<NavLink />
			</nav>
		</header>
	);
};

export default Navbar;
