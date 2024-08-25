"use client";
import ButtonLink from "@/components/elements/Button/link";
import { IconMessage2, IconPlugConnected, IconUserCode } from "@tabler/icons-react";

const NavLink = () => {
	return (
		<div className="hidden md:flex items-center justify-center gap-5">
			<ButtonLink route="/#about">
				<IconUserCode
					size={18}
					stroke={2.5}
				/>{" "}
				About Me
			</ButtonLink>

			<ButtonLink route={"/#projects"}>
				<IconMessage2
					size={18}
					stroke={2.5}
				/>{" "}
				Projects
			</ButtonLink>

			<ButtonLink route={"/#footer"}>
				<IconPlugConnected
					size={18}
					stroke={2.5}
				/>{" "}
				Contact
			</ButtonLink>
		</div>
	);
};

export default NavLink;
