import CarouselImg from "../components/carousel-image";
import ContactContainer from "../components/Contact/contact-container";
import { getSquareData, getSquareTitle } from "../services/square.service";
import Head from "next/head";

export default function Contact() {
    const { Contact } = getSquareData();
    return (
        <>
            <Head>
                <title>{`${Contact[0]?.title} | ${getSquareTitle()}`}</title>
                <meta name="keywords" content={Contact[0]?.key_words} />
				<meta property="og:title" content={`${Contact[0]?.title} | ${getSquareTitle()}`} />

            </Head>
            <div id="contact">
                <div
                    id="carousel"
                    className="landscape-carousel  gloabel-carousel-holder animate__animated animate__fadeInRight"
                >
                    <CarouselImg images={Contact[0]?.images || []} />
                </div>
                <div
                    id="animation-section"
                    className="contact-holder  animate__animated animate__fadeIn "
                >
                    <ContactContainer />
                </div>
            </div>
        </>
    );
}
