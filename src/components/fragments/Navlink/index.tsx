import Button from "@/components/elements/Button";
import ButtonLink from "@/components/elements/Button/link";
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandWhatsapp } from "@tabler/icons-react";

const NavLink = () => {
	return (
		<div className="flex items-center justify-end gap-5">
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

			<Button route="https://wa.me/6285608580054">
				<IconBrandWhatsapp
					size={18}
					stroke={2.3}
				/>{" "}
				Contact Me
			</Button>
		</div>
	);
};

export default NavLink;
