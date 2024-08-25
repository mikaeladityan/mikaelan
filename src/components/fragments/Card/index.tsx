import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { IconClockHour12 } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type CardProps = {
	title: string;
	text: string;
	time: string;
	image: string;
	tech: React.ReactNode;
	route: string;
};

export default function Card(props: CardProps) {
	const { title, text, time, image, tech, route } = props;
	return (
		<CardContainer className="inter-var">
			<CardBody className="bg-white relative group/card border-black/[0.1] w-auto h-auto rounded-3xl p-6 border ">
				<CardItem
					translateZ="50"
					className="text-xl font-bold text-black"
				>
					{title}
				</CardItem>
				<CardItem
					translateZ="60"
					className="text-neutral-500 text-sm max-w-sm mt-2"
				>
					<p>{text}</p>
					<small className="text-xs text-black flex items-center justify-start gap-1 mt-2">
						<IconClockHour12
							stroke={2}
							size={18}
						/>{" "}
						{time}
					</small>
				</CardItem>
				<CardItem
					translateZ="100"
					className="w-full mt-4"
				>
					<Image
						src={image}
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
						href="/"
						className="px-4 py-2 rounded-xl text-xs font-normal text-black"
					>
						{tech}
					</CardItem>
					<CardItem
						translateZ={20}
						as={Link}
						href={route}
						target="__blank"
						className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
					>
						Live Preview →
					</CardItem>
				</div>
			</CardBody>
		</CardContainer>
	);
}
