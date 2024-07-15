import PersonInfo from "../../../../components/our-teams/person-info";
import CarouselImg from "../../../../components/carousel-image";
import { useRouter } from "next/router";
import {
    getSquareData,
    getSquareTitle,
} from "../../../../services/square.service";
import Head from "next/head";

export default function TeamInformation() {
    const { TeamMember: teamMembers } = getSquareData();
    const router = useRouter();
    const { team: id } = router.query;
    const team = teamMembers.find((item) => item.id == id);
	if(!team) {
		setTimeout(() => router.push('/main', '/main', {shallow: true}), 0)
		return;
	}
    return (
        <>
            <Head>
                <title>{`${team?.name} | ${getSquareTitle()}`}</title>
                <meta name="description" content={team?.description} />
                <meta name="keywords" content={team?.key_words} />
				<meta property="og:title" content={`${team?.name} | ${getSquareTitle()}`} />
  				<meta property="og:description" content={team?.description} />
            </Head>
            <div
                id="carousel"
                className="landscape-carousel gloabel-carousel-holder animate__animated animate__fadeInRight "
            >
                <CarouselImg images={team?.images} />
            </div>
            <div
                className="end-section animate__animated animate__fadeIn  "
                id="animation-section"
            >
                <PersonInfo team={team} />
            </div>
        </>
    );
}
