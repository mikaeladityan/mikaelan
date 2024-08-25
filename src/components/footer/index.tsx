import { cn } from "@/lib/utils";
import { Boxes } from "../ui/background-boxes";
import { Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";

const H2 = Plus_Jakarta_Sans({ weight: "800", display: "swap", subsets: ["latin"], style: "italic" });

const Footer = () => {
	return (
		<div className="h-96 relative w-full overflow-hidden bg-black flex flex-col items-center justify-center rounded-lg">
			<div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

			<Boxes />
			<h2 className={cn(`text-xl md:text-4xl text-white relative z-20 uppercase ${H2.className}`)}>
				I Was <span className="font-serif">Created</span> To Create
			</h2>
			<p className="text-center mt-2 text-neutral-300 relative z-20">
				You must to contact me, if you think I{"'"}m a good boy 😁
			</p>

			<div className="absolute w-11/12 mx-auto  bottom-10">
				<div className="flex items-center justify-between">
					<p className="text-white">Copyright &copy; 2024</p>
					<div className="flex items-center justify-end gap-4">
						<Link
							href=""
							className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
						>
							<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
							<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-1 text-sm font-medium text-white backdrop-blur-3xl">
								Border Magic
							</span>
						</Link>
						<Link
							href=""
							className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
						>
							<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
							<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-1 text-sm font-medium text-white backdrop-blur-3xl">
								Border Magic
							</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
