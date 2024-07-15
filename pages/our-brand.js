import CarouselImg from "../components/carousel-image";
import OurBrandContainer from "../components/Our Brand/our-brand-container";
import { getSquareData, getSquareTitle } from "../services/square.service";
import Head from "next/head";

export default function OurBrand() {
	const { Brand, OurServices } = getSquareData();

	let keywords = [];
	OurServices?.forEach((service) => {
		keywords.push(`${service.title}, ${service.sub_title}`);
	});

	return (
		<>
			<Head>
				<title>{`${Brand[0]?.title} | ${getSquareTitle()}`}</title>
				<meta name="description" content={Brand[0]?.description} />
				<meta name="keywords" />
				<meta
					property="og:title"
					content={`${Brand[0]?.title} | ${getSquareTitle()}`}
				/>
				<meta
					property="og:description"
					content={keywords.join(", ").concat(Brand[0]?.key_words)}
				/>
			</Head>
			<div
				id="carousel"
				className="landscape-carousel  gloabel-carousel-holder animate__animated animate__fadeInRight "
			>
				<CarouselImg images={Brand[0]?.images || []} />
			</div>
			<div
				className="end-section animate__animated animate__fadeIn  "
				id="animation-section"
			>
				<OurBrandContainer />
			</div>
		</>
	);
}
