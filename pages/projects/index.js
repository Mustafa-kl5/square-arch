import CardsContainer from "../../components/projects/cards-container";
import OurProject from "../../components/projects/our-project";
import { getSquareData, getSquareTitle } from "../../services/square.service";
import Head from "next/head";

export default function Projects() {
	const { ProjectOverview } = getSquareData();

	return (
		<>
			<Head>
				<title>{`${
					ProjectOverview[0]?.title
				} | ${getSquareTitle()}`}</title>
				<meta
					name="description"
					content={`${ProjectOverview[0]?.sub_description} ${ProjectOverview[0]?.description}`}
				/>
				<meta name="keywords" content={ProjectOverview[0]?.key_words} />
				<meta
					property="og:title"
					content={`${
						ProjectOverview[0]?.title
					} | ${getSquareTitle()}`}
				/>
				<meta
					property="og:description"
					content={`${ProjectOverview[0]?.sub_description} ${ProjectOverview[0]?.description}`}
				/>
			</Head>
			<div className="project-page">
				<div
					className="global-card-holder animate__animated animate__fadeInRight "
					id="carousel"
				>
					<CardsContainer />
				</div>
				<div
					className={"our-end-section animate__animated animate__fadeIn " + (ProjectOverview[0].show ? '' : 'd-none')}
					id="animation-section"
				>
					<OurProject />
				</div>
			</div>
		</>
	);
}


