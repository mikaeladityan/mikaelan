import { Plus_Jakarta_Sans } from "next/font/google";
import Tech from "../elements/Tech";
import TechEcommerceHokky from "../elements/Tech/ecommerce-hokky";
import TechERPHokky from "../elements/Tech/erp-hokky";
import TechZuzuki from "../elements/Tech/suzuki";
import Card from "../fragments/Card";

const H2 = Plus_Jakarta_Sans({ weight: "600", display: "swap", subsets: ["latin"] });

const Project = () => {
	return (
		<section
			id="projects"
			className="w-10/12 mx-auto my-20"
		>
			<div className="text-center">
				<h2 className={`${H2.className} text-4xl md:text-7xl`}>Recently Projects </h2>
				<h5 className="text-base md:text-xl mt-5">
					<i className="me-3">
						{'" '}There is always one more bug to fix{' "'}
					</i>
					– <span className="font-semibold">Ellen Ullman</span>
				</h5>
			</div>

			{/* Content */}
			<div className="grid grid-cols-1 md:grid-cols-2">
				<Card
					title="Suzuki UMC Jawa Timur"
					text={`A landing page for company with content management system to manage web content`}
					image="/portfolio/suzuki.png"
					route="https://suzukijatim.my.id/"
					tech={<TechZuzuki />}
					time="June 2024"
					key={1}
				/>
				<Card
					title="Hokky Sumber Makmur"
					text={`Company profile website for introduce this company to new users`}
					image="/portfolio/hokky-kontraktor.png"
					route="https://www.hokkysumbermakmur.com/"
					tech={<TechZuzuki />}
					time="March 2024"
					key={2}
				/>
				<Card
					title="Hokky Bangunan HRIS - Mobile"
					text={`Human Resource Information System for management Human Resources in company - Mobile`}
					image="/portfolio/hris-hokky.png"
					route="https://erp.hokkybangunan.co.id/mobile/staff-absen"
					tech={<TechERPHokky />}
					time="Febuary 2024"
					key={3}
				/>

				<Card
					title="Hokky Bangunan Erp"
					text={`Enterprise Resource Planning system for supporting any jobdesk in company`}
					image="/portfolio/erp-hokky.png"
					route="https://erp.hokkybangunan.co.id/"
					tech={<TechERPHokky />}
					time="November 2023"
					key={4}
				/>
				<Card
					title="Hokky Bangunan Ecommerce"
					text={`Ecommerce website for showing the products and create transaction system`}
					image="/portfolio/ecommerce-hokky.png"
					route="https://www.hokkybangunan.co.id/"
					tech={<TechEcommerceHokky />}
					time="August 2023"
					key={5}
				/>
				<Card
					title="Jaring.id - Bunga Rafflesia"
					text={`Website interactive for Bunga Rafflesia with Jaring.id`}
					image="/portfolio/jaring.png"
					route="https://jaring.id/interaktif/bungarafflesia/"
					tech={<Tech />}
					time="November 2021"
					key={6}
				/>

				<Card
					title="Garda Animalia - Tessonilo"
					text={`Website interactive for Taman Nasional Tessonilo with Garda Animalia`}
					image="/portfolio/tessonilo.png"
					route="https://tessonilo.gardaanimalia.com/"
					tech={<Tech />}
					time="March 2021"
					key={7}
				/>
			</div>
		</section>
	);
};

export default Project;
