import CarouselImg from "../../../../components/carousel-image";
import ProjectContainer from "../../../../components/projects/project-container";
import {
    getSquareData,
    getSquareTitle,
} from "../../../../services/square.service";
import { useRouter } from "next/router";
import Head from "next/head";

export default function ProjectInformation() {
    const { Project: projects } = getSquareData();
    const router = useRouter();
    const { project: id } = router.query;
    const project = projects.find((item) => item.id == id);
	if(!project) {
		setTimeout(() => router.push('/main', '/main', {shallow: true}), 0)
		return;
	}
    return (
        <>
            <Head>
                <title>{`${project?.title} | ${getSquareTitle()}`}</title>
                <meta name="description" content={project?.description} />
                <meta name="keywords" content={project?.key_words} />
				<meta property="og:title" content={`${project?.title} | ${getSquareTitle()}`} />
  				<meta property="og:description" content={project?.description} />
            </Head>
            <div
                id="carousel"
                className=" landscape-carousel gloabel-carousel-holder animate__animated animate__fadeInRight "
            >
                <CarouselImg images={project?.images || []} />
            </div>
            <div
                className="end-section animate__animated animate__fadeIn  "
                id="animation-section"
            >
                <ProjectContainer project={project} />
            </div>
        </>
    );
}
