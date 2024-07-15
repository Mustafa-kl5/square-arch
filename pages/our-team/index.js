import TeamCardContainer from "../../components/our-teams/team-card-container";
import { getSquareData, getSquareTitle } from "../../services/square.service";
import OurTeam from "../../components/our-teams/our-team";
import Head from "next/head";

export default function TeamProject() {
    const { TeamOverview } = getSquareData();

    return (
        <>
            <Head>
                <title>{`${
                    TeamOverview[0]?.title
                } | ${getSquareTitle()}`}</title>
                <meta
                    name="description"
                    content={`${TeamOverview[0]?.sub_description} ${TeamOverview[0]?.description}`}
                />
                <meta name="keywords" content={TeamOverview[0]?.key_words} />
				<meta property="og:title" content={`${
                    TeamOverview[0]?.title
                } | ${getSquareTitle()}`} />
  				<meta property="og:description" content={TeamOverview[0]?.key_words} />
            </Head>
            <div
                id="carousel"
                className="animate__animated animate__fadeInRight w-100 h-100 position-relative"
            >
                <TeamCardContainer />
            </div>

            <div
                className={"our-end-section animate__animated animate__fadeIn " + (TeamOverview[0].show ? '' : 'd-none')}
                id="animation-section"
            >
                <OurTeam />
            </div>
        </>
    );
}
