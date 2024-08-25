import Tech from "@/components/elements/Tech";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import Link from "next/link";

export default function Card() {
	return (
		<CardContainer className="inter-var">
			<CardBody className="bg-white relative group/card border-black/[0.1] w-auto h-auto rounded-3xl p-6 border ">
				<CardItem
					translateZ="50"
					className="text-xl font-bold text-black"
				>
					Make things float in air
				</CardItem>
				<CardItem
					as="p"
					translateZ="60"
					className="text-neutral-500 text-sm max-w-sm mt-2"
				>
					Hover over this card to unleash the power of CSS perspective
				</CardItem>
				<CardItem
					translateZ="100"
					className="w-full mt-4"
				>
					<Image
						src={"/images/img_01.jpg"}
						height="1000"
						width="1000"
						className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
						alt="thumbnail"
					/>
				</CardItem>
				<div className="flex justify-between items-center mt-20">
					<CardItem
						translateZ={20}
						as={Link}
						href="https://twitter.com/mannupaaji"
						target="__blank"
						className="px-4 py-2 rounded-xl text-xs font-normal text-black"
					>
						<Tech />
					</CardItem>
					<CardItem
						translateZ={20}
						as="button"
						className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
					>
						Live Preview →
					</CardItem>
				</div>
			</CardBody>
		</CardContainer>
	);
}
