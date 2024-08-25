import { IconArrowBarLeft } from "@tabler/icons-react";
import Link from "next/link";

const AboutPage = () => {
	return (
		<div className="w-full h-[40rem] flex items-center justify-center">
			<div>
				<h1 className="text-center">{"I'm"} so sorry This Page is Updating...</h1>
				<Link
					href={"/"}
					className="flex items-center justify-start gap-1"
				>
					{" "}
					<IconArrowBarLeft />
					{" Back"}
				</Link>
			</div>
		</div>
	);
};

export default AboutPage;
