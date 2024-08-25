import { cn } from "@/lib/utils";
import { Boxes } from "../ui/background-boxes";
import { Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";
import { IconBrandGithub, IconBrandInstagram } from "@tabler/icons-react";

const H2 = Plus_Jakarta_Sans({ weight: "800", display: "swap", subsets: ["latin"], style: "italic" });

const Footer = () => {
	return (
		<footer
			id="footer"
			className="h-96 relative w-full overflow-hidden bg-black flex flex-col items-center justify-center rounded-lg"
		>
			<div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

			<Boxes />
			<h2 className={cn(`text-xl md:text-4xl text-white relative z-20 uppercase ${H2.className}`)}>
				I Was <span className="font-serif">Created</span> To Create
			</h2>
			<p className="text-center mt-2 text-neutral-300 relative z-20">
				If you think I{"'"}m a good boy. You must to{" "}
				<Link
					href={"https://wa.me/6285608580054"}
					className="font-bold text-cyan-500 underline"
				>
					contact me
				</Link>
				😁
			</p>

			<div className="absolute w-11/12 mx-auto  bottom-10">
				<div className="flex-1 md:flex items-center justify-between text-center">
					<p className="text-white mb-3 md:mb-0">Copyright &copy; 2024</p>
					<div className="flex items-center justify-center md:justify-end gap-4">
						<Link
							href="https://instagram.com/mikaeladityan"
							className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
						>
							<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
							<span className="inline-flex gap-1 h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-1 text-sm font-medium text-white backdrop-blur-3xl">
								<IconBrandInstagram
									stroke={2}
									size={20}
								/>
								Instagram
							</span>
						</Link>
						<Link
							href="https://github.com/mikaeladityan"
							className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
						>
							<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
							<span className="inline-flex h-full w-full gap-1 cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-1 text-sm font-medium text-white backdrop-blur-3xl">
								<IconBrandGithub
									stroke={2}
									size={20}
								/>
								Github
							</span>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
