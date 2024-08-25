import Card from "../fragments/Card";

const Project = () => {
	return (
		<section
			id="projects"
			className="w-10/12 mx-auto my-20"
		>
			<div className="text-center">
				<h2 className="text-8xl">Recently Projects </h2>
				<h5 className="text-xl mt-5">
					<i className="me-3">
						{'" '}There is always one more bug to fix{' "'}
					</i>
					– <span className="font-semibold">Ellen Ullman</span>
				</h5>
			</div>

			{/* Content */}
			<div className="grid grid-cols-2">
				<Card />
				<Card />
			</div>
		</section>
	);
};

export default Project;
