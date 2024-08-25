import ButtonLink from "@/components/elements/Button/link";
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react";

const NavLink = () => {
	return (
		<div className="flex items-center justify-center gap-5">
			<ButtonLink route="https://instagram.com">
				<IconBrandInstagram
					size={18}
					stroke={2.5}
				/>{" "}
				Instagram
			</ButtonLink>

			<ButtonLink route={"https://facebook.com"}>
				<IconBrandLinkedin
					size={18}
					stroke={2.5}
				/>{" "}
				Linkedin
			</ButtonLink>

			<ButtonLink route={"https://facebook.com"}>
				<IconBrandGithub
					size={18}
					stroke={2.5}
				/>{" "}
				Github
			</ButtonLink>
		</div>
	);
};

export default NavLink;
