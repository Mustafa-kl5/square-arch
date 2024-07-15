import "../styles/globals.css";
import "../styles/projects/project-card.css";
import "animate.css";
import "./styles/main-start.css";
import "./styles/main.css";
import "./styles/footer.css";
import "./styles/footer.css";
import "./styles/footer.css";
import "./styles/header.css";
import "./styles/footer.css";
import "swiper/css/grid";
import "./styles/menu.css";
import "./styles/loading.css";
import "./styles/contact.css";
import "./styles/footer.css";
import "../styles/projects/project-container.css";
import "../styles/our-team/team-card.css";
import "../styles/our-team/team-project.css";
import "swiper/css/bundle";
import "swiper/css";
import "../styles/carousel-image.css";
import "../styles/contact/contact-container.css";
import "../styles/contact/contact-social.css";
import "../styles/contact/contact-information.css";
import "../styles/our-brand/our-brand-container.css";
import "../styles/projects/project-name.css";
import "../styles/scroller-text.css";
import "../styles/our-brand/services.css";
import "../styles/our-team/specialisms.css";
import "../styles/projects/project-information.css";
import "../styles/our-team/our-team.css";
import "../styles/our-brand/our-brand.css";
import "../styles/projects/our-project.css";
import "../styles/projects/project-info.css";
import "../styles/next-button.css";
import Header from "../shared/header";
import Footer from "../shared/footer";
import Menu from "../shared/menu";
import "bootstrap/dist/css/bootstrap.min.css";
import {
	setSquareData,
	setBASEURL,
	getBASEURL,
} from "../services/square.service";
import axios from "axios";
import Head from "next/head";
import SSRProvider from "react-bootstrap/SSRProvider";
function MyApp({ Component, pageProps, data }) {
	setSquareData(data);

	return (
		<SSRProvider>
			<Head>
				<meta name="color-scheme" content="light dark" />
				<meta
					name="viewport"
					content="viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
				/>
				<link
					rel="shortcut icon"
					href={data.Main[0].browser_icon_tab}
				/>
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://sq-a.com/" />

				<meta name="author" content="Nabil shehada" />
			</Head>
			<div className="overflow-hidden w-100 h-100 position-relative">
				<div
					id="backdrop"
					className=" w-100 position-fixed backdrop d-none"
				></div>
				<Header />
				<div className="global-menu-position ">
					<Menu />
				</div>
				<Component {...pageProps} />
				<Footer />
			</div>
		</SSRProvider>
	);
}
MyApp.getInitialProps = async ({ Component, ctx }) => {
	let data = {};
	let pageProps = {};

	if (Component.getInitialProps) {
		console.log('fff');
		pageProps = await Component.getInitialProps(ctx);
	}
	//if(process.env.BASE_URL)
	//	setBASEURL(process.env.BASE_URL)

	//try to change it
	const res = await axios.get(`${"https://be.sq-a.com"}/api/v1/all/data`);
	data = res.data;

	return {
		data,
		pageProps,
	};
};


export default MyApp;
