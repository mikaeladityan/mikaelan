import Link from "next/link";

const ShammerButton = () => {
	return (
		// Button code

		// Button code
		<Link
			href={"/about"}
			className="inline-flex h-10 animate-shimmer items-center justify-center rounded-xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 shadow-white/60 shadow float-right md:float-left"
		>
			Read More
		</Link>
	);
};

export default ShammerButton;
